import { Link } from "react-router-dom";
import {
  GitBranch,
  Users,
  BookOpen,
  MapPin,
  ArrowLeftRight,
  ShieldCheck,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "Line Management App for Finance Lines | Vasool",
    description:
      "Vasool is a line management app for finance lines — run daily, weekly & monthly lines with line-wise day books, agents per line, line transfers, and line P&L. The finance line app for line vasool businesses. Free demo.",
    keywords:
      "line management app, finance line app, line vasool app, line finance software, daily line app, weekly line app, line collection app, finance line management software, line wise collection app, line business app india",
    canonical: "/line-management-app",
  },
  breadcrumbName: "Line Management App",
  badge: "Line Management App",
  h1: (
    <>
      The line management app for{" "}
      <span className="text-gradient">finance lines</span>
    </>
  ),
  intro:
    "In line finance, the line is the business: a set of borrowers, an agent who walks it, a day book that must balance every evening. Vasool treats lines as first-class — each with its own borrowers, schedule, agent, day book, and P&L.",
  features: [
    {
      icon: GitBranch,
      title: "Lines as the unit of business",
      desc: "Create daily, weekly, or monthly lines. Every borrower, loan, and collection belongs to a line — totals and reports follow.",
    },
    {
      icon: Users,
      title: "Agents per line",
      desc: "Assign each line to an agent with role-based permissions. An agent sees their lines and nothing else.",
    },
    {
      icon: BookOpen,
      title: "Line-wise day book",
      desc: "Each line closes its own day book: collected, shortfall, expenses, and cash to deposit — per line, per day.",
    },
    {
      icon: MapPin,
      title: "Line routes on GPS",
      desc: "The line's walking order becomes a GPS route. New agents learn a line in days instead of months.",
    },
    {
      icon: ArrowLeftRight,
      title: "Line transfers",
      desc: "Agent leaving? Transfer the whole line — borrowers, balances, history — to another agent in one controlled action.",
    },
    {
      icon: ShieldCheck,
      title: "Line-level accountability",
      desc: "Cash advances, expenses, and collections reconcile per line, so a leak in one line can't hide in another's totals.",
    },
  ],
  featuresHeading: "Run every line like its own business",
  featuresSub:
    "Because that's what a finance line is — a small business with its own book, agent, and profit.",
  steps: [
    {
      title: "Create the line",
      desc: "Name it, set the cycle (daily, weekly, monthly), and assign the agent who walks it.",
    },
    {
      title: "Fill it with borrowers",
      desc: "Add or import borrowers with KYC and photos. New loans on the line inherit its schedule.",
    },
    {
      title: "Walk it daily",
      desc: "The agent follows the line's route, collecting by voice or tap, with the office watching live.",
    },
    {
      title: "Balance the line",
      desc: "The line's day book closes each evening; line P&L shows which lines earn and which bleed.",
    },
  ],
  stepsHeading: "Line management on Vasool",
  prose: [
    {
      heading: "Why line finance needs more than a customer list",
      paragraphs: [
        "Most loan apps organize by customer. Line businesses don't work that way — you think in lines: the Gandhi Market daily line, the Tuesday weekly line, the old monthly line that needs pruning. Each has its own health, its own agent, and its own risk. Software that flattens everything into one customer list makes the most important questions impossible to answer: which line is profitable? Which agent's line is slipping? Where do I expand?",
        "Vasool keeps the line structure. Collections roll up by line, day books close by line, and P&L reads by line — so you manage the business the way you actually think about it.",
        <>
          Line vasool businesses running multiple cycles can mix{" "}
          <Link
            to="/daily-collection-app"
            className="text-secondary hover:underline"
          >
            daily
          </Link>
          ,{" "}
          <Link
            to="/weekly-collection-app"
            className="text-secondary hover:underline"
          >
            weekly
          </Link>
          , and{" "}
          <Link
            to="/monthly-finance-app"
            className="text-secondary hover:underline"
          >
            monthly
          </Link>{" "}
          lines in the same account.
        </>,
      ],
    },
    {
      heading: "The agent problem, solved at the line level",
      paragraphs: [
        "Every line business owner knows the two hard moments: when an agent leaves, and when you suspect a line is leaking. On paper, both are crises — the line's knowledge lives in the agent's head and the agent's notebook. On Vasool, the line is the record: every borrower, balance, route stop, and collection is in the system, so a line transfer is an afternoon's work and a leak shows up in the line's reconciliation the same week.",
        <>
          Pair this with{" "}
          <Link to="/staff-tools" className="text-secondary hover:underline">
            live GPS staff tracking
          </Link>{" "}
          and role-based permissions, and the line stays the company's asset —
          not the agent's.
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What a finance line app must do",
    sub: "If you run lines, demand all of this from your software:",
    items: [
      "Lines as a first-class structure — not just customer tags",
      "Daily, weekly, and monthly line cycles in one account",
      "One agent per line with permissions scoped to their lines",
      "Line-wise day book that balances every evening",
      "Line P&L so you know which lines earn",
      "Full line transfer when agents change",
      "GPS routes that preserve the line's walking order",
      "Line-level cash reconciliation to catch leaks early",
    ],
  },
  faqs: [
    {
      q: "What is a line management app?",
      a: "A line management app is software for line finance businesses — lenders who organize borrowers into lines walked by an agent on a daily, weekly, or monthly cycle. Vasool manages each line's borrowers, schedule, agent, route, day book, and P&L as a unit, which is how line vasool businesses actually operate.",
    },
    {
      q: "Can one agent handle multiple lines?",
      a: "Yes. An agent can be assigned several lines — say a morning daily line and a Thursday weekly line — and sees each one separately with its own list, route, and day book.",
    },
    {
      q: "What happens to a line when an agent leaves?",
      a: "You transfer the line. All borrowers, balances, history, and the route move to the new agent in one controlled action with an audit trail. The new agent walks the line with full knowledge from day one.",
    },
    {
      q: "Can I see profit and loss per line?",
      a: "Yes. Collections, disbursals, expenses, and shortfalls roll up by line, so line-wise P&L shows exactly which lines are earning and which need attention or pruning.",
    },
    {
      q: "Does it work for line vasool with daily collections?",
      a: "Yes. Daily line vasool is the core use case — line-wise daily schedules, voice entry at the doorstep, GPS routes in the line's walking order, and a day book per line every evening. Weekly and monthly lines run alongside in the same account.",
    },
  ],
  related: [
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Weekly Collection App", to: "/weekly-collection-app" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Put your lines on the map",
  ctaSub:
    "Book a free demo — bring one real line and watch it close its own day book by evening.",
};

const LineManagementApp = () => <KeywordLanding config={config} />;

export default LineManagementApp;
