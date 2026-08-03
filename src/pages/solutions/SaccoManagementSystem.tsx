import {
  Users,
  ShieldCheck,
  Smartphone,
  HandCoins,
  TrendingDown,
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

const COUNTRY = countryFor("/loan-management-software-kenya");

const config: KeywordLandingConfig = {
  seo: {
    title: "SACCO Management System — Loans & Collections | Vasool",
    description:
      "Vasool is the loans and collections half of a SACCO management system: member loan records, guarantor tracking, M-Pesa payment references, arrears ageing, officer cash accountability and a full audit trail. Runs alongside your core SACCO system. Free demo.",
    keywords:
      "sacco management system, sacco software kenya, sacco software, best sacco software, free sacco software, sacco loan management system, sacco management system in kenya, top sacco management system in kenya, sacco management system modules, sacco management system features, sacco management system free download, loan management system for microfinance, chama loan management software",
    canonical: "/sacco-management-system",
  },
  breadcrumbName: "SACCO Management System",
  badge: "For SACCOs and member-based lenders",
  h1: (
    <>
      The loans and collections half of a{" "}
      <span className="text-gradient">SACCO management system</span>
    </>
  ),
  intro:
    "Most SACCO software sells itself as everything at once — shares, deposits, dividends, loans, reporting. Vasool does not. It runs the part where money moves and goes missing: member loans, guarantors, repayments with their M-Pesa references, arrears ageing and officer cash accountability. If your core system already handles share capital and deposits, this is the piece that makes the loan book defensible.",
  featuresHeading: "What SACCO lending actually needs from software",
  featuresSub:
    "A SACCO member is an owner, a saver and a borrower at once, and their loan is usually guaranteed by other members' shares. Generic loan software gets that wrong on day one.",
  features: [
    voiceApprovalFeature(COUNTRY),
    voiceExpenseFeature(COUNTRY),
    routeTrackingFeature(),
    reportingFeature(),
    {
      icon: Users,
      title: "Member and borrower records held together",
      desc: "One member record carries their loans, repayment history and standing, so an officer sees the whole relationship rather than an account number in isolation.",
    },
    {
      icon: HandCoins,
      title: "Guarantor tracking on every loan",
      desc: "Record who guaranteed which loan and for how much, so guarantor exposure is visible before you approve the next one — not discovered when a default forces you to look.",
    },
    {
      icon: Smartphone,
      title: "M-Pesa reference on every repayment",
      desc: "Each payment records its channel — paybill, till, bank transfer or cash — and carries its transaction reference, so a repayment can always be traced back to the evidence.",
    },
    {
      icon: TrendingDown,
      title: "Arrears ageing you can read today",
      desc: "Overdue loans age into buckets automatically, so portfolio risk is a number on a screen rather than something reconstructed from ledgers at the end of a quarter.",
    },
    {
      icon: Wallet,
      title: "Officer cash and account reconciliation",
      desc: "Register your paybill, till and bank accounts, tag every collection and disbursement to one, and reconcile field cash per officer against a daily close.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and need-to-know access",
      desc: "Every edit, reversal, restructure and closure is logged with who did it and when, and roles default to seeing only their own members rather than the full register.",
    },
  ],
  stepsHeading: "How SACCOs run it",
  steps: [
    {
      title: "Import your members and open loans",
      desc: "Bring across member records, outstanding principal and repayment schedules, and reconcile the opening balances against your current system before you rely on it.",
    },
    {
      title: "Record guarantors as you lend",
      desc: "Each new loan captures its guarantors and their committed amounts, building the exposure picture as the book grows.",
    },
    {
      title: "Post repayments with references",
      desc: "Mobile-money, bank and cash repayments are posted against a specific loan, each carrying the reference that proves it.",
    },
    {
      title: "Reconcile and read the risk",
      desc: "Reconcile by account against statements, close each officer's day, and read arrears ageing and guarantor exposure off the same book.",
    },
  ],
  prose: [
    {
      heading: "Be clear about what this replaces — and what it does not",
      paragraphs: [
        "Vasool is not a complete SACCO management system and we would rather say that on the page than in a meeting. It does not administer share capital, member deposits, dividend calculation or your statutory returns. If you are looking for one system to do all of that plus lending, this is not it.",
        "What it does is the lending and collections side, properly: member loans, guarantors, disbursement, every repayment with its channel and reference, arrears ageing, restructures, corrections, closures and a full audit trail underneath all of it. Many SACCOs run exactly this alongside a core system, because the loan book is where the disputes and the losses actually happen.",
        "Deposit-taking and specified non-deposit-taking SACCOs in Kenya are regulated by SASRA, and your prudential, reporting and governance obligations come from there. Vasool holds records that help you evidence good practice; it is not a licence, a registration or regulatory approval, and it does not produce your returns.",
      ],
    },
    {
      heading: "Why free SACCO software usually costs more",
      paragraphs: [
        "Search for a SACCO management system and most of what comes back is a free download, an Excel template or an abandoned open-source project. They are genuinely fine for a small SACCO with one officer and one book. They stop being fine the moment collection happens on a phone in the field, two people edit the same record, or a member disputes a payment made eight months ago.",
        "The specific things a spreadsheet cannot give you are the ones that matter in a dispute: an audit trail showing who changed a balance and when, per-officer cash accountability that surfaces a shortfall the same evening, role-based access so a field device never holds the entire member register, and a payment record that carries its own transaction reference.",
        "If you are evaluating a free option, the honest test is not what it costs. It is what you would be able to show a member, a board or an inspector who asks how a balance came to be what it is.",
      ],
    },
  ],
  checklist: {
    heading: "What to check before you migrate a SACCO loan book",
    sub: "Migration is where SACCO software projects usually go wrong. These are the questions worth settling first.",
    items: [
      "Reconcile opening principal balances against your current system before going live, member by member.",
      "Decide how existing guarantor commitments are captured for loans already running.",
      "Confirm which accounts — paybill, till, bank — repayments actually land in, and register them all.",
      "Agree how a payment with a wrong or missing reference gets investigated and corrected.",
      "Set role permissions so field devices see only what they need of the member register.",
      "Confirm what stays in your core system: shares, deposits, dividends and statutory returns.",
      "Run one officer or one branch as a pilot before migrating the whole book.",
    ],
  },
  faqs: [
    ...voiceApprovalFaqs(COUNTRY),
    ...fieldDayFaqs(COUNTRY),
    {
      q: "Is this a complete SACCO management system?",
      a: "No. It covers loans and collections — member loan records, guarantors, repayments, arrears, reconciliation and audit. Share capital, member deposits, dividends and statutory returns stay in your core system. We would rather tell you that now than during implementation.",
    },
    {
      q: "Does it track guarantors?",
      a: "Yes. Each loan records its guarantors and their committed amounts, so you can see a member's total guarantor exposure before approving another loan against it. This is the mechanic generic loan software most often misses.",
    },
    {
      q: "Does it integrate with M-Pesa?",
      a: "Not automatically. Payments are recorded with their channel and transaction reference so they reconcile against your statements and stay traceable, but Vasool does not pull transactions from Daraja. Automated import is on the roadmap.",
    },
    {
      q: "Is there a free version?",
      a: "There is a free demo, not a free tier. If a free download genuinely covers your SACCO today, use it — the case for paying is audit trails, per-officer cash accountability, offline field collection and role-based access, and those only matter once collection leaves the office.",
    },
    {
      q: "Can it handle chamas and group lending?",
      a: "Yes. Groups are a first-class structure, with each member's own principal, interest and payment history preserved beneath the group so collective and individual performance are both readable.",
    },
    {
      q: "Does it work outside Kenya?",
      a: "Yes. The same member-based lending model runs in the other countries Vasool supports, each with its own currency and local business dates. The SACCO vocabulary is Kenyan; the structure is not.",
    },
  ],
  related: [
    { label: "Vasool in Kenya", to: "/loan-management-software-kenya" },
    { label: "All supported countries", to: "/countries" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Weekly Collection App", to: "/weekly-collection-app" },
    { label: "Self-Hosted Loan Software", to: "/self-hosted-loan-software" },
    { label: "White-Label Loan App", to: "/white-label-loan-app" },
  ],
  ctaHeading: "See it against your own SACCO loan book",
  ctaSub:
    "Book a call, bring a handful of real member loans with guarantors, and we will show you the reconciliation and the arrears view on your own numbers.",
};

const SaccoManagementSystem = () => <KeywordLanding config={config} />;

export default SaccoManagementSystem;
