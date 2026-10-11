import { Link } from "react-router-dom";
import {
  Bike,
  Boxes,
  CalendarClock,
  MessageSquare,
  Upload,
  RotateCcw,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title: "Rental Collection App - Rent Collection Software | Vasool",
    description:
      "Vasool is a rental collection app for cycle shops, cart owners and equipment renters — track who has which item, collect weekly or monthly rent, send due reminders, and settle the deposit on return. Free demo.",
    keywords:
      "rental collection app, rent collection app, rent collection software, rental management app india, cycle rental shop software, cart rental app, equipment rental software, weekly rent collection app, rental agreement tracking",
    canonical: "/rental-collection-app",
  },
  breadcrumbName: "Rental Collection App",
  badge: "Rental Collection App",
  h1: (
    <>
      Rental collection app for{" "}
      <span className="text-gradient">cycles, carts and equipment</span>
    </>
  ),
  intro:
    "Renting out cycles, push carts or tools? You never lent anyone money, so loan software gets you wrong from the first column. Vasool tracks the item, the deposit, and the rent that falls due every week or month — and tells you what is still owed on each one.",
  features: [
    {
      icon: Boxes,
      title: "Know what's still on the shelf",
      desc: "Register each item with how many units you own. Rented units count against the total, so available stock is a live number, not a subtraction you do in your head.",
    },
    {
      icon: Bike,
      title: "One agreement per item, per customer",
      desc: "Who took Cart #11, what deposit they paid, their rent, their collection day, and when the next one falls due.",
    },
    {
      icon: CalendarClock,
      title: "Weekly or monthly rent",
      desc: "Pick the cycle that matches your trade, set the collection day, and choose whether the first rent lands this period or the next.",
    },
    {
      icon: MessageSquare,
      title: "Reminders built for rent",
      desc: "Separate WhatsApp messages for due-today and overdue, with per-agreement patience — wait a set number of missed periods, then a set number of days.",
    },
    {
      icon: Upload,
      title: "Bring the notebook in",
      desc: "Import existing agreements from a spreadsheet. One row carries the item, the customer, the agreement and up to twelve past payments.",
    },
    {
      icon: RotateCcw,
      title: "Settle up on return",
      desc: "Deduct unpaid rent from the deposit, record what you refund and how, and keep the closing figures on the agreement.",
    },
  ],
  featuresHeading: "Built around the item, not a loan balance",
  featuresSub:
    "Rent repeats and nothing reduces. The software should not be counting down to zero.",
  steps: [
    {
      title: "Register the item",
      desc: "Cart #11, Cycle 7, a mixer — with your usual deposit, your usual rent, and how many units you own.",
    },
    {
      title: "Hand it over",
      desc: "Create the agreement against a customer: deposit taken, rent agreed, collection day set.",
    },
    {
      title: "Collect each period",
      desc: "Due-today rentals appear on the same Today list your team already works from. Payments land oldest period first.",
    },
    {
      title: "Take it back",
      desc: "Close the agreement, deduct any unpaid rent from the deposit, and record the refund.",
    },
  ],
  stepsHeading: "How a rental runs on Vasool",
  prose: [
    {
      heading: "Renting is not lending, and the numbers prove it",
      paragraphs: [
        "Hand most collection software a rental business and the first column you see is Given, or Disbursed — and it is empty, because you never gave anyone money. You gave them a cycle. The money moved the other way: the customer paid you a deposit.",
        "Two more things differ. Rent repeats without reducing — there is no outstanding balance counting down, just the same amount due again next week until the item comes back. And the item itself is what you are really tracking, because how many units are free decides whether you can say yes to the next person who walks in.",
        <>
          Vasool keeps rental figures out of the loan totals rather than summing
          them together, and the outstanding report drops the Given block
          entirely on a rental row, showing the deposit under its own label
          instead. The reasoning is written up in more detail in{" "}
          <Link
            to="/blog/rent-collection-for-cycle-and-cart-rental-shops"
            className="text-secondary hover:underline"
          >
            rent collection for cycle and cart rental shops
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "If renting is the whole business",
      paragraphs: [
        "A cycle shop should not have to read the word loan all day. When a business has rentals switched on and no lending product at all, Vasool swaps the loan-centric labels for rental wording, drops Total Disbursed from the dashboard, and shows live rental totals in its place.",
        <>
          Businesses that do both — a lender who also rents out a few carts —
          keep the standard lending screens unchanged, so neither owner ends up
          reading someone else's vocabulary. The same{" "}
          <Link to="/staff-tools" className="text-secondary hover:underline">
            staff tools
          </Link>{" "}
          apply either way: the cash your collector takes is the cash that has
          to reach you.
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What rental collection software has to get right",
    sub: "Before you move your rental book onto any app, check for these:",
    items: [
      "Items tracked by unit, with available stock kept current",
      "A deposit field that is not pretending to be a principal",
      "Weekly and monthly rent cycles with a chosen collection day",
      "Control over whether the first rent falls this period or the next",
      "Unpaid rent worked out from the schedule, not a stored total",
      "Overpayment held as advance instead of silently clearing future periods",
      "Separate reminder wording for due-today and overdue",
      "Deposit settlement and refund recorded at close",
      "Rental figures kept out of lending totals in reports",
    ],
  },
  faqs: [
    {
      q: "What is a rental collection app?",
      a: "A rental collection app tracks items you rent out and the rent due on each one. Vasool registers each item with its unit count, deposit and standard rent, creates an agreement when a customer takes it, shows due-today rentals alongside the rest of the day's collections, and settles the deposit against unpaid rent when the item comes back.",
    },
    {
      q: "Can I use it for a cycle rental shop?",
      a: "Yes. Register your cycles as items with the number of units you own, create an agreement each time one goes out, and collect rent weekly or monthly. Available stock updates as cycles go out and come back, so you always know how many are free.",
    },
    {
      q: "Does it handle cart rental to vendors?",
      a: "Yes — push carts rented to vegetable and food vendors are a common use. Items can be numbered (Cart #11), agreements carry the deposit and weekly rent, and the import format is built around a cart number per row.",
    },
    {
      q: "Can I collect rent daily?",
      a: "Rent cycles are weekly or monthly. If you also run daily lending alongside the rental book, that runs on the daily loan side of the same account.",
    },
    {
      q: "What happens to the deposit when the item comes back?",
      a: "At close you deduct any unpaid rent from the deposit — it is counted as rent collected, not written off — and record what you actually refund, by which method, on what date. A refund of zero is a valid outcome and is stored as one, so a forfeited deposit is on the record rather than implied.",
    },
    {
      q: "I already have a notebook of agreements. Can I bring it in?",
      a: "Yes. Agreements import from a spreadsheet, one row per agreement — item number, customer, deposit, rent, frequency, collection day, and up to twelve past payments on the same row. It is the same import flow used for daily and weekly loans.",
    },
  ],
  related: [
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Weekly Collection App", to: "/weekly-collection-app" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Staff Tools", to: "/staff-tools" },
    { label: "Pricing", to: "/pricing" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Put your rental book on Vasool",
  ctaSub:
    "Book a free demo — bring a handful of real agreements and we'll set them up with you.",
};

const RentalCollectionApp = () => <KeywordLanding config={config} />;

export default RentalCollectionApp;
