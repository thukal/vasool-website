---
title: Connect Your Loan Software to Claude or ChatGPT
description: Add one URL as a connector and ask your own loan book questions — or record a collection — from the AI assistant you already use. Here's how we made that safe.
date: 2026-10-07
author: Vasool Engineering
tags: [Engineering, AI]
keywords: mcp server loan software, ai assistant loan management, claude connector, chatgpt connector, loan collection ai assistant
---

A finance company owner spends their day in two places: the collection app, and whatever else is open on the phone. Increasingly, the second thing is an AI assistant. So the question arrives in the wrong window — *how much did we collect today?* — and answering it means closing one app and opening another.

We've now closed that gap from the other side. Vasool runs an **MCP server** per tenant: add `https://<your-slug>.vasool.app/mcp` as a custom connector in Claude or ChatGPT, sign in with the login you already use, and ask.

## Why a protocol instead of an integration

MCP — the Model Context Protocol — is a standard way for an AI assistant to discover and call tools on a server it has been pointed at. The alternative was writing one integration per assistant, then writing another when a customer asked for a third.

One connector endpoint, and any client that speaks the protocol can use it. That's the whole reason this is a protocol and not a partnership.

What it is **not** is a data export. Nothing is copied into the assistant's storage. Each question becomes a tool call against your own container, answered live, and the answer is the only thing that leaves.

## The login is your login

Sign-in runs through a full **OAuth 2.1** flow on a tenant-branded page: authorization code with PKCE, single-use five-minute codes, 90-day rotating refresh tokens with reuse detection, and a revoke endpoint. Codes and refresh tokens are stored only as SHA-256 hashes.

The part worth dwelling on is what the access token actually is: **your ordinary staff or admin token**. Not a side-channel key with its own lifetime and its own permissions.

That one decision carries most of the security story:

- Deactivate a staff member and their assistant connection dies on the next refresh, because the token is re-issued from the live row every time.
- A staff member's questions are scoped to that staff member's customers — the same row scoping as the app.
- Customer-portal logins are refused outright. The connector is for your team, not your borrowers.

Redirect URIs are allowlisted to the real assistant domains and loopback, so the open client-registration the protocol requires can't be turned into a phishing page pointed at an owner.

## Reading: replay the question through the real app

Seven read-only tools ship today — who am I, the dashboard summary, collections for a date, a customer search, a collection summary, the overdue list, and the day book.

None of them query the database directly. Each one **replays a GET through the live route stack**, exactly as the app would: permission middleware, row scoping and audit logging all run unchanged. It's the same tactic as our [offline collection replay](/blog/how-we-replay-offline-collections-through-our-own-api) and the approval workflow — if a request goes through the real door, every guard on that door still applies, and we don't maintain a second copy of the rules that can drift from the first.

Two filters sit on the way out. Every result is walked and **identity-document fields are dropped at any depth** — Aadhaar, PAN, voter ID, ration card, chassis and engine numbers, photos, signatures, anything ending in `_document_url`. And results are capped at 100 KB.

> The reason is one sentence long: the model provider is a third party. A borrower's Aadhaar number has no business being in an answer, so it never gets into one.

## Writing: the preview you approve is the request that runs

Reading is the easy half. Letting a language model *record money* is where you have to be careful, and the obvious design — give the model a `record_collection` tool — is the wrong one. A tool that both decides and writes means the amount that gets saved is whatever the model decided at the moment of saving.

So the write tools are split in two, and only one of them writes.

1. **`prepare_collection`** and **`prepare_expense`** save nothing. They validate the input, look the loan up *as you* (row scoping applies), and return a human-readable preview plus a `confirm_token`.
2. **`confirm_action`** is the only tool that writes, and it takes nothing but the token.

The token is HMAC-signed and carries the exact method, path and JSON body, the principal it was issued to, and a ten-minute expiry. The model cannot change the amount, the customer or the loan between the preview you read and the write that happens — any edit invalidates the signature. Another user's token is refused. And tokens are single-use: a repeated confirm returns the first result instead of writing twice.

Saves then replay through the normal REST routes like the reads do, which means the behaviour you already rely on is intact:

| What | What happens via the assistant |
|---|---|
| Permissions | Same middleware, same answer |
| [Approval workflow](/voice-approval-workflow) | A gated entry returns "sent for approval", not "saved" |
| Audit trail | Logged with a `vasool-mcp` user agent |
| Notes | Get a "via AI assistant" suffix |

So a collection recorded from a chat window is a collection recorded by **you**, visible as such, and still subject to whatever second pair of eyes you've configured.

## Off until you turn it on

Both halves are feature-flagged, default off. `mcp_assistant` enables the connector; with it off, none of the routes exist at all. `mcp_assistant_writes` is a separate sub-flag — you can run the assistant read-only for as long as you like, and the consent page and setup card only describe write abilities when writes are actually enabled.

Daily and weekly collections and ledger expenses are supported today. Monthly, EMI and gold payments deliberately are not yet — each has enough of its own arithmetic that we'd rather add them one at a time than ship a tool that quietly gets a late fee wrong.

You can see and revoke every connection from the **AI assistant** card in Settings, alongside the connector URL and setup steps.

---

The interesting problem here wasn't talking to a language model. It was arranging things so that the assistant has exactly the authority of the person using it, and not one permission more — and so that the sentence you approved is the sentence that gets written to the book.

If you want to try it against your own data, [talk to us about Vasool](/pricing) — or read how the rest of the [security model](/security) fits together first.
