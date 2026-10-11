import { Link } from "react-router-dom";
import {
  Gem,
  Scale,
  BookLock,
  ArrowUpCircle,
  PackageCheck,
  Camera,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title: "Gold Loan Software - Pledge & Ledger Management | Vasool",
    description:
      "Vasool is gold loan software for pawn brokers and finance companies — item-wise pledge register with weight and purity, LTV limits, an append-only interest ledger, top-ups, and a two-step settle-then-release. Free demo.",
    keywords:
      "gold loan software, gold loan management software, pawn broker software, gold loan app india, pledge management software, gold loan accounting software, jewel loan software, gold loan ledger",
    canonical: "/gold-loan-software",
  },
  breadcrumbName: "Gold Loan Software",
  badge: "Gold Loan Software",
  h1: (
    <>
      Gold loan software with a{" "}
      <span className="text-gradient">ledger you can prove</span>
    </>
  ),
  intro:
    "A gold loan is two obligations at once: the money you are owed, and the jewellery you are holding. Vasool tracks both — every pledged item by weight and purity, and every rupee of interest on an append-only ledger that the balance is rebuilt from.",
  features: [
    {
      icon: Gem,
      title: "Item-wise pledge register",
      desc: "Each piece recorded separately: item type, gross weight, net weight, purity in karat, and its own valuation — not one lump figure for the packet.",
    },
    {
      icon: Scale,
      title: "LTV and purity limits you set",
      desc: "Default, minimum and maximum loan-to-value, accepted karats, a minimum purity floor and a rate-policy buffer, configured once for the business.",
    },
    {
      icon: BookLock,
      title: "An append-only interest ledger",
      desc: "Disbursement, accrual, penalty, payment, adjustment and settlement are entries, never edits. Balances are recomputed from the ledger on every post.",
    },
    {
      icon: ArrowUpCircle,
      title: "Top-ups on an existing pledge",
      desc: "Lend more against gold you are already holding, as a ledger entry on the same loan rather than a second loan against the same packet.",
    },
    {
      icon: PackageCheck,
      title: "Settle and release are two steps",
      desc: "Settling clears the money. Releasing hands back the gold, and only runs once the balance is actually zero — so the jewellery cannot leave on a rounding error.",
    },
    {
      icon: Camera,
      title: "Photo proof per item",
      desc: "Pledge photos are attached to the item they belong to, so what came in and what goes back out are the same thing.",
    },
  ],
  featuresHeading: "Built for holding someone else's gold",
  featuresSub:
    "The money side is ordinary lending. The custody side is what gold loan software has to get right.",
  steps: [
    {
      title: "Weigh and record the pledge",
      desc: "Enter each item with gross and net weight, purity and valuation. Photograph it against the item.",
    },
    {
      title: "Disburse within your LTV",
      desc: "The loan is checked against the loan-to-value and purity rules configured for your business.",
    },
    {
      title: "Collect and accrue",
      desc: "Interest accrues by completed calendar month and payments post to the ledger. Reminders go out on WhatsApp.",
    },
    {
      title: "Settle, then release",
      desc: "Clear the balance, then release the items — recorded as who received the gold and when.",
    },
  ],
  stepsHeading: "A gold loan, start to finish",
  prose: [
    {
      heading: "Why the ledger matters more here than anywhere else",
      paragraphs: [
        "In most lending, a disputed balance is an argument about money. In a gold loan it is an argument about a customer's jewellery — often inherited, often the reason they came to you rather than a bank. The record has to withstand that conversation.",
        "So the gold loan book is not a running total that gets edited. Every movement is a signed entry on an append-only ledger — disbursement, interest accrual, penalty, payment, adjustment, settlement — and the outstanding balance is rebuilt from those entries rather than kept alongside them. Accrual runs on whole completed months and is written so the same month can never be charged twice.",
        "There is also an owner-only reconciliation check that rebuilds every balance from the ledger and flags any drift down to the paisa. If the cached figure and the entries ever disagree, you find out from a report rather than from a customer at the counter.",
      ],
    },
    {
      heading: "Month anniversaries, and the 30th of January problem",
      paragraphs: [
        "Interest on a gold loan runs by month anniversary, and calendar months are not equal. A loan taken on the 30th of January has no 30th of February to land on. Add one month naively and it overflows to the 2nd of March — and every subsequent anniversary drifts with it.",
        "Vasool clamps instead: that loan's next anniversary is the 28th of February, or the 29th in a leap year. Days 1 to 28 exist in every month, so for most loans nothing changes — but the ones that would have drifted, don't.",
      ],
    },
    {
      heading: "When the gold has to be sold",
      paragraphs: [
        "Default on a gold loan ends somewhere a daily line never does: with the item leaving your custody for good. That is a lifecycle, not a status change, and it is recorded as one.",
        "Gold moved to sale sits in the owner's custody as its own record while the linked loan is left untouched. Only when the sale is actually completed is the loan recovered and closed. Surplus over what was owed can be returned to the customer in full, or net of a percentage or flat deduction you configure — and if the loan instead reaches a normal end by payment or foreclosure, the pending sale is cancelled with the reason recorded.",
        <>
          As with the rest of the platform, high-trust actions sit behind the{" "}
          <Link
            to="/voice-approval-workflow"
            className="text-secondary hover:underline"
          >
            approval workflow
          </Link>{" "}
          and land in the audit trail described on the{" "}
          <Link to="/security" className="text-secondary hover:underline">
            security page
          </Link>
          .
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What to check in gold loan software",
    sub: "Before you move a pledge book onto any system, look for these:",
    items: [
      "Each pledged item recorded separately with gross weight, net weight and purity",
      "Photo proof attached per item, not per loan",
      "Loan-to-value and accepted-purity rules enforced at disbursal",
      "An append-only ledger rather than an editable running balance",
      "Interest accrual that cannot double-charge the same month",
      "Month anniversaries that don't drift from a 29th, 30th or 31st start",
      "Top-up against an existing pledge without opening a second loan",
      "Release gated on a zero balance, and recorded with who collected",
      "A reconciliation report that rebuilds balances from the ledger",
    ],
  },
  faqs: [
    {
      q: "What is gold loan software?",
      a: "Gold loan software manages lending against pledged jewellery — the pledge register, the valuation and loan-to-value rules, interest accrual, and the release of items when the loan ends. Vasool records each item by weight and purity with its own photo, runs the money side on an append-only ledger, and keeps settlement and release as two separate steps.",
    },
    {
      q: "Can it be used by a pawn broker?",
      a: "Yes. The pledge register, per-item photo proof, LTV and purity limits, and the settle-then-release flow are the core of pawn broking against gold. Gold can also be moved into a sale when a loan is not recovered.",
    },
    {
      q: "How is interest calculated?",
      a: "Interest accrues by completed calendar month at the rate on the loan, posted to the ledger as its own entry. Accrual is idempotent, so a month cannot be charged twice, and month anniversaries are clamped so a loan starting on the 30th or 31st does not drift into the following month.",
    },
    {
      q: "Can a customer borrow more against gold already pledged?",
      a: "Yes — a top-up posts to the same loan's ledger rather than creating a second loan against the same packet, so one pledge has one balance.",
    },
    {
      q: "What stops gold being released by mistake?",
      a: "Settling and releasing are deliberately separate. Settling clears the money and leaves the items pledged; release requires the balance to be effectively zero before items are marked released, and records who the gold was handed to and when.",
    },
    {
      q: "What happens if the balance in the app looks wrong?",
      a: "There is an owner-only reconciliation report that rebuilds every loan's balance from its ledger entries and flags any difference of a paisa or more. Because the ledger is append-only, the entries are the source of truth and the displayed balance is derived from them.",
    },
  ],
  related: [
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Loan Types", to: "/loan-types" },
    { label: "Monthly Finance App", to: "/monthly-finance-app" },
    { label: "Kandhu Vatti App", to: "/kandhu-vatti-app" },
    { label: "Security", to: "/security" },
    { label: "Pricing", to: "/pricing" },
  ],
  ctaHeading: "Put your pledge book on Vasool",
  ctaSub:
    "Book a free demo — bring a few real pledges and we'll set them up with your LTV and purity rules.",
};

const GoldLoanSoftware = () => <KeywordLanding config={config} />;

export default GoldLoanSoftware;
