import Hero from "@/components/Hero";
import LoanTypesSection from "@/components/LoanTypesSection";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import StaffHighlight from "@/components/StaffHighlight";
import FAQSection, { faqItems } from "@/components/FAQSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vasool",
  "alternateName": ["Vasool App", "Vasool Drive"],
  "url": "https://vasool.app",
  "description": "Voice entry loan collection app for money lenders and micro finance — daily, weekly, and monthly finance collection with photo proof, gold loans, EMI, and GPS staff tracking.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://vasool.app/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Vasool App - Voice Entry Loan Collection App for Money Lenders | Daily, Weekly & Monthly Finance"
        description="Vasool App is a voice entry loan collection app for money lenders & micro finance. Speak to record daily, weekly & monthly collections, attach photo proof, manage gold loans, EMI, GPS staff tracking & analytics — works offline. Free on Android & iOS."
        keywords="vasool, vasool app, voice entry collection app, voice based vasool app, photo proof collection app, money lender app, loan collection app, daily collection app, finance management app, digital ledger app for money lenders, micro finance app india, debt collection app, vasool drive, vasool book, vasool diary, vasool note, line vasool, kandhu vatti app, thandal app, vasooli app, byaj wasooli app, udhar khata app, ugrani app, pigmy collection app, EMI collection app, loan tracker app, borrower management software, collection agent app, lending ledger app, interest calculation app, gold loan software, microfinance software, finance software tamil nadu"
        canonical="/"
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
