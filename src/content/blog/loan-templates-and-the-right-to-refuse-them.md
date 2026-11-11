---
title: "Loan Templates, and the Right to Refuse Them"
description: We built reusable loan configurations so owners stop retyping the same charges. Then an owner asked for a switch to turn the whole thing off.
date: 2026-11-07
author: Vasool Team
tags: [Product, Engineering]
keywords: loan configuration template, emi loan setup, deduction rules, feature flag, loan management software, processing fee
---

A finance company that writes the same kind of loan fifty times a month is typing the same numbers fifty times a month. The processing fee, the documentation charge, the interest basis — identical on every one, re-entered on every one, and occasionally mistyped.

So we added reusable loan configurations: set the charges up once, then pick the template when creating a loan and watch the fields fill themselves in. Auto-filled fields carry a small badge so it is obvious which values came from the template and which were typed.

Then an owner asked us to add a switch to turn it off entirely.

## Why that is not a disappointing outcome

The instinct is to treat an opt-out request as a verdict on the feature. It usually is not. It is a statement about a different business.

A lender running one product with one fee structure does not have templates to choose between. For them the picker is a row of chips above the form offering a single option, plus an empty-state card nudging them to create a template they do not need. That is not a small cost: it is a permanent addition to the busiest screen in the app, bought for no benefit.

The feature is right for a business with several loan products and several charge structures. It is clutter for a business with one. Both are real, and neither is a misunderstanding of the product.

> A feature that helps one kind of customer and taxes another is not finished when it works. It is finished when it can be declined.

## The shape of the switch

Turning it off removes the whole Loan Configuration card — chips, empty state, badges — and the create form reads exactly as it did before the feature existed. Not similar: identical.

Two decisions underneath it are worth stating:

**The gate is purely in the interface.** The configuration table and its endpoints stay available whether the switch is on or off. A business that declines templates today and wants them in six months gets them the moment the switch flips — no migration, no data backfill, no release.

**Off is the default.** Existing customers were not opted into a changed create screen because we shipped something. They see what they saw yesterday until somebody decides otherwise.

## The general rule we keep rediscovering

Almost everything in Vasool is behind a per-business switch, defaulted off: voice entry, approval workflow, offline mode, deposits, rentals, the chat interface. The reason is not caution for its own sake. It is that our customers are not one customer.

A pawn broker with a gold book, a daily-line operator with eighty doorstep collections, a cart renter and a chit foreman are all running "a finance business", and a screen that serves all four equally well serves none of them particularly. The alternative to per-business configuration is not a cleaner product — it is a product that quietly optimises for whichever customer the team spoke to most recently.

The cost is real: every flag is a code path, and every code path is a thing that can break while nobody is looking. The discipline that makes it affordable is the one above — **flag off must be byte-identical to before the feature existed**, so the untouched path stays genuinely untouched rather than merely similar.

---

If you run more than one loan product and are tired of retyping the same charges, the [loan types page](/loan-types) covers what the platform handles, or [talk to us](/pricing).
