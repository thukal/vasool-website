import { Link } from "react-router-dom";
import {
  CalendarDays,
  Mic,
  Route,
  Users,
  BarChart3,
  Package,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title: "Weekly Collection App for Weekly Finance Lines | Vasool",
    description:
      "Vasool is a weekly collection app for weekly finance lines — 10 or 12-week terms, market-day collections, day-of-week routes, and voice entry. Track every weekly line from disbursal to closure. Free demo.",
    keywords:
      "weekly collection app, weekly finance app, weekly loan collection app, weekly line app, weekly collection software, weekly finance software india, market day collection app, weekly vasool app, weekly installment app",
    canonical: "/weekly-collection-app",
  },
  breadcrumbName: "Weekly Collection App",
  badge: "Weekly Collection App",
  h1: (
    <>
      Weekly collection app for{" "}
      <span className="text-gradient">weekly finance lines</span>
    </>
  ),
  intro:
    "Ten-week lines, twelve-week terms, market-day rounds — weekly finance has its own rhythm. Vasool organizes borrowers by collection day, so Monday's line, Thursday's market, and Sunday's settlement each run themselves.",
  features: [
    {
      icon: CalendarDays,
      title: "Weekly schedules",
      desc: "10, 12, or any number of weeks — the schedule is generated at disbursal with each week's due amount and date.",
    },
    {
      icon: Route,
      title: "Day-of-week routes",
      desc: "Borrowers grouped by their collection day. Each agent opens the app and sees exactly who pays today.",
    },
    {
      icon: Mic,
      title: "Voice entry on rounds",
      desc: "Weekly rounds mean more borrowers per day than daily lines. Voice entry keeps the queue moving.",
    },
    {
      icon: Package,
      title: "Product-backed weekly loans",
      desc: "Selling goods on weekly installments? Tie loans to your inventory and track stock and collections together.",
    },
    {
      icon: Users,
      title: "Borrower history at a glance",
      desc: "A week is long enough to forget — the app shows last week's payment, missed weeks, and the remaining term before the agent knocks.",
    },
    {
      icon: BarChart3,
      title: "Week-over-week reports",
      desc: "Collections by week, by line, by agent — spot a slipping line before it becomes a default cluster.",
    },
  ],
  featuresHeading: "Weekly lines, handled properly",
  featuresSub:
    "Weekly finance isn't daily finance played slower — it has its own failure modes. Vasool covers them.",
  steps: [
    {
      title: "Disburse with a weekly term",
      desc: "Set the amount, the number of weeks, and the collection day. The schedule writes itself.",
    },
    {
      title: "Open today's collection day",
      desc: "Each agent sees the borrowers due today — Monday line, market-day line, or any day you run.",
    },
    {
      title: "Collect by voice or tap",
      desc: "Cash or UPI, with photo proof if you want it. Missed borrowers stay flagged for follow-up.",
    },
    {
      title: "Review the week",
      desc: "Week-over-week reports show each line's health: collected, shortfall, and who's falling behind.",
    },
  ],
  stepsHeading: "How a weekly line runs on Vasool",
  prose: [
    {
      heading: "The weekly collection problem nobody talks about",
      paragraphs: [
        "In daily collection, a missed payment is obvious tomorrow. In weekly collection, a missed week can hide for a month — by the time a paper register shows the pattern, the borrower is four weeks behind and the line is in trouble. Weekly finance needs earlier visibility, not just record-keeping.",
        "Vasool surfaces missed weeks the moment they happen: the dashboard flags shortfalls per line per week, and the borrower's full payment history is in the agent's hand at the next visit. Follow-up happens one week late, not one month late.",
        <>
          Running daily and monthly lines too? One Vasool account covers{" "}
          <Link
            to="/daily-collection-app"
            className="text-secondary hover:underline"
          >
            daily
          </Link>
          , weekly, and{" "}
          <Link
            to="/monthly-finance-app"
            className="text-secondary hover:underline"
          >
            monthly
          </Link>{" "}
          collections side by side.
        </>,
      ],
    },
    {
      heading: "Market days, festival weeks, and real schedules",
      paragraphs: [
        "Weekly lending in India follows the market calendar: collections happen where the borrowers earn, on the day they earn. Vasool's day-of-week routes mean your Thursday market line and your Sunday residential line are separate lists, separate totals, separate day books — even when the same agent runs both.",
        <>
          And when a week slips — a festival, a closed market — rescheduling is
          a controlled edit with an audit trail, not a scratched-out entry in a
          register. See all supported{" "}
          <Link to="/loan-types" className="text-secondary hover:underline">
            loan types
          </Link>
          .
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What a weekly collection app must get right",
    sub: "Check any weekly finance software against this list:",
    items: [
      "Weekly schedules with configurable term length and collection day",
      "Borrowers grouped by day-of-week, not one flat list",
      "Missed-week flags that surface immediately, not at line closure",
      "Payment history visible to the agent before every knock",
      "Voice entry fast enough for market-day queues",
      "Product-backed weekly loans if you sell on installments",
      "Week-over-week line health reports",
      "Offline support for market areas with weak network",
    ],
  },
  faqs: [
    {
      q: "What is a weekly collection app?",
      a: "A weekly collection app is software for finance businesses that collect from borrowers once a week — 10 or 12-week lines, market-day collections, and weekly installment sales. Vasool generates weekly schedules, organizes borrowers by collection day, flags missed weeks immediately, and gives agents voice entry for fast rounds.",
    },
    {
      q: "Can I set different collection days for different borrowers?",
      a: "Yes. Each loan has its own collection day, and agents see a per-day list: Monday's borrowers on Monday, Thursday's market line on Thursday. The same agent can run multiple day-lines without mixing them up.",
    },
    {
      q: "How does Vasool handle a missed weekly payment?",
      a: "The miss is flagged on the dashboard the same day, the borrower stays on the follow-up list, and the agent sees the missed weeks and updated balance at the next visit. Nothing waits for a month-end register reconciliation.",
    },
    {
      q: "Does it support weekly installment sales of products?",
      a: "Yes. Vasool's product-backed weekly loans tie installment sales to your inventory — create the loan from a product in one tap and track stock and collections together.",
    },
    {
      q: "Can I run weekly and daily lines in the same app?",
      a: "Yes. Daily, weekly, monthly, semi-monthly, EMI, interest-only, and gold loans all run side by side in one Vasool account, with combined or per-line reporting.",
    },
  ],
  related: [
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Get every week back on schedule",
  ctaSub:
    "Book a free demo with one of your real weekly lines and see missed weeks surface instantly.",
};

const WeeklyCollectionApp = () => <KeywordLanding config={config} />;

export default WeeklyCollectionApp;
