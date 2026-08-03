import {
  Coins,
  Users,
  WifiOff,
  Wallet,
  ShieldCheck,
  ScrollText,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE, relatedFor } from "@/lib/countries";

const CANONICAL = "/loan-management-software-cambodia";

const config: KeywordLandingConfig = {
  seo: {
    title: "Loan Management Software for Microfinance in Cambodia | Vasool",
    description:
      "Vasool is loan management and collection software for Cambodian microfinance — dual-currency KHR and USD balances kept separate, field-officer cash accountability, group and village lending, offline collection and a full audit trail. Cambodia company setup is not live yet; talk to us about your rollout.",
    keywords:
      "loan management software cambodia, microfinance software cambodia, mfi software cambodia, loan management system cambodia, dual currency loan software, khr usd loan software, village bank software cambodia, group lending software cambodia, field collection app cambodia, credit operations software phnom penh",
    canonical: CANONICAL,
  },
  breadcrumbName: "Cambodia",
  badge: "Market preview — setup not live yet",
  h1: (
    <>
      Loan management software for microfinance in{" "}
      <span className="text-gradient">Cambodia</span>
    </>
  ),
  intro:
    "Cambodia runs one of the most developed microfinance sectors in the region, and one of the few where a single lender routinely holds balances in two currencies at once. That is the hard part: riel and dollar amounts must stay apart, on the loan and in the day's cash, without a silent conversion anywhere. This page describes how Vasool would run a Cambodian book — and we should say plainly up front that Cambodia is not yet an option at company setup. If you are planning a rollout, talk to us before you build around it.",
  featuresHeading: "What a Cambodian lending operation needs",
  featuresSub:
    "Most of this already exists in Vasool and runs in seven other markets. The dual-currency handling is the piece that has to be right before Cambodia is worth switching on.",
  features: [
    {
      icon: Coins,
      title: "KHR and USD held separately",
      desc: "A loan carries its own currency, and cash reconciles per currency. Riel and dollars are never merged into one figure or converted behind the scenes to make a total balance.",
    },
    {
      icon: Wallet,
      title: "Field-officer cash accountability",
      desc: "Expected collection, actual collection, expenses and remittance are tracked per officer to a daily close, so a shortfall surfaces the same evening rather than at month end.",
    },
    {
      icon: Users,
      title: "Group, village and individual lending",
      desc: "Run village and solidarity groups alongside individual borrowers, with each member's own principal, interest and payment history preserved beneath the group.",
    },
    {
      icon: WifiOff,
      title: "Offline collection on provincial routes",
      desc: "Entries save on the device and sync when the connection returns, so a rural route never costs you a day's collection record.",
    },
    {
      icon: ScrollText,
      title: "Explicit pricing, tenor and outstanding principal",
      desc: "Every loan carries its terms in full and every payment records method, date and allocation — the records behind a defensible total cost of credit.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and need-to-know data scoping",
      desc: "Every edit, discount, restructure and closure is logged with who did it and when, and roles default to seeing only their own borrowers.",
    },
  ],
  stepsHeading: "How a Cambodian rollout would work",
  steps: [
    {
      title: "Tell us your entity and currencies",
      desc: "Which licence you hold, whether you lend in riel, dollars or both, and how your officers are organised in the field.",
    },
    {
      title: "We confirm the setup scope",
      desc: "Dual-currency handling and Khmer are the two gaps. We will tell you honestly which are ready when you ask, not which are planned.",
    },
    {
      title: "Pilot one branch",
      desc: "Run a single branch or officer group first, with real borrowers, before any wider migration.",
    },
    {
      title: "Reconcile against your existing book",
      desc: "Match the pilot's balances and daily cash against your current system before you trust it with the portfolio.",
    },
  ],
  prose: [
    {
      heading: "Who this is for in Cambodia",
      paragraphs: [
        "Cambodian microcredit is served by licensed microfinance institutions, deposit-taking microfinance institutions, rural credit institutions and commercial banks, all under the National Bank of Cambodia, alongside cooperatives and community savings groups. The sector is large, competitive and closely watched — which means the standard expected of your records is higher, not lower, than in a market where microfinance is informal.",
        "Two features of the market shape the software more than anything else. The first is dual currency: riel and US dollars circulate together, and a lender may hold loans in both. The second is credit reporting — licensed institutions report to and query the credit bureau, and an interest-rate cap has applied to microfinance lending since 2017. Confirm the current cap, its scope and your reporting duties with Cambodian counsel; they change, and this page is not the place to rely on for either.",
        "Over-indebtedness and client protection are live, documented concerns in Cambodian microfinance, particularly around collateral practices and repayment pressure. Any lender operating here should be able to show how repayment capacity was assessed and how recovery was conducted. Vasool is built to record both — and is not built to help anyone avoid recording them.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "What is not ready yet",
      paragraphs: [
        "Cambodia is not currently selectable at company setup. Vasool supports India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia today. Adding Cambodia means KHR alongside USD as a first-class dual-currency book and Asia/Phnom_Penh business dates — not simply a new currency label on the existing single-currency model.",
        "Khmer is not shipped as an interface language. There is no Credit Bureau Cambodia integration, so bureau submission and enquiry stay in your existing systems. Neither of these is a small gap, and we would rather you knew before a procurement conversation than during one.",
        "If you are a Cambodian lender evaluating options now, the useful next step is a conversation about timing — what you need, when you need it, and whether that lines up with what we can honestly commit to. If it does not, we will say so.",
      ],
    },
  ],
  checklist: {
    heading: "Before your first disbursement in Cambodia",
    sub: "Work through this with Cambodian counsel. Vasool holds the records; none of these are questions software can answer.",
    items: [
      "Confirm your licence category with the National Bank of Cambodia and the lending it permits.",
      "Confirm the applicable interest-rate cap and exactly which products and charges it covers.",
      "Confirm your credit-bureau reporting and enquiry obligations, and how you meet them.",
      "Decide the currency of each product, and keep KHR and USD balances separate throughout.",
      "Assess repayment capacity against the borrower's real cash cycle and existing obligations.",
      "Give every borrower understandable terms: amount received, total obligation, schedule, pricing and a complaint contact.",
      "Document your collateral practices and your recovery conduct, and keep missed-payment reasons on record.",
    ],
  },
  faqs: [
    {
      q: "Can I set up a Cambodian company in Vasool today?",
      a: "No. The eight countries available at setup are India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia. This page exists because Cambodian lenders ask, and because we would rather publish an honest market page than let you find out after a sales call.",
    },
    {
      q: "Does it handle both riel and US dollars on the same book?",
      a: "Dual-currency handling is exactly what Cambodia requires and exactly what is not shipped yet. Vasool runs one currency per company today. Cambodian support means KHR and USD held as genuinely separate balances, never silently converted — which is a real piece of work, not a settings change.",
    },
    {
      q: "Is the interface available in Khmer?",
      a: "Not yet. The app ships with six Indian languages plus English and Tamil. Khmer is not among them.",
    },
    {
      q: "Does it report to Credit Bureau Cambodia?",
      a: "No. There is no bureau integration. Submission and enquiry would remain in your existing systems.",
    },
    {
      q: "What does Vasool actually do for a Cambodian lender then?",
      a: "Today, honestly, nothing until Cambodia is supported at setup. What the platform does elsewhere — field-officer cash accountability, group and village lending, offline collection, arrears ageing, audit trails and role-scoped borrower data — is what would come to Cambodia. If you want to be told when dual-currency support lands, tell us and we will contact you.",
    },
    {
      q: "Does Vasool make my microfinance operation compliant in Cambodia?",
      a: "No, here or anywhere. Licensing, pricing caps, disclosure, credit reporting and client-protection obligations come from Cambodian law and the National Bank of Cambodia. Vasool provides records and controls that make good practice provable; it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "Planning a Cambodian rollout?",
  ctaSub:
    "Tell us your licence, your currencies and your timing. We will tell you what is ready, what is not, and whether the dates line up — before you commit to anything.",
};

const Cambodia = () => <KeywordLanding config={config} />;

export default Cambodia;
