import {
  Receipt,
  Smartphone,
  WifiOff,
  Users,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE, relatedFor } from "@/lib/countries";

const CANONICAL = "/loan-management-software-philippines";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "Loan Management Software for Lending Companies in the Philippines | Vasool",
    description:
      "Vasool is collection and loan management software for SEC-registered lending companies, financing companies and cooperatives in the Philippines — daily and weekly field collection, PHP and Asia/Manila, GCash and Maya tagging, borrower receipts, agent cash accountability and a full audit trail. Free demo.",
    keywords:
      "loan management system philippines, loan management software philippines, lending system philippines, lending software philippines, collection app philippines, payment collection app, daily collection app philippines, microfinance software philippines, cooperative loan software philippines, sec registered lending company software, lending software for sari-sari store, palengke lending software, loan tracker app philippines, collection agent app philippines",
    canonical: CANONICAL,
  },
  breadcrumbName: "Philippines",
  badge: "Built for Philippine lending companies",
  h1: (
    <>
      Loan management software for lending companies in the{" "}
      <span className="text-gradient">Philippines</span>
    </>
  ),
  intro:
    "Sari-sari stores, palengke vendors, tricycle operators and farmers repay from daily takings, so field collection has to be fast and provable. Vasool records each collection in seconds — offline if the signal drops — and gives you the receipt, the reconciliation and the audit trail behind it. Amounts run in PHP on Asia/Manila business dates, and every payment carries whether it came as cash, GCash, Maya or bank transfer.",
  featuresHeading: "What a Philippine collection operation actually needs",
  featuresSub:
    "Not another spreadsheet — the record that stands up when a borrower disputes a payment, a collector's cash is short, or an examiner asks what you disclosed.",
  features: [
    {
      icon: WifiOff,
      title: "Collect offline, anywhere on the route",
      desc: "Entries save on the device and sync when the connection returns. A dead spot in the palengke or on a provincial road never costs you a day's collection record.",
    },
    {
      icon: Receipt,
      title: "Receipts a borrower can actually read",
      desc: "Generate a PDF receipt showing amount received, payment mode, date and remaining balance. Disclosure is your obligation, not the app's — but the paper trail behind it is here.",
    },
    {
      icon: Smartphone,
      title: "Cash, GCash, Maya and bank transfer, tagged separately",
      desc: "Every collection records its payment mode. Cash in the collector's bag reconciles against the day's declared total; digital payments reconcile against the account they landed in.",
    },
    {
      icon: Wallet,
      title: "Agent cash accountability and daily close",
      desc: "Each collector's expected collection, actual collection, expenses and remittance are tracked to a daily close — so a shortfall surfaces the same evening, not at month end.",
    },
    {
      icon: Users,
      title: "Individual, group and centre-based borrowers",
      desc: "Run solidarity groups and centre meetings alongside individual borrowers, with each member's own principal, interest and payment history preserved beneath the group.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and maker-checker approvals",
      desc: "Every edit, discount, write-off and closure is logged with who did it and when. Hold staff changes for owner approval on the records that matter.",
    },
  ],
  stepsHeading: "From route sheet to reconciled book",
  steps: [
    {
      title: "Set up your company in PHP",
      desc: "Pick the Philippines at setup: peso amounts, Asia/Manila business dates and local phone formats, on your own isolated database.",
    },
    {
      title: "Build lines by market and day",
      desc: "Group borrowers into lines by palengke, barangay, collector or repayment day. A line organises the work; it does not classify the loan.",
    },
    {
      title: "Collect and issue the receipt",
      desc: "The collector records the payment and payment mode on the spot, with photo proof and a PDF receipt for the borrower.",
    },
    {
      title: "Close the day and reconcile",
      desc: "Compare declared cash and digital receipts against expected collection per collector, then post the day. Expected is never treated as received.",
    },
  ],
  prose: [
    {
      heading: "Who this is for in the Philippines",
      paragraphs: [
        "Philippine small-credit demand comes largely from cash-flow businesses — sari-sari stores, market vendors, transport operators, farmers and household microenterprises. They are served by very different institution types, and which one you are decides far more than how often you collect.",
        "Lending companies and financing companies, including their online lending platforms, sit under the Securities and Exchange Commission's licensing, disclosure, market-conduct and enforcement framework. Microfinance-oriented banks and microfinance NGOs operate under their own arrangements, with Bangko Sentral ng Pilipinas materials describing microfinance as small, typically unsecured, cash-flow-based credit for low-income households and microenterprises. Cooperatives answer to the Cooperative Development Authority. Vasool runs the operations for any of them — it does not put you in any of those categories.",
        "The country has a well-known informal '5-6' lending expression. A familiar name is not a compliance model. Before you operate, verify your company's authority to lend, the rate and fee limits that apply, your disclosure obligations, your data-privacy duties and the fair-collection requirements you are held to.",
      ],
    },
    {
      heading: "Why frequency is not the product",
      paragraphs: [
        "Daily collection fits a sari-sari store because stock turns daily. Weekly fits a market cycle. Monthly fits a salaried co-maker. Choose the schedule from the borrower's real cash cycle and the signed agreement — never because the software happens to support daily lines.",
        "In Vasool a line is an operational portfolio for scheduling routes and reconciling collections. Underneath it, every loan keeps its own principal, interest, fees, penalties and payment history at borrower level, so an operational grouping never becomes an accounting shortcut.",
        NOT_A_LICENCE,
      ],
    },
  ],
  checklist: {
    heading: "Before your first disbursement in the Philippines",
    sub: "Work through this with your own counsel. Vasool can hold every record it produces, but it cannot answer any of it for you.",
    items: [
      "Confirm your legal form and lending authority — SEC-registered lending or financing company, cooperative, bank or microfinance institution.",
      "Confirm the pricing, fees and charges you are permitted to apply, and how they must be disclosed.",
      "Give every borrower understandable terms: amount received, total obligation, due schedule, pricing and a complaint contact.",
      "Assess repayment capacity from the borrower's real cash cycle before setting a daily or weekly schedule.",
      "Record the original principal separately from interest, processing fees and penalties.",
      "Confirm your data-privacy obligations for borrower information and contact lists.",
      "Document your collection conduct rules — no harassment, public shaming, contact-list abuse or threats.",
    ],
  },
  faqs: [
    {
      q: "Is Vasool suitable for an SEC-registered lending company?",
      a: "Yes, as its system of record. Vasool holds borrower records, loan terms, disbursements, every payment with its mode and collector, receipts, corrections and closures, with an audit trail across all of it. It does not register your company, set your rates or produce your regulatory filings — those remain yours.",
    },
    {
      q: "Can it handle GCash and Maya payments?",
      a: "Every payment is recorded against a payment mode and can be tagged to the account it landed in, so digital receipts reconcile separately from field cash. Direct wallet integration is not live — payments are recorded with their reference rather than pulled automatically, and we would rather state that plainly than imply an integration you do not have.",
    },
    {
      q: "Does it work without internet on the route?",
      a: "Yes. Collections are recorded on the device and sync when connectivity returns, which matters on provincial routes and inside crowded markets.",
    },
    {
      q: "Can I run daily, weekly and monthly borrowers in one company?",
      a: "Yes. Lines can be organised by collector, market, barangay or repayment day, and a single company can run daily, weekly, monthly-installment and interest-only books side by side, each with its own schedule.",
    },
    {
      q: "Does Vasool make my lending operation compliant?",
      a: "No. Compliance comes from your legal entity, your permissions, your pricing, your disclosures and your conduct. Vasool gives you the records and controls that make compliant operations provable — it cannot make a non-compliant operation lawful.",
    },
    {
      q: "Is the app available in Filipino?",
      a: "The interface runs in English in the Philippines today. Filipino is not shipped yet, and we would rather say so than overpromise a localisation you would discover missing after signing.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "See Vasool run a Philippine collection route",
  ctaSub:
    "Book a call and we will set up a peso company, build a sample market line, and walk the day-close reconciliation end to end.",
};

const Philippines = () => <KeywordLanding config={config} />;

export default Philippines;
