---
title: "Why We Moved to Razorpay"
description: A UPI-only payment rail works until a client abroad tries to pay you, or you want to stop chasing an invoice every month. How we swapped gateways without a cutover.
date: 2026-11-08
author: Vasool Engineering
tags: [Engineering, Payments]
keywords: payment gateway migration, razorpay integration, upi autopay mandate, saas billing india, payment provider abstraction, international payment india
---

For a long time our subscription billing ran on a single UPI rail. Each cycle the service raised a payment link, the finance company owner opened it, paid by UPI, and a callback settled the transaction. For a fleet of Indian tenants that is a perfectly good arrangement.

It has two ceilings, and we hit both.

## A UPI-only rail has no door for a client abroad

UPI is a domestic rail. A customer outside India does not have a UPI ID, and there is no workaround — it is not that paying is awkward, it is that there is no path at all. The invoice sits there and somebody ends up arranging a bank transfer by hand.

Razorpay's account takes cards and netbanking alongside UPI, which means an overseas client can pay with a Visa card against the same link everyone else uses.

Worth being precise about what that does and does not mean: **the charge is still raised in INR.** Every order and mandate we create hardcodes the currency. An international card can pay an INR invoice — the cardholder's bank handles the conversion — but this is not multi-currency billing, and we are not going to describe it as such. What changed is that a client abroad can now pay at all.

## The bigger one: somebody had to remember every month

The second ceiling was more expensive and less visible. A payment link is a request. Every cycle, for every tenant, a human had to notice it and act on it.

UPI Autopay fixes that — a tenant authorises a mandate once and is debited each cycle. Our previous gateway had no mandate support, and was never going to add it. That is not a feature gap you work around; it is a reason to change rails.

## Both gateways run at once, on purpose

The part worth writing down is how the swap was done, because "migrate the payment gateway" is the kind of sentence that should make anyone nervous. Money in flight, webhooks arriving from the old provider, and no appetite for a cutover weekend.

So there was no cutover. Both gateways run side by side behind a provider seam:

- A `Provider` interface for one-off charges, implemented by **both** gateways.
- A separate `RecurringProvider` interface for mandates, implemented by **only one** — because the old gateway genuinely cannot do it, and pretending otherwise with a stub that returns an error would push the failure to runtime.
- A registry that answers two different questions, deliberately kept apart: *which gateway handles a new charge*, and *which gateway issued this existing one*.

That second distinction is the whole trick. A `provider` column on each merchant's config picks the gateway, and **flipping it changes only new charges**. Every transaction stamps the provider that issued it, so a payment already in flight on the old rail keeps polling and settling against the old rail long after the merchant has moved.

> Reverting a tenant is a database update, not a deploy.

Conflating those two questions — using "which gateway do we use now" to settle an existing payment — breaks every in-flight transaction at the moment of the switch. Keeping them as separate lookups costs one extra method and removes the entire class of problem.

## Money crosses the boundary as integer paise

One small thing that has bitten most people who have done this.

Gateways take amounts in the smallest unit. The obvious conversion is wrong:

```go
int64(6.99 * 100)  // 698, not 699
```

Float multiplication lands a hair under, the cast truncates, and you undercharge by a paisa — quietly, on every transaction at that price. There is now exactly one sanctioned rupee-to-paise conversion in the codebase and it rounds explicitly rather than truncating.

The two gateways also disagree about amount checks on the way back: one rejects an exact integer mismatch, the other is float-tolerant and advisory. The seam keeps that difference on the provider's side of the line rather than leaking it into the billing logic.

## What we would tell anyone doing the same

- **Keep the old gateway wired the entire time.** The ability to revert without a deploy is worth more than the tidiness of deleting the old client.
- **Stamp the provider on every transaction.** Without it you cannot settle in-flight payments after a switch, and you will discover this at the worst moment.
- **Do not stub a capability the old provider lacks.** An interface it simply does not implement is a compile-time fact. A stub that returns an error is a runtime surprise.
- **Have exactly one money-conversion function.** Not two that agree today.

---

Changing payment rails is rarely about the new gateway being better in the abstract. It was about a ceiling: one rail that a client in another country could not use, and that could never auto-debit anyone. The migration itself is unglamorous plumbing — a seam, a column, and a rule about which question you are asking.

If you run a finance business and want to see how the rest of the platform fits together, the [features page](/features) is a good start, or [talk to us](/pricing).
