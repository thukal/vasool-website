import {
  PiggyBank,
  Wallet,
  Users,
  RotateCcw,
  Smartphone,
  WifiOff,
  ShieldCheck,
  Mic,
  MapPin,
  BarChart3,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE } from "@/lib/countries";

const CANONICAL = "/ajo-esusu-collection-software";

const config: KeywordLandingConfig = {
  seo: {
    title: "Ajo, Esusu & Adashe Collection Software for Nigeria | Vasool",
    description:
      "Thrift collection software for Nigerian ajo, esusu and adashe operations — every daily contribution recorded at the stall with its collector and channel, contributor balances kept apart from any loan, per-agent cash close, offline field work and a full audit trail. NGN and Africa/Lagos, available today.",
    keywords:
      "ajo software, esusu software, adashe software, ajo collection app, esusu collection software, thrift collection software nigeria, daily contribution collection app nigeria, thrift collector app, ajo app for agents, cooperative thrift software nigeria, savings collection software lagos, contribution management software nigeria",
    canonical: CANONICAL,
  },
  breadcrumbName: "Ajo & Esusu Software",
  badge: "Nigeria — available at setup today",
  h1: (
    <>
      Ajo and esusu collection software that closes{" "}
      <span className="text-gradient">the same evening</span>
    </>
  ),
  intro:
    "Ajo runs on trust and a paper card, and both hold right up until they do not. One agent walks a line of shops holding contributors' money, marks a card, and reconciles at night from memory — so a disputed balance becomes one person's word against another's, and a shortfall shows up weeks later attached to nobody. Vasool records each contribution where it happens, with the contributor, the agent, the amount and the channel on it, keeps a contributor's savings apart from any loan they hold, and closes each agent's cash the same evening. Nigeria is available at company setup today, in naira on Africa/Lagos business dates.",
  featuresHeading: "Built for the agent's round, not the branch counter",
  featuresSub:
    "In a branch there are two people and a receipt. On an ajo round there is one person and a card — so the control has to move to the doorstep, while the contributor is still standing there.",
  features: [
    {
      icon: Mic,
      title: "Speak the entry at the stall",
      desc: "Agents dictate contributions in English, Nigerian Pidgin, Hausa or Yoruba and Vasool writes a structured record — contributor, amount, channel — not an audio clip, with the matched contributor shown for confirmation before it saves. Mixed-language phrases work: a sentence in one language carrying a number in another.",
    },
    {
      icon: PiggyBank,
      title: "Contributions and loans, held apart",
      desc: "A contributor can be saving and borrowing at once. Their thrift balance is money you owe them and their loan principal is money they owe you — separate records with separate histories, never netted to make a repayment look made.",
    },
    {
      icon: Wallet,
      title: "Per-agent daily close",
      desc: "Expected collection, actual collection, expenses and remittance are tracked per agent to a daily close. A shortfall surfaces the same evening, attached to one person's round, rather than at month end attached to no one.",
    },
    {
      icon: RotateCcw,
      title: "Cycles and payouts on record",
      desc: "Each contributor's schedule, cycle position and payout history live in the record rather than the agent's head, so who has collected, who is owed and what remains is answerable without a meeting.",
    },
    {
      icon: Users,
      title: "Groups, associations and individuals",
      desc: "Run market associations and cooperative clusters alongside individual contributors, with each member's own contributions, principal and history preserved beneath the group total.",
    },
    {
      icon: Smartphone,
      title: "Cash, transfer and USSD in one book",
      desc: "Every entry records its channel and reference, so a bank transfer and a cash contribution sit in the same book and reconcile against different statements without anyone re-keying them.",
    },
    {
      icon: WifiOff,
      title: "Offline first, because markets are",
      desc: "Entries save on the device and sync when the signal returns. An agent never stops recording halfway down a line of shops because the network dropped.",
    },
    {
      icon: MapPin,
      title: "The round is the unit of the day",
      desc: "Plan daily rounds, assign them to agents, and track completion live with GPS and a location history. Every contribution and expense is tagged to its round, which turns end-of-day settlement into a reconciliation rather than an argument.",
    },
    {
      icon: ShieldCheck,
      title: "Adjustments that need a witness",
      desc: "Every edit, write-off and closure is logged with who did it and when. The consequential changes — a balance adjusted by hand, a contributor signed up in the field, a loan rescheduled after a bad market day — can be held for owner or manager approval before they take effect.",
    },
    {
      icon: BarChart3,
      title: "Reports that close the day and the month",
      desc: "A day book per round, agent performance with collection efficiency and expense breakdown, contribution summaries, overdue and DPD ageing on any loan book, cash flow by account and profit and loss — each exportable as PDF or CSV.",
    },
  ],
  stepsHeading: "From the market round to a reconciled book",
  steps: [
    {
      title: "Set up your company in NGN",
      desc: "Pick Nigeria at setup: naira amounts, Africa/Lagos business dates and local phone formats, on your own isolated database.",
    },
    {
      title: "Register your schemes and contributors",
      desc: "Set the contribution amounts and frequencies your contributors actually agreed to, and group them by market, cluster, agent or collection day.",
    },
    {
      title: "Collect with proof",
      desc: "The agent speaks or taps the contribution at the stall, with the channel and a photo where the evidence matters, and the contributor gets a receipt.",
    },
    {
      title: "Close per agent, every evening",
      desc: "Reconcile declared cash and transfers against expected collection for that agent's round, then read the day book off the same records.",
    },
  ],
  prose: [
    {
      heading: "The card is the problem, not the paper",
      paragraphs: [
        "Every ajo dispute has the same shape. The contributor's card says one thing, the agent's book says another, and there is no third record to settle it. The card is not the problem because it is paper — it is the problem because it is the only copy, written by one party, checkable by nobody.",
        "A phone entry made at the stall fixes that by producing two matching records instead of one contested one: the contributor keeps a receipt, the office sees the entry within seconds, and both carry the same timestamp, amount and channel. The agent's honesty stops being the control. The record is.",
        "This is also what makes a shortfall useful rather than just painful. When each round closes per agent the same evening, a gap points at one person, one day and one route. When collection is pooled and reconciled monthly, the same gap points nowhere, which is why it is usually found long after the money is.",
      ],
    },
    {
      heading: "Thrift collection is not automatically a lending business",
      paragraphs: [
        "This distinction does real work and is easy to skate past. A rotating savings and contribution arrangement — ajo, esusu, adashe — is not automatically a loan business, and a cooperative society's member service is not the same as lending to the public. Those are different activities with different registration, capital and reporting conditions, and the Central Bank of Nigeria's microfinance bank framework addresses licensing, governance, individual and group lending, documentation, portfolio at risk and provisioning for institutions on the lending side of that line.",
        "Which side you are on is a question for your regulator and your lawyer, not your software vendor. What the software does is make the answer evidenceable: contributions recorded as contributions, loans recorded as loans, each with its own balance and history, so the nature of your operation is visible in the records rather than asserted afterwards.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "Recovery conduct is not a feature toggle",
      paragraphs: [
        "Where an ajo operation also lends, recovery becomes part of the record. Harassment, public shaming, contact-list abuse, threats and coercion are not collection techniques in Nigeria or anywhere else Vasool operates. The system is built to record respectful, documented recovery — including the reason a payment was missed — and it is not built to help anyone avoid recording it.",
        "The practical version of that: an agent logs why a contributor could not pay, that reason sits on the record next to the missed instalment, and the follow-up decision is made by someone with the full history in front of them rather than by whoever shouted loudest at the stall.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is ajo or esusu collection software?",
      a: "Software that replaces the agent's card and the office ledger with one record made at the point of collection. The agent records each contributor's daily amount on a phone — with the channel, a timestamp and their own identity attached — the contributor gets a receipt, and the office sees the round as it happens instead of at the end of the month.",
    },
    {
      q: "Can I use this in Nigeria today?",
      a: "Yes. Nigeria is available at company setup now, in naira on Africa/Lagos business dates with local phone formats, on your own isolated database. Agents dictate entries in English, Nigerian Pidgin, Hausa or Yoruba.",
    },
    {
      q: "Can a contributor save and borrow at the same time?",
      a: "Yes, and the two stay separate. A thrift balance is a liability you owe the contributor; a loan principal is what they owe you. They are distinct records with distinct histories, and nothing nets one against the other — which is the most important thing to get right when the same agent takes both on the same round.",
    },
    {
      q: "How do I know an agent remitted everything they collected?",
      a: "Each agent's round has an expected collection, an actual collection, expenses and a remittance, closed off daily. The comparison is per person and per round rather than pooled, so a shortfall is attributable the same evening. Rounds are GPS-tracked with a location history, which is what makes \"I went, the shop was closed\" checkable.",
    },
    {
      q: "Does it work without a network?",
      a: "Yes. Entries save on the device and sync when the connection returns, so an agent keeps recording through a dead spot and nothing is lost. Offline is the assumed condition on a market round, not a degraded mode.",
    },
    {
      q: "Does it handle bank transfers as well as cash?",
      a: "Yes. Every payment records its mode and reference and can be tagged to the account it landed in, so transfers reconcile against statements while field cash reconciles against the agent's declared total. There is no automated bank or wallet import — the entry is made by the person taking the payment.",
    },
    {
      q: "Is running ajo the same as running a lending company?",
      a: "No — and that distinction is the point. A contribution or rotating-savings arrangement is not automatically a loan business, and a cooperative member service is not the same as lending to the public. Confirm which one you are operating, and with what authority, before you disburse anything.",
    },
    {
      q: "Does Vasool make my operation CBN compliant?",
      a: "No. Compliance comes from your licence or registration, your governance, pricing, disclosures, provisioning policy and conduct. Vasool provides the records and controls that let you evidence those things — it cannot create permission you do not have.",
    },
  ],
  related: [
    { label: "Vasool in Nigeria", to: "/loan-management-software-nigeria" },
    { label: "Susu Collection App", to: "/susu-collection-app" },
    { label: "All supported countries", to: "/countries" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Voice Approval Workflow", to: "/voice-approval-workflow" },
  ],
  ctaHeading: "See it against one real agent's round",
  ctaSub:
    "Book a call, bring a single agent's contributor list and yesterday's card, and we will build that round in naira and close it end to end on your own numbers.",
};

const AjoEsusuSoftware = () => <KeywordLanding config={config} />;

export default AjoEsusuSoftware;
