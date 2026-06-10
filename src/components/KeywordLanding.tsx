import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  HelpCircle,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

export interface LandingFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface LandingStep {
  title: string;
  desc: string;
}

export interface LandingProse {
  heading: string;
  paragraphs: ReactNode[];
}

export interface LandingFAQ {
  q: string;
  a: string;
}

export interface RelatedLink {
  label: string;
  to: string;
}

export interface KeywordLandingConfig {
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
  };
  breadcrumbName: string;
  badge: string;
  h1: ReactNode;
  intro: string;
  features: LandingFeature[];
  featuresHeading: string;
  featuresSub: string;
  steps: LandingStep[];
  stepsHeading: string;
  prose: LandingProse[];
  checklist?: { heading: string; sub: string; items: string[] };
  faqs: LandingFAQ[];
  related: RelatedLink[];
  ctaHeading: string;
  ctaSub: string;
}

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card rounded-xl border border-border/60 shadow-card overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
          <span className="text-sm sm:text-base font-semibold text-foreground">
            {q}
          </span>
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 pl-14">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const KeywordLanding = ({ config }: { config: KeywordLandingConfig }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vasool.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: config.breadcrumbName,
        item: `https://vasool.app${config.seo.canonical}`,
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <SEO
        title={config.seo.title}
        description={config.seo.description}
        keywords={config.seo.keywords}
        canonical={config.seo.canonical}
        structuredData={[faqSchema, breadcrumbSchema]}
      />

      {/* Header */}
      <div className="bg-hero py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-emerald-300 text-xs font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {config.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
              {config.h1}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-7">
              {config.intro}
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

      {/* Features */}
      <section className="container mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {config.featuresHeading}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {config.featuresSub}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl">
          {config.features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-6 border border-border/60 shadow-card"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {config.stepsHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl">
          {config.steps.map((s, i) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 border border-border/60 shadow-card"
            >
              <div className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-foreground mb-1.5 text-sm sm:text-base">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Prose sections */}
      {config.prose.map((section) => (
        <section
          key={section.heading}
          className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {section.heading}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Checklist */}
      {config.checklist && (
        <section className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {config.checklist.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              {config.checklist.sub}
            </p>
            <ul className="space-y-3">
              {config.checklist.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base"
                >
                  <Check
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    strokeWidth={3}
                  />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {config.faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="container mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-foreground mb-4 text-center">
            Explore more
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {config.related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="px-4 py-2 rounded-full bg-card border border-border/60 text-sm text-foreground hover:border-secondary hover:text-secondary transition-colors"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto rounded-2xl bg-hero p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {config.ctaHeading}
            </h2>
            <p className="text-white/60 mb-7 max-w-xl mx-auto leading-relaxed">
              {config.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={CONTACT_PHONE_HREF}>
                <Button variant="hero" size="lg">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link to="/compare">
                <Button variant="heroOutline" size="lg">
                  Compare Vasool
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default KeywordLanding;
