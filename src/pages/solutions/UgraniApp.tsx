import { Link } from "react-router-dom";
import {
  Mic,
  Languages,
  Percent,
  BookOpen,
  Camera,
  WifiOff,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "Ugrani App - Kannada Loan Collection & Meter Baddi | Vasool",
    description:
      "Vasool is the ugrani app for Kannada finance businesses — daily ugrani collection, meter baddi tracking, Kannada voice entry, automatic interest calculation, and full Kannada interface. Works offline. Free demo in Kannada.",
    keywords:
      "ugrani app, ಉಗ್ರಾಣಿ ಆ್ಯಪ್, meter baddi app, ಮೀಟರ್ ಬಡ್ಡಿ, kannada loan collection app, kannada finance app, kannada vasool app, baddi calculation app, daily ugrani app, kannada voice collection app, kannada voice entry finance app, finance app karnataka, daily collection app kannada",
    canonical: "/ugrani-app",
  },
  breadcrumbName: "Ugrani App",
  badge: "ಉಗ್ರಾಣಿ ಆ್ಯಪ್ — Ugrani App",
  h1: (
    <>
      The ugrani app that{" "}
      <span className="text-gradient">speaks Kannada</span>
    </>
  ),
  intro:
    "ಉಗ್ರಾಣಿ, ಮೀಟರ್ ಬಡ್ಡಿ, ದಿನದ ವಸೂಲಿ — Vasool is built for how Kannada finance businesses actually work: daily ugrani collections recorded by voice in Kannada, baddi calculated automatically, and the whole app — screens, receipts, reports — in ಕನ್ನಡ.",
  features: [
    {
      icon: Mic,
      title: "Kannada voice entry — ಧ್ವನಿ ನಮೂದು",
      desc: '"ರಮೇಶ್ 500 cash" ಎಂದು ಹೇಳಿದರೆ ಸಾಕು — entry ದಾಖಲಾಗುತ್ತದೆ. Agents speak collections in Kannada; Vasool turns the words into records.',
    },
    {
      icon: Percent,
      title: "Baddi calculated automatically",
      desc: "Daily baddi, monthly baddi, meter baddi — interest is computed by the app for every loan, every day. No mental math, no disputes.",
    },
    {
      icon: Languages,
      title: "Full Kannada interface",
      desc: "Every screen, button, report, and receipt available in Kannada. Agents who never used an app in English are productive from day one.",
    },
    {
      icon: BookOpen,
      title: "Replaces the ugrani note",
      desc: "The ugrani notebook moves into the app: borrowers, principal, baddi, balance — with history that can't be torn out or lost.",
    },
    {
      icon: Camera,
      title: "Photo proof — ಫೋಟೋ ಸಾಕ್ಷಿ",
      desc: "Borrower photos, KYC documents, and collection photo proof attached to every account.",
    },
    {
      icon: WifiOff,
      title: "Offline everywhere",
      desc: "Works without internet on the route and syncs when the network returns — entries are never lost.",
    },
  ],
  featuresHeading: "Built for Kannada ugrani and baddi businesses",
  featuresSub:
    "Not a translated English app — a collection app designed around how ugrani and meter baddi businesses run.",
  steps: [
    {
      title: "ಖಾತೆ ಪ್ರಾರಂಭಿಸಿ",
      desc: "Add the borrower with photo KYC, set the principal and baddi rate — the schedule is ready.",
    },
    {
      title: "ಪ್ರತಿದಿನ ವಸೂಲಿ",
      desc: "The agent walks the route and speaks each entry in Kannada. Cash or UPI, with instant receipt.",
    },
    {
      title: "ಬಡ್ಡಿ ತಾನಾಗಿಯೇ",
      desc: "Baddi accrues automatically and the balance updates with every payment — both sides see the same number.",
    },
    {
      title: "ದಿನದ ಕೊನೆಯಲ್ಲಿ ಲೆಕ್ಕ",
      desc: "The day book totals each route's collections every evening. No notebook addition at night.",
    },
  ],
  stepsHeading: "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ — how it works",
  prose: [
    {
      heading: "From the ugrani notebook to the ugrani app",
      paragraphs: [
        "Every ugrani and meter baddi business runs on the same tools: a notebook, a pen, and the agent's memory. It works — until a page tears, an agent leaves, or two people remember a balance differently. The notebook has no backup, no receipts, and no way to check baddi math from last month.",
        "Vasool keeps everything the notebook did — daily entries, running balances, collection history — and adds what it never could: automatic baddi calculation, PDF receipts in Kannada, photo proof, payment history for every borrower, and a backup that survives anything that happens to a phone.",
        <>
          For licensed money lenders and registered finance businesses, the
          audit trail matters too: every entry, edit, and closure is logged.
          See how Vasool compares with the notebook and basic apps on the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Kannada first, not Kannada translated",
      paragraphs: [
        <>
          Most finance apps add Kannada as an afterthought — translated menus
          over an English workflow. Vasool's{" "}
          <Link
            to="/voice-entry-collection-app"
            className="text-secondary hover:underline"
          >
            voice entry
          </Link>{" "}
          understands Kannada names and mixed Kannada-English phrases the way
          agents actually speak them, and the daily, weekly, and monthly
          structures match how Karnataka finance businesses are organized.
        </>,
        "Tamil, Telugu, Hindi, Malayalam, and English businesses get the same treatment — the app and voice entry work in all six languages, so a business with agents from different states still runs on one system.",
      ],
    },
  ],
  checklist: {
    heading: "What an ugrani app must have",
    sub: "ಆ್ಯಪ್ ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲು ಇದನ್ನು ಪರಿಶೀಲಿಸಿ:",
    items: [
      "Kannada interface and Kannada voice entry — not just translated menus",
      "Daily and monthly baddi calculated automatically for every account",
      "Route-wise organization matching how you collect",
      "Works offline everywhere and syncs later",
      "PDF receipts borrowers can verify — fewer baddi disputes",
      "Photo KYC and collection photo proof",
      "Day book that totals each route every evening",
      "Backup and audit trail the notebook never had",
    ],
  },
  faqs: [
    {
      q: "What is an ugrani app?",
      a: "An ugrani app is collection software for Kannada lending businesses — those that lend principal and collect baddi (interest) daily or monthly. Vasool handles the baddi calculation, collection entries by Kannada voice, route-wise day books, and receipts, replacing the traditional ugrani notebook.",
    },
    {
      q: "Does the app work fully in Kannada?",
      a: "Yes. The interface, voice entry, receipts, and reports all work in Kannada (ಕನ್ನಡ). Agents can speak collection entries in Kannada and the office can run reports in Kannada or English — both views of the same data.",
    },
    {
      q: "Can it calculate baddi and meter baddi automatically?",
      a: "Yes. Set the principal and the baddi rate, and Vasool computes the interest for every period — daily or monthly — including recalculation when part-payments come in. The borrower and the agent always see the same balance.",
    },
    {
      q: "Does it work for daily ugrani collection?",
      a: "Yes. Daily ugrani collection follows the core flow: route-wise borrower lists, daily entries by voice or tap, automatic balance updates, and a day book every evening — with full history the paper notebook can't keep safely.",
    },
    {
      q: "Is it suitable for licensed money lenders in Karnataka?",
      a: "Yes. Vasool maintains complete records for registered finance businesses and licensed money lenders — borrower KYC with photos, receipts for every payment, and a full audit log of every transaction — the documentation a regulated lending business needs.",
    },
  ],
  related: [
    { label: "Kandhu Vatti App", to: "/kandhu-vatti-app" },
    { label: "Byaj Wasooli App", to: "/byaj-wasooli-app" },
    { label: "Voice Entry Collection App", to: "/voice-entry-collection-app" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "ಕನ್ನಡದಲ್ಲಿ ಒಂದು demo ನೋಡಿ",
  ctaSub:
    "Book a free demo in Kannada — speak one entry in your own words and watch it become a record.",
};

const UgraniApp = () => <KeywordLanding config={config} />;

export default UgraniApp;
