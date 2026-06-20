import { useTranslation } from "react-i18next";
import PretextText from "./pretext/PretextText";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-hero pt-12 sm:pt-16 pb-8 sm:pb-10">
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
                  href="/features"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <a
                  href="/loan-types"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.loanTypes")}
                </a>
              </li>
              <li>
                <a
                  href="/staff-tools"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.staffTools")}
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.pricing")}
                </a>
              </li>
              <li>
                <a
                  href="/compare"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.compare")}
                </a>
              </li>
              <li>
                <a
                  href="/staff-tools#mobile"
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
                  href="#"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.blog")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.careers")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  {t("footer.contact")}
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
              { label: "Weekly Collection App", href: "/weekly-collection-app" },
              { label: "Monthly Finance App", href: "/monthly-finance-app" },
              { label: "Line Management App", href: "/line-management-app" },
              { label: "Kandhu Vatti App", href: "/kandhu-vatti-app" },
              { label: "Byaj Wasooli App", href: "/byaj-wasooli-app" },
              { label: "Ugrani App", href: "/ugrani-app" },
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

        <div className="pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/25 hover:text-white/50 transition-colors text-xs"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white/25 hover:text-white/50 transition-colors text-xs"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-white/25 hover:text-white/50 transition-colors text-xs"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
