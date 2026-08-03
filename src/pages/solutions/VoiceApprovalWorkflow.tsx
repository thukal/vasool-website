import { Link } from "react-router-dom";
import {
  Mic,
  UserCheck,
  Languages,
  ScrollText,
  SlidersHorizontal,
  WifiOff,
  Receipt,
  MapPin,
  BarChart3,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { COUNTRIES } from "@/lib/countries";

const CANONICAL = "/voice-approval-workflow";

/**
 * The global counterpart to /voice-entry-collection-app, which is written for
 * India and ranks on Indian-language voice terms. This page carries the same
 * capability for every market, and pairs it with maker-checker — the half that
 * turns "fast field entry" into something a regulated lender can defend.
 *
 * Accuracy constraints, same as src/lib/fieldOperations.tsx: maker-checker does
 * not cover individual collection entries yet, approvals are never given by
 * voice, and reporting is what ships today rather than bureau or regulator
 * returns. All three are stated on the page rather than left for a buyer to
 * discover after signing.
 */

const LANGUAGE_LINE = COUNTRIES.map((c) => `${c.name} (${c.voiceLangs})`).join(
  ", ",
);

/** Caveats for markets whose local language is not a dictation language yet. */
const LANGUAGE_CAVEATS = COUNTRIES.filter((c) => c.voiceNote)
  .map((c) => c.voiceNote)
  .join(" ");

const config: KeywordLandingConfig = {
  seo: {
    title: "Voice Approval Workflow for Lenders | Vasool",
    description:
      "Field officers dictate collections and expenses by voice, every entry ties to a GPS-tracked route, and the changes that carry consequence are held for maker-checker approval before they touch the book. Day book, officer performance, DPD ageing and P&L close it out. Available in every country Vasool supports. Free demo.",
    keywords:
      "voice approval workflow, maker checker approval software, loan approval workflow software, voice entry loan management software, voice expense tracking app, collection route tracking software, field officer gps tracking lending, day book report loan software, officer performance report microfinance, approval workflow for microfinance, maker checker lending software, voice to data loan software, multi language voice collection app, loan management approval inbox",
    canonical: CANONICAL,
  },
  breadcrumbName: "Voice Approval Workflow",
  badge: "In every country Vasool supports",
  h1: (
    <>
      Speak the entry.{" "}
      <span className="text-gradient">Approve what matters.</span>
    </>
  ),
  intro:
    "A round is money in, money out, and where the officer went to do it. Vasool captures all three as they happen: collections and expenses dictated in the officer's own language, both tied to a GPS-tracked route. What posts immediately and what waits is the split that matters — a repayment posts on confirmation, while a rewritten loan or a new borrower can be held for an approver. The day closes on a per-route day book, officer performance and P&L. The same flow runs in all nine markets.",
  featuresHeading: "The whole round, one flow, two speeds",
  featuresSub:
    "Most lending software makes you pick: gate everything and your officers stop using the app, or gate nothing and your book is whatever the last person typed. This is built to avoid that trade — and to record the money going out and the ground covered, not just the money coming in.",
  features: [
    {
      icon: Mic,
      title: "Voice to data, not voice notes",
      desc: "The officer speaks and Vasool writes a structured record — borrower, amount, mode, date — that is searchable and reportable like any typed entry. No audio clip anyone has to listen back to at month end.",
    },
    {
      icon: Languages,
      title: "The language the officer thinks in",
      desc: "Dictation works in every market Vasool supports, including mixed-language phrases where the sentence runs in one language and the number in another. Officers speak normally; the record comes out structured.",
    },
    {
      icon: UserCheck,
      title: "Maker-checker on what you choose",
      desc: "Hold a staff create, edit or delete until an owner or an assigned approver allows it. It covers customers, loans, chit and savings schemes, gold sales, expenses, staff, roles and routes — switched on per role and per resource.",
    },
    {
      icon: SlidersHorizontal,
      title: "Gated is the exception, not the default",
      desc: "Ordinary collections post straight through, so volume never queues behind an approver. Only the resources you have gated wait — which is what keeps the control in use instead of switched off after a week.",
    },
    {
      icon: ScrollText,
      title: "Both outcomes on the trail",
      desc: "Approval and rejection are both recorded, with who decided, when, and what the request contained. A change that quietly appears with no history is exactly what the trail exists to prevent.",
    },
    {
      icon: Receipt,
      title: "Expenses dictated the same way",
      desc: "Petrol, fares and market fees are spoken like a collection and land in the income and expense ledger with a receipt photo. Both sides of the round are captured where they happen, so the cash bag reconciles against the book instead of against a memory.",
    },
    {
      icon: MapPin,
      title: "Every entry ties to a route",
      desc: "Routes are planned daily or weekly, assigned to officers and tracked to completion with live GPS and location history. Collections and expenses carry their route, which is what makes end-of-day settlement per officer possible at all.",
    },
    {
      icon: BarChart3,
      title: "Reports that close the day",
      desc: "Day book per route, officer performance with collection efficiency and expense breakdown, collection summaries, overdue and DPD ageing, cash flow by account and P&L — exportable as PDF or CSV, and answerable by voice.",
    },
    {
      icon: WifiOff,
      title: "Works with no network",
      desc: "Voice entries keep working offline on the route and sync when coverage returns. Pending requests reach the approvals inbox once the device is back online.",
    },
  ],
  stepsHeading: "From spoken word to approved record",
  steps: [
    {
      title: "The officer speaks",
      desc: "One tap on the mic, then the entry — borrower, amount, payment mode — in their own language. No menus, no account search.",
    },
    {
      title: "Vasool confirms the match",
      desc: "The matched borrower and parsed amount are shown before anything saves. Wrong or ambiguous, and the officer picks from a shortlist with one tap.",
    },
    {
      title: "Routine posts, gated holds",
      desc: "A collection posts immediately. A change to a gated resource becomes a pending request instead of an edit to your book.",
    },
    {
      title: "The approver decides",
      desc: "The request lands in the approvals inbox on the dashboard or the app. Approve and it applies; reject and it never happened — both on the audit trail.",
    },
  ],
  prose: [
    {
      heading: "Why speed and control belong on different entries",
      paragraphs: [
        "The argument against approval workflows in field lending is a fair one: an officer standing in front of a borrower with a queue behind them cannot wait for a manager. Every gate you add is a gate someone eventually works around, and a control that gets worked around is worse than no control, because it also gives you false confidence.",
        "So the question is not whether to gate, but what. A repayment happens eighty times a day and changes a balance by a known amount against a known schedule — the risk in it is mishearing, and the confirmation screen handles that at the doorstep. Rewriting a loan's terms happens rarely and changes what a borrower owes — the risk in it is judgement or intent, and no confirmation screen catches either. That one needs a second person.",
        "Vasool is built on that split. Voice makes the high-volume half fast enough that officers stop keeping a parallel notebook, which is where reconciliation problems are actually born. Maker-checker makes the low-volume half defensible. Neither works alone: fast entry without control is a book nobody can audit, and control without fast entry is a system your field staff quietly abandon.",
      ],
    },
    {
      heading: "The same flow in nine markets",
      paragraphs: [
        `Voice entry is not an India-only feature with the other markets waiting. Officers dictate in ${LANGUAGE_LINE}. ${LANGUAGE_CAVEATS}`,
        "What differs by market is not the mechanism but what is worth gating. A Kenyan SACCO cares about who added a member to a chama and who rewrote a loan before the paybill sees the repayments. A South African credit provider cares about a borrower record edited after the affordability assessment was run on it. An Indonesian koperasi cares that a change to a member's savings scheme names whoever allowed it, because the money belongs to the members. Same inbox, different list of gated resources.",
        <>
          Each{" "}
          <Link to="/countries" className="text-secondary hover:underline">
            country page
          </Link>{" "}
          sets out what that market's buyers usually gate, alongside the
          currency, the payment rail and the regulator they answer to.
        </>,
      ],
    },
    {
      heading: "Money in, money out, and the ground covered",
      paragraphs: [
        "A collection app that records only repayments measures half a round. The officer also spends — fuel, a fare, a market fee — and if that side is written on a slip and typed up at night, the cash bag never quite matches the book. Expenses are dictated exactly like collections and land in the income and expense ledger with a receipt photo, so both directions are captured at the moment they happen.",
        "Everything attaches to a route. Routes are planned daily or weekly and assigned ahead of the day, officers navigate them with GPS, completion is tracked live, and a location history records where staff actually went for visit verification. Because each collection and expense carries its route, the day book is per route and end-of-day settlement compares one officer’s cash against one officer’s recorded movements rather than against a pooled total nobody can decompose.",
        "That is what makes the reporting worth reading. Officer performance shows collection efficiency, attendance, route stats and expense breakdown side by side, so a strong collection number earned by heavy spending stops looking like a strong month. Overdue and DPD ageing, collection summaries, cash flow by registered account, a cash book and period P&L round it out, each exportable as PDF or CSV — and any of them answerable by voice when asking beats navigating.",
      ],
    },
    {
      heading: "What this does not do",
      paragraphs: [
        "Maker-checker covers customers, loans, chit and savings schemes, gold sales, expenses, staff, roles and routes. It does not yet cover individual collection entries — holding a single repayment for approval is on the roadmap and is not a shipping feature. A spoken collection posts once the officer confirms the match, and corrections to it live on the audit trail rather than behind a gate.",
        "Approvals are also not given by voice, deliberately. Dictation is for capture in the field, where speed is the whole point; approval is a considered action in the inbox, where the approver reads the request before allowing it. An approval you could give by talking is an approval you could give by accident.",
        "And none of this is a compliance product. Vasool holds records and enforces the controls you configure. It is not a licence, a registration or regulatory approval in any market, and no workflow in it makes an unlawful loan lawful.",
      ],
    },
  ],
  checklist: {
    heading: "What you get, stated plainly",
    sub: "The voice-approval flow as it actually ships today:",
    items: [
      "Voice dictation of entries in every country Vasool supports, in local languages",
      "Speech converted to a structured record — borrower, amount, mode — not an audio file",
      "A confirmation of the matched borrower and amount before anything is saved",
      "Maker-checker on customers, loans, chit and savings schemes, gold sales, expenses, staff, roles and routes",
      "Gating configured per role and per resource, so ordinary collections stay one-tap",
      "Requests routed to the owner or an assigned approver, applied only on approval",
      "Approvals and rejections both written to an immutable audit trail",
      "Expenses dictated the same way, posted to the ledger with a receipt photo",
      "Routes planned daily or weekly, assigned to officers, GPS-navigated and tracked to completion",
      "Staff location history for visit verification, and every entry tagged to its route",
      "Day book per route, officer performance, collection summary, overdue and DPD ageing, cash flow by account, cash book and P&L",
      "Every report exportable as PDF or CSV, and answerable by voice",
      "Offline voice entry that syncs when the network returns",
      "Not included today: holding an individual collection entry for approval, and approving by voice",
    ],
  },
  faqs: [
    {
      q: "What is a voice approval workflow?",
      a: "It is two capabilities working as one flow. Field officers record entries by speaking rather than typing, and Vasool turns the speech into a structured record. Separately, the actions you have marked as needing a second pair of eyes are held as pending requests and applied only once an owner or assigned approver allows them. The result is field entry that is fast where volume lives and witnessed where the money is decided.",
    },
    {
      q: "Which countries is voice entry available in?",
      a: `All of them. Vasool has market pages for ${COUNTRIES.length} countries — ${COUNTRIES.map((c) => c.name).join(", ")} — and voice entry works in every one, in the languages officers speak on those routes rather than in English only. Company setup is available in ${COUNTRIES.filter((c) => c.status !== "preview").length} of them: Cambodia has a market page but is not selectable at setup yet, and Khmer dictation ships when it is.`,
    },
    {
      q: "Can a collection entry be held for approval?",
      a: "Not today. Maker-checker covers customers, loans, chit and savings schemes, gold sales, expenses, staff, roles and routes. Holding an individual collection entry is on the roadmap. A spoken collection posts once the officer confirms the matched borrower and amount, and any later correction is recorded on the audit trail with who made it and why.",
    },
    {
      q: "Can the approver approve by speaking?",
      a: "No. Approval is a deliberate action taken in the approvals inbox on the web dashboard or in the app, where the approver can see the whole request before allowing it. Voice is for capture in the field, not for authorisation.",
    },
    {
      q: "Does gating slow down my collection round?",
      a: "It should not, because gating is set per role and per resource rather than globally. Ordinary collections post straight through. Only the resources you have chosen to gate become pending requests, and those are by definition the rare, consequential ones — a rewritten loan, a new borrower, a released gold sale.",
    },
    {
      q: "What happens if the app mishears the entry?",
      a: "Vasool shows the matched borrower and the parsed amount before saving. If the match is wrong or ambiguous, the officer picks the right borrower from a shortlist with one tap. Nothing enters the book without that confirmation, which is the control that makes dictation safe at speed.",
    },
    {
      q: "Can officers record expenses by voice as well as collections?",
      a: "Yes. An expense is dictated the way an officer would say it out loud — \"petrol 200\", \"transport 1500\" — and posts to the income and expense ledger with a receipt photo attached. It is the same capture path as a collection, so a round is recorded in full while the officer is still on it and the day book closes against actual cash.",
    },
    {
      q: "How does route tracking work?",
      a: "Routes are planned daily or weekly, assigned to an officer, and populated with the loans and customers due. The officer navigates with GPS, completion is tracked as it happens, and a location history records where staff actually went for visit verification. Every collection and expense is tagged to its route, which is what produces a per-route day book and a clean per-officer cash settlement.",
    },
    {
      q: "What reports does Vasool produce?",
      a: "A day book per route, collection summaries, officer performance covering collection efficiency, attendance, route stats and expense breakdown, overdue and DPD ageing, cash flow by registered account, a cash book, period profit and loss, and a gold sale report — all exportable as PDF or CSV. You can also ask for a report by voice. Credit-bureau reporting, NPA classification to regulator norms and automated mobile-money import are not included and are stated as roadmap wherever they come up.",
    },
    {
      q: "Does voice entry work offline?",
      a: "Yes. Entries recorded by voice keep working with no network and sync automatically when coverage returns, the same as every other entry in Vasool. Pending approval requests reach the inbox once the device is back online.",
    },
  ],
  related: [
    { label: "Voice Entry Collection App", to: "/voice-entry-collection-app" },
    { label: "Staff Tools & Approvals", to: "/staff-tools" },
    { label: "All supported countries", to: "/countries" },
    { label: "NBFC Loan Management", to: "/nbfc-loan-management" },
    { label: "Features", to: "/features" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Hear an entry, then watch it wait for approval",
  ctaSub:
    "Book a call and we will set up a company in your country, dictate a collection in your officers' language, and gate a loan edit so you can see the request land in the approvals inbox.",
};

const VoiceApprovalWorkflow = () => <KeywordLanding config={config} />;

export default VoiceApprovalWorkflow;
