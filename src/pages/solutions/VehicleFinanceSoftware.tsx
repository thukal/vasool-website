import { Link } from "react-router-dom";
import {
  Car,
  History,
  Banknote,
  Layers,
  ShieldCheck,
  ScrollText,
  FileText,
  Gavel,
  Network,
  Wallet,
  Gauge,
  Database,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { countryFor } from "@/lib/countries";
import {
  reportingFeature,
  voiceApprovalFaqs,
  voiceApprovalFeature,
  voiceApprovalProse,
} from "@/lib/fieldOperations";

const COUNTRY = countryFor("/nbfc-loan-management");

/**
 * The head-term pillar for vehicle finance. Deliberately split from
 * /auto-finance-tracking-app so the two don't compete for the same query:
 *
 *   this page  — "vehicle finance software", "two wheeler finance software":
 *                how a vehicle finance *company* runs, the governance it is
 *                judged on, and the honest limits of the category.
 *   that page  — "best app for auto finance tracking": the narrower
 *                evaluation question, including the borrower-vs-financier
 *                intent split.
 *
 * They cross-link and must not drift into restating each other. Shared copy is
 * pulled from fieldOperations, and each page takes a different helper pair —
 * voiceApproval* here, fieldDay* there — so the overlap stays deliberate.
 */
const config: KeywordLandingConfig = {
  seo: {
    title: "Vehicle Finance Software for Financiers in India | Vasool",
    description:
      "Vehicle finance software for two-wheeler, auto, used car and commercial vehicle books — one vehicle register, EMI schedules, maker-checker approvals, an audit trail, and a repossession register kept out of your collections. Free demo.",
    keywords:
      "vehicle finance software, two wheeler finance software, three wheeler finance software, auto rickshaw finance software, used car finance software, commercial vehicle finance software, vehicle loan management software india, vehicle finance company software, hire purchase software india",
    canonical: "/vehicle-finance-software",
  },
  breadcrumbName: "Vehicle Finance Software",
  badge: "For vehicle finance companies",
  h1: (
    <>
      Vehicle finance software for{" "}
      <span className="text-gradient">two-wheeler, auto and commercial books</span>
    </>
  ),
  intro:
    "One vehicle register, one EMI engine, and the governance layer a finance company gets judged on. Vasool runs a vehicle book the way the business actually works — the asset recorded against the customer rather than buried in a loan note, origination charges separated in your own vocabulary, consequential edits held for approval, and the seizure side of the book kept in its own register instead of flattering your collection totals.",
  features: [
    {
      icon: Car,
      title: "One register, every vehicle type",
      desc: "Two-wheelers, auto-rickshaws, used cars, goods tempos and commercial vehicles all sit in the same vehicle register — registration, make, model, year, chassis and engine numbers, RC photo and insurance expiry. There is no separate module to buy per vehicle type, and a mixed fleet book is the normal case rather than the exception.",
    },
    {
      icon: History,
      title: "The asset outlives the loan",
      desc: "A vehicle record belongs to the customer, not to one loan. When a borrower closes an account and finances again, or a vehicle changes hands, its history follows it rather than starting fresh — so a repeat borrower looks like a repeat borrower instead of a new file.",
    },
    {
      icon: Banknote,
      title: "EMI schedules with real closure handling",
      desc: "Fixed-tenor EMI schedules generated on disbursement, with 15-day and 30-day interval variants for books that don't run on calendar months, and foreclosure and pre-closure handled in the closure flow — where early discounts and late fines are recorded as their own amounts rather than silently adjusting the outstanding.",
    },
    {
      icon: Layers,
      title: "Your vehicle book isn't your only book",
      desc: "Most vehicle financiers also run something else — a daily line, interest-only lending, a gold counter, a chit. All of it runs on the same platform: daily, weekly, monthly, EMI, interest-only, gold, property and product-based loans, plus chit funds and savings schemes, under one set of reports.",
    },
    {
      icon: Gavel,
      title: "A repossession register, not a collection",
      desc: "Seizure and resale live in their own register with their own arithmetic — valuation frozen at seizure, outstanding at that moment, refurbishment cost, sale amount, surplus split, days held and shortfall. The sale never posts as a collection, so a month of heavy seizures never reads as a strong collection month.",
    },
    {
      icon: ShieldCheck,
      title: "Maker-checker on what moves money",
      desc: "Switch approvals on per role and per resource, and a staff create, edit or delete is held as a request until an owner or assigned manager decides. A rewritten loan term or a loan closed for less than the book says waits for a second pair of eyes; routine work stays one-tap.",
    },
    {
      icon: ScrollText,
      title: "An audit trail you can reconstruct from",
      desc: "Every edit, approval and closure is written to an immutable audit log with full entity history — so you can say exactly what changed on a vehicle loan, when, and by whom, whether the question comes from an auditor, a partner or a borrower's lawyer.",
    },
    {
      icon: Network,
      title: "Grows from one yard to several branches",
      desc: "Row-level scoping per resource means a role defaults to seeing its own records and is granted wider visibility only where you tick it. A branch manager can see every customer but only their own loans — your whole book is never exposed on a field device.",
    },
    {
      icon: Wallet,
      title: "Cash reconciled per account",
      desc: "Register your UPI IDs and bank accounts, tag every collection, disbursement and expense to one, and pull a date-ranged cash-flow-by-account report — so a book with cash at the yard and transfers through three accounts still reconciles against statements.",
    },
    {
      icon: Gauge,
      title: "AI-assisted credit appraisal",
      desc: "The loan-eligibility engine returns a risk score from 0 to 100 with an approve, review or reject call and a suggested limit — a consistent documented first pass, which matters when several field staff are sourcing vehicle files at different standards.",
    },
    {
      icon: FileText,
      title: "KYC and documents in one place",
      desc: "Aadhaar, PAN, voter ID, ration card and utility bills stored against the borrower, alongside the RC photo on the vehicle record — so a file is a file rather than a folder in a drawer and a photo on somebody's phone.",
    },
    voiceApprovalFeature(COUNTRY),
    reportingFeature(),
    {
      icon: Database,
      title: "A database that is yours",
      desc: "Each company runs on a dedicated, isolated PostgreSQL database, with the option to self-host on your own infrastructure. For a book holding borrower KYC and asset records, that is a cleaner ownership position than sharing a pooled database with other lenders.",
    },
  ],
  featuresHeading: "What a vehicle finance company needs from software",
  featuresSub:
    "Not a loan ledger with a registration number field bolted on. The asset, the charges, the approvals, the seizures and the reports that tell you which of those made or lost money.",
  steps: [
    {
      title: "Set up the company and your rules",
      desc: "Configure your loan products, tenors and interval variants, and name your own deduction rules — PF, Document, DC, Processing Fee, whatever your office calls them. Those names become the columns in your profit and loss ledger.",
    },
    {
      title: "Build the register as you disburse",
      desc: "Each file creates a borrower with KYC and a vehicle record with registration, chassis, engine, RC photo and insurance expiry. The loan points at the specific vehicle securing it, and several vehicles can sit against one customer.",
    },
    {
      title: "Run the field operation",
      desc: "Officers work assigned routes with GPS, dictate collections and expenses by voice with photo proof, and work offline where the signal fails. Gated changes queue in the approvals inbox instead of applying on the spot.",
    },
    {
      title: "Close the month on real numbers",
      desc: "Day book, officer performance, overdue and DPD ageing, cash flow by account and a date-wise profit and loss ledger — with the repossession register reporting separately on what each seizure actually earned or lost.",
    },
  ],
  stepsHeading: "How a vehicle finance company runs on Vasool",
  prose: [
    {
      heading: "One engine, four quite different vehicle books",
      paragraphs: [
        "\"Vehicle finance\" covers operations that barely resemble each other. A two-wheeler book is high-volume, small-ticket, short-tenor, and lives or dies on field discipline — hundreds of accounts, each too small to chase individually, so the route and the day book are the whole game. An auto-rickshaw or three-wheeler book is tied to a driver's daily earnings, which is why so many financiers collect it on a daily or weekly rhythm rather than a monthly EMI.",
        "A used car book is the opposite shape: fewer files, larger tickets, longer tenors, and a valuation question on every single one — what the asset is worth today matters far more than it does on a new two-wheeler. And a commercial vehicle book carries the borrower's business risk, not just their household's; a goods tempo that stops earning stops paying, and seasonality shows up in your arrears before it shows up in anyone's conversation.",
        <>
          We will be plain about what that means in the software: these are not
          four modules. It is one vehicle register and one EMI engine,
          configured differently — the tenor, the ticket, the collection
          cadence and the charge rules are yours to set per loan product, and{" "}
          <Link to="/loan-types" className="text-secondary hover:underline">
            every repayment cycle Vasool supports
          </Link>{" "}
          is available to a vehicle book, including the daily and weekly ones a
          monthly-EMI system cannot express. What is shared is the part that
          should be shared: the asset record, the approvals, the audit trail and
          the reports.
        </>,
      ],
    },
    {
      heading: "The asset outlives the loan, and your records should too",
      paragraphs: [
        "Most lending software models a loan with some fields attached. Vehicle finance is asset-backed, and the asset has a longer life than any single account against it. The same bike gets financed, closed, sold, and financed again — sometimes by you, to a different borrower, within two years.",
        "So the vehicle is its own record, held against the customer, with the loan pointing at it rather than containing it. One customer can hold several vehicles. History follows the asset when it moves rather than resetting. And the detail that feels like paperwork until the week it matters — chassis and engine numbers, the RC photo, the insurance expiry — sits on that record instead of in a WhatsApp thread.",
        "The practical payoff is in the overdue conversation. Before you can act on a bad account you need to know which asset secures it, what it is likely worth, and whether its insurance is live. Collateral on lapsed cover is worth materially less if it comes back damaged, and an expiry date nothing is tracking is a discount you discover at the worst possible moment.",
      ],
    },
    {
      heading: "The governance a finance company gets judged on",
      paragraphs: [
        "A vehicle financier's risk is rarely the interest rate. It is a loan term rewritten by someone who shouldn't have, an account closed for less than the book says, a seizure that nobody can account for, and no record of who decided any of it. Those are the files an auditor, a lending partner or a disgruntled borrower's lawyer reaches for first.",
        <>
          Vasool's answer is three layers that are all toggles rather than
          tiers. Maker-checker holds consequential creates, edits and deletes as
          requests until an owner or assigned approver decides, per role and per
          resource — it covers customers, loans, chit and savings schemes, gold
          sales, expenses, staff, roles and routes today, though holding an
          individual collection entry is roadmap rather than shipping. An
          immutable audit log records every change with full entity history.
          Row-level scoping keeps each role to the records it should see. The{" "}
          <Link
            to="/voice-approval-workflow"
            className="text-secondary hover:underline"
          >
            voice approval workflow
          </Link>{" "}
          page walks through exactly what is held and what the trail records.
        </>,
        <>
          Because the controls are toggles, the same platform runs a
          single-branch financier with three staff and a multi-branch finance
          company — you switch on what your stage and your licence demand rather
          than migrating. If you are regulated, the{" "}
          <Link
            to="/nbfc-loan-management"
            className="text-secondary hover:underline"
          >
            NBFC loan management
          </Link>{" "}
          page sets out the compliance layer in full, including what we don't
          ship.
        </>,
      ],
    },
    voiceApprovalProse(COUNTRY),
    {
      heading: "What vehicle finance software doesn't do for you",
      paragraphs: [
        "Every vendor in this category lists what it does. Here is the other half, because finding out during onboarding is worse than reading it now.",
        "Vasool does not interact with the RTO. It holds your vehicle and RC details, but it does not file anything, does not manage hypothecation endorsement or NOC issuance on closure, and does not track RC transfer. It does not renew or quote insurance — it stores the expiry date so you can see it coming, and the renewal is your office's job. It carries no valuation feed, so the seizure valuation is the figure you enter, frozen at that moment rather than pulled from a market index. There is no dealer or DSA payout module, no GPS-immobiliser or vehicle-telematics integration, and no credit-bureau reporting or pulls — CIBIL, Equifax, Experian and CRIF reporting, along with NPA classification to RBI norms, are roadmap and built on request, not shipping features.",
        "What ships today is DPD and overdue intensity tracking, which is the raw material those regulatory buckets are built from. And the architecture is the reason these are additions rather than rewrites: your data sits in a database you own and can self-host, and capability is a per-tenant toggle, so the gaps above are things we build with you. We would rather tell you the list than let you assume it.",
      ],
    },
  ],
  checklist: {
    heading: "Choosing vehicle finance software: what to put to a vendor",
    sub: "Beyond the feature list, these are the questions that separate software built for an asset-backed book from a loan ledger with a registration field:",
    items: [
      "Is the vehicle its own record against the customer, or a text field on the loan?",
      "Can one customer hold several vehicles, each with its own loan?",
      "Does a vehicle's history survive closure, resale and refinance?",
      "Can you run daily and weekly vehicle collection, not only monthly EMI?",
      "Are your own charge names the columns in the P&L ledger, or are they someone else's categories?",
      "Does a repossession sale stay out of collections, dashboards and officer performance?",
      "Can the recovery register report a seizure as a loss when it was one?",
      "Can consequential edits be held for approval without slowing down routine entry?",
      "Is there an immutable audit trail with entity history on every change?",
      "Does scoping stop a field device from seeing the whole book?",
      "Will the vehicle book share reports with your daily, gold or chit books?",
      "Do you own the database, with a self-hosting option if you want it?",
      "Will the vendor tell you plainly what it does not do — RTO, NOC, insurance, bureau?",
    ],
  },
  faqs: [
    {
      q: "What is vehicle finance software?",
      a: "Software a financier runs to manage an asset-backed vehicle book: the borrower and their KYC, the vehicle securing each loan with its registration and chassis details, the repayment schedule, field collection, and the reporting that tells you what the book earned. The distinguishing feature against general lending software is that the asset is a first-class record rather than a note on the loan — and that seizure and resale are handled as their own process instead of as payments.",
    },
    {
      q: "Does Vasool work for two-wheeler finance?",
      a: "Yes, and it is the book the field tooling suits best. Two-wheeler lending is high-volume, small-ticket and short-tenor, so the margin sits in collection discipline rather than in any single account. Routes are assigned and tracked with GPS, officers dictate each collection by voice with photo proof, entries post offline and sync, and the day book closes per route — which is what makes end-of-day cash settlement a reconciliation rather than an argument.",
    },
    {
      q: "What about auto-rickshaw or three-wheeler finance on a daily collection?",
      a: "Supported, and this is where monthly-EMI-only systems fall over. A three-wheeler borrower earns daily, so many financiers collect daily or weekly rather than on a calendar EMI. Vasool runs daily, weekly and monthly cycles alongside EMI, interest-only and 15-day and 30-day interval variants, so you set the cadence to how the borrower actually earns instead of forcing a monthly instalment onto a daily income.",
    },
    {
      q: "Can it handle used car and commercial vehicle books?",
      a: "Yes — same vehicle register, same EMI engine, larger tickets and longer tenors. Two honest notes. There is no valuation feed, so any valuation figure (including the one frozen at seizure) is the one your office enters. And commercial vehicle lending carries the borrower's business risk, which shows up as seasonality in your arrears — Vasool gives you DPD and overdue ageing to see it, not a forecast of it.",
    },
    {
      q: "Can I run my vehicle book alongside my daily line or gold counter?",
      a: "Yes, and most of our vehicle financiers do. One platform carries daily, weekly, monthly, EMI, interest-only, gold, property and product-based loans, plus chit funds and savings schemes, with one set of reports over all of it. You are not reconciling a vehicle system against a separate daily-collection system at month-end.",
    },
    {
      q: "Does Vasool handle RTO filing, hypothecation, NOC or insurance renewal?",
      a: "No to all four. Vasool stores your vehicle and RC details and the insurance expiry date so you can act before cover lapses, but it does not file with the RTO, manage hypothecation endorsement or NOC issuance on closure, track RC transfer, or renew or quote insurance. It also carries no credit-bureau reporting or pulls and no NPA classification to RBI norms — both are roadmap and built on request. DPD and overdue tracking ship today.",
    },
    {
      q: "How is this different from your auto finance tracking app page?",
      a: "Same product, two different questions. This page is about running a vehicle finance company — the register, the approvals, the audit trail, the mixed book and the limits of the category. The auto finance tracking app page is for someone comparing apps and deciding what to buy, and it also separates the two groups who search that phrase: financiers tracking a book they lent out, and borrowers wanting to track their own EMIs. Vasool is only for the first group.",
    },
    ...voiceApprovalFaqs(COUNTRY),
  ],
  related: [
    { label: "Auto Finance Tracking App", to: "/auto-finance-tracking-app" },
    { label: "Loan Types", to: "/loan-types" },
    { label: "NBFC Loan Management", to: "/nbfc-loan-management" },
    { label: "Self-Hosted Loan Software", to: "/self-hosted-loan-software" },
    { label: "Features & Reports", to: "/features" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Run your vehicle book on one platform",
  ctaSub:
    "Book a free demo and we will walk you through the vehicle register, the approvals inbox and the recovery register on a sample book — including the seizure that lost money.",
};

const VehicleFinanceSoftware = () => <KeywordLanding config={config} />;

export default VehicleFinanceSoftware;
