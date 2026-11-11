---
title: "A Balance Is Not a History"
description: A ₹500 visiting charge and the ₹300 paid against it were both invisible on screen. The column held what was owed now and nothing about how it got there.
date: 2026-11-10
author: Vasool Engineering
tags: [Engineering, Collections]
keywords: audit ledger, append only ledger, payment history, loan charges tracking, visiting charge, finance software audit trail
---

An owner sent us a screenshot with a simple question: where is my ₹500?

He had added a ₹500 visiting charge to Dinesh's loan — a home visit, noted as such. Dinesh later paid ₹300 against it. Neither event appeared anywhere on the Payment History screen. The outstanding figure was correct. The two things that produced it were nowhere.

## How a number goes missing while staying right

The implementation was the obvious one. Adding a charge bumped a `pending` column up. Paying one drained it down. Both operations were correct, both were atomic, and the column always held the right answer to the question *how much visiting charge is outstanding on this loan right now*.

It simply could not answer any other question. Not *when was this charged*, not *what was it for*, not *who paid what against it and when*. A counter records a position. It cannot record a path, because each write destroys the previous value.

> The balance was never wrong. It was just the only thing that existed.

This is one of those mistakes that is invisible until somebody asks the second question. For as long as the only thing on screen is the outstanding figure, a cached column and a full ledger are indistinguishable.

## The fix is the boring one

An append-only log: one row per event, `add` or `paid`, each carrying its own notes, its own date, and for a payment, a link to the payment row that produced it.

Three details earn their place.

**The owner picks the event date.** A charge added on Thursday for a visit made on Monday should read as Monday. Defaulting to today is right most of the time, and being unable to override it is wrong the rest of the time.

**The payment link cascades on delete.** If the ₹300 payment is later deleted, the `paid` entry goes with it. A ledger that keeps a payment row after the payment is reversed is worse than no ledger — it is a confident, permanent, wrong answer.

**The cached column stays.** This is not a replacement, it is an addition. The screen still needs a fast answer to *what is outstanding* without summing a log every time it renders. The ledger answers *how we got here*; the column answers *where we are*. Keeping both, and being clear about which is which, is the actual design.

## Where else this hides

Once you go looking, the pattern is everywhere a running total exists. Anything in a finance system shaped like `pending`, `outstanding`, `collected_so_far` or `total_paid` is a cached position. Each one is fine right up to the first dispute, and then the question stops being *how much* and becomes *how*.

The test is quick. For each such column, ask whether you could reconstruct the events that produced it from anything else in the database. If the answer is no, you do not have an audit trail for that number — you have a figure that is correct and unaccountable, which in a business built on proof is a strange thing to settle for.

---

The ledger pattern is not new, and we already use it elsewhere — [gold loans](/gold-loan-software) have run on an append-only ledger from the start, with balances recomputed from entries rather than stored alongside them. The interesting question is never whether to use it. It is noticing the places you quietly did not.
