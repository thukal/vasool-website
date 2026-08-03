import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building2, Coins, Landmark, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CONTACT_PHONE_HREF } from "@/lib/contact";
import { COUNTRIES, NOT_A_LICENCE, inSentence } from "@/lib/countries";

/**
 * Every dictation language across the supported markets, deduped and read as a
 * sentence. Built from COUNTRIES so adding a market cannot leave this list
 * quietly stale — the failure mode of a hand-written list on a hub page.
 */
const VOICE_LANGUAGES = (() => {
  const langs = [
    ...new Set(COUNTRIES.flatMap((c) => c.voiceLangs.split(/,\s*|\s+and\s+/))),
  ];
  const last = langs.pop();
  return `${langs.join(", ")} and ${last}`;
})();

const FAQS = [
  {
    q: "Which countries can I set a company up in?",
    a: "India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia. Choosing a country sets the currency, the local business date and time zone, and the phone and address formats — it does not change the accounting meaning of any amount you record. Cambodia has a market page here but is not yet selectable at setup, and it is labelled that way rather than quietly listed alongside the rest.",
  },
  {
    q: "Does Vasool let me lend in these countries?",
    a: "No. Vasool records and controls collections; it does not grant a lending licence or registration anywhere. Your legal entity, permission to lend, permitted borrower and product scope, pricing limits and disclosure duties come from your own country's law and regulator, not from software.",
  },
  {
    q: "Is a daily line legal in my country?",
    a: "Collection frequency does not decide that. Regulators classify the underlying credit — the lender's legal form, the borrower type, the pricing and the disclosures — not the way an app groups routes. A line in Vasool is an operational portfolio for scheduling field work, nothing more.",
  },
  {
    q: "Can one account run more than one country?",
    a: "Each company is set up for one country, with its own isolated database. An owner operating in two countries runs two companies, so currency, local dates and borrower records never mix.",
  },
  {
    q: "Is the interface available in local languages?",
    a: "The app ships with six Indian languages plus English, and Tamil covers Sri Lanka's Northern and Eastern provinces. Bahasa Indonesia and Spanish are on the roadmap — until they ship, those markets run in English, and we would rather say so than imply otherwise.",
  },
  {
    q: "Can officers record entries by voice outside India?",
    a: "Yes, and it is worth separating from the question above. The interface language is what the buttons and reports are written in; the dictation language is what an officer can speak at the doorstep. Voice entry works in every supported market — Swahili in Kenya, Filipino in the Philippines, Bahasa Indonesia, Khmer, Spanish and the rest — even where the interface itself is still English. Vasool converts the speech into a structured record and shows the match for confirmation before saving.",
  },
  {
    q: "Which actions can be held for approval?",
    a: "Maker-checker covers customers, loans, chit and savings schemes, gold sales, expenses, staff, roles and routes, enabled per role and per resource. A gated create, edit or delete is held as a request, routes to the owner or an assigned approver, and applies only on approval — with both outcomes on the audit trail. Holding an individual collection entry is on the roadmap and does not ship today.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vasool.app/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Supported Countries",
      item: "https://vasool.app/countries",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Countries Vasool supports",
  itemListElement: COUNTRIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Vasool in ${inSentence(c)}`,
    url: `https://vasool.app${c.slug}`,
  })),
};

const ROW = [
  { icon: Building2, label: "Who it's for", key: "buyer" as const },
  { icon: Wallet, label: "Payment rail", key: "rail" as const },
  { icon: Coins, label: "Currency & time", key: "currency" as const },
  { icon: Landmark, label: "Regulatory home", key: "regulator" as const },
];

const Countries = () => (
  <main className="min-h-screen">
    <Navigation />
    <SEO
      title="Loan Management Software by Country | Vasool"
      description="Vasool supports company setup in India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia — each with its own currency, local business date, payment rail and buyer. Collections software, not a lending licence."
      keywords="loan management software by country, microfinance software philippines, loan management software nigeria, sacco loan management software kenya, microfinance software sri lanka, koperasi simpan pinjam software, credit provider software south africa, microcredit software colombia, multi country lending software, international loan collection app"
      canonical="/countries"
      structuredData={[faqSchema, breadcrumbSchema, itemListSchema]}
    />

    <div className="bg-muted/40 border-b border-border pt-24 pb-12 sm:pt-28 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Eight live markets
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            The same collection discipline,{" "}
            <span className="text-gradient">every market you enter</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-7">
            A daily route in Tamil Nadu, a market-trader loan in Lagos, a SACCO
            loan in Nairobi and a microenterprise loan in Bogotá can all look
            identical in the field — small amounts, collected often. Legally and
            commercially they are different businesses. Vasool keeps one thing
            constant across all of them: proof of where every payment went, who
            collected it, by which method, and against which principal.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a href={CONTACT_PHONE_HREF}>
              <Button variant="hero" size="lg">
                Book a Free Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link to="/pricing">
              <Button variant="heroOutline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <section className="container mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="max-w-3xl mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Pick your country
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Setting up a company fixes its currency, local business date and time
          zone, and phone and address formats. What it never does is change the
          accounting meaning of an amount — a figure entered in Jakarta reads
          exactly as typed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 max-w-6xl">
        {COUNTRIES.map((c) => (
          <Link
            key={c.slug}
            to={c.slug}
            className="group bg-card rounded-xl p-6 sm:p-7 border border-border/60 shadow-card hover:border-secondary/50 transition-colors"
          >
            <div className="flex items-center justify-between gap-4 mb-3">
              <h3 className="text-xl font-bold text-foreground">
                {c.name}
                {c.status === "preview" && (
                  <span className="ml-2.5 align-middle rounded-full border border-border bg-muted px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                    Setup not live
                  </span>
                )}
              </h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {c.blurb}
            </p>
            <dl className="space-y-2.5 border-t border-border/60 pt-4">
              {ROW.map((r) => (
                <div key={r.label} className="flex items-start gap-2.5">
                  <r.icon className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <dt className="text-[0.7rem] uppercase tracking-wider text-muted-foreground/70 font-semibold">
                      {r.label}
                    </dt>
                    <dd className="text-sm text-foreground leading-snug">
                      {c[r.key]}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Link>
        ))}
      </div>
    </section>

    <section className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
      <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          A line is an operating tool, not a legal category
        </h2>
        <p>
          In Vasool a line is a portfolio of loans managed together — by route,
          market, agent, geography or repayment frequency. It exists so a
          collector's day can be scheduled and a day's cash can be reconciled.
          An owner might run a Monday weekly line, a daily market line and a
          monthly-interest line side by side.
        </p>
        <p>
          Regulators classify the credit underneath, not the app's grouping. The
          same weekly workflow could be a regulated microfinance loan, a
          cooperative member loan, a licensed lending company's product, a bank
          microloan — or an unlawful informal loan. Never read legality off the
          fact that repayments happen daily, weekly or monthly.
        </p>
        <p>{NOT_A_LICENCE}</p>
      </div>
    </section>

    <section className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
      <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          One field workflow across every market
        </h2>
        <p>
          What does not change country to country is how work reaches the book.
          In every market an officer dictates the entry rather
          than typing it — {VOICE_LANGUAGES} — and Vasool writes a structured
          record rather than an audio clip. Expenses go the same way — the fuel,
          the fare, the market fee — so a round is recorded in both directions
          while the officer is still on it.
        </p>
        <p>
          Every entry attaches to a route. Routes are planned daily or weekly and
          assigned ahead of the day, officers navigate with GPS, completion is
          tracked live, and a location history shows where staff actually went.
          That is what makes the day book per route and end-of-day cash
          settlement per officer — and what makes officer performance, overdue
          ageing, cash flow by account and profit and loss worth reading.
        </p>
        <p>
          The changes that carry real consequence go the other way. Switch
          maker-checker on per role and per resource and a gated create, edit or
          delete is held as a request until an owner or assigned approver allows
          it, with the approval and the rejection both on the audit trail. What
          each market's lenders usually gate differs, and every country page
          above says which records those are.
        </p>
        <p>
          <Link
            to="/voice-approval-workflow"
            className="text-secondary hover:underline"
          >
            See how the voice approval workflow fits together
          </Link>
          , including what it does not cover today.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div
              key={f.q}
              className="bg-card rounded-xl border border-border/60 shadow-card p-5 sm:p-6"
            >
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2">
                {f.q}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto rounded-2xl bg-hero p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Run your book in your own currency
          </h2>
          <p className="text-white/60 mb-7 max-w-xl mx-auto leading-relaxed">
            Tell us the country and the institution type, and we will show you
            the setup on a call — including what Vasool does not do yet in your
            market.
          </p>
          <a href={CONTACT_PHONE_HREF}>
            <Button variant="hero" size="lg">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default Countries;
