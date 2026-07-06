import { Link } from "react-router-dom";
import {
  ArrowLeft,
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
} from "lucide-react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  mailtoHref,
} from "@/lib/contact";

const securityFeatures = [
  {
    icon: Key,
    title: "JWT Authentication",
    description:
      "Secure token-based authentication with short-lived access tokens and rotating refresh tokens. All sessions are cryptographically signed and validated on every request.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data in transit is encrypted using TLS/SSL. API communications over both REST and gRPC are secured with industry-standard encryption protocols.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description:
      "Mobile app supports fingerprint and face recognition login, preventing unauthorized access to field staff devices even if the device is lost or stolen.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Granular permission system with custom roles per resource and action. Tenant admins define exactly what each staff role can view, create, edit, or delete.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description:
      "Every data modification is automatically tracked with who changed what, when, and from where. Complete entity-level change history is available for compliance and dispute resolution.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: ShieldAlert,
    title: "Bot & Attack Protection",
    description:
      "Built-in detection and blocking of known crawlers, vulnerability scanners, and common attack paths. Automated responses to suspicious activity patterns.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Timer,
    title: "Rate Limiting",
    description:
      "Protection against brute force attacks, credential stuffing, and API abuse. Configurable rate limits per endpoint ensure service stability under load.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Tenant Data Isolation",
    description:
      "Each tenant operates in a completely isolated environment with separate databases and storage. No tenant can access another tenant's data under any circumstances.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Server,
    title: "Client-Controlled Infrastructure",
    description:
      "Server infrastructure is provided by or designated by the client. Data never leaves servers you control. No centralized data storage across tenants.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Storage Limits & Monitoring",
    description:
      "Per-tenant configurable storage quotas (default 7GB) with real-time usage monitoring. Prevents runaway storage consumption and ensures resource accountability.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: FileCheck,
    title: "Unified Login System",
    description:
      "Single secure authentication gateway for both admin and staff. Eliminates separate credential stores and reduces the attack surface for authentication.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: GitBranch,
    title: "Distributed Tracing",
    description:
      "Jaeger integration for full request tracing across services. Enables rapid identification and resolution of performance issues and suspicious request patterns.",
    color: "from-purple-500 to-violet-500",
  },
];

const Security = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Security - Microfinance Data Protection | Vasool"
        description="Vasool provides enterprise-grade security for microfinance: JWT authentication, end-to-end encryption, biometric login, role-based access control, tenant data isolation, audit logging, and bot protection."
        keywords="microfinance security, loan data security, tenant data isolation, microfinance encryption, financial data protection, secure lending software, RBAC microfinance, audit logging finance"
        canonical="/security"
      />
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground">
              Security
            </h1>
          </div>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base max-w-2xl">
            Vasool is built with security at every layer — from encrypted
            communications and biometric authentication to complete tenant data
            isolation and comprehensive audit trails.
          </p>
        </div>
      </div>

      {/* Security principles */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Core principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                Zero
              </div>
              <div className="text-sm text-muted-foreground">
                Cross-tenant data access
              </div>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Data encrypted in transit
              </div>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                Full
              </div>
              <div className="text-sm text-muted-foreground">
                Audit trail on every record
              </div>
            </div>
          </div>

          {/* Our approach */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Our Security Approach
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a multi-tenant platform handling sensitive financial and
                personal data, security is not an afterthought — it is
                foundational to how Vasool is designed and operated. Every
                feature, from loan management to GPS tracking, is built with
                data protection and access control in mind.
              </p>
              <p>
                Critically,{" "}
                <strong className="text-foreground">
                  Vasool does not own or centrally store your data.
                </strong>{" "}
                Each tenant's data resides on infrastructure provided by or
                designated by the client. We provide the software; you control
                the data. This architecture eliminates the risk of a single
                centralized data breach affecting multiple finance companies.
              </p>
            </div>
          </div>

          {/* Feature grid */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Security Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} p-2 sm:p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
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

          {/* Responsible disclosure */}
          <div className="rounded-2xl bg-muted/30 border border-border/50 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Responsible Disclosure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We take security vulnerabilities seriously. If you discover a
              security issue in the Vasool platform, we encourage you to
              report it responsibly so we can address it promptly.
            </p>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Report to:</strong>{" "}
                <a
                  href={mailtoHref()}
                  className="text-secondary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                <a
                  href={CONTACT_PHONE_HREF}
                  className="text-secondary hover:underline"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-sm">
                Please include a detailed description of the vulnerability, steps
                to reproduce, and any supporting evidence. We will acknowledge
                your report within 48 hours and work to resolve verified issues
                as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Security;
