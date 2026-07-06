import { Link } from "react-router-dom";
import {
  Layers,
  Users,
  Repeat,
  Wallet,
  PieChart,
  LayoutDashboard,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "Chit Fund & Lending App - Chits & Loans in One App | Vasool",
    description:
      "Vasool runs your chit funds and lending business in a single app — daily, weekly, monthly, EMI and gold loans alongside chit operations. One dashboard, one staff team, one platform. Free demo.",
    keywords:
      "chit fund and lending app, chit fund software, chit and loan management app, chit fund management software, run chit and finance in one app, chit fund collection app, chit fund and microfinance software, chit business app india",
    canonical: "/chit-fund-and-lending-app",
  },
  breadcrumbName: "Chit Fund & Lending App",
  badge: "Chit + Lending — One App",
  h1: (
    <>
      Run chit funds and lending{" "}
      <span className="text-gradient">in a single app</span>
    </>
  ),
  intro:
    "Most finance businesses juggle two systems — one for chits, another for loans. Vasool runs both in one app: daily, weekly, monthly, EMI and gold loans alongside your chit operations, on one dashboard with one staff team.",
  features: [
    {
      icon: Layers,
      title: "Chits and loans together",
      desc: "Manage chit groups and your full loan book — daily, weekly, monthly, EMI, gold — in one platform instead of separate software for each.",
    },
    {
      icon: LayoutDashboard,
      title: "One dashboard",
      desc: "See chit collections and loan collections side by side. Total cash position, outstanding, and overdue across both, in real time.",
    },
    {
      icon: Users,
      title: "One staff team",
      desc: "The same field agents collect for chits and loans on the same routes, with one voice-entry workflow and one day book.",
    },
    {
      icon: Repeat,
      title: "Recurring chit cycles",
      desc: "Track chit subscriptions and periodic collections with the same schedule engine that powers daily and weekly loan lines.",
    },
    {
      icon: Wallet,
      title: "Unified collections",
      desc: "Cash and UPI for both chits and loans recorded together, with automatic PDF receipts and a full audit log.",
    },
    {
      icon: PieChart,
      title: "Combined reporting",
      desc: "Profit & loss, officer performance, and cash flow across your whole business — chits and lending in one set of reports.",
    },
  ],
  featuresHeading: "Your whole finance business in one place",
  featuresSub:
    "Chits and lending share customers, staff, and cash. Running them in one app means you finally see the whole picture.",
  steps: [
    {
      title: "Add chits and loans",
      desc: "Set up your chit groups and your loan products — daily, weekly, monthly, EMI, gold — in the same account.",
    },
    {
      title: "Collect on one route",
      desc: "Agents collect chit subscriptions and loan installments together by voice, cash or UPI.",
    },
    {
      title: "See it all live",
      desc: "One dashboard shows chit and loan collections, outstanding, and cash position in real time.",
    },
    {
      title: "Report as one business",
      desc: "Combined P&L and cash flow tell you how the whole operation is doing, not just one half of it.",
    },
  ],
  stepsHeading: "How chit + lending works with Vasool",
  prose: [
    {
      heading: "Why one app beats two systems",
      paragraphs: [
        "Plenty of finance businesses run chits and lending side by side — often for the same customers, on the same streets, with the same agents. But the software usually doesn't: a chit register here, a loan app there, and a third place where someone tries to add it all up. Cash gets reconciled twice, customers exist in two systems, and no single screen shows the true position of the business.",
        "Vasool puts both in one app. A customer can hold a chit and a loan; an agent collects both on one route; and the office sees one combined cash position. Less double-entry, fewer reconciliation gaps, one source of truth.",
        <>
          It's one of the differentiators no typical vasool app offers — see the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "The full lending platform, plus chits",
      paragraphs: [
        <>
          Bringing chits in doesn't mean a cut-down loan tool. You still get the
          complete platform —{" "}
          <Link
            to="/voice-entry-collection-app"
            className="text-secondary hover:underline"
          >
            voice entry
          </Link>
          , every{" "}
          <Link to="/loan-types" className="text-secondary hover:underline">
            loan type
          </Link>
          , GPS staff tracking, photo proof, and reports — with chit operations
          running alongside on the same engine.
        </>,
        "And like the rest of Vasool, you can white-label it and self-host it, so your combined chit-and-lending business runs under your brand on infrastructure you control.",
      ],
    },
  ],
  checklist: {
    heading: "What a combined chit + lending app needs",
    sub: "If you run both, look for an app that offers:",
    items: [
      "Chit groups and all loan types in one account",
      "Shared customers across chits and loans",
      "One field route and one staff team for both",
      "Voice entry and UPI/cash for every collection",
      "A single dashboard showing combined cash position",
      "Combined P&L and cash-flow reporting",
      "Automatic PDF receipts and a full audit log",
    ],
  },
  faqs: [
    {
      q: "Can Vasool manage chit funds and loans in the same app?",
      a: "Yes. Vasool runs chit fund operations and your full lending book — daily, weekly, monthly, EMI, interest-only, and gold loans — in a single app, with one dashboard, one staff team, and combined reporting. You don't need separate software for each side of the business.",
    },
    {
      q: "Do chits and loans share customers and staff?",
      a: "Yes. A customer can hold both a chit and a loan, and the same field agents collect for both on the same routes using one voice-entry workflow and one day book — no double data entry.",
    },
    {
      q: "Can I see chit and loan collections together?",
      a: "Yes. The dashboard shows chit and loan collections side by side with a combined cash position, outstanding, and overdue in real time, and reports cover the whole business in one place.",
    },
    {
      q: "Do I get the full loan platform alongside chits?",
      a: "Yes. Adding chits doesn't reduce the lending features — voice entry, every loan type, gold and EMI, GPS staff tracking, photo proof, and reporting all run alongside chit operations.",
    },
    {
      q: "Can the chit + lending app be white-labeled or self-hosted?",
      a: "Yes. Like the rest of Vasool, your combined chit-and-lending platform can carry your own brand and run on your own server or a Raspberry Pi, giving you both one unified app and full control of your data.",
    },
  ],
  related: [
    { label: "Self-Hosted Loan Software", to: "/self-hosted-loan-software" },
    { label: "White-Label Loan App", to: "/white-label-loan-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Loan Types", to: "/loan-types" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "One app for chits and loans",
  ctaSub:
    "Book a free demo and see your chit groups and loan book running together on one dashboard.",
};

const ChitFundAndLendingApp = () => <KeywordLanding config={config} />;

export default ChitFundAndLendingApp;
