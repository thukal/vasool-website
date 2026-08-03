import {
  Split,
  CalendarClock,
  TrendingDown,
  EyeOff,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { countryFor } from "@/lib/countries";
import {
  fieldDayFaqs,
  reportingFeature,
  routeTrackingFeature,
  voiceApprovalFaqs,
  voiceApprovalFeature,
  voiceExpenseFeature,
} from "@/lib/fieldOperations";

const COUNTRY = countryFor("/loan-management-software-south-africa");

const config: KeywordLandingConfig = {
  seo: {
    title: "Debt Collection Software for South African Lenders | Vasool",
    description:
      "Vasool is debt collection software for South African credit providers — arrears ageing, promise-to-pay tracking, transparent payment allocation across capital, interest and fees, contact history, POPIA-conscious data scoping and a full audit trail. Free demo.",
    keywords:
      "debt collection software south africa, debt collection software in south africa, free debt collection software south africa, debt collection software for small business, best debt collection software, collections software south africa, arrears management software south africa, loan management software south africa, credit control software south africa, payment allocation software",
    canonical: "/debt-collection-software-south-africa",
  },
  breadcrumbName: "Debt Collection Software South Africa",
  badge: "For South African credit providers",
  h1: (
    <>
      Debt collection software that can{" "}
      <span className="text-gradient">explain every rand</span>
    </>
  ),
  intro:
    "Most collections disputes in South Africa come down to one question: how did this balance become this balance? Vasool answers it. Every payment shows how it was allocated across capital, interest, fees and charges; every contact, promise to pay and arrangement is logged; and every change carries the person who made it and the moment they did. Amounts run in ZAR on Africa/Johannesburg business dates.",
  featuresHeading: "Built for the arrears conversation, not just the ledger",
  featuresSub:
    "Collections work is a sequence of contacts, promises and part-payments. Software that only stores a balance loses the part that decides whether the debt is actually recoverable.",
  features: [
    voiceApprovalFeature(COUNTRY),
    voiceExpenseFeature(COUNTRY),
    routeTrackingFeature(),
    reportingFeature(),
    {
      icon: Split,
      title: "Transparent payment allocation",
      desc: "Every payment shows how it was applied across capital, interest, fees and charges, so an outstanding balance is explained line by line rather than asserted.",
    },
    {
      icon: CalendarClock,
      title: "Promise-to-pay and arrangement tracking",
      desc: "Log what the consumer undertook to pay and by when, then see which promises were kept. A broken arrangement is a fact on the record, not a memory.",
    },
    {
      icon: TrendingDown,
      title: "Arrears ageing by bucket",
      desc: "Accounts age into arrears buckets automatically, so you can prioritise a collections book by real risk instead of by whoever called most recently.",
    },
    {
      icon: Wallet,
      title: "Multi-channel payments reconciled by account",
      desc: "Record EFT, debit order, payroll deduction or cash against the account it landed in, and pull date-ranged cash flow by account to reconcile against statements.",
    },
    {
      icon: EyeOff,
      title: "POPIA-conscious data scoping",
      desc: "Roles default to seeing only their own accounts, with broader access granted per resource. Consumer information is not exposed to every device by default.",
    },
    {
      icon: ShieldCheck,
      title: "Immutable audit trail on every change",
      desc: "Edits, reversals, discounts, write-offs and closures are logged with who did them and when, so any account's history can be reconstructed on request.",
    },
  ],
  stepsHeading: "From arrears to a defensible recovery record",
  steps: [
    {
      title: "Load the book in ZAR",
      desc: "Rand amounts, Africa/Johannesburg business dates and local formats, on your own isolated database.",
    },
    {
      title: "Age the accounts",
      desc: "Accounts sort into arrears buckets automatically so the collections effort follows the risk.",
    },
    {
      title: "Log contact and arrangements",
      desc: "Record each contact, the outcome, and any promise to pay, building the history that shows how recovery was actually conducted.",
    },
    {
      title: "Allocate, reconcile, evidence",
      desc: "Post payments with their channel and allocation, reconcile by account against statements, and reconstruct any account from the audit trail.",
    },
  ],
  prose: [
    {
      heading: "What this is, and what it is not",
      paragraphs: [
        "This is collections software for a credit provider managing its own book. It is not a debt-collection agency platform, not an attorney or legal-process system, and it does not handle Section 129 notices, summonses, judgments or emoluments attachment orders. If your workflow is built around legal process, this is the wrong tool and we would rather say so on the page.",
        "It also does not originate debit orders or DebiCheck mandates, and it does not submit to or query credit bureaux. Debit-order and payroll payments are recorded and reconciled once they land; the collection instruction itself stays with your bank or payment provider. Those integrations are on the roadmap rather than in the product.",
        "The National Credit Act sets the standards this work sits under — provider registration, responsible lending, unfair practices, over-indebtedness, credit information and enforcement — and POPIA governs how you hold consumer information. Vasool gives you records and access controls that make compliant practice provable. It is not a licence, a registration or regulatory approval, and it cannot make a non-compliant operation lawful.",
      ],
    },
    {
      heading: "Why the contact history matters as much as the balance",
      paragraphs: [
        "A collections book is not really a list of balances. It is a list of relationships in various states of repair: a consumer who has paid something every month, a consumer who promised twice and delivered nothing, a consumer who cannot be reached at all. Those three need different handling, and a system that only shows the amount outstanding treats them identically.",
        "Recording contacts, outcomes and promises changes two things. It lets you prioritise the accounts where effort will actually recover money, and it produces evidence of how recovery was conducted — which matters when conduct is questioned, and it does get questioned.",
        "It also constrains behaviour in a useful direction. Harassment, public shaming, contact-list abuse and threats are not collection techniques, in South Africa or in any other market Vasool operates in. A system that documents every contact makes respectful recovery easy to demonstrate and coercive recovery difficult to hide.",
      ],
    },
  ],
  checklist: {
    heading: "What to settle before you run collections on it",
    sub: "Work through this with your own counsel. Vasool holds the records; none of these are questions software can answer.",
    items: [
      "Confirm your registration as a credit provider and the scope it covers.",
      "Define and document how payments allocate across capital, interest, fees and charges.",
      "Confirm which statutory notices and legal steps apply, and where they are handled.",
      "Confirm your credit-information reporting obligations and how they are met.",
      "Set role permissions so collections staff see only the accounts they work.",
      "Confirm your POPIA obligations for consumer information and contact records.",
      "Document your collections conduct rules, and keep contact outcomes on the record.",
    ],
  },
  faqs: [
    ...voiceApprovalFaqs(COUNTRY),
    ...fieldDayFaqs(COUNTRY),
    {
      q: "Is this for debt collection agencies?",
      a: "No. It is for credit providers collecting their own book. Agency workflows, attorney legal process and court steps such as Section 129 notices, summonses and judgments are outside it.",
    },
    {
      q: "Does it originate debit orders or DebiCheck mandates?",
      a: "No. Debit-order, EFT and payroll payments are recorded and reconciled once they land, but the collection instruction stays with your bank or payment provider. Integration is on the roadmap.",
    },
    {
      q: "Does it report to credit bureaux?",
      a: "No. Bureau submission and enquiry are not part of the product and would remain in your existing systems.",
    },
    {
      q: "Is there free debt collection software for South Africa?",
      a: "Free options exist and for a very small book they can be adequate. What they generally lack is a payment-allocation record you can defend, an audit trail showing who changed a balance, and role-based access over consumer data. Those matter most exactly when a matter is disputed.",
    },
    {
      q: "Can it track promises to pay?",
      a: "Yes. Arrangements and promises are logged with their amount and date, and kept alongside the contact history, so a broken arrangement is visible rather than remembered.",
    },
    {
      q: "How is this different from your South Africa loan management page?",
      a: "The loan management page covers the lending book — the agreement, affordability evidence and the account from granting onward. This page covers what happens once an account falls into arrears: ageing, contact, arrangements and recovery records. Most credit providers need both, and they are the same system.",
    },
  ],
  related: [
    {
      label: "Vasool in South Africa",
      to: "/loan-management-software-south-africa",
    },
    { label: "All supported countries", to: "/countries" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Self-Hosted Loan Software", to: "/self-hosted-loan-software" },
  ],
  ctaHeading: "See it against your own arrears book",
  ctaSub:
    "Book a call, bring a sample of real accounts in arrears, and we will show you the ageing, the allocation history and the contact record on your own numbers.",
};

const DebtCollectionSoftwareSouthAfrica = () => (
  <KeywordLanding config={config} />
);

export default DebtCollectionSoftwareSouthAfrica;
