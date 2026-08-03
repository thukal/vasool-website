import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileText,
  Database,
  Gauge,
  TrendingDown,
  Landmark,
  UserCheck,
  EyeOff,
  Wallet,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title: "NBFC Loan Management Software | Vasool",
    description:
      "Vasool is loan management software for NBFCs in India — maker-checker approvals, immutable audit trail, KYC vault, per-tenant database, AI credit appraisal, DPD tracking and a capital ledger. The platform you grow with, from one route to many branches. Free demo.",
    keywords:
      "NBFC loan management software, NBFC lending software india, loan management system for NBFC, NBFC loan origination and collection software, NBFC software india, loan management software for finance companies, NBFC portfolio management software",
    canonical: "/nbfc-loan-management",
  },
  breadcrumbName: "NBFC Loan Management",
  badge: "Built for NBFCs",
  h1: (
    <>
      Loan management software for{" "}
      <span className="text-gradient">NBFCs in India</span>
    </>
  ),
  intro:
    "Vasool is the operating system a lender grows with. The same platform that runs a one-route money lender scales to a multi-branch NBFC — because every capability is a per-tenant toggle. Maker-checker approvals, immutable audit trails, row-level data scoping, a KYC document vault, AI-assisted credit appraisal and DPD tracking come standard, on a database that is yours alone.",
  features: [
    {
      icon: ShieldCheck,
      title: "Immutable audit trail",
      desc: "Every edit, approval and closure is written to an audit log with full entity history, so you can reconstruct exactly what changed, when, and by whom — the evidentiary backbone examiners expect.",
    },
    {
      icon: UserCheck,
      title: "Maker-checker approvals",
      desc: "Staff creates, edits and deletes can be held for approval instead of taking effect immediately. The request is queued with its full payload, an owner or assigned manager approves or rejects it, and only then does it apply — with the decision on the audit record.",
    },
    {
      icon: EyeOff,
      title: "Need-to-know data scoping",
      desc: "Row-level scoping per resource: a role defaults to View Own and is granted View All only where you tick it. A branch manager can see every customer but only their own loans — your book is never fully exposed to a field device.",
    },
    {
      icon: Wallet,
      title: "Account-level cash reconciliation",
      desc: "Register your UPI IDs and bank accounts, tag every collection, disbursement and expense to one, and pull a date-ranged cash-flow-by-account report — so book entries reconcile against bank statements.",
    },
    {
      icon: FileText,
      title: "KYC document vault",
      desc: "Capture and store Aadhaar, PAN, voter ID, ration card and utility bills against each borrower, so onboarding documents live in one auditable place instead of a drawer.",
    },
    {
      icon: Database,
      title: "Your own isolated database",
      desc: "Each tenant gets a dedicated, isolated PostgreSQL database, with the option to self-host — a clean data-governance, residency and ownership story for a regulated lender.",
    },
    {
      icon: Gauge,
      title: "AI-assisted credit appraisal",
      desc: "The loan-eligibility engine returns a risk score from 0 to 100 with an approve, review or reject call and a suggested limit — a consistent, documented first pass on every application.",
    },
    {
      icon: TrendingDown,
      title: "Overdue & DPD tracking",
      desc: "Days-past-due and overdue intensity are tracked per loan — the raw material you need to build NPA and SMA bucketing and watch your portfolio quality tighten.",
    },
    {
      icon: Landmark,
      title: "Capital & borrowings ledger",
      desc: "The financier and investor module records partner capital and owner borrowings — the funding and liability side of the book, giving you a working asset-liability view.",
    },
  ],
  featuresHeading: "NBFC-relevant capability, from day one",
  featuresSub:
    "These aren't features on a roadmap — they run in Vasool today, reframed in the vocabulary a finance company and its auditors actually use.",
  steps: [
    {
      title: "Onboard with KYC",
      desc: "Capture borrower KYC — Aadhaar, PAN, voter ID and more — into the document vault, with role-based access controlling who can see and edit what.",
    },
    {
      title: "Appraise & sanction",
      desc: "Run the application through AI-assisted credit appraisal for a risk score and suggested limit. With maker-checker on, the officer's sanction waits in an approvals inbox until a manager signs off — with a full audit record either way.",
    },
    {
      title: "Disburse & collect",
      desc: "Run any loan product — daily, weekly, monthly, EMI, interest-only, gold or product-based — with PDF receipts, closure cards and field collection.",
    },
    {
      title: "Monitor & report",
      desc: "Watch DPD and overdue intensity, track capital and borrowings, and pull P&L, day book, portfolio and officer reports as the book grows.",
    },
  ],
  stepsHeading: "How an NBFC runs on Vasool",
  prose: [
    {
      heading: "Capabilities that already speak the regulator's language",
      paragraphs: [
        "An NBFC doesn't need a different product from a neighbourhood lender — it needs the same lending engine with more of the controls switched on. Vasool is built that way. Because features are per-tenant toggles, the platform that runs a single route also runs a multi-branch finance company, and you turn on what your stage and licence demand.",
        <>
          The foundations regulators care about are already here: an immutable
          audit trail with entity history on every change, a KYC document vault,
          a maker-checker approval workflow that holds staff actions until an
          owner or manager signs off, row-level data scoping that keeps a role
          to the customers and loans it should see, and per-tenant isolated
          PostgreSQL with self-hosting for data ownership. On top of that sits
          AI-assisted credit appraisal, DPD and overdue tracking, account-level
          cash reconciliation, and a capital-and-borrowings ledger for the
          funding side of the book. It covers every loan product too —{" "}
          <Link to="/loan-types" className="text-secondary hover:underline">
            daily, weekly, monthly, EMI, interest-only, gold and more
          </Link>
          , plus chit funds and savings schemes.
        </>,
        <>
          The result is a portfolio you can actually see: P&L, day book,
          officer and collection reports, and portfolio views that let you run a
          growing book with discipline rather than spreadsheets. See how that
          stacks up on the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "The compliance layer: what we support, what's on the roadmap",
      paragraphs: [
        "We'll be straight with you, because you're a regulated buyer and honesty is the whole point. Vasool is software your NBFC operates — it is not RBI-registered, and it does not grant you regulatory certification or guarantee compliance. What it does is give you the operating platform and the evidence trail to help you meet your obligations.",
        "Full NBFC-grade compliance needs more than a good lending engine, and several of those pieces are on our roadmap or built on request rather than shipping today. That list includes NPA classification to RBI norms (SMA-0/1/2 and sub-standard, doubtful, loss) with provisioning; credit-bureau reporting and pulls (CIBIL, Equifax, Experian, CRIF); CKYC upload and download and AML screening; sanction letters, loan agreements and Key Fact Statement / APR disclosures; Fair Practices Code workflows like grievance redressal, cooling-off and foreclosure disclosure; statutory RBI returns and GST/TDS handling; extending maker-checker to collection and payment entries (it covers customers, loans, chits, gold sales, expenses, staff, roles and routes today); and the co-lending or business-correspondent model.",
        "Because your data sits in a database you own and can self-host, and because features are toggles, these are additions we build with you rather than a rewrite. We'd rather tell you what's ready and what isn't up front than have you discover it in an audit.",
      ],
    },
  ],
  checklist: {
    heading: "What NBFC-grade loan software needs",
    sub: "When you evaluate a loan management system for an NBFC, look for:",
    items: [
      "An immutable audit trail and full entity history on every change",
      "A KYC document vault for Aadhaar, PAN and onboarding documents",
      "Data you own — an isolated database with a self-hosting option",
      "A maker-checker workflow that holds staff actions until a manager approves",
      "Row-level scoping so a role sees only the customers and loans it should",
      "Credit appraisal and a documented approve / review / reject decision",
      "DPD and overdue tracking as the basis for NPA and SMA bucketing",
      "A capital and borrowings ledger for the funding side of the book",
      "A clear roadmap for bureau reporting, NPA norms and RBI disclosures",
    ],
  },
  faqs: [
    {
      q: "Is Vasool suitable for an NBFC?",
      a: "Yes, as your lending operating system. Vasool runs the day-to-day of an NBFC — onboarding with KYC, AI-assisted credit appraisal, disbursement, collection across every loan product, DPD tracking, and portfolio reporting — on a per-tenant isolated database you can self-host. Features are toggles, so the same platform scales from a single route to a multi-branch finance company.",
    },
    {
      q: "Does Vasool report to credit bureaus and classify NPAs per RBI norms?",
      a: "Not today. Credit-bureau reporting and pulls (CIBIL, Equifax, Experian, CRIF) and NPA classification to RBI norms — SMA-0/1/2 and sub-standard, doubtful, loss buckets with provisioning — are on our roadmap and built on request, not shipping features. Vasool does track DPD and overdue intensity today, which is the raw material those buckets are built from. We tell you this up front rather than imply compliance you don't have.",
    },
    {
      q: "Is Vasool RBI-registered or does it certify my compliance?",
      a: "No. Vasool is software your NBFC operates. It is not RBI-registered and it does not grant regulatory certification or guarantee compliance. It provides the operating platform, the audit trail and the KYC vault that help you meet your obligations — the licence and the compliance responsibility remain yours.",
    },
    {
      q: "Who owns and controls the data?",
      a: "You do. Each tenant runs on a dedicated, isolated PostgreSQL database, and you can self-host it on your own infrastructure. That gives an NBFC a clean data-governance, residency and ownership position rather than sharing a pooled database with other businesses.",
    },
    {
      q: "Does Vasool support maker-checker and audit requirements?",
      a: "Yes. Maker-checker ships today: a staff create, edit or delete is held as a pending request, routed to the owner or an assigned approver, and applied only once approved — with the whole decision on the audit trail. You turn it on per role and per resource, so the actions that need a second pair of eyes are held and the rest stay one-tap. It currently covers customers, loans, chit and savings schemes, gold sales, expenses, staff, roles and routes; extending it to individual collection entries is on the roadmap. That sits on top of an immutable audit log with entity history on every change.",
    },
  ],
  related: [
    { label: "Self-Hosted Loan Software", to: "/self-hosted-loan-software" },
    { label: "White-Label Loan App", to: "/white-label-loan-app" },
    { label: "Loan Types", to: "/loan-types" },
    { label: "Compare Vasool", to: "/compare" },
    { label: "Chit Fund & Lending App", to: "/chit-fund-and-lending-app" },
  ],
  ctaHeading: "The platform your NBFC grows with",
  ctaSub:
    "Book a free demo and see the audit trail, KYC vault, credit appraisal and portfolio reporting running on a database that's yours alone.",
};

const NbfcLoanManagement = () => <KeywordLanding config={config} />;

export default NbfcLoanManagement;
