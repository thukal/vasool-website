import {
  Wallet,
  Users,
  TrendingDown,
  WifiOff,
  ShieldCheck,
  FileText,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE, relatedFor } from "@/lib/countries";

const CANONICAL = "/loan-management-software-nigeria";

const config: KeywordLandingConfig = {
  seo: {
    title: "Loan Management Software for Microfinance Banks in Nigeria | Vasool",
    description:
      "Vasool is loan management and collection software for microfinance banks, cooperative societies and market lenders in Nigeria — group and individual exposure records, portfolio at risk ageing, agent cash accountability, NGN and Africa/Lagos, offline field collection and a full audit trail. Free demo.",
    keywords:
      "loan management software nigeria, loan management system nigeria, microfinance bank software nigeria, loan management software for msme, cooperative society loan software nigeria, daily contribution collection app nigeria, ajo esusu software, market trader loan software nigeria, collection agent app nigeria, portfolio at risk software nigeria, lending software lagos, loan management software for lenders",
    canonical: CANONICAL,
  },
  breadcrumbName: "Nigeria",
  badge: "Built for Nigerian microfinance",
  h1: (
    <>
      Loan management software for microfinance and market lending in{" "}
      <span className="text-gradient">Nigeria</span>
    </>
  ),
  intro:
    "Market-day collection matches a trader's turnover — and multiplies the places cash can leak. Vasool makes every naira traceable to a collector, a borrower and a payment method, tracks individual and group exposure separately, and ages your portfolio at risk as it happens. Amounts run in NGN on Africa/Lagos business dates, and the field app keeps working when the network does not.",
  featuresHeading: "Built around the risk that actually costs Nigerian lenders money",
  featuresSub:
    "Frequent cash collection is good for repayment discipline and bad for cash control. The answer is not fewer collections — it is accountability at the point of collection.",
  features: [
    {
      icon: Wallet,
      title: "Agent cash accountability and daily close",
      desc: "Expected collection, actual collection, expenses and remittance are tracked per collector to a daily close, so a shortfall surfaces the same evening rather than at month end.",
    },
    {
      icon: Users,
      title: "Group and individual exposure, recorded apart",
      desc: "Run solidarity groups and cooperative clusters alongside individual borrowers, with each member's own principal and history preserved beneath the group — the distinction supervisory guidance expects you to keep.",
    },
    {
      icon: TrendingDown,
      title: "Portfolio at risk and ageing buckets",
      desc: "Overdue loans age into buckets automatically, so PAR is a number you can read today instead of one you reconstruct from ledgers at quarter end.",
    },
    {
      icon: WifiOff,
      title: "Offline collection across the market",
      desc: "Entries save on the device and sync when the signal returns — a collector never stops recording because the network dropped mid-route.",
    },
    {
      icon: FileText,
      title: "Borrower documents in one auditable place",
      desc: "Capture and store identification and address documents against each borrower, so onboarding evidence lives in the file rather than in a drawer at the branch.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and maker-checker approvals",
      desc: "Every edit, discount, write-off and closure is logged with who did it and when, and staff changes can be held for owner or manager approval before they take effect.",
    },
  ],
  stepsHeading: "From market day to reconciled book",
  steps: [
    {
      title: "Set up your company in NGN",
      desc: "Pick Nigeria at setup: naira amounts, Africa/Lagos business dates and local phone formats, on your own isolated database.",
    },
    {
      title: "Organise lines and groups",
      desc: "Group borrowers by market, cluster, collector or repayment day, and register solidarity groups with their members.",
    },
    {
      title: "Collect with proof",
      desc: "The collector records amount, payment mode and photo proof at the point of collection, and the borrower gets a receipt.",
    },
    {
      title: "Close, reconcile, and watch PAR",
      desc: "Reconcile declared cash and transfers against expected collection per collector, then read PAR and ageing off the same book.",
    },
  ],
  prose: [
    {
      heading: "Who this is for in Nigeria",
      paragraphs: [
        "Nigeria has deep microenterprise and market-trader credit demand, served by microfinance banks at unit, state and national tiers, by cooperative societies, by rotating savings and contribution practices such as ajo, esusu and adashe, and by digital lenders. These are genuinely different businesses, and the differences matter before the first disbursement.",
        "A savings-contribution arrangement is not automatically a loan business, and a cooperative member service is not the same as lending to the public. The Central Bank of Nigeria's revised microfinance bank guidelines address licensing, governance, individual and group lending, documentation, portfolio at risk, provisioning and operating controls — and the fact that they distinguish individual from group exposure is exactly why a collection route cannot stand in for credit-risk records.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "Cash frequency is an operational choice, not a legal one",
      paragraphs: [
        "Daily contribution collection fits a trader whose stock turns daily. That is a cash-flow judgement about the borrower, made from their real turnover, and it belongs in the loan agreement. It is not what determines whether your lending is lawful — the lender's legal form, the borrower type, the pricing, the disclosures and the recovery conduct decide that.",
        "In Vasool a line is an operational portfolio: a way to group borrowers by market, agent or geography so field work can be scheduled and a day's cash reconciled. Beneath it, every loan keeps its own principal, interest, fees, penalties and payment history, because a collector's cash total is not profit and an overdue borrower is not automatically a write-off.",
        "Recovery conduct is not a feature toggle. Harassment, public shaming, contact-list abuse, threats and coercion are not collection techniques in Nigeria or anywhere else Vasool operates, and the system is built to record respectful, documented recovery — including the reason a payment was missed.",
      ],
    },
  ],
  checklist: {
    heading: "Before your first disbursement in Nigeria",
    sub: "Work through this with your own counsel. Vasool holds the records; it cannot answer any of these questions for you.",
    items: [
      "Confirm your legal form and lending authority — microfinance bank, cooperative society, finance company or other licensed entity.",
      "Confirm whether your activity is public lending or a member-only cooperative service, and that your documents match.",
      "Confirm permitted pricing, fees and charges, and how they must be disclosed to the borrower.",
      "Record the original principal separately from interest, fees, penalties and recoveries.",
      "Define your provisioning and write-off policy in writing, and recognise loss only under it.",
      "Assess repayment capacity from the borrower's actual turnover before setting a daily schedule.",
      "Restrict collector access to borrower data, and review every correction, discount and closure.",
    ],
  },
  faqs: [
    {
      q: "Can Vasool run a microfinance bank's loan book?",
      a: "It runs the lending and collection operation: borrower records, loan terms, disbursements, every payment with its mode and collector, group and individual exposure, PAR ageing, corrections and closures, all under an audit trail. It is not a core banking system and does not produce regulatory returns — treat it as the loan and collection system of record.",
    },
    {
      q: "Does it support group lending as well as individual loans?",
      a: "Yes. Solidarity groups and clusters are supported with member-level records underneath, so a group's collective performance and each member's own principal and history are both visible. Supervisory guidance treats individual and group exposure differently, and so does the book.",
    },
    {
      q: "Can I track daily contribution collectors?",
      a: "Yes. Each collector has their own expected collection, actual collection, expenses and remittance, closed off daily. Field staff can also be tracked by GPS and route, which is what makes a cash shortfall attributable rather than mysterious.",
    },
    {
      q: "Does it handle bank transfers as well as cash?",
      a: "Yes. Every payment records its mode and can be tagged to the account it landed in, so transfers reconcile against statements while field cash reconciles against the collector's declared total.",
    },
    {
      q: "Is ajo or esusu the same as running a lending company?",
      a: "No — and that distinction is the point. A contribution or rotating-savings arrangement is not automatically a loan business, and a cooperative member service is not the same as lending to the public. Confirm which one you are operating, and with what authority, before you disburse.",
    },
    {
      q: "Does Vasool make my operation CBN-compliant?",
      a: "No. Compliance comes from your licence, governance, pricing, disclosures, provisioning policy and conduct. Vasool provides the records and controls that let you evidence those things — it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "See Vasool run a Lagos market route",
  ctaSub:
    "Book a call and we will set up a naira company, build a sample market line with a solidarity group, and walk the day-close reconciliation end to end.",
};

const Nigeria = () => <KeywordLanding config={config} />;

export default Nigeria;
