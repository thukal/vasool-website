---
title: "Seizing a Vehicle Is Not Closing the Loan"
description: A seizure is not a settlement. How we model repossession — the loan untouched until the vehicle sells, an immutable valuation, and a shortfall that stays visible.
date: 2026-10-18
author: Vasool Engineering
tags: [Engineering, Vehicle Finance]
keywords: vehicle repossession software, repossession register, auto finance repossession tracking, seized vehicle sale, vehicle finance software, loan recovery software
---

The vehicle is back in your yard. The borrower stopped paying, the field team went out, and a two-wheeler that was security against ₹68,000 is now parked behind your office.

What should the software do with the loan?

The tempting answer is *close it*. The collateral has been recovered, the account is resolved, the overdue list gets shorter. It is also wrong, and it is wrong in a way that only shows up weeks later.

Nothing has been recovered yet. You are holding an asset, not money. The vehicle might sell for more than the dues or well under them, the borrower might turn up with cash before it sells, or it might turn out the seizure should never have happened. Close the loan at seizure and every one of those futures requires you to un-close it.

## Two phases, learned from the previous module

Our gold module made this mistake first. The original gold sale closed the loan the moment the sale record was created, and it had to be reworked.

So vehicle repossession starts where that ended up, and the comment in the model says so plainly:

> A seizure is born ACTIVE and the linked loan is NOT touched until the vehicle actually sells.

A seizure is its own record with its own lifecycle. The loan carries on existing, still attached to the borrower, until something actually resolves it. That single decision is what makes everything below possible.

## Freeze what will otherwise drift

Two numbers are captured the moment the vehicle is seized, and neither is ever recalculated.

**The valuation at seizure.** What you judged the vehicle to be worth on the day you took it. Second-hand prices move; the record of what you believed at the time should not move with them. If the seizure is ever questioned, the relevant number is the one you acted on, not the one the market shows today.

**The outstanding at seizure.** What the loan owed at that moment, frozen as the baseline the eventual sale gets measured against.

> A historical record that recalculates itself is not a historical record. It is a current opinion wearing a date.

## Three kinds of charge, kept apart on purpose

Taking a vehicle back costs money, and the costs are not one thing:

- **Seizing charge** — your fee for the seizure effort itself, a one-time amount on top of the loan dues.
- **Visiting charge** — the travel and labour fee typed on the seize sheet.
- **Other charges** — ad-hoc costs with a free-text note: parking, towing, storage.

The visiting charge has a subtlety worth pulling out. The *live* pending amount lives on the loan and gets decremented when the borrower actually pays it. The copy on the seizure record is immutable. That means the repossession register keeps showing what was charged at seizure even after it has been collected — so a sale reviewed six months later still reads as it did on the day, rather than quietly showing zero because someone settled it in between.

One number for what is owed now, a different one for what happened then. Collapsing those two into a single field is how a register stops being a register.

## Four ways it ends, and three of them are not a sale

Most repossession software models one ending: the vehicle sells. Ours has four states, and the interesting ones are the exits that are not a sale.

| Ending | What it means |
|---|---|
| **Completed** | Sold. Now the loan closes and the money is split. |
| **Customer settled** | The borrower paid before it sold. Settlement amount, method and notes recorded; vehicle goes back. |
| **Vehicle released** | Returned without a settlement payment. |
| **Seized in error** | It should not have been taken. Recorded as exactly that. |

That last one matters more than its frequency suggests. Field teams occasionally take the wrong vehicle, or take one against a loan that was already settled. A system with no way to say so forces the mistake to be recorded as something else — usually a release, which reads like a business decision rather than an error. Giving it a name costs one enum value and makes the register honest.

There is a small piece of design in how settled and released are told apart. The settlement fields stay at their defaults for a plain release, so a settled seizure is identifiable by having a settlement amount at all — no extra discriminator column needed to answer "did we get paid, or did we just hand it back?"

## Splitting the money, including when there isn't any

When the vehicle does sell, the surplus over the outstanding can be returned to the borrower in full, or net of a percentage or flat deduction you configure. The invariant is that the owner's share and the customer's payout together equal the surplus, and never more than it.

Two details are deliberate.

**Refurbishment cost is not netted into owner profit.** What you spent making the vehicle sellable is recorded on its own line, with the owner-facing bottom line calculated separately. Burying it inside profit would make a sale look better than it was, which is precisely the number you need to be honest about when deciding whether seizing the next one is worth it.

**Shortfall is tracked, never hidden.** When the sale does not cover the dues, the gap is stored as its own figure. It is the least pleasant number in the whole flow and the easiest to quietly drop, and dropping it means your recovery rate is fiction.

## One more thing: the loan could be in any of four tables

A vehicle can secure a daily, weekly, monthly or EMI loan, and those live in four separate tables. A real foreign key is therefore impossible, so the seizure holds the loan id plus its type, with the allowed values constrained at the database level.

Gold and product loans are deliberately excluded — their collateral is pledged jewellery or a catalogue item, not a vehicle. The constraint says so rather than leaving it to convention.

---

The test of repossession software is not whether it can record a sale. It is whether it can represent a seizure that *did not* become one: the borrower who paid at the last moment, the vehicle handed back, the one taken by mistake. Those are the cases a lender actually has to explain, and they are the first thing a single `status = closed` field makes impossible.

If you run a vehicle book, the [vehicle finance pages](/vehicle-finance-software) cover the rest of the lifecycle, and the earlier guide on [what to check in an auto finance app](/blog/best-app-for-auto-finance-tracking) asks the questions this post answers.
