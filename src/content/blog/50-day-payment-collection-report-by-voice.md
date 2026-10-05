---
title: Get a 50-Day Payment Collection Report by Voice
description: Ask who paid how much over the last 50 days and the report opens itself — filtered, sorted biggest payer first, with PDF and Excel export ready.
date: 2026-10-06
author: Vasool Team
tags: [Product, Reports]
keywords: voice loan collection report, payment collection report, who paid how much report, daily collection report app, loan collection software reports
---

Every finance company owner asks the same question, usually on a Sunday evening with a calculator and a tea: *last 50 days-la yaaru evlo kattinanga?* Who actually paid, and how much.

It's a simple question with an annoying answer. Open the report, set a from-date, set a to-date, pick the loan type, then scroll past every borrower who paid nothing to find the ones who did — and the total at the bottom includes all of them anyway, so it doesn't answer what you asked.

Vasool now answers it in one sentence. Tap the mic, say it out loud, and the **payment collection report** opens already filtered.

## Say it the way you'd say it to a person

The mic takes the question in whatever shape it comes out:

- *"last 50 நாள் யார் யார் எவ்வளவு pay பண்ணாங்க"*
- *"who paid how much in the last 50 days"*
- *"last 2 weeks weekly loan-ல யார் எவ்வளவு கட்டினாங்க"*
- *"पिछले 50 दिन में किसने कितना दिया"*

Tamil, Telugu, Kannada, Malayalam, Hindi or English — native script, romanised, or the half-and-half mix everyone actually speaks on a route. The same [voice entry](/voice-entry-collection-app) layer that records collections reads the question and works out three things: that you want a *list of who paid* (not today's roster, not the overdue list), how long the look-back period is, and which loan type you meant.

Periods get normalised the way a person would normalise them. "Last one month" becomes 30 days. "Last 2 weeks" becomes 14. "Last 50 days" becomes 50 — and it includes today, because that's what people mean. Say no period at all and you get the last 30 days.

## One question back, when it matters

If you didn't say a loan type, the app doesn't guess. It asks: **"Payments in the last 50 days — which loan type?"** and shows your own enabled products, with *All loan types* first.

That one tap matters more than it looks. A lender running daily, weekly, EMI and gold books together gets four very different answers to "who paid", and a silently-guessed filter is worse than no report. A tenant running only daily loans never sees the question — there's nothing to disambiguate, so it opens straight away.

## What "paid only" actually changes

The report that opens is the familiar Outstanding Balance report, switched into a **Payments Received** mode. Three things are different:

1. **Loans with nothing received in the period are dropped.** Not greyed out — gone. The list is only people who paid.
2. **Biggest payer first.** Rows are ordered by amount received, descending, so the first screen is the part you care about.
3. **Totals cover the rows you can see.** Given, received and balance are summed over the paid loans only.

That third point is the one worth dwelling on. The standard outstanding report totals everything in the date range, which is correct for valuing your book — but if you're asking "how much came in from whom", a total that includes 200 borrowers who paid nothing is a number you can't use. The paid-only total is the collection figure for the period.

> A report that answers a slightly different question than the one you asked is worse than no report, because you'll trust it.

The filtering and sorting happen on the server, not in the app, which means the PDF, the Excel file and the screen all show exactly the same rows and the same total.

## Adjusting without going back to the mic

Once the report is open it's an ordinary screen, not a voice-only dead end. A period header reads **Last 50 days · 2026-08-18 → 2026-10-06** so you know precisely what you're looking at, and chips for **Last 7 / 30 / 50 / 90 days** sit alongside it — plus the period you asked for by voice, if it isn't one of those. Changing the loan type or the date range works exactly as it does when you reach the report from the [Reports menu](/features) by hand.

The **Paid only** toggle is a chip too. Turn it off and you're back to the full outstanding view with server totals; turn it on from a manual report and you get the paid-only view without saying a word. Voice is a shortcut to a state, not a separate feature.

## Taking it off the phone

The bottom bar carries three exits:

| Option | Use it for |
|---|---|
| **Download PDF** | A clean period statement — titled *Payments Received*, filed as `payments-received-2026-08-18-to-2026-10-06.pdf` |
| **Share PDF** | Straight into WhatsApp to a partner or an investor |
| **Excel** | A CSV you can pivot, reconcile, or hand to your accountant |

The CSV is written as UTF-8 with a byte-order mark, which is a boring detail with a very visible consequence: Tamil and Hindi customer names open as Tamil and Hindi customer names in Excel, instead of the row of question marks that every lender who has exported a report before is braced for.

## Small guardrails that keep it honest

Speech recognition mishears numbers, so the look-back window is bounded. No period spoken means 30 days. Anything beyond a year is clamped to 366 days, so a misheard "five" that arrives as "five thousand" can't quietly request an unbounded range over your whole history. And because the question is read as a *list* request, it never gets confused with the day-summary card that answers "how much did I collect today" as a single spoken number.

The report also respects who's asking. A staff member sees their own customers; an owner sees the book. Same sentence, correctly scoped answer — the same rule that governs the rest of [the field tools](/staff-tools).

---

Reports don't get used because they're missing. They get used less than they should because getting to one takes six taps and two date pickers, and the owner who wanted the number has already gone back to the day's work. Removing those taps is the whole point: ask the question out loud, read the answer, share the PDF.

If you run a daily or weekly book and want to see this against your own collections, [start with a Vasool trial](/pricing) — or look at how the rest of the [daily collection app](/daily-collection-app) fits together first.
