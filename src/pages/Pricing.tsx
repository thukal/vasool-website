import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Sparkles,
  Calendar,
  CalendarDays,
  Package,
  ShoppingBag,
  Wallet,
  Percent,
  Gift,
  Users,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

type BillingCycle = "monthly" | "yearly";

interface Plan {
  key: string;
  name: string;
  monthly: number;
  yearly: number; // per-month equivalent when billed yearly (2 months free => 10/12 of monthly)
  tagline: string;
  highlight?: boolean;
  features: { label: string; included: boolean }[];
}

const plans: Plan[] = [
  {
    key: "basic",
    name: "Basic",
    monthly: 699,
    yearly: Math.round((699 * 10) / 12),
    tagline: "For lenders just getting started with a single loan product.",
    features: [
      { label: "1 loan plan type (choose any one)", included: true },
      { label: "Unlimited staff accounts", included: true },
      { label: "Role-based access control", included: true },
      { label: "Live field staff location tracking", included: true },
      { label: "Route & history tracking", included: true },
      { label: "1 GB storage", included: true },
      { label: "Basic reports", included: true },
      { label: "Advanced reports + export", included: false },
      { label: "Full analytics + data export", included: false },
    ],
  },
  {
    key: "standard",
    name: "Standard",
    monthly: 999,
    yearly: Math.round((999 * 10) / 12),
    tagline: "Our most popular plan — for growing finance businesses.",
    highlight: true,
    features: [
      { label: "Any 3 loan plan types", included: true },
      { label: "Unlimited staff accounts", included: true },
      { label: "Role-based access control", included: true },
      { label: "Live field staff location tracking", included: true },
      { label: "Route & history tracking", included: true },
      { label: "2 GB storage", included: true },
      { label: "Advanced reports + export", included: true },
      { label: "Basic reports", included: true },
      { label: "Full analytics + data export", included: false },
    ],
  },
  {
    key: "full",
    name: "Full Suite",
    monthly: 1499,
    yearly: Math.round((1499 * 10) / 12),
    tagline: "Every loan type and every feature — built for scale.",
    features: [
      { label: "All 6 loan plan types", included: true },
      { label: "Unlimited staff accounts", included: true },
      { label: "Role-based access control", included: true },
      { label: "Live field staff location tracking", included: true },
      { label: "Route & history tracking", included: true },
      { label: "5 GB storage", included: true },
      { label: "Basic reports", included: true },
      { label: "Advanced reports + export", included: true },
      { label: "Full analytics + data export", included: true },
    ],
  },
];

const loanPlanTypes = [
  {
    icon: Calendar,
    name: "Daily Loan",
    desc: "Collect repayments every day.",
  },
  {
    icon: CalendarDays,
    name: "Weekly Loan",
    desc: "Collect repayments every week.",
  },
  {
    icon: Package,
    name: "Daily Product Loan",
    desc: "Product-backed lending with daily collections.",
  },
  {
    icon: ShoppingBag,
    name: "Weekly Product Loan",
    desc: "Product-backed lending with weekly collections.",
  },
  {
    icon: Wallet,
    name: "EMI",
    desc: "Structured equal monthly instalments.",
  },
  {
    icon: Percent,
    name: "Interest Only",
    desc: "Borrower pays interest each period, principal at end.",
  },
];

const comparisonRows: {
  label: string;
  values: [string | boolean, string | boolean, string | boolean];
}[] = [
  { label: "Loan plan types", values: ["1", "3", "All 6"] },
  { label: "Unlimited staff accounts", values: [true, true, true] },
  { label: "Role-based access control", values: [true, true, true] },
  { label: "Live field staff location tracking", values: [true, true, true] },
  { label: "Route & history tracking", values: [true, true, true] },
  { label: "Storage", values: ["1 GB", "2 GB", "5 GB"] },
  { label: "Basic reports", values: [true, true, true] },
  { label: "Advanced reports + export", values: [false, true, true] },
  { label: "Full analytics + data export", values: [false, false, true] },
  { label: "Extra storage add-on", values: ["₹49/GB/mo", "₹49/GB/mo", "₹49/GB/mo"] },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes. You can upgrade or downgrade at any time from your account settings. Upgrades take effect immediately and we prorate the difference. Downgrades take effect at the start of your next billing cycle.",
  },
  {
    q: "Is GST included in the price?",
    a: "No. All prices shown are exclusive of GST. 18% GST will be added on top of the plan price at checkout, as required by Indian tax regulations.",
  },
  {
    q: "How does the referral discount work?",
    a: "When someone signs up using your referral, they get ₹50 off per month for their first 3 months. You get ₹30 off per month for 3 months on your own plan. The discount is applied automatically to the next 3 invoices after the referred client subscribes.",
  },
  {
    q: "What happens if I exceed my storage limit?",
    a: "We'll notify you before you hit your limit. You can add extra storage at ₹49/GB/month as an add-on — it's billed on the same invoice as your plan. No loss of data and no interruption to service.",
  },
  {
    q: "Do all plans really include location tracking?",
    a: "Yes. Live field staff location tracking and route & history tracking are included in every plan — Basic, Standard, and Full Suite. We believe these are core to running a money-lending business and shouldn't be locked behind premium tiers.",
  },
];

const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);

const Cell = ({ value }: { value: string | boolean }) => {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary/15 text-secondary">
        <Check className="w-4 h-4" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground/60">
        <X className="w-4 h-4" strokeWidth={2.5} />
      </span>
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
};

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

const pricingStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vasool Loan Management CRM",
  description:
    "Loan management CRM for money lenders and microfinance businesses in India with live field staff tracking, route management, and multiple loan plan types.",
  offers: plans.map((p) => ({
    "@type": "Offer",
    name: `Vasool ${p.name}`,
    price: p.monthly,
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: p.monthly,
      priceCurrency: "INR",
      unitText: "MONTH",
    },
  })),
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Pricing = () => {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <main className="min-h-screen">
      <SEO
        title="Pricing - Simple Plans for Money Lenders & Microfinance"
        description="Transparent pricing for Vasool loan management CRM. Plans start at ₹699/month with unlimited staff, live location tracking, and route management. Choose Basic, Standard, or Full Suite."
        keywords="vasool pricing, loan management software pricing, microfinance software cost, money lender app pricing, chit fund software price, finance CRM pricing India"
        canonical="/pricing"
        structuredData={[pricingStructuredData, faqStructuredData]}
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Simple, transparent{" "}
              <span className="text-gradient">pricing</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Pick a plan that fits the size of your lending business. Every
              plan includes unlimited staff accounts, live location tracking,
              and route management — no hidden add-ons, no surprises.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="mt-8 sm:mt-10 inline-flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billing === "monthly"
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                billing === "yearly"
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Yearly
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  billing === "yearly"
                    ? "bg-secondary-foreground/15 text-secondary-foreground"
                    : "bg-accent/20 text-accent"
                }`}
              >
                2 MONTHS FREE
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing cards */}
      <section className="container mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;
            const totalYearly = plan.yearly * 12;
            return (
              <div
                key={plan.key}
                className={`relative bg-card rounded-2xl border transition-all flex flex-col ${
                  plan.highlight
                    ? "border-secondary shadow-card-hover md:scale-[1.03] md:-my-2"
                    : "border-border/60 shadow-card hover:shadow-card-hover"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed min-h-[2.5rem]">
                    {plan.tagline}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                      ₹{formatPrice(price)}
                    </span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {billing === "yearly" ? (
                      <>
                        Billed ₹{formatPrice(totalYearly)} yearly · +18% GST
                      </>
                    ) : (
                      <>Billed monthly · +18% GST</>
                    )}
                  </p>

                  <a href="https://app.vasool.app/signup" className="block mt-5">
                    <Button
                      variant={plan.highlight ? "hero" : "default"}
                      size="lg"
                      className="w-full"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>

                <div className="border-t border-border/60 px-6 sm:px-7 py-5 sm:py-6 space-y-3">
                  {plan.features.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-start gap-3 text-sm"
                    >
                      {f.included ? (
                        <Check
                          className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                          strokeWidth={3}
                        />
                      ) : (
                        <X
                          className="w-5 h-5 text-muted-foreground/40 mt-0.5 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                      )}
                      <span
                        className={
                          f.included
                            ? "text-foreground"
                            : "text-muted-foreground/70 line-through"
                        }
                      >
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          All plans include <span className="font-semibold">+18% GST</span> on
          the above prices. Need more storage? Add extra at just{" "}
          <span className="font-semibold text-foreground">₹49/GB/month</span>.
        </p>
      </section>

      {/* Loan plan types */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            6 loan plan types
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Pick the ones that match how you lend. Basic includes any one plan
            type, Standard includes any three, Full Suite unlocks all six.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
          {loanPlanTypes.map((lt) => (
            <div
              key={lt.name}
              className="bg-card rounded-xl p-5 border border-border/60 shadow-card flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                <lt.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">
                  {lt.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  {lt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison table (desktop) */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Compare all features
          </h2>
          <p className="text-muted-foreground mb-8">
            A side-by-side look at what's included in every plan.
          </p>

          <div className="bg-card rounded-2xl border border-border/60 shadow-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/40">
                  <th className="text-left text-sm font-semibold text-foreground px-6 py-4 w-2/5">
                    Features
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.key}
                      className={`text-center text-sm font-semibold px-4 py-4 ${
                        p.highlight
                          ? "text-secondary"
                          : "text-foreground"
                      }`}
                    >
                      {p.name}
                      <div className="text-xs font-normal text-muted-foreground mt-0.5">
                        ₹{formatPrice(p.monthly)}/mo
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={
                      idx !== comparisonRows.length - 1
                        ? "border-b border-border/50"
                        : ""
                    }
                  >
                    <td className="text-sm text-foreground px-6 py-4">
                      {row.label}
                    </td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={`text-center px-4 py-4 ${
                          plans[i].highlight ? "bg-secondary/5" : ""
                        }`}
                      >
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Referral section */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-secondary/10 via-card to-card border border-secondary/20 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Refer &amp; Save
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                Share Vasool with another money lender and both of you save for
                the next 3 months.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    New client
                  </div>
                  <div className="mt-1 text-2xl font-extrabold text-secondary">
                    ₹50 off/month
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    For first 3 months.
                  </div>
                </div>
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Referring client
                  </div>
                  <div className="mt-1 text-2xl font-extrabold text-secondary">
                    ₹30 off/month
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    For first 3 months.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner program */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto rounded-2xl bg-hero p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Grow with Vasool — Partner Program
              </h2>
              <p className="text-white/60 mb-6 max-w-2xl leading-relaxed">
                Earn commission for every client you bring to Vasool. Choose the
                structure that works best for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                    Option 1
                  </div>
                  <div className="mt-1 text-lg font-bold text-white">
                    Fixed ₹ per client
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    A fixed rupee commission per client per month.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                    Option 2
                  </div>
                  <div className="mt-1 text-lg font-bold text-white">
                    10% of monthly fee
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    10% commission on each client's monthly plan fee.
                  </div>
                </div>
              </div>
              <a href="mailto:partners@vasool.app?subject=Vasool%20Partner%20Program">
                <Button variant="hero" size="lg">
                  Become a Partner
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Still not sure? Drop us a call and we'll help you pick the right
            plan.
          </p>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="tel:+918680901007">
              <Button variant="heroOutline" size="lg">
                Talk to us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;
