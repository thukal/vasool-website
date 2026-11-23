---
title: "No Two Customers Run the Same App"
description: Nearly nine in ten businesses on Vasool run a feature combination no other business has. Not because we fork the code — because of how the platform is built.
date: 2026-11-23
author: Vasool Engineering
tags: [Engineering, Product]
keywords: configurable loan software, multi tenant lending platform, feature flags saas, white label loan app, per tenant database, customisable collection software
---

Every business software vendor says their product is customisable. It is the most worn-out claim in the category, and buyers discount it on sight — correctly, because it usually means "we will change things if you pay us enough".

So here is a measurable version of the claim instead.

Vasool has **142 feature switches**. Across the businesses running on it, **nearly nine in ten run a combination of those switches that no other business shares**. The typical business has around 29 of them on; the lightest runs 17, the heaviest 100.

Nobody designed that spread. It is what happens when a hundred-odd finance businesses each configure a platform for the way they actually work.

## What that looks like on a screen

The abstract claim is boring. The specific ones are the point.

**A rental business never sees the word "loan".** A business that rents out cycles and carts and does no lending at all gets a version where the loan vocabulary is gone — not hidden behind a tab, replaced. "Total Disbursed" disappears from the dashboard because the owner never disbursed anything.

**A pickup round never sees a loan screen.** A company contracted to visit a list of shops on a cadence gets shops, routes and visits. The lending half of the application does not exist for them.

**A weekly lender can type every week's amount by hand.** Instead of a rate-derived instalment, the owner enters week one, week two, week three — the whole tenure, each a different figure — and that schedule is frozen onto the loan at creation so editing the template later never moves a live customer's dues.

**A deposit-taking business overrides our arithmetic.** We compute an RD maturity figure. If the owner already quoted their customer a different number, they type theirs, and the subscription carries it.

**And every business runs on its own database**, with its own name, logo and subdomain, optionally on its own server.

## Configured, not customised — the distinction is the whole thing

It would be easy to read all this as "they will build whatever you ask for". That is not what is happening, and the difference is why it is sustainable.

Every one of those behaviours is a **switch in a shared codebase**, not a branch cut for one customer. There is one application. A business that turns on rentals and turns off lending is running exactly the same code as a gold lender, taking a different path through it.

> A fork is a promise you keep paying for. A flag is a promise you keep.

Bespoke builds are the conventional way to deliver this, and they rot. Every fork needs its own deploys, its own bug fixes, its own migration whenever the schema moves, and within two years the customer who paid most for customisation is running the oldest software. We have no forks, so every business gets every fix on the same day.

## The part that costs us

This is not free, and pretending otherwise would be dishonest.

A hundred and forty switches is a hundred and forty code paths, and code paths that few customers exercise are where bugs go to hide. We found one recently: a flag controlling a new navigation shell was set for three businesses out of roughly a hundred, and because the config merge only overwrote a flag when a business's config explicitly contained it, an absent key inherited whatever the previously-loaded business had set. An owner with two companies saw the wrong interface in the second one. [The write-up is here](/blog/multi-tenant-feature-flag-leak) — the fix was four lines, but the bug only exists because the platform has that many switches in the first place.

The discipline that keeps the cost affordable is a rule we apply to every flag: **off must be byte-identical to before the feature existed.** Not similar, not nearly — identical. A business that never turns something on must be unable to tell it shipped. That rule is what makes it safe to keep adding switches, and it is the thing we would have to abandon first if we started cutting forks instead.

## Why this is hard to copy

It is not the feature flags. Anyone can add a boolean.

It is that the decision was made at the bottom of the stack — one database per business, configuration resolved per business at runtime, the loan products themselves registered rather than hardcoded. Retrofitting that onto a platform where every lender shares a table and a schema is not a feature you add in a quarter. It is a rewrite.

Which is the honest answer to "can you customise it for us": **we probably already have.** Somebody has likely turned on roughly the combination you need, and if they have not, it is a configuration conversation rather than a development project.

---

If your business does not fit the shape of the software you have been shown, that is worth a conversation — [talk to us](/pricing), or see the [comparison](/compare) with the alternatives.
