import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  mailtoHref,
} from "@/lib/contact";

const TermsOfService = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SEO
        title="Terms of Service - Vasool App"
        description="Read Vasool App's terms of service. Understand the terms and conditions for using Vasool's microfinance loan management platform."
        canonical="/terms"
      />
      {/* Header */}
      <div className="bg-muted/40 border-b border-border pt-24 pb-12 sm:pt-28 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Last updated: March 17, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding
              agreement between you ("Tenant", "Client", or "you") and Thukal
              ("we", "us", or "our"), governing your access to and use of the
              Vasool multi-tenant microfinance loan management platform ("the
              Platform").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By subscribing to, accessing, or using the Platform, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms. If you are entering into these Terms on behalf of
              a company or other legal entity, you represent that you have the
              authority to bind that entity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              2. Description of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vasool is a multi-tenant software platform that provides
              microfinance companies with tools for loan management, collection
              tracking, route planning, staff management, reporting, and related
              operations. The Platform includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Web-based admin dashboard and management interface</li>
              <li>Mobile application for field staff operations</li>
              <li>REST API for integration</li>
              <li>
                Isolated tenant environments with configurable features and
                branding
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify, update, or discontinue any part of
              the Platform with reasonable notice to active Tenants.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              3. Tenant Provisioning & Account Setup
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Each Tenant is provisioned with an isolated environment through
                our automated provisioning system. This includes a separate
                database, storage allocation, and configurable feature set.
              </li>
              <li>
                Tenants are responsible for providing accurate company and
                contact information during onboarding.
              </li>
              <li>
                Default storage limits (7GB unless otherwise configured) apply
                per tenant. Additional storage may be arranged as part of your
                service agreement.
              </li>
              <li>
                Tenant administrators are responsible for managing staff
                accounts, roles, and permissions within their environment using
                the provided role-based access control system.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              4. Data Ownership & Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">
                You retain full ownership of your data.
              </strong>{" "}
              All customer records, loan data, financial records, staff
              information, documents, photos, and any other data you enter into
              the Platform belongs exclusively to you.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                The server infrastructure may be provided by you (the Client) or
                provisioned on your behalf. In all cases, the data resides on
                servers you control or designate.
              </li>
              <li>
                We do not access, mine, sell, or share your data. We act solely
                as a software provider, not a data controller.
              </li>
              <li>
                You are solely responsible for the accuracy, legality, and
                appropriateness of all data entered into the Platform.
              </li>
              <li>
                You are responsible for complying with all applicable data
                protection, financial regulation, and privacy laws in your
                jurisdiction, including obtaining proper consent from your
                customers before collecting their personal information.
              </li>
              <li>
                You are responsible for maintaining appropriate backups of your
                data beyond what the Platform provides.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              5. Acceptable Use
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use the Platform only for lawful microfinance and
              lending operations. You shall not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Use the Platform for any illegal activity, including predatory
                lending, money laundering, or fraud.
              </li>
              <li>
                Attempt to access another Tenant's data or environment.
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the
                Platform software.
              </li>
              <li>
                Attempt to circumvent security measures, rate limits, or access
                controls.
              </li>
              <li>
                Use automated tools to scrape, overload, or abuse the Platform's
                APIs beyond agreed usage limits.
              </li>
              <li>
                Sublicense, resell, or redistribute access to the Platform
                without prior written agreement.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              6. Staff & User Accounts
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Tenant administrators are responsible for creating and managing
                staff accounts and assigning appropriate roles and permissions.
              </li>
              <li>
                Each user must have their own unique login credentials.
                Credential sharing is prohibited.
              </li>
              <li>
                You are responsible for the actions taken by all users within
                your tenant environment.
              </li>
              <li>
                You must promptly disable accounts for staff members who no
                longer require access.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              7. Feature Toggles & Configuration
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Platform provides per-tenant feature toggles allowing you to
              enable or disable specific functionality (e.g., GPS tracking,
              offline sync, biometric login). You are responsible for
              configuring these features in accordance with your local
              regulations and the consent you have obtained from your customers
              and staff.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              8. Custom Branding
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Platform allows per-tenant custom branding including app name,
              tagline, icons, and support contact information. You are
              responsible for ensuring that branding materials you upload do not
              infringe on third-party intellectual property rights. We are not
              liable for any trademark or copyright claims arising from your
              custom branding.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              9. Service Availability & Support
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                We aim to maintain high availability of the Platform but do not
                guarantee uninterrupted service. Scheduled maintenance will be
                communicated in advance.
              </li>
              <li>
                Support is provided via email at{" "}
                <a
                  href={mailtoHref()}
                  className="text-secondary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                and phone at{" "}
                <a
                  href={CONTACT_PHONE_HREF}
                  className="text-secondary hover:underline"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
                .
              </li>
              <li>
                We are not responsible for downtime or data loss caused by
                infrastructure failures on servers provided by the Client.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              10. Payment & Billing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Subscription fees, payment terms, and billing cycles are defined
              in the separate service agreement between you and Thukal. Failure
              to make timely payments may result in suspension or termination of
              your access to the Platform after reasonable notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              11. Intellectual Property
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                The Platform software, including its source code, design,
                architecture, APIs, documentation, and all related intellectual
                property, is owned by Thukal and is protected by applicable
                intellectual property laws.
              </li>
              <li>
                Your subscription grants you a non-exclusive, non-transferable
                license to use the Platform for the duration of your service
                agreement.
              </li>
              <li>
                You retain all intellectual property rights to your data and
                branding materials.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              12. Limitation of Liability
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                The Platform is provided "as is" and "as available". We make no
                warranties, express or implied, regarding the Platform's fitness
                for a particular purpose or merchantability.
              </li>
              <li>
                We are not liable for any indirect, incidental, special, or
                consequential damages arising from your use of the Platform,
                including but not limited to loss of profits, data, or business
                opportunities.
              </li>
              <li>
                We are not responsible for any regulatory penalties, fines, or
                legal actions resulting from your use of the Platform or your
                handling of customer data.
              </li>
              <li>
                Our total liability shall not exceed the fees paid by you for
                the Platform in the twelve (12) months preceding the claim.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              13. Termination
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Either party may terminate the service agreement with 30 days
                written notice.
              </li>
              <li>
                We may suspend or terminate your access immediately if you
                violate these Terms or engage in illegal activities.
              </li>
              <li>
                Upon termination, you may request a full export of your data
                within 30 days. After the agreed retention period, your tenant
                environment and all associated data will be permanently removed
                through our automated deprovisioning process.
              </li>
              <li>
                Sections relating to data ownership, limitation of liability,
                and intellectual property survive termination.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              14. Indemnification
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Thukal, its officers,
              employees, and affiliates from any claims, damages, losses, or
              expenses (including legal fees) arising from your use of the
              Platform, your violation of these Terms, your handling of customer
              data, or your breach of any applicable laws or regulations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              15. Governing Law & Disputes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of India. Any disputes
              arising from these Terms or your use of the Platform shall be
              subject to the exclusive jurisdiction of the courts in Tamil Nadu,
              India. Both parties agree to attempt good-faith negotiation before
              pursuing legal action.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              16. Changes to These Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. Tenants will be
              notified of material changes at least 15 days in advance via email
              or through the Platform. Continued use of the Platform after
              changes take effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              17. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong className="text-foreground">Email:</strong>{" "}
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
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default TermsOfService;
