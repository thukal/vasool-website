# Blog — how to add and manage posts

Every blog post is a single Markdown file in this folder
(`src/content/blog/`). Add a `.md` file, commit, and on the next build the
post is automatically:

- routed at `/blog/<filename>` (the file name is the URL slug),
- listed on the `/blog` index (newest first, by `date`),
- prerendered to static HTML with its own SEO tags and JSON-LD, and
- added to `public/sitemap.xml` so search engines discover it.

No code changes are needed to publish a post.

## Frontmatter

Start each file with a frontmatter block:

```markdown
---
title: How to Reduce Loan Defaults with Daily Field Collections
description: One-sentence summary — used for the meta description and cards.
date: 2026-08-05            # YYYY-MM-DD — controls sort order (newest first)
author: Vasool Team         # optional (defaults to "Vasool Team")
tags: [Collections, Guides] # optional
keywords: loan collection, defaults, recovery   # optional (meta keywords)
cover: /blog/my-cover.png   # optional — used as the social/OG share image
---

Your markdown content starts here...
```

Only `title` and `description` are strictly required. `date` is strongly
recommended (it sets the order and the "published on" line).

## The URL / slug

The file name becomes the slug. Use lowercase words separated by hyphens —
these are also part of your SEO, so make them descriptive:

```
reduce-loan-defaults-with-daily-field-collections.md
    -> https://vasool.app/blog/reduce-loan-defaults-with-daily-field-collections
```

## Pictures and video

Put media files in `public/blog/` and reference them with an absolute
`/blog/...` path. Images and embeds are made responsive automatically.

**Pictures** (standard markdown, lazy-loaded automatically):

```markdown
![Field agent recording a collection](/blog/agent-voice-entry.png)
```

With a caption, use an HTML figure:

```html
<figure>
  <img src="/blog/dashboard.png" alt="Vasool collections dashboard" />
  <figcaption>The manager dashboard updates as agents collect.</figcaption>
</figure>
```

**Video by URL — the easy way.** Paste a video link on its own line (blank
line above and below) and it is embedded automatically, responsively at 16:9:

```markdown
Here's a walkthrough of the app:

https://youtu.be/VIDEO_ID
```

This works for:

- YouTube — `youtube.com/watch?v=…`, `youtu.be/…`, `/embed/…`, `/shorts/…`
  (embedded privacy-friendly via youtube-nocookie.com)
- Vimeo — `vimeo.com/…` or `player.vimeo.com/video/…`
- A direct video file — any `https://…/clip.mp4` (also `.webm`, `.ogg`, `.mov`)

A link written inline — `[watch the demo](https://youtu.be/VIDEO_ID)` — stays a
normal link; only a URL alone on its own line becomes an embed.

**Self-hosted video file** (put the `.mp4` in `public/blog/` and reference it
with a full HTML tag so you can set a poster):

```html
<video src="/blog/product-demo.mp4" controls poster="/blog/demo-poster.png"></video>
```

You can still hand-write an `<iframe>` if you need custom embed options — raw
HTML in a post is rendered as-is.

> Note: post content is trusted (authored here in the repo), so raw HTML in a
> post is rendered as-is. Don't paste untrusted third-party HTML into a post.

## SEO checklist for a good post

- A clear, keyword-relevant `title` and descriptive slug.
- A compelling `description` (this is what shows in Google results).
- Link to relevant product pages from the body (e.g.
  `[voice entry](/voice-entry-collection-app)`) — internal links help ranking.
- Set `cover` to a 1200×630 image for good link previews on social/WhatsApp.
- Give every image real `alt` text.
