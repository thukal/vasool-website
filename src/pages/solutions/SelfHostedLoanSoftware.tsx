import { Link } from "react-router-dom";
import {
  Server,
  Shield,
  Cpu,
  Database,
  Lock,
  WifiOff,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "Self-Hosted Loan Management Software - Run Vasool on Your Own Server | Vasool",
    description:
      "Vasool is self-hosted loan management software you can run on your own server — even a Raspberry Pi in your office. Own your borrower data, work offline, no shared cloud. On-premise vasool app for money lenders. Free demo.",
    keywords:
      "self hosted loan management software, on premise loan software, run loan app on own server, raspberry pi loan collection, self hosted vasool app, data ownership finance software, on premise microfinance software, private server loan app, self hosted collection app",
    canonical: "/self-hosted-loan-software",
  },
  breadcrumbName: "Self-Hosted Loan Software",
  badge: "Self-Hosted — Only on Vasool",
  h1: (
    <>
      Self-hosted loan management software that{" "}
      <span className="text-gradient">runs on your own server</span>
    </>
  ),
  intro:
    "Most vasool apps lock your borrower data inside someone else's cloud. Vasool can run on infrastructure you own — your own server, or even a Raspberry Pi sitting in your office. Your data stays on your premises, under your control.",
  features: [
    {
      icon: Cpu,
      title: "Runs on a Raspberry Pi",
      desc: "Vasool is light enough to run on a Raspberry Pi in your shop — no data centre, no monthly cloud bill, full control on hardware you can hold in your hand.",
    },
    {
      icon: Server,
      title: "Your server, your choice",
      desc: "Deploy on our cloud, your own VPS, or on-premise hardware. Move it later if you want — you're never locked to one host.",
    },
    {
      icon: Database,
      title: "A dedicated database",
      desc: "Every business runs on its own isolated database. Your borrower records never sit in a shared table with other lenders.",
    },
    {
      icon: Lock,
      title: "Data stays with you",
      desc: "Borrower KYC, photos, loan history, and collections live on infrastructure you control — important for licensed lenders handling sensitive records.",
    },
    {
      icon: WifiOff,
      title: "Works offline",
      desc: "An on-premise deployment keeps working through internet outages — your office and field app stay in sync over the local network.",
    },
    {
      icon: Shield,
      title: "Audit trail included",
      desc: "Every entry, edit, and closure is logged with before/after snapshots, whether you self-host or run on our cloud.",
    },
  ],
  featuresHeading: "Own your lending data end to end",
  featuresSub:
    "Self-hosting isn't just for big enterprises. Vasool makes it practical for any money lender who wants to own their data.",
  steps: [
    {
      title: "Pick where it runs",
      desc: "Our cloud to start fast, or your own server / Raspberry Pi for full on-premise control.",
    },
    {
      title: "We provision it",
      desc: "Automated provisioning sets up your isolated database and app instance on the chosen infrastructure.",
    },
    {
      title: "Your team logs in",
      desc: "Field staff use the mobile app, the office uses the web dashboard — all pointing at your instance.",
    },
    {
      title: "You hold the keys",
      desc: "Back up, move, or audit your data whenever you want. It's yours, on hardware you control.",
    },
  ],
  stepsHeading: "How self-hosting works with Vasool",
  prose: [
    {
      heading: "Why data ownership matters for money lenders",
      paragraphs: [
        "A lending business runs on trust and records — borrower identities, photos, repayment histories, outstanding balances. When all of that lives in a generic vasool app's shared cloud, you don't really control it: you can't move it freely, you can't guarantee where it's stored, and if the vendor disappears, so does your book.",
        "Self-hosting flips that. With Vasool on your own server or a Raspberry Pi, the data physically sits with you. You decide backups, access, and retention — which matters especially for registered finance businesses and licensed money lenders who must keep auditable records.",
        <>
          See how this stacks up against cloud-only vasool apps on the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "On-premise without the IT department",
      paragraphs: [
        "Self-hosting usually means hiring someone technical. Vasool is designed so it doesn't have to: automated provisioning handles setup, the app updates cleanly, and a Raspberry Pi is enough hardware for a typical finance shop's book.",
        <>
          And you don't give anything up by self-hosting — the same{" "}
          <Link
            to="/voice-entry-collection-app"
            className="text-secondary hover:underline"
          >
            voice entry
          </Link>
          ,{" "}
          <Link to="/staff-tools" className="text-secondary hover:underline">
            GPS staff tools
          </Link>
          , gold loans, EMI, and reports run exactly the same on your own
          hardware as on our cloud.
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What true self-hosted loan software needs",
    sub: "Before trusting any app with your borrower data, check that it offers:",
    items: [
      "The option to run on your own server or a Raspberry Pi",
      "A dedicated database per business, never shared",
      "Automated setup so you don't need an IT team",
      "Offline operation over your local network",
      "Full data export and backup whenever you want",
      "A complete audit log of every transaction",
      "The same features on-premise as in the cloud",
    ],
  },
  faqs: [
    {
      q: "Can I really run Vasool on a Raspberry Pi?",
      a: "Yes. Vasool is light enough to run on a Raspberry Pi placed in your office — it serves the web dashboard and syncs with the mobile app over your local network, with no monthly cloud cost. It's a practical on-premise option for a typical finance shop's loan book.",
    },
    {
      q: "What is self-hosted loan management software?",
      a: "Self-hosted loan management software runs on infrastructure you own and control — your own server or a Raspberry Pi — instead of the vendor's shared cloud. With Vasool, your borrower data, photos, and records physically stay on your premises, and you control backups and access.",
    },
    {
      q: "Do I lose any features by self-hosting?",
      a: "No. Voice entry, photo KYC, GPS staff tracking, gold and EMI loans, PDF receipts, and reports all work identically whether you run Vasool on our cloud or on your own hardware.",
    },
    {
      q: "Do I need a technical team to self-host?",
      a: "No. Automated provisioning sets up your isolated database and app instance, and updates are handled cleanly. Self-hosting with Vasool is designed for finance businesses, not IT departments.",
    },
    {
      q: "Can I start on the cloud and move to my own server later?",
      a: "Yes. You can begin on our cloud to get going quickly and move to your own server or Raspberry Pi later — your data is portable and exportable, so you're never locked in.",
    },
  ],
  related: [
    { label: "White-Label Loan App", to: "/white-label-loan-app" },
    { label: "Chit Fund & Lending App", to: "/chit-fund-and-lending-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Security", to: "/security" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Keep your data on your own hardware",
  ctaSub:
    "Book a free demo and we'll show you Vasool running on a Raspberry Pi — your whole book, on your desk.",
};

const SelfHostedLoanSoftware = () => <KeywordLanding config={config} />;

export default SelfHostedLoanSoftware;
