# AGENTS.md — Writing blog posts for Vasool

This file is a brief for an AI model (or any writer) tasked with drafting a
blog post for the Vasool website. Follow it and the output will be
publishable as-is: correct format, on-brand voice, and good for SEO.

**Your deliverable is a single Markdown file** in `src/content/blog/`. Adding
that file is the entire publishing process — routing, the `/blog` index,
static prerendering with SEO tags + JSON-LD, and the `sitemap.xml` entry are
all generated from it automatically. You do not touch any other file.

> Human quick-reference lives at `src/content/blog/README.md`. This AGENTS.md
> is the fuller, writer-facing guide. If the two ever disagree, this file wins
> for *how to write*; the code in `src/lib/blog.ts` wins for *what parses*.

---

## 1. About the product (so you write accurately)

**Vasool** (also "Vasool Drive", built by **Thukal**) is a **voice-entry loan
collection and lending platform** for **money lenders, finance companies, and
NBFCs**, primarily in **India**, with a growing set of country pages.

What it does:

- Records **daily, weekly, and monthly** collections **by voice** (six Indian
  languages + English), so field agents log payments in seconds.
- Handles **EMI, gold, interest-only (kandhu vatti), and product-backed**
  loans, plus **chit funds** and **savings schemes**.
- **Live GPS tracking** and route tools for field staff.
- **Photo proof** and timestamps on every collection.
- Works **fully offline** and syncs when back online.
- **AI credit-risk scoring**.
- The site is bilingual: English and Tamil (`/ta` pages).

Do **not** invent features, prices, integrations, or customer names. If you're
unsure a capability exists, describe the *problem and approach* generically and
link to the relevant product page rather than asserting a specific feature.

---

## 2. Frontmatter (required at the top of every post)

Every file starts with a YAML frontmatter block between `---` fences:

```markdown
---
title: How to Reduce Loan Defaults with Daily Field Collections
description: One-sentence summary — this is the Google result snippet and card text.
date: 2026-08-05
author: Vasool Team
tags: [Collections, Field Operations]
keywords: reduce loan defaults, daily collection app, loan recovery
cover: /blog/my-cover.png
---
```

| Field         | Required | Notes                                                                 |
|---------------|----------|-----------------------------------------------------------------------|
| `title`       | Yes      | ~50–60 chars. Clear and keyword-relevant. Becomes the `<h1>` + `<title>`. |
| `description` | Yes      | ~120–155 chars. Compelling — it's the search snippet.                 |
| `date`        | Strongly | `YYYY-MM-DD`. Controls sort order (newest first) and the byline date. |
| `author`      | No       | Defaults to `Vasool Team`.                                            |
| `tags`        | No       | 1–3 short tags, e.g. `[Collections, Guides]`.                         |
| `keywords`    | No       | Comma-separated; feeds `<meta keywords>`.                             |
| `cover`       | No       | `/blog/…` image, 1200×630, used as the social/OG share image.        |

If a value contains a colon or a comma, wrap it in quotes:
`title: "Voice Entry vs Manual Entry: A Comparison"`.

---

## 3. File name = URL slug

The file name (minus `.md`) becomes the URL, so make it descriptive and
keyword-rich. Lowercase words separated by hyphens:

```
reduce-loan-defaults-with-daily-field-collections.md
  → https://vasool.app/blog/reduce-loan-defaults-with-daily-field-collections
```

- Prefix a file with `_` (e.g. `_wip-draft.md`) to keep it a **draft** — it is
  ignored by the build until you rename it. `README.md` is also ignored.

---

## 4. Voice & structure (match the existing posts)

The house style is **practical and field-tested**, written for a lender or
finance-company owner who runs collections on the ground — not marketing fluff.

- **Open with the real problem**, in plain terms. No "In today's fast-paced
  world" intros.
- **Short paragraphs** (2–4 sentences). One idea each.
- **Numbered `##` section headings** for a how-to; descriptive headings otherwise.
- Use **bulleted or numbered lists** for steps, checklists, and comparisons.
  A markdown **table** is great for "X vs Y".
- **Bold** the key terms a skimming reader should catch.
- Include **one blockquote** (`>`) with a concrete result or a memorable line.
- **End with a short wrap-up + one call to action** linking to a product page
  (usually `/pricing`, `/compare`, or `/features`).
- Target **700–1,200 words**. Specific and useful beats long.
- Write in **British/Indian English** (as the samples do: "behaviour",
  "instalment"), Indian lending vocabulary welcome (kandhu vatti, thandal, NBFC).

---

## 5. SEO rules (this is why the blog exists)

- Put the primary keyword in the **title**, the **slug**, the **first
  paragraph**, and **at least one `##` heading** — naturally, never stuffed.
- Write the `description` as ad copy for the search result: a benefit + a hook.
- **Link to 2–4 relevant product pages** from the body using descriptive
  anchor text (see the link map below). Internal links are a ranking factor and
  guide readers toward converting. Never use "click here".
- Give **every image real `alt` text** describing the picture.
- One post = **one primary topic**. Don't dilute it.

### Internal link map (use real anchors — these pages exist)

Product: `/features` · `/loan-types` · `/staff-tools` · `/pricing` · `/compare`

Solutions:
`/loan-collection-app` · `/daily-collection-app` · `/voice-entry-collection-app` ·
`/voice-approval-workflow` · `/weekly-collection-app` · `/monthly-finance-app` ·
`/line-management-app` · `/kandhu-vatti-app` · `/byaj-wasooli-app` · `/ugrani-app` ·
`/self-hosted-loan-software` · `/white-label-loan-app` · `/chit-fund-and-lending-app` ·
`/nbfc-loan-management` · `/sacco-management-system` · `/debt-collection-software-south-africa`

Countries: `/countries` and per-country pages such as
`/loan-management-software-philippines`, `/loan-management-software-nigeria`,
`/loan-management-software-kenya`, `/loan-management-software-sri-lanka`.

Company / legal: `/about` · `/blog` · `/privacy` · `/terms` · `/security`

Only link to a page when it's genuinely relevant to the sentence.

---

## 6. Pictures and video

Media files live in `public/blog/` and are referenced with an absolute
`/blog/...` path. Sizing is responsive automatically — you don't add wrappers.

**Pictures** (markdown image — lazy-loaded automatically). Always write alt text:

```markdown
![Field agent recording a collection by voice](/blog/voice-entry.png)
```

With a caption:

```html
<figure>
  <img src="/blog/dashboard.png" alt="Vasool collections dashboard" />
  <figcaption>The manager dashboard updates as agents collect.</figcaption>
</figure>
```

**Video by URL — the easy way.** Paste a video link **alone on its own line**
(blank line above and below) and it becomes a responsive 16:9 embed:

```markdown
Here's a 60-second walkthrough:

https://youtu.be/VIDEO_ID
```

Works for YouTube (`watch?v=`, `youtu.be`, `/embed/`, `/shorts/`), Vimeo, and
direct video files (`https://…/clip.mp4`, `.webm`, `.ogg`, `.mov`). A link
written **inline** — `[watch the demo](https://youtu.be/VIDEO_ID)` — stays a
normal link; only a URL by itself becomes an embed.

**Self-hosted file** (put the `.mp4` in `public/blog/`, use a full tag so you
can set a poster):

```html
<video src="/blog/product-demo.mp4" controls poster="/blog/demo-poster.png"></video>
```

> Post content is trusted (it lives in this repo), so raw HTML is rendered
> as-is. Don't paste untrusted third-party HTML into a post.

---

## 7. Checklist before you finish

- [ ] Frontmatter has `title`, `description`, and `date`.
- [ ] File name is a lowercase, hyphenated, keyword-rich slug.
- [ ] Primary keyword in title, slug, first paragraph, and a heading.
- [ ] 2–4 relevant internal links with descriptive anchor text.
- [ ] Short paragraphs, real headings, at least one list, one blockquote.
- [ ] A closing wrap-up and one CTA link.
- [ ] Every image has alt text; any media path starts with `/blog/`.
- [ ] No invented features, prices, or customer names.

To preview locally: `npm run dev` then open `/blog`. To verify it builds and
prerenders: `npm run build` (it will fail loudly if a post is missing a title).

---

## 8. Full sample post (use this as your template)

This is a real, published post. Copy its shape — frontmatter, heading rhythm,
internal links, blockquote, and closing CTA — for new posts.

````markdown
---
title: How to Reduce Loan Defaults with Daily Field Collections
description: Practical, field-tested ways money lenders and NBFCs cut defaults — tighter daily follow-ups, real-time visibility, and proof of every visit.
date: 2026-08-05
author: Vasool Team
tags: [Collections, Field Operations]
keywords: reduce loan defaults, daily collection app, loan recovery, field collection software
---

Defaults rarely happen on the due date. They build up quietly — a missed follow-up here, an agent who forgot to visit there, a payment that was collected but never recorded. For daily and weekly finance companies, the difference between a healthy book and a stressed one usually comes down to **collection discipline**, not interest rates.

Here is what consistently works for lenders running field collections.

## 1. Shorten the feedback loop to a single day

The longer the gap between a missed payment and someone noticing, the harder recovery gets. When collections are recorded on paper and reconciled weekly, a borrower can slip three or four instalments before anyone acts.

With a [daily collection app](/daily-collection-app), every payment (and every *missed* payment) shows up the moment the agent leaves the borrower. Managers can act on the same day instead of the next audit cycle.

## 2. Make every visit provable

"I went, they weren't home" is impossible to verify on paper. Modern field tools capture:

- **GPS location** of where the collection was actually recorded
- **Photo proof** of the borrower or the receipt
- **Timestamps** that can't be back-dated

This alone changes agent behaviour. When visits are provable, they happen.

> A lender we work with cut "phantom visits" to near zero in the first month simply because agents knew every entry carried a location and a timestamp.

## 3. Remove the friction that causes under-reporting

Agents under-report when recording is slow. If logging a collection means typing on a cramped form in the sun, some payments never get entered until the evening — and some never get entered at all.

[Voice entry](/voice-entry-collection-app) removes that friction: the agent speaks the amount, the app records it. Faster entry means fewer gaps between cash collected and cash recorded.

## 4. Rank accounts by risk, not by route

Not every overdue account deserves the same attention. Sort your follow-ups by:

1. Days past due
2. Outstanding amount
3. Repayment history

so that your best agents spend their time where recovery is still realistic.

## 5. Work offline, sync later

Rural routes and weak signals shouldn't stop collections. An app that works [fully offline](/features) and syncs when connectivity returns means field data is never lost — and never delayed.

---

Reducing defaults isn't one big lever. It's a dozen small ones: faster feedback, provable visits, frictionless recording, and risk-ranked follow-ups. Software won't collect the money for you, but it removes every excuse for a payment to go untracked.

Want to see how this works for your book? [Talk to us about Vasool](/pricing).
````

That's the whole job: write one Markdown file like the sample above, save it in
`src/content/blog/`, and it's ready to publish.
