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
   * Languages a field agent can dictate an entry in on that market's routes.
   * Deliberately the two or three a collector actually speaks at the doorstep,
   * not every language the engine will accept — an exhaustive list reads as a
   * claim about recognition accuracy we are not making. The confirm-before-save
   * step, not the language list, is what keeps a misheard word out of the book.
   */
  voiceLangs: string;
  /**
   * A caveat appended wherever voiceLangs is claimed, for markets where the
   * local language is not yet a dictation language. Keeps voiceLangs itself a
   * clean, comma-separated list so it can be deduped and joined across markets
   * without a parenthetical leaking into the aggregate sentence.
   */
  voiceNote?: string;
  /**
   * A spoken expense as an officer on this market's routes would actually say
   * it — the amount reads in the local currency named above, so no symbol is
   * repeated here. Concrete beats generic: "petrol 200" tells a buyer what the
   * feature is in a way "record expenses by voice" never does.
   */
  voiceExpense: string;
  /**
   * The name as it reads mid-sentence, when it differs from the plain name.
   * Only "the Philippines" needs it today, but generated copy says "in X" and
   * "a route in X" in a dozen places, and "in Philippines" is the kind of thing
   * a native-speaker buyer notices immediately.
   */
  sentenceName?: string;
  /**
   * The entries worth holding for a second pair of eyes in this market.
   * Completes the sentence "the entries worth gating here are …", so it must
   * read as a clause and stay specific to the local failure mode — a generic
   * "any risky change" tells a buyer nothing about their own operation.
   */
  voiceRisk: string;
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
    voiceLangs: "Tamil, Telugu, Hindi, Malayalam, Kannada and English",
    voiceExpense: "Petrol 200",
    voiceRisk:
      "a rewritten kandhu vatti term, a loan closed for less than the book says, or a gold sale released — the records an NBFC's auditor reaches for first",
  },
  {
    slug: "/loan-management-software-philippines",
    name: "Philippines",
    sentenceName: "the Philippines",
    buyer: "SEC-registered lending and financing companies, cooperatives",
    rail: "Field cash, GCash, Maya, bank transfer",
    currency: "PHP ₱ · Asia/Manila",
    regulator: "Securities and Exchange Commission, Bangko Sentral ng Pilipinas",
    blurb:
      "Daily and weekly collection for palengke vendors and sari-sari stores, with the receipt and audit trail a lending company is asked for.",
    voiceLangs: "Filipino, Cebuano and English",
    voiceExpense: "Jeepney fare 80",
    voiceRisk:
      "a loan restructured for a borrower who missed a market week, a new borrower signed up at the stall, or a route moved between officers",
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
    voiceLangs: "English, Nigerian Pidgin, Hausa and Yoruba",
    voiceExpense: "Transport 1500",
    voiceRisk:
      "a loan rewritten after a bad market day, a field expense booked against the round, and any new customer an agent adds without the office seeing them",
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
    voiceLangs: "Swahili and English",
    voiceExpense: "Fuel 500",
    voiceRisk:
      "a loan's terms rewritten, a member added to a group or chama, and a route reassigned — the changes that decide what lands in the paybill later",
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
    voiceLangs: "Sinhala, Tamil and English",
    voiceExpense: "Bus fare 300",
    voiceRisk:
      "a rescheduled loan or a rewritten interest term agreed at the doorstep, where nobody else was standing",
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
    voiceLangs: "Bahasa Indonesia, Javanese and English",
    voiceExpense: "Bensin 20 ribu",
    voiceRisk:
      "a change to a member's loan or savings scheme — koperasi money belongs to the members, so the record has to name who allowed it",
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
    voiceLangs: "English",
    voiceNote:
      "Khmer dictation ships alongside Cambodian company setup — neither is live yet, and the market page says so rather than listing a language you cannot use.",
    voiceExpense: "Fuel 5 dollars",
    voiceRisk:
      "a loan written in the wrong currency, or terms rewritten after disbursement — where a quiet conversion between riel and dollars is the whole risk",
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
    voiceLangs: "English, Afrikaans and isiZulu",
    voiceExpense: "Petrol 150",
    voiceRisk:
      "a credit agreement rewritten, or a borrower record changed after the affordability assessment was done on it",
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
    voiceLangs: "Spanish",
    voiceExpense: "Transporte 8 mil",
    voiceRisk:
      "a rate or fee rewritten against a modality, and any renegotiated loan term — the records that separate formal credit from gota a gota",
  },
];

/** The country name as it reads inside a sentence. */
export const inSentence = (c: CountryMeta) => c.sentenceName ?? c.name;

/**
 * The metadata behind a country page, looked up by that page's own canonical.
 * Throws rather than returning undefined: a page asking for a slug that is not
 * in COUNTRIES is a wiring mistake, and failing the build beats shipping a page
 * with an empty language list where a sentence should be.
 */
export const countryFor = (slug: string): CountryMeta => {
  const country = COUNTRIES.find((c) => c.slug === slug);
  if (!country) throw new Error(`No country registered for slug "${slug}"`);
  return country;
};

/** Cross-links for a country page: the hub, four peers, then the product pages. */
export const relatedFor = (slug: string): RelatedLink[] => [
  { label: "All supported countries", to: "/countries" },
  ...COUNTRIES.filter((c) => c.slug !== slug)
    .slice(0, 4)
    .map((c) => ({ label: `Vasool in ${inSentence(c)}`, to: c.slug })),
  { label: "Voice Approval Workflow", to: "/voice-approval-workflow" },
  { label: "Line Management App", to: "/line-management-app" },
  { label: "White-Label Loan App", to: "/white-label-loan-app" },
];

/**
 * The sentence that has to appear on every country page. Vasool sells a
 * system of record; it does not grant permission to lend anywhere.
 */
export const NOT_A_LICENCE =
  "Vasool is collections and portfolio software. It is not a licence, a registration, or regulatory approval, and no feature in it makes an unlawful loan lawful. Confirm your legal entity, lending permission and permitted product scope with a qualified local lawyer before your first disbursement.";
