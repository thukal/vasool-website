import { useTranslation } from "react-i18next";

export const BASE_URL = "https://vasool.app";

export interface LangPage {
  isTamil: boolean;
  /** Canonical path for the current language (e.g. "/features" or "/ta/features"). */
  canonical: string;
  /** Reciprocal hreflang alternates for this page. */
  alternates: { hreflang: string; href: string }[];
  ogLocale: string;
}

/**
 * Language-aware SEO helpers for a page that exists at both `basePath` (English)
 * and `/ta${basePath}` (Tamil). The active language is set by the entry point
 * (StaticRouter prerender / BrowserRouter hydration) based on the URL.
 */
export function useLangPage(basePath: string): LangPage {
  const { i18n } = useTranslation();
  const isTamil = i18n.language === "ta";
  return {
    isTamil,
    canonical: isTamil ? `/ta${basePath}` : basePath,
    alternates: [
      { hreflang: "en", href: `${BASE_URL}${basePath}` },
      { hreflang: "ta", href: `${BASE_URL}/ta${basePath}` },
      { hreflang: "x-default", href: `${BASE_URL}${basePath}` },
    ],
    ogLocale: isTamil ? "ta_IN" : "en_US",
  };
}
