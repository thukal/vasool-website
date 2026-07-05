import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CalendarDays,
  CalendarRange,
  Package,
  RefreshCw,
  CheckCircle2,
  CreditCard,
  FileText,
  BarChart3,
  Upload,
  Settings2,
  Gem,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLangPage } from "@/lib/i18nPage";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

interface LoanType {
  icon: LucideIcon;
  title: string;
  color: string;
  description: string;
  highlights: string[];
}
interface LoanFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const loanTypesEn: LoanType[] = [
  {
    icon: Calendar,
    title: "Daily Loans",
    color: "from-emerald-500 to-teal-500",
    description:
      "The most common microfinance product — small loans repaid through daily collections by field agents visiting customers on their route.",
    highlights: [
      "Auto-generated daily repayment schedules",
      "Integrated with daily route planning",
      "Real-time collection tracking per agent",
      "Payment receipts (PDF) for every collection",
      "Loan progress cards with monthly breakdowns",
      "Admin daily cash settlement",
    ],
  },
  {
    icon: CalendarDays,
    title: "Weekly Loans",
    color: "from-blue-500 to-cyan-500",
    description:
      "Loans with weekly repayment cycles — ideal for borrowers with weekly income patterns like market vendors and small traders.",
    highlights: [
      "Weekly collection schedule generation",
      "Integrated with weekly route management",
      "Flexible term configurations",
      "Weekly collection summary reports",
      "Overdue tracking per weekly cycle",
      "Route completion tracking with totals",
    ],
  },
  {
    icon: CalendarRange,
    title: "Monthly Loans",
    color: "from-purple-500 to-violet-500",
    description:
      "Loans with monthly repayment cycles — suitable for salaried borrowers, businesses, and customers with monthly income flows.",
    highlights: [
      "Monthly repayment schedule generation",
      "EMI calculation and tracking",
      "Flexible tenure options",
      "Monthly collection summary reports",
      "Overdue tracking per monthly cycle",
      "Integrated with staff route management",
    ],
  },
  {
    icon: Gem,
    title: "Gold Loans",
    color: "from-yellow-500 to-amber-500",
    description:
      "Loans secured against gold ornaments — manage gold valuation, pledging, interest calculation, and redemption with complete tracking.",
    highlights: [
      "Gold item cataloging with weight and purity",
      "Automated valuation based on market rates",
      "Interest calculation (daily/monthly)",
      "Pledge and redemption tracking",
      "Collateral photo documentation",
      "Gold loan renewal and top-up support",
    ],
  },
  {
    icon: Building2,
    title: "Property Loans",
    color: "from-slate-500 to-zinc-500",
    description:
      "Loans secured against property — manage property valuation, document verification, disbursement, and repayment with full lifecycle tracking.",
    highlights: [
      "Property document management",
      "Property valuation tracking",
      "EMI and repayment schedule generation",
      "Document verification workflow",
      "Flexible repayment options (daily/weekly/monthly)",
      "Collateral and lien tracking",
    ],
  },
  {
    icon: Package,
    title: "Product-Based Loans",
    color: "from-orange-500 to-amber-500",
    description:
      "Loans tied to physical products — customers purchase appliances, electronics, or other goods with financing, repaying via daily or weekly collections.",
    highlights: [
      "Product catalog with categories and photos",
      "Product pricing with MRP and loan amount",
      "Down payment tracking",
      "Supports both daily and weekly repayment",
      "Product image upload and management",
      "Linked to customer and route systems",
    ],
  },
];

const loanTypesTa: LoanType[] = [
  {
    icon: Calendar,
    title: "Daily Loans",
    color: "from-emerald-500 to-teal-500",
    description:
      "மிகவும் common-ஆன microfinance product — field agent-கள் route-ல customer-களை visit பண்ணி தினசரி collection மூலமா வாங்கற small loans.",
    highlights: [
      "Auto-generate ஆகற daily repayment schedule",
      "Daily route planning-உடன் integrate",
      "Agent-வாரியா real-time collection tracking",
      "ஒவ்வொரு collection-க்கும் PDF receipt",
      "Monthly breakdown உள்ள loan progress card",
      "Admin daily cash settlement",
    ],
  },
  {
    icon: CalendarDays,
    title: "Weekly Loans",
    color: "from-blue-500 to-cyan-500",
    description:
      "Weekly repayment cycle உள்ள loans — market vendor, small trader மாதிரி weekly income வர்றவங்களுக்கு ideal.",
    highlights: [
      "Weekly collection schedule generation",
      "Weekly route management-உடன் integrate",
      "Flexible term configuration",
      "Weekly collection summary report",
      "Weekly cycle-வாரியா overdue tracking",
      "Total-உடன் route completion tracking",
    ],
  },
  {
    icon: CalendarRange,
    title: "Monthly Loans",
    color: "from-purple-500 to-violet-500",
    description:
      "Monthly repayment cycle உள்ள loans — salary வாங்கறவங்க, business மற்றும் monthly income உள்ள customer-களுக்கு suitable.",
    highlights: [
      "Monthly repayment schedule generation",
      "EMI calculation மற்றும் tracking",
      "Flexible tenure options",
      "Monthly collection summary report",
      "Monthly cycle-வாரியா overdue tracking",
      "Staff route management-உடன் integrate",
    ],
  },
  {
    icon: Gem,
    title: "Gold Loans",
    color: "from-yellow-500 to-amber-500",
    description:
      "தங்க நகை மேல secure பண்ணப்பட்ட loans — gold valuation, pledging, interest calculation மற்றும் redemption-ஐ முழு tracking-உடன் manage பண்ணுங்க.",
    highlights: [
      "Weight மற்றும் purity-உடன் gold item cataloging",
      "Market rate அடிப்படையில் automated valuation",
      "Interest calculation (daily/monthly)",
      "Pledge மற்றும் redemption tracking",
      "Collateral photo documentation",
      "Gold loan renewal மற்றும் top-up support",
    ],
  },
  {
    icon: Building2,
    title: "Property Loans",
    color: "from-slate-500 to-zinc-500",
    description:
      "சொத்து மேல secure பண்ணப்பட்ட loans — property valuation, document verification, disbursement மற்றும் repayment-ஐ முழு lifecycle tracking-உடன் manage பண்ணுங்க.",
    highlights: [
      "Property document management",
      "Property valuation tracking",
      "EMI மற்றும் repayment schedule generation",
      "Document verification workflow",
      "Flexible repayment (daily/weekly/monthly)",
      "Collateral மற்றும் lien tracking",
    ],
  },
  {
    icon: Package,
    title: "Product-Based Loans",
    color: "from-orange-500 to-amber-500",
    description:
      "Physical product-உடன் இணைந்த loans — customer-கள் appliance, electronics மாதிரி goods-ஐ financing-ல வாங்கி, daily அல்லது weekly collection மூலமா கட்டுவாங்க.",
    highlights: [
      "Category மற்றும் photo-உடன் product catalog",
      "MRP மற்றும் loan amount-உடன் product pricing",
      "Down payment tracking",
      "Daily மற்றும் weekly repayment ரெண்டையும் support",
      "Product image upload மற்றும் management",
      "Customer மற்றும் route system-உடன் link",
    ],
  },
];

const loanFeaturesEn: LoanFeature[] = [
  {
    icon: RefreshCw,
    title: "Loan Renewal",
    description:
      "Seamlessly renew completed or active loans. Carry forward customer details, create new repayment schedules, and maintain the full loan history chain.",
  },
  {
    icon: FileText,
    title: "Repayment Schedules",
    description:
      "Auto-generated repayment plans for each loan based on amount, term, and collection frequency. Staff and customers always know what's due.",
  },
  {
    icon: BarChart3,
    title: "Loan Progress Tracking",
    description:
      "Visual progress indicators showing how much of each loan has been collected, with monthly breakdowns and completion percentage.",
  },
  {
    icon: CreditCard,
    title: "Loan Closure Cards",
    description:
      "Summary cards for completed loans showing total collected, duration, payment regularity, and closure details for quick reference.",
  },
  {
    icon: Upload,
    title: "CSV Bulk Import",
    description:
      "Import multiple loans at once via CSV upload. Migrate existing portfolios or onboard batches of new loans efficiently.",
  },
  {
    icon: Settings2,
    title: "Loan Deduction Configuration",
    description:
      "Configure deduction rules — commission, insurance, processing fees — applied automatically to loan disbursements. Fully customizable per tenant.",
  },
];

const loanFeaturesTa: LoanFeature[] = [
  {
    icon: RefreshCw,
    title: "Loan Renewal",
    description:
      "முடிஞ்ச அல்லது active loan-ஐ easy-ஆ renew பண்ணுங்க. Customer details-ஐ carry forward பண்ணி, புது repayment schedule create பண்ணி, முழு loan history chain-ஐ maintain பண்ணுங்க.",
  },
  {
    icon: FileText,
    title: "Repayment Schedules",
    description:
      "Amount, term மற்றும் collection frequency அடிப்படையில் ஒவ்வொரு loan-க்கும் auto-generate ஆகற repayment plan. Staff-உம் customer-உம் என்ன due-னு எப்பவும் தெரியும்.",
  },
  {
    icon: BarChart3,
    title: "Loan Progress Tracking",
    description:
      "ஒவ்வொரு loan-ல எவ்வளவு collect ஆச்சு-னு காட்டற visual progress indicator, monthly breakdown மற்றும் completion percentage-உடன்.",
  },
  {
    icon: CreditCard,
    title: "Loan Closure Cards",
    description:
      "முடிஞ்ச loan-களுக்கு total collected, duration, payment regularity மற்றும் closure details காட்டற summary card.",
  },
  {
    icon: Upload,
    title: "CSV Bulk Import",
    description:
      "CSV upload மூலமா ஒரே நேரத்தில் பல loan import பண்ணுங்க. இருக்கற portfolio-ஐ migrate பண்ணுங்க அல்லது புது loan batch-ஐ easy-ஆ onboard பண்ணுங்க.",
  },
  {
    icon: Settings2,
    title: "Loan Deduction Configuration",
    description:
      "Commission, insurance, processing fee மாதிரி deduction rule-ஐ loan disbursement-ல automatic-ஆ apply பண்ணுங்க. Tenant-வாரியா முழுசா customizable.",
  },
];

const copy = {
  en: {
    title: "Loan Types - Daily, Weekly, Monthly & Gold Loans | Vasool",
    description:
      "Manage all types of microfinance loans with Vasool: daily loans, weekly loans, monthly loans, gold loans, property loans, and product-based loans. Complete lifecycle management from origination to closure.",
    back: "Back to Home",
    h1a: "Loan",
    h1b: "Types",
    intro:
      "Purpose-built loan management for every collection cycle — daily, weekly, monthly, gold loan, property loan, and product-based — with complete lifecycle tools from origination to closure.",
    capabilities: "Key Capabilities",
    commonTitle: "Common Across All Loan Types",
    commonText:
      "Every loan type benefits from these shared capabilities — built into the platform core.",
    ctaTitle: "Ready to Manage Your Loan Portfolio?",
    ctaText:
      "All loan types are included out of the box. Configure what you need, disable what you don't — per tenant, per deployment.",
    ctaBtn: "Book a Demo",
  },
  ta: {
    title: "Vasool Loan Types - Daily, Weekly, Monthly & Gold Loans",
    description:
      "Vasool-ல எல்லா மாதிரியான microfinance loan-ஐயும் manage பண்ணுங்க: daily, weekly, monthly, gold, property மற்றும் product-based loan. Origination முதல் closure வரை முழு lifecycle management.",
    back: "Home-க்கு திரும்பு",
    h1a: "Loan",
    h1b: "Types",
    intro:
      "ஒவ்வொரு collection cycle-க்கும் purpose-built loan management — daily, weekly, monthly, gold loan, property loan மற்றும் product-based — origination முதல் closure வரை முழு lifecycle tools-உடன்.",
    capabilities: "Key Capabilities",
    commonTitle: "எல்லா Loan Type-க்கும் Common",
    commonText:
      "ஒவ்வொரு loan type-உம் இந்த shared capabilities-ஐ பயன்படுத்தும் — platform core-ல build பண்ணப்பட்டது.",
    ctaTitle: "உங்க Loan Portfolio-ஐ Manage பண்ண தயாரா?",
    ctaText:
      "எல்லா loan type-உம் out of the box வரும். தேவையானதை configure பண்ணுங்க, தேவையில்லாததை disable பண்ணுங்க — tenant-வாரியா, deployment-வாரியா.",
    ctaBtn: "Demo Book பண்ணுங்க",
  },
};

const LoanTypes = () => {
  const { i18n } = useTranslation();
  const { isTamil, canonical, alternates, ogLocale } = useLangPage("/loan-types");
  const c = isTamil ? copy.ta : copy.en;
  const loanTypes = isTamil ? loanTypesTa : loanTypesEn;
  const loanFeatures = isTamil ? loanFeaturesTa : loanFeaturesEn;

  return (
    <main className="min-h-screen">
      <SEO
        title={c.title}
        description={c.description}
        keywords="daily loan software, weekly loan management, monthly loan tracking, gold loan software, property loan management, product loan app, microfinance loan types, EMI loan management, loan collection software, loan repayment tracking"
        canonical={canonical}
        ogLocale={ogLocale}
        alternates={alternates}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vasool.app/" },
            { "@type": "ListItem", "position": 2, "name": "Loan Types", "item": `https://vasool.app${canonical}` },
          ],
        }}
      />
      {/* Header */}
      <div className="bg-hero py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to={isTamil ? "/ta" : "/"}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.back}
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            {c.h1a} <span className="text-gradient">{c.h1b}</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            {c.intro}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Loan type deep dives */}
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          {loanTypes.map((loan, idx) => (
            <section key={loan.title}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${loan.color} p-2.5 sm:p-3`}
                    >
                      <loan.icon className="w-full h-full text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {loan.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {loan.description}
                  </p>
                </div>

                <div
                  className={`bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-card ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {c.capabilities}
                  </h3>
                  <ul className="space-y-3">
                    {loan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {idx < loanTypes.length - 1 && (
                <div className="border-b border-border/30 mt-16 sm:mt-20" />
              )}
            </section>
          ))}
        </div>

        {/* Common loan features */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {c.commonTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {c.commonText}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {loanFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center mt-16 sm:mt-20">
          <div className="rounded-2xl bg-muted/30 border border-border/50 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {c.ctaTitle}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {c.ctaText}
            </p>
            <a href={CONTACT_PHONE_HREF}>
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                {c.ctaBtn}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer key={i18n.language} />
    </main>
  );
};

export default LoanTypes;
