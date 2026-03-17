import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CalendarDays,
  Package,
  RefreshCw,
  CheckCircle2,
  CreditCard,
  FileText,
  BarChart3,
  Upload,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const loanTypes = [
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

const loanFeatures = [
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

const LoanTypes = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-hero py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Loan <span className="text-gradient">Types</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Purpose-built loan management for every collection cycle — daily,
            weekly, and product-based — with complete lifecycle tools from
            origination to closure.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Loan type deep dives */}
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          {loanTypes.map((loan, idx) => (
            <section key={loan.title}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                {/* Info */}
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

                {/* Features list */}
                <div
                  className={`bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-card ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Capabilities
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
              Common Across All Loan Types
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every loan type benefits from these shared capabilities — built
              into the platform core.
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
              Ready to Manage Your Loan Portfolio?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              All loan types are included out of the box. Configure what you
              need, disable what you don't — per tenant, per deployment.
            </p>
            <a href="tel:+918680901007">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Book a Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default LoanTypes;
