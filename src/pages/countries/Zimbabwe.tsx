import {
  Coins,
  Smartphone,
  Wallet,
  TrendingDown,
  WifiOff,
  ShieldCheck,
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

const CANONICAL = "/loan-management-software-zimbabwe";
const COUNTRY = countryFor(CANONICAL);

const config: KeywordLandingConfig = {
  seo: {
    title: "Loan Management Software for Microfinance in Zimbabwe | Vasool",
    description:
      "Vasool is loan management and collection software for Zimbabwean microfinance institutions — USD and ZiG balances kept separate, EcoCash and InnBucks repayments recorded with their reference, per-officer cash close, arrears ageing, offline field collection and a full audit trail. Zimbabwe company setup is not live yet; talk to us about your rollout.",
    keywords:
      "loan management software zimbabwe, microfinance software zimbabwe, mfi software zimbabwe, loan management system zimbabwe, credit only microfinance software, deposit taking microfinance software zimbabwe, ecocash loan software, usd zig dual currency loan software, field collection app zimbabwe, loan software harare, sacco software zimbabwe, money lending software zimbabwe",
    canonical: CANONICAL,
  },
  breadcrumbName: "Zimbabwe",
  badge: "Market preview — setup not live yet",
  h1: (
    <>
      Loan management software for microfinance in{" "}
      <span className="text-gradient">Zimbabwe</span>
    </>
  ),
  intro:
    "Zimbabwe is one of the few markets where a lender routinely holds two currencies on one book and takes most repayments through a wallet rather than a hand. Both facts break software that was built for a single currency and a cash box. Vasool keeps USD and ZiG balances genuinely separate — never merged into one total, never converted behind the scenes — and records every EcoCash, InnBucks or OneMoney repayment with its channel and reference, so nothing posts to the wrong loan twice. We should say plainly up front: Zimbabwe is not yet selectable at company setup. If you are planning a rollout, talk to us before you build around it.",
  featuresHeading: "What a Zimbabwean lending operation actually needs",
  featuresSub:
    "Most of this already runs in eight other markets. Dual-currency handling is the piece that has to be right before Zimbabwe is worth switching on — and it is not a settings change.",
  features: [
    voiceApprovalFeature(COUNTRY),
    voiceExpenseFeature(COUNTRY),
    {
      icon: Coins,
      title: "USD and ZiG held separately",
      desc: "A loan carries its own currency, and cash reconciles per currency. Dollar and ZiG amounts are never merged into one figure or converted behind the scenes to produce a tidy total balance.",
    },
    {
      icon: Smartphone,
      title: "Wallet repayments carry their reference",
      desc: "Every payment records its channel — EcoCash, InnBucks, OneMoney, bank transfer or cash — and its transaction reference, so a wallet receipt reconciles against a statement instead of being taken on trust.",
    },
    {
      icon: Wallet,
      title: "Per-officer cash close",
      desc: "Expected collection, actual collection, expenses and remittance are tracked per officer to a daily close, so a shortfall surfaces the same evening rather than at month end.",
    },
    {
      icon: TrendingDown,
      title: "Arrears ageing you can read today",
      desc: "Overdue loans age into buckets automatically, so your portfolio at risk is a number you read off the book rather than one you reconstruct from ledgers at quarter end.",
    },
    {
      icon: WifiOff,
      title: "Offline collection on rural routes",
      desc: "Entries save on the device and sync when the connection returns, so a growth-point route never costs you a day's collection record.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and maker-checker approvals",
      desc: "Every edit, discount, restructure, write-off and closure is logged with who did it and when, and the consequential ones can be held for owner or manager approval before they take effect.",
    },
    routeTrackingFeature(),
    reportingFeature(),
  ],
  stepsHeading: "How a Zimbabwean rollout would work",
  steps: [
    {
      title: "Tell us your registration and your currencies",
      desc: "Whether you are credit-only or deposit-taking, whether you lend in USD, ZiG or both, and how your officers are organised in the field.",
    },
    {
      title: "We confirm the setup scope",
      desc: "Dual-currency handling and Zimbabwean setup are the two gaps. We will tell you honestly which are ready when you ask, not which are planned.",
    },
    {
      title: "Pilot one branch or officer group",
      desc: "Run a single round first, with real borrowers and real wallet repayments, before any wider migration.",
    },
    {
      title: "Reconcile against your existing book",
      desc: "Match the pilot's balances, per currency, and its daily cash against your current system before you trust it with the portfolio.",
    },
  ],
  prose: [
    {
      heading: "Who this is for in Zimbabwe",
      paragraphs: [
        "Zimbabwean microcredit is served by two registered categories with genuinely different obligations. Credit-only microfinance institutions may lend but may not take deposits from the public. Deposit-taking microfinance institutions may do both, and are licensed and supervised accordingly by the Reserve Bank of Zimbabwe. Savings and credit cooperatives sit alongside them, and a large informal lending sector sits beneath. The Microfinance Act is the principal legislation covering registration, licensing and supervision for both categories.",
        "Which category you are in is the first thing that decides what your records have to show, and it is not a distinction software can blur for you. A credit-only institution that starts holding client money has changed what it is, regardless of what its system calls the balance.",
        "The operational reality on top of that is dual currency and mobile money. The US dollar remains legal tender and dominates everyday pricing, the ZiG circulates alongside it, and mobile money carries the overwhelming majority of electronic payment volume — EcoCash by a wide margin, with InnBucks and OneMoney behind it. A lending system that cannot say which currency a balance is in, or which wallet a repayment arrived through, is not recording your book. It is approximating it.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "Why a silent conversion is the expensive bug",
      paragraphs: [
        "The tempting shortcut in a dual-currency market is to pick a base currency, convert everything into it, and show one number. It reads well on a dashboard and it destroys the book. A ZiG balance converted at today's rate is a different number tomorrow, and a borrower who repaid in dollars has no way to check what you say they owe.",
        "Vasool's approach is the same one it takes for Cambodia: a loan carries its own currency for its whole life, cash reconciles per currency, and no total silently merges the two. If you want a combined view you ask for it explicitly, at a rate you chose, and the underlying records stay untouched.",
        "The same principle governs wallet repayments. A payment is recorded with its channel and its reference, so an EcoCash receipt on the borrower's phone and the entry on your book point at the same transaction. Reconciliation then becomes a comparison rather than an argument. There is no automated import from EcoCash or InnBucks — the entry is made by the person taking the payment, and the reference is what makes it checkable.",
      ],
    },
    {
      heading: "What is not ready yet",
      paragraphs: [
        "Zimbabwe is not currently selectable at company setup. Vasool supports India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia today. Adding Zimbabwe means USD and ZiG as a genuinely dual-currency book with Africa/Harare business dates — the same piece of work Cambodia needs, which is why the two markets will likely arrive together.",
        "Shona and Ndebele are not dictation languages, so an officer on a Zimbabwean route would speak entries in English today. There is no mobile-money integration and no credit-bureau integration, so wallet import and bureau submission stay in your existing systems. None of these is a small gap, and we would rather you knew before a procurement conversation than during one.",
        "If you are a Zimbabwean lender evaluating options now, the useful next step is a conversation about timing — what you need, when you need it, and whether that lines up with what we can honestly commit to. If it does not, we will say so.",
      ],
    },
    voiceApprovalProse(COUNTRY),
    fieldDayProse(COUNTRY),
  ],
  checklist: {
    heading: "Before your first disbursement in Zimbabwe",
    sub: "Work through this with Zimbabwean counsel. Vasool holds the records; none of these are questions software can answer.",
    items: [
      "Confirm your registration category — credit-only or deposit-taking — and exactly what it permits.",
      "Confirm your capital, reporting and supervision obligations with the Reserve Bank of Zimbabwe.",
      "Decide the currency of each product, and keep USD and ZiG balances separate throughout.",
      "Confirm permitted pricing, fees and charges, and how they must be disclosed to the borrower.",
      "Record original principal separately from interest, fees, penalties and recoveries.",
      "Require a transaction reference on every wallet repayment, and reconcile against the statement.",
      "Document your recovery conduct and keep missed-payment reasons on record.",
    ],
  },
  faqs: [
    ...voiceApprovalFaqs(COUNTRY),
    ...fieldDayFaqs(COUNTRY),
    {
      q: "Can I set up a Zimbabwean company in Vasool today?",
      a: "No. The countries available at setup are India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia. This page exists because Zimbabwean lenders ask, and because we would rather publish an honest market page than let you find out after a sales call.",
    },
    {
      q: "Does it handle both USD and ZiG on the same book?",
      a: "Dual-currency handling is exactly what Zimbabwe requires and exactly what is not shipped yet. Vasool runs one currency per company today. Zimbabwean support means USD and ZiG held as genuinely separate balances, never silently converted — which is real work, not a settings change. It is the same work Cambodia needs for riel and dollars.",
    },
    {
      q: "Does it integrate with EcoCash, InnBucks or OneMoney?",
      a: "No automated integration. Every payment records its channel and transaction reference and can be tagged to the account it landed in, so wallet receipts reconcile against your statement — but the entry is made by the person taking the payment rather than pulled from the wallet.",
    },
    {
      q: "What is the difference between credit-only and deposit-taking here?",
      a: "It decides what you may hold. A credit-only microfinance institution may lend but may not take deposits from the public; a deposit-taking institution may do both and is licensed and supervised accordingly by the Reserve Bank of Zimbabwe. Your category determines your capital, reporting and conduct obligations — confirm it before you build an operation around either.",
    },
    {
      q: "Is the interface available in Shona or Ndebele?",
      a: "Not yet. The app ships with six Indian languages plus English and Tamil, and officers on a Zimbabwean route would dictate in English. Shona and Ndebele would arrive with Zimbabwean setup rather than before it.",
    },
    {
      q: "Does Vasool make my operation RBZ compliant?",
      a: "No. Compliance comes from your registration, capital, governance, pricing, disclosures and conduct. Vasool provides the records and controls that let you evidence those things — it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "Planning a Zimbabwean rollout?",
  ctaSub:
    "Tell us your registration category, your currencies and your timing. We will tell you what is ready, what is not, and whether the dates line up — before you commit to anything.",
};

const Zimbabwe = () => <KeywordLanding config={config} />;

export default Zimbabwe;
