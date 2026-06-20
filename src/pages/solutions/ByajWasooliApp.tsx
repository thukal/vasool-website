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
      "Byaj Wasooli App (ब्याज वसूली ऐप) - Udhar Khata & Loan Collection in Hindi | Vasool",
    description:
      "Vasool is the byaj wasooli app for Hindi finance businesses — daily byaj collection, udhar khata, lena dena tracking, Hindi voice entry, automatic interest calculation, and full Hindi interface. Works offline. Free demo in Hindi.",
    keywords:
      "byaj wasooli app, ब्याज वसूली ऐप, vasooli app, वसूली ऐप, udhar khata app, उधार खाता ऐप, lena dena app, hindi finance app, hindi loan collection app, byaj calculation app, daily byaj app, hindi vasool app, paisa wasooli app, karz wasooli app, hindi voice entry finance app",
    canonical: "/byaj-wasooli-app",
  },
  breadcrumbName: "Byaj Wasooli App",
  badge: "ब्याज वसूली ऐप — Byaj Wasooli App",
  h1: (
    <>
      The byaj wasooli app that{" "}
      <span className="text-gradient">speaks Hindi</span>
    </>
  ),
  intro:
    "ब्याज वसूली, उधार खाता, लेन-देन — Vasool is built for how Hindi finance businesses actually work: daily byaj collections recorded by voice in Hindi, interest calculated automatically, and the whole app — screens, receipts, reports — in हिन्दी.",
  features: [
    {
      icon: Mic,
      title: "Hindi voice entry — आवाज़ से एंट्री",
      desc: '"राजेश 500 cash" बोलिए — एंट्री दर्ज हो जाएगी। Agents speak collections in Hindi; Vasool turns the words into records.',
    },
    {
      icon: Percent,
      title: "Byaj calculated automatically",
      desc: "Daily byaj, monthly byaj — interest is computed by the app for every loan, every day. No mental math, no disputes over the udhar khata.",
    },
    {
      icon: Languages,
      title: "Full Hindi interface",
      desc: "Every screen, button, report, and receipt available in Hindi. Agents who never used an app in English are productive from day one.",
    },
    {
      icon: BookOpen,
      title: "Replaces the udhar khata",
      desc: "The उधार खाता bahi-khata moves into the app: borrowers, principal, byaj, balance — with history that can't be torn out or lost.",
    },
    {
      icon: Camera,
      title: "Photo proof — फोटो प्रूफ",
      desc: "Borrower photos, KYC documents, and collection photo proof attached to every account.",
    },
    {
      icon: WifiOff,
      title: "Offline in every gali",
      desc: "Works without internet on the route and syncs when the network returns — entries are never lost.",
    },
  ],
  featuresHeading: "Built for Hindi lena-dena and byaj businesses",
  featuresSub:
    "Not a translated English app — a collection app designed around how byaj wasooli and udhar khata businesses run.",
  steps: [
    {
      title: "खाता शुरू करें",
      desc: "Add the borrower with photo KYC, set the principal and byaj rate — the schedule is ready.",
    },
    {
      title: "रोज़ वसूली",
      desc: "The agent walks the route and speaks each entry in Hindi. Cash or UPI, with instant receipt.",
    },
    {
      title: "ब्याज अपने आप",
      desc: "Byaj accrues automatically and the balance updates with every payment — both sides see the same number.",
    },
    {
      title: "दिन के अंत में हिसाब",
      desc: "The day book totals each route's collections every evening. No bahi-khata addition at night.",
    },
  ],
  stepsHeading: "कैसे काम करता है — how it works",
  prose: [
    {
      heading: "From the udhar khata bahi to the wasooli app",
      paragraphs: [
        "Every byaj wasooli and udhar khata business runs on the same tools: a bahi-khata, a pen, and the agent's memory. It works — until a page tears, an agent leaves, or two people remember a balance differently. The bahi has no backup, no receipts, and no way to check byaj math from last month.",
        "Vasool keeps everything the bahi-khata did — daily entries, running balances, lena-dena history — and adds what it never could: automatic byaj calculation, PDF receipts in Hindi, photo proof, payment history for every borrower, and a backup that survives anything that happens to a phone.",
        <>
          For licensed money lenders and registered finance businesses, the
          audit trail matters too: every entry, edit, and closure is logged.
          See how Vasool compares with the bahi-khata and basic apps on the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Hindi first, not Hindi translated",
      paragraphs: [
        <>
          Most finance apps add Hindi as an afterthought — translated menus over
          an English workflow. Vasool's{" "}
          <Link
            to="/voice-entry-collection-app"
            className="text-secondary hover:underline"
          >
            voice entry
          </Link>{" "}
          understands Hindi names and mixed Hindi-English phrases the way agents
          actually speak them — switching between byaj, balance, and amounts
          mid-sentence — and the daily, weekly, and monthly structures match how
          North Indian finance businesses are organized.
        </>,
        "Tamil, Telugu, Kannada, Malayalam, and English businesses get the same treatment — the app and voice entry work in all six languages, so a business with agents from different states still runs on one system.",
      ],
    },
  ],
  checklist: {
    heading: "What a byaj wasooli app must have",
    sub: "ऐप चुनने से पहले यह ज़रूर देखें:",
    items: [
      "Hindi interface and Hindi voice entry — not just translated menus",
      "Daily and monthly byaj calculated automatically for every account",
      "Route-wise organization matching how you collect",
      "Works offline in every gali and syncs later",
      "PDF receipts borrowers can verify — fewer byaj disputes",
      "Photo KYC and collection photo proof",
      "Day book that totals each route every evening",
      "Backup and audit trail the bahi-khata never had",
    ],
  },
  faqs: [
    {
      q: "What is a byaj wasooli app?",
      a: "A byaj wasooli app is collection software for Hindi lending businesses — those that lend principal and collect byaj (interest) daily or monthly. Vasool handles the byaj calculation, collection entries by Hindi voice, route-wise day books, and receipts, replacing the traditional udhar khata bahi.",
    },
    {
      q: "Does the app work fully in Hindi?",
      a: "Yes. The interface, voice entry, receipts, and reports all work in Hindi (हिन्दी). Agents can speak collection entries in Hindi and the office can run reports in Hindi or English — both views of the same data.",
    },
    {
      q: "Can it calculate byaj automatically?",
      a: "Yes. Set the principal and the byaj rate, and Vasool computes the interest for every period — daily or monthly — including recalculation when part-payments come in. The borrower and the agent always see the same balance.",
    },
    {
      q: "Does it work for udhar khata and lena-dena tracking?",
      a: "Yes. Udhar khata (उधार खाता) and lena-dena follow the same flow: borrower-wise accounts, daily entries by voice or tap, automatic balance updates, and a day book every evening — with full history that the paper bahi can't keep safely.",
    },
    {
      q: "Is it suitable for licensed money lenders in India?",
      a: "Yes. Vasool maintains complete records for registered finance businesses and licensed money lenders — borrower KYC with photos, receipts for every payment, and a full audit log of every transaction — the documentation a regulated lending business needs.",
    },
  ],
  related: [
    { label: "Kandhu Vatti App", to: "/kandhu-vatti-app" },
    { label: "Voice Entry Collection App", to: "/voice-entry-collection-app" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "हिन्दी में एक demo देखिए",
  ctaSub:
    "Book a free demo in Hindi — speak one entry in your own words and watch it become a record.",
};

const ByajWasooliApp = () => <KeywordLanding config={config} />;

export default ByajWasooliApp;
