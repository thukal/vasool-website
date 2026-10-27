import { Link } from "react-router-dom";
import {
  PiggyBank,
  Repeat,
  Calculator,
  CalendarClock,
  Receipt,
  Lock,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title: "FD & RD Software - Fixed and Recurring Deposits | Vasool",
    description:
      "Track fixed and recurring deposits beside your loan book: maturity computed the way you quote it, month-by-month RD slots, and part payments on a slot.",
    keywords:
      "fd rd software, fixed deposit software, recurring deposit software, deposit management software india, fd rd management app, finance company deposit software, maturity calculation software, rd collection app",
    canonical: "/fd-rd-software",
  },
  breadcrumbName: "FD & RD Software",
  badge: "Fixed & Recurring Deposits",
  h1: (
    <>
      FD and RD software that quotes{" "}
      <span className="text-gradient">the number you promised</span>
    </>
  ),
  intro:
    "Most finance businesses take money in as well as lending it out. A fixed deposit is a lump sum you hold until maturity; a recurring deposit is a monthly amount collected like any other round. Vasool tracks both beside the loan book — and computes maturity the way you quote it at the counter.",
  features: [
    {
      icon: PiggyBank,
      title: "Fixed deposits",
      desc: "A one-time deposit, a tenure and a rate. Maturity is computed on enrolment and the subscription carries it through to payout.",
    },
    {
      icon: Repeat,
      title: "Recurring deposits",
      desc: "A monthly amount over a fixed tenure, with every instalment slot created up front so the schedule exists from day one.",
    },
    {
      icon: Calculator,
      title: "Maturity you can override",
      desc: "The computed figure is a starting point. If you already quoted a customer a different number, type it — the subscription keeps yours.",
    },
    {
      icon: CalendarClock,
      title: "Part payments on a slot",
      desc: "An RD instalment can be collected in pieces. Each payment is its own record with method, reference and who took it; the slot carries the running total.",
    },
    {
      icon: Receipt,
      title: "Maturity, payout and cancellation",
      desc: "A subscription runs active, matures, then pays out with the amount and notes recorded. Cancel early and the reason and refund are stored.",
    },
    {
      icon: Lock,
      title: "Separate from the loan book",
      desc: "Deposits have their own tables, routes and permission resource, so money you hold is never mixed into money you lent.",
    },
  ],
  featuresHeading: "Deposits are not lending in reverse",
  featuresSub:
    "The money moves the other way, the obligation is yours, and the number everyone remembers is the maturity figure.",
  steps: [
    {
      title: "Enrol the customer",
      desc: "Pick FD or RD, enter the amount, tenure and rate. The maturity figure is calculated as you type, and you can override it.",
    },
    {
      title: "Collect, for an RD",
      desc: "Monthly slots exist from enrolment. Collect in full or in parts, on the collection day you set.",
    },
    {
      title: "Reach maturity",
      desc: "The subscription matures on its date, with what is owed already recorded rather than worked out afterwards.",
    },
    {
      title: "Pay out or cancel",
      desc: "Record the payout amount and notes, or cancel early with the reason and refund kept on the record.",
    },
  ],
  stepsHeading: "How a deposit runs",
  prose: [
    {
      heading: "The maturity figure has to match what you already said",
      paragraphs: [
        "A customer agreeing to a recurring deposit is told one thing: what they get at the end. That number gets quoted across a counter, often written on a card, and remembered precisely. Whatever the software does later, it has to produce that figure.",
        "This is the reason our RD maturity is a straightforward monthly compound — the balance takes the month's deposit and then earns a month's interest, repeated for the tenure. It is not the quarterly-compound formula a large bank uses. That formula is not wrong; it simply produces a different number from the one a finance company has already promised, and a system that disagrees with the owner at the counter will lose that argument every time.",
        "Fixed deposits compound annually over the tenure for the same reason. And because no formula survives contact with every agreement, the computed maturity is overridable — type the figure you quoted and the subscription carries yours, not ours.",
      ],
    },
    {
      heading: "An RD is a collection round with a different sign",
      paragraphs: [
        "Operationally, a recurring deposit behaves like the weekly and monthly lines your team already runs: a fixed amount, a collection day, instalments that are paid, late or missed, and someone who has to go and ask.",
        <>
          So it is built that way. Every instalment slot is created at
          enrolment, a slot can take more than one part payment, and each
          payment records its own method, reference and collector — the same
          shape used on the{" "}
          <Link
            to="/daily-collection-app"
            className="text-secondary hover:underline"
          >
            loan collection side
          </Link>
          . What differs is the direction of the money and who owes whom at the
          end.
        </>,
      ],
    },
    {
      heading: "Held separately, on purpose",
      paragraphs: [
        "Deposits are modelled as their own thing — separate tables, separate routes, separate permission resource — rather than as another loan type with a minus sign.",
        <>
          That separation is what keeps a report honest. Money a customer has
          left with you is a liability you will pay back; money you lent is an
          asset you expect to recover. Summing them produces a number that
          describes nothing. It is the same reasoning behind keeping{" "}
          <Link
            to="/rental-collection-app"
            className="text-secondary hover:underline"
          >
            rental deposits
          </Link>{" "}
          out of the lending totals.
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What deposit software has to get right",
    sub: "Before putting FD or RD subscriptions into any system, check for these:",
    items: [
      "A maturity figure you can override when you have already quoted one",
      "RD instalment slots that exist from enrolment, not created as they are paid",
      "Part payment against a single instalment, each with its own record",
      "Late and missed instalments distinguished from pending ones",
      "Payout recorded with an amount and a note, not just a status flip",
      "Early cancellation with a reason and a refund figure",
      "Deposits kept out of lending totals in every report",
      "Per-product access control, so deposits are not visible to everyone",
    ],
  },
  faqs: [
    {
      q: "What is FD and RD software?",
      a: "Software to track the deposits a finance business takes from customers: a fixed deposit is a lump sum held to a maturity date, and a recurring deposit is a fixed monthly amount collected over a tenure. Vasool records the enrolment, computes maturity, collects RD instalments, and records the payout or an early cancellation.",
    },
    {
      q: "How is the maturity amount calculated?",
      a: "A fixed deposit compounds annually over its tenure. A recurring deposit compounds monthly — each month adds the deposit and then a month's interest on the running balance. Both figures can be overridden at enrolment if you have already quoted the customer a different number.",
    },
    {
      q: "Can an RD instalment be paid in parts?",
      a: "Yes. A single monthly slot can take several payments, each stored with its own amount, date, method, reference and collector, and the slot carries the running total.",
    },
    {
      q: "What happens if a customer wants their money early?",
      a: "The subscription is cancelled with a reason, and the refund amount you actually paid is recorded against it — so an early exit leaves a record rather than simply disappearing from the active list.",
    },
    {
      q: "Are deposits mixed into my loan reports?",
      a: "No. Deposits live in their own tables with their own routes and permission resource. Money you are holding and money you have lent are different obligations and are kept apart.",
    },
    {
      q: "Do I have to enable deposits?",
      a: "No — FD and RD are off by default and switched on per business. A lender who does not take deposits never sees the screens.",
    },
  ],
  related: [
    { label: "Chit Fund & Lending App", to: "/chit-fund-and-lending-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Features", to: "/features" },
    { label: "Solutions", to: "/solutions" },
    { label: "Pricing", to: "/pricing" },
  ],
  ctaHeading: "Run deposits beside your loan book",
  ctaSub:
    "Book a free demo — bring one real FD and one RD and we'll set them up with your own maturity figures.",
};

const FdRdSoftware = () => <KeywordLanding config={config} />;

export default FdRdSoftware;
