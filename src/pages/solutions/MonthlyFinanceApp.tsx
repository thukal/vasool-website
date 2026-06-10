import { Link } from "react-router-dom";
import {
  Wallet,
  Percent,
  CalendarClock,
  Coins,
  FileText,
  BarChart3,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title: "Monthly Finance App - EMI & Monthly Interest Collections | Vasool",
    description:
      "Vasool is a monthly finance app for monthly interest lending, EMI with foreclosure, semi-monthly lines, and salary-day collections. Automatic interest calculation, PDF receipts, overdue tracking. Free demo.",
    keywords:
      "monthly finance app, monthly collection app, monthly loan app, EMI collection app, monthly interest app, interest calculation app, monthly finance software, semi monthly collection app, salary day collection app, monthly vasool app",
    canonical: "/monthly-finance-app",
  },
  breadcrumbName: "Monthly Finance App",
  badge: "Monthly Finance App",
  h1: (
    <>
      Monthly finance app for{" "}
      <span className="text-gradient">EMI & interest collections</span>
    </>
  ),
  intro:
    "Monthly interest books, EMI with foreclosure, semi-monthly lines, salary-day collections — monthly finance is where interest math gets serious. Vasool calculates every rupee of it automatically and tracks each month's due to the day.",
  features: [
    {
      icon: Percent,
      title: "Monthly interest, automated",
      desc: "Interest-only loans where the borrower pays vatti monthly and principal at the end — calculated by the app, not on paper.",
    },
    {
      icon: Wallet,
      title: "EMI with foreclosure",
      desc: "Structured EMIs with tenure controls and proper foreclosure handling when a borrower closes early.",
    },
    {
      icon: CalendarClock,
      title: "Semi-monthly & salary-day",
      desc: "Collections timed to the 1st and 15th, or whatever dates your borrowers get paid — the schedule follows the salary.",
    },
    {
      icon: Coins,
      title: "Gold loans included",
      desc: "Monthly interest on gold loans with live gold-rate fetching — pledge value and interest tracked together.",
    },
    {
      icon: FileText,
      title: "Statements & receipts",
      desc: "Monthly PDF receipts and full account statements a borrower can verify — fewer interest disputes.",
    },
    {
      icon: BarChart3,
      title: "Month-end in minutes",
      desc: "Interest earned, principal outstanding, overdue accounts, and P&L — month-end reporting without a spreadsheet.",
    },
  ],
  featuresHeading: "Built for the monthly book",
  featuresSub:
    "Long terms, larger amounts, compounding stakes — monthly finance rewards precision.",
  steps: [
    {
      title: "Set the terms",
      desc: "Principal, monthly rate or EMI, tenure, and due date — Vasool computes the full repayment picture.",
    },
    {
      title: "Collect on due dates",
      desc: "Agents see the month's due list; borrowers pay cash or UPI and get a PDF receipt instantly.",
    },
    {
      title: "Track every account",
      desc: "Paid, partial, and overdue accounts separate themselves on the dashboard in real time.",
    },
    {
      title: "Close the month",
      desc: "Interest earned, collections vs. due, and overdue aging — the month-end report is already done.",
    },
  ],
  stepsHeading: "A month on Vasool",
  prose: [
    {
      heading: "Why interest math should never live in a notebook",
      paragraphs: [
        "Monthly lending runs on percentages: 2% monthly interest, part-payments that change the principal mid-month, EMIs that split differently between interest and principal every single month. Hand-calculated, these numbers drift — and every drift is either lost income or a borrower dispute.",
        "Vasool computes interest the same way every time, shows the working to both sides, and keeps an audit log of every change. When a borrower questions a balance, you settle it by showing the statement, not by arguing over a register.",
        <>
          See every supported structure — EMI, interest-only, gold, and more —
          on the{" "}
          <Link to="/loan-types" className="text-secondary hover:underline">
            loan types page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Monthly doesn't mean once-a-month attention",
      paragraphs: [
        "The risk in monthly finance is the silence between due dates. An account that misses one month quietly becomes an account that misses three. Vasool's overdue tracking ages every unpaid account from day one past due, so follow-up starts in the first week — not at the next due date.",
        <>
          And if your business also runs{" "}
          <Link
            to="/daily-collection-app"
            className="text-secondary hover:underline"
          >
            daily
          </Link>{" "}
          or{" "}
          <Link
            to="/weekly-collection-app"
            className="text-secondary hover:underline"
          >
            weekly
          </Link>{" "}
          lines alongside the monthly book, all of it lives in one Vasool
          account with one dashboard.
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What a monthly finance app must handle",
    sub: "Test any monthly finance software against these:",
    items: [
      "Interest-only loans with monthly vatti and principal at term end",
      "EMI schedules with correct interest/principal split each month",
      "Foreclosure with accurate early-closure calculation",
      "Semi-monthly and salary-day collection dates",
      "Part-payments that recalculate interest correctly",
      "Gold loan interest with live gold-rate reference",
      "Overdue aging from the first missed day",
      "Borrower-verifiable statements and PDF receipts",
    ],
  },
  faqs: [
    {
      q: "What is a monthly finance app?",
      a: "A monthly finance app is software for lenders who collect monthly — interest-only loans, EMIs, semi-monthly lines, and salary-day collections. Vasool automates the interest math, generates schedules and PDF receipts, and tracks overdue accounts from the first missed day.",
    },
    {
      q: "Does Vasool calculate monthly interest automatically?",
      a: "Yes. Set the principal and monthly rate, and Vasool calculates interest for every period — including recalculation after part-payments. EMI loans get the correct interest/principal split for each month of the tenure.",
    },
    {
      q: "How is EMI foreclosure handled?",
      a: "When a borrower closes early, Vasool computes the foreclosure amount based on the outstanding principal and your tenure rules, records the closure, and issues the final statement — no manual working required.",
    },
    {
      q: "Can collections follow salary dates?",
      a: "Yes. Schedules can be set to any due date pattern, including semi-monthly (1st and 15th) and specific salary days, so agents visit when borrowers actually have money in hand.",
    },
    {
      q: "Does it work for monthly gold loan interest?",
      a: "Yes. Gold loans in Vasool track the pledge with live gold-rate fetching and collect monthly interest on schedule, with the same receipts, statements, and overdue tracking as every other loan type.",
    },
  ],
  related: [
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Weekly Collection App", to: "/weekly-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Make month-end a non-event",
  ctaSub:
    "Book a free demo with your real interest book and watch the month close itself.",
};

const MonthlyFinanceApp = () => <KeywordLanding config={config} />;

export default MonthlyFinanceApp;
