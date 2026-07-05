import { Link } from "react-router-dom";
import {
  Palette,
  Globe,
  Sparkles,
  Building2,
  Smartphone,
  ToggleRight,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title:
      "White-Label Loan Collection App - Your Brand | Vasool",
    description:
      "Vasool is a white-label loan collection app — put your own name, logo, and branded subdomain (yourbusiness.vasool.app) on a full microfinance platform. Rebrandable for finance businesses and resellers. Free demo.",
    keywords:
      "white label loan collection app, white label microfinance software, rebrandable loan app, white label finance crm, your own branded vasool app, custom subdomain loan software, white label lending platform, reseller loan management software",
    canonical: "/white-label-loan-app",
  },
  breadcrumbName: "White-Label Loan App",
  badge: "White-Label — Only on Vasool",
  h1: (
    <>
      A white-label loan collection app{" "}
      <span className="text-gradient">with your brand on it</span>
    </>
  ),
  intro:
    "Your customers and staff should see your finance business — not ours. Vasool is white-label: your name, your logo, and your own branded subdomain on a complete loan collection platform, ready to make your own.",
  features: [
    {
      icon: Palette,
      title: "Your brand throughout",
      desc: "Your business name and logo across the app, web dashboard, customer portal, and PDF receipts. Customers see your brand at every touchpoint.",
    },
    {
      icon: Globe,
      title: "Your own subdomain",
      desc: "A branded URL like yourbusiness.vasool.app — your customers log in to something that feels like yours, not a generic app.",
    },
    {
      icon: Building2,
      title: "Built for resellers too",
      desc: "Running finance services for multiple businesses? White-label lets you offer a branded lending platform to each, on isolated infrastructure.",
    },
    {
      icon: ToggleRight,
      title: "Per-business feature flags",
      desc: "Turn modules on or off per deployment so each branded instance shows only the features that business needs.",
    },
    {
      icon: Smartphone,
      title: "Branded mobile experience",
      desc: "Field agents and admins use an app that carries your identity — consistent branding from office to doorstep.",
    },
    {
      icon: Sparkles,
      title: "Full platform underneath",
      desc: "Voice entry, gold and EMI loans, GPS staff tracking, reports — the complete Vasool platform, wearing your brand.",
    },
  ],
  featuresHeading: "Make the whole platform yours",
  featuresSub:
    "White-labeling isn't a logo swap — it's a fully branded lending platform on infrastructure isolated to your business.",
  steps: [
    {
      title: "Share your brand",
      desc: "Send your business name, logo, and colours, and pick your subdomain.",
    },
    {
      title: "We brand your instance",
      desc: "Your isolated deployment is set up with your identity across app, dashboard, and portal.",
    },
    {
      title: "Choose your modules",
      desc: "Enable the loan types and features your business uses with per-tenant feature flags.",
    },
    {
      title: "Launch as your own",
      desc: "Your staff and customers use a branded platform at your subdomain — it's your product.",
    },
  ],
  stepsHeading: "How white-labeling works with Vasool",
  prose: [
    {
      heading: "Why a branded app matters in lending",
      paragraphs: [
        "Lending is a relationship business built on trust. When your customers download a generic vasool app or log in to a portal with someone else's name on it, that trust leaks to the software vendor instead of building your brand. A white-label platform keeps every interaction — the app icon, the login screen, the PDF receipt — pointing back to you.",
        "For finance businesses that want to look established, and for service providers who manage lending for others, white-labeling turns a tool into your own product.",
        <>
          See how white-label and the rest of Vasool's differentiators compare
          with typical vasool apps on the{" "}
          <Link to="/compare" className="text-secondary hover:underline">
            comparison page
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Branding on isolated infrastructure",
      paragraphs: [
        <>
          White-labeling on Vasool isn't cosmetic. Each branded instance runs on
          its own{" "}
          <Link
            to="/self-hosted-loan-software"
            className="text-secondary hover:underline"
          >
            isolated infrastructure
          </Link>{" "}
          with a dedicated database, so one business's data never touches
          another's — and you can even self-host your branded instance on your
          own server.
        </>,
        "Underneath the branding sits the complete platform: voice entry collections, every loan type, GPS staff tools, customer self-service, and full reporting — nothing is held back.",
      ],
    },
  ],
  checklist: {
    heading: "What real white-labeling requires",
    sub: "A genuine white-label loan app should give you:",
    items: [
      "Your name and logo across app, dashboard, portal, and receipts",
      "Your own branded subdomain",
      "Isolated infrastructure and a dedicated database per brand",
      "Per-business feature flags to tailor each instance",
      "A branded mobile app for staff and admins",
      "The full feature set underneath — no stripped-down version",
      "The option to self-host your branded instance",
    ],
  },
  faqs: [
    {
      q: "What is a white-label loan collection app?",
      a: "A white-label loan collection app is a complete lending platform you can put your own brand on — your name, logo, and subdomain — so customers and staff experience it as your product. Vasool white-labels the app, web dashboard, customer portal, and PDF receipts, all on infrastructure isolated to your business.",
    },
    {
      q: "Can I get my own branded subdomain?",
      a: "Yes. Your deployment runs on a branded subdomain like yourbusiness.vasool.app, so your customers log in to a URL that feels like yours rather than a generic app.",
    },
    {
      q: "Is white-labeling suitable for resellers?",
      a: "Yes. If you provide finance services to multiple businesses, you can offer each a branded lending platform on its own isolated infrastructure, managed through Vasool's multi-tenant architecture.",
    },
    {
      q: "Do I get the full platform when white-labeling?",
      a: "Yes. White-labeling changes the branding, not the capabilities — voice entry, gold and EMI loans, GPS staff tracking, customer portal, and reporting all come with your branded instance.",
    },
    {
      q: "Can I self-host my white-labeled instance?",
      a: "Yes. A branded instance can run on your own server or even a Raspberry Pi, combining white-label branding with full data ownership on infrastructure you control.",
    },
  ],
  related: [
    { label: "Self-Hosted Loan Software", to: "/self-hosted-loan-software" },
    { label: "Chit Fund & Lending App", to: "/chit-fund-and-lending-app" },
    { label: "Loan Collection App", to: "/loan-collection-app" },
    { label: "Pricing", to: "/pricing" },
    { label: "Compare Vasool", to: "/compare" },
  ],
  ctaHeading: "Put your name on it",
  ctaSub:
    "Book a free demo and see your brand on a full lending platform — app, dashboard, and customer portal.",
};

const WhiteLabelLoanApp = () => <KeywordLanding config={config} />;

export default WhiteLabelLoanApp;
