---
title: Rent Collection for Cycle and Cart Rental Shops
description: If you rent out cycles, push carts or equipment, you are not lending money — you are chasing rent on things. Here is how to track who has what, and what they owe.
date: 2026-10-11
author: Vasool Team
tags: [Product, Collections]
keywords: rent collection app, rental management app india, cycle rental shop software, cart rental collection, weekly rent collection
---

A cycle shop on a side street has thirty cycles. Twenty-two are out. The owner knows every face — Murugan takes one every Saturday, the boy from the tea stall has had one since Deepavali — but the amounts live in a notebook with one page per cycle, and the pages do not add up to anything.

The same shape repeats across small rental businesses in India: push carts rented to vegetable vendors, cycles to students and delivery boys, tools and equipment to small contractors. The owner's problem is never *who has my cart*. It is **what is owed on it, and since when**.

That is a collection problem, and it is not the same as a lending problem.

## Renting is not lending, and the software usually gets this wrong

Hand most finance apps a rental business and the first thing you see is a column called **Given** or **Disbursed**. It is empty, because you never gave anyone money. You gave them a cycle.

The real shape of a rental is different in three ways:

- **There is a deposit, not a principal.** The customer gives *you* money up front, and you may owe some of it back.
- **The rent repeats, and nothing reduces.** There is no outstanding balance counting down to zero. Week after week, the same amount is due until the cycle comes back.
- **The item is the thing that matters.** You have thirty cycles. Twenty-two are out. Eight are available. That number decides whether you can say yes to the next person who walks in.

> You are not waiting for your money to be repaid. You are waiting for rent on something you still own — and eventually for the thing itself.

## What you actually track

Vasool models a rental in two halves.

**The item** is registered once: a name or number (Cart #11, Cycle 7), how many units you own, the deposit you normally take, the standard rent, and whether that rent is **weekly or monthly**. Rented units are counted against total units, so *available stock* is always a live number rather than something you work out by elimination.

**The agreement** is one customer taking one of those items: the deposit actually paid, the rent for this particular customer, the collection day of the week, and the start date. From that, the next due date follows.

Small thing that matters on the ground: when you create the agreement, you choose whether the first rent falls **this** period or **next** one. A cycle handed over on Thursday with a Saturday collection day should not quietly be two days overdue on day one.

<figure>
  <iframe src="https://www.instagram.com/reel/Dca1vV4BN1L/embed" title="Rent collection in Vasool" style="aspect-ratio: 1 / 2; max-width: 400px; margin-inline: auto; display: block;" loading="lazy" scrolling="no" allowfullscreen></iframe>
  <figcaption>Rent collection in the app. <a href="https://www.instagram.com/reel/Dca1vV4BN1L/" target="_blank" rel="noopener noreferrer">Watch on Instagram</a> if the video doesn't load here.</figcaption>
</figure>

## Rent due today, and rent not paid

Two questions run a rental business day to day, and they want different answers.

**Who is due today** is the round. It lives on the same Today tab a [daily collection app](/daily-collection-app) uses for loans, and due-today rentals always appear there — they do not get filtered out by loan-shaped rules.

**What is unpaid** is the number you worry about at night. Unpaid rent is computed from the schedule when it is read, period by period against what has actually been paid, rather than trusting a stored total that drifts the first time someone pays late or pays twice. Payments land oldest-period-first, and an overpayment goes into advance rather than silently marking future weeks as paid.

## Reminders that understand rent

A borrower who misses an instalment and a cart vendor who is two days late are not in the same trouble, and they should not get the same message.

Rentals have their own two WhatsApp templates — one for **due today**, a different one for **overdue** — and each agreement carries its own patience settings: how many periods must be missed before a reminder goes out, and how many days to wait after that. Both default to the strictest setting (one period missed, no delay), so nothing changes unless you relax it. For a good customer who always settles on Sunday, set the delay and stop nagging them on Saturday evening.

## Getting the notebook in

Nobody starts from zero. Existing agreements come in by **CSV, one row per agreement** — the cart number, the customer, the deposit, the rent, the frequency, the collection day, and up to twelve past payments inline on the same row.

One row becomes the item, the customer, the agreement and its payment history together. It is the same import flow used for daily and weekly loans, so there is one thing to learn rather than two.

## When the cycle comes back

Closing is where rental software usually falls apart, because three things happen at once and most systems only record one.

| At close | What's recorded |
|---|---|
| Unpaid rent | Deducted from the deposit, and counted as rent collected — not written off |
| Refund | The amount actually returned, with payment method, account and date |
| Forfeit | A refund of zero is a valid outcome and is stored as one |

Whatever you still hold is simply the deposit paid minus what you refunded, so there is no second number to keep in step with the first. The closed agreement keeps showing its close-time figures — advance, collected, refund — instead of reverting to a blank row.

## If renting is all you do

A shop that only rents should not have to read the word "loan" all day.

When a tenant has rentals switched on and no lending product at all, the app enters **rental-only mode**: the loan-centric labels get swapped for rental wording, "Total Disbursed" disappears from the dashboard, and the tiles show live rental totals instead. Mixed businesses — a lender who also rents out a few carts — keep the standard lending interface unchanged, so neither kind of owner is reading someone else's vocabulary.

Reports follow the same rule. The outstanding report drops the **Given** block entirely for a rental row, because you gave nothing, and shows the initial deposit under its own label instead. Rental figures are kept separate from loan totals rather than being summed into them.

---

Rental businesses get overlooked by collection software because, on paper, they look like lending with the numbers moved around. On the ground they are not: the money flows the other way at the start, the rent never reduces, and at the end there is a thing to get back and a deposit to settle.

If you rent out cycles, carts or equipment and your record of it is a notebook with one page per item, [talk to us about Vasool](/pricing) — or see how the rest of the [field collection tools](/staff-tools) work first.
