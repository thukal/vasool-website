import Hero from "@/components/Hero";
import LoanTypesSection from "@/components/LoanTypesSection";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import StaffHighlight from "@/components/StaffHighlight";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const homeFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Vasool App?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vasool App is a complete multi-tenant microfinance loan management system for daily, weekly, and monthly finance collection. It includes features like gold loan management, property loan tracking, live GPS tracking, route planning, staff monitoring, and business analytics."
      }
    },
    {
      "@type": "Question",
      "name": "What types of loans does Vasool support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vasool supports daily loans, weekly loans, monthly loans, gold loans, property loans, and product-based loans. Each loan type has dedicated collection workflows, repayment schedules, and tracking features."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vasool available on Android and iOS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Vasool is available on Android (Google Play Store), iOS (Apple App Store), and as a web application. The mobile app includes offline support, GPS tracking, biometric login, and real-time sync."
      }
    },
    {
      "@type": "Question",
      "name": "How does Vasool handle data security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vasool uses multi-tenant data isolation, JWT authentication, end-to-end encryption, biometric login, role-based access control, and comprehensive audit logging. Each tenant gets completely isolated data on infrastructure they control."
      }
    },
    {
      "@type": "Question",
      "name": "Can Vasool track field staff in real time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Vasool provides real-time GPS tracking of field agents, live staff maps, location history, route planning, and route completion tracking with daily collection totals."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vasool free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vasool offers a free plan to get started. All features are included in every deployment with no upsells or premium tiers. Contact us for pricing details for your microfinance business."
      }
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vasool",
  "alternateName": ["Vasool App", "Vasool Drive"],
  "url": "https://vasool.app",
  "description": "Complete multi-tenant microfinance loan management system for daily, weekly, and monthly finance collection.",
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
        title="Vasool App - #1 Daily, Weekly & Monthly Finance Collection Software for Micro Finance"
        description="Vasool App is the best microfinance loan management software for daily, weekly & monthly finance collection. Features include gold loan, property loan, live GPS tracking, route planning, staff monitoring, EMI collection & analytics. Free download on Android & iOS."
        keywords="vasool, vasool app, vasool drive, microfinance software, loan management software, micro finance app, money lending software, microfinance loan management, collection management app, loan tracking software, EMI collection app, multi-tenant loan software, finance collection app, gold loan software, property loan management, live tracking app, daily collection software, weekly collection app, monthly collection software, online finance collection, best microfinance app, microfinance app india, chit fund software, lending app, loan recovery software, field collection app, vasool book, vasool easy, vasool lite, finance software tamil nadu"
        canonical="/"
        structuredData={[homeFAQ, websiteSchema]}
      />
      <Hero />
      <LoanTypesSection />
      <FeaturesHighlight />
      <StaffHighlight />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
