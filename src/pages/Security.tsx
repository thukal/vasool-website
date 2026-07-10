import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Lock,
  Key,
  Fingerprint,
  Eye,
  Server,
  Users,
  FileCheck,
  ShieldAlert,
  Timer,
  Database,
  GitBranch,
  Building2,
  Info,
  type LucideIcon,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  mailtoHref,
} from "@/lib/contact";

interface SecurityItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const POSTURE = [
  { value: "Zero", label: "Cross-tenant data access" },
  { value: "Your own", label: "Database & server" },
  { value: "TLS", label: "Encrypted in transit" },
  { value: "Full", label: "Audit trail per record" },
];

const GROUPS: { heading: string; blurb: string; items: SecurityItem[] }[] = [
  {
    heading: "Data protection & isolation",
    blurb: "Your borrowers' data stays yours — separated, encrypted, and on infrastructure you control.",
    items: [
      {
        icon: Building2,
        title: "Tenant data isolation",
        description:
          "Each finance company runs in a completely separate database and storage. No tenant can reach another tenant's data under any circumstances.",
      },
      {
        icon: Server,
        title: "You control the infrastructure",
        description:
          "Data lives on servers you provide or designate. Vasool doesn't own or centrally store it — so one breach can never span multiple lenders.",
      },
      {
        icon: Lock,
        title: "Encrypted in transit",
        description:
          "All communication is secured with TLS/SSL using industry-standard protocols, from the field app to the office dashboard.",
      },
      {
        icon: Database,
        title: "Storage limits & monitoring",
        description:
          "Per-tenant storage quotas with real-time usage monitoring keep resource use accountable and predictable.",
      },
    ],
  },
  {
    heading: "Identity & access",
    blurb: "Only the right people reach the right data — down to a single action.",
    items: [
      {
        icon: Key,
        title: "JWT authentication",
        description:
          "Short-lived access tokens with rotating refresh tokens. Every session is cryptographically signed and validated on each request.",
      },
      {
        icon: FileCheck,
        title: "Unified login",
        description:
          "A single secure authentication gateway for admins and staff — fewer credential stores, a smaller attack surface.",
      },
      {
        icon: Fingerprint,
        title: "Biometric login",
        description:
          "Fingerprint and face-recognition unlock on the mobile app protects a field agent's device even if it is lost or stolen.",
      },
      {
        icon: Users,
        title: "Role-based access control",
        description:
          "Granular, custom roles per resource and action. Owners decide exactly what each staff role can view, create, edit, or delete.",
      },
    ],
  },
  {
    heading: "Monitoring & resilience",
    blurb: "Every change is recorded, and abuse is kept out.",
    items: [
      {
        icon: Eye,
        title: "Full audit trail",
        description:
          "Every edit is tracked — who changed what, when, and from where — with complete entity-level history for compliance and disputes.",
      },
      {
        icon: ShieldAlert,
        title: "Bot & attack protection",
        description:
          "Known crawlers, vulnerability scanners, and common attack paths are detected and blocked automatically.",
      },
      {
        icon: Timer,
        title: "Rate limiting",
        description:
          "Per-endpoint limits defend against brute-force attempts, credential stuffing, and API abuse, keeping the service stable under load.",
      },
      {
        icon: GitBranch,
        title: "Distributed tracing",
        description:
          "Full request tracing across services surfaces performance issues and suspicious patterns fast.",
      },
    ],
  },
];

const Security = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SEO
        title="Security & Data Ownership | Vasool"
        description="How Vasool protects lending data: per-tenant database isolation, self-hosted infrastructure you own, TLS encryption, biometric login, role-based access control, full audit trails, and responsible disclosure."
        keywords="microfinance security, loan data security, tenant data isolation, self-hosted lending software, financial data protection, RBAC microfinance, audit logging finance, NBFC data security"
        canonical="/security"
      />

      {/* Header */}
      <div className="bg-muted/40 border-b border-border pt-24 pb-12 sm:pt-28 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10 sm:h-14 sm:w-14">
              <Shield className="h-6 w-6 text-secondary sm:h-7 sm:w-7" />
            </div>
            <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
              Security &amp; data ownership
            </h1>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Vasool handles borrower KYC, collections, and cash — so security is
            foundational, not a feature. Here's exactly how your data is
            protected, and what you control.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Posture at a glance */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {POSTURE.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-border bg-card p-5 text-center shadow-card sm:p-6"
              >
                <div className="text-2xl font-extrabold text-secondary sm:text-3xl">
                  {p.value}
                </div>
                <div className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {p.label}
                </div>
              </div>
            ))}
          </div>

          {/* Data-ownership highlight — the strongest trust point */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-secondary/25 bg-secondary/[0.05] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/12 text-secondary">
                <Server className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  You own your data. We never store it centrally.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Each tenant's data lives in its own database on infrastructure
                  you provide or designate — even a server in your own office. We
                  provide the software; you hold the data. There is no shared,
                  central store that a single breach could expose across lenders.
                </p>
              </div>
            </div>
          </div>

          {/* Grouped security features */}
          {GROUPS.map((group) => (
            <section key={group.heading} className="mt-14 sm:mt-16">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                {group.heading}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                {group.blurb}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                        <item.icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <h3 className="text-base font-bold text-foreground sm:text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Honest note — what's certified vs. on the roadmap */}
          <div className="mt-14 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/[0.07] px-5 py-4 sm:mt-16">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={2.2} />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Being straight with you:</span>{" "}
              Vasool gives you strong technical controls and full data isolation
              today. Formal certifications (SOC&nbsp;2, ISO&nbsp;27001) and
              RBI-aligned compliance modules (CKYC, credit-bureau reporting) are
              on our roadmap — Vasool supports your compliance, it doesn't replace
              your obligations as the lender.
            </p>
          </div>

          {/* Responsible disclosure */}
          <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Responsible disclosure
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Found a security issue? Report it privately and we'll fix it fast.
              We acknowledge every report within 48 hours.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
              <a
                href={mailtoHref()}
                className="inline-flex items-center gap-2 font-semibold text-secondary hover:text-accent"
              >
                {CONTACT_EMAIL}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_PHONE_HREF}
                className="inline-flex items-center gap-2 font-semibold text-secondary hover:text-accent"
              >
                {CONTACT_PHONE_DISPLAY}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Please include a clear description, steps to reproduce, and any
              supporting evidence.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Security;
