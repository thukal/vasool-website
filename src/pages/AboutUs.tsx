import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Zap,
  ShieldCheck,
  Handshake,
  Globe,
  Code2,
  Smartphone,
  Server,
  HeadphonesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const values = [
  {
    icon: ShieldCheck,
    title: "Data Sovereignty",
    description:
      "Your data belongs to you. We build software, not data empires. Every tenant controls their own infrastructure and data.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We succeed when our clients succeed. We work closely with microfinance companies to understand their ground-level challenges.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Practical Innovation",
    description:
      "We build features that solve real problems — GPS tracking for field agents, offline sync for rural areas, PDF receipts for instant proof.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Heart,
    title: "Financial Inclusion",
    description:
      "Microfinance empowers underserved communities. We're proud to build tools that help small lenders operate efficiently and reach more people.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Local-First Design",
    description:
      "Built for the Indian microfinance landscape with Tamil and English support, INR-first calculations, and workflows that match how lending actually works on the ground.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: ShieldCheck,
    title: "Security by Default",
    description:
      "Tenant isolation, audit logging, rate limiting, and RBAC are not premium features — they're built into every deployment from day one.",
    color: "from-red-500 to-orange-500",
  },
];

const offerings = [
  {
    icon: Smartphone,
    title: "Mobile App for Field Staff",
    description:
      "Android app with offline support, GPS tracking, biometric login, and real-time sync for daily collections.",
  },
  {
    icon: Code2,
    title: "Admin Dashboard",
    description:
      "Web-based management console for loan origination, staff management, route planning, reporting, and analytics.",
  },
  {
    icon: Server,
    title: "Self-Hosted Platform",
    description:
      "Deploy on your own servers. We provision, configure, and maintain the software — you own the infrastructure and data.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Hands-on onboarding, training, and ongoing support. We're a phone call away when you need help.",
  },
];

const AboutUs = () => {
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
            About <span className="text-gradient">Vasool</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            We build the technology that powers microfinance operations across
            India — so lending companies can focus on what matters most: serving
            their customers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Story */}
        <section className="py-12 sm:py-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Vasool was born from a simple observation: microfinance companies
              across India are still running critical operations on paper
              registers, WhatsApp groups, and disconnected spreadsheets. Field
              agents walk kilometers daily with no route planning. Admins
              reconcile cash manually every evening. Customer records live in
              notebooks that can be lost or damaged.
            </p>
            <p>
              We set out to change that. Built by{" "}
              <strong className="text-foreground">Thukal</strong>, Vasool is a
              complete loan management platform designed specifically for the
              Indian microfinance industry. Not a generic banking tool adapted
              for small lenders — but a purpose-built system that understands
              daily collections, field routes, cash settlements, and the
              realities of ground-level lending.
            </p>
            <p>
              Our multi-tenant architecture means each finance company gets
              their own isolated environment with their own branding, features,
              and data — all running on infrastructure they control. We don't
              hold your data hostage. We don't sell insights to third parties.
              We build great software and let you run your business.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-card border border-border/50 shadow-card p-6 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-2.5 mb-5">
                <Target className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To digitize and streamline microfinance operations across India
                by providing affordable, secure, and easy-to-use technology that
                respects data ownership and empowers small lending businesses to
                scale with confidence.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border/50 shadow-card p-6 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 p-2.5 mb-5">
                <Eye className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A future where every microfinance company — no matter how small
                — has access to enterprise-grade technology, enabling them to
                operate transparently, serve their communities efficiently, and
                grow sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make — from
              architecture choices to feature priorities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${value.color} p-2 sm:p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What we offer */}
        <section className="py-12 sm:py-16 max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A complete technology stack for microfinance operations —
              everything your team needs, from the field to the front office.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card border border-border/50"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 max-w-3xl mx-auto text-center">
          <div className="rounded-2xl bg-muted/30 border border-border/50 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you're a single-branch finance company or a multi-city
              operation, Vasool scales with you. Let's talk about how we can
              help digitize your lending operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+918680901007">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
              <a
                href="mailto:hello@thukal.in"
                className="text-secondary hover:underline text-sm sm:text-base"
              >
                or email us at hello@thukal.in
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default AboutUs;
