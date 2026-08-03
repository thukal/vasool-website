import {
  ScrollText,
  Calculator,
  Split,
  ShieldCheck,
  EyeOff,
  Wallet,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE, relatedFor } from "@/lib/countries";

const CANONICAL = "/loan-management-software-south-africa";

const config: KeywordLandingConfig = {
  seo: {
    title: "Loan Management Software for Credit Providers in South Africa | Vasool",
    description:
      "Vasool is loan management software for registered credit providers in South Africa — agreement and affordability-evidence records, payment allocation across principal, interest and fees, ZAR amounts, Africa/Johannesburg dates, borrower data scoping and a full audit trail. Free demo.",
    keywords:
      "loan management software south africa, best loan management software south africa, loan management software for small business south africa, debt collection software south africa, debt collection software in south africa, loan management system in south africa, credit provider software south africa, microlending software south africa, ncr registered credit provider software, loan book management software south africa",
    canonical: CANONICAL,
  },
  breadcrumbName: "South Africa",
  badge: "Built for registered credit providers",
  h1: (
    <>
      Loan management software for registered credit providers in{" "}
      <span className="text-gradient">South Africa</span>
    </>
  ),
  intro:
    "South African consumer credit is organised around registered credit providers, formal agreements, affordability assessment, debit-order or payroll collection and regulated credit information — not around a street collection route. Vasool is the record layer for that model: the agreement, the affordability evidence, how each payment was allocated, and who changed what. We are also direct about the parts of the South African workflow it does not yet do.",
  featuresHeading: "The records a formal credit provider is judged on",
  featuresSub:
    "Here the defensible artefact is the file — the agreement, the assessment behind it, and an allocation history that explains every rand of the outstanding balance.",
  features: [
    {
      icon: ScrollText,
      title: "Agreement and disclosure records per borrower",
      desc: "Hold the signed terms, the amount advanced, the schedule and the pricing against each account, so the file shows what the consumer was actually given.",
    },
    {
      icon: Calculator,
      title: "Affordability evidence on file",
      desc: "Store the income, expense and obligation evidence you gathered before granting, attached to the account and timestamped — the assessment is yours to make, the record of it lives here.",
    },
    {
      icon: Split,
      title: "Transparent payment allocation",
      desc: "Every payment shows how it was applied across principal, interest, fees and charges, so an outstanding balance can be explained line by line rather than asserted.",
    },
    {
      icon: Wallet,
      title: "Multi-channel payment recording",
      desc: "Record EFT, debit order, payroll deduction or cash against the account it landed in, and pull date-ranged cash flow by account to reconcile against statements.",
    },
    {
      icon: EyeOff,
      title: "Need-to-know borrower data scoping",
      desc: "Roles default to seeing only their own customers and accounts, with View All granted per resource — consumer data is not exposed to every device by default.",
    },
    {
      icon: ShieldCheck,
      title: "Immutable audit trail",
      desc: "Every edit, reversal, discount, write-off and closure is logged with who did it and when, and staff changes can be held for approval before taking effect.",
    },
  ],
  stepsHeading: "From granting to a defensible file",
  steps: [
    {
      title: "Set up your company in ZAR",
      desc: "Pick South Africa at setup: rand amounts, Africa/Johannesburg business dates and local phone formats, on your own isolated database.",
    },
    {
      title: "Record the assessment and the agreement",
      desc: "Attach affordability evidence and the signed terms to the account before the advance, so granting and its basis sit together.",
    },
    {
      title: "Record every payment with its channel",
      desc: "EFT, debit order, payroll or cash — each payment is posted with its channel and allocated across principal, interest and fees.",
    },
    {
      title: "Reconcile and evidence",
      desc: "Reconcile by account against statements, and reconstruct any account's history from the audit trail when asked.",
    },
  ],
  prose: [
    {
      heading: "Be honest about the fit",
      paragraphs: [
        "We will not pretend South Africa is the same opportunity as a market-collection economy. The consumer-credit environment here is built around registered credit providers, formal agreements, affordability assessment, payroll or debit-order collection, bank transfer and regulated credit information. Small cash microlenders exist, but an India-style daily street route should not be assumed to be the normal or the permitted model.",
        "The National Credit Act establishes consumer-credit standards covering provider registration, responsible lending, unfair practices, over-indebtedness, credit information and enforcement. Stokvels are important community savings structures and should not be casually described as commercial lending companies. If your plan depends on treating either of those loosely, the software is not your problem.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "What Vasool does not do here yet",
      paragraphs: [
        "Vasool does not generate statutory pre-agreement quotes or NCA-format agreement templates, does not submit or retrieve credit-bureau information, and has no debit-order or DebiCheck integration. Those are meaningful parts of a South African credit workflow, and they are on the roadmap rather than in the product.",
        "What it does today is hold the loan book: the agreement and its terms, the affordability evidence you gathered, disbursement, every payment with its channel and allocation, arrears ageing, corrections, closures and a full audit trail underneath all of it — with borrower data scoped so it is not spread across every staff device.",
        "If you are a registered credit provider who already runs quotes, agreements and collections elsewhere and needs a defensible book with real access control, that is a fit worth a conversation. If you need the statutory document and bureau workflow inside one system today, we would rather tell you now.",
      ],
    },
  ],
  checklist: {
    heading: "Before your first advance in South Africa",
    sub: "Work through this with your own counsel. Vasool holds the records; none of these are questions software can answer.",
    items: [
      "Confirm your registration as a credit provider and the scope it covers.",
      "Confirm your affordability assessment method and keep the evidence for each granting decision.",
      "Use compliant agreement and disclosure documents, and keep the executed copy on the account.",
      "Confirm permitted interest, fees and charges, and how each must be presented.",
      "Define and document how payments are allocated across principal, interest, fees and charges.",
      "Confirm your credit-information reporting obligations and how they are met.",
      "Confirm your obligations for personal information, and restrict staff access accordingly.",
      "Document your recovery conduct and notice requirements before any enforcement step.",
    ],
  },
  faqs: [
    {
      q: "Does Vasool generate NCA-compliant agreements and quotes?",
      a: "No. Statutory pre-agreement quotes and agreement templates are not produced by Vasool. You bring your own compliant documents and keep the executed copy on the account, where the audit trail covers it.",
    },
    {
      q: "Does it integrate with debit orders or DebiCheck?",
      a: "Not today. Debit-order and payroll payments are recorded against the account they landed in and reconciled by account, but Vasool does not originate collections. Integration is on the roadmap.",
    },
    {
      q: "Does it report to credit bureaux?",
      a: "No. Credit-information submission and retrieval are not part of the product. If bureau workflow inside one system is a hard requirement for you, Vasool is not the right fit yet.",
    },
    {
      q: "Can it store affordability assessment evidence?",
      a: "Yes. Income, expense and obligation evidence can be attached to the account and timestamped, so the basis of a granting decision stays with the decision. Making the assessment correctly remains your responsibility.",
    },
    {
      q: "Is a daily cash collection route normal in South Africa?",
      a: "It should not be assumed to be. The common model is formal agreements collected by debit order, EFT or payroll deduction. Collection frequency does not determine what is permitted — your registration, your agreement and the National Credit Act do.",
    },
    {
      q: "Does Vasool make my lending NCA-compliant?",
      a: "No. Registration, responsible lending, disclosure, credit reporting and enforcement conduct are yours. Vasool gives you records and access controls that make compliant practice provable; it cannot create compliance.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "Tell us your South African workflow first",
  ctaSub:
    "Book a call and we will walk through what Vasool covers, what it does not cover yet, and whether that is a fit for your credit-provider operation.",
};

const SouthAfrica = () => <KeywordLanding config={config} />;

export default SouthAfrica;
