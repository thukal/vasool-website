import {
  Calculator,
  ScrollText,
  ShieldAlert,
  Wallet,
  ShieldCheck,
  Users,
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

const CANONICAL = "/loan-management-software-colombia";
const COUNTRY = countryFor(CANONICAL);

const config: KeywordLandingConfig = {
  seo: {
    title: "Microcredit Loan Management Software in Colombia | Vasool",
    description:
      "Vasool is loan management software for supervised microcredit institutions and cooperatives in Colombia — per-modality pricing records, COP amounts stored exactly as entered, America/Bogotá business dates, signed borrower terms, complaint records and a full audit trail. Not for informal gota a gota lending.",
    keywords:
      "software de cobranza, software de cobranza colombia, software para prestamos, software para prestamos personales, software para microcredito, loan management software colombia, microcredit software colombia, cooperative loan software colombia, productive credit software colombia, loan portfolio software colombia, microfinance software colombia, credit management system colombia",
    canonical: CANONICAL,
  },
  breadcrumbName: "Colombia",
  badge: "Formal microcredit only",
  h1: (
    <>
      Loan management software for formal microcredit in{" "}
      <span className="text-gradient">Colombia</span>
    </>
  ),
  intro:
    "Colombia has real formal microcredit and productive-credit categories serving urban and rural microenterprises through cooperatives, banks, fintechs and other supervised institutions. It also has the informal daily-payment practice known as gota a gota. Vasool is built for the first and closed to the second — and the difference shows up in what the software insists you record: your legal authority, your product category, your permitted pricing, signed borrower terms, the outstanding principal, and a complaint route.",
  featuresHeading: "Records that separate formal credit from informal lending",
  featuresSub:
    "A lawful operator should be able to produce all of this on demand. If your operation cannot, no software should be helping you collect.",
  features: [
    voiceApprovalFeature(COUNTRY),
    voiceExpenseFeature(COUNTRY),
    {
      icon: ScrollText,
      title: "Product category and signed terms per loan",
      desc: "Each loan carries the credit modality it belongs to and the borrower terms actually agreed — a single generic monthly rate is not a record of anything.",
    },
    {
      icon: Calculator,
      title: "Per-modality pricing, recorded explicitly",
      desc: "Interest, fees and charges are held separately and per product category, because the supervisor certifies rates by credit modality rather than across the board.",
    },
    {
      icon: Wallet,
      title: "COP amounts stored exactly as entered",
      desc: "Peso values run to many digits. Display formatting never alters the stored amount, so the ledger reconciles to the last digit.",
    },
    {
      icon: Users,
      title: "Microenterprise and cooperative borrowers",
      desc: "Run individual microenterprise credit and member-based cooperative lending, with each borrower's principal, interest and payment history preserved.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail on every change",
      desc: "Every edit, discount, reversal, write-off and closure is logged with who did it and when — the outstanding principal is always explainable.",
    },
    {
      icon: ShieldAlert,
      title: "Documented, respectful recovery",
      desc: "Missed payments are recorded with their reason and the contact that followed. There is no feature here for intimidation, and there will not be one.",
    },
    routeTrackingFeature(),
    reportingFeature(),
  ],
  stepsHeading: "From authority to a defensible book",
  steps: [
    {
      title: "Set up your company in COP",
      desc: "Pick Colombia at setup: peso amounts, America/Bogotá business dates and local phone formats, on your own isolated database.",
    },
    {
      title: "Record your product category and pricing",
      desc: "Define the credit modality and the permitted pricing before lending, so every loan is booked into a real category.",
    },
    {
      title: "Disburse against signed terms",
      desc: "The borrower's agreed terms, the amount advanced and the schedule sit on the account from the start, with a complaint contact.",
    },
    {
      title: "Collect, allocate, reconcile",
      desc: "Each payment records its method and how it was applied, and reconciles by account against your statements.",
    },
  ],
  prose: [
    {
      heading: "Formal productive credit, not gota a gota",
      paragraphs: [
        "Colombia's formal microcredit and productive-credit categories serve urban and rural microenterprises through cooperatives, banks, fintech providers and other supervised institutions. The financial supervisor publishes certified rates for distinct credit modalities, which is precisely why a single generic monthly rate establishes nothing about compliance — the modality your product sits in determines what you may charge and how you must express it.",
        "Alongside that sits the informal daily-payment practice known as gota a gota or paga diario. The National Police repeatedly link illegal versions of this model with excessive interest, intimidation, coercion and criminal collection. Vasool will not be presented as a way to legitimise or operate unlawful lending or coercive recovery, and we would rather lose the sale than take that business.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "What a lawful Colombian operator can always produce",
      paragraphs: [
        "Identify your legal authority to lend. Identify the applicable product category. State your permitted pricing and how it is expressed. Show the signed borrower terms. Show the outstanding principal, separated from interest, fees and penalties. Show the borrower's route to complain. Those six things are the working definition of a formal operation, and they are what the software is organised around.",
        "Peso amounts are large, so accurate numeric entry and audit trails matter more than visual familiarity: an input that reformats or truncates an amount produces a book that cannot be reconciled, and the error usually appears months later in a dispute.",
        "Daily repayment is a legitimate schedule when it follows a microenterprise's real cash cycle and a signed agreement. It becomes something else entirely when it is chosen to maximise pressure. Vasool records the agreement, the schedule and the conduct — which is useful to an honest lender and inconvenient to a coercive one.",
      ],
    },
    voiceApprovalProse(COUNTRY),
    fieldDayProse(COUNTRY),
  ],
  checklist: {
    heading: "Before your first disbursement in Colombia",
    sub: "If you cannot complete this list, the answer is not different software. Work through it with a qualified Colombian lawyer.",
    items: [
      "Identify your legal authority to lend and the supervisor you answer to.",
      "Identify the applicable credit modality for your product.",
      "Confirm the permitted pricing for that modality and how interest and fees must be expressed.",
      "Give every borrower signed terms showing amount received, total obligation, schedule and pricing.",
      "Give every borrower a working complaint contact and keep the complaints on record.",
      "Record principal separately from interest, fees and penalties, in full pesos.",
      "Assess repayment capacity from the microenterprise's real cash cycle before setting a daily schedule.",
      "Document your recovery conduct — no intimidation, coercion, public shaming or contact-list abuse.",
    ],
  },
  faqs: [
    ...voiceApprovalFaqs(COUNTRY),
    ...fieldDayFaqs(COUNTRY),
    {
      q: "Can I use Vasool to run a gota a gota operation?",
      a: "No. Vasool is for supervised, formal lending. Illegal gota a gota models are associated by the National Police with excessive interest, intimidation and criminal collection, and nothing in this product is intended to enable, disguise or legitimise them. Coercive recovery is not a use case we support anywhere.",
    },
    {
      q: "Is a single monthly interest rate enough to set up my product?",
      a: "Not for compliance purposes. The supervisor certifies rates by credit modality, so your product must be booked into the right category with pricing recorded against it. Vasool holds pricing per product category for exactly this reason.",
    },
    {
      q: "Is the interface available in Spanish?",
      a: "Not yet. Colombian operations run in English today, with Spanish on the roadmap. We would rather state that plainly than let you discover it during rollout.",
    },
    {
      q: "Will large peso amounts stay accurate?",
      a: "Yes. Input formatting is display-only and never alters the stored value, so amounts reconcile to the last digit regardless of length.",
    },
    {
      q: "Is daily collection allowed in Colombia?",
      a: "Frequency is not what makes credit lawful or unlawful. A daily schedule that follows a microenterprise's real cash cycle under a signed agreement, from an entity authorised to lend, at permitted pricing, is a legitimate product. The same schedule without authority, disclosure or lawful pricing is not — and calling it a line in an app changes nothing.",
    },
    {
      q: "Does Vasool make my operation compliant with the Superintendencia Financiera?",
      a: "No. Your authority, product category, pricing, disclosures and conduct come from Colombian law and your supervisor. Vasool gives you the records to evidence a formal operation; it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "For formal Colombian lenders",
  ctaSub:
    "Tell us your entity, your credit modality and your supervisor, and we will show you the setup — in pesos, on Bogotá dates, with pricing recorded per product.",
};

const Colombia = () => <KeywordLanding config={config} />;

export default Colombia;
