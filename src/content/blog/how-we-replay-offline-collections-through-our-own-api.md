---
title: "How We Replay Offline Collections Through Our Own API"
description: Building offline-first field collections without a second, weaker write path — HTTP replay through the live router, idempotency keys, tombstones, and kill switches.
date: 2026-08-17
author: Vasool Engineering
tags: [Engineering, Architecture]
keywords: offline first mobile app, offline sync architecture, idempotent sync api, react native offline sync, field collection app offline
---

"Works offline" is easy to claim and hard to earn. The claim usually means the app doesn't crash without signal. What a field agent actually needs is stronger: **collect ten payments in a basement or on a rural route, come back online, and have exactly ten payments land — not nine, not eleven.**

Getting from the first to the second is where most offline implementations acquire their worst bugs. Here's how Vasool's [offline mode](/features) is built, and specifically the one design decision that removed a whole category of failures.

## The trap: a second write path

The obvious implementation is to give offline writes their own endpoint. The client queues up mutations, posts the batch to `/sync/upload`, and the server loops through them writing rows.

That endpoint is now a **second, weaker copy of your entire API.** Every rule enforced by the online path has to be re-implemented inside the sync loop:

- Does this staff member have permission to create a loan?
- Is this collection larger than the outstanding balance?
- Does this row need to go through the [approval workflow](/voice-approval-workflow) first?
- Did the audit log get written?

And they have to be re-implemented *correctly*, then kept in sync forever. Every new validation rule added to the online handler is a rule the offline path silently doesn't have. Six months later, the fastest way to bypass your authorization model is to go offline first.

## What we do instead: replay through the live router

Our sync upload doesn't write rows. **It re-dispatches each queued operation through the tenant's own Gin router**, in-process, as a real HTTP request — the same middleware chain, the same handler, the same validation, the same audit trail that would have run if the agent had been online.

The whole mechanism is about twenty lines:

```go
// ginExecutor wraps a *gin.Engine and satisfies service.RequestExecutor.
type ginExecutor struct {
	engine *gin.Engine
}

func (g *ginExecutor) Execute(method, path string, body []byte, headers map[string]string) (int, []byte, error) {
	req, err := http.NewRequest(method, path, bytes.NewReader(body))
	if err != nil {
		return 0, nil, err
	}
	for k, v := range headers {
		req.Header.Set(k, v)
	}
	rec := httptest.NewRecorder()
	g.engine.ServeHTTP(rec, req)
	respBody, _ := io.ReadAll(rec.Body)
	return rec.Code, respBody, nil
}
```

`httptest.NewRecorder()` is normally a testing tool. Used in production it gives us something valuable: a way to invoke our own API without a network round-trip, and therefore **no second implementation of anything**.

> There is exactly one code path that can create a collection in Vasool. Being offline changes *when* it runs, not *what* runs.

The service layer only knows a `RequestExecutor` interface, so it never imports Gin. The real engine gets attached at startup — and it must be attached **after every route is registered**, or the replay hits a half-built route table and returns 404 for anything registered later. That ordering constraint is documented in the code, because it's the kind of thing that breaks silently.

## Idempotency: the client owns the key

Networks fail mid-upload. A client that isn't sure whether its batch landed will retry, and a collections app that double-posts a ₹2,000 payment has done real damage to a real borrower's ledger.

So every queued operation carries a **`client_op_id` generated on the device**, with a unique index on it server-side. On upload:

- **New key** → replay the request, store the response.
- **Seen key** → return the stored response without touching the database.

The retry is safe by construction, and a rejected operation returns its cached rejection instead of being hammered against the endpoint every sync cycle.

## Deletes need tombstones

This is the bug that catches everyone.

Incremental sync works by asking "what changed since timestamp X?", which in practice means `WHERE updated_at > X`. A hard-deleted row has no `updated_at` to bump — it just isn't there. The delta query can't report it, the client never learns about it, and **the deleted record reappears on the next sync** looking perfectly legitimate.

Every offline `DELETE` replay therefore also writes a row to a `sync_deletions` table, and the delta response carries those IDs explicitly so the client can remove them locally. Deletion has to be a fact you record, not an absence you hope someone notices.

## Scoping and redaction stay on the server

The local mirror on the device is a SQLite copy of rows the signed-in user is allowed to see. Which rows those are is decided **entirely server-side**, by a manifest that declares, per table, the permission resource and the scoping strategy — plus columns that never leave the server at all:

```go
{name: "customers", resource: "customers", scope: scopeSelfCustomer,
	denyColumns: []string{"password"}},
{name: "staff", resource: "staff", scope: scopeNone,
	denyColumns: []string{"password"}, adminOnlyColumns: []string{"salary"}},
```

`denyColumns` never reach any client — password hashes don't belong in a phone's SQLite file. `adminOnlyColumns` withholds things like staff salary from staff-level callers while still sending it to an owner.

The rule this creates is blunt and important: **any new mirrored table needs an entry in that manifest, or it ships unscoped.** The customer-scope subquery is deliberately kept identical to the one the online repository uses, so a collector's offline view can't drift wider than their online view.

## Kill switches, because the client can't be rolled back

The mobile half of this ships partly as a sideloaded APK. If an offline bug reaches the field, we cannot pull an app release back in an afternoon.

So the feature is split into independent flags that a tenant's server can flip, taking effect on the next config fetch with **no app release at all**:

| Flag | Enables | Risk |
|---|---|---|
| `offline_reads` | Serving reads from the local mirror | Decides what numbers a collector sees |
| `offline_writes` | Queueing and replaying mutations | The only one that can lose or duplicate a real payment |
| `sync_centre` | The Sync Centre screen | Pure UI, safe to leave on |

They default to off, which means a tenant can get the mirror and the transport without any offline behaviour until we — and they — are ready. `offline_writes` is the last one we turn on and the first one we'd turn off.

One more detail that only shows up in production: tenants with offline mode get a **minimum eight-day authentication token**, because the client supports a seven-day offline grace window. A twenty-four-hour token would expire in an agent's pocket halfway through the week they most needed it.

---

None of this is exotic. It's mostly the discipline of refusing to write the same logic twice, and treating a deletion, a retry, and an expired token as first-class cases rather than edge cases.

If you run field collections where the signal doesn't, see how the [daily collection app](/daily-collection-app) behaves offline — or [talk to us](/pricing) about your routes.
