---
title: "Why Our RD Maturity Isn't the Bank Formula"
description: A recurring deposit customer remembers one number — what they get at the end. We compute it the way the owner quotes it, not the way a bank would.
date: 2026-10-22
author: Vasool Engineering
tags: [Engineering, Deposits]
keywords: recurring deposit maturity calculation, rd maturity formula, fd rd software, deposit management software, finance company deposits, rd compound interest
---

A customer signing up for a recurring deposit is told exactly one thing they will remember: **what they get at the end**.

₹1,000 a month for twelve months at 15%, and the owner says "₹13,021". It gets written on a card, repeated to a spouse, and recalled with total precision a year later. Everything else about the arrangement is negotiable. That number is not.

So when we built FD and RD into Vasool, the first question was not how to model a subscription. It was: **which formula produces ₹13,021?**

## There is more than one right answer

Compound interest sounds like settled arithmetic until you try to implement it for a recurring deposit, at which point the question "compounded how often?" turns out to carry the whole result.

The large Indian banks generally compound RD interest **quarterly**. It is a defensible convention with a long history, and if you search for an RD maturity formula it is probably what you will find.

Our implementation does something simpler. Each month:

```
balance += monthly_deposit
balance += balance × (rate / 12 / 100)
```

Deposit goes in, a month's interest is earned on the running balance, repeat for the tenure. That is monthly compounding, and the comment above the function says why:

> This is simpler and more owner-friendly than the quarterly-compound SBI formula; it gives the number the owner actually quotes.

## Why the owner's number wins

The temptation is to treat the bank convention as correct and the owner's figure as an approximation to be gently corrected. That gets the relationship exactly backwards.

A finance company owner quoting an RD is not estimating. They have a method — often an actual ledger, a spreadsheet, or arithmetic they have done so many times it is instant — and they have already told the customer the answer. If the software then shows ₹12,970 where the owner said ₹13,021, three things happen, none of them good:

1. The owner stops trusting the maturity column and keeps their own record alongside it.
2. Somebody has to explain a ₹51 difference to a customer who was told a round promise.
3. The next RD gets entered with a manual correction, which is the point the data stops being reliable.

> Software that disagrees with the owner at their own counter does not win that argument. It just gets worked around.

We confirmed the figure against a hand-walked month-by-month calculation during design, specifically so the implementation would land on the number the owner already uses rather than one we could defend in theory.

## Fixed deposits, same principle

An FD is the simpler case — one lump sum, held to maturity:

```
maturity = deposit × (1 + rate/100) ^ (tenure_months / 12)
```

Annual compounding over the tenure, which again is what matches the quoted figure for a business that says "₹X at Y% for N months". Non-cumulative modes — where interest is paid out monthly or quarterly rather than rolled up — are not implemented, and we would rather say so than imply the product covers a payout pattern it does not.

## And then we made it overridable anyway

Here is the part that matters more than either formula.

No single convention survives contact with every agreement a finance business has made. Some deposits were negotiated. Some were quoted off an older rate card. Some carry a rounding the owner has always applied and has no intention of stopping.

So the computed maturity is a **starting point, not a verdict**. The subscription carries a flag for a custom maturity, and if the owner types a different figure, theirs is what the record keeps and what the payout is measured against.

It would have been easy to treat that as a data-quality hole to be closed. It is the opposite — it is the feature that lets the software be correct about a business whose arithmetic predates it.

## What this looks like in the rest of the module

The same instinct runs through the build:

- **RD instalment slots exist from enrolment**, all pending, rather than appearing as they are paid — so the schedule is a thing you can look at on day one.
- **A slot can take part payments**, each recorded with its own amount, date, method, reference and collector, with the slot holding the running total. Deposits get collected on a round like anything else, and rounds produce part payments.
- **Late and missed are distinct from pending**, because the difference matters to whoever has to go and ask.
- **Payout and cancellation are recorded, not inferred** — the amount paid out with a note, or an early cancellation with its reason and the refund actually given.

And deposits sit in their own tables with their own routes and their own permission resource, deliberately not modelled as a loan with the sign flipped. Money a customer has left with you is a liability you will pay back; money you lent is an asset you hope to recover. A report that adds them together is describing nothing.

---

The engineering lesson is small and keeps recurring: when software enters a business that already works, the existing arithmetic is a requirement, not a legacy quirk. The bank formula is not wrong. It was just never the number anybody in the room had promised.

If you take deposits alongside lending, the [FD and RD page](/fd-rd-software) covers how the module fits together, or [talk to us](/pricing) and bring a real subscription to set up.
