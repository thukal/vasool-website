import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Minus,
  X,
  Mic,
  Camera,
  WifiOff,
  Server,
  Palette,
  Layers,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

type CellValue = "yes" | "partial" | "no";

interface CompareRow {
  feature: string;
  vasool: CellValue;
  typicalApp: CellValue;
  notebook: CellValue;
}

const compareRows: CompareRow[] = [
  { feature: "Voice to data — spoken entries become structured records (6 languages)", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "Chit funds & lending together in a single app", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "Self-host on your own server — even a Raspberry Pi", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "White-label with your own brand & subdomain", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "Photo proof on collections & photo KYC", vasool: "yes", typicalApp: "partial", notebook: "no" },
  { feature: "Works fully offline, syncs when back online", vasool: "yes", typicalApp: "partial", notebook: "yes" },
  { feature: "Daily, weekly & monthly line finance", vasool: "yes", typicalApp: "yes", notebook: "partial" },
  { feature: "EMI loans with foreclosure & tenure controls", vasool: "yes", typicalApp: "partial", notebook: "no" },
  { feature: "Gold loans with live gold-rate fetching", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "Product-backed loans tied to inventory", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "Automatic interest calculation", vasool: "yes", typicalApp: "yes", notebook: "no" },
  { feature: "PDF receipts & report export", vasool: "yes", typicalApp: "partial", notebook: "no" },
  { feature: "UPI collections (GPay, PhonePe, scan)", vasool: "yes", typicalApp: "partial", notebook: "no" },
  { feature: "Live GPS staff tracking & route planning", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "Role-based staff permissions", vasool: "yes", typicalApp: "partial", notebook: "no" },
  { feature: "Customer self-service portal", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "App interface in Tamil, Telugu, Hindi, Malayalam & Kannada", vasool: "yes", typicalApp: "partial", notebook: "no" },
  { feature: "Dedicated database per business", vasool: "yes", typicalApp: "no", notebook: "no" },
  { feature: "Audit log with before/after snapshots", vasool: "yes", typicalApp: "no", notebook: "no" },
];

const switchReasons = [
  {
    icon: Mic,
    title: "Voice to data, not typing",
    desc: 'Your agent says "Arun 500 cash" and Vasool turns the spoken words into a structured payment record against the right customer — in Tamil, Telugu, Hindi, Malayalam, Kannada or English. No other vasool app does this.',
  },
  {
    icon: Layers,
    title: "Chit & lending in one app",
    desc: "Run your chit funds and your lending book — daily, weekly, monthly, EMI, gold — in a single app instead of juggling separate software for each side of the business.",
  },
  {
    icon: Server,
    title: "Host it anywhere — even a Raspberry Pi",
    desc: "Run Vasool on our cloud, your own server, or a Raspberry Pi in your shop. Your borrower data lives where you decide, in a dedicated database that never mixes with other lenders.",
  },
  {
    icon: Palette,
    title: "White-label it as your own",
    desc: "Put your brand on it — your name, your logo, your own subdomain like yourbusiness.vasool.app. Customers see your finance business, not ours.",
  },
  {
    icon: Camera,
    title: "Photo proof on everything",
    desc: "Customer photos, ID proofs, signed documents and collection photo proof attached to every loan. Photo-wise tracking replaces the paper trail completely.",
  },
  {
    icon: WifiOff,
    title: "Offline-first like a notebook",
    desc: "The one thing a notebook does well — work without internet — Vasool does too. Record collections anywhere and sync automatically when the network returns.",
  },
];

const bestAppChecklist = [
  "Voice entry so field agents record collections hands-free",
  "Photo proof and photo KYC for every borrower",
  "Full offline support — collections don't stop when the network does",
  "Every loan type: daily, weekly, monthly, EMI, interest-only, gold",
  "Live GPS tracking and route planning for collection staff",
  "Automatic PDF receipts and exportable reports",
  "UPI collections recorded alongside cash",
  "Your own isolated database, not a shared multi-tenant table",
];

const faqs = [
  {
    q: "What is the best vasool app in 2026?",
    a: "The best vasool app in 2026 should cover every loan type you run (daily, weekly, monthly, EMI, gold), work fully offline, and remove manual typing in the field. Vasool is the only vasool app with voice entry collections in 6 languages plus photo proof, live GPS staff tracking, UPI collections, and a dedicated database per business — which is why money lenders and micro finance businesses across India are switching to it.",
  },
  {
    q: "What is a good alternative to a vasool book or vasool diary app?",
    a: "If you've outgrown a basic vasool book or vasool diary app, look for one that goes beyond a digital ledger: Vasool adds voice entry collections, photo KYC, gold and EMI loan management, live GPS staff tracking, route planning, PDF receipts, and a customer self-service portal — while still working fully offline like a simple ledger app.",
  },
  {
    q: "Is there a free vasool app?",
    a: "Vasool is free to get started — book a demo and try it with your own loan data. The standard plan is ₹699/month with every feature included: unlimited staff accounts, live location tracking, route management, and reports. There are no premium tiers locking away core features.",
  },
  {
    q: "Can I move my data from a notebook or another vasool app?",
    a: "Yes. Vasool supports importing your existing customers and loans, so you can move from a manual vasool notebook or another collection app without re-entering history. From day one, your staff record collections by voice or a single tap, and balances, interest, and due dates are calculated automatically.",
  },
  {
    q: "Does Vasool work for kandhu vatti, thandal, and line vasool businesses?",
    a: "Yes. Vasool is built for Indian lending styles — kandhu vatti and thandal (Tamil daily interest lending), line vasool, byaj wasooli, ugrani, and pigmy collection businesses are all covered by its daily, weekly, monthly, and interest-only loan types, with the app and voice entry available in Tamil, Telugu, Hindi, Malayalam, and Kannada.",
  },
  {
    q: "Can I host the vasool app on my own server?",
    a: "Yes. Unlike cloud-only vasool apps, Vasool can run on our cloud, on your own server, or even on a Raspberry Pi in your office. Self-hosting gives you complete control of your borrower data and works well for lenders who want everything on premises.",
  },
  {
    q: "Can I white-label Vasool with my own brand?",
    a: "Yes. Vasool supports white-labeling — your business name, your logo, and your own branded subdomain like yourbusiness.vasool.app. Your customers and staff see your finance brand throughout the app and customer portal.",
  },
  {
    q: "Can I manage chit funds and lending in the same app?",
    a: "Yes. Vasool handles chit funds and lending together in a single app — daily, weekly, monthly, and EMI loans, gold loans, interest-only loans, and chit operations — so you don't need separate software for each side of your finance business.",
  },
];

const compareFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
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
      name: "Compare",
      item: "https://vasool.app/compare",
    },
  ],
};

const Cell = ({ value }: { value: CellValue }) => {
  if (value === "yes") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/10">
        <Check className="w-4 h-4 text-secondary" strokeWidth={3} aria-label="Included" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/10">
        <Minus className="w-4 h-4 text-amber-500" strokeWidth={3} aria-label="Varies or limited" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted">
      <X className="w-4 h-4 text-muted-foreground/60" strokeWidth={3} aria-label="Not available" />
    </span>
  );
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

const Compare = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Best Vasool App 2026 - Compare Vasool vs Vasool Book Apps & Manual Diary"
        description="Looking for a Vasool Book or Vasool Diary alternative? Compare the best vasool apps of 2026 — voice to data collections, self-hosting on your own server, white-label branding, chit & lending in one app, photo proof, GPS staff tracking. See why money lenders switch to Vasool."
        keywords="best vasool app 2026, free vasool app, vasool book alternative, vasool diary alternative, vasool app comparison, vasool book vs vasool app, money lender app comparison, loan collection app comparison, self hosted loan management software, white label loan collection app, chit fund and lending app, voice to data collection entry, kandhu vatti app, thandal app, line vasool app, byaj wasooli app, digital vasool ledger, replace vasool notebook"
        canonical="/compare"
        structuredData={[compareFAQSchema, breadcrumbSchema]}
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
              The best vasool app in 2026 —{" "}
              <span className="text-gradient">compared</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Searching for a Vasool Book or Vasool Diary alternative? Here's
              how Vasool compares with typical vasool book apps and the manual
              notebook most lending businesses still run on — voice to data
              entry, self-hosting on your own server, white-label branding, and
              chit &amp; lending in one app, feature by feature.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <section className="container mx-auto px-4 sm:px-6 -mt-6 sm:-mt-10 relative z-10 pb-14 sm:pb-20">
        <div className="max-w-5xl mx-auto bg-card rounded-2xl border border-border/60 shadow-card-hover overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/40">
                  <th className="text-left font-semibold text-foreground px-5 sm:px-6 py-4 w-[44%]">
                    Feature
                  </th>
                  <th className="text-center font-bold text-secondary px-3 py-4">
                    Vasool
                  </th>
                  <th className="text-center font-semibold text-foreground px-3 py-4">
                    Typical vasool book apps
                  </th>
                  <th className="text-center font-semibold text-foreground px-3 py-4">
                    Manual notebook / diary
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border/40 last:border-b-0 ${
                      i % 2 === 1 ? "bg-muted/20" : ""
                    }`}
                  >
                    <td className="px-5 sm:px-6 py-3.5 text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-3 py-3.5 text-center">
                      <Cell value={row.vasool} />
                    </td>
                    <td className="px-3 py-3.5 text-center">
                      <Cell value={row.typicalApp} />
                    </td>
                    <td className="px-3 py-3.5 text-center">
                      <Cell value={row.notebook} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 sm:px-6 py-4 bg-muted/30 border-t border-border/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Cell value="yes" /> Included
            </span>
            <span className="inline-flex items-center gap-2">
              <Cell value="partial" /> Varies or limited
            </span>
            <span className="inline-flex items-center gap-2">
              <Cell value="no" /> Not available
            </span>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">
          "Typical vasool book apps" reflects features commonly found in
          generic vasool book and diary apps — individual apps vary.
        </p>
      </section>

      {/* Why switch */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Why money lenders switch to Vasool
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most vasool book apps digitize the ledger and stop there. Vasool
            runs the whole field operation — and four of its advantages no
            other vasool app offers at all.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl">
          {switchReasons.map((r) => (
            <div
              key={r.title}
              className="bg-card rounded-xl p-6 border border-border/60 shadow-card flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                <r.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vasool Book / Diary alternative */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Looking for a Vasool Book or Vasool Diary alternative?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>
              Vasool book and vasool diary apps replace your paper notebook
              with a digital one — customer names, amounts, and balances on a
              phone instead of paper. That's a good first step, but the daily
              work of a lending business happens in the field: agents knocking
              on doors, collecting cash and UPI, and writing entries while
              standing on the street.
            </p>
            <p>
              Vasool is built for that field work. Agents speak entries instead
              of typing them, attach photo proof on the spot, and follow
              GPS-planned routes — while the office watches collections land in
              a live dashboard. Add gold loans with live gold-rate fetching,
              EMI with foreclosure controls,{" "}
              <Link to="/staff-tools" className="text-secondary hover:underline">
                staff tracking
              </Link>
              , and a customer self-service portal, and you have an upgrade
              path no simple ledger app offers. See the full{" "}
              <Link to="/features" className="text-secondary hover:underline">
                feature list
              </Link>{" "}
              or the{" "}
              <Link to="/loan-types" className="text-secondary hover:underline">
                loan types
              </Link>{" "}
              Vasool covers.
            </p>
          </div>
        </div>
      </section>

      {/* Free vasool app */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Is there a free vasool app?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>
              Vasool is free to get started — book a demo and try it with your
              own loan data before you pay anything. The standard plan is
              ₹699/month with <em>every</em> feature included: unlimited staff
              accounts, live location tracking, route management, reports, and
              exports. No premium tiers, no features locked behind upsells.
            </p>
            <p>
              Be careful with "free" vasool apps that monetize another way —
              shared databases, ads, or your borrower data. Vasool gives every
              business its own isolated database, so your book stays yours. See{" "}
              <Link to="/pricing" className="text-secondary hover:underline">
                full pricing details
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Best vasool app checklist */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            What makes the best vasool app in 2026?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
            Whichever app you choose, measure it against this checklist before
            moving your book:
          </p>
          <ul className="space-y-3">
            {bestAppChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
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

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Comparison FAQs
          </h2>
          <p className="text-muted-foreground mb-8">
            Common questions from lenders comparing vasool apps.
          </p>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
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
              See the difference yourself
            </h2>
            <p className="text-white/60 mb-7 max-w-xl mx-auto leading-relaxed">
              Book a free demo and record your first collection by voice in
              under a minute.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={CONTACT_PHONE_HREF}>
                <Button variant="hero" size="lg">
                  Book a Demo
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
      </section>

      <Footer />
    </main>
  );
};

export default Compare;
