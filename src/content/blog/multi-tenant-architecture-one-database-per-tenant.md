---
title: "Multi-Tenancy: Why Every Tenant Gets Its Own Database"
description: How Vasool isolates each finance company in its own container and PostgreSQL database — why we rejected shared tables with a tenant_id, and what that choice costs us.
date: 2026-08-14
author: Vasool Engineering
tags: [Engineering, Architecture]
keywords: multi-tenant architecture, database per tenant, row level security postgres, saas tenant isolation, fintech data isolation
---

Every SaaS platform picks a multi-tenancy model early, and then lives with it for years. Ours is the expensive one: **each tenant on Vasool runs in its own Docker container, talking to its own PostgreSQL database.** No shared tables. No `tenant_id` column. No row-level security policies.

We get asked why fairly often — usually by engineers who've been told the shared-table model is the obvious default. Here's the actual reasoning, and the bill that comes with it.

## The three options, honestly

| Model | Isolation | Cost | Failure mode |
|---|---|---|---|
| Shared tables + `tenant_id` | Logical only | Cheapest | One missing `WHERE` clause leaks another lender's book |
| Database per tenant | Strong | Moderate | Migrations and pooling get harder |
| Server per tenant | Total | Expensive | Unmanageable past a handful of tenants |

The middle row is where we landed, and the thing that pushed us there is the fourth column, not the second.

## Why we rejected shared tables with a tenant_id

The shared-table model is genuinely good engineering for most products. It's cheap, it scales operationally, and PostgreSQL's row-level security makes it far safer than a hand-written `WHERE tenant_id = ?` on every query.

But look at what it asks you to guarantee. **Every single query — including the one an engineer writes at 11pm to debug a report, including the raw SQL in a migration, including the analytics job nobody has touched in a year — must carry the tenant filter.** RLS narrows that surface but doesn't eliminate it: policies can be bypassed by a superuser role, forgotten on a new table, or defeated by a connection that never set the session variable.

Now weigh the consequence. Our tenants are money lenders, finance companies, and [NBFCs](/nbfc-loan-management). A cross-tenant leak means one lender sees another lender's borrowers, loan amounts, and collection history — competitors, frequently in the same district. There is no apology that fixes that, and no compliance story that survives it.

> A shared-table bug is a leak. A separate-database bug is an error. We would much rather debug an error.

In our model, the tenant's backend process holds credentials for exactly one database. If a query forgets a filter, the worst case is that a lender sees too much of *their own* data. **The cross-tenant failure isn't mitigated — it's unreachable.**

## What the architecture actually looks like

A tenant is a directory of configuration in our infrastructure repo:

```
infra/tenants/<slug>/config.json
```

That file holds the tenant's database name, JWT settings, storage limit, branding, target server, and feature flags. Secrets aren't in it — the config carries placeholders that are overridden by environment variables at deploy time.

From there, generation does the work:

1. A script reads every tenant directory and emits `docker-compose.generated.yml` and `Caddyfile.generated`.
2. Each tenant becomes one container running the **same backend image**, with `CLIENT_ID` set to its slug. That env var is the only thing that tells the process who it is.
3. **Caddy routes by subdomain** to the right container and terminates TLS automatically.
4. A shared PostgreSQL server hosts one database per tenant, created on container boot from a `POSTGRES_MULTIPLE_DATABASES` list.

Multi-server support falls out of the same design: each tenant config names its target server, and the generator filters by it. Moving a tenant to a different machine is a config change plus a database restore, not a migration project.

## The same binary, a different product

Because tenant behaviour is configuration rather than code, one image serves every lender. Feature flags in `config.json` decide which loan products exist:

```json
"features": {
  "daily_loan": true,
  "weekly_loan": true,
  "gold_loan": false,
  "agent_chit": true,
  "offline_sync": true
}
```

The important detail is *where* those flags are enforced. A disabled feature's routes are **never registered on the router at all** — a request to a flag-off endpoint returns `404`, not `403`. There's no handler sitting behind a permission check waiting to be reached by a bug. The [loan types](/loan-types) a tenant doesn't run simply don't exist in their API surface.

That's how one platform runs daily-finance lenders, weekly lenders, [kandhu vatti](/kandhu-vatti-app) books, gold lenders, and chit funds without any of them carrying the others' complexity.

## What it costs us

This is the section people skip, and it's the reason the model isn't free.

**Migrations run N times.** We're at 141 numbered migrations. Every one has to be applied to every tenant database, in order, with a rollback path — and a migration that succeeds on four databases and fails on the fifth leaves you with a fleet at two different schema versions. Our deploy tooling exists mostly to make this boring.

**Connection pools multiply.** Each container defaults to 20 open connections; the shared PostgreSQL server is configured for 400. That's a hard ceiling you can walk into by raising a per-container default without checking:

```
DATABASE_MAX_OPEN_CONNS × tenant count  ≤  postgres max_connections
```

Get it wrong and you get `SQLSTATE 53300` — *too many clients* — which looks like an application bug and isn't one. Pool sizing is now something we treat as fleet-level configuration, not per-service tuning.

**Onboarding is provisioning, not an INSERT.** Adding a tenant means creating a database, generating compose and proxy config, issuing certificates, and deploying a container. In a shared-table world it's one row. We've automated ours down to a config commit, but the work is still real.

**Per-container overhead is multiplied.** Every tenant carries its own process memory and connection pool. This is exactly why the backend is written in Go rather than Node — a single static binary keeps the per-tenant cost small enough that the isolation stays affordable. We wrote about that trade-off in [why we chose Go over Node.js](/blog/why-we-built-our-backend-in-go-not-node).

## When we'd tell you to do the opposite

If you're building a consumer product with a hundred thousand tenants, this model is wrong for you. Shared tables with RLS is the right answer, and the operational simplicity will save your team.

Database-per-tenant earns its cost under a specific set of conditions: a **modest number of high-value tenants**, **data whose exposure is unrecoverable**, and customers who ask — as ours do — *where exactly does my data live, and who else's data is next to it?*

For a lending platform, being able to answer that question with "in its own database, and nobody's" is worth every migration we run five times.

---

If data ownership is the question you're stuck on, we take it seriously enough to let you host the whole thing yourself. See [self-hosted Vasool](/self-hosted-loan-software), our [security posture](/security), or [talk to us](/pricing).
