import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero";
import LoanTypesSection from "@/components/LoanTypesSection";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import StaffHighlight from "@/components/StaffHighlight";
import FAQSection, { useHomeFaq } from "@/components/FAQSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const BASE_URL = "https://vasool.app";

// Reciprocal hreflang set shared by the English (/) and Tamil (/ta) homepages.
const homeAlternates = [
  { hreflang: "en", href: `${BASE_URL}/` },
  { hreflang: "ta", href: `${BASE_URL}/ta` },
  { hreflang: "x-default", href: `${BASE_URL}/` },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vasool",
  "alternateName": ["Vasool App", "Vasool Drive"],
  "url": "https://vasool.app",
  "description":
    "Voice entry loan collection app for money lenders and micro finance — daily, weekly, and monthly finance collection with photo proof, gold loans, EMI, and GPS staff tracking.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://vasool.app/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// Keywords stay in English on both language versions — search terms like
// "vasool app" and "kandhu vatti app" are queried the same way regardless of
// the page's display language.
const homeKeywords =
  "vasool, vasool app, voice entry collection app, voice based vasool app, photo proof collection app, money lender app, loan collection app, daily collection app, finance management app, digital ledger app for money lenders, micro finance app india, debt collection app, vasool drive, vasool book, vasool diary, vasool note, line vasool, kandhu vatti app, thandal app, vasooli app, byaj wasooli app, udhar khata app, ugrani app, pigmy collection app, EMI collection app, loan tracker app, borrower management software, collection agent app, lending ledger app, interest calculation app, gold loan software, microfinance software, finance software tamil nadu";

const Index = () => {
  const { t, i18n } = useTranslation();
  const isTamil = i18n.language === "ta";
  const faqItems = useHomeFaq();

  const homeFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen">
      <SEO
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        keywords={homeKeywords}
        canonical={isTamil ? "/ta" : "/"}
        ogLocale={isTamil ? "ta_IN" : "en_US"}
        alternates={homeAlternates}
        structuredData={[homeFAQ, websiteSchema]}
      />
      <Hero />
      <LoanTypesSection />
      <FeaturesHighlight />
      <StaffHighlight />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
