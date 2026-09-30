import {
  PiggyBank,
  Wallet,
  Users,
  WifiOff,
  ShieldCheck,
  ScrollText,
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

const CANONICAL = "/loan-management-software-ghana";
const COUNTRY = countryFor(CANONICAL);

const config: KeywordLandingConfig = {
  seo: {
    title: "Loan Management Software for Microfinance & Susu in Ghana | Vasool",
    description:
      "Vasool is loan and susu collection software for Ghanaian microfinance companies, money lenders and susu collectors — daily doorstep collection, per-collector cash close, member balances, GHS and Africa/Accra, offline field work and a full audit trail. Ghana company setup is not live yet; talk to us about your rollout.",
    keywords:
      "loan management software ghana, susu software ghana, susu collection software, microfinance software ghana, loan management system ghana, money lending software ghana, daily collection app ghana, susu management software, microfinance company software accra, field collection app ghana, tier 2 microfinance software, loan software for money lenders ghana",
    canonical: CANONICAL,
  },
  breadcrumbName: "Ghana",
  badge: "Market preview — setup not live yet",
  h1: (
    <>
      Loan and susu collection software for microfinance in{" "}
      <span className="text-gradient">Ghana</span>
    </>
  ),
  intro:
    "A Ghanaian collector walks the same market every working day, takes a contribution from one client and a loan repayment from the next, and carries both home in the same bag. That is the whole control problem: two different obligations, one collector, one pile of cash, and a client who can ask for their balance at any moment. Vasool records each entry where it happens — client, amount, channel, collector — keeps a member's savings distinct from a borrower's principal, and closes the day per collector rather than per branch. We should say plainly up front: Ghana is not yet selectable at company setup. If you are planning a rollout, talk to us before you build around it.",
  featuresHeading: "Built around the collector, because that is where the cash is",
  featuresSub:
    "Daily collection is good for repayment discipline and bad for cash control. The answer is not fewer collections — it is accountability at the doorstep, while the client is still standing there.",
  features: [
    voiceApprovalFeature(COUNTRY),
    voiceExpenseFeature(COUNTRY),
    {
      icon: PiggyBank,
      title: "Susu contributions and loans, on one client, held apart",
      desc: "A client can be contributing and borrowing at the same time. Their savings balance and their outstanding principal are separate records with separate histories, so a contribution is never quietly used to make a repayment look made.",
    },
    {
      icon: Wallet,
      title: "Per-collector daily close",
      desc: "Expected collection, actual collection, expenses and remittance are tracked per collector to a daily close, so a shortfall surfaces the same evening rather than at month end.",
    },
    {
      icon: Users,
      title: "Groups, associations and individual clients",
      desc: "Run market associations and solidarity groups alongside individual clients, with each member's own contributions, principal and history preserved beneath the group.",
    },
    {
      icon: WifiOff,
      title: "Offline collection across the market",
      desc: "Entries save on the device and sync when the signal returns — a collector never stops recording because the network dropped halfway down a line of stalls.",
    },
    {
      icon: ScrollText,
      title: "A balance the client can be shown",
      desc: "Every contribution and every repayment carries its date, amount, channel and collector, so the answer to \"how much do I have\" is a record on a screen rather than a figure in a passbook nobody else can check.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and maker-checker approvals",
      desc: "Every edit, discount, write-off and closure is logged with who did it and when, and staff changes can be held for owner or manager approval before they take effect.",
    },
    routeTrackingFeature(),
    reportingFeature(),
  ],
  stepsHeading: "How a Ghanaian rollout would work",
  steps: [
    {
      title: "Tell us your tier and your products",
      desc: "Which licence or registration you hold, whether you take susu contributions, lend, or both, and how your collectors are organised across markets.",
    },
    {
      title: "We confirm the setup scope",
      desc: "GHS company setup and Ghanaian local languages are the two gaps. We will tell you honestly which are ready when you ask, not which are planned.",
    },
    {
      title: "Pilot one market line",
      desc: "Run a single collector's round first, with real clients, before any wider migration.",
    },
    {
      title: "Reconcile against your existing book",
      desc: "Match the pilot's balances and daily cash against your current system or ledgers before you trust it with the portfolio.",
    },
  ],
  prose: [
    {
      heading: "Who this is for in Ghana",
      paragraphs: [
        "Ghanaian microcredit and daily savings are served by a layered sector: rural and community banks and savings and loans companies at the top, then microfinance and susu companies, then money lenders and financial NGOs, then the individual susu collectors and enterprises who walk the markets. The Bank of Ghana regulates non-bank financial institutions under a tiered framework, with the deposit-taking tiers carrying real minimum capital and the individual-collector tier carrying none but expected to sit under an umbrella body such as the Ghana Cooperative Susu Collectors Association.",
        "Those tiers are genuinely different businesses, and the difference is not cosmetic. Taking daily contributions from the public is not the same activity as lending your own funds, and a susu enterprise is not a microfinance company because it grew. Which tier you sit in decides what you may take, what you must hold, and what you must be able to show — and none of that is software's decision to make.",
        "What software can do is stop the two obligations blurring together in the field. A collector who takes a ₵50 contribution from one stall and a ₵50 repayment from the next is holding ₵100 that means two different things. Vasool records the meaning at the point of collection, so the day's cash decomposes back into contributions and repayments without anyone reconstructing it from memory.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "Collection frequency is an operational choice, not a licence",
      paragraphs: [
        "Daily collection fits a trader whose stock turns daily. That is a cash-flow judgement about the client, made from their real turnover, and it belongs in the agreement. It is not what determines whether your operation is lawful — your tier, your registration, your pricing, your disclosures and your recovery conduct decide that.",
        "In Vasool a line is an operational portfolio: a way to group clients by market, collector or geography so field work can be scheduled and a day's cash reconciled. Beneath it, every loan keeps its own principal, interest, fees, penalties and payment history, and every susu account keeps its own contribution record — because a collector's cash total is not profit, and a client's savings balance is not yours.",
        "Recovery conduct is not a feature toggle. Harassment, public shaming, contact-list abuse, threats and coercion are not collection techniques in Ghana or anywhere else Vasool operates. The system is built to record respectful, documented recovery, including the reason a payment was missed.",
      ],
    },
    {
      heading: "What is not ready yet",
      paragraphs: [
        "Ghana is not currently selectable at company setup. Vasool supports India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia today. Adding Ghana means the cedi as a first-class currency with Africa/Accra business dates and Ghanaian phone and address formats — small-sounding things that are wrong in every report if they are wrong at setup.",
        "Twi, Ga and Ewe are not dictation languages, so a collector on a Ghanaian route would speak entries in English today. There is no automated MTN MoMo or Telecel Cash import: a mobile-money repayment is recorded with its channel and reference by the person taking it, and reconciled against your statement — the record is reliable, the import is manual.",
        "If you are a Ghanaian lender or susu company evaluating options now, the useful next step is a conversation about timing — what you need, when you need it, and whether that lines up with what we can honestly commit to. If it does not, we will say so.",
      ],
    },
    voiceApprovalProse(COUNTRY),
    fieldDayProse(COUNTRY),
  ],
  checklist: {
    heading: "Before your first collection round in Ghana",
    sub: "Work through this with Ghanaian counsel. Vasool holds the records; none of these are questions software can answer.",
    items: [
      "Confirm your tier with the Bank of Ghana and exactly what it permits you to take and to lend.",
      "Confirm whether you may hold client contributions at all, and under what capital and reporting conditions.",
      "Confirm permitted pricing, fees and charges, and how they must be disclosed to the client.",
      "Keep each client's savings balance and loan principal as separate records, never netted.",
      "Record original principal apart from interest, fees, penalties and recoveries.",
      "Assess repayment capacity from the client's actual turnover before setting a daily schedule.",
      "Restrict collector access to client data, and review every correction, discount and closure.",
    ],
  },
  faqs: [
    ...voiceApprovalFaqs(COUNTRY),
    ...fieldDayFaqs(COUNTRY),
    {
      q: "Can I set up a Ghanaian company in Vasool today?",
      a: "No. The countries available at setup are India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia. This page exists because Ghanaian susu companies and money lenders ask, and because we would rather publish an honest market page than let you find out after a sales call.",
    },
    {
      q: "Does Vasool handle susu contributions as well as loans?",
      a: "Yes — savings schemes and loan books are both first-class records, and a single client can hold both. The point is that they stay apart: a contribution is a liability you owe the client, a repayment reduces what the client owes you, and nothing in the day's cash total tells you which is which unless it was recorded that way at the doorstep.",
    },
    {
      q: "Can I track individual susu collectors?",
      a: "Yes. Each collector has their own expected collection, actual collection, expenses and remittance, closed off daily. Collectors can also be tracked by GPS and route, which is what makes a cash shortfall attributable rather than mysterious.",
    },
    {
      q: "Does it reconcile MTN MoMo and Telecel Cash payments?",
      a: "Every payment records its channel and reference and can be tagged to the account it landed in, so mobile-money receipts reconcile against your statement. There is no automated import from MoMo or Telecel Cash — the entry is made by the person taking the payment, not pulled from the wallet.",
    },
    {
      q: "Is running a susu enterprise the same as being a microfinance company?",
      a: "No — and the distinction is exactly what the Bank of Ghana's tiers are for. Taking daily contributions from the public, lending your own funds, and operating as an individual collector under an umbrella association are different activities with different capital and reporting conditions. Confirm which one you are, and with what registration, before you collect.",
    },
    {
      q: "Does Vasool make my operation Bank of Ghana compliant?",
      a: "No. Compliance comes from your tier, your registration, your capital, your pricing, your disclosures and your conduct. Vasool provides the records and controls that let you evidence those things — it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "Planning a Ghanaian rollout?",
  ctaSub:
    "Tell us your tier, your products and your timing. We will tell you what is ready, what is not, and whether the dates line up — before you commit to anything.",
};

const Ghana = () => <KeywordLanding config={config} />;

export default Ghana;
