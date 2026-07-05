import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Banknote,
  CreditCard,
  MapPin,
  Users,
  BarChart3,
  Shield,
  Package,
  Lock,
  Building2,
  Code2,
  Settings,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLangPage } from "@/lib/i18nPage";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

interface FeatureCategory {
  key: string;
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  features: { name: string; desc: string }[];
}

// Feature names stay in English (product/technical terms read naturally in
// Tanglish); titles and descriptions are localized.
const categoriesEn: FeatureCategory[] = [
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

// Tanglish: Tamil-script sentences with English product/technical terms kept inline.
const categoriesTa: FeatureCategory[] = [
  {
    key: "coreLoan",
    icon: Banknote,
    color: "from-emerald-500 to-teal-500",
    title: "Core Loan Management",
    description:
      "எல்லா loan type-க்கும் முழு lifecycle management — origination, disbursement முதல் repayment tracking மற்றும் closure வரை.",
    features: [
      { name: "Daily Loans", desc: "தினசரி repayment microfinance loan-ஐ create, track மற்றும் collect பண்ணுங்க" },
      { name: "Weekly Loans", desc: "Flexible term உள்ள weekly collection cycle loans" },
      { name: "Product-Based Loans", desc: "Photo, pricing, down payment மற்றும் category management உள்ள physical product loans" },
      { name: "Loan Renewal", desc: "முடிஞ்ச அல்லது active loan-ஐ easy-ஆ renew பண்ணுங்க" },
      { name: "Repayment Schedules", desc: "ஒவ்வொரு loan-க்கும் auto-generate ஆகற repayment plan" },
      { name: "Loan Progress Tracking", desc: "Monthly breakdown-உடன் loan completion-ஐ visual-ஆ பாருங்க" },
      { name: "Loan Closure Cards", desc: "முடிஞ்ச loan-களுக்கு summary card" },
      { name: "CSV Bulk Import", desc: "CSV upload மூலமா ஒரே நேரத்தில் பல loan import பண்ணுங்க" },
      { name: "Loan Deduction Config", desc: "Commission, insurance, processing fee மாதிரி deduction rule-ஐ automatic-ஆ apply பண்ணுங்க" },
    ],
  },
  {
    key: "collection",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-500",
    title: "Collection & Payments",
    description:
      "ஒவ்வொரு payment-ஐயும் track பண்ணுங்க, receipt generate பண்ணுங்க, cash reconcile பண்ணுங்க — field-க்காக build பண்ணப்பட்ட daily மற்றும் weekly collection workflow.",
    features: [
      { name: "Daily Collection Tracking", desc: "Loan-க்கு எதிரா daily payment record பண்ணுங்க" },
      { name: "Weekly Collection Tracking", desc: "Loan-க்கு எதிரா weekly payment record பண்ணுங்க" },
      { name: "Payment Receipts", desc: "ஒவ்வொரு payment-க்கும் PDF receipt generate பண்ணுங்க" },
      { name: "Payment History", desc: "ஒவ்வொரு loan-க்கும் முழு payment trail" },
      { name: "Admin Cash Settlement", desc: "Field staff-க்கும் admin-க்கும் இடையே நாள் முடிவில் cash reconciliation" },
    ],
  },
  {
    key: "route",
    icon: MapPin,
    color: "from-orange-500 to-amber-500",
    title: "Route Management",
    description:
      "Collection route plan பண்ணுங்க, staff-க்கு assign பண்ணுங்க, real-time collection total-உடன் completion track பண்ணுங்க.",
    features: [
      { name: "Daily Routes", desc: "Daily collection route plan பண்ணி staff-க்கு assign பண்ணுங்க" },
      { name: "Weekly Routes", desc: "Weekly collection route plan பண்ணி staff-க்கு assign பண்ணுங்க" },
      { name: "Route Items", desc: "Route-ல loan மற்றும் customer add/remove பண்ணுங்க" },
      { name: "Route Completion Tracking", desc: "Collection total-உடன் route-ஐ completed-ஆ mark பண்ணுங்க" },
    ],
  },
  {
    key: "customer",
    icon: Users,
    color: "from-violet-500 to-purple-500",
    title: "Customer Management",
    description:
      "Profile, verification, document, GPS location மற்றும் relationship linking-உடன் முழு customer records.",
    features: [
      { name: "Customer Profiles", desc: "Profile photo-உடன் முழு customer records" },
      { name: "Customer Verification", desc: "Customer identity மற்றும் details-ஐ verify பண்ணுங்க" },
      { name: "Customer Locations", desc: "GPS-based customer location tracking" },
      { name: "Customer Documents", desc: "KYC/identity document upload பண்ணி manage பண்ணுங்க" },
      { name: "Customer Contacts", desc: "Family/friend contact information store பண்ணுங்க" },
      { name: "Customer-Staff Linking", desc: "Customer-ஐ specific field officer-க்கு assign பண்ணுங்க" },
      { name: "Customer-Referee Linking", desc: "Guarantor/referee-ஐ customer-உடன் link பண்ணுங்க" },
    ],
  },
  {
    key: "reporting",
    icon: BarChart3,
    color: "from-indigo-500 to-blue-500",
    title: "Reporting & Analytics",
    description:
      "Collection, officer performance, P&L, overdue tracking மற்றும் இன்னும் பல cover பண்ணற dashboard மற்றும் detailed report.",
    features: [
      { name: "Dashboard", desc: "Active loan, collection, disbursement — key metrics overview" },
      { name: "Staff Route Overview", desc: "அன்றைய எல்லா staff activity-ஐயும் admin view-ல பாருங்க" },
      { name: "Officer Performance Reports", desc: "Officer-வாரியா collection efficiency, attendance, route stats, expense breakdown" },
      { name: "Collection Summary Reports", desc: "Officer மற்றும் loan-type breakdown-உடன் period-வாரியா collection data" },
      { name: "Profit & Loss Reports", desc: "Revenue breakdown, cost analysis, portfolio health, trend tracking" },
      { name: "Advance Balance Reports", desc: "Staff-வாரியா outstanding cash advance balance" },
      { name: "Overdue Loan Reports", desc: "Overdue customer மற்றும் amount-ஐ track பண்ணுங்க" },
      { name: "Staff-Wise Collection Reports", desc: "Staff-வாரியா collection performance" },
      { name: "Daily Collection Reports", desc: "நாள்வாரியா collection details" },
    ],
  },
  {
    key: "referee",
    icon: Shield,
    color: "from-teal-500 to-emerald-500",
    title: "Referee / Guarantor Management",
    description:
      "Loan-க்கு security கொடுக்கற guarantor மற்றும் referee-ஐ customer records-உடன் முழு linking-உடன் manage பண்ணுங்க.",
    features: [
      { name: "Referee Records", desc: "Loan security-க்கான guarantor/referee-ஐ manage பண்ணுங்க" },
      { name: "Referee-Customer Linking", desc: "Referee-ஐ specific customer-உடன் associate பண்ணுங்க" },
    ],
  },
  {
    key: "product",
    icon: Package,
    color: "from-pink-500 to-rose-500",
    title: "Product Catalog",
    description:
      "Category, photo மற்றும் pricing-உடன் product-based loan-களுக்கான product-ஐ manage பண்ணுங்க.",
    features: [
      { name: "Product Categories", desc: "Product-based loan-களுக்கான category-ஐ manage பண்ணுங்க" },
      { name: "Product Photos", desc: "Product loan-களுக்கு product image upload பண்ணுங்க" },
      { name: "Product Pricing", desc: "Product price, down payment மற்றும் loan amount-ஐ track பண்ணுங்க" },
    ],
  },
  {
    key: "security",
    icon: Lock,
    color: "from-red-500 to-orange-500",
    title: "Security & Audit",
    description:
      "Authentication, audit trail மற்றும் attack protection ஒவ்வொரு deployment-லயும் build பண்ணப்பட்ட enterprise-grade security.",
    features: [
      { name: "JWT Authentication", desc: "Secure token-based authentication" },
      { name: "Unified Login", desc: "Admin மற்றும் staff ரெண்டுக்கும் ஒரே login" },
      { name: "Biometric Login", desc: "Mobile biometric/fingerprint authentication support" },
      { name: "Audit Logging", desc: "எல்லா data modification-க்கும் automatic change tracking" },
      { name: "Entity History", desc: "எந்த record-க்கும் முழு change history பாருங்க" },
      { name: "Bot & Attack Protection", desc: "தெரிஞ்ச crawler மற்றும் common attack path-ஐ block பண்ணும்" },
      { name: "Rate Limiting", desc: "Brute force மற்றும் API abuse-க்கு எதிரான protection" },
    ],
  },
  {
    key: "multiTenancy",
    icon: Building2,
    color: "from-cyan-500 to-blue-500",
    title: "Multi-Tenancy & Infrastructure",
    description:
      "ஒவ்வொரு finance company-க்கும் isolated data, custom branding, configurable feature மற்றும் automated provisioning.",
    features: [
      { name: "Multi-Tenant Architecture", desc: "ஒவ்வொரு company-க்கும் isolated data மற்றும் configuration" },
      { name: "Custom Branding", desc: "Tenant-வாரியா app name, tagline, icon மற்றும் support contact" },
      { name: "Per-Tenant Feature Toggles", desc: "Tenant-வாரியா 27+ feature-ஐ enable/disable பண்ணுங்க" },
      { name: "Per-Tenant Storage Limits", desc: "Configurable storage quota (default 7GB)" },
      { name: "Storage Monitoring", desc: "Tenant-வாரியா file storage usage-ஐ track பண்ணுங்க" },
      { name: "Multi-Server Deployment", desc: "பல server-ல tenant-களை distribute பண்ணுங்க" },
      { name: "Automated Provisioning", desc: "புது tenant-க்கு one-command setup" },
      { name: "Automated Deprovisioning", desc: "Tenant infrastructure-ஐ clean-ஆ remove பண்ணுங்க" },
    ],
  },
  {
    key: "api",
    icon: Code2,
    color: "from-purple-500 to-violet-500",
    title: "API & Integration",
    description:
      "Interactive documentation மற்றும் offline sync support-உடன் REST, gRPC மற்றும் gRPC-Web APIs.",
    features: [
      { name: "REST API", desc: "100+ endpoint உள்ள full-featured HTTP/JSON API" },
      { name: "gRPC API", desc: "Native mobile app-க்கான high-performance binary protocol" },
      { name: "gRPC-Web", desc: "Browser மற்றும் React Native compatible gRPC" },
      { name: "Swagger Documentation", desc: "Interactive API documentation" },
      { name: "Offline Sync Support", desc: "Offline-capable mobile client-க்கான feature flag" },
    ],
  },
  {
    key: "operations",
    icon: Settings,
    color: "from-slate-500 to-gray-500",
    title: "Operations",
    description:
      "Reliable day-to-day operation-க்கான database migration, tracing, health check மற்றும் CI/CD.",
    features: [
      { name: "Database Migrations", desc: "எல்லா tenant-லயும் versioned schema management" },
      { name: "Distributed Tracing", desc: "Request tracing-க்கு Jaeger integration" },
      { name: "Health Checks", desc: "Uptime tracking-க்கான endpoint monitoring" },
      { name: "CI/CD Pipeline", desc: "GitHub Actions மூலமா automated testing, building மற்றும் deployment" },
    ],
  },
];

const copy = {
  en: {
    title: "90+ Features - Microfinance Loan Platform",
    description:
      "Explore 90+ features across 11 modules in Vasool's microfinance platform. Core loan management, collection tracking, route planning, customer management, reporting, security, multi-tenancy, and API integration.",
    back: "Back to Home",
    h1a: "Platform",
    h1b: "Features",
    intro: (n: number, m: number) =>
      `${n}+ features across ${m} modules — everything you need to run a complete microfinance operation from a single platform.`,
    statTotal: "Total Features",
    statModules: "Modules",
    statApi: "API Endpoints",
    statToggles: "Feature Toggles",
    featuresLabel: "features",
    ctaTitle: "See It in Action",
    ctaText:
      "Every feature is included in every deployment. No upsells, no premium tiers — just the complete platform configured for your business.",
    ctaBtn: "Book a Demo",
  },
  ta: {
    title: "90+ Features - Microfinance Loan Platform | Vasool",
    description:
      "Vasool microfinance platform-ல 11 module-ல 90+ feature. Core loan management, collection tracking, route planning, customer management, reporting, security, multi-tenancy மற்றும் API integration — எல்லாமே ஒரே platform-ல.",
    back: "Home-க்கு திரும்பு",
    h1a: "Platform",
    h1b: "Features",
    intro: (n: number, m: number) =>
      `${m} module-ல ${n}+ feature — முழு microfinance operation-ஐ ஒரே platform-லிருந்து நடத்த தேவையான எல்லாமே.`,
    statTotal: "Total Features",
    statModules: "Modules",
    statApi: "API Endpoints",
    statToggles: "Feature Toggles",
    featuresLabel: "features",
    ctaTitle: "Live-ஆ பாருங்க",
    ctaText:
      "ஒவ்வொரு deployment-லயும் எல்லா feature-உம் இருக்கு. Upsell இல்ல, premium tier இல்ல — உங்க business-க்கு ஏத்த மாதிரி configure பண்ணப்பட்ட முழு platform.",
    ctaBtn: "Demo Book பண்ணுங்க",
  },
};

const Features = () => {
  const { i18n } = useTranslation();
  const { isTamil, canonical, alternates, ogLocale } = useLangPage("/features");
  const c = isTamil ? copy.ta : copy.en;
  const categories = isTamil ? categoriesTa : categoriesEn;
  const totalFeatures = categories.reduce((sum, x) => sum + x.features.length, 0);

  return (
    <main className="min-h-screen">
      <SEO
        title={c.title}
        description={c.description}
        keywords="microfinance software features, loan management features, collection tracking software, route planning microfinance, customer management lending, microfinance reporting, multi-tenant loan software, lending API, microfinance analytics"
        canonical={canonical}
        ogLocale={ogLocale}
        alternates={alternates}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vasool.app/" },
            { "@type": "ListItem", "position": 2, "name": "Features", "item": `https://vasool.app${canonical}` },
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
            {c.intro(totalFeatures, categories.length)}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{totalFeatures}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">{c.statTotal}</div>
          </div>
          <div className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{categories.length}</div>
            <div className="text-xs sm:text-sm text-muted-foreground">{c.statModules}</div>
          </div>
          <div className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">100+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">{c.statApi}</div>
          </div>
          <div className="text-center p-5 sm:p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">27+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">{c.statToggles}</div>
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
                    {category.features.length} {c.featuresLabel}
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

export default Features;
