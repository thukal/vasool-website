import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  UserCog,
  Shield,
  EyeOff,
  UserCheck,
  MapPin,
  History,
  Map,
  Receipt,
  CheckSquare,
  Wallet,
  ShieldCheck,
  DollarSign,
  Smartphone,
  Wifi,
  WifiOff,
  Fingerprint,
  BarChart3,
  Clock,
  Route,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLangPage } from "@/lib/i18nPage";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

interface Item {
  icon: LucideIcon;
  title: string;
  description: string;
}

const staffManagement = (ta: boolean): Item[] => [
  { icon: UserCog, title: "Staff Management", description: ta ? "Complete profile, contact details மற்றும் assignment history-உடன் field staff-ஐ add, edit மற்றும் manage பண்ணுங்க." : "Add, edit, and manage field staff with complete profiles, contact details, and assignment history." },
  { icon: Shield, title: "Role-Based Access Control", description: ta ? "Resource மற்றும் action-வாரியா granular permission உள்ள custom roles. ஒவ்வொரு role-உம் என்ன பார்க்கலாம், create/edit/delete பண்ணலாம்னு control பண்ணுங்க." : "Custom roles with granular permissions per resource and action. Control exactly what each role can see, create, edit, or delete." },
  { icon: EyeOff, title: "View Own vs View All", description: ta ? "Ovvoru role-உம் default-ஆ தன்னோட customer மற்றும் loan-ஐ மட்டும் பார்க்கும். Resource-வாரியா View All tick பண்ணா மட்டுமே முழு book தெரியும் — manager எல்லா customer-ஐயும் பார்க்கலாம், ஆனா தன்னோட loan-ஐ மட்டும்னு set பண்ணலாம்." : "Roles default to seeing only their own customers and loans. Tick View All per resource to widen it — a manager can see every customer but only their own loans. No field phone holds the whole book unless you say so." },
  { icon: UserCheck, title: "Approvals Inbox", description: ta ? "Staff-ஓட create, edit, delete-ஐ approve ஆகற வரைக்கும் hold பண்ணுங்க. Request assign பண்ணப்பட்ட approver-க்கு போகும், approve ஆனா மட்டுமே apply ஆகும் — ரெண்டு முடிவும் audit log-ல." : "Hold a staff member's create, edit or delete until it's approved. The request routes to the assigned approver and applies only on approval — with both outcomes on the audit log. Enable it per role and per resource." },
  { icon: MapPin, title: "Staff GPS Tracking", description: ta ? "Field officer-கள் collection route-ல போகும்போது real-time location tracking." : "Real-time location tracking of field officers as they move through their collection routes." },
  { icon: History, title: "Staff Location History", description: ta ? "Field staff எங்க போனாங்கனு காட்டற historical GPS trail — visit verification மற்றும் route analysis-க்கு." : "Historical GPS trail showing where field staff have been — for visit verification and route analysis." },
  { icon: Map, title: "Live Staff Map", description: ta ? "எல்லா field staff location-ஐயும் ஒரே real-time map-ல பாருங்க. யார் எங்க இருக்காங்கனு இப்பவே தெரியும்." : "See all field staff locations on a single real-time map. Know who is where, right now." },
  { icon: Clock, title: "Staff Attendance", description: ta ? "Field-லிருந்து staff self-mark பண்ணுவாங்க (GPS-உடன்), owner approve/reject பண்ணுவாங்க. Present/Absent-ஐ track பண்ணி monthly summary + CSV export எடுங்க." : "Staff self-mark attendance from the field with GPS; the owner approves or rejects. Track present/absent with a monthly summary and CSV export." },
];

const staffFinancials = (ta: boolean): Item[] => [
  { icon: Receipt, title: "Income & Expense Ledger", description: ta ? "வருமானம் (CREDIT) மற்றும் செலவு (DEBIT) ரெண்டையும் ஒரே ledger-ல receipt photo-உடன் log பண்ணுங்க. Admin entry-ஐ edit/backdate பண்ணலாம் — Day Book மற்றும் P&L report-க்கு feed ஆகும்." : "Log both income (credit) and expenses (debit) in one ledger with receipt photos. Admins can add, edit, and backdate entries — feeding the Day Book and Profit & Loss reports." },
  { icon: CheckSquare, title: "Day Book & Cash Settlement", description: ta ? "ஒவ்வொரு route-க்கும் day book — collection, expense, advance மற்றும் net cash position. நாள் முடிவில் field staff-க்கும் admin-க்கும் cash reconcile பண்ணுங்க." : "A day book per route — collections, expenses, advances, and net cash position. Reconcile end-of-day cash between field staff and admin." },
  { icon: Wallet, title: "Cash Advance Management", description: ta ? "Daily operation-க்கு field staff-க்கு cash advance கொடுங்க. Outstanding balance மற்றும் settlement history-ஐ track பண்ணுங்க." : "Issue cash advances to field staff for daily operations. Track outstanding balances and settlement history." },
  { icon: ShieldCheck, title: "Cash Advance Verification", description: ta ? "Financial accountability-க்கு cash advance-ஐ collection மற்றும் expense-க்கு எதிரா verify பண்ணி reconcile பண்ணுங்க." : "Verify and reconcile cash advances against collections and expenses to ensure financial accountability." },
  { icon: DollarSign, title: "Cash Balance Summary", description: ta ? "Staff-வாரியா real-time cash position — advance கொடுத்தது, collection வந்தது, expense claim மற்றும் net balance." : "Real-time cash position per staff member — advances issued, collections received, expenses claimed, and net balance." },
];

const mobileFeatures = (ta: boolean): Item[] => [
  { icon: Smartphone, title: "Dedicated Mobile App", description: ta ? "Field staff-க்காக build பண்ணப்பட்ட Android app. தினசரி collection-க்கு one-handed use-க்கு optimize பண்ணப்பட்டது." : "Android app purpose-built for field staff. Optimized for one-handed use during daily collections." },
  { icon: Fingerprint, title: "Biometric Login", description: ta ? "Fingerprint மற்றும் face recognition authentication — fast, secure, unauthorized device access-ஐ தடுக்கும்." : "Fingerprint and face recognition authentication — fast, secure, and prevents unauthorized device access." },
  { icon: WifiOff, title: "Offline Support", description: ta ? "Internet illama kooda collection மற்றும் customer data record பண்ணுங்க. Connectivity திரும்ப வந்தவுடன் automatic-ஆ sync ஆகும்." : "Continue recording collections and customer data even without internet. Syncs automatically when connectivity returns." },
  { icon: Wifi, title: "Real-time Sync", description: ta ? "Online-ல இருக்கும்போது data instant-ஆ admin dashboard-உடன் sync ஆகும் — collection, location, status update real-time." : "When online, data syncs instantly with the admin dashboard — collections, locations, and status updates in real time." },
];

const fieldOperationsEn = [
  "Create new loans on-site during customer visits",
  "Record daily and weekly collections with instant receipts",
  "View assigned route with customer list and pending amounts",
  "Capture customer locations and documents in the field",
  "Log expenses and attach receipt photos on the go",
  "View personal performance metrics and collection targets",
  "Mark route completion with daily collection totals",
  "Access customer profiles, loan history, and contact details",
];
const fieldOperationsTa = [
  "Customer visit-ன்போது on-site-ல புது loan create பண்ணுங்க",
  "Instant receipt-உடன் daily மற்றும் weekly collection record பண்ணுங்க",
  "Customer list மற்றும் pending amount-உடன் assign ஆன route-ஐ பாருங்க",
  "Field-ல customer location மற்றும் document capture பண்ணுங்க",
  "போகும் வழியில் expense log பண்ணி receipt photo attach பண்ணுங்க",
  "Personal performance metric மற்றும் collection target-ஐ பாருங்க",
  "Daily collection total-உடன் route completion mark பண்ணுங்க",
  "Customer profile, loan history மற்றும் contact details access பண்ணுங்க",
];

const adminTools = (ta: boolean): Item[] => [
  { icon: BarChart3, title: "Performance Dashboard", description: ta ? "ஒவ்வொரு officer-ஓட collection, target, route completion rate மற்றும் attendance மேல real-time metrics." : "Real-time metrics on each officer's collections, targets, route completion rate, and attendance." },
  { icon: Route, title: "Route Overview", description: ta ? "அன்றைய எல்லா staff route-ஐயும் admin view-ல — planned vs completed, route-வாரியா collection total-உடன்." : "Admin view of all staff routes for the day — planned vs. completed, with collection totals per route." },
  { icon: Clock, title: "Attendance & Field Visits", description: ta ? "Staff check-in/check-out, field visit timestamp மற்றும் ஒவ்வொரு customer location-ல செலவழிச்ச நேரத்தை track பண்ணுங்க." : "Track staff check-in/check-out, field visit timestamps, and time spent at each customer location." },
];

const copy = {
  en: {
    title: "Staff Tools - GPS Tracking & Field Collection | Vasool",
    description:
      "Empower your field team with Vasool's staff tools: real-time GPS tracking, dedicated Android app with offline support, expense management, cash advances, biometric login, route planning, and performance monitoring.",
    back: "Back to Home",
    h1a: "Staff",
    h1b: "Tools",
    intro:
      "Everything your team needs — from field collection apps and GPS tracking to expense management, cash advances, and performance monitoring.",
    sec1Title: "Staff & Team Management",
    sec1Text: "Manage your entire field team with role-based access, real-time GPS tracking, and a live map showing every agent's location.",
    sec2Title: "Staff Financials",
    sec2Text: "Track every rupee — income, expenses, advances, collections, and settlements — with a day-book ledger and real-time balance visibility.",
    sec3Title: "Mobile App for Field Agents",
    sec3Text: "A dedicated Android app with offline support, biometric authentication, and everything field staff need to handle their daily operations.",
    fieldTitle: "What Staff Can Do in the Field",
    sec4Title: "Admin Oversight Tools",
    sec4Text: "Management tools for monitoring staff performance, route progress, and field activity — all from the admin dashboard.",
    ctaTitle: "Empower Your Field Team",
    ctaText: "Give your staff the tools to work efficiently — and your admins the visibility to manage confidently. All included in every Vasool deployment.",
    ctaBtn: "Book a Demo",
  },
  ta: {
    title: "Vasool Staff Tools - GPS Tracking & Field Collection",
    description:
      "Vasool staff tools-ஆல உங்க field team-ஐ powerful ஆக்குங்க: real-time GPS tracking, offline support உள்ள Android app, expense management, cash advance, biometric login, route planning மற்றும் performance monitoring.",
    back: "Home-க்கு திரும்பு",
    h1a: "Staff",
    h1b: "Tools",
    intro:
      "உங்க team-க்கு தேவையான எல்லாமே — field collection app, GPS tracking முதல் expense management, cash advance மற்றும் performance monitoring வரை.",
    sec1Title: "Staff & Team Management",
    sec1Text: "Role-based access, real-time GPS tracking மற்றும் ஒவ்வொரு agent location-ஐயும் காட்டற live map-உடன் உங்க முழு field team-ஐ manage பண்ணுங்க.",
    sec2Title: "Staff Financials",
    sec2Text: "ஒவ்வொரு ரூபாயையும் track பண்ணுங்க — income, expense, advance, collection மற்றும் settlement — day-book ledger மற்றும் real-time balance visibility-உடன்.",
    sec3Title: "Field Agent-களுக்கான Mobile App",
    sec3Text: "Offline support, biometric authentication மற்றும் field staff-க்கு daily operation handle பண்ண தேவையான எல்லாத்துடனும் ஒரு dedicated Android app.",
    fieldTitle: "Field-ல Staff என்ன பண்ணலாம்",
    sec4Title: "Admin Oversight Tools",
    sec4Text: "Staff performance, route progress மற்றும் field activity-ஐ monitor பண்ண management tools — எல்லாமே admin dashboard-லிருந்து.",
    ctaTitle: "உங்க Field Team-ஐ Powerful ஆக்குங்க",
    ctaText: "Efficient-ஆ வேலை செய்ய staff-க்கு tools கொடுங்க — confident-ஆ manage பண்ண admin-க்கு visibility கொடுங்க. ஒவ்வொரு Vasool deployment-லயும் இது அடங்கும்.",
    ctaBtn: "Demo Book பண்ணுங்க",
  },
};

const cardCls =
  "group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1";

const StaffTools = () => {
  const { i18n } = useTranslation();
  const { isTamil, canonical, alternates, ogLocale } = useLangPage("/staff-tools");
  const c = isTamil ? copy.ta : copy.en;
  const sm = staffManagement(isTamil);
  const sf = staffFinancials(isTamil);
  const mf = mobileFeatures(isTamil);
  const at = adminTools(isTamil);
  const fieldOps = isTamil ? fieldOperationsTa : fieldOperationsEn;

  return (
    <main className="min-h-screen">
      <Navigation />
      <SEO
        title={c.title}
        description={c.description}
        keywords="field staff tracking app, GPS tracking microfinance, collection agent app, field staff management, mobile collection app, offline collection app, staff expense tracking, cash advance management, biometric login app, route planning software"
        canonical={canonical}
        ogLocale={ogLocale}
        alternates={alternates}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vasool.app/" },
            { "@type": "ListItem", "position": 2, "name": "Staff Tools", "item": `https://vasool.app${canonical}` },
          ],
        }}
      />
      {/* Header */}
      <div className="bg-muted/40 border-b border-border pt-24 pb-12 sm:pt-28 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to={isTamil ? "/ta" : "/"}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.back}
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            {c.h1a} <span className="text-gradient">{c.h1b}</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            {c.intro}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Staff Management & RBAC */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{c.sec1Title}</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">{c.sec1Text}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {sm.map((feature) => (
                <div key={feature.title} className={cardCls}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/10 p-2 sm:p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-full h-full text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Staff Financials */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{c.sec2Title}</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">{c.sec2Text}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {sf.map((feature) => (
                <div key={feature.title} className={cardCls}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/10 p-2 sm:p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-full h-full text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile App */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{c.sec3Title}</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">{c.sec3Text}</p>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mf.map((feature) => (
                  <div key={feature.title} className="bg-card rounded-xl p-5 border border-border/50 shadow-card">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 p-2 mb-3">
                      <feature.icon className="w-full h-full text-secondary" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-card">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">{c.fieldTitle}</h3>
                <ul className="space-y-3">
                  {fieldOps.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Admin tools */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{c.sec4Title}</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">{c.sec4Text}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {at.map((feature) => (
                <div key={feature.title} className={cardCls}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/10 p-2 sm:p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-full h-full text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <div className="rounded-2xl bg-muted/30 border border-border/50 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{c.ctaTitle}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{c.ctaText}</p>
              <a href={CONTACT_PHONE_HREF}>
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  {c.ctaBtn}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer key={i18n.language} />
    </main>
  );
};

export default StaffTools;
