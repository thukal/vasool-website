---
title: "Lending in USD and ZiG: Keeping Two Currencies Apart"
description: Converting a dual-currency loan book into one base currency looks tidy on a dashboard and destroys the record. Here is what to do instead.
date: 2026-10-01
author: Vasool Team
tags: [Collections, Guides]
keywords: dual currency loan book, microfinance software zimbabwe, usd zig lending, loan management software zimbabwe, mobile money reconciliation
---

If you lend in Zimbabwe, you probably hold two currencies on one book. The US dollar remains legal tender and dominates everyday pricing; the ZiG circulates alongside it. A borrower may take a dollar loan and repay partly through a wallet, and your officer's cash bag at close contains both.

Most lending software was not built for that. It was built for one currency and a cash box, and the shortcut it offers is always the same: pick a base currency, convert everything into it, show one clean number.

That shortcut is the most expensive bug in a dual-currency market. Here is why, and what to do instead.

## The problem with a single base currency

Say you hold a ZiG loan and convert it to USD for reporting. Three things go wrong immediately.

**The balance moves without anyone repaying.** A ZiG balance converted at today's rate is a different number tomorrow. Your portfolio appears to shrink or grow on days when nothing happened. Any trend you read off it is noise.

**The borrower cannot check you.** Someone who borrowed in ZiG and repaid in ZiG has no way to verify a dollar figure you show them. The record stops being a shared truth and becomes an assertion.

**The history becomes unreconstructable.** Once a conversion is baked into a stored balance, you cannot recover what the original figures were unless you also stored the rate, the date and the direction — which systems that take this shortcut generally do not.

> A converted balance is not a balance. It is an opinion about a balance, formed on a particular Tuesday, stored as if it were a fact.

## What to do instead

The rule is simple and it has to hold everywhere, not just on the loan screen:

1. **A loan carries its own currency for its whole life.** It is disbursed, repaid, aged and closed in that currency. No exceptions for reporting convenience.
2. **Cash reconciles per currency.** An officer's close is two closes — a USD expected-versus-actual and a ZiG one. Merging them makes a shortfall in one invisible behind a surplus in the other.
3. **Combined views are explicit and derived.** If you want one total, you ask for it, at a rate you chose, on a date you named. The underlying records stay untouched, and the combined figure is never what gets stored.

This is the same discipline a Cambodian lender needs for riel and dollars, which is why those two markets tend to be solved together rather than separately.

## Mobile money is the second half of the problem

In Zimbabwe, most repayments do not arrive as notes in a hand. Mobile money carries the overwhelming majority of electronic payment volume, with EcoCash far ahead and InnBucks and OneMoney behind it.

That changes what a payment record has to contain. A cash repayment needs an amount, a date and a collector. A wallet repayment needs those **plus its channel and its transaction reference** — because the borrower has a receipt on their phone, and your entry is only checkable if it points at the same transaction.

Without the reference, reconciliation is a comparison of totals, and totals match for the wrong reasons all the time. With it, reconciliation is a comparison of transactions, and a mismatch names itself.

Three practical rules:

- Record the **channel** on every payment — EcoCash, InnBucks, OneMoney, bank transfer or cash. Never just "received".
- Require the **reference** on every wallet payment, at the point of entry, not at reconciliation time.
- Tag the payment to the **account it landed in**, so wallet receipts reconcile against a wallet statement and field cash reconciles against the officer's declared total.

Note what this is not: an automated integration. A system that pulls from EcoCash directly would be convenient, and no serious lender should wait for one before getting the reference field right. The reference is what makes the record checkable; the import is only what makes it faster to type.

## Where the errors actually enter

Worth being precise about this, because the fix follows from it. Dual-currency errors almost never enter at the accounting layer. They enter in the field:

- An officer records a dollar repayment against a ZiG loan because the app did not ask which.
- A wallet payment gets posted to the wrong loan because two borrowers share a surname and nothing tied the entry to a reference.
- Terms get rewritten at the doorstep after a bad week, in a currency nobody wrote down.

Those are entry-time problems, so they need entry-time controls. The routine entry should post fast — a repayment happens dozens of times a day and the risk in it is mishearing, which a confirmation screen handles. The consequential change — a loan written in the wrong currency, terms rewritten after disbursement — should be held for a second pair of eyes through a [maker-checker approval workflow](/voice-approval-workflow), because the risk there is judgement and no confirmation screen catches judgement.

## The registration question sits underneath all of this

One thing worth stating plainly, because it decides what your records must show: Zimbabwe distinguishes **credit-only** microfinance institutions, which may lend but may not take deposits from the public, from **deposit-taking** institutions, which may do both and are licensed and supervised accordingly by the Reserve Bank of Zimbabwe.

A credit-only institution that starts holding client money has changed what it is, regardless of what its system labels the balance. No software setting resolves that, and no vendor should imply otherwise. Confirm your category, and what it permits, with Zimbabwean counsel before you build an operation around either.

---

Dual currency is not a formatting problem. It is a question about what your records are for. A book that converts silently is optimised for looking tidy on a dashboard; a book that keeps currencies apart is optimised for being defensible to a borrower, an auditor and yourself.

Planning a rollout? [Tell us your registration category, your currencies and your timing](/loan-management-software-zimbabwe) — we will tell you what is ready, what is not, and whether the dates line up.
