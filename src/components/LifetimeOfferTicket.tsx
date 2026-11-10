import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Infinity as InfinityIcon, X } from "lucide-react";
import { basePathOf, isTamilPath, localizedPath } from "@/lib/langRoutes";
import { DEFAULT_LOCALE, LIFETIME_INR, detectLocale, money, readStoredLocale, type PriceLocale } from "@/lib/pricing";

// Unlike the lead popup this never blocks the page: it sits in the
// bottom-left corner (the WhatsApp button owns bottom-right) and closing it
// only collapses it to a small tab, so the offer stays one click away.
// Remembered across visits — once someone has collapsed it, don't re-expand.
const COLLAPSED_KEY = "vasool_lifetime_offer_collapsed";

// Waits a moment after load so it doesn't compete with the hero.
const SHOW_DELAY_MS = 3_000;

const LifetimeOfferTicket = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [ready, setReady] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [loc, setLoc] = useState<PriceLocale>(DEFAULT_LOCALE);

  // Client-only: the prerendered HTML stays free of it, so crawlers and the
  // first paint are unaffected and there's no hydration mismatch.
  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem(COLLAPSED_KEY) === "1");
    } catch {
      // Storage unavailable — start expanded.
    }
    if (!isTamilPath(window.location.pathname)) setLoc(readStoredLocale() ?? detectLocale());
    const timer = setTimeout(() => setReady(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // The pricing page already shows the full offer card.
  if (!ready || basePathOf(pathname) === "/pricing") return null;

  const href = `${localizedPath("/pricing", pathname)}#lifetime`;

  const collapse = () => {
    setCollapsed(true);
    try {
      localStorage.setItem(COLLAPSED_KEY, "1");
    } catch {
      // Best-effort only.
    }
  };

  const position = {
    bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
    left: "calc(env(safe-area-inset-left, 0px) + 1.25rem)",
  };

  if (collapsed) {
    return (
      <a
        href={href}
        style={position}
        className="fixed z-40 inline-flex h-11 items-center gap-2 rounded-full bg-hero pl-3 pr-4 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-2"
      >
        <InfinityIcon className="h-5 w-5 text-secondary" />
        {t("lifetimeOffer.tab")}
      </a>
    );
  }

  return (
    <aside
      style={{ ...position, maxWidth: "calc(100vw - 7rem)" }}
      className="fixed z-40 w-80 overflow-hidden rounded-2xl bg-hero text-white shadow-2xl ring-1 ring-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500"
      aria-label={t("lifetimeOffer.title")}
    >
      {/* Ticket perforation */}
      <div className="absolute inset-y-0 left-12 border-l border-dashed border-white/15" />
      <div className="relative flex">
        <div className="flex w-12 flex-shrink-0 items-center justify-center">
          <InfinityIcon className="h-6 w-6 text-secondary" />
        </div>
        <div className="flex-1 py-4 pl-4 pr-9">
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{t("lifetimeOffer.badge")}</span>
          <p className="mt-0.5 font-bold leading-tight">{t("lifetimeOffer.title")}</p>
          <p className="mt-1 text-xs leading-relaxed text-white/65">
            {t("lifetimeOffer.text", { price: money(LIFETIME_INR, loc) })}
          </p>
          <a
            href={href}
            className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-white"
          >
            {t("lifetimeOffer.cta")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          type="button"
          onClick={collapse}
          aria-label={t("lifetimeOffer.close")}
          className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full text-white/50 hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
};

export default LifetimeOfferTicket;
