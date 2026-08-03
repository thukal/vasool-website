import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLangPage } from "@/lib/i18nPage";
import { CONTACT_PHONE_HREF, mailtoHref } from "@/lib/contact";
import {
  DEFAULT_LOCALE,
  PRICE_LOCALES,
  detectLocale,
  localeByCode,
  money,
  readStoredLocale,
  storeLocale,
  type PriceLocale,
} from "@/lib/pricing";

type BillingCycle = "monthly" | "yearly";

const MONTHLY = 699;
const YEARLY = Math.round((MONTHLY * 10) / 12);

const planTypeIcons: LucideIcon[] = [Calendar, CalendarDays, Package, ShoppingBag, Wallet, Percent];

const content = {
  en: {
    title: "Pricing - Simple Plan for Money Lenders | Vasool",
    description:
      "Transparent pricing for Vasool loan management CRM. Single loan product at {{price}}/month with unlimited staff, live location tracking, and route management. Need more loan products? Contact us for a tailored plan.",
    back: "Back to Home",
    h1a: "Simple, transparent",
    h1b: "pricing",
    intro:
      "One loan product at {{price}}/month — every feature included, no hidden add-ons. Running more than one loan product? Talk to us and we'll tailor a plan that fits your business.",
    monthly: "Monthly",
    yearly: "Yearly",
    monthsFree: "2 MONTHS FREE",
    planName: "Standard",
    planTagline: "Run one loan product with the full Vasool toolkit.",
    perMonth: "/month",
    billedYearly: (t: string) => `Billed ${t} yearly · {{tax}}`,
    billedMonthly: "Billed monthly · {{tax}}",
    getStarted: "Get Started",
    planFeatures: [
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
    customTitle: "More than one product?",
    customTagline: "Running multiple loan products? Let's build a plan that fits your business.",
    custom: "Custom",
    pricingWord: "pricing",
    customSub: "Tailored to your business · {{tax}}",
    talkToUs: "Talk to us",
    customFeatures: [
      "2 to 6 loan plan types",
      "Everything in Standard",
      "Storage tailored to your needs",
      "Personalized onboarding",
      "Direct line to our team",
    ],
    gstNote1: "Price is exclusive of",
    gstNote2: "{{taxShort}}",
    gstNote3: "Need more storage? Add extra at just",
    gstNote4: "{{storage}}/GB/month",
    planTypesTitle: "6 loan plan types",
    planTypesText: "Pick the one that matches how you lend. Need more than one? Talk to us and we'll tailor a plan.",
    planTypes: [
      { name: "Daily Loan", desc: "Collect repayments every day." },
      { name: "Weekly Loan", desc: "Collect repayments every week." },
      { name: "Daily Product Loan", desc: "Product-backed lending with daily collections." },
      { name: "Weekly Product Loan", desc: "Product-backed lending with weekly collections." },
      { name: "EMI", desc: "Structured equal monthly instalments." },
      { name: "Interest Only", desc: "Borrower pays interest each period, principal at end." },
    ],
    referTitle: "Refer & Save",
    referText: "Share Vasool with another money lender and both of you save for the next 3 months.",
    newClient: "New client",
    newClientAmt: "{{newClient}} off/month",
    referClient: "Referring client",
    referClientAmt: "{{referClient}} off/month",
    first3: "For first 3 months.",
    partnerTitle: "Grow with Vasool — Partner Program",
    partnerText: "Earn commission for every client you bring to Vasool. Choose the structure that works best for you.",
    opt1: "Option 1",
    opt1Title: "Fixed {{symbol}} per client",
    opt1Text: "A fixed commission per client per month.",
    opt2: "Option 2",
    opt2Title: "10% of monthly fee",
    opt2Text: "10% commission on each client's monthly plan fee.",
    becomePartner: "Become a Partner",
    faqTitle: "Frequently asked questions",
    faqText: "Still not sure? Drop us a call and we'll help you pick the right plan.",
    faqs: [
      { q: "Can I add more loan products later?", a: "Yes. Start with one loan product at {{price}}/month and reach out when you're ready to add more. We'll tailor a plan that fits the number of products and the size of your business." },
      { q: "Is tax included in the price?", a: "No. The price shown is exclusive of tax. We add {{taxLabel}} on top of the plan price at checkout." },
      { q: "How does the referral discount work?", a: "When someone signs up using your referral, they get {{newClient}} off per month for their first 3 months. You get {{referClient}} off per month for 3 months on your own plan. The discount is applied automatically to the next 3 invoices after the referred client subscribes." },
      { q: "What happens if I exceed my storage limit?", a: "We'll notify you before you hit your limit. You can add extra storage at {{storage}}/GB/month as an add-on — it's billed on the same invoice as your plan. No loss of data and no interruption to service." },
      { q: "Does the plan really include location tracking?", a: "Yes. Live field staff location tracking and route & history tracking are included at {{price}}/month. We believe these are core to running a money-lending business and shouldn't be locked behind premium tiers." },
    ],
  },
  ta: {
    title: "Pricing - Money Lenders-க்கான Simple Plan | Vasool",
    description:
      "Vasool loan management CRM-க்கு transparent pricing. ஒரு loan product ₹699/month — unlimited staff, live location tracking மற்றும் route management உடன். அதிக loan product வேணுமா? Tailored plan-க்கு எங்களை contact பண்ணுங்க.",
    back: "Home-க்கு திரும்பு",
    h1a: "Simple, transparent",
    h1b: "pricing",
    intro:
      "ஒரு loan product ₹699/month — எல்லா feature-உம் அடங்கும், hidden add-on இல்ல. ஒன்னுக்கு மேல loan product நடத்துறீங்களா? எங்களோட பேசுங்க, உங்க business-க்கு ஏத்த plan tailor பண்ணித் தர்றோம்.",
    monthly: "Monthly",
    yearly: "Yearly",
    monthsFree: "2 MONTHS FREE",
    planName: "Standard",
    planTagline: "முழு Vasool toolkit-உடன் ஒரு loan product நடத்துங்க.",
    perMonth: "/month",
    billedYearly: (t: string) => `வருஷத்துக்கு ${t} bill · +18% GST`,
    billedMonthly: "மாசம் bill · +18% GST",
    getStarted: "Get Started",
    planFeatures: [
      "1 loan plan type (ஏதாவது ஒன்னு choose பண்ணுங்க)",
      "Unlimited staff account",
      "Role-based access control",
      "Live field staff location tracking",
      "Route & history tracking",
      "1 GB storage",
      "Basic reports",
      "Advanced reports + export",
      "Full analytics + data export",
    ],
    customTitle: "ஒன்னுக்கு மேல product-ஆ?",
    customTagline: "பல loan product நடத்துறீங்களா? உங்க business-க்கு ஏத்த plan build பண்ணலாம்.",
    custom: "Custom",
    pricingWord: "pricing",
    customSub: "உங்க business-க்கு ஏத்த மாதிரி · +18% GST",
    talkToUs: "எங்களோட பேசுங்க",
    customFeatures: [
      "2 முதல் 6 loan plan type வரை",
      "Standard-ல இருக்கற எல்லாமே",
      "உங்க தேவைக்கு ஏத்த storage",
      "Personalized onboarding",
      "எங்க team-க்கு direct line",
    ],
    gstNote1: "விலை",
    gstNote2: "{{taxShort}}",
    gstNote3: "சேர்க்காதது. அதிக storage வேணுமா? வெறும்",
    gstNote4: "{{storage}}/GB/month",
    planTypesTitle: "6 loan plan type",
    planTypesText: "நீங்க எப்படி கடன் கொடுக்கறீங்களோ அதுக்கு ஏத்ததை choose பண்ணுங்க. ஒன்னுக்கு மேல வேணுமா? எங்களோட பேசுங்க.",
    planTypes: [
      { name: "Daily Loan", desc: "தினமும் repayment collect பண்ணுங்க." },
      { name: "Weekly Loan", desc: "வாரம் repayment collect பண்ணுங்க." },
      { name: "Daily Product Loan", desc: "Daily collection-உடன் product-backed lending." },
      { name: "Weekly Product Loan", desc: "Weekly collection-உடன் product-backed lending." },
      { name: "EMI", desc: "Structured equal monthly instalment." },
      { name: "Interest Only", desc: "ஒவ்வொரு period-உம் வட்டி, principal கடைசியில." },
    ],
    referTitle: "Refer & Save",
    referText: "இன்னொரு money lender-க்கு Vasool-ஐ share பண்ணுங்க, அடுத்த 3 மாசத்துக்கு ரெண்டு பேரும் save பண்ணுங்க.",
    newClient: "New client",
    newClientAmt: "{{newClient}} off/month",
    referClient: "Referring client",
    referClientAmt: "{{referClient}} off/month",
    first3: "முதல் 3 மாசத்துக்கு.",
    partnerTitle: "Vasool-உடன் Grow பண்ணுங்க — Partner Program",
    partnerText: "Vasool-க்கு கொண்டுவர்ற ஒவ்வொரு client-க்கும் commission சம்பாதியுங்க. உங்களுக்கு ஏத்த structure-ஐ choose பண்ணுங்க.",
    opt1: "Option 1",
    opt1Title: "Client-க்கு fixed ₹",
    opt1Text: "Client-க்கு மாசம் fixed ரூபாய் commission.",
    opt2: "Option 2",
    opt2Title: "Monthly fee-ல 10%",
    opt2Text: "ஒவ்வொரு client-ஓட monthly plan fee-ல 10% commission.",
    becomePartner: "Partner ஆகுங்க",
    faqTitle: "அடிக்கடி கேட்கற Questions",
    faqText: "இன்னும் sure இல்லையா? ஒரு call பண்ணுங்க, சரியான plan choose பண்ண help பண்றோம்.",
    faqs: [
      { q: "அப்புறம் இன்னும் loan product add பண்ணலாமா?", a: "ஆமா. ₹699/month-ல ஒரு loan product-ஆ start பண்ணுங்க, add பண்ண ready ஆனப்போ எங்களை contact பண்ணுங்க. Product எண்ணிக்கை மற்றும் உங்க business size-க்கு ஏத்த plan tailor பண்றோம்." },
      { q: "விலையில GST அடங்குமா?", a: "இல்ல. காட்டப்படற விலை GST சேர்க்காதது. Indian tax regulation-படி checkout-ல plan price மேல 18% GST சேர்க்கப்படும்." },
      { q: "Referral discount எப்படி work ஆகுது?", a: "உங்க referral-ஐ use பண்ணி யாராவது signup பண்ணா, அவங்களுக்கு முதல் 3 மாசம் மாசம் ₹50 off. உங்களுக்கு உங்க plan-ல 3 மாசம் மாசம் ₹30 off. Referred client subscribe பண்ணப்புறம் அடுத்த 3 invoice-ல discount automatic-ஆ apply ஆகும்." },
      { q: "Storage limit தாண்டினா என்ன ஆகும்?", a: "Limit-ஐ அடையற முன்னாடி உங்களுக்கு notify பண்றோம். ₹49/GB/month-ல extra storage add-on-ஆ சேர்க்கலாம் — அது உங்க plan-ஓட அதே invoice-ல bill ஆகும். Data இழப்பு இல்ல, service interruption இல்ல." },
      { q: "Plan-ல location tracking உண்மையா அடங்குமா?", a: "ஆமா. Live field staff location tracking மற்றும் route & history tracking ₹699/month-ல அடங்கும். இது money-lending business நடத்த core-னு நம்புறோம், premium tier-ல lock பண்ணக்கூடாது." },
    ],
  },
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
          <span className="text-sm sm:text-base font-semibold text-foreground">{q}</span>
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 pl-14">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const { i18n } = useTranslation();
  const { isTamil, canonical, alternates, ogLocale } = useLangPage("/pricing");
  const c = isTamil ? content.ta : content.en;
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  // Always render INR first. The prerendered HTML is shared by every visitor
  // and every crawler, so the currency can only change after hydration.
  const [loc, setLoc] = useState<PriceLocale>(DEFAULT_LOCALE);

  useEffect(() => {
    // The Tamil page serves India; leave it in rupees.
    if (isTamil) return;
    setLoc(readStoredLocale() ?? detectLocale());
  }, [isTamil]);

  const pickLocale = (code: string) => {
    const next = localeByCode(code);
    setLoc(next);
    storeLocale(next.code);
  };

  const priceInr = billing === "monthly" ? MONTHLY : YEARLY;

  const tokens: Record<string, string> = {
    price: money(MONTHLY, loc),
    storage: money(49, loc),
    newClient: money(50, loc),
    referClient: money(30, loc),
    symbol: loc.symbol.trim(),
    tax: loc.taxNote,
    taxShort: loc.code === "IN" ? "18% GST" : "applicable local taxes",
    taxLabel: loc.taxLabel,
  };

  /** Replaces the {{...}} price tokens in the copy with local-currency values. */
  const fill = (s: string) =>
    s.replace(/\{\{(\w+)\}\}/g, (match, key: string) => tokens[key] ?? match);

  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Vasool Loan Management CRM",
    description:
      "Loan management CRM for money lenders and microfinance businesses in India with live field staff tracking, route management, and multiple loan plan types.",
    image: "https://vasool.app/logo-full.png",
    offers: {
      "@type": "Offer",
      name: `Vasool ${c.planName}`,
      url: "https://vasool.app/pricing",
      price: MONTHLY,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceSpecification: { "@type": "UnitPriceSpecification", price: MONTHLY, priceCurrency: "INR", unitText: "MONTH" },
    },
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: fill(f.q), acceptedAnswer: { "@type": "Answer", text: fill(f.a) } })),
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <SEO
        title={c.title}
        description={fill(c.description)}
        keywords="vasool pricing, loan management software pricing, microfinance software cost, money lender app pricing, chit fund software price, finance CRM pricing India"
        canonical={canonical}
        ogLocale={ogLocale}
        alternates={alternates}
        structuredData={[pricingStructuredData, faqStructuredData]}
      />

      {/* Header */}
      <div className="bg-muted/40 border-b border-border pt-24 pb-12 sm:pt-28 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link to={isTamil ? "/ta" : "/"} className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />
            {c.back}
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              {c.h1a} <span className="text-gradient">{c.h1b}</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{fill(c.intro)}</p>
          </div>

          {/* Billing toggle */}
          <div className="mt-8 sm:mt-10 inline-flex items-center gap-1 p-1 rounded-full bg-muted border border-border">
            <button onClick={() => setBilling("monthly")} className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all ${billing === "monthly" ? "bg-secondary text-secondary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}>
              {c.monthly}
            </button>
            <button onClick={() => setBilling("yearly")} className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${billing === "yearly" ? "bg-secondary text-secondary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}>
              {c.yearly}
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${billing === "yearly" ? "bg-secondary-foreground/15 text-secondary-foreground" : "bg-accent/20 text-accent"}`}>{c.monthsFree}</span>
            </button>
          </div>

          {!isTamil && (
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <label
                htmlFor="pricing-country"
                className="text-sm text-muted-foreground"
              >
                Show prices in
              </label>
              <select
                id="pricing-country"
                value={loc.code}
                onChange={(e) => pickLocale(e.target.value)}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-secondary/40"
              >
                {PRICE_LOCALES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.name} ({l.currency})
                  </option>
                ))}
              </select>
              {loc.code !== "IN" && (
                <span className="text-xs text-muted-foreground">
                  Converted from ₹{MONTHLY}/month — indicative, invoiced amount
                  may differ with the exchange rate on the day.
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Pricing cards */}
      <section className="container mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {/* Standard plan */}
          <div className="bg-card rounded-2xl border border-secondary shadow-card-hover flex flex-col">
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-bold text-foreground">{c.planName}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed min-h-[2.5rem]">{c.planTagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{money(priceInr, loc)}</span>
                <span className="text-sm text-muted-foreground">{c.perMonth}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {billing === "yearly" ? fill(c.billedYearly(money(YEARLY * 12, loc))) : fill(c.billedMonthly)}
              </p>
              <a href={CONTACT_PHONE_HREF} className="block mt-5">
                <Button variant="hero" size="lg" className="w-full">
                  {c.getStarted}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="border-t border-border/60 px-6 sm:px-7 py-5 sm:py-6 space-y-3">
              {c.planFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Custom */}
          <div className="bg-card rounded-2xl border border-border/60 shadow-card hover:shadow-card-hover transition-all flex flex-col">
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-bold text-foreground">{c.customTitle}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed min-h-[2.5rem]">{c.customTagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{c.custom}</span>
                <span className="text-sm text-muted-foreground">{c.pricingWord}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{fill(c.customSub)}</p>
              <a href={CONTACT_PHONE_HREF} className="block mt-5">
                <Button variant="default" size="lg" className="w-full">
                  {c.talkToUs}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="border-t border-border/60 px-6 sm:px-7 py-5 sm:py-6 space-y-3">
              {c.customFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          {c.gstNote1} <span className="font-semibold">{fill(c.gstNote2)}</span> {c.gstNote3}{" "}
          <span className="font-semibold text-foreground">{fill(c.gstNote4)}</span>.
        </p>
      </section>

      {/* Loan plan types */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{c.planTypesTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{c.planTypesText}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
          {c.planTypes.map((lt, i) => {
            const Icon = planTypeIcons[i];
            return (
              <div key={lt.name} className="bg-card rounded-xl p-5 border border-border/60 shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{lt.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{lt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Referral */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-secondary/10 via-card to-card border border-secondary/20 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{c.referTitle}</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">{c.referText}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.newClient}</div>
                  <div className="mt-1 text-2xl font-extrabold text-secondary">{fill(c.newClientAmt)}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.first3}</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.referClient}</div>
                  <div className="mt-1 text-2xl font-extrabold text-secondary">{fill(c.referClientAmt)}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.first3}</div>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{c.partnerTitle}</h2>
              <p className="text-white/60 mb-6 max-w-2xl leading-relaxed">{c.partnerText}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">{c.opt1}</div>
                  <div className="mt-1 text-lg font-bold text-white">{fill(c.opt1Title)}</div>
                  <div className="text-sm text-white/60 mt-1">{c.opt1Text}</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">{c.opt2}</div>
                  <div className="mt-1 text-lg font-bold text-white">{c.opt2Title}</div>
                  <div className="text-sm text-white/60 mt-1">{c.opt2Text}</div>
                </div>
              </div>
              <a href={mailtoHref("Vasool Partner Program")}>
                <Button variant="hero" size="lg">
                  {c.becomePartner}
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
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{c.faqTitle}</h2>
          <p className="text-muted-foreground mb-8">{c.faqText}</p>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <FAQItem key={f.q} q={fill(f.q)} a={fill(f.a)} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={CONTACT_PHONE_HREF}>
              <Button variant="heroOutline" size="lg">
                {c.talkToUs}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer key={i18n.language} />
    </main>
  );
};

export default Pricing;
