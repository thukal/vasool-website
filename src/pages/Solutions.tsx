import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CONTACT_PHONE_HREF } from "@/lib/contact";
import { SOLUTION_GROUPS, ALL_SOLUTIONS } from "@/lib/solutions";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vasool.app/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://vasool.app/solutions",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vasool solutions",
  itemListElement: ALL_SOLUTIONS.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.label,
    url: `https://vasool.app${s.to}`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      q: "Do I need a different plan for each solution?",
      a: "No. These are pages, not products — they describe the same platform from the angle a particular business arrives at it. One account covers daily, weekly and monthly lines, gold, rentals and chits together; which ones appear in your app is set when your company is configured.",
    },
    {
      q: "Which page should I start from?",
      a: "Start from whichever matches how you describe your own business. A daily line operator and a kandhu vatti business often run the same book — the pages differ in vocabulary and emphasis, not in what the software does.",
    },
    {
      q: "Can one business use more than one of these?",
      a: "Yes, and most do. A lender running daily lines might also hold gold pledges and rent out a few carts. Those run alongside each other in the same account, and the reports keep each product's figures separate rather than summing them together.",
    },
    {
      q: "Where do country-specific pages live?",
      a: "On the countries hub. Solutions describe what the software does; country pages cover the currency, payment rail, local business date and the kind of institution that signs up in that market.",
    },
  ].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Solutions = () => (
  <main className="min-h-screen">
    <Navigation />
    <SEO
      title="Solutions - Collection Software by Lending Model | Vasool"
      description="Every way Vasool is used: daily, weekly and monthly collection, gold loans, rentals, chit funds, vehicle finance, voice entry, NBFC and SACCO setups, self-hosted and white-label — plus pages written in Tamil, Hindi, Kannada, Spanish and French vocabulary."
      keywords="loan collection software solutions, daily collection app, gold loan software, rental collection app, chit fund software, vehicle finance software, voice entry collection app, nbfc loan management, sacco management system, self-hosted loan software, white label loan app"
      canonical="/solutions"
      structuredData={[breadcrumbSchema, itemListSchema, faqSchema]}
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
            {ALL_SOLUTIONS.length} ways in
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            One platform,{" "}
            <span className="text-gradient">many ways to describe it</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-7">
            A daily line operator, a pawn broker, a cart renter and a chit
            foreman rarely use the same words for what they do — and none of
            them call it "loan management software". These pages describe the
            same platform from whichever angle you arrive at it. One account
            runs several of them at once.
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

    {SOLUTION_GROUPS.map((group) => (
      <section
        key={group.heading}
        className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 border-b border-border/50 last:border-b-0"
      >
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {group.heading}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{group.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl">
          {group.items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group bg-card rounded-xl p-5 sm:p-6 border border-border/60 shadow-card hover:border-secondary/50 transition-colors flex flex-col"
            >
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                {item.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {item.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                Read more
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    ))}

    <section className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
      <div className="max-w-6xl bg-card rounded-xl border border-border/60 shadow-card p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
          Looking for your country instead?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">
          Solutions describe what the software does. Country pages cover the
          currency, the payment rail, the local business date and the kind of
          institution that signs up in that market.
        </p>
        <Link to="/countries">
          <Button variant="heroOutline" size="lg">
            Browse countries
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>

    <Footer />
  </main>
);

export default Solutions;
