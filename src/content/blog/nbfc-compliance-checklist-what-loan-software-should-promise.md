---
title: "The NBFC Compliance Checklist: What Loan Software Should (and Shouldn't) Promise"
description: The governance controls a regulated NBFC should demand from loan software — audit trails, maker-checker, data isolation, KYC — and what no vendor should claim yet.
date: 2026-08-19
author: Vasool Team
tags: [Guides, Compliance]
keywords: NBFC compliance software, regulated lending software, NBFC loan management, maker-checker approval software, audit trail lending software, RBI compliant loan software
---

Every vendor pitching an NBFC says "compliant." Almost none of them mean the same thing by it. Some mean their servers have a firewall. Some mean they store KYC documents somewhere. Very few mean the thing an examiner actually checks: **can you reconstruct exactly what happened to any account, who approved it, and prove no one outside the business could have touched it.**

Here's what to actually ask for — and, just as important, what to be suspicious of when a vendor claims it's already solved.

## 1. Can you produce an audit trail on demand?

Not a login log. A record of **every edit, approval, and closure**, tied to who made it and when, that lets you reconstruct an account's full history from nothing but the log. If a balance is disputed six months from now, "we think it's correct" is not an answer a regulator accepts — the log has to be the answer.

## 2. Does approval hold *before* the change happens?

Most tools log a change after it's made. That's an audit trail for damage control, not prevention. What you actually want is **maker-checker**: a staff member's create, edit, or delete is held as a request and only takes effect once an owner or manager approves it — with both the approval and the rejection on the record.

The detail that matters: this shouldn't slow down the parts of the business that don't need it. A [voice-recorded collection](/voice-approval-workflow) should still post in seconds. A rewritten loan or a new borrower is the kind of change that should wait for a second pair of eyes.

## 3. Is access scoped to need-to-know?

A field agent's phone should not be a portable copy of your entire loan book. Roles should default to seeing **only their own customers and loans**, with "view all" granted per resource, deliberately, not by default. If every agent's device already holds the whole company's data, you've built the compliance failure in before the software ships.

## 4. Is your data actually isolated per tenant?

If the vendor runs one shared database for every lender on the platform, ask how a cross-tenant bug is prevented — not promised, *prevented*. **Per-tenant data isolation** — your business in its own database, on infrastructure you control — is the governance story an examiner expects and a much smaller blast radius if anything ever goes wrong.

## 5. Is KYC actually captured, not just referenced?

"KYC support" can mean a text field for a document number. What you need is a working **document vault**: Aadhaar, PAN, voter ID, ration card, and utility-bill proofs captured and stored against every borrower, ready to produce on inspection — not a promise that you'll add it later once you're already live.

## 6. Is AI-assisted underwriting advisory, or a black box?

AI credit scoring is increasingly common in this category, and it's genuinely useful — aggregating a borrower's repayment history, KYC completeness, and collection record into a single risk read saves a manual review that used to take an officer twenty minutes. The question is what it's allowed to *do* with that score.

A score that auto-approves or auto-rejects is a decision with no maker-checker behind it — the opposite of everything above. A score that returns an **approve / review / reject call and a suggested limit**, then hands the actual decision to a human whose call is logged, is a genuine underwriting aid. Ask which one you're buying.

> The best sign a vendor understands regulated lending isn't a longer feature list — it's a straight answer about which of these six they haven't finished yet.

## What no vendor should be claiming yet

Be specific about this because vendors rarely are: **NPA classification under RBI norms, credit-bureau reporting to CIBIL or CRIF, and CKYC upload** are not solved problems for most lending software in this category, including a lot of what gets marketed as "RBI-ready." If a vendor claims all three are live today, ask for a demo of exactly that screen. Software can support your compliance — audit trails, approvals, scoping, isolation, document capture. It cannot replace your obligations as the regulated entity, and any vendor implying otherwise is the one to be careful of.

---

None of this is exotic engineering. It's the difference between software built to survive a sales demo and software built to survive an audit. Ask these six questions before you sign, and ask a seventh: what will you tell me you *haven't* built yet.

See how Vasool's governance layer is built for the [NBFC platform](/nbfc-loan-management), or read the full breakdown on [security and data ownership](/security).
