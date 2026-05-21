import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
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
import { CONTACT_PHONE_HREF, mailtoHref } from "@/lib/contact";

type BillingCycle = "monthly" | "yearly";

const standardPlan = {
  name: "Standard",
  monthly: 699,
  yearly: Math.round((699 * 10) / 12),
  tagline: "Run one loan product with the full Vasool toolkit.",
  features: [
    "1 loan plan type (choose any one)",
    "Unlimited staff accounts",
    "Role-based access control",
    "Live field staff location tracking",
    "Route & history tracking",
    "1 GB storage",
    "Basic reports",
    "Advanced reports + export",
    "Full analytics + data export",
  ],
};

const customPlanFeatures = [
  "2 to 6 loan plan types",
  "Everything in Standard",
  "Storage tailored to your needs",
  "Personalized onboarding",
  "Direct line to our team",
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

const faqs = [
  {
    q: "Can I add more loan products later?",
    a: "Yes. Start with one loan product at ₹699/month and reach out when you're ready to add more. We'll tailor a plan that fits the number of products and the size of your business.",
  },
  {
    q: "Is GST included in the price?",
    a: "No. The price shown is exclusive of GST. 18% GST will be added on top of the plan price at checkout, as required by Indian tax regulations.",
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
    q: "Does the plan really include location tracking?",
    a: "Yes. Live field staff location tracking and route & history tracking are included at ₹699/month. We believe these are core to running a money-lending business and shouldn't be locked behind premium tiers.",
  },
];

const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);

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
  offers: {
    "@type": "Offer",
    name: `Vasool ${standardPlan.name}`,
    price: standardPlan.monthly,
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: standardPlan.monthly,
      priceCurrency: "INR",
      unitText: "MONTH",
    },
  },
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
  const price = billing === "monthly" ? standardPlan.monthly : standardPlan.yearly;
  const totalYearly = standardPlan.yearly * 12;

  return (
    <main className="min-h-screen">
      <SEO
        title="Pricing - Simple Plan for Money Lenders & Microfinance"
        description="Transparent pricing for Vasool loan management CRM. Single loan product at ₹699/month with unlimited staff, live location tracking, and route management. Need more loan products? Contact us for a tailored plan."
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
              One loan product at ₹699/month — every feature included, no hidden
              add-ons. Running more than one loan product? Talk to us and we'll
              tailor a plan that fits your business.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {/* Standard plan */}
          <div className="bg-card rounded-2xl border border-secondary shadow-card-hover flex flex-col">
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-bold text-foreground">
                {standardPlan.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed min-h-[2.5rem]">
                {standardPlan.tagline}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  ₹{formatPrice(price)}
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {billing === "yearly" ? (
                  <>Billed ₹{formatPrice(totalYearly)} yearly · +18% GST</>
                ) : (
                  <>Billed monthly · +18% GST</>
                )}
              </p>

              <a href={CONTACT_PHONE_HREF} className="block mt-5">
                <Button variant="hero" size="lg" className="w-full">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="border-t border-border/60 px-6 sm:px-7 py-5 sm:py-6 space-y-3">
              {standardPlan.features.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm">
                  <Check
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    strokeWidth={3}
                  />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact us for more products */}
          <div className="bg-card rounded-2xl border border-border/60 shadow-card hover:shadow-card-hover transition-all flex flex-col">
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-bold text-foreground">
                More than one product?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed min-h-[2.5rem]">
                Running multiple loan products? Let's build a plan that fits
                your business.
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  Custom
                </span>
                <span className="text-sm text-muted-foreground">pricing</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Tailored to your business · +18% GST
              </p>

              <a href={CONTACT_PHONE_HREF} className="block mt-5">
                <Button variant="default" size="lg" className="w-full">
                  Talk to us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="border-t border-border/60 px-6 sm:px-7 py-5 sm:py-6 space-y-3">
              {customPlanFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm">
                  <Check
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    strokeWidth={3}
                  />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          Price is exclusive of <span className="font-semibold">18% GST</span>.
          Need more storage? Add extra at just{" "}
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
            Pick the one that matches how you lend. Need more than one? Talk to
            us and we'll tailor a plan.
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
              <a href={mailtoHref("Vasool Partner Program")}>
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
            <a href={CONTACT_PHONE_HREF}>
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
