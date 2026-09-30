import {
  PiggyBank,
  Wallet,
  Users,
  Smartphone,
  WifiOff,
  ShieldCheck,
  ScrollText,
  Mic,
  MapPin,
  BarChart3,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const CANONICAL = "/susu-collection-app";

const config: KeywordLandingConfig = {
  seo: {
    title: "Susu Collection App & Susu Management Software | Vasool",
    description:
      "Susu software for daily collection in West Africa: record every contribution at the stall with the collector, client and channel, keep savings apart from loans, close each collector's cash daily, and show any client their balance on demand. Works offline. Free demo.",
    keywords:
      "susu collection app, susu software, susu management software, susu collector app, daily contribution collection app, susu software ghana, esusu software, ajo collection app, thrift collection software, savings collection app west africa, susu company software, digital susu platform",
    canonical: CANONICAL,
  },
  breadcrumbName: "Susu Collection App",
  badge: "Daily collection, West Africa",
  h1: (
    <>
      A susu collection app that survives{" "}
      <span className="text-gradient">the end of the day</span>
    </>
  ),
  intro:
    "Susu works because the collector shows up every day. It breaks for the same reason: one person walks a line of stalls holding other people's savings, writes in a card, and reconciles at night from memory. The card says one thing, the book says another, and the client's question — how much do I have — takes three days to answer. Vasool records the contribution at the stall, with the client, the collector, the channel and a timestamp on it, keeps a member's savings apart from any loan they hold, and closes each collector's cash the same evening.",
  featuresHeading: "The controls a susu operation actually turns on",
  featuresSub:
    "The card in the client's hand and the ledger in the office are two records of the same money. Every susu failure is the gap between them — so the fix is to make one record at the point of collection, not two afterwards.",
  features: [
    {
      icon: PiggyBank,
      title: "Savings and loans on one client, held apart",
      desc: "A client can be contributing and borrowing at the same time. Their susu balance and their outstanding principal are separate records with separate histories, so a contribution is never quietly used to make a repayment look made.",
    },
    {
      icon: Mic,
      title: "Speak the entry, don't type it at a stall",
      desc: "Collectors dictate contributions and Vasool writes a structured record — client, amount, channel — not an audio clip, with the matched client shown for confirmation before it saves. Typing on a cramped form in the sun is why entries get deferred to the evening, and the evening is where they get lost.",
    },
    {
      icon: Wallet,
      title: "Per-collector daily close",
      desc: "Expected collection, actual collection, expenses and remittance are tracked per collector to a daily close. A shortfall surfaces the same evening, attached to one person's round, rather than at month end attached to nobody.",
    },
    {
      icon: ScrollText,
      title: "A balance the client can be shown",
      desc: "Every contribution carries its date, amount, channel and collector, so the answer to \"how much do I have\" is a record on a screen that matches the card — not a figure reconstructed from a passbook only the collector can read.",
    },
    {
      icon: Users,
      title: "Groups, associations and individual clients",
      desc: "Run market associations and solidarity groups alongside individual clients, with each member's own contributions, principal and history preserved beneath the group total.",
    },
    {
      icon: Smartphone,
      title: "Cash and wallet on the same round",
      desc: "Every entry records its channel and reference, so a mobile-money contribution and a cash one sit in the same book and reconcile against different statements without anyone re-keying them.",
    },
    {
      icon: WifiOff,
      title: "Offline first, because markets are",
      desc: "Entries save on the device and sync when the signal returns. A collector never stops recording halfway down a line of stalls because the network dropped.",
    },
    {
      icon: MapPin,
      title: "The round is the unit of the day",
      desc: "Plan daily rounds, assign them to collectors, and track completion live with GPS and a location history. Every contribution and expense is tagged to the round it came from, which is what makes end-of-day settlement a reconciliation rather than an argument.",
    },
    {
      icon: ShieldCheck,
      title: "Adjustments that need a witness",
      desc: "Every edit, write-off and closure is logged with who did it and when. The consequential changes — a balance adjusted by hand, a client signed up in the field, a loan rescheduled — can be held for owner or manager approval before they take effect.",
    },
    {
      icon: BarChart3,
      title: "Reports that close the day and the month",
      desc: "A day book per round, collector performance with collection efficiency and expense breakdown, contribution summaries, overdue and DPD ageing on any loan book, cash flow by account and profit and loss — each exportable as PDF or CSV.",
    },
  ],
  stepsHeading: "From the stall to a reconciled book",
  steps: [
    {
      title: "Set up your company and your schemes",
      desc: "Register your savings schemes and any loan products, and set the contribution amounts and frequencies your clients actually agreed to.",
    },
    {
      title: "Organise rounds by market and collector",
      desc: "Group clients by market, line, cluster or collection day, and assign each round to the collector who walks it.",
    },
    {
      title: "Collect with proof",
      desc: "The collector speaks or taps the contribution at the stall, with the channel and a photo where the evidence matters, and the client gets a receipt.",
    },
    {
      title: "Close per collector, every evening",
      desc: "Reconcile declared cash and wallet receipts against expected collection for that collector's round, then read the day book off the same records.",
    },
  ],
  prose: [
    {
      heading: "Why susu software is not just savings software",
      paragraphs: [
        "Most savings software assumes the depositor comes to you. Susu assumes the opposite: the collector goes to the depositor, daily, on foot, carrying cash that belongs to other people. That inversion changes what the system has to be good at. Balance calculation is trivial. Proving who collected what, when, and whether it reached the office is the entire job.",
        "It also changes where the risk sits. In a branch model the control is the counter — two people, a receipt, a camera. On a susu round there is one person and a card. So the controls have to move to the point of collection: an entry made while the client is standing there, tied to a named collector and a GPS-tracked round, with a receipt the client keeps and a balance they can check against yours.",
        "The second thing that makes susu distinctive is that the same collector often takes a contribution from one stall and a loan repayment from the next. Those are opposite obligations — one is money you owe the client, the other is money the client owes you — and they arrive in the same bag. If the system records them as one undifferentiated total, nobody can decompose the day afterwards. Vasool records the meaning at the doorstep, so the cash reconciles back into contributions and repayments without reconstruction.",
      ],
    },
    {
      heading: "Susu, ajo, esusu, adashe — the same shape, different names",
      paragraphs: [
        "The daily-contribution model runs across West Africa under local names: susu in Ghana, ajo, esusu and adashe in Nigeria, and variants elsewhere. The vocabulary differs and the legal treatment differs sharply, but the operational shape is the same — a named collector, a fixed round, a daily amount, and a client balance that has to be defensible on demand.",
        "That is why this page is about the operation rather than the jurisdiction. What you are permitted to take, from whom, and under what registration is a question for your regulator and your lawyer, and it has different answers in Accra and in Lagos. What the software does is identical in both: record the entry where it happens, attribute it to a person, and close the round the same day.",
        "A word on the legal side, because it matters and is easy to skate past. Taking daily contributions from the public is not automatically the same activity as lending your own funds, and neither is automatically the same as operating as an individual collector under an umbrella association. Those distinctions carry different capital, registration and reporting conditions. Vasool is collections and portfolio software — it is not a licence, a registration or regulatory approval, and no feature in it makes an unpermitted activity permitted.",
      ],
    },
    {
      heading: "What is available today, and where",
      paragraphs: [
        "Nigeria is available at company setup now, in naira on Africa/Lagos business dates — so a Nigerian ajo or esusu operation, cooperative society or microfinance bank can run this today. Kenya and South Africa are live too.",
        "Ghana and Côte d'Ivoire are not yet selectable at setup. Their market pages are published and say so rather than quietly listing them alongside the rest, because a susu company in Accra deserves to know that before a sales call rather than during one.",
        "Local-language dictation follows the same honesty rule. Collectors dictate in English, Nigerian Pidgin, Hausa and Yoruba on Nigerian routes today. Twi, Ga and Ewe are not dictation languages yet and will arrive alongside Ghanaian company setup, not before it.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is a susu collection app?",
      a: "Software that replaces the collector's card and the office ledger with one record made at the point of collection. The collector records each client's contribution on a phone — amount, channel, timestamp, and their own identity attached — the client gets a receipt, and the office sees the round as it happens rather than at the end of the day.",
    },
    {
      q: "Can one client save and borrow at the same time?",
      a: "Yes, and the two stay separate. A susu balance is a liability you owe the client; a loan principal is what the client owes you. They are distinct records with distinct histories, and nothing nets one against the other — which is the single most important thing to get right when the same collector takes both on the same round.",
    },
    {
      q: "Does it work without a network?",
      a: "Yes. Entries save on the device and sync when the connection returns, so a collector keeps recording through a dead spot and nothing is lost. This is not a degraded mode — offline is the assumed condition on a market round.",
    },
    {
      q: "How do I know a collector remitted everything they took?",
      a: "Each collector's round has an expected collection, an actual collection, expenses and a remittance, closed off daily. The comparison is per person and per round rather than pooled, so a shortfall is attributable the same evening. Rounds are also GPS-tracked with a location history, which is what makes \"I visited, they were closed\" checkable.",
    },
    {
      q: "Can clients see their own balance?",
      a: "Clients receive a receipt for each contribution, and every entry carries its date, amount, channel and collector, so a balance can be produced and shown on demand and checked against the client's card. Vasool does not currently ship a separate client-facing app.",
    },
    {
      q: "Does it handle mobile money as well as cash?",
      a: "Every payment records its channel and transaction reference and can be tagged to the account it landed in, so wallet receipts reconcile against your statement while field cash reconciles against the collector's declared total. There is no automated import from MTN MoMo, Telecel Cash or any other wallet — the entry is made by the person taking the payment.",
    },
    {
      q: "Is susu software the same as microfinance software?",
      a: "It overlaps but is not identical. Microfinance software is built around a loan book. Susu software has to be built around a collector's round and a client savings balance first, with the loan book alongside it. Vasool does both, which is the point — most operations run both and the failure mode is the seam between them.",
    },
    {
      q: "Does Vasool make my susu operation legal?",
      a: "No. Vasool is collections and portfolio software. It is not a licence, a registration, or regulatory approval, and no feature in it makes an unlawful arrangement lawful. Confirm your legal form, what you are permitted to collect and from whom, and your reporting duties with a qualified local lawyer before your first round.",
    },
  ],
  related: [
    { label: "Vasool in Ghana", to: "/loan-management-software-ghana" },
    { label: "Ajo & Esusu Collection Software", to: "/ajo-esusu-collection-software" },
    { label: "Vasool in Nigeria", to: "/loan-management-software-nigeria" },
    { label: "All supported countries", to: "/countries" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Voice Approval Workflow", to: "/voice-approval-workflow" },
  ],
  ctaHeading: "See it against one real collector's round",
  ctaSub:
    "Book a call, bring a single collector's client list and yesterday's card, and we will build that round and close it end to end on your own numbers.",
};

const SusuCollectionApp = () => <KeywordLanding config={config} />;

export default SusuCollectionApp;
