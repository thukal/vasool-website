import { Link } from "react-router-dom";
import {
  Car,
  CalendarClock,
  FileText,
  Gavel,
  Scale,
  BadgePercent,
  TrendingDown,
  WifiOff,
  Banknote,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { countryFor } from "@/lib/countries";
import {
  fieldDayFaqs,
  fieldDayProse,
  reportingFeature,
  routeTrackingFeature,
  voiceApprovalFeature,
  voiceExpenseFeature,
} from "@/lib/fieldOperations";

// Auto finance is an India-first book for us, so this page borrows India's
// voice languages and field-day copy from the country table.
const COUNTRY = countryFor("/nbfc-loan-management");

/**
 * The narrower of the two vehicle-finance pages. This one answers the
 * evaluation query ("best app for auto finance tracking") and does the work of
 * splitting its two search intents — financiers tracking a book they lent out
 * versus borrowers tracking their own EMIs, who are not our buyer.
 *
 * The head terms — "vehicle finance software", "two wheeler finance software" —
 * belong to /vehicle-finance-software, which is the pillar for how a vehicle
 * finance company runs. Keep those terms off this page's title and keywords,
 * and don't let the two pages restate each other: this page takes the
 * fieldDay* helpers from fieldOperations, the pillar takes voiceApproval*.
 */
const config: KeywordLandingConfig = {
  seo: {
    title: "Best App for Auto Finance Tracking (2026) | Vasool",
    description:
      "Vasool tracks an auto finance book the way a financier needs it — the vehicle behind every loan, EMI schedules, insurance expiry, field collection by voice, and a repossession that is never counted as a collection. Free demo.",
    keywords:
      "best app for auto finance tracking, auto finance tracking app, auto finance software, auto loan tracking software, auto finance collection app, repossession tracking software, EMI tracking app for financiers",
    canonical: "/auto-finance-tracking-app",
  },
  breadcrumbName: "Auto Finance Tracking App",
  badge: "Built for vehicle financiers",
  h1: (
    <>
      Auto finance tracking, built for{" "}
      <span className="text-gradient">the financier</span>
    </>
  ),
  intro:
    "Vasool tracks a vehicle finance book end to end: the asset behind every loan, the EMI schedule in front of it, the field collection that keeps it current, and the honest arithmetic of a seizure when it comes to that. One customer, several vehicles, each loan pointing at the specific vehicle securing it — and a repossession sale that never dresses itself up as a collection.",
  features: [
    {
      icon: Car,
      title: "The vehicle, not just the loan",
      desc: "A proper vehicle record sits against the customer — registration number, make, model, year, chassis and engine numbers, and a photo of the RC book. One customer can hold several vehicles, and each loan points at the specific vehicle backing it, so you always know which asset secures which account.",
    },
    {
      icon: CalendarClock,
      title: "Insurance expiry you can see coming",
      desc: "Each vehicle record carries its insurance expiry date. Collateral with lapsed cover is worth materially less if it comes back to you damaged — and an expiry date is invisible unless something is holding it next to the loan it secures.",
    },
    {
      icon: Banknote,
      title: "EMI schedules, foreclosure and pre-closure",
      desc: "Vehicle loans run as EMI loans: fixed-tenor schedules generated on disbursement, with 15-day and 30-day interval variants, and foreclosure and pre-closure handled in the closure flow rather than worked out on paper.",
    },
    {
      icon: Gavel,
      title: "A repossession is not a collection",
      desc: "When a seized vehicle is sold, the sale never posts as a collection or a payment — not against the loan, not on the dashboard, not in the daily collection report, and not against any officer's performance. Selling collateral is not cash collected from a borrower.",
    },
    {
      icon: Scale,
      title: "Recovery P&L on every seizure",
      desc: "Each seizure gets its own arithmetic: valuation frozen at the moment you took the vehicle, outstanding at that moment, refurbishment cost, sale amount and surplus split, days held, and the shortfall the sale did not cover. The net figure can be negative, and it is reported as a loss when it is one.",
    },
    {
      icon: BadgePercent,
      title: "Charges in your own vocabulary",
      desc: "The date-wise profit and loss ledger separates principal received, interest received and each deduction charge in its own column — generated from your own deduction rule names, whether you call them PF, Document, DC or Processing Fee, rather than forced into someone else's category list.",
    },
    {
      icon: FileText,
      title: "Waivers and fines recorded as what they are",
      desc: "At closure an early discount and a late fine are captured as their own amounts against the loan, instead of quietly adjusting the outstanding. At quarter end you can see what you gave away across early closures, and who approved it.",
    },
    {
      icon: TrendingDown,
      title: "Overdue and DPD per account",
      desc: "Days-past-due and overdue intensity are tracked per loan and aged into buckets, so follow-ups are ranked by days overdue, outstanding and repayment history rather than by whoever the officer called last.",
    },
    voiceApprovalFeature(COUNTRY),
    voiceExpenseFeature(COUNTRY),
    routeTrackingFeature(),
    reportingFeature(),
    {
      icon: WifiOff,
      title: "Works where the vehicle is",
      desc: "Auto finance collection happens at shops, stands and homes on patchy networks. Vasool records collections fully offline and syncs when connectivity returns, so a round on a weak signal is never a round written up from memory that evening.",
    },
  ],
  featuresHeading: "What auto finance tracking actually has to cover",
  featuresSub:
    "A loan ledger is the easy half. The half that decides whether a vehicle finance book is profitable is the asset behind the loan, the charges at origination, and what a seizure really earned.",
  steps: [
    {
      title: "Register the borrower and the vehicle",
      desc: "Capture KYC into the document vault and create the vehicle record — registration, make, model, year, chassis and engine numbers, RC photo and insurance expiry. Several vehicles can sit against one customer.",
    },
    {
      title: "Sanction and disburse",
      desc: "Run the application through AI-assisted credit appraisal for a risk score and suggested limit, book it as an EMI loan against the specific vehicle securing it, and record your origination charges under your own deduction rule names.",
    },
    {
      title: "Collect in the field",
      desc: "Officers work assigned routes with GPS, dictate each collection and each expense by voice, and attach photo proof. Entries post offline and sync, so the day book closes against real cash.",
    },
    {
      title: "Watch the book, and measure a seizure honestly",
      desc: "Track DPD and overdue ageing on live accounts. If an account has to be seized, the Recovery P&L reports valuation, outstanding, refurbishment, sale, days held and shortfall — separately from your collections.",
    },
  ],
  stepsHeading: "How an auto finance book runs on Vasool",
  prose: [
    {
      heading: "\"Auto finance tracking\" means two different things",
      paragraphs: [
        "The phrase gets searched by two completely different people, and they need opposite products. A borrower wants to watch their own car or bike EMIs come down — a personal budgeting job. A financier wants to track a book of vehicle loans: who owes what, which vehicle secures it, who is behind, and whether the whole operation is making money.",
        <>
          Vasool is for the second person. If you finance two-wheelers,
          three-wheelers, cars or commercial vehicles — as a money lender, a
          finance company or an NBFC — this is the side of the line you are on,
          and our{" "}
          <Link
            to="/vehicle-finance-software"
            className="text-secondary hover:underline"
          >
            vehicle finance software
          </Link>{" "}
          page covers how the whole company runs on it. If you are a borrower
          looking to track your own instalments, an expense app will serve you
          better than this will, and we would rather say so than waste your
          evening.
        </>,
        <>
          The distinction matters in the software, not just the marketing. A
          borrower's tracker needs a reminder and a balance. A financier's
          tracker needs a vehicle register, origination charges, a field team,
          an audit trail and a repossession ledger. Those are not the same
          product with a different login — and the overlap is roughly the EMI
          schedule, which is the one part everybody gets right. See the{" "}
          <Link to="/loan-types" className="text-secondary hover:underline">
            loan types Vasool runs
          </Link>{" "}
          for where vehicle finance sits alongside the rest of a mixed book.
        </>,
      ],
    },
    {
      heading: "Your collections are not your profit",
      paragraphs: [
        "A vehicle finance company closes the month with ₹18 lakh collected, and the owner treats that figure as the month's performance. It isn't. Between \"collected\" and \"earned\" sit charges, waivers, seizure proceeds and shortfall — and in auto finance specifically they are large enough to flip a good month into a flat one.",
        "The surprise for most owners is the charge columns. On a book with frequent disbursement, the charges collected at loan origination can rival or exceed the interest earned over the same period. If you only watch the collection total, that income is real but invisible, and you cannot tell whether a slow month was a lending problem or a recovery problem.",
        <>
          So four reports answer four different questions: the dashboard and
          collection reports tell you whether the field team collected what was
          due; the profit and loss ledger tells you where the money actually
          came from; closure records tell you what you chose to give away and
          who approved it; and the Recovery P&L tells you whether seizing that
          vehicle earned you anything. The long version is in our post on{" "}
          <Link
            to="/blog/vehicle-finance-accounts-collections-vs-profit"
            className="text-secondary hover:underline"
          >
            why vehicle finance collections aren't profit
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "The part most auto finance apps get wrong",
      paragraphs: [
        "Ask a vendor what happens when a seized vehicle is sold. A surprising number post the sale proceeds as a payment against the loan, because it clears the outstanding and the account closes cleanly. It is the single most distorting thing a vehicle finance system can do.",
        "Booking ₹85,000 of sale proceeds as a \"collection\" inflates your collection figures for a month in which recovery actually failed, credits a field officer with a collection they did not make, and hides the failure itself — the account that had to be seized stops looking like a problem. A financier whose software merges the two genuinely cannot tell a strong collection month from a month of heavy seizures.",
        "Vasool keeps them apart by design, and then measures the seizure on its own terms. Valuation is frozen at the moment of seizure so a historical record does not drift when market prices move. Refurbishment cost and days held are carried, because a vehicle sitting in your yard for ninety days costs money. And shortfall stays visible on the record rather than disappearing into a closed loan — you may never collect it, but a book that quietly forgets its shortfalls will overstate how well seizures are working, every single time.",
      ],
    },
    fieldDayProse(COUNTRY),
  ],
  checklist: {
    heading: "What the best app for auto finance tracking must do",
    sub: "When you compare vehicle finance software, these are the checks we would run, in this order:",
    items: [
      "Hold a vehicle record — registration, make, model, year, chassis and engine number, RC photo — linked to the loan it secures",
      "Allow several vehicles against one customer, with history that follows the asset",
      "Track insurance expiry on collateral you are holding",
      "Generate EMI schedules and handle foreclosure and pre-closure in the closure flow",
      "Keep repossession sale proceeds out of collections, dashboards and officer performance",
      "Report a Recovery P&L per seizure: valuation, outstanding, refurbishment, sale, days held, shortfall",
      "Report a negative recovery as a loss rather than flattering it with the sale amount",
      "Separate each origination charge in a P&L ledger, under the names you actually use",
      "Record early discounts and late fines as their own amounts, not as silent balance adjustments",
      "Age overdue accounts by DPD so follow-ups are ranked by recoverability",
      "Capture field collections offline, with GPS and photo proof on every visit",
      "Leave the data in a database you own, with a self-hosting option",
    ],
  },
  faqs: [
    {
      q: "Is Vasool a good app for auto finance tracking?",
      a: "It is built for the financier's side of auto finance, which is the harder half. You get a vehicle register linked to each loan, EMI schedules with foreclosure and pre-closure, origination charges separated in a date-wise P&L ledger, DPD ageing, voice-entry field collection with GPS and photo proof, and a Recovery P&L that measures a seizure honestly instead of booking it as a collection. Book a demo and check it against the list above before you take our word for it.",
    },
    {
      q: "I want to track my own car loan EMIs. Is this for me?",
      a: "No. Vasool is software a lender runs, not a borrower tool. If you are tracking instalments on a vehicle you financed, a personal finance or budgeting app is the right category. This page is for money lenders, finance companies and NBFCs tracking a book of vehicle loans they have given out.",
    },
    {
      q: "Can I track the vehicle itself, not just the loan account?",
      a: "Yes, and this is the main thing generic lending software misses. Each vehicle is its own record against the customer — registration number, make, model, year, chassis and engine numbers, a photo of the RC book, and the insurance expiry date. One customer can hold several vehicles, and every loan points at the specific vehicle securing it, so you know which asset backs which overdue account before you act on it.",
    },
    {
      q: "Does it handle two-wheeler and three-wheeler finance?",
      a: "Yes. The vehicle record and the EMI engine do not care what the vehicle is, so two-wheeler, three-wheeler, used car and commercial vehicle books all run on the same register — and daily or weekly collection is available where a monthly EMI doesn't suit how the borrower earns. Our vehicle finance software page goes through each of those books and how they differ operationally.",
    },
    {
      q: "What happens in the system when a vehicle is seized and sold?",
      a: "The sale is recorded against the seizure, never as a collection or a payment — so it does not touch your collection totals, your dashboard, the daily collection report or any officer's performance. Alongside it the Recovery P&L reports the valuation frozen at seizure, the outstanding at that moment, refurbishment cost, the sale amount and how any surplus splits between your share and a payout owed back to the customer, the days held from seizure to sale, and the shortfall the sale did not cover. The net can be negative, and it is reported as a loss when it is.",
    },
    {
      q: "Does Vasool handle RTO filings, hypothecation or credit-bureau reporting?",
      a: "No, and we would rather say so here than have you find out during onboarding. Vasool holds the vehicle and RC details against the loan, but it does not file with the RTO, manage hypothecation endorsement or NOC issuance, renew insurance, or report to credit bureaus such as CIBIL, Equifax, Experian or CRIF. Bureau reporting and NPA classification to RBI norms are on our roadmap and built on request, not shipping features. DPD and overdue intensity are tracked today, which is the raw material those buckets come from.",
    },
    ...fieldDayFaqs(COUNTRY),
    {
      q: "Who owns the auto finance data?",
      a: "You do. Each company runs on its own dedicated, isolated PostgreSQL database, with the option to self-host it on your own infrastructure. For a vehicle finance company holding borrower KYC and asset records, that is a cleaner ownership and residency position than sharing a pooled database with other businesses.",
    },
  ],
  related: [
    { label: "Vehicle Finance Software", to: "/vehicle-finance-software" },
    { label: "Loan Types", to: "/loan-types" },
    { label: "NBFC Loan Management", to: "/nbfc-loan-management" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Features & Reports", to: "/features" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "See your auto finance book the way it actually is",
  ctaSub:
    "Book a free demo and we will walk you through the vehicle register, the P&L ledger and the Recovery P&L on a sample book — including the seizure that lost money.",
};

const AutoFinanceTrackingApp = () => <KeywordLanding config={config} />;

export default AutoFinanceTrackingApp;
