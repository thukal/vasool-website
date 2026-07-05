import { Link } from "react-router-dom";
import {
  Mic,
  CalendarDays,
  BookOpen,
  Route,
  TrendingUp,
  WifiOff,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "Daily Collection App - Daily Finance Software | Vasool",
    description:
      "Vasool is a daily collection app for daily finance businesses — 100-day lines, daily interest, route-wise day book, voice entry, and pigmy-style collections. Daily finance collection software that works offline. Free demo.",
    keywords:
      "daily collection app, daily finance collection software, daily finance app, daily collection software, daily loan collection app, pigmy collection app, daily line collection app, 100 day loan app, daily vasool app, daily finance software india",
    canonical: "/daily-collection-app",
  },
  breadcrumbName: "Daily Collection App",
  badge: "Daily Collection App",
  h1: (
    <>
      Daily collection app for{" "}
      <span className="text-gradient">daily finance businesses</span>
    </>
  ),
  intro:
    "Running 100-day lines, daily interest, or pigmy-style collections? Vasool is daily finance collection software built around the daily rhythm: morning routes, doorstep entries by voice, and a day book that closes itself every evening.",
  features: [
    {
      icon: CalendarDays,
      title: "Daily loan schedules",
      desc: "100-day, 120-day, or any daily term — the full installment schedule is generated the moment you disburse.",
    },
    {
      icon: Mic,
      title: "Voice entry at the doorstep",
      desc: "Your agent collects from 80 borrowers a day. Speaking each entry instead of typing saves hours on every route.",
    },
    {
      icon: Route,
      title: "Route-wise collections",
      desc: "Borrowers organized by route and street order, with GPS navigation from one doorstep to the next.",
    },
    {
      icon: BookOpen,
      title: "Day book per route",
      desc: "Every evening, each route's collections, shortfalls, and pending borrowers are totaled automatically.",
    },
    {
      icon: TrendingUp,
      title: "Daily interest & vatti",
      desc: "Daily interest calculation handled automatically — no mental math, no end-of-line disputes.",
    },
    {
      icon: WifiOff,
      title: "Offline on every street",
      desc: "Network drops mid-route? Entries keep recording offline and sync when coverage returns.",
    },
  ],
  featuresHeading: "Made for the daily collection rhythm",
  featuresSub:
    "Daily finance lives and dies by routine. Vasool keeps every day on schedule.",
  steps: [
    {
      title: "Open the day",
      desc: "Each agent sees today's route: who pays, how much, and in what street order.",
    },
    {
      title: "Collect door to door",
      desc: "Voice or one-tap entry for each borrower — cash or UPI — with photo proof if you want it.",
    },
    {
      title: "Watch it live",
      desc: "The office dashboard shows collected-today climbing route by route, in real time.",
    },
    {
      title: "Close the day book",
      desc: "Evening totals, shortfalls, and pending lists are ready without anyone adding up a notebook.",
    },
  ],
  stepsHeading: "A collection day with Vasool",
  prose: [
    {
      heading: "Why daily finance needs its own collection software",
      paragraphs: [
        "Daily collection is the most demanding lending model there is: hundreds of small entries, every single day, often in cash, often with the same agent covering multiple streets. A missed entry or a math slip compounds daily. Generic accounting tools and paper notebooks can't keep up — that's why daily finance collection software exists as a category.",
        "Vasool was built daily-first. Schedules, routes, agent day books, and interest math all assume the daily cycle, and weekly or monthly lines ride on the same engine when you need them.",
        <>
          If you're also running weekly or monthly lines, see the{" "}
          <Link
            to="/weekly-collection-app"
            className="text-secondary hover:underline"
          >
            weekly collection app
          </Link>{" "}
          and{" "}
          <Link
            to="/monthly-finance-app"
            className="text-secondary hover:underline"
          >
            monthly finance app
          </Link>{" "}
          pages — one Vasool account covers all three.
        </>,
      ],
    },
    {
      heading: "From pigmy collections to 100-day lines",
      paragraphs: [
        "Whether you call it daily finance, daily line, pigmy collection, or daily vasool, the operation is the same: small amounts, high frequency, and trust built on showing up every day. Vasool handles the variations — fixed daily installments, daily interest with principal at the end, or product-backed daily loans tied to your inventory.",
        <>
          Every collection generates a PDF receipt your borrower can trust, and
          the{" "}
          <Link to="/staff-tools" className="text-secondary hover:underline">
            staff tools
          </Link>{" "}
          make sure the cash your agent collects is the cash that reaches the
          office.
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What to look for in daily finance collection software",
    sub: "Before you move your daily book to any app, check for these:",
    items: [
      "Daily schedules generated automatically at disbursal",
      "Route and street-order organization for agents",
      "Voice or one-tap entry fast enough for 80+ collections a day",
      "Automatic day book with route-wise totals every evening",
      "Daily interest calculated by the software, not the agent",
      "Offline mode for streets with weak network",
      "Real-time office dashboard of collected vs. pending",
      "PDF receipts for every doorstep payment",
    ],
  },
  faqs: [
    {
      q: "What is a daily collection app?",
      a: "A daily collection app is software for finance businesses that collect from borrowers every day — 100-day lines, daily interest, and pigmy-style collections. Vasool generates daily schedules at disbursal, organizes borrowers into routes, lets agents record entries by voice, and closes a route-wise day book automatically every evening.",
    },
    {
      q: "What is the best daily finance collection software?",
      a: "The best daily finance collection software handles the full daily cycle: schedules, routes, doorstep entry, day book, and interest math. Vasool covers all of it, adds voice entry in 6 languages and offline support, and runs each business on its own dedicated database — from ₹699/month with every feature included.",
    },
    {
      q: "Can it handle 100-day daily loans?",
      a: "Yes. 100-day, 120-day, or any custom daily term — Vasool generates the full installment schedule when you disburse, tracks every payment against it, and shows the outstanding balance and days remaining for each borrower.",
    },
    {
      q: "Does it support pigmy collection?",
      a: "Yes. Pigmy-style daily collection — small fixed amounts collected door to door — maps directly onto Vasool's daily loan type, with routes, voice entry, day book totals, and PDF receipts for every deposit.",
    },
    {
      q: "How do my agents manage so many entries per day?",
      a: 'Voice entry. An agent says "Lakshmi 100 cash" and moves to the next door — Vasool matches the borrower and records the payment. Combined with street-ordered routes, agents finish daily rounds significantly faster than with a notebook.',
    },
  ],
  related: [
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Weekly Collection App", to: "/weekly-collection-app" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Voice Entry Collection App", to: "/voice-entry-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Run tomorrow's collection day on Vasool",
  ctaSub:
    "Book a free demo — we'll set up one of your real routes and you can watch the day book close itself.",
};

const DailyCollectionApp = () => <KeywordLanding config={config} />;

export default DailyCollectionApp;
