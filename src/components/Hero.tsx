import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Menu,
  X,
  Banknote,
  Users,
  MapPin,
  BarChart3,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import PretextReveal from "./pretext/PretextReveal";
import BalancedText from "./pretext/BalancedText";

const Hero = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fullTitle = `${t("hero.title1")} ${t("hero.title2")} ${t("hero.title3")}`;

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.12)_0%,transparent_70%)] animate-float" />
        <div
          className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(38_90%_52%/0.08)_0%,transparent_70%)] animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute -bottom-20 right-1/3 w-[350px] h-[350px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.08)_0%,transparent_70%)] animate-float"
          style={{ animationDelay: "5s" }}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Navigation */}
        <nav className="py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5">
              <img
                src="/favicon.png"
                alt="Vasool"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl"
              />
              <span className="text-xl font-bold text-white">Vasool</span>
            </a>

            <button
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className="hidden md:flex items-center gap-7">
              <a
                href="/features"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {t("nav.features")}
              </a>
              <a
                href="/loan-types"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {t("nav.loanTypes")}
              </a>
              <a
                href="/staff-tools"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {t("nav.staffTools")}
              </a>
              <LanguageSelector />
              <a href="tel:+918680901007">
                <Button variant="hero" size="sm">
                  {t("nav.bookDemo")}
                </Button>
              </a>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 glass rounded-2xl p-5 space-y-3">
              <a
                href="/features"
                className="block text-white/70 hover:text-white py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.features")}
              </a>
              <a
                href="/loan-types"
                className="block text-white/70 hover:text-white py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.loanTypes")}
              </a>
              <a
                href="/staff-tools"
                className="block text-white/70 hover:text-white py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.staffTools")}
              </a>
              <div className="py-2">
                <LanguageSelector />
              </div>
              <a href="tel:+918680901007" className="block">
                <Button variant="hero" size="sm" className="w-full">
                  {t("nav.bookDemo")}
                </Button>
              </a>
            </div>
          )}
        </nav>

        {/* Hero content — two-column */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-32">
          {/* Left — text with Pretext-powered layout */}
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-emerald-300 text-xs font-medium mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t("hero.badge")}
              </span>
            </div>

            {/* Pretext BalancedText: prevents orphan words in the heading */}
            <div className="animate-fade-up-delay-1">
              <BalancedText
                as="h1"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 text-white"
                font='800 56px "Plus Jakarta Sans"'
                lineHeight={62}
              >
                {fullTitle}
              </BalancedText>
            </div>

            {/* Pretext PretextReveal: line-by-line reveal animation */}
            <div className="animate-fade-up-delay-2">
              <PretextReveal
                as="p"
                className="text-base sm:text-lg text-white/50 max-w-lg mb-8 leading-relaxed"
                font='400 18px "Plus Jakarta Sans"'
                lineHeight={28}
                staggerMs={100}
              >
                {t("hero.description")}
              </PretextReveal>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up-delay-3">
              <a href="tel:+918680901007">
                <Button variant="hero" size="lg">
                  {t("nav.bookDemo")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="/features">
                <Button variant="heroOutline" size="lg">
                  {t("nav.features")}
                </Button>
              </a>
            </div>
          </div>

          {/* Right — feature preview card */}
          <div className="hidden lg:block animate-fade-up-delay-4">
            <div className="glass rounded-3xl p-8 relative">
              {/* Glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-transparent to-amber-500/10 rounded-3xl blur-xl -z-10" />

              <div className="flex items-center gap-3 mb-7">
                <img
                  src="/favicon.png"
                  alt="Vasool"
                  className="w-10 h-10 rounded-xl"
                />
                <div>
                  <div className="text-white font-semibold text-sm">
                    Vasool Dashboard
                  </div>
                  <div className="text-white/40 text-xs">
                    Microfinance Management
                  </div>
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-0.5">
                    {t("hero.stat1Value")}
                  </div>
                  <div className="text-[11px] text-white/40">
                    {t("hero.stat1Label")}
                  </div>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-0.5">
                    {t("hero.stat2Value")}
                  </div>
                  <div className="text-[11px] text-white/40">
                    {t("hero.stat2Label")}
                  </div>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-0.5">
                    {t("hero.stat3Value")}
                  </div>
                  <div className="text-[11px] text-white/40">
                    {t("hero.stat3Label")}
                  </div>
                </div>
              </div>

              {/* Mini feature list */}
              <div className="space-y-3">
                {[
                  {
                    icon: Banknote,
                    label: "Loan Management",
                    color: "text-emerald-400",
                    bg: "bg-emerald-400/10",
                  },
                  {
                    icon: Users,
                    label: "Customer Profiles & KYC",
                    color: "text-teal-400",
                    bg: "bg-teal-400/10",
                  },
                  {
                    icon: MapPin,
                    label: "Route & GPS Tracking",
                    color: "text-cyan-400",
                    bg: "bg-cyan-400/10",
                  },
                  {
                    icon: BarChart3,
                    label: "Reports & Analytics",
                    color: "text-amber-400",
                    bg: "bg-amber-400/10",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-white/[0.04] rounded-xl px-4 py-3"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}
                    >
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <span className="text-white/70 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 36C672 40 768 48 864 52C960 56 1056 56 1152 52C1248 48 1344 40 1392 36L1440 32V80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
