---
title: "Skipping the Form Is Also an Answer"
description: A collection app can open the dialer but it cannot hear the call. So we log the outcome — including when the collector declines to tell us one.
date: 2026-11-23
author: Vasool Engineering
tags: [Engineering, Collections]
keywords: call logging collection software, call audit trail, field agent accountability, promise to pay tracking, voice call customer, collection follow up
---

An owner asks a reasonable question on Thursday morning: did anyone call Murugan about last week's missed instalment?

The collector says yes. There is no way to check. The call went out through the phone's own dialer, from the collector's own handset, on a network the software has no visibility into. As far as the app is concerned, a button was tapped and then nothing happened.

This is the honest limit of a collection app. It can put a dialer on the screen next to a borrower's name. It cannot hear the conversation, and it has no idea whether one took place.

## What it can do is ask

So when the call ends, the app asks: what happened?

Four outcomes. **Attended**, **not attended**, **switched off** — and **skipped**.

That fourth one is the whole design, and it is the one most systems leave out.

## An optional log is a log of people's willingness to fill forms

Put a form in front of someone finishing their eightieth call of the day and some proportion of the time they will close it. That is not dishonesty, it is Thursday afternoon.

If dismissing the form leaves no trace, the records that survive are the calls somebody felt like recording. The owner then reads that data as *calling activity*, when it is actually *form-completion activity*, and the two diverge in exactly the direction that matters: the awkward call, the one that went badly, the one where nothing was promised, is the one most likely to be skipped.

So dismissal is an outcome. Tapping Skip writes a row saying the collector opened a call to this customer and declined to say how it went.

> A log you can exit for free is not a log of what happened. It is a log of what someone was willing to write down.

Nobody is punished for a skipped call. The point is that the **tap on the call button** is the event being recorded, and the outcome is an attribute of it. You cannot make a call disappear by saying nothing about it.

## One door, so there is no back door

The same reasoning applies to where calls can start from.

A borrower's number is reachable from a lot of places — today's collection round, the dashboard, every loan detail screen, the rental agreement, the fixed deposit, the chat thread. If each of those wired up its own dialer, each would be a separate decision about whether to log, and one of them would eventually ship without it.

Every one of them calls the same helper. One code path opens the dialer and one code path raises the outcome prompt. Adding a new screen with a call button gets the audit automatically, and cannot accidentally skip it.

Each row records the caller, the customer, the timestamp, the result, and the **screen the call started from** along with the loan it concerned. That last part turns the log into something you can interrogate: every switched-off number this week, every unattended call from a loan screen, every call one collector made on a particular route.

## Speaking the call still audits the call

The mic closes the loop. Say *"Call Sudhakar Salem"* and the name is resolved against the customer index, the dialer opens on the stored number, and when the call ends the same outcome prompt appears — stamped with the fact that this call began as a voice command.

That consistency is worth more than it looks. A feature that bypasses the audit trail is a feature that teaches people how to bypass the audit trail. Voice dialling is faster than scrolling to a customer and tapping; if it were also the route that skipped the paperwork, it would quietly become the preferred way to make calls nobody wanted recorded.

## What this does not do yet

The honest part.

When a borrower says *"call me back after two days"*, that goes into a free-text note. It is captured, and a human reading the log will see it. But nothing can filter on it, nothing sorts by it, and nothing surfaces on Thursday to say that Tuesday's promise is now due.

So today the system audits the **call** and not the **promise**. That is a smaller gap than it sounds — the table, the prompt, the permissions and the voice entry point all exist, and what is missing is a date column and a filter — but it is a gap, and we would rather name it than let a reader assume a follow-up queue exists.

---

The general shape, for anyone building something similar: when you cannot observe an event directly, the next best thing is to record every attempt to perform it, and make declining to describe the outcome one of the outcomes. An audit trail with a free exit is not an audit trail. It is a suggestion.

More on how field accountability fits together on the [staff tools](/staff-tools) page, and the [voice entry](/voice-entry-collection-app) page covers the mic.
