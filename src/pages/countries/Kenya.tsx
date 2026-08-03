import {
  Smartphone,
  SearchCheck,
  Users,
  ShieldCheck,
  Wallet,
  FileText,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE, relatedFor } from "@/lib/countries";

const CANONICAL = "/loan-management-software-kenya";

const config: KeywordLandingConfig = {
  seo: {
    title: "SACCO & Loan Management Software in Kenya | Vasool",
    description:
      "Vasool is loan management and collection software for SACCOs, microfinance institutions and licensed digital credit providers in Kenya — every payment recorded with its channel and M-Pesa transaction reference, member and borrower records, group lending, KES and Africa/Nairobi, and a full audit trail. Free demo.",
    keywords:
      "sacco software kenya, sacco management system, sacco management system in kenya, top sacco management system in kenya, best sacco software, free sacco software, sacco loan management system, loan management system kenya, loan management system for microfinance, microfinance software kenya, mpesa loan reconciliation software, digital credit provider software kenya, chama loan management software, loan collection app nairobi",
    canonical: CANONICAL,
  },
  breadcrumbName: "Kenya",
  badge: "Built for Kenyan SACCOs and lenders",
  h1: (
    <>
      Loan management software built around{" "}
      <span className="text-gradient">mobile money</span>, for Kenya
    </>
  ),
  intro:
    "In a cash-heavy market the risk is a short bag. In Kenya it is a paybill payment with a mistyped reference, posted to the wrong loan — or posted twice. Vasool treats reconciliation as the main job: every payment carries its channel and transaction reference, member and borrower records stay distinct, and group lending is a first-class structure. Amounts run in KES on Africa/Nairobi business dates.",
  featuresHeading: "Reconciliation first, collection second",
  featuresSub:
    "When most repayments arrive over M-Pesa, the operational failure modes change: reference matching, duplicate posting, wrong-account transfers and delayed reconciliation. This is what the book has to defend against.",
  features: [
    {
      icon: Smartphone,
      title: "Channel and transaction reference on every payment",
      desc: "Each repayment records how it arrived — M-Pesa paybill, till, bank transfer or cash — and carries its transaction reference, so a payment can always be traced back to the evidence.",
    },
    {
      icon: SearchCheck,
      title: "Post against the right loan, once",
      desc: "Payments are posted to a specific loan with a correction trail, so a duplicate or a wrongly applied payment is visible and reversible rather than silently absorbed into a balance.",
    },
    {
      icon: Users,
      title: "Members, groups and chamas",
      desc: "Run group-based lending with member-level principal, interest and history preserved underneath — a SACCO member is a saver and a borrower at once, and the records should reflect that.",
    },
    {
      icon: Wallet,
      title: "Account-level cash-flow reporting",
      desc: "Register your paybill, till and bank accounts, tag every collection, disbursement and expense to one, and pull date-ranged cash flow by account so book entries reconcile against statements.",
    },
    {
      icon: FileText,
      title: "Borrower documents and consent on file",
      desc: "Store identification and address evidence against each borrower, alongside the terms they were given — the paper trail behind a fair-lending story.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and need-to-know data scoping",
      desc: "Every edit and closure is logged with who did it and when, and roles default to seeing only their own customers — no field phone holds the whole member register unless you allow it.",
    },
  ],
  stepsHeading: "From payment notification to reconciled book",
  steps: [
    {
      title: "Set up your company in KES",
      desc: "Pick Kenya at setup: shilling amounts, Africa/Nairobi business dates and local phone formats, on your own isolated database.",
    },
    {
      title: "Register accounts and groups",
      desc: "Add your paybill, till and bank accounts, then set up members, borrowers and any groups or chamas that lend together.",
    },
    {
      title: "Record the payment with its reference",
      desc: "Whether the money came by M-Pesa, transfer or cash, the payment is posted to a loan with its channel and reference attached.",
    },
    {
      title: "Reconcile by account, not by hope",
      desc: "Pull cash flow by account for the period and match it against your statements. Expected collection is never treated as received.",
    },
  ],
  prose: [
    {
      heading: "Who this is for in Kenya",
      paragraphs: [
        "Kenya combines banks, microfinance banks, SACCOs, group-based finance and licensed digital credit providers. They are not interchangeable, and the difference runs deeper than product design: SACCO members are owners, savers and borrowers at once, so the governance and the member relationship are fundamentally unlike a private route-lending business.",
        "SASRA regulates relevant deposit-taking and specified non-deposit-taking SACCOs. The Central Bank of Kenya's Digital Credit Providers Regulations introduced licensing and oversight covering governance, lending practices, consumer protection, credit information, personal data and unethical collection. Which of these you sit under decides your obligations — Vasool runs the operation underneath whichever one it is.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "Why mobile money changes the software, not just the workflow",
      paragraphs: [
        "A daily route in South India and a SACCO loan in Nairobi can share a repayment rhythm and share almost nothing else. When payments arrive as mobile-money notifications rather than notes in a bag, the thing most likely to go wrong stops being theft and starts being attribution: the right amount, from the right person, applied to the wrong loan.",
        "That is why the system of record has to capture the actual payment channel and the transaction evidence rather than just a figure and a date. It is also why corrections need a trail — a reversal that leaves no history is indistinguishable from a cover-up when someone asks six months later.",
        "Consumer-protection and data expectations under the digital credit rules point the same way. Borrower data should be held on a need-to-know basis, contact lists are not a collection tool, and recovery conduct has to be documented and respectful. Vasool is built for lenders who want that on the record, not lenders looking to avoid it.",
      ],
    },
  ],
  checklist: {
    heading: "Before your first disbursement in Kenya",
    sub: "Work through this with your own counsel. Vasool holds the records; it cannot answer any of these for you.",
    items: [
      "Confirm your legal form and permission — SACCO under SASRA, licensed digital credit provider, microfinance institution or bank.",
      "Confirm your pricing and how total cost of credit must be disclosed to the borrower.",
      "Register the paybill, till and bank accounts your repayments actually land in, before you start posting.",
      "Record the original principal separately from interest, fees and penalties.",
      "Define how a payment with a wrong or missing reference is investigated and corrected.",
      "Confirm your personal-data obligations for borrower information, and restrict staff access accordingly.",
      "Document your collection conduct rules — no harassment, contact-list abuse, public shaming or threats.",
    ],
  },
  faqs: [
    {
      q: "Does Vasool integrate directly with M-Pesa?",
      a: "Not today. Payments are recorded with their channel and transaction reference so they reconcile against your statements and remain traceable, but Vasool does not pull transactions automatically from Daraja. Automated import is on the roadmap, and we would rather state that plainly than let you discover it after signing.",
    },
    {
      q: "Can it run a SACCO's loan book?",
      a: "It runs the lending and collection side: member and borrower records, loan terms, disbursements, repayments with channel and reference, group lending, arrears ageing, corrections and closures, all audited. Share capital, deposit-taking and dividend administration are not part of it — pair it with your SACCO management system for those.",
    },
    {
      q: "How does it handle a payment posted to the wrong loan?",
      a: "Corrections are made against the original entry and kept on the audit trail, so the reversal, the reason and the person who made it all stay visible. A balance that quietly changes with no history is exactly what the trail is designed to prevent.",
    },
    {
      q: "Does it support chamas and group lending?",
      a: "Yes. Groups are a first-class structure, with each member's own principal, interest and payment history preserved beneath the group so collective and individual performance are both readable.",
    },
    {
      q: "Does Vasool make me a licensed digital credit provider?",
      a: "No. Licensing, governance, pricing, disclosure and conduct obligations are yours and come from Kenyan law and your regulator. Vasool gives you records and controls that make good practice provable; it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "See the reconciliation before you commit",
  ctaSub:
    "Book a call and we will set up a shilling company, post mobile-money and cash repayments side by side, and show you the account-level reconciliation.",
};

const Kenya = () => <KeywordLanding config={config} />;

export default Kenya;
