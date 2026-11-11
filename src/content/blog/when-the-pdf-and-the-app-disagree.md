---
title: "When the PDF and the App Disagree"
description: Mobile said ₹2,400 paid. The PDF said ₹2,450. Same loan, same database, same moment — and both numbers were computed from a defensible definition.
date: 2026-11-09
author: Vasool Engineering
tags: [Engineering, Collections]
keywords: payment history reconciliation, loan statement pdf, late fee accounting, emi payment tracking, finance software correctness
---

An owner put two screens side by side on the same loan and found three numbers that did not match:

| | Mobile | PDF |
|---|---|---|
| Instalment amount paid | ₹2,400 | ₹2,450 |
| Total paid | ₹2,500 | ₹2,550 |
| Total outstanding | ₹9,690 | ₹9,550 |

Same loan, same database, same second. Nothing was stale and nothing was cached wrongly. Both numbers were calculated correctly from two different — and individually reasonable — definitions of what had been paid.

## The ₹50 that was and wasn't an instalment payment

The borrower had made a standalone fee payment: ₹50, entirely late fee, no instalment portion at all.

That lands as a payment row whose amount is ₹50 and whose late-fee column is also ₹50. The whole of the cash is a charge.

**Mobile** read the loan's own `total_paid` field, which the backend deliberately never bumps for a pure fee payment — a late fee is not instalment principal or interest, so paying one does not advance the loan. Mobile therefore showed ₹2,400, which is correct.

**The PDF** built its figure by summing payment rows. The ₹50 row is a payment row, so it was included, giving ₹2,450 — which, for the question "how much cash has this borrower handed over", is also correct.

Two defensible answers to a question that was never pinned down: does *amount paid* mean *cash received* or *loan progressed*? The screen had one answer and the document had the other, and nobody noticed until they were photographed next to each other.

## The fix that was not quite enough

The first pass taught the PDF to recognise a pure fee payment — if the row's amount equals its late-fee amount, render it as a fee line rather than adding it to instalments.

That worked for the case in front of us and missed two others, because late-fee cash does not always arrive in the same column. The same payment path can route it into a pool that settles a previous slot's deferred fee, or into a drain against the slot's own earlier residue. A ₹50 fee payment that landed in one of those columns still failed the "amount equals late fee" test, and still got counted as an instalment.

The real fix was to compare against the **sum of all three fee columns** — which is exactly the figure the service layer was already computing for its own purposes. Both sides now test the same quantity, so the screen and the document cannot drift apart again by routing.

## Two readers of one dataset will diverge

The general shape is worth naming, because it is not really about late fees.

Any time two surfaces compute the same business figure independently — a screen in one language, a PDF renderer in another, a report query in SQL — you have not built one definition with two views. You have built **two definitions that currently agree**. They stay in step while the cases are simple and separate the moment an edge case routes money somewhere one of them does not know about.

The cheapest defence is not more tests. It is making the surfaces share the computed quantity rather than each deriving it. A PDF that renders a number the service already calculated cannot disagree with the service. A PDF that recalculates it from raw rows will, eventually, on a case nobody thought of.

> If two code paths both answer "how much has this borrower paid", one of them is going to be wrong on a Tuesday.

---

It took an owner holding a phone next to a printout to catch this. Reconciliation bugs do not announce themselves — both numbers look plausible in isolation, and you only see the problem when the two views are in the same field of view. That is a good argument for putting them there deliberately, rather than waiting for a customer to do it for you.

More on how the collection side fits together on the [loan collection app](/loan-collection-app) page.
