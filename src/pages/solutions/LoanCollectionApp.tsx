import { Link } from "react-router-dom";
import {
  Mic,
  MapPin,
  IndianRupee,
  FileText,
  AlertCircle,
  WifiOff,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "Loan Collection App for Money Lenders & Micro Finance | Vasool",
    description:
      "Vasool is a loan collection app built for Indian money lenders — record collections by voice, track field agents with GPS, collect cash & UPI, auto-generate PDF receipts, and chase overdues. Works offline. Free demo.",
    keywords:
      "loan collection app, loan collection software, debt collection app, loan recovery app, collection agent app, field collection app, money lender collection app, loan collection app india, EMI collection app, loan tracker app",
    canonical: "/loan-collection-app",
  },
  breadcrumbName: "Loan Collection App",
  badge: "Loan Collection App",
  h1: (
    <>
      The loan collection app built for{" "}
      <span className="text-gradient">Indian money lenders</span>
    </>
  ),
  intro:
    "From disbursal to the last installment, Vasool runs your entire collection operation: field agents record payments by voice, cash and UPI are reconciled automatically, receipts go out as PDFs, and overdues surface on your dashboard before they become bad debt.",
  features: [
    {
      icon: Mic,
      title: "Voice entry in the field",
      desc: 'Agents say "Arun 500 cash" and the collection is recorded against the right borrower — no typing while standing at the doorstep.',
    },
    {
      icon: IndianRupee,
      title: "Cash + UPI together",
      desc: "GPay, PhonePe, scan-to-pay and cash collections recorded side by side, with every transaction in the audit log.",
    },
    {
      icon: MapPin,
      title: "GPS routes & live tracking",
      desc: "Plan collection routes, navigate borrower to borrower, and watch your agents move on a live map from the office.",
    },
    {
      icon: FileText,
      title: "Automatic PDF receipts",
      desc: "Every collection generates a receipt instantly. Day book, P&L, and officer performance reports export to PDF too.",
    },
    {
      icon: AlertCircle,
      title: "Overdue tracking",
      desc: "Outstanding, collected-today, and overdue amounts on a real-time dashboard, with customer-wise overdue reports.",
    },
    {
      icon: WifiOff,
      title: "Works offline",
      desc: "No network on the route? Collections keep recording offline and sync automatically when the connection returns.",
    },
  ],
  featuresHeading: "Everything a collection operation needs",
  featuresSub:
    "Vasool covers the field, the office, and the borrower — in one loan collection app.",
  steps: [
    {
      title: "Disburse the loan",
      desc: "Create daily, weekly, monthly, EMI, interest-only, or gold loans with the schedule generated automatically.",
    },
    {
      title: "Collect in the field",
      desc: "Agents follow GPS routes and record each payment by voice or a single tap — cash or UPI.",
    },
    {
      title: "Reconcile at the office",
      desc: "Collections land on the live dashboard as they happen. Day book per route closes the day in minutes.",
    },
    {
      title: "Report & repeat",
      desc: "P&L, overdue, and officer performance reports tell you exactly where your book stands.",
    },
  ],
  stepsHeading: "How loan collection works with Vasool",
  prose: [
    {
      heading: "Why a dedicated loan collection app beats a khata app",
      paragraphs: [
        "Generic ledger and khata apps record who owes what — but lending is more than a balance. A real loan collection app understands schedules: a 100-day daily loan, a weekly line, an EMI with foreclosure, interest-only with principal at the end. Vasool generates the schedule when you disburse, so every agent knows exactly what is due from every borrower today.",
        <>
          It also understands field work. Your agents aren't sitting at a desk
          — they're on a two-wheeler moving between streets. That's why Vasool
          leads with voice entry, offline support, and{" "}
          <Link to="/staff-tools" className="text-secondary hover:underline">
            GPS staff tools
          </Link>
          , not just a digital notebook.
        </>,
        <>
          Compare it yourself: see how Vasool stacks up against typical vasool
          book apps on the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Built for every collection style in India",
      paragraphs: [
        <>
          Daily line collections, weekly market-day rounds, monthly interest
          visits, EMI due dates — Vasool supports{" "}
          <Link to="/loan-types" className="text-secondary hover:underline">
            nine loan types
          </Link>{" "}
          with collection workflows for each. The app and voice entry work in
          English, Tamil, Telugu, Hindi, Malayalam, and Kannada, so your
          collection agents work in the language they think in.
        </>,
        "And because each business runs on its own dedicated database — on our cloud or your own server — your borrower book stays completely yours.",
      ],
    },
  ],
  checklist: {
    heading: "What the best loan collection app must have",
    sub: "Use this checklist when choosing a loan collection app for your business:",
    items: [
      "Voice entry so agents record collections without typing",
      "Offline mode that never loses an entry",
      "All your loan types: daily, weekly, monthly, EMI, interest-only, gold",
      "Cash and UPI collections in one place",
      "Live GPS tracking and route planning for agents",
      "Instant PDF receipts and exportable reports",
      "Overdue and outstanding visibility in real time",
      "A dedicated database so your data never mixes with other lenders",
    ],
  },
  faqs: [
    {
      q: "What is the best loan collection app in India?",
      a: "The best loan collection app should handle every Indian lending style — daily, weekly, monthly, EMI, interest-only, and gold loans — work offline in the field, and remove typing for agents. Vasool covers all of these and adds voice entry in 6 languages, GPS staff tracking, UPI collections, and PDF receipts, which is why money lenders and micro finance businesses across India use it.",
    },
    {
      q: "Does the loan collection app work without internet?",
      a: "Yes. Vasool is offline-first: agents can record collections, add customers, and check balances with no network, and everything syncs automatically when the connection returns. No entry is ever lost.",
    },
    {
      q: "Can my collection agents use it in Tamil or Hindi?",
      a: "Yes. The app interface and voice entry both work in English, Tamil, Telugu, Hindi, Malayalam, and Kannada. Each agent can use the language they're comfortable with.",
    },
    {
      q: "How do I track my collection agents?",
      a: "Vasool shows your field agents on a live map with GPS tracking, route planning, route completion, and a day book per route. Officer performance reports show who collected what, where, and when.",
    },
    {
      q: "How much does a loan collection app cost?",
      a: "Vasool's standard plan is ₹699/month with every feature included — unlimited staff accounts, live location tracking, route management, and reports. You can book a free demo and try it with your own loan data first.",
    },
  ],
  related: [
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Weekly Collection App", to: "/weekly-collection-app" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Voice Entry Collection App", to: "/voice-entry-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Put your collections on autopilot",
  ctaSub:
    "Book a free demo and see a full collection day — disbursal to day book — in 15 minutes.",
};

const LoanCollectionApp = () => <KeywordLanding config={config} />;

export default LoanCollectionApp;
