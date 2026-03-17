import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  UserCog,
  Shield,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const staffManagement = [
  {
    icon: UserCog,
    title: "Staff Management",
    description:
      "Add, edit, and manage field staff with complete profiles, contact details, and assignment history.",
  },
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description:
      "Custom roles with granular permissions per resource and action. Control exactly what each role can see, create, edit, or delete.",
  },
  {
    icon: MapPin,
    title: "Staff GPS Tracking",
    description:
      "Real-time location tracking of field officers as they move through their collection routes.",
  },
  {
    icon: History,
    title: "Staff Location History",
    description:
      "Historical GPS trail showing where field staff have been — for visit verification and route analysis.",
  },
  {
    icon: Map,
    title: "Live Staff Map",
    description:
      "See all field staff locations on a single real-time map. Know who is where, right now.",
  },
];

const staffFinancials = [
  {
    icon: Receipt,
    title: "Expense Tracking",
    description:
      "Staff can log daily expenses — travel, food, transportation — with receipt uploads for full transparency.",
  },
  {
    icon: CheckSquare,
    title: "Expense Approval Workflow",
    description:
      "Admin reviews and approves or rejects expense claims. Clear status tracking for both staff and management.",
  },
  {
    icon: Wallet,
    title: "Cash Advance Management",
    description:
      "Issue cash advances to field staff for daily operations. Track outstanding balances and settlement history.",
  },
  {
    icon: ShieldCheck,
    title: "Cash Advance Verification",
    description:
      "Verify and reconcile cash advances against collections and expenses to ensure financial accountability.",
  },
  {
    icon: DollarSign,
    title: "Cash Balance Summary",
    description:
      "Real-time cash position per staff member — advances issued, collections received, expenses claimed, and net balance.",
  },
];

const mobileFeatures = [
  {
    icon: Smartphone,
    title: "Dedicated Mobile App",
    description:
      "Android app purpose-built for field staff. Optimized for one-handed use during daily collections.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Login",
    description:
      "Fingerprint and face recognition authentication — fast, secure, and prevents unauthorized device access.",
  },
  {
    icon: WifiOff,
    title: "Offline Support",
    description:
      "Continue recording collections and customer data even without internet. Syncs automatically when connectivity returns.",
  },
  {
    icon: Wifi,
    title: "Real-time Sync",
    description:
      "When online, data syncs instantly with the admin dashboard — collections, locations, and status updates in real time.",
  },
];

const fieldOperations = [
  "Create new loans on-site during customer visits",
  "Record daily and weekly collections with instant receipts",
  "View assigned route with customer list and pending amounts",
  "Capture customer locations and documents in the field",
  "Log expenses and attach receipt photos on the go",
  "View personal performance metrics and collection targets",
  "Mark route completion with daily collection totals",
  "Access customer profiles, loan history, and contact details",
];

const adminTools = [
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    description:
      "Real-time metrics on each officer's collections, targets, route completion rate, and attendance.",
  },
  {
    icon: Route,
    title: "Route Overview",
    description:
      "Admin view of all staff routes for the day — planned vs. completed, with collection totals per route.",
  },
  {
    icon: Clock,
    title: "Attendance & Field Visits",
    description:
      "Track staff check-in/check-out, field visit timestamps, and time spent at each customer location.",
  },
];

const StaffTools = () => {
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
            Staff <span className="text-gradient">Tools</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Everything your team needs — from field collection apps and GPS
            tracking to expense management, cash advances, and performance
            monitoring.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Staff Management & RBAC */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Staff & Team Management
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Manage your entire field team with role-based access, real-time
              GPS tracking, and a live map showing every agent's location.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {staffManagement.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 p-2 sm:p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-full h-full text-white" />
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
          </section>

          {/* Staff Financials */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Staff Financials
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Track every rupee — expenses, advances, collections, and
              settlements — with approval workflows and real-time balance
              visibility.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {staffFinancials.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-2 sm:p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-full h-full text-white" />
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
          </section>

          {/* Mobile App */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Mobile App for Field Agents
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              A dedicated Android app with offline support, biometric
              authentication, and everything field staff need to handle their
              daily operations.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Mobile features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mobileFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-card rounded-xl p-5 border border-border/50 shadow-card"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-2 mb-3">
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* What staff can do */}
              <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-card">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                  What Staff Can Do in the Field
                </h3>
                <ul className="space-y-3">
                  {fieldOperations.map((item) => (
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
          </section>

          {/* Admin tools for staff oversight */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Admin Oversight Tools
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Management tools for monitoring staff performance, route progress,
              and field activity — all from the admin dashboard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {adminTools.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 p-2 sm:p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-full h-full text-white" />
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
          </section>

          {/* CTA */}
          <div className="text-center">
            <div className="rounded-2xl bg-muted/30 border border-border/50 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Empower Your Field Team
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Give your staff the tools to work efficiently — and your admins
                the visibility to manage confidently. All included in every
                Vasool deployment.
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
      </div>

      <Footer />
    </main>
  );
};

export default StaffTools;
