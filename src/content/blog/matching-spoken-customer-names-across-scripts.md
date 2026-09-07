---
title: "How Voice Entry Finds the Right Customer Across Two Scripts"
description: Why fuzzy database search can't match a spoken Tamil name to a stored one — and the phonetic skeleton we use to shortlist customers before the model sees them.
date: 2026-09-07
author: Vasool Engineering
tags: [Engineering, AI]
keywords: voice entry collection app, speech to text indian names, cross script name matching, fuzzy customer search, tamil name transliteration
---

A field agent taps the mic and says, in Tamil, that they gave Thangaraj a ten-thousand-rupee loan today. Somewhere between that sentence and a saved row, the software has to answer one question: **which customer is that?**

It sounds like a search problem. It isn't, and assuming it was cost us a duplicate borrower.

## The bug that started this

An agent recorded a loan for *Thangaraj Jayaprakash*. Speech recognition heard **"Vengaraj"** — a single consonant off, the kind of swap every STT engine makes with Indian names. The app searched its customer list for "Vengaraj", found nothing, and did the reasonable thing for a name it has never seen before: it opened the **Create New Customer** form.

The agent, mid-route and not looking closely, filled it in. Thangaraj now existed twice.

Nothing crashed. No error was logged. The [voice entry flow](/voice-entry-collection-app) did exactly what it was built to do, and the outcome was a corrupted customer list.

Two things failed there. The recogniser misheard, which we can't prevent. And the name lookup had no way to recover from it — which we can.

## Why a better fuzzy search doesn't rescue you

The obvious fix is a more forgiving search. We already had one: PostgreSQL's `pg_trgm` trigram similarity, running against a GIN index, alongside the usual `ILIKE`.

It doesn't help, and the reason is worth sitting with.

Our tenants' data-entry staff typically save customer names **in Tamil script** — `தங்கராஜ்`. Speech recognition, given a mixed Tamil-English sentence, frequently emits the name **romanised** — `Thangaraj`. Both are correct. Neither is a typo.

They also share **zero characters.** Not "few". Zero. Trigram similarity between them is 0.0, so no threshold you pick — 0.3, 0.1, 0.01 — will ever surface that row.

> A more forgiving fuzzy search cannot fix a zero-overlap comparison. You have to change *what* you are comparing.

## Step one: let the model do the matching

A language model, unlike a trigram index, knows that `தங்கராஜ்` and `Thangaraj` and `Tangaraj` are the same name. So we stopped asking the database to find the customer and started asking the model.

On each voice request the backend builds a **customer index** server-side — customer id, name, area, and the last four digits of the phone number, scoped to the customers that staff member is allowed to see — and includes it in the prompt. The model resolves the spoken name onto one of those rows and copies its `customer_id` back verbatim.

Two rules keep that safe:

- **The model may never invent an id.** The prompt says so, but prompts aren't a guarantee — so the parser independently checks the returned `customer_id` against the index. An id that isn't in the index is discarded exactly like an empty one.
- **The stored name wins.** On a match we return the customer's name *as saved in the database*, never the model's transliteration of it. The model resolves identity; it doesn't get to rename anybody.

When resolution misses, `customer_id` comes back empty and the app falls back to searching by name — the same path it always had. A miss degrades; it doesn't break.

On privacy: only **name, area, and the last four digits** leave the container — the same fields already on the collection roster. No balances, no addresses, no full phone numbers.

## Step two: the index got expensive

This worked. It also made every voice request carry the tenant's entire customer list.

On a tenant with around two thousand customers, that index is comfortably the largest thing in the prompt — **the dominant driver of prompt size, latency, and cost**, on every single mic tap. Including the taps where the agent said *"petrol 200 cash"* and mentioned no customer at all.

Trimming fields wouldn't help; four short fields per row is already close to minimal. The only real saving is **sending fewer rows** — which means shortlisting candidates before the model sees them, which is the thing we just established the database can't do.

So we did it in Go instead, and compared something other than spelling.

## The consonant skeleton

Every word — both the stored customer names and each token of the transcript — gets reduced to a **script-independent consonant skeleton**:

- **Drop the vowels.** They're the least reliable part of a transliteration and the first thing STT smears.
- **Collapse voiced, unvoiced and aspirated consonants into one class.** Tamil script genuinely doesn't distinguish them — க is *ka*, *ga* and *ha* depending on position — and recognisers confuse them in every language.
- **Fold Latin digraphs** into the same classes: `th`/`dh` → t, `sh`/`ch` → s, `zh` → l (the standard romanisation of Tamil ழ).
- **Collapse consecutive duplicates.**

Run that over both spellings of the same name:

```
"Sudhakar"   →  s t k r
"சுதாகர்"     →  s t k r
```

Identical strings. The zero-overlap problem is gone, because we're no longer comparing scripts — we're comparing an approximation of the sound.

One offset table covers Devanagari, Bengali, Gurmukhi, Gujarati, Oriya, Tamil, Telugu, Kannada and Malayalam, since all nine Brahmic blocks share the same internal character layout.

Matching is then plain edit distance, with a budget that scales with how much signal a skeleton carries: five classes or more tolerates two edits, three or four tolerates one, anything shorter must match exactly. Names are compared against **prefixes** of each transcript token, so agglutinative case suffixes — *"Sudhakar-ukku"*, *"Rajan-ku"* — don't defeat the match. Spoken digit runs are matched against customer codes by containment, so *"the 06359 account"* resolves too.

Candidates come back ranked closest-match-first and capped at 200.

## Why it's tuned to over-match

The error costs here are wildly asymmetric, and the design leans into that.

A **false positive** costs one extra row in a prompt that already holds up to two hundred. A **false negative** removes the right customer from the model's view entirely. So the matching is deliberately generous — the consonant collapsing alone absorbs most of the த↔வ, ப↔ம, க↔ந swaps that STT produces.

Even then, a total miss isn't fatal. When nothing resembles anything spoken, the customer block is simply left out of the prompt and the app falls back to name search — the same degraded path used when the index build fails. And crucially, **validation still runs against the shortlist the model was actually shown**, so a verified id can only ever be a row that was genuinely in front of it.

Two more guards worth noting: an index that already fits under the cap is passed through untouched, so smaller tenants see no behaviour change at all — and each tenant keeps an escape hatch that restores the full-index prompt if their names ever defeat the filter.

## Three nets, not one

The lookup that started as a single `ILIKE` is now layered:

1. **Phonetic shortlist → model match**, verified against the index, returning a `customer_id`.
2. **Model-generated spelling variants** — it offers three to five alternate romanisations ("Dharika", "Tarika"), which the app tries in parallel when no id came back.
3. **Trigram fuzzy search** in Postgres, which still catches typed searches and near-miss spellings everywhere else in the app.

Each net catches what the one above it dropped. None of them, on its own, would have found Thangaraj.

---

The wider lesson is that "search the customer by name" is a very different problem when the name was *spoken*, in one script, about a row saved in another. The database was never going to solve it — but neither was the model alone, once we had to pay for the prompt.

Want to see voice entry running against your own customer list? [Talk to us about Vasool](/pricing), or read more about [what the app does in the field](/features).
