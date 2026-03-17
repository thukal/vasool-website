import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground">
            Privacy Policy
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
              1. Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vasool ("we", "our", or "the Platform") is a multi-tenant
              microfinance loan management platform operated by Thukal. This
              Privacy Policy explains how data is collected, used, stored, and
              protected across the Platform. By using Vasool, you agree to the
              practices described in this policy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vasool provides software infrastructure to microfinance companies
              ("Tenants" or "Clients"). Each Tenant operates independently
              within their own isolated environment on the Platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              2. Multi-Tenant Architecture & Data Ownership
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vasool operates on a multi-tenant architecture where each
              microfinance company (Tenant) is provisioned with a completely
              isolated data environment. This means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                <strong className="text-foreground">
                  Tenants own their data.
                </strong>{" "}
                All customer records, loan data, collection records, staff
                information, documents, and any other data entered into the
                Platform by a Tenant belongs exclusively to that Tenant.
              </li>
              <li>
                <strong className="text-foreground">
                  Vasool does not own, sell, or share Tenant data.
                </strong>{" "}
                We act solely as a data processor providing the software
                infrastructure. We do not access, analyze, or monetize Tenant
                data for any purpose beyond providing the service.
              </li>
              <li>
                <strong className="text-foreground">
                  Data isolation is enforced.
                </strong>{" "}
                Each Tenant's data is logically and physically separated. No
                Tenant can access another Tenant's data under any circumstances.
              </li>
              <li>
                <strong className="text-foreground">
                  The Tenant's server infrastructure is provided by the Client.
                </strong>{" "}
                Tenants may provide their own server infrastructure or use
                infrastructure provisioned on their behalf. In either case, the
                data resides on servers controlled by or designated by the
                Client.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              3. Data Collected by Tenants
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each Tenant, through their use of the Platform, may collect and
              store the following types of data about their end customers and
              staff:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Personal information (name, phone number, address, profile
                photos)
              </li>
              <li>
                Identity and KYC documents (Aadhaar, PAN, voter ID, etc.)
              </li>
              <li>
                Loan and financial records (loan amounts, repayment schedules,
                payment history)
              </li>
              <li>GPS location data (customer locations, staff tracking)</li>
              <li>
                Staff information (employment details, expenses, attendance)
              </li>
              <li>
                Guarantor/referee information (contact details, relationship to
                borrower)
              </li>
              <li>Product and transaction photos</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">
                The Tenant is the data controller
              </strong>{" "}
              for all data they collect through the Platform. Each Tenant is
              responsible for obtaining proper consent from their customers and
              staff, and for complying with all applicable data protection laws
              in their jurisdiction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              4. Data We Collect as Platform Provider
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As the Platform provider, Vasool may collect limited data for
              operational purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                <strong className="text-foreground">
                  Tenant account information:
                </strong>{" "}
                Company name, contact person, email, phone number for account
                management and billing.
              </li>
              <li>
                <strong className="text-foreground">
                  Usage and diagnostic data:
                </strong>{" "}
                API request counts, error logs, performance metrics, and system
                health data for maintaining service quality.
              </li>
              <li>
                <strong className="text-foreground">Storage metrics:</strong>{" "}
                Per-tenant storage usage for enforcing configured storage limits.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not collect or access any end-customer data stored by
              Tenants unless explicitly requested by the Tenant for technical
              support purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              5. Data Storage & Security
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Data is stored on servers provided by or designated by the
                Tenant (Client). Vasool does not centrally host Tenant data on
                shared infrastructure without the Tenant's knowledge.
              </li>
              <li>
                All data in transit is encrypted using TLS/SSL. Authentication
                is handled via JWT tokens with secure session management.
              </li>
              <li>
                The Platform includes built-in security measures: rate limiting,
                bot and attack protection, audit logging, and entity-level
                change history tracking.
              </li>
              <li>
                Role-based access control (RBAC) ensures that only authorized
                staff members can access specific data and features within a
                Tenant's environment.
              </li>
              <li>
                Biometric/fingerprint authentication is supported for mobile app
                access to prevent unauthorized use.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              6. Data Sharing & Third Parties
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vasool does not share, sell, rent, or disclose Tenant data to any
              third parties. Specifically:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                We do not share data between Tenants. Each Tenant's data is
                completely isolated.
              </li>
              <li>
                We do not use Tenant data for advertising, analytics, or any
                purpose other than providing the Platform service.
              </li>
              <li>
                We do not provide data to government or law enforcement agencies
                unless required by law, in which case the relevant Tenant will
                be notified to the extent legally permissible.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Individual Tenants may have their own data sharing practices with
              their customers. Users should refer to their specific
              microfinance company's privacy policy for details.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              7. Data Retention & Deletion
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Tenant data is retained for as long as the Tenant's account is
                active and the service agreement is in effect.
              </li>
              <li>
                Upon termination of service, Tenants may request a full export
                of their data. After the agreed retention period, all Tenant
                data is permanently deleted through our automated
                deprovisioning process.
              </li>
              <li>
                Tenants can delete individual customer records, loan records,
                and other data at any time through the Platform's interface.
              </li>
              <li>
                Audit logs and change history are retained as part of the
                Tenant's data and follow the same retention and deletion
                policies.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              8. Tenant Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each Tenant using the Vasool Platform is responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Obtaining proper consent from their customers before collecting
                personal data, documents, photos, and location information.
              </li>
              <li>
                Complying with all applicable local, state, and national data
                protection and privacy regulations.
              </li>
              <li>
                Implementing appropriate internal policies for data access by
                their staff members using the RBAC features provided.
              </li>
              <li>
                Ensuring the accuracy and lawfulness of data entered into the
                Platform.
              </li>
              <li>
                Informing their customers about how their data is collected,
                used, and stored.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              9. GPS & Location Data
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Platform includes GPS tracking features for staff location
              monitoring and customer location recording. This data is:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Collected only when the Tenant enables these features through
                their per-tenant feature toggles.
              </li>
              <li>
                Stored within the Tenant's isolated data environment and not
                shared with other Tenants or third parties.
              </li>
              <li>
                Accessible only to authorized personnel within the Tenant's
                organization based on their assigned roles.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              10. Cookies & Mobile App
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Vasool web application may use essential cookies for session
              management and authentication. No third-party tracking cookies are
              used. The mobile application stores authentication tokens and user
              preferences locally on the device.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal and regulatory reasons.
              Tenants will be notified of any material changes via email or
              through the Platform. Continued use of the Platform after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              12. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong className="text-foreground">Email:</strong>{" "}
                <a
                  href="mailto:hello@thukal.in"
                  className="text-secondary hover:underline"
                >
                  hello@thukal.in
                </a>
              </p>
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                <a
                  href="tel:+918680901007"
                  className="text-secondary hover:underline"
                >
                  +91 8680901007
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

export default PrivacyPolicy;
