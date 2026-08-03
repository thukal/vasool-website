import type { RelatedLink } from "@/components/KeywordLanding";

/**
 * The countries Vasool supports at company setup. Each has its own landing
 * page because the buyer, the payment rail and the regulator differ — the
 * collection workflow looking similar is not a reason to say the same thing.
 *
 * India's entry points at the NBFC page: the whole site is already the India
 * pitch, so a separate /loan-management-software-india would cannibalise it.
 */
export interface CountryMeta {
  /** Landing page path. */
  slug: string;
  name: string;
  /** Who signs the cheque — the institution type to name in copy. */
  buyer: string;
  /** How the money actually moves, which decides the headline job. */
  rail: string;
  currency: string;
  /** Named for orientation only — Vasool makes no compliance claim. */
  regulator: string;
  blurb: string;
  /**
   * "preview" means the market page is published but company setup for that
   * country is not shipped yet. Never mark a country live here before the
   * product actually offers it at setup — the page says what this says.
   */
  status?: "live" | "preview";
}

export const COUNTRIES: CountryMeta[] = [
  {
    slug: "/nbfc-loan-management",
    name: "India",
    buyer: "Money lenders, finance companies and NBFCs",
    rail: "Field cash and UPI",
    currency: "INR ₹ · Asia/Kolkata",
    regulator: "Reserve Bank of India",
    blurb:
      "Voice-entry route collection, kandhu vatti and EMI books, and the governance layer an NBFC is judged on.",
  },
  {
    slug: "/loan-management-software-philippines",
    name: "Philippines",
    buyer: "SEC-registered lending and financing companies, cooperatives",
    rail: "Field cash, GCash, Maya, bank transfer",
    currency: "PHP ₱ · Asia/Manila",
    regulator: "Securities and Exchange Commission, Bangko Sentral ng Pilipinas",
    blurb:
      "Daily and weekly collection for palengke vendors and sari-sari stores, with the receipt and audit trail a lending company is asked for.",
  },
  {
    slug: "/loan-management-software-nigeria",
    name: "Nigeria",
    buyer: "Microfinance banks, cooperative societies, market lenders",
    rail: "Field cash, bank transfer, USSD",
    currency: "NGN ₦ · Africa/Lagos",
    regulator: "Central Bank of Nigeria",
    blurb:
      "Agent cash accountability, group and individual exposure records, and portfolio-at-risk ageing for market-day collection.",
  },
  {
    slug: "/loan-management-software-kenya",
    name: "Kenya",
    buyer: "SACCOs, licensed digital credit providers, microfinance institutions",
    rail: "M-Pesa paybill and till, bank transfer",
    currency: "KES · Africa/Nairobi",
    regulator: "SASRA, Central Bank of Kenya",
    blurb:
      "Mobile-money reconciliation first: every payment carries its channel and transaction reference, so nothing posts to the wrong loan twice.",
  },
  {
    slug: "/loan-management-software-sri-lanka",
    name: "Sri Lanka",
    buyer: "Licensed microfinance companies, finance companies, SME lenders",
    rail: "Field cash, bank transfer",
    currency: "LKR · Asia/Colombo",
    regulator: "Central Bank of Sri Lanka",
    blurb:
      "A familiar field workflow with Sri Lankan documents, LKR and a Tamil interface — without carrying Indian conventions across.",
  },
  {
    slug: "/loan-management-software-indonesia",
    name: "Indonesia",
    buyer: "Koperasi simpan pinjam, BPR, licensed microfinance institutions",
    rail: "Field cash, bank transfer, QRIS",
    currency: "IDR Rp · Asia/Jakarta",
    regulator: "Otoritas Jasa Keuangan",
    blurb:
      "Member-based lending with field-officer accountability and IDR amounts that survive entry exactly as typed.",
  },
  {
    slug: "/loan-management-software-cambodia",
    name: "Cambodia",
    buyer: "NBC-licensed MFIs and MDIs, rural credit institutions",
    rail: "Field cash in KHR and USD, bank transfer, mobile wallets",
    currency: "KHR ៛ and USD · Asia/Phnom_Penh",
    regulator: "National Bank of Cambodia",
    blurb:
      "Dual-currency field lending — riel and dollar balances kept apart, never silently converted. Company setup for Cambodia is not live yet.",
    status: "preview",
  },
  {
    slug: "/loan-management-software-south-africa",
    name: "South Africa",
    buyer: "NCR-registered credit providers",
    rail: "Debit order and DebiCheck, EFT, payroll deduction",
    currency: "ZAR R · Africa/Johannesburg",
    regulator: "National Credit Regulator",
    blurb:
      "Agreement, affordability-evidence and payment-allocation records for a formal credit provider — not a street-route product.",
  },
  {
    slug: "/loan-management-software-colombia",
    name: "Colombia",
    buyer: "Supervised microcredit institutions and cooperatives",
    rail: "Field cash, bank transfer, PSE and mobile wallets",
    currency: "COP $ · America/Bogotá",
    regulator: "Superintendencia Financiera de Colombia",
    blurb:
      "Formal productive credit with per-modality pricing records and a hard line against gota a gota lending.",
  },
];

/** Cross-links for a country page: the hub, four peers, then two product pages. */
export const relatedFor = (slug: string): RelatedLink[] => [
  { label: "All supported countries", to: "/countries" },
  ...COUNTRIES.filter((c) => c.slug !== slug)
    .slice(0, 4)
    .map((c) => ({ label: `Vasool in ${c.name}`, to: c.slug })),
  { label: "Line Management App", to: "/line-management-app" },
  { label: "White-Label Loan App", to: "/white-label-loan-app" },
];

/**
 * The sentence that has to appear on every country page. Vasool sells a
 * system of record; it does not grant permission to lend anywhere.
 */
export const NOT_A_LICENCE =
  "Vasool is collections and portfolio software. It is not a licence, a registration, or regulatory approval, and no feature in it makes an unlawful loan lawful. Confirm your legal entity, lending permission and permitted product scope with a qualified local lawyer before your first disbursement.";
