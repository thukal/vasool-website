---
title: "The Loan Doesn't End When the Vehicle Goes Back"
description: A borrower settled the overdue window and got their vehicle back. We closed the loan. The owner told us the remaining seven instalments were still theirs.
date: 2026-11-11
author: Vasool Engineering
tags: [Engineering, Vehicle Finance]
keywords: vehicle repossession software, partial settlement, emi schedule, auto finance software, loan recovery, repossession release
---

We have written before that [seizing a vehicle is not closing the loan](/blog/seizing-a-vehicle-is-not-closing-the-loan). Last week we learned the same lesson one step further along, and this time the software had it wrong first.

Here is the case. A borrower on a ten-instalment EMI missed three. The owner seized the vehicle. The borrower came back with ₹7,820 — the three overdue instalments, the late fee on them, the seizing charge, the visiting charge and some other costs — and the vehicle went home with them.

Our first implementation closed the loan.

## Why that felt right and wasn't

It has the shape of an ending. Money changed hands, the dispute is over, the vehicle is back with its owner, everybody shook hands. The record wants to say *resolved*.

The owner flagged it immediately: only the overdue window and the charges had been cleared. **Seven instalments are still outstanding, and the borrower still has to pay them.** Closing the loan deletes a live receivable — the borrower now owes nothing according to the system, and nobody will chase the next due date.

> A settlement that unblocks a vehicle is not a settlement that ends a loan. It bought back the three months the borrower had fallen behind, not the seven still ahead.

So a returned vehicle now leaves the loan **active**, with the settlement applied to it as payment rather than as closure.

## Applying it as payment is the whole job

"Credit ₹7,820 against the loan" sounds like one line of code. It is not, because the money was never one thing — it was three EMIs, a late fee, a visiting charge and a seizing charge in one envelope.

The settlement walks the schedule **earliest-first** and converts whole instalments: the number of slots flipped to paid is the EMI portion divided by the instalment amount, rounded down. Partial money does not half-pay a fourth slot; it buys the instalments it covers, in the order they fell due. Totals move with it — principal paid, interest paid, instalments paid, outstanding — and the charge buckets are zeroed, **capped at zero** so an overpayment never drives a balance negative.

Then two details that only matter later.

**The late-fee freeze is lifted.** When the vehicle was seized, late-fee accrual was frozen — it would be indefensible to keep charging a borrower a daily penalty on a vehicle you are holding. On return, that freeze is cleared, so if a *future* instalment goes overdue the clock starts again. Forgetting this leaves a loan that can never accrue another late fee, which nobody would notice for months.

**One payment row per instalment, not one per settlement.** The ₹7,820 writes three rows, each tied to its own schedule slot, so Payment History shows one card per instalment exactly as a normal collection would. The late-fee cash is spread proportionally across the three with the rounding remainder on the first, and the visiting charge rides on the first row. They carry a method of `return`, so a year later these are still distinguishable from an ordinary cash or UPI collection.

## The shape of the mistake

The error was not arithmetic. Every number was right. It was a **state** error: inferring that a loan had ended from an event that merely resolved part of it.

That class of bug is hard to catch in review because the happy path looks perfect — a borrower who settles everything and takes the vehicle back really should see a closed loan. It only breaks on the partial case, which is also the common case, because a borrower who could pay the whole thing would rarely have been seized from.

It took an owner looking at a real settlement on a real screen to see it. Which is the more general lesson: the person who runs the business is not a source of feature requests to be triaged. On questions about what a transaction *means*, they are the specification.

---

If you finance vehicles, the [vehicle finance pages](/vehicle-finance-software) cover the rest of the lifecycle, and the earlier post on [what a seizure does to a loan](/blog/seizing-a-vehicle-is-not-closing-the-loan) covers the half before this one.
