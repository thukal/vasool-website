---
title: "Approval Workflows: Why We Replay the Original Request"
description: Maker-checker without a shadow schema. How Vasool parks the HTTP request itself for approval, then replays it through the same handler the staff member would have hit.
date: 2026-09-07
author: Vasool Engineering
tags: [Engineering, Architecture]
keywords: approval workflow, maker checker software, loan approval process, staff permissions, four eyes principle
---

An owner asked for something ordinary: their field staff should be able to *raise* a new loan, but not *commit* one. The manager sees it, approves it, and only then does it exist.

Maker-checker. Every finance company wants it eventually. The interesting part is what happens to your codebase when you build it.

## The shadow-schema trap

The instinctive design is a `pending_loans` table. Staff writes go there instead; the approve button copies the row across into `loans`.

Then the same is needed for customers. And expenses. Each one brings a table that mirrors the real one, and each mirror has to be maintained forever — every new column on `loans` needs the same column on `pending_loans`, or approving an old request quietly drops a field.

Worse, the copy step **skips your handler**. Every rule that lived in `CreateDailyLoan` — the validation, the permission check, the audit log entry, the balance arithmetic — either gets reimplemented inside the approve path or silently doesn't run. Six months later, the fastest way to write a row that breaks your own business rules is to route it through approval.

We'd already learned this lesson once, building [offline collections](/blog/how-we-replay-offline-collections-through-our-own-api): the moment you have a second way to write a row, you have a second, weaker copy of your entire API.

## Park the request, not the data

So we don't store a pending *loan*. We store the **pending HTTP request**.

When a staff member submits, a middleware sitting in front of the handler intercepts the call, buffers the body, and writes one row recording the `method`, the `path`, and the JSON payload. It returns **`202 Accepted`** and aborts the chain — the handler never runs, and nothing touches the loans table.

Approving is then just: **issue that request again.**

```go
inner, _ := http.NewRequestWithContext(ctx, req.Method, req.Path, bytes.NewReader(req.Payload))
auth.SetApprovalReplayHeader(inner, req.ID.String())

rec := httptest.NewRecorder()
h.engine.ServeHTTP(rec, inner)
```

That's the whole materialisation step. `httptest.NewRecorder()` is a testing tool used in production so we can invoke our own API without a network round-trip. The replayed call goes through the same router, the same middleware chain, the same handler, and the same audit logging that would have run had the request never been deferred.

> There is exactly one code path that creates a loan in Vasool. Approval changes *when* it runs and *who* authorised it — not *what* runs.

The row has no mirror table. There is nothing to keep in sync, because there is nothing duplicated.

## Two details that took real debugging

A replay is a request hitting the same middleware that intercepted the original, so the first thing needed is a **loop guard**. The approve endpoint sets an `X-Approval-Replay` header; the middleware sees it and lets the request through untouched. Without it, approving a request just files a fresh pending request forever. That header is set server-side only — a client can't usefully forge one, because it would need a matching approval row it never filed.

The second detail is subtler, and it's about **who the replayed request appears to come from**.

The approve call is made by a manager, so the replayed request carries the manager's token. But the handlers derive ownership from the caller — a created customer gets `assigned_staff_id` from whoever made the request. Replay it as the manager and the record is created under the manager's name, so the staff member who submitted it can't find their own approved work in their scoped list.

The fix is to attach the original requester's id to the replay and have the middleware swap the request's user context back. But only for **creates**:

- **`POST`** swaps the attribution, so the new row lands owned by the person who raised it.
- **`PUT` and `DELETE` don't.** The row already exists with the right assignment, and several of those handlers enforce admin-only rules — the staff-expense update endpoint rejects non-admins outright. Swapping the caller down to `STAFF` on an edit replay makes the handler return `403`, and the manager who just clicked approve is left staring at *"Approved with warning: HTTP 403"*.

That asymmetry looks arbitrary in the code until you've watched it fail.

## Off by default, twice over

An approval step inserted into daily collections is disruptive to a lender who never asked for it, so the feature is gated **twice**, and both gates are shut by default.

| Gate | Level | Default |
|---|---|---|
| `approval_workflow` feature flag | Per tenant | **Off** — the approval UI is hidden and the middleware short-circuits entirely |
| `approval_matrix` on each role | Per role | **Empty** — nothing requires approval until an owner ticks a box |

Even a tenant who switches the flag on sees **no change at all** until someone opts a specific role into a specific resource and action. Approval is wired today on customers, loans, and expenses — for create, edit, and delete — and each combination is opted in individually.

One implementation note for the Go readers. When the tenant flag is off, route registration passes a nil approval service to the middleware. A plain `svc == nil` check isn't enough: an interface holding a nil concrete pointer is **not** equal to nil, so that check passes and the next line dereferences it and panics. The guard uses reflection to catch typed-nil interfaces too. It's a small thing that would have taken down a container.

## Who is allowed to approve

Requests route to the submitting staff member's assigned approver. Beyond that:

- **Admins bypass approval on their own actions.** An owner shouldn't queue work for themselves.
- **Admins can approve anything**, as owner escalation, and see every pending row in the tenant.
- **Nobody approves their own request** — checked explicitly, even for an admin acting on a row they somehow filed.

And because the replay is a real HTTP call, it can fail like one — a validation error, a stale record, a permission rule that changed since the request was filed. The approve response carries the replay's status code and body back to the client, so a failed materialisation surfaces inline instead of leaving a row marked approved that never actually existed.

## The primitive, twice

What we find satisfying about this is that it's the **second** feature in Vasool built on the same idea. Offline sync replays queued mutations through the live router when the device reconnects. Approvals replay a deferred mutation through the live router when a manager signs off.

Two features, two very different user problems — one mechanism, and no second write path in either. Both are stored as *"a request that hasn't happened yet"*, and both materialise by simply letting it happen.

---

If you're building maker-checker into a system that already has a working API, the shortest path is usually not a new schema. It's finding a way to press pause on the request you already handle correctly.

See how [approvals and staff controls](/voice-approval-workflow) work in practice, or look at the wider [staff tools](/staff-tools) that sit around them. Ready to try it on your own book? [Talk to us about Vasool](/pricing).
