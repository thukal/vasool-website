---
title: "5% Commission — Of What, Exactly?"
description: A chit foreman says his commission is five percent. That sentence has two different answers, and the software was quietly picking one of them.
date: 2026-11-05
author: Vasool Team
tags: [Product, Chit Funds]
keywords: chit fund software, foreman commission, chit auction, agent chit app, chit value, chit fund management
---

Ask a chit foreman what he takes and the answer comes back instantly: five percent.

Ask *five percent of what* and you get a pause, because the answer is obvious to him and has never needed saying. Depending on the group, it is one of two things:

- **Five percent of the chit value** — the full subscription pot, so the commission is the same every month for the whole tenure.
- **Five percent of the winning amount** — the figure the auction actually settled at, so the commission moves every cycle with the bidding.

On a ₹1,00,000 chit where this month's auction closes at ₹85,000, those are ₹5,000 and ₹4,250. Over a twenty-month group, the gap is not a rounding difference.

## The software was answering a question nobody asked it

Our chit module let a foreman set a percentage commission without ever asking which basis it applied to. It therefore had to assume one, which it did, consistently and silently.

For every group whose foreman meant the other thing, the number on screen was wrong every single cycle — not dramatically, not in a way that throws an error, just steadily off in a direction nobody had agreed to. The kind of wrong that gets reconciled by hand and never reported, because the foreman knows his own arithmetic and assumes the app is doing something slightly different on purpose.

> The bug was not a miscalculation. It was a question we never put on the form.

## Asking it, without breaking the groups that never were asked

Create Chit now asks, whenever the commission is a percentage, and for both ways commission can be structured — whether each member pays a share, or it comes out of the winner's payout. The cycle screen and the declare preview use the same answer, so the figure you see when declaring a winner is the figure that was agreed when the group was created.

The part that took the thought is what happens to groups that already exist.

A chit group is a running agreement with real people and a schedule of real payments. Changing how its commission is computed mid-tenure is not a bug fix, it is a renegotiation — and one nobody asked for. So existing groups store **no answer at all**, and an absent answer means "keep doing exactly what you were doing". New groups default to the chit value. Nothing that is already running moves.

This is the same principle as any schema change that touches live money: the migration adds the column, and the absence of a value is itself a meaningful state, not a gap to be backfilled with a guess. Backfilling every existing group with the new default would have silently repriced every live chit in the system.

## The form is where the domain knowledge lives

The wider lesson is about where ambiguity gets resolved.

When a form does not ask something the business cares about, that question does not disappear. It gets answered anyway — in a default, in an implicit assumption, in whatever the first implementation happened to do. The user never sees the question, so they cannot tell you that you got it wrong; they just see a number and work around it.

A commission field that accepts "5%" and nothing else looks simpler. It is simpler for exactly as long as everyone using it happens to mean the same thing by it.

---

More on how chits and lending run side by side on the [chit fund and lending app](/chit-fund-and-lending-app) page, and there's a longer piece on [running an agent chit group](/blog/agent-chit-fund-management-app) without a register.
