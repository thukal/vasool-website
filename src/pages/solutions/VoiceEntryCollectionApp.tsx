import { Link } from "react-router-dom";
import {
  Mic,
  Languages,
  Zap,
  ShieldCheck,
  WifiOff,
  Camera,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "Voice Entry Collection App - Speak & Record Collections | Vasool",
    description:
      'Vasool is the voice entry collection app for money lenders: say "Arun 500 cash" and the payment is recorded. Voice to data in Tamil, Telugu, Hindi, Malayalam, Kannada & English. Hands-free collection entry, works offline.',
    keywords:
      "voice entry collection app, voice based vasool app, collection app with voice typing, add loan entry by voice, voice entry app for money lenders, hands free collection entry app, vasool app with voice input, voice to data collection entry, speak and record collection entry, Tamil voice entry finance app, Kannada voice collection app",
    canonical: "/voice-entry-collection-app",
  },
  breadcrumbName: "Voice Entry Collection App",
  badge: "Voice Entry — Only on Vasool",
  h1: (
    <>
      The voice entry collection app —{" "}
      <span className="text-gradient">speak, and it's recorded</span>
    </>
  ),
  intro:
    'Your agent stands at the doorstep, says "Arun 500 cash" — and Vasool finds the borrower, records ₹500 against today\'s installment, and generates the receipt. That\'s voice to data: no typing, no searching, no errors. In six languages.',
  features: [
    {
      icon: Mic,
      title: "Voice to data, not voice notes",
      desc: "Vasool doesn't save an audio clip — it converts speech into a structured payment record: borrower, amount, mode, date. Searchable and reportable like any typed entry.",
    },
    {
      icon: Languages,
      title: "6 languages",
      desc: "Tamil, Telugu, Hindi, Malayalam, Kannada, and English. Agents speak naturally in the language they think in.",
    },
    {
      icon: Zap,
      title: "Seconds per entry",
      desc: "Typing a name, finding the account, entering the amount — 30 seconds. Saying it — 3. Multiply by 80 borrowers a day.",
    },
    {
      icon: ShieldCheck,
      title: "Confirm before commit",
      desc: "The matched borrower and amount are shown for confirmation before the entry is saved, so a misheard word never corrupts your book.",
    },
    {
      icon: Camera,
      title: "Photo proof on top",
      desc: "Pair voice entry with photo proof — speak the payment, snap the moment. The full story of the collection, captured in seconds.",
    },
    {
      icon: WifiOff,
      title: "Voice works offline too",
      desc: "Entries by voice keep working with no network and sync automatically when coverage returns.",
    },
  ],
  featuresHeading: "What makes Vasool's voice entry different",
  featuresSub:
    "Other apps put a microphone icon on a text field. Vasool turns speech into structured loan data.",
  steps: [
    {
      title: "Tap the mic",
      desc: "One button on the collection screen. No menus, no account search.",
    },
    {
      title: "Say the entry",
      desc: '"Selvi 200 GPay" or "Arun 500 cash" — name, amount, payment mode, in any supported language.',
    },
    {
      title: "Confirm the match",
      desc: "Vasool shows the matched borrower and parsed amount. One glance, one tap.",
    },
    {
      title: "Receipt goes out",
      desc: "The PDF receipt is generated instantly and the office dashboard updates in real time.",
    },
  ],
  stepsHeading: "Hands-free collection entry in four moves",
  prose: [
    {
      heading: "Why voice entry changes field collections",
      paragraphs: [
        "Every collection app claims to be fast, but the bottleneck was never the app — it's the typing. An agent juggling a cash bag, a phone, and a queue of borrowers makes data-entry mistakes, skips entries to do later, or writes in a notebook to type up at night. Every one of those workarounds is where money leaks.",
        "Voice entry removes the bottleneck. The entry happens at the moment of collection, at the doorstep, with the borrower watching. Fewer disputes, no evening data entry, and a book that's accurate in real time.",
        <>
          See how this compares with typical vasool book apps on the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>{" "}
          — voice to data is a Vasool exclusive.
        </>,
      ],
    },
    {
      heading: "Built for Indian languages and Indian names",
      paragraphs: [
        "Voice systems trained on English struggle with Indian borrower names and mixed-language speech. Vasool's voice entry is built for how collection agents actually talk — Tamil agents saying Tamil names with amounts in Tamil or English, Hindi agents switching between byaj and balance mid-sentence.",
        <>
          It's the same engine behind the whole app: the interface, reports,
          and{" "}
          <Link to="/staff-tools" className="text-secondary hover:underline">
            staff tools
          </Link>{" "}
          all work in Tamil, Telugu, Hindi, Malayalam, Kannada, and English.
        </>,
      ],
    },
  ],
  checklist: {
    heading: "Voice entry, measured honestly",
    sub: "What Vasool's voice to data actually does on a real route:",
    items: [
      "Records borrower, amount, and payment mode from one spoken phrase",
      "Matches borrowers even with similar names — and asks when unsure",
      "Works in 6 languages, including mixed-language phrases",
      "Shows a confirmation before saving, so errors don't enter the book",
      "Keeps working offline and syncs later",
      "Generates the PDF receipt immediately after the entry",
      "Feeds the same dashboard, day book, and reports as typed entries",
    ],
  },
  faqs: [
    {
      q: "How does the voice entry collection app work?",
      a: 'The agent taps the mic and says the entry — for example "Arun 500 cash" or "Selvi 200 GPay". Vasool converts the speech to data: it matches the borrower, parses the amount and payment mode, shows a confirmation, and records the payment with a PDF receipt. No typing at any step.',
    },
    {
      q: "Which languages does voice entry support?",
      a: "Tamil, Telugu, Hindi, Malayalam, Kannada, and English. Agents can speak naturally, including mixed-language phrases like a Tamil sentence with an English number.",
    },
    {
      q: "What if the app hears the name wrong?",
      a: "Vasool shows the matched borrower and parsed amount before saving. If the match is wrong or ambiguous, the agent picks the right borrower from a shortlist with one tap. Nothing enters your book without confirmation.",
    },
    {
      q: "Does voice entry work without internet?",
      a: "Yes. Voice entries keep working offline on the route and sync automatically when the network returns — same as every other entry in Vasool.",
    },
    {
      q: "Is voice entry available on all plans?",
      a: "Yes. Voice entry is a core feature included in every Vasool plan — it's not a premium add-on. The standard plan is ₹699/month with everything included.",
    },
  ],
  related: [
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Kandhu Vatti App", to: "/kandhu-vatti-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Hear it record your first entry",
  ctaSub:
    "Book a free demo and say a collection entry in your own language — it takes under a minute to believe it.",
};

const VoiceEntryCollectionApp = () => <KeywordLanding config={config} />;

export default VoiceEntryCollectionApp;
