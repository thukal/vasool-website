---
title: "Why We Built Vasool's Backend in Go, Not Node.js"
description: The engineering case for Go over TypeScript on the server — deployment artefacts, per-tenant memory, money maths, and the places Go still hurts.
date: 2026-08-11
author: Vasool Engineering
tags: [Engineering, Architecture]
keywords: go vs node.js backend, golang fintech backend, why golang over typescript, go multi-tenant architecture
---

Every backend language debate eventually turns into a benchmark argument, which is the least interesting part of it. The reason **Vasool's backend is written in Go and not Node.js or TypeScript** has almost nothing to do with requests per second. It comes down to what we have to ship, how many copies of it run, and what happens when a number is wrong.

Here is the honest version of that decision, several years and roughly 140,000 lines of Go later.

## 1. The deployment shape decided it before the language did

Vasool doesn't run one big shared API. **Every tenant — every finance company on the platform — gets its own container and its own PostgreSQL database.** That isolation model (which we wrote up separately in [our multi-tenancy post](/blog/multi-tenant-architecture-one-database-per-tenant)) is non-negotiable for financial data, but it changes the economics of everything downstream.

When you run *N* copies of your API instead of one, per-process cost stops being an abstraction. Memory footprint, cold-start time, and image size all get multiplied by your tenant count, on servers you're paying for monthly.

Go's answer to that is boring and excellent: the build produces **one statically linked binary**.

```dockerfile
RUN CGO_ENABLED=0 GOOS=linux go build -a -o main ./cmd/main.go
```

That binary is the entire application. No runtime to install, no `node_modules` to hydrate, no package manager present in the production image, no lockfile resolution at deploy time. The runtime stage copies one file plus the migrations folder and starts it.

> Our production image is bigger than it needs to be — but it's Chromium for Tamil PDF rendering that makes it big, not the application. The app itself is a single file.

## 2. Concurrency you can read six months later

Field collection software is full of work that shouldn't block a response: generating a receipt PDF, pushing a WhatsApp reminder, exporting a report, flushing traces. In our backend there are 46 places that hand work off to a background goroutine.

In Go those are three characters — `go` and a function call — and the code inside them reads exactly like the synchronous code around it. There is no second, parallel dialect of the language for asynchronous work.

In Node, the same work is written in a different colour: every function that touches it becomes `async`, callers become `async`, and a single forgotten `await` turns a failed database write into an unhandled rejection that logs nothing useful and returns 200 to a field agent who now believes a payment was recorded. We have all shipped that bug. **In a collections app it is not a logging problem, it's a missing ₹5,000.**

## 3. Money is int64, and JavaScript doesn't have one

This is the argument that gets least airtime and matters most.

JavaScript has exactly one numeric type — an IEEE 754 double. That's fine until it isn't:

- Amounts held in paise, summed across a year of daily collections, drift in the last decimal.
- Any identifier above 2^53 silently loses precision when it round-trips through `JSON.parse`.
- There is no compiler stopping you from adding a value that came off the wire as a string to a value that came out of the database as a number.

TypeScript doesn't fix this. TypeScript's types are **erased at runtime** — they're a very good linter over the same single number type, and at the two boundaries that matter most in a financial system (the HTTP request body and the database row) they're gone.

Go gives us `int64`, `float64`, and explicit conversion between them, enforced by a compiler that will not build the binary if we get it wrong. For a system that reconciles daily, weekly, monthly, EMI, gold, and interest-only ledgers, that guarantee is worth more than any framework feature.

## 4. Fewer dependencies to babysit

Our backend's direct dependency list is short enough to read in one screen: Gin for HTTP, GORM for Postgres, `golang-jwt`, `viper`, `logrus`, OpenTelemetry, `testify`. Almost everything else comes from the standard library.

The reason that matters isn't purity — it's that we ship a financial product to regulated customers, and every transitive dependency is something we have to patch, audit, and explain. A smaller graph means fewer emergency upgrades and fewer surprises in a [security review](/security).

The toolchain being in the box helps too. Formatting (`gofmt`), static analysis (`go vet`), tests, and the race detector (`go test -race`) ship with the language. There is no config file arguing about them.

## 5. We didn't pick Go *over* TypeScript — we run both

This is the part most "X vs Y" posts leave out. **Vasool is a TypeScript shop on the client.** The mobile app is React Native with Expo, the web app is Next.js with React 19, and both share a typed package between them.

The split is deliberate, and it's along the line where each language is strongest:

| Layer | Language | Why |
|---|---|---|
| Tenant API, jobs, reports | Go | One binary per tenant, strict numeric types, cheap concurrency |
| Mobile app (field agents) | TypeScript / React Native | One codebase for Android and iOS, fast UI iteration |
| Web app (office staff) | TypeScript / Next.js | Server components, mature ecosystem |
| Contract between them | Generated | TypeScript types generated from the backend's Swagger spec |

That last row is the important one. The API types the app and web consume are **generated from the Go handlers' Swagger annotations**, so the server stays the single source of truth and the clients get their type safety without a hand-maintained schema drifting out of date.

## 6. Where Go actually hurts

An honest post needs this section.

- **It's verbose.** `if err != nil` is most of the diff in any Go pull request. You get used to it; you never love it.
- **Wiring is manual.** We construct every dependency by hand at startup rather than using a DI framework. It's explicit and greppable — and it's also a chore every time we add an entity, which we've done well over a hundred times.
- **ORM ergonomics lag.** GORM is good, but anyone coming from Prisma will miss the type-level query safety.
- **The talent pool is smaller** in our hiring market than the JavaScript one. That's a real cost, offset only by how quickly a competent engineer can become productive in a language this small.

None of those outweigh a single binary per tenant, a compiler that knows what an integer is, and concurrency you can still read after a year away from the file.

---

If you're evaluating lending software and you care what's under it — including running it on infrastructure you control — we're happy to go deeper. Start with [self-hosted Vasool](/self-hosted-loan-software) or just [talk to us](/pricing).
