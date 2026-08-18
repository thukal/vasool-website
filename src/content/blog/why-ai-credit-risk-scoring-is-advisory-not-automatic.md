---
title: "Why Vasool's AI Credit-Risk Score Is Advisory, Not Automatic"
description: How Vasool's AI credit-risk scoring works — what it reads from KYC, repayment history, and GPS visit data — and why the decision still belongs to a human.
date: 2026-08-20
author: Vasool Engineering
tags: [Engineering, AI]
keywords: AI credit risk scoring, loan eligibility AI, underwriting automation, NBFC AI risk model, advisory credit score, alternative credit scoring india
---

The easy version of AI underwriting is a model that says yes or no. It's also the version that gets a regulated lender in trouble. A black-box rejection has no maker, no checker, and no explanation to give a borrower or an examiner who asks why. So the design decision we made early was narrower than "build a credit model": build a **second opinion an officer can act on, not a decision that acts on its own.**

Here's what that meant in practice.

## What the score actually reads

The model doesn't get anything a borrower's file doesn't already contain. It aggregates signals that already exist inside the loan book:

- **Repayment history** — on-time percentage, days-past-due patterns, and how a borrower's account has behaved across previous cycles.
- **KYC completeness** — whether the [document vault](/security) holds verified identity proof, or the account was opened on partial paperwork.
- **Visit and collection consistency** — GPS-tracked route data showing whether collections against this borrower map to real, repeated visits rather than entries logged from nowhere near the customer's address.

None of these are new data. They're inputs an experienced credit officer already weighs mentally when they know a route well. The score just makes that judgement consistent across every officer and every branch, instead of depending on how many years someone has walked that particular line.

## Why the output is a call, not a decision

The score resolves to **approve, review, or reject, plus a suggested limit** — advisory language on purpose. What happens next is the same as every other consequential change in Vasool: it goes through [maker-checker](/voice-approval-workflow). The model makes the case; a staff member with the authority to lend makes the call; the outcome lands on the [audit trail](/nbfc-loan-management) with both the score and the human decision attached, whichever way it went.

This isn't a hedge to avoid liability. It's the only version of the feature that's actually useful in a regulated context. An auto-reject can't be interrogated — not by the borrower who wants to know why, and not by an examiner asking how the lender arrived at a decision. An advisory score that a named human confirmed or overrode is explainable by construction, because the explanation is just "here's who decided, and here's what they saw."

> An AI that quietly declines a loan is a liability wearing a feature's clothes. An AI that suggests, and a human who decides and is logged doing it, is a control.

## Where GPS and KYC data earn their keep twice

Route tracking and the document vault exist for their own reasons — proof of visits, compliance-ready records. What's worth noting is that neither was purpose-built for credit scoring, and both turned out to matter for it anyway. A borrower with sparse or inconsistent visit data is a different risk than one with a clean, repeated collection pattern at a verified address, even before either has missed a payment. Data captured for one control ends up strengthening another. That's a reason to get the basics — [KYC](/security), [route-tracked collections](/staff-tools) — right first, rather than treating them as separate from whatever underwriting layer gets built on top later.

## What we deliberately didn't build

No auto-approval path. No auto-rejection path. No score that posts a limit change without a human confirming it. It would be a faster demo — "the AI approved the loan in two seconds" is a better sales line than "the AI suggested a limit and an officer reviewed it" — but it's the wrong trade for a category where the lender, not the model, carries the regulatory obligation.

---

The interesting engineering problem here wasn't the scoring itself — it was resisting the urge to let the model finish the job. Keeping a human in the loop, on the record, is what makes an AI feature something a regulated lender can actually stand behind.

See how [AI-assisted credit checks](/nbfc-loan-management) fit into Vasool's wider governance layer, or read what other controls sit alongside it on the [security page](/security).
