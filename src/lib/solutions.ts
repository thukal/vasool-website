/**
 * Every solution page on the site, grouped the way a buyer actually arrives at
 * one: by the rhythm they collect on, the thing they lend against, how the work
 * gets recorded, the kind of institution they are, or the word they use for the
 * job in their own language.
 *
 * Single source of truth. /solutions renders these groups and the Footer renders
 * the flattened list, so adding a page here puts it in both — the failure mode
 * of a hand-kept nav list is that one of the two quietly goes stale.
 *
 * Country pages are deliberately NOT here; they have their own hub at /countries.
 */
export interface SolutionLink {
  label: string;
  to: string;
  /** One line, in the page's own words — not a fresh claim about the product. */
  blurb: string;
}

export interface SolutionGroup {
  heading: string;
  /** Why these belong together, shown under the group heading. */
  sub: string;
  items: SolutionLink[];
}

export const SOLUTION_GROUPS: SolutionGroup[] = [
  {
    heading: "By how often you collect",
    sub: "The collection rhythm shapes everything downstream — the schedule, the route, and when the day book closes.",
    items: [
      {
        label: "Loan Collection App",
        to: "/loan-collection-app",
        blurb: "Disbursal to final instalment, with field entry, cash and UPI reconciliation and receipts.",
      },
      {
        label: "Daily Collection App",
        to: "/daily-collection-app",
        blurb: "100-day lines, daily interest and pigmy-style collections, built around the daily round.",
      },
      {
        label: "Weekly Collection App",
        to: "/weekly-collection-app",
        blurb: "Ten-week lines and market-day rounds, with borrowers organised by collection day.",
      },
      {
        label: "Monthly Finance App",
        to: "/monthly-finance-app",
        blurb: "Monthly interest books, EMI with foreclosure, semi-monthly lines and salary-day collections.",
      },
      {
        label: "Line Management App",
        to: "/line-management-app",
        blurb: "For line finance, where the line itself is the business and the day book must balance nightly.",
      },
    ],
  },
  {
    heading: "By what you lend against",
    sub: "An asset in the picture changes the record you have to keep — and what happens when a loan goes bad.",
    items: [
      {
        label: "Gold Loan Software",
        to: "/gold-loan-software",
        blurb: "Item-wise pledge register by weight and purity, on an append-only interest ledger.",
      },
      {
        label: "Rental Collection App",
        to: "/rental-collection-app",
        blurb: "Cycles, carts and equipment: a deposit and repeating rent, not a loan balance.",
      },
      {
        label: "Vehicle Finance Software",
        to: "/vehicle-finance-software",
        blurb: "One vehicle register, one EMI engine, and the governance layer a finance company is judged on.",
      },
      {
        label: "Auto Finance Tracking App",
        to: "/auto-finance-tracking-app",
        blurb: "The asset behind every loan, the EMI schedule in front of it, and the field collection between.",
      },
      {
        label: "Chit Fund & Lending App",
        to: "/chit-fund-and-lending-app",
        blurb: "Chits and loans in one app instead of two systems that never agree.",
      },
    ],
  },
  {
    heading: "By how the work gets recorded",
    sub: "What an officer does at the doorstep decides how much of your book is real by evening.",
    items: [
      {
        label: "Voice Entry Collection App",
        to: "/voice-entry-collection-app",
        blurb: "Agents speak the entry instead of typing it, in six Indian languages plus English.",
      },
      {
        label: "Voice Approval Workflow",
        to: "/voice-approval-workflow",
        blurb: "Money in, money out and where the officer went — captured as it happens, gated where it matters.",
      },
    ],
  },
  {
    heading: "By institution and deployment",
    sub: "Who signs the cheque, and whose infrastructure the borrower data sits on.",
    items: [
      {
        label: "NBFC Loan Management",
        to: "/nbfc-loan-management",
        blurb: "One platform from a single-route money lender to a multi-branch NBFC.",
      },
      {
        label: "SACCO Management System",
        to: "/sacco-management-system",
        blurb: "The part where money moves in the field — not an everything-at-once core system.",
      },
      {
        label: "Aplikasi Koperasi Simpan Pinjam",
        to: "/aplikasi-koperasi-simpan-pinjam",
        blurb: "Untuk jalur penagihan koperasi simpan pinjam, bukan untuk meja kantor.",
      },
      {
        label: "Self-Hosted Loan Software",
        to: "/self-hosted-loan-software",
        blurb: "Run it on infrastructure you own, down to a Raspberry Pi in your own office.",
      },
      {
        label: "White-Label Loan App",
        to: "/white-label-loan-app",
        blurb: "Your name, your logo and your own branded subdomain — not ours.",
      },
    ],
  },
  {
    heading: "In your own words",
    sub: "The same field job carries a different name in every market. These pages are written in the one you use.",
    items: [
      {
        label: "Kandhu Vatti App",
        to: "/kandhu-vatti-app",
        blurb: "கந்து வட்டி, தண்டல், line வசூல் — daily vatti collections recorded by voice in Tamil.",
      },
      {
        label: "Byaj Wasooli App",
        to: "/byaj-wasooli-app",
        blurb: "ब्याज वसूली, उधार खाता, लेन-देन — daily byaj collections recorded by voice in Hindi.",
      },
      {
        label: "Ugrani App",
        to: "/ugrani-app",
        blurb: "ಉಗ್ರಾಣಿ, ಮೀಟರ್ ಬಡ್ಡಿ — daily ugrani collections recorded by voice in Kannada.",
      },
      {
        label: "Susu Collection App",
        to: "/susu-collection-app",
        blurb: "Susu works because the collector shows up — and breaks for the same reason.",
      },
      {
        label: "Ajo & Esusu Collection Software",
        to: "/ajo-esusu-collection-software",
        blurb: "One agent, a line of shops and a paper card that holds right up until it does not.",
      },
      {
        label: "Software de Cobranza",
        to: "/software-de-cobranza",
        blurb: "Cuando la cobranza ocurre en la calle, el problema no es el cálculo sino la prueba.",
      },
      {
        label: "Logiciel de Gestion de Microfinance",
        to: "/logiciel-gestion-microfinance",
        blurb: "L'argent d'un SFD appartient à ses membres, et cela fixe le niveau d'exigence.",
      },
      {
        label: "Debt Collection Software South Africa",
        to: "/debt-collection-software-south-africa",
        blurb: "Answers the one question every dispute comes down to: how did this balance become this balance?",
      },
    ],
  },
];

/** Flattened list, in group order — what the Footer renders. */
export const ALL_SOLUTIONS: SolutionLink[] = SOLUTION_GROUPS.flatMap(
  (g) => g.items,
);
