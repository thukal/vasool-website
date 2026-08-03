import {
  Languages,
  WifiOff,
  Receipt,
  Wallet,
  ShieldCheck,
  FileText,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE, countryFor, relatedFor } from "@/lib/countries";
import {
  fieldDayFaqs,
  fieldDayProse,
  reportingFeature,
  routeTrackingFeature,
  voiceApprovalFaqs,
  voiceApprovalFeature,
  voiceApprovalProse,
  voiceExpenseFeature,
} from "@/lib/fieldOperations";

const CANONICAL = "/loan-management-software-sri-lanka";
const COUNTRY = countryFor(CANONICAL);

const config: KeywordLandingConfig = {
  seo: {
    title: "Microfinance & Loan Management Software in Sri Lanka | Vasool",
    description:
      "Vasool is loan management and collection software for licensed microfinance companies, finance companies and SME lenders in Sri Lanka — LKR amounts, Asia/Colombo business dates, Tamil and English interface, offline field collection, borrower receipts and a full audit trail. Free demo.",
    keywords:
      "loan management software sri lanka, microfinance software sri lanka, leasing software sri lanka, micro loan management software, microfinance software solution, loan collection app sri lanka, sme lending software sri lanka, daily collection app sri lanka, tamil loan collection app, finance company software sri lanka, loan management system colombo, gold loan management software",
    canonical: CANONICAL,
  },
  breadcrumbName: "Sri Lanka",
  badge: "Built for Sri Lankan lenders",
  h1: (
    <>
      Loan management software for microfinance and SME lenders in{" "}
      <span className="text-gradient">Sri Lanka</span>
    </>
  ),
  intro:
    "Sri Lankan micro and small-enterprise lending runs on close borrower relationships, field visits and weekly or monthly repayments — a workflow that will look immediately familiar to anyone who has run a South Indian book. Vasool gives you that workflow in LKR, on Asia/Colombo business dates, with a Tamil or English interface. What it deliberately does not do is carry Indian conventions, documents or disclosures across the strait.",
  featuresHeading: "Familiar in the field, correct on the record",
  featuresSub:
    "The operational similarity is real and useful. The regulatory similarity does not exist — so the records have to be Sri Lankan from the first entry.",
  features: [
    voiceApprovalFeature(COUNTRY),
    voiceExpenseFeature(COUNTRY),
    {
      icon: Languages,
      title: "Tamil or English, on the same book",
      desc: "Collectors in the Northern and Eastern provinces can work in Tamil while head office reads English. The interface language never changes what an amount means.",
    },
    {
      icon: WifiOff,
      title: "Offline field collection",
      desc: "Entries save on the device and sync when the connection returns, so an estate road or a rural route never costs you a day's collection record.",
    },
    {
      icon: Receipt,
      title: "Disbursement, repayments and remaining principal",
      desc: "Capture the original disbursement, each actual repayment with its collection method, and the principal still outstanding — the three numbers a borrower dispute always turns on.",
    },
    {
      icon: Wallet,
      title: "Agent cash accountability and daily close",
      desc: "Expected collection, actual collection, expenses and remittance are tracked per collector to a daily close, so shortfalls surface the same evening.",
    },
    {
      icon: FileText,
      title: "Sri Lankan borrower documents",
      desc: "Store the identification and address evidence you actually use locally, alongside recorded borrower consent — not an Indian KYC form relabelled.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and maker-checker approvals",
      desc: "Every edit, discount, write-off and closure is logged with who did it and when, and staff changes can be held for owner approval before they take effect.",
    },
    routeTrackingFeature(),
    reportingFeature(),
  ],
  stepsHeading: "From route sheet to reconciled book",
  steps: [
    {
      title: "Set up your company in LKR",
      desc: "Pick Sri Lanka at setup: rupee amounts, Asia/Colombo business dates and local phone formats, on your own isolated database.",
    },
    {
      title: "Choose the working language",
      desc: "Run the field app in Tamil or English per user, while the book itself stays single and consistent.",
    },
    {
      title: "Collect with proof",
      desc: "The collector records amount, collection method and photo proof on the spot, and the borrower gets a receipt.",
    },
    {
      title: "Close the day and reconcile",
      desc: "Match declared cash and transfers against expected collection per collector, then post the day and read arrears off the same book.",
    },
  ],
  prose: [
    {
      heading: "A familiar workflow, a different licensing perimeter",
      paragraphs: [
        "Sri Lankan micro and small-enterprise lending can look very like South Indian operations — the same close relationships, the same field visits, the same weekly and monthly rhythms. The currency is the Sri Lankan rupee and the business day runs on Sri Lanka time, which happens to share UTC+05:30 with India. That coincidence is worth naming precisely because it is so easy to over-read.",
        "The Central Bank of Sri Lanka explains that the Microfinance Act No. 6 of 2016 created licensing and supervision for companies carrying on microfinance business, with prudential, reporting, governance and consumer-protection requirements. Licensed finance companies and other institution types sit in their own regulatory categories. A familiar field workflow gives you no standing under any of them.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "What not to carry across from India",
      paragraphs: [
        "The most common mistake we see is reuse: an interest convention, a loan document, a disclosure format or a KYC field set that was designed for an Indian entity, dropped into a Sri Lankan operation because the screens look the same. Do not do it. Your pricing expression, your borrower documents and the information you must give a borrower come from Sri Lankan law and your own agreement.",
        "What does travel is the operating discipline: separate the principal from interest, fees, penalties, expenses, discounts and misses; treat the collector's cash total as a cash total rather than profit; and never assume an overdue borrower is a write-off. That discipline is country-neutral, and it is most of what Vasool enforces.",
        "In Vasool a line is an operational portfolio — a way to group borrowers by route, market, agent or repayment day so field work can be scheduled and a day's cash reconciled. Underneath it, every loan keeps its own borrower-level history.",
      ],
    },
    voiceApprovalProse(COUNTRY),
    fieldDayProse(COUNTRY),
  ],
  checklist: {
    heading: "Before your first disbursement in Sri Lanka",
    sub: "Work through this with your own counsel. The workflow may be familiar; the obligations are not inherited.",
    items: [
      "Confirm your legal form and permission — licensed microfinance company, licensed finance company or other permitted entity.",
      "Use Sri Lankan loan documents and disclosures, not adapted Indian ones.",
      "Confirm how your pricing must be expressed and disclosed under your agreement and local rules.",
      "Capture the original disbursement, every actual repayment, the collection method and the remaining principal.",
      "Record borrower consent for the data you hold and how you will contact them.",
      "Assess repayment capacity from the borrower's real cash cycle before setting the schedule.",
      "Document your recovery conduct rules and keep missed-payment reasons on the record.",
    ],
  },
  faqs: [
    ...voiceApprovalFaqs(COUNTRY),
    ...fieldDayFaqs(COUNTRY),
    {
      q: "Does the app work in Tamil?",
      a: "Yes. Tamil is fully supported, which matters in the Northern and Eastern provinces where much field collection happens in Tamil. Head office can read the same book in English. Sinhala is not shipped yet — we would rather say so than imply a localisation you would find missing later.",
    },
    {
      q: "Can I use my existing Indian setup for a Sri Lankan operation?",
      a: "You should not. Set up a separate Sri Lankan company so amounts run in LKR on Asia/Colombo dates with its own isolated database. More importantly, your loan documents, pricing expression and disclosures must be Sri Lankan — the shared time zone and the familiar workflow create no regulatory overlap whatsoever.",
    },
    {
      q: "Does it handle weekly and monthly repayment schedules?",
      a: "Yes, along with daily and interest-only servicing. Choose the frequency from the borrower's cash cycle and your signed agreement rather than from what the software supports.",
    },
    {
      q: "Does it work without internet on rural routes?",
      a: "Yes. Collections are recorded on the device and sync when connectivity returns.",
    },
    {
      q: "Does Vasool make my microfinance operation compliant?",
      a: "No. Licensing, prudential, reporting, governance and consumer-protection obligations come from Sri Lankan law and the Central Bank of Sri Lanka. Vasool gives you the records and controls to evidence good practice — it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "See Vasool run a Sri Lankan book",
  ctaSub:
    "Book a call and we will set up an LKR company, switch the field app into Tamil, and walk the day-close reconciliation end to end.",
};

const SriLanka = () => <KeywordLanding config={config} />;

export default SriLanka;
