---
title: "One SigNoz, Every Tenant: Tracing a Collection From Phone to Database"
description: How we instrument a multi-tenant lending platform — mobile spans relayed through the backend, server-stamped identity, W3C trace correlation, and telemetry that survives being offline.
date: 2026-09-14
author: Vasool Engineering
tags: [Engineering, Architecture]
keywords: opentelemetry multi tenant, signoz self hosted, distributed tracing go gin, react native opentelemetry, otlp mobile telemetry
---

A collector in a village taps **Record Payment**. Somewhere between that tap and a row landing in a Postgres database, there are a dozen places the ₹2,000 can get stuck: the device had no signal, the token expired, a permission check said no, an approval workflow intercepted the write, a query took four seconds because an index was missing on that tenant's database.

When the owner calls and says *"payments aren't saving"*, we need to know **which** of those it was — for that tenant, on that phone, at that minute. That's what our observability stack is for. Here's what we collect, and the decisions that shaped it.

## The constraint: one observability stack, many isolated tenants

Vasool's [multi-tenant architecture](/blog/multi-tenant-architecture-one-database-per-tenant) gives every lending company its own container and its own database. Deliberately. That isolation is the whole point of the product's security model.

But it makes observability awkward. Running a monitoring stack per tenant means 24+ copies of ClickHouse — absurd for the volume involved. Running one shared stack means telemetry from every tenant lands in the same place, and now the isolation you carefully built in the data layer has to be re-established in the query layer.

We chose one shared SigNoz, and made **`tenant.id` a resource attribute on every single span and log record**. Not a tag someone remembers to add — a property of the emitter itself, set once at startup:

```go
resAttrs := []attribute.KeyValue{semconv.ServiceNameKey.String(serviceName)}
if tenantID != "" {
    resAttrs = append(resAttrs, attribute.String("tenant.id", tenantID))
}
```

Everything downstream follows from that one attribute. Our dashboards come in pairs: a **per-tenant** view with a `tenant` dropdown variable — one dashboard covering every tenant, rather than 24 near-identical copies drifting apart — and a **fleet** view with no tenant filter at all, plus "by Tenant" breakdown tables that answer the question you actually ask at 9am: *who is driving the errors right now?*

## The mobile app never talks to the collector directly

This is the decision we'd defend hardest.

The obvious design is to point the React Native app's OTLP exporter straight at the collector endpoint. It's one config line, and it's what every tutorial shows. We don't do it, for a reason that has nothing to do with performance.

**Attributes set by a client are claims, not facts.** An app that exports its own telemetry decides what `tenant.id` it writes. A modified build — or just a bug — can stamp someone else's tenant ID onto its spans, and now one lender's traces are polluting another's dashboard in a system whose entire premise is that tenants can't see each other.

So the app posts its OTLP batches to its **own tenant's backend**, which decodes the payload, overwrites the identity attributes with values taken from the verified JWT, and re-encodes it before forwarding:

```go
// mergeAttrs returns a new slice containing existing attrs minus any keys in
// stamped, then stamped appended. This guarantees stamped values win.
```

The stamped set is small and entirely server-derived: `tenant.id` from the container's own environment, `user.id` / `user.type` from the token, plus app version and platform. A client can send whatever it likes — it gets overwritten on the way through. The forwarder also caps bodies at 256KB, because a mobile client sending more than that is misuse, not telemetry.

There's a second benefit that mattered more than we expected: the app only ever needs to know **one** hostname, its own API. No separate collector endpoint to configure per tenant, no second TLS origin, no CORS.

## Correlation: the traceparent header earns its keep

Relaying mobile spans gets them into the same system as backend spans. It doesn't put them in the same *trace* — and without that, a slow API call shows up twice, unrelated: once as "the app waited 4.2s" and once as "the server was fine."

The client span's W3C context therefore rides along on the request itself:

```ts
const span = TelemetryService.startSpan({
    name: `HTTP ${method} ${endpoint}`,
    kind: 'CLIENT',
    attributes: { 'http.method': method, 'http.url': url, 'http.target': endpoint },
});
// ...forwarded as: { traceparent: span.traceparent }
```

and the Gin middleware extracts it before starting the server span:

```go
parentCtx := otel.GetTextMapPropagator().Extract(
    c.Request.Context(),
    propagation.HeaderCarrier(c.Request.Header),
)
ctx, span := tracer.Start(parentCtx, c.Request.Method+" "+c.FullPath(),
    trace.WithSpanKind(trace.SpanKindServer))
```

One trace now spans the device and the server. Click a slow call in the fleet dashboard, choose **View Trace Details**, and the waterfall shows the mobile client span, the backend HTTP span, the permission check, the handler, and each SQL query underneath it. The four seconds are attributable to a layer instead of a vibe.

Older app builds — and requests made while telemetry is off — simply produce standalone mobile traces. Degrading, not breaking, is the requirement: telemetry is diagnostic, so it must never be load-bearing.

## Spans are layered, because "slow" is not a diagnosis

Knowing an endpoint took four seconds tells you nothing actionable. We emit nested spans per layer so the waterfall localises the cost:

| Span | Emitted by | Answers |
|---|---|---|
| `GET /api/loans/daily/` | Gin middleware | How long did the whole request take, and what status? |
| `auth.permission_check` | Auth middleware | Was time lost resolving roles and row scoping? |
| `handler.GetDailyLoans` | Handler middleware | Handler work vs. framework overhead |
| SQL client spans | GORM plugin | Which query, and how many of them? |

The last row is usually the answer. A screen that got slow for one tenant and nobody else is almost always a query whose plan changed as that tenant's data grew — and an N+1 that's invisible in a log file is unmissable as forty sibling spans in a waterfall.

## Logs go through the same pipe — with one bruise

Traces tell you the shape of a request. Logs tell you what the code *thought* it was doing. Splitting them across two systems means correlating by hand at exactly the moment you're least patient, so our backend logger ships to the same collector: a logrus hook that buffers entries in memory and flushes every five seconds or every hundred records, on a background goroutine so no request ever blocks on a telemetry round-trip.

The bruise is documented in the code, because it cost real hours:

```go
// The SigNoz OTel collector's custom OTLP receiver returns 404 for protobuf
// payloads on /v1/logs but accepts standard OTLP JSON — confirmed by curl tests.
```

A 404 from a collector reads like a wiring mistake, not a content-type mismatch. We had the endpoint right the whole time. Worth knowing if you're wiring your own.

## The failures you most need to see happen offline

This one is specific to field software, and it's where naive telemetry quietly fails.

Vasool's app is built to [work without signal](/blog/how-we-replay-offline-collections-through-our-own-api). Which means the interesting bugs — the ones where a queued write didn't queue, where a feature flag hadn't propagated, where the outbox database wouldn't open on a fresh install — happen precisely when the device **cannot reach the collector**.

An exporter that drops spans on a failed flush deletes exactly the evidence you need. So ours re-buffers them, capped, and they ship when the device reconnects:

```ts
// ...which meant offline failures were invisible in
// [the dashboard]. Re-buffering means spans created while disconnected are
// sent once the device reconnects.
this.buffer = [...this.buffer, ...spans].slice(-MAX_BUFFER_CAP);
```

On top of that, the offline write path emits deliberate **gate spans** — `offline_write_gate`, `offline_write_skip`, `offline_write_shimmed`, `offline_write_shim_error` — each carrying the feature flags as they were resolved at that instant. These aren't performance spans. They're assertions about control flow, and they answer a question support logs never could:

- No `offline_write_gate` span at all → the code never reached the offline path.
- A gate span with `offline_sync=false` → the tenant's config hadn't been applied on that device.
- `offline_write_skip` with `reason: feature_gate` → the flag was deliberately off.
- `offline_write_shim_error` → the shim threw, and here's the exception that was being swallowed.

"Payments aren't saving" becomes four distinguishable causes with different fixes. Instrumenting a decision, not just a duration, is the highest-value telemetry we've written.

## What we deliberately don't send

Here is the principle that governs all of the above, and it's worth stating plainly: **telemetry is a place data gets copied to.** Anything attached to a span has left the tenant's isolated Postgres and entered a shared store with a different access model. "What do we attach to spans" is therefore a data-protection decision, not a debugging convenience — and it has to be enforced by code, because the convenient thing and the correct thing point in opposite directions at 2am.

Attaching a request body to a span is genuinely useful; a rejected loan creation is far easier to diagnose when you can see what was actually posted. It's also how Aadhaar numbers, PAN numbers, and login passwords end up somewhere they were never meant to be. So bodies are captured through a redactor that walks the decoded JSON and replaces sensitive values by key — **at any depth**:

```go
case map[string]any:
    out := make(map[string]any, len(t))
    for k, val := range t {
        if isSensitiveKey(k) {
            out[k] = redactedMarker
            continue
        }
        out[k] = redactValue(val)
    }
```

Depth is not a detail. An offline sync upload is a *batch of queued operations, each carrying the original request body* it would have posted online — so a create-customer op's Aadhaar number sits two levels down, inside `operations[i].body`. A top-level-only redactor would have exported every offline write untouched.

The key rules are matched on substrings rather than exact names, because the same datum wears many spellings across our models — `phone_number`, `customer_phone`, `buyer_phone`, `collector_phone`, `secondary_phone_number`. They're deliberately over-inclusive: a redacted field costs one support round-trip, an exported ID number costs considerably more. The rules also fold hyphens to underscores, so `X-Api-Key` as a header and `api_key` as a JSON field hit the same entry, and the same function redacts headers, query parameters (handlers accept a `token` query param) and bodies alike.

Three narrowings matter as much as the deny-list itself:

- **Only JSON bodies are read at all.** Multipart uploads — customer documents, payment-proof screenshots — are skipped before the body is touched. Buffering a multi-megabyte image to put a kilobyte of unreadable binary into a span was never a good trade.
- **Oversized bodies are recorded as a marker, not truncated.** Partial JSON can't be parsed, so it can't be redacted, so it isn't exported.
- **A body that claims to be JSON but doesn't parse is recorded by size only.** A malformed login payload is still a login payload.

And the constraint that outranks all of them: capturing must never alter what the handler receives. The buffered prefix is spliced back with a `MultiReader` on every path including the error path, and a test asserts the handler sees a byte-identical body. Observability that can damage a payment is not observability.

The mobile app is equally blunt — request headers and tokens are never logged even in development, and its debug log line is gated behind `__DEV__` so it can't reach a production build at all.

## Running it: SigNoz is not one container

A practical note, since the docs bury it. A self-hosted SigNoz install isn't a single image — it's a metadata Postgres, a ClickHouse node, a ClickHouse Keeper, an OTel collector, the query service and UI, and two one-shot init jobs.

We let SigNoz's own tooling own that entire stack, in its own directory, provisioned idempotently by CI on one designated primary server — and kept it **completely outside** the tenant deployment. Backends on the primary reach the collector over the internal Docker network; backends on every other server forward over a dedicated, IP-allowlisted subdomain.

The reason for the separation is a rule we'd apply anywhere: **the monitoring stack must not be able to break the thing it monitors.** Provisioning is best-effort and wrapped so a failure logs a warning and never blocks a tenant deploy. If observability goes down, lending keeps working. The inverse — a ClickHouse migration taking 24 lenders offline on a collection morning — is not a trade anyone would accept.

---

None of this is exotic. It's four habits: make identity a property of the emitter rather than a claim by the client, keep traces and logs in one correlated place, instrument decisions and not just durations, and make sure the telemetry can't take production with it.

If you run field collections and want software whose failures are explainable rather than mysterious, take a look at the [daily collection app](/daily-collection-app) or [talk to us](/pricing).
