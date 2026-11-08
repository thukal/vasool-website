---
title: "One Card Per Home Visit, Not Per Loan"
description: A collector visits a home, not a loan. When Barath has a daily loan and a chit instalment due, two cards is one too many — and the second one gets missed.
date: 2026-11-08
author: Vasool Team
tags: [Product, Field Operations]
keywords: today's collections, field collection app, multi product collection, daily collection app, missed collection, collection round
---

An agent reaches Barath's house at ten past eleven. Two things are due today: ₹1,200 on his daily loan and ₹1,000 on his savings chit.

The app shows two cards. The agent collects the daily loan, marks it paid, says goodbye, and rides to the next house. The ₹1,000 is still outstanding, and nobody did anything wrong — the second card was further down a list of sixty, and the first one looked like the job.

That is not a discipline problem. It is a layout problem.

## Your data is organised by product. Your round is organised by address.

A lending system stores a daily loan, a weekly loan and a chit subscription as separate things, because they are separate things. They have different schedules, different arithmetic, different reports.

A collection round has none of that structure. It is a list of doors. The agent is not working through products — they are working through a street, and at each stop the only question is *how much is due here, from this person, right now*.

When the screen mirrors the database instead of the round, every customer with two products becomes two entries in a long list, and the second entry is a bet on whether somebody scrolls.

> The unit of field work is the visit. If the software's unit is the loan, the mismatch gets paid for at the doorstep.

## What changed

Today's Collections can now collapse every product due today for the same customer into a single card.

The header carries what the agent needs before knocking: **the customer's name and the total due** — Barath, ₹2,200. Underneath, one row per product, each with its own badge, its own status, and its own Collect button. The daily loan and the chit instalment are collected separately, exactly as before, and recorded separately, exactly as before. They are just shown together, because they happen together.

One detail matters more than it looks: **a card only moves to Collected when every row in it is paid.** A visit where the agent took the daily payment and not the chit stays visibly open. The grouping would be worse than useless if a partly-finished stop could look finished.

## Nothing changed underneath

This is a view, not a rework. There is no change to the server, the data model, or how a payment is recorded. Tapping Collect opens the same modal it always did, hits the same endpoint, and writes the same row.

That is a deliberate constraint rather than a shortcut. A screen layout that needs a schema change to try is a screen layout nobody tries. Because this one is purely presentational:

- Reports, day books and reconciliation are untouched — a grouped collection and an ungrouped one produce identical records.
- Turning it off is instant, and the old per-loan list returns unchanged.
- There is nothing to migrate, and nothing to migrate back.

## Off unless you need it

The grouping is switched on per business and **off by default**.

A lender running only daily loans gains nothing from it — one customer, one product, one card either way — and for them the screen stays exactly as it was, down to the pixel. There is no reason to make a single-product business absorb a change aimed at a multi-product one.

Where it earns its place is the book that has grown sideways: a [daily collection round](/daily-collection-app) that now also carries weekly loans, a [chit group](/chit-fund-and-lending-app), and savings scheme instalments on the same street. That business did not get more customers. It got more products per customer — and the collection list quietly got longer than the round.

## The quiet failure it prevents

Missed collections of this kind never look like missed collections. There is no dispute, no default, no angry phone call. The money simply arrives late, or at the next cycle, or after someone notices a chit scheme falling behind for no apparent reason.

By the time it shows up in a report it looks like a customer problem. It was a scrolling problem a month earlier.

---

Field software earns its keep in small places. Not in the dashboard the owner looks at once a day, but in the ten seconds an agent spends at a door deciding whether they are finished there.

If your book has grown into several products on the same route, [talk to us](/pricing) — or see how the rest of the [field tools](/staff-tools) fit together.
