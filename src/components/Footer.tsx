import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import PretextText from "./pretext/PretextText";
import { COUNTRIES, inSentence } from "@/lib/countries";
import {
  BILINGUAL_PATHS,
  basePathOf,
  isTamilPath,
  localizedPath,
  tamilPathOf,
} from "@/lib/langRoutes";

const Footer = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  // On Tamil pages, bilingual product links point at their /ta variants so
  // the Tamil pages are reachable through plain crawlable links.
  const to = (target: string) => localizedPath(target, pathname);
  const basePath = basePathOf(pathname);
  const hasTamilTwin = BILINGUAL_PATHS.includes(basePath);

  return (
    <footer className="bg-hero pt-12 sm:pt-16 pb-28 sm:pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 mb-2 md:mb-0">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/favicon.png"
                alt="Vasool"
                className="w-9 h-9 rounded-xl"
              />
              <span className="text-lg font-bold text-white">Vasool</span>
            </div>
            {/* Pretext pre-measures height to prevent layout shift */}
            <PretextText
              as="p"
              className="text-white/35 text-sm leading-relaxed max-w-[220px]"
              font='400 14px "Plus Jakarta Sans"'
              lineHeight={22}
            >
              {t("footer.description")}
            </PretextText>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm">
              {t("footer.product")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={to("/features")}
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <a
                  href={to("/loan-types")}
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.loanTypes")}
                </a>
              </li>
              <li>
                <a
                  href={to("/staff-tools")}
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.staffTools")}
                </a>
              </li>
              <li>
                <a
                  href={to("/pricing")}
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.pricing")}
                </a>
              </li>
              <li>
                <a
                  href={to("/compare")}
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.compare")}
                </a>
              </li>
              <li>
                <a
                  href={`${to("/staff-tools")}#mobile`}
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.mobileApp")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/about"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.blog")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/privacy"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.security")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Solution pages — keyword anchors kept in English to match search terms */}
        <div className="pt-7 mb-7 border-t border-white/[0.06]">
          <h4 className="font-semibold text-white/50 mb-3 text-xs uppercase tracking-wider">
            Solutions
          </h4>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { label: "Loan Collection App", href: "/loan-collection-app" },
              { label: "Daily Collection App", href: "/daily-collection-app" },
              { label: "Voice Entry Collection App", href: "/voice-entry-collection-app" },
              { label: "Voice Approval Workflow", href: "/voice-approval-workflow" },
              { label: "Weekly Collection App", href: "/weekly-collection-app" },
              { label: "Monthly Finance App", href: "/monthly-finance-app" },
              { label: "Line Management App", href: "/line-management-app" },
              { label: "Kandhu Vatti App", href: "/kandhu-vatti-app" },
              { label: "Byaj Wasooli App", href: "/byaj-wasooli-app" },
              { label: "Ugrani App", href: "/ugrani-app" },
              { label: "Self-Hosted Loan Software", href: "/self-hosted-loan-software" },
              { label: "White-Label Loan App", href: "/white-label-loan-app" },
              { label: "Chit Fund & Lending App", href: "/chit-fund-and-lending-app" },
              { label: "NBFC Loan Management", href: "/nbfc-loan-management" },
              { label: "SACCO Management System", href: "/sacco-management-system" },
              { label: "Aplikasi Koperasi Simpan Pinjam", href: "/aplikasi-koperasi-simpan-pinjam" },
              { label: "Software de Cobranza", href: "/software-de-cobranza" },
              { label: "Debt Collection Software South Africa", href: "/debt-collection-software-south-africa" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="text-white/35 hover:text-white/70 transition-colors text-xs"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Country pages — crawlable anchors for each supported market */}
        <div className="pt-7 mb-7 border-t border-white/[0.06]">
          <h4 className="font-semibold text-white/50 mb-3 text-xs uppercase tracking-wider">
            Countries
          </h4>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="/countries"
              className="text-white/35 hover:text-white/70 transition-colors text-xs"
            >
              All Supported Countries
            </a>
            {COUNTRIES.map((c) => (
              <a
                key={c.slug}
                href={c.slug}
                className="text-white/35 hover:text-white/70 transition-colors text-xs"
              >
                Vasool in {inSentence(c)}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">
            {t("footer.copyright")}
          </p>
          {/* Crawlable language links — the header selector is JS-only, so
              these anchors are how crawlers discover the Tamil pages. */}
          {hasTamilTwin && (
            <p className="text-xs">
              {isTamilPath(pathname) ? (
                <a
                  href={basePath}
                  hrefLang="en"
                  className="text-white/35 hover:text-white/70 transition-colors"
                >
                  This page in English
                </a>
              ) : (
                <a
                  href={tamilPathOf(basePath)}
                  hrefLang="ta"
                  lang="ta"
                  className="text-white/35 hover:text-white/70 transition-colors"
                >
                  இந்தப் பக்கம் தமிழில்
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
