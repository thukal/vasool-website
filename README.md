# Vasool — Multi-Tenant Microfinance Loan Management System

Marketing website for **Vasool**, a complete multi-tenant microfinance loan management platform built by [Thukal](mailto:hello@thukal.in).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, loan types, features highlight, staff tools, CTA |
| `/features` | All 13 feature categories with detailed descriptions |
| `/loan-types` | Daily, Weekly, and Product-Based loan deep dives |
| `/staff-tools` | Staff management, financials, mobile app, admin oversight |
| `/about` | Company story, mission, vision, values |
| `/privacy` | Privacy policy (multi-tenant data ownership) |
| `/terms` | Terms of service |
| `/security` | Security features and responsible disclosure |

## AI agent & LLM readability (GEO)

The site is built so AI assistants (ChatGPT, Claude, Perplexity, Gemini, …)
can crawl it, understand it, and cite it accurately:

| File | Purpose |
|------|---------|
| `public/llms.txt` | Short, curated Markdown index of every page — the [llms.txt](https://llmstxt.org/) convention. Its `## Blog` section is regenerated from `src/content/blog/*.md` on every build (see `scripts/sync-blog.mjs`) — never edit it by hand. |
| `public/llms-full.txt` | Longer Markdown summary of the whole product (features, loan types, security, pricing) for agents that want more than links. |
| `public/robots.txt` | Explicitly allows major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) in addition to search engines. |
| `public/sitemap.xml` | Every route, with `hreflang` alternates, kept in sync with the blog via `scripts/sync-blog.mjs`. |

Every page also ships **JSON-LD structured data** (`Organization`,
`SoftwareApplication`, `BlogPosting`, etc. — see `src/components/SEO.tsx`)
and is **fully prerendered to static HTML** (`scripts/prerender.mjs`), so a
crawler that doesn't execute JavaScript still sees complete content.

**Every route also has a Markdown alternate.** `scripts/prerender.mjs`
writes `dist/<route>.md` next to every `dist/<route>.html` — nav/footer/icon
chrome stripped, internal links made absolute — and the HTML head links to
it (`<link rel="alternate" type="text/markdown">`). Blog posts serve their
original `src/content/blog/*.md` source directly instead of a converted
copy. This needs no manual step: it's generated for every route in
`public/sitemap.xml` on every build, same as the `.html` file.

When adding a new page or blog post, update `public/llms.txt` (and
`public/llms-full.txt` for major product changes) so agents' summaries of
Vasool stay accurate — blog posts do this automatically, everything else is
manual.

## Tech Stack

- **Vite** — Build tool and dev server
- **React 18** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling (teal green theme)
- **shadcn/ui** — Component library (Radix UI)
- **react-i18next** — Internationalization (English + Tamil)
- **React Router v6** — Client-side routing
- **Lucide React** — Icons

## Getting Started

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx                # Hero section with nav
│   ├── LoanTypesSection.tsx    # Landing page loan types
│   ├── FeaturesHighlight.tsx   # Landing page features overview
│   ├── StaffHighlight.tsx      # Landing page staff tools
│   ├── AllFeatures.tsx         # Full feature category grid
│   ├── CTA.tsx                 # Call-to-action section
│   ├── Footer.tsx              # Site footer
│   ├── LanguageSelector.tsx    # EN/TA language switcher
│   └── ui/                     # shadcn/ui components
├── pages/
│   ├── Index.tsx               # Landing page
│   ├── Features.tsx            # Features detail page
│   ├── LoanTypes.tsx           # Loan types detail page
│   ├── StaffTools.tsx          # Staff tools detail page
│   ├── AboutUs.tsx             # About us page
│   ├── PrivacyPolicy.tsx       # Privacy policy
│   ├── TermsOfService.tsx      # Terms of service
│   ├── Security.tsx            # Security page
│   └── NotFound.tsx            # 404 page
├── i18n/
│   ├── index.ts                # i18n config
│   └── locales/
│       ├── en.json             # English translations
│       └── ta.json             # Tamil translations
└── index.css                   # Theme (teal green color scheme)
```

## i18n

The site supports English and Tamil. Language preference is persisted in `localStorage`. All user-facing strings are in `src/i18n/locales/`.

## Contact

- **Email:** hello@thukal.in
- **Phone:** +91 86829 27187
