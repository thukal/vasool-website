import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Banknote,
  CreditCard,
  MapPin,
  Users,
  UserCog,
  Wallet,
  BarChart3,
  Shield,
  Package,
  Lock,
  Building2,
  Code2,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const categories = [
  {
    key: "coreLoan",
    icon: Banknote,
    color: "from-emerald-500 to-teal-500",
    title: "Core Loan Management",
    description:
      "Complete lifecycle management for all loan types — from origination and disbursement to repayment tracking and closure.",
    features: [
      { name: "Daily Loans", desc: "Create, track, and collect daily repayment microfinance loans" },
      { name: "Weekly Loans", desc: "Weekly collection cycle loans with flexible terms" },
      { name: "Product-Based Loans", desc: "Loans tied to physical products with photos, pricing, down payments, and category management" },
      { name: "Loan Renewal", desc: "Seamlessly renew completed or active loans" },
      { name: "Repayment Schedules", desc: "Auto-generated repayment plans for each loan" },
      { name: "Loan Progress Tracking", desc: "Visual progress of loan completion with monthly breakdowns" },
      { name: "Loan Closure Cards", desc: "Summary cards for completed loans" },
      { name: "CSV Bulk Import", desc: "Import multiple loans at once via CSV upload" },
      { name: "Loan Deduction Config", desc: "Configurable deduction rules (commission, insurance, processing fees) applied automatically" },
    ],
  },
  {
    key: "collection",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-500",
    title: "Collection & Payments",
    description:
      "Track every payment, generate receipts, and reconcile cash — daily and weekly collection workflows built for the field.",
    features: [
      { name: "Daily Collection Tracking", desc: "Record daily payments against loans" },
      { name: "Weekly Collection Tracking", desc: "Record weekly payments against loans" },
      { name: "Payment Receipts", desc: "Generate PDF receipts for each payment" },
      { name: "Payment History", desc: "Full payment trail for every loan" },
      { name: "Admin Cash Settlement", desc: "End-of-day cash reconciliation between field staff and admin" },
    ],
  },
  {
    key: "route",
    icon: MapPin,
    color: "from-orange-500 to-amber-500",
    title: "Route Management",
    description:
      "Plan collection routes, assign them to staff, and track completion with real-time collection totals.",
    features: [
      { name: "Daily Routes", desc: "Plan and assign daily collection routes to staff" },
      { name: "Weekly Routes", desc: "Plan and assign weekly collection routes to staff" },
      { name: "Route Items", desc: "Add/remove loans and customers to routes" },
      { name: "Route Completion Tracking", desc: "Mark routes as completed with collection totals" },
    ],
  },
  {
    key: "customer",
    icon: Users,
    color: "from-violet-500 to-purple-500",
    title: "Customer Management",
    description:
      "Full customer records with profiles, verification, documents, GPS locations, and relationship linking.",
    features: [
      { name: "Customer Profiles", desc: "Full customer records with profile photos" },
      { name: "Customer Verification", desc: "Verify customer identity and details" },
      { name: "Customer Locations", desc: "GPS-based customer location tracking" },
      { name: "Customer Documents", desc: "Upload and manage KYC/identity documents" },
      { name: "Customer Contacts", desc: "Store family/friend contact information" },
      { name: "Customer-Staff Linking", desc: "Assign customers to specific field officers" },
      { name: "Customer-Referee Linking", desc: "Link guarantors/referees to customers" },
    ],
  },
  {
    key: "reporting",
    icon: BarChart3,
    color: "from-indigo-500 to-blue-500",
    title: "Reporting & Analytics",
    description:
      "Dashboards and detailed reports covering collections, officer performance, P&L, overdue tracking, and more.",
    features: [
      { name: "Dashboard", desc: "Key metrics overview — active loans, collections, disbursements" },
      { name: "Staff Route Overview", desc: "Admin view of all staff activity for the day" },
      { name: "Officer Performance Reports", desc: "Collection efficiency, attendance, route stats, expense breakdown per officer" },
      { name: "Collection Summary Reports", desc: "Period-wise collection data with officer and loan-type breakdowns" },
      { name: "Profit & Loss Reports", desc: "Revenue breakdown, cost analysis, portfolio health, trend tracking" },
      { name: "Advance Balance Reports", desc: "Staff-wise outstanding cash advance balances" },
      { name: "Overdue Loan Reports", desc: "Track overdue customers and amounts" },
      { name: "Staff-Wise Collection Reports", desc: "Per-staff collection performance" },
      { name: "Daily Collection Reports", desc: "Day-by-day collection details" },
    ],
  },
  {
    key: "referee",
    icon: Shield,
    color: "from-teal-500 to-emerald-500",
    title: "Referee / Guarantor Management",
    description:
      "Manage guarantors and referees who provide security for loans, with full linking to customer records.",
    features: [
      { name: "Referee Records", desc: "Manage guarantors/referees for loan security" },
      { name: "Referee-Customer Linking", desc: "Associate referees with specific customers" },
    ],
  },
  {
    key: "product",
    icon: Package,
    color: "from-pink-500 to-rose-500",
    title: "Product Catalog",
    description:
      "Manage products for product-based loans with categories, photos, and pricing.",
    features: [
      { name: "Product Categories", desc: "Manage categories for product-based loans" },
      { name: "Product Photos", desc: "Upload product images for product loans" },
      { name: "Product Pricing", desc: "Track product price, down payment, and loan amount" },
    ],
  },
  {
    key: "security",
    icon: Lock,
    color: "from-red-500 to-orange-500",
    title: "Security & Audit",
    description:
      "Enterprise-grade security with authentication, audit trails, and attack protection built into every deployment.",
    features: [
      { name: "JWT Authentication", desc: "Secure token-based authentication" },
      { name: "Unified Login", desc: "Single login for both admin and staff" },
      { name: "Biometric Login", desc: "Mobile biometric/fingerprint authentication support" },
      { name: "Audit Logging", desc: "Automatic change tracking for all data modifications" },
      { name: "Entity History", desc: "View complete change history for any record" },
      { name: "Bot & Attack Protection", desc: "Blocks known crawlers and common attack paths" },
      { name: "Rate Limiting", desc: "Protection against brute force and API abuse" },
    ],
  },
  {
    key: "multiTenancy",
    icon: Building2,
    color: "from-cyan-500 to-blue-500",
    title: "Multi-Tenancy & Infrastructure",
    description:
      "Each finance company gets isolated data, custom branding, configurable features, and automated provisioning.",
    features: [
      { name: "Multi-Tenant Architecture", desc: "Each company gets isolated data and configuration" },
      { name: "Custom Branding", desc: "Per-tenant app name, tagline, icon, and support contact" },
      { name: "Per-Tenant Feature Toggles", desc: "Enable/disable 27+ features per tenant" },
      { name: "Per-Tenant Storage Limits", desc: "Configurable storage quotas (default 7GB)" },
      { name: "Storage Monitoring", desc: "Track and manage per-tenant file storage usage" },
      { name: "Multi-Server Deployment", desc: "Distribute tenants across multiple servers" },
      { name: "Automated Provisioning", desc: "One-command setup for new tenants" },
      { name: "Automated Deprovisioning", desc: "Clean removal of tenant infrastructure" },
    ],
  },
  {
    key: "api",
    icon: Code2,
    color: "from-purple-500 to-violet-500",
    title: "API & Integration",
    description:
      "REST, gRPC, and gRPC-Web APIs with interactive documentation and offline sync support.",
    features: [
      { name: "REST API", desc: "Full-featured HTTP/JSON API with 100+ endpoints" },
      { name: "gRPC API", desc: "High-performance binary protocol for native mobile apps" },
      { name: "gRPC-Web", desc: "Browser and React Native compatible gRPC" },
      { name: "Swagger Documentation", desc: "Interactive API documentation" },
      { name: "Offline Sync Support", desc: "Feature flag for offline-capable mobile clients" },
    ],
  },
  {
    key: "operations",
    icon: Settings,
    color: "from-slate-500 to-gray-500",
    title: "Operations",
    description:
      "Database migrations, tracing, health checks, and CI/CD for reliable day-to-day operations.",
    features: [
      { name: "Database Migrations", desc: "Versioned schema management across all tenants" },
      { name: "Distributed Tracing", desc: "Jaeger integration for request tracing" },
      { name: "Health Checks", desc: "Endpoint monitoring for uptime tracking" },
      { name: "CI/CD Pipeline", desc: "Automated testing, building, and deployment via GitHub Actions" },
    ],
  },
];

const Features = () => {
  const totalFeatures = categories.reduce((sum, c) => sum + c.features.length, 0);

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
            Platform <span className="text-gradient">Features</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            {totalFeatures}+ features across {categories.length} modules — everything
            you need to run a complete microfinance operation from a single platform.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{totalFeatures}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Total Features</div>
          </div>
          <div className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{categories.length}</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Modules</div>
          </div>
          <div className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">100+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">API Endpoints</div>
          </div>
          <div className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">27+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Feature Toggles</div>
          </div>
        </div>

        {/* Category sections */}
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          {categories.map((category, idx) => (
            <section key={category.key} id={category.key}>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} p-2 sm:p-2.5 flex-shrink-0`}
                >
                  <category.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  <span className="text-xs text-muted-foreground">
                    {category.features.length} features
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                {category.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {category.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-start gap-3 bg-card rounded-xl p-4 sm:p-5 border border-border/50 shadow-card"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-foreground mb-0.5">
                        {feature.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {idx < categories.length - 1 && (
                <div className="border-b border-border/30 mt-12 sm:mt-16" />
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center mt-16 sm:mt-20">
          <div className="rounded-2xl bg-muted/30 border border-border/50 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              See It in Action
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Every feature is included in every deployment. No upsells, no
              premium tiers — just the complete platform configured for your
              business.
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

export default Features;
