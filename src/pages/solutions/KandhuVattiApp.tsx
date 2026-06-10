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
      "Kandhu Vatti App (கந்து வட்டி ஆப்) - Daily Interest Collection in Tamil | Vasool",
    description:
      "Vasool is the kandhu vatti app for Tamil finance businesses — daily vatti collections, thandal lines, Tamil voice entry (குரல் பதிவு), automatic vatti calculation, and Tamil interface. Works offline. Free demo in Tamil.",
    keywords:
      "kandhu vatti app, கந்து வட்டி ஆப், thandal app, தண்டல் ஆப், tamil finance app, tamil vasool app, vatti calculation app, daily vatti app, tamil loan collection app, kandhu vatti calculator, finance vatti calculator, tamil voice entry finance app, meter vatti app",
    canonical: "/kandhu-vatti-app",
  },
  breadcrumbName: "Kandhu Vatti App",
  badge: "கந்து வட்டி ஆப் — Kandhu Vatti App",
  h1: (
    <>
      The kandhu vatti app that{" "}
      <span className="text-gradient">speaks Tamil</span>
    </>
  ),
  intro:
    "கந்து வட்டி, தண்டல், line வசூல் — Vasool is built for how Tamil finance businesses actually work: daily vatti collections recorded by voice in Tamil, vatti calculated automatically, and the whole app — screens, receipts, reports — in தமிழ்.",
  features: [
    {
      icon: Mic,
      title: "Tamil voice entry — குரல் பதிவு",
      desc: '"அருண் 500 cash" என்று சொன்னால் போதும் — entry பதிவாகிவிடும். Agents speak collections in Tamil; Vasool turns the words into records.',
    },
    {
      icon: Percent,
      title: "Vatti calculated automatically",
      desc: "Daily vatti, weekly vatti, monthly vatti — interest is computed by the app for every loan, every day. No mental math, no end-of-line disputes.",
    },
    {
      icon: Languages,
      title: "Full Tamil interface",
      desc: "Every screen, button, report, and receipt available in Tamil. Agents who never used an app in English are productive on day one.",
    },
    {
      icon: BookOpen,
      title: "Replaces the vatti notebook",
      desc: "The கந்து வட்டி நோட்டு moves into the app: borrowers, principal, vatti, balance — with history that can't be torn out or lost.",
    },
    {
      icon: Camera,
      title: "Photo proof — புகைப்பட ஆதாரம்",
      desc: "Borrower photos, KYC documents, and collection photo proof attached to every account.",
    },
    {
      icon: WifiOff,
      title: "Offline in every street",
      desc: "Works without internet on the route and syncs when the network returns — entries are never lost.",
    },
  ],
  featuresHeading: "Built for Tamil daily-interest lending",
  featuresSub:
    "Not a translated English app — a collection app designed around how kandhu vatti and thandal businesses run.",
  steps: [
    {
      title: "கணக்கு தொடங்குங்கள்",
      desc: "Add the borrower with photo KYC, set the principal and daily vatti — the schedule is ready.",
    },
    {
      title: "தினமும் வசூல்",
      desc: "The agent walks the line and speaks each entry in Tamil. Cash or GPay, with instant receipt.",
    },
    {
      title: "வட்டி தானாக கணக்கு",
      desc: "Vatti accrues automatically and the balance updates with every payment — both sides see the same number.",
    },
    {
      title: "நாள் முடிவில் கணக்கு சரி",
      desc: "The day book totals each line's collections every evening. No notebook addition at night.",
    },
  ],
  stepsHeading: "எப்படி வேலை செய்கிறது — how it works",
  prose: [
    {
      heading: "From the vatti notebook to the vatti app",
      paragraphs: [
        "Every kandhu vatti and thandal business runs on the same tools: a notebook, a pen, and the agent's memory. It works — until a page tears, an agent leaves, or two people remember a balance differently. The notebook has no backup, no receipts, and no way to check vatti math from last month.",
        "Vasool keeps everything the notebook did — daily entries, line order, running balances — and adds what it never could: automatic vatti calculation, PDF receipts in Tamil, photo proof, payment history for every borrower, and a backup that survives anything that happens to a phone.",
        <>
          For licensed money lenders and registered finance businesses, the
          audit trail matters too: every entry, edit, and closure is logged.
          See how Vasool compares with paper and basic apps on the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Tamil first, not Tamil translated",
      paragraphs: [
        <>
          Most finance apps add Tamil as an afterthought — translated menus
          over an English workflow. Vasool's{" "}
          <Link
            to="/voice-entry-collection-app"
            className="text-secondary hover:underline"
          >
            voice entry
          </Link>{" "}
          understands Tamil names and mixed Tamil-English phrases the way
          agents actually speak them, and the daily, weekly, and monthly line
          structures match how Tamil Nadu finance businesses are organized —
          தினசரி line, வாராந்திர line, மாத வட்டி.
        </>,
        "Telugu, Kannada, Malayalam, and Hindi businesses get the same treatment — the app and voice entry work in all six languages, so a business with agents from different states still runs on one system.",
      ],
    },
  ],
  checklist: {
    heading: "What a kandhu vatti app must have",
    sub: "உங்கள் business-க்கு app தேர்வு செய்யும் முன் இதை சரிபாருங்கள்:",
    items: [
      "Tamil interface and Tamil voice entry — not just translated menus",
      "Daily vatti calculated automatically for every account",
      "Line-wise organization matching how you walk your routes",
      "Works offline in every street and syncs later",
      "PDF receipts borrowers can verify — fewer vatti disputes",
      "Photo KYC and collection photo proof",
      "Day book that totals each line every evening",
      "Backup and audit trail the notebook never had",
    ],
  },
  faqs: [
    {
      q: "What is a kandhu vatti app?",
      a: "A kandhu vatti app is collection software for Tamil daily-interest lending — businesses that lend principal and collect vatti (interest) daily or weekly along a line. Vasool handles the vatti calculation, daily collection entries by Tamil voice, line-wise day books, and receipts, replacing the traditional vatti notebook.",
    },
    {
      q: "Does the app work fully in Tamil?",
      a: "Yes. The interface, voice entry, receipts, and reports all work in Tamil (தமிழ்). Agents can speak collection entries in Tamil and the office can run reports in Tamil or English — both views of the same data.",
    },
    {
      q: "Can it calculate daily vatti automatically?",
      a: "Yes. Set the principal and the vatti rate, and Vasool computes the interest for every period — daily, weekly, or monthly — including recalculation when part-payments come in. The borrower and the agent always see the same balance.",
    },
    {
      q: "Does it work for thandal collections too?",
      a: "Yes. Thandal (தண்டல்) daily collections follow the same flow: line-wise borrower lists, daily entries by voice or tap, automatic balance updates, and a day book per line every evening.",
    },
    {
      q: "Is it suitable for licensed money lenders in Tamil Nadu?",
      a: "Yes. Vasool maintains complete records for registered finance businesses and licensed money lenders — borrower KYC with photos, receipts for every payment, and a full audit log of every transaction — the documentation a regulated lending business needs.",
    },
  ],
  related: [
    { label: "Voice Entry Collection App", to: "/voice-entry-collection-app" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "தமிழில் ஒரு demo பாருங்கள்",
  ctaSub:
    "Book a free demo in Tamil — speak one entry in your own words and watch it become a record.",
};

const KandhuVattiApp = () => <KeywordLanding config={config} />;

export default KandhuVattiApp;
