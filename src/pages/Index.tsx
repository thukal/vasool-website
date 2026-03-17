import Hero from "@/components/Hero";
import LoanTypesSection from "@/components/LoanTypesSection";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import StaffHighlight from "@/components/StaffHighlight";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
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
