import {
  Calculator,
  Users,
  WifiOff,
  Wallet,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE, relatedFor } from "@/lib/countries";

const CANONICAL = "/loan-management-software-indonesia";

const config: KeywordLandingConfig = {
  seo: {
    title: "Aplikasi Koperasi Simpan Pinjam & Loan Software Indonesia | Vasool",
    description:
      "Vasool is an aplikasi koperasi simpan pinjam and loan management system for koperasi, BPR and licensed microfinance institutions in Indonesia — member-based lending, field-officer accountability, IDR amounts that stay exactly as entered, Asia/Jakarta business dates and a full audit trail. Free demo.",
    keywords:
      "aplikasi koperasi simpan pinjam, aplikasi koperasi simpan pinjam android, aplikasi koperasi simpan pinjam syariah, contoh aplikasi koperasi simpan pinjam, jual aplikasi koperasi simpan pinjam, koperasi simpan pinjam software, software pinjaman koperasi, loan management software indonesia, bpr loan management software, microfinance software indonesia, lembaga keuangan mikro software, field officer collection app indonesia, ojk microfinance software",
    canonical: CANONICAL,
  },
  breadcrumbName: "Indonesia",
  badge: "Built for koperasi and microfinance",
  h1: (
    <>
      Loan management software for koperasi and microfinance in{" "}
      <span className="text-gradient">Indonesia</span>
    </>
  ),
  intro:
    "Indonesia's microbusiness credit runs through cooperatives, rural banks, licensed microfinance institutions and group-based programmes — each with its own institutional rules, and each collecting daily, weekly or monthly from traders and household enterprises. Vasool is an aplikasi koperasi simpan pinjam built for real field operations rather than a spreadsheet template: member and borrower records, field-officer accountability, and rupiah amounts that survive entry exactly as typed.",
  featuresHeading: "What matters when the numbers are large and the routes are long",
  featuresSub:
    "IDR values run to many digits, so an input that quietly reformats an amount is not a cosmetic bug — it is a corrupted book. Start there, then build the accountability around it.",
  features: [
    {
      icon: Calculator,
      title: "Rupiah amounts stored exactly as entered",
      desc: "Display formatting never alters the stored value. A large IDR figure reads clearly on screen and reconciles to the last digit in the ledger.",
    },
    {
      icon: Users,
      title: "Members, groups and household enterprises",
      desc: "Run member-based cooperative lending and group programmes with each member's own principal, interest and payment history preserved beneath the group.",
    },
    {
      icon: Wallet,
      title: "Field-officer accountability and daily close",
      desc: "Each petugas lapangan has their own expected collection, actual collection, expenses and remittance, closed off daily so a shortfall surfaces the same evening.",
    },
    {
      icon: WifiOff,
      title: "Offline collection across long routes",
      desc: "Entries save on the device and sync when the connection returns — island and rural routes never cost you a day's collection record.",
    },
    {
      icon: Receipt,
      title: "Explicit principal, interest, fees and tenor",
      desc: "Every loan carries its terms in full rather than in a collector's shorthand, and every payment records its status, method and date.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and maker-checker approvals",
      desc: "Every edit, discount, write-off and closure is logged with who did it and when, and staff changes can be held for approval before they take effect.",
    },
  ],
  stepsHeading: "From field officer to reconciled book",
  steps: [
    {
      title: "Set up your company in IDR",
      desc: "Pick Indonesia at setup: rupiah amounts, Asia/Jakarta business dates and local phone formats, on your own isolated database.",
    },
    {
      title: "Register members and groups",
      desc: "Add members, borrowers and any groups that lend together, each with their own terms and documents.",
    },
    {
      title: "Collect with proof",
      desc: "The field officer records amount, payment method and photo proof at the point of collection, and the borrower gets a receipt.",
    },
    {
      title: "Close the day and reconcile",
      desc: "Match declared cash and transfers against expected collection per officer, then post the day and read arrears from the same book.",
    },
  ],
  prose: [
    {
      heading: "Who this is for in Indonesia",
      paragraphs: [
        "Indonesia's microbusiness landscape is unusually diverse. Cooperatives — koperasi simpan pinjam — sit alongside rural banks and Islamic rural banks, licensed microfinance institutions, group-based ultra-micro programmes, commercial banks, finance companies and technology platforms. Collections may be daily, weekly or monthly in any of them, but each channel carries different institutional rules.",
        "OJK's microfinance framework covers licensing, business operations, development, supervision, prudential discipline and consumer protection for microfinance institutions, and OJK regulates other financial-sector providers alongside continuing work on access to finance for MSMEs. Cooperatives sit in their own arrangements again. Vasool runs the operation underneath whichever category you legitimately occupy.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "Why the currency detail is a control, not a preference",
      paragraphs: [
        "When amounts routinely run into millions of rupiah, the gap between what a collector types, what the screen shows and what the database stores is where books go wrong. An input that helpfully reformats, truncates or rounds an entry produces a ledger nobody can reconcile — and the error usually surfaces months later, in a dispute.",
        "So the rule is simple and absolute: display formatting must never change the stored amount. Around that, owners need explicit principal, interest, fees, tenor, payment status and named collector accountability, rather than relying on handwritten shorthand or the presence of a currency symbol on a screen.",
        "In Vasool a line is an operational portfolio — borrowers grouped by route, market, officer or repayment day so field work can be scheduled and a day's cash reconciled. It organises work. It does not classify credit, and it grants no permission to lend.",
      ],
    },
  ],
  checklist: {
    heading: "Before your first disbursement in Indonesia",
    sub: "Work through this with your own counsel. Vasool holds the records; it cannot answer any of these for you.",
    items: [
      "Confirm your legal form and permission — koperasi, BPR or BPRS, licensed microfinance institution, bank or finance company.",
      "Confirm whether you are lending to members only or to the public, and that your documents match.",
      "Confirm permitted pricing and how interest, fees and tenor must be disclosed to the borrower.",
      "Record the original principal separately from interest, fees and penalties, in full rupiah.",
      "Assess repayment capacity from the borrower's real trading cycle before setting a daily schedule.",
      "Confirm your consumer-protection and data obligations for member and borrower information.",
      "Document your recovery conduct rules and keep missed-payment reasons on the record.",
    ],
  },
  faqs: [
    {
      q: "Is the app available in Bahasa Indonesia?",
      a: "Not yet. Indonesian operations run in English today, with Bahasa Indonesia on the roadmap. We would rather state that before you sign than let you discover it during rollout to field officers.",
    },
    {
      q: "Why not just use a free Excel aplikasi koperasi simpan pinjam?",
      a: "A spreadsheet template is free and it works right up to the point where two people edit it, a field officer collects on a phone, or someone asks who changed a balance last March. What it cannot give you is per-officer cash accountability, an audit trail, offline field entry or role-based access to member data. If your koperasi is one person and one book, Excel is genuinely fine — the moment collection leaves the office, it stops being.",
    },
    {
      q: "Can it run a koperasi simpan pinjam?",
      a: "It runs the lending and collection side: member and borrower records, loan terms, disbursements, repayments with method and officer, group lending, arrears, corrections and closures, all audited. Savings-side administration and cooperative governance functions are not part of it.",
    },
    {
      q: "Will large rupiah amounts be stored correctly?",
      a: "Yes — that is treated as a hard requirement. Input formatting is display-only and never alters the stored value, so amounts reconcile to the last digit regardless of how many they run to.",
    },
    {
      q: "Does it support daily market collection?",
      a: "Yes, along with weekly and monthly schedules and interest-only servicing. The frequency should follow the borrower's cash cycle and the signed agreement, not the fact that daily lines exist in the software.",
    },
    {
      q: "Does Vasool make my institution OJK-compliant?",
      a: "No. Licensing, prudential discipline, consumer protection and reporting obligations come from Indonesian law and your regulator. Vasool provides records and controls that make good practice provable; it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "See Vasool run an Indonesian book",
  ctaSub:
    "Book a call and we will set up a rupiah company, register a member group, and walk the field-officer day close end to end.",
};

const Indonesia = () => <KeywordLanding config={config} />;

export default Indonesia;
