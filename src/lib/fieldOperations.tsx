import { Link } from "react-router-dom";
import { Mic, Receipt, MapPin, BarChart3 } from "lucide-react";
import type {
  LandingFeature,
  LandingFAQ,
  LandingProse,
} from "@/components/KeywordLanding";
import { inSentence, type CountryMeta } from "@/lib/countries";

/**
 * The field day — money in, money out, the route walked, and the reports that
 * close it — is positioned identically in every market Vasool supports, so it is
 * built here once rather than rewritten on nine country pages that would drift
 * apart within two edits. What varies per country is only what genuinely
 * differs: the languages a collector speaks, the expense they actually incur on
 * a round, and the local record worth holding for a second pair of eyes.
 *
 * Three accuracy constraints this copy must keep, all of which the site states
 * elsewhere and buyers will hold us to:
 *
 * 1. Maker-checker covers customers, loans, chit and savings schemes, gold
 *    sales, expenses, staff, roles and routes — NOT individual collection
 *    entries, which is on the roadmap. Never imply a spoken collection can be
 *    held for approval. The split is the story: the routine entry posts, the
 *    consequential record is gated.
 * 2. Speech is how an entry is *made*; a tap in the approvals inbox is how a
 *    request is *allowed*. Nothing here may imply approving by voice.
 * 3. Reports are what ships today — day book, P&L, officer performance,
 *    collection summary, overdue/DPD, cash flow by account, cash book, gold
 *    sale — exported as PDF and CSV. Do not imply bureau reporting, NPA
 *    classification or automated mobile-money import, all of which are roadmap.
 */

/** The market caveat as a trailing sentence, or nothing when there is none. */
const note = (c: CountryMeta) => (c.voiceNote ? ` ${c.voiceNote}` : "");

export const voiceApprovalFeature = (c: CountryMeta): LandingFeature => ({
  icon: Mic,
  title: "Speak the routine, approve the consequential",
  desc: `Officers dictate collections in ${c.voiceLangs} and Vasool writes a structured record — borrower, amount, channel — not an audio clip. The records that carry real consequence go the other way: gate them per role and they wait in the approvals inbox until an owner or manager decides, with both outcomes on the audit trail.${note(c)}`,
});

export const voiceApprovalProse = (c: CountryMeta): LandingProse => ({
  heading: `Voice entry and approvals in ${inSentence(c)}`,
  paragraphs: [
    `A collector standing in front of a borrower is holding a cash bag and a phone, and the queue behind is not waiting. That is where entries get skipped and written up from memory at night — and a book reconstructed at night is a book nobody can defend. In ${inSentence(c)} the officer speaks the entry instead — ${c.voiceLangs} — and Vasool matches the borrower, parses the amount and the channel, and shows the match for confirmation before anything is saved.${note(c)}`,
    `Speed is right for a repayment and wrong for a decision. A collection is high-volume and low-consequence, so it posts as soon as the officer confirms it — the confirmation screen is the control. The records that change what a borrower owes are low-volume and high-consequence, so they can be gated instead: switch maker-checker on for the ones that matter here — ${c.voiceRisk} — and the change is held as a request rather than applied, routed to an owner or an assigned approver, and written to the audit trail whether it is approved or rejected.`,
    <>
      The gate is set per role and per resource, so you are not choosing between
      slowing every officer down and controlling nothing. It covers customers,
      loans, chit and savings schemes, gold sales, expenses, staff, roles and
      routes today; holding an individual collection entry for approval is on
      the roadmap, not shipping. The{" "}
      <Link
        to="/voice-approval-workflow"
        className="text-secondary hover:underline"
      >
        voice approval workflow
      </Link>{" "}
      page walks through what is held, who it routes to, and what the trail
      records for each outcome.
    </>,
  ],
});

export const voiceApprovalFaqs = (c: CountryMeta): LandingFAQ[] => [
  {
    q: `Can field officers record collections by voice in ${inSentence(c)}?`,
    a: `Yes. Voice entry works in every country Vasool supports, and officers in ${inSentence(c)} can dictate in ${c.voiceLangs}. Where a market has more than one, mixed-language phrases work too — a sentence in one language carrying a number in another. Vasool converts speech into a structured record rather than storing a voice note, so it is searchable and reportable like any typed entry. The matched borrower and parsed amount are shown for confirmation before anything is saved.${note(c)}`,
  },
  {
    q: "Which actions can be held for approval before they take effect?",
    a: `Maker-checker covers customers, loans, chit and savings schemes, gold sales, expenses, staff, roles and routes — enabled per role and per resource, so you gate what needs a witness and leave the rest one-tap. In ${inSentence(c)} the changes most worth gating are typically ${c.voiceRisk}. A gated create, edit or delete is held as a request, routes to the assigned approver, applies only on approval, and lands on the audit trail either way. Holding an individual collection entry is on the roadmap and does not ship today — a spoken collection posts once the officer confirms the match.`,
  },
  {
    q: "Does the approver also approve by voice?",
    a: "No, and that is deliberate. Speaking is how an entry is captured in the field, where speed is the point. Approving is a considered action taken in the approvals inbox, on the web dashboard or in the app, where the approver sees the full request before allowing it. An approval that could be given by talking is an approval that can be given by accident.",
  },
];

/**
 * The other half of the officer's day. A collection app that only records money
 * coming in leaves the round half-counted: the cash bag at close is collections
 * minus what the officer spent to earn them, and an expense remembered at night
 * is an expense argued about in the morning.
 */
export const voiceExpenseFeature = (c: CountryMeta): LandingFeature => ({
  icon: Receipt,
  title: "Money out, spoken the same way",
  desc: `Expenses are dictated like collections — "${c.voiceExpense}" — and land in the income and expense ledger with a receipt photo attached. Both sides of the round are captured where they happen, so the day book closes against real cash rather than a number reconstructed from memory.`,
});

export const routeTrackingFeature = (): LandingFeature => ({
  icon: MapPin,
  title: "The route is the unit of the day",
  desc: "Plan daily and weekly routes, assign them to officers, and track completion as it happens with live GPS and a location history behind it. Every collection and expense is tagged to the route it came from, which is what makes end-of-day cash settlement a reconciliation rather than an argument.",
});

export const reportingFeature = (): LandingFeature => ({
  icon: BarChart3,
  title: "Reports that close the day and the month",
  desc: "A day book per route, officer performance with collection efficiency and expense breakdown, collection summaries, overdue and DPD ageing, cash flow by account and profit and loss — each exportable as PDF or CSV, and answerable by voice when you would rather ask than navigate.",
});

export const fieldDayProse = (c: CountryMeta): LandingProse => ({
  heading: `A full day on the route, not just the collections`,
  paragraphs: [
    `Software that records only repayments measures half a round. An officer working a route in ${inSentence(c)} collects money and also spends it, and "${c.voiceExpense}" is exactly the kind of entry that never reaches the book when it is scribbled on a slip and typed up that evening — which is when the cash bag stops matching. Vasool takes both by voice: the collection at the doorstep, the expense at the moment it is incurred, each with a photo where the evidence matters.`,
    "Everything attaches to the route. Routes are planned and assigned ahead of the day, officers navigate them with GPS, completion is tracked as it happens, and a location history shows where staff actually went. Because each collection and expense carries its route, the day book is per route and end-of-day settlement compares one officer's cash against one officer's recorded movements — not against a pooled total nobody can decompose.",
    <>
      What comes out of that is reporting you can act on: officer performance
      with collection efficiency, attendance and expense breakdown; overdue and
      DPD ageing; cash flow by account; and profit and loss for the period,
      exportable as PDF or CSV. The{" "}
      <Link
        to="/voice-approval-workflow"
        className="text-secondary hover:underline"
      >
        voice approval workflow
      </Link>{" "}
      page shows how capture, control and reporting fit together across every
      market.
    </>,
  ],
});

export const fieldDayFaqs = (c: CountryMeta): LandingFAQ[] => [
  {
    q: "Can field officers record expenses by voice too?",
    a: `Yes. An officer says the expense the way they would say it out loud — "${c.voiceExpense}" — and it posts to the income and expense ledger with a receipt photo attached. It is the same capture path as a collection, so the round is recorded in full while the officer is still on it, and the day book closes against actual cash instead of an estimate written up that evening.`,
  },
  {
    q: "How are collection routes planned and tracked?",
    a: "Routes are planned daily or weekly, assigned to officers, and populated with the loans and customers due. Officers navigate with GPS, completion is tracked live, and a location history records where staff actually went for visit verification. Every collection and expense is tagged to its route, which is what gives you a per-route day book and a clean end-of-day cash settlement per officer.",
  },
  {
    q: "What reporting does Vasool provide?",
    a: `A day book per route, collection summaries, officer performance covering collection efficiency, attendance, route stats and expense breakdown, overdue and DPD ageing, cash flow by registered account, a cash book, and profit and loss for any period — all exportable as PDF or CSV, in ${c.currency.split(" · ")[0]}. You can also ask for a report by voice rather than navigating to it. Credit-bureau reporting and regulator-format returns are not included.`,
  },
];
