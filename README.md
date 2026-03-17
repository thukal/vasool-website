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
- **Phone:** +91 8680901007
