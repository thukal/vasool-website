/**
 * One source price, shown in the visitor's local currency.
 *
 * The plan costs ₹699/month. Every other currency here is that same price
 * converted and rounded to a tidy local figure — we are not running different
 * price points per market. Change BASE_MONTHLY_INR and every country follows.
 *
 * IMPORTANT: `rate` is local currency units per 1 INR, captured on the date
 * below. FX drifts, so these go stale — review them on the schedule your
 * finance side is comfortable with and update RATES_AS_OF when you do. The
 * figures on the site are indicative; the invoice is what binds.
 */
export const BASE_MONTHLY_INR = 699;
export const RATES_AS_OF = "2026-08-03";

export interface PriceLocale {
  /** ISO 3166-1 alpha-2. */
  code: string;
  name: string;
  currency: string;
  symbol: string;
  /** Local currency units per 1 INR. */
  rate: number;
  /** Round converted amounts to the nearest multiple of this. */
  step: number;
  /** Intl locale used to group digits. */
  numberLocale: string;
  /** Shown after the price. India charges GST; elsewhere we don't guess. */
  taxNote: string;
  /** Longer form used in the tax FAQ answer. */
  taxLabel: string;
}

export const PRICE_LOCALES: PriceLocale[] = [
  {
    code: "IN",
    name: "India",
    currency: "INR",
    symbol: "₹",
    rate: 1,
    step: 1,
    numberLocale: "en-IN",
    taxNote: "+18% GST",
    taxLabel: "18% GST, added at checkout as Indian tax regulations require",
  },
  {
    code: "PH",
    name: "Philippines",
    currency: "PHP",
    symbol: "₱",
    rate: 0.67,
    step: 10,
    numberLocale: "en-PH",
    taxNote: "+ applicable local taxes",
    taxLabel: "any taxes that apply where you operate",
  },
  {
    code: "NG",
    name: "Nigeria",
    currency: "NGN",
    symbol: "₦",
    rate: 17.4,
    step: 100,
    numberLocale: "en-NG",
    taxNote: "+ applicable local taxes",
    taxLabel: "any taxes that apply where you operate",
  },
  {
    code: "KE",
    name: "Kenya",
    currency: "KES",
    symbol: "KSh ",
    rate: 1.52,
    step: 10,
    numberLocale: "en-KE",
    taxNote: "+ applicable local taxes",
    taxLabel: "any taxes that apply where you operate",
  },
  {
    code: "LK",
    name: "Sri Lanka",
    currency: "LKR",
    symbol: "Rs ",
    rate: 3.5,
    step: 50,
    numberLocale: "en-LK",
    taxNote: "+ applicable local taxes",
    taxLabel: "any taxes that apply where you operate",
  },
  {
    code: "ID",
    name: "Indonesia",
    currency: "IDR",
    symbol: "Rp ",
    rate: 190,
    step: 1000,
    numberLocale: "id-ID",
    taxNote: "+ applicable local taxes",
    taxLabel: "any taxes that apply where you operate",
  },
  {
    code: "ZA",
    name: "South Africa",
    currency: "ZAR",
    symbol: "R ",
    rate: 0.21,
    step: 5,
    numberLocale: "en-ZA",
    taxNote: "+ applicable local taxes",
    taxLabel: "any taxes that apply where you operate",
  },
  {
    code: "CO",
    name: "Colombia",
    currency: "COP",
    symbol: "$",
    rate: 46,
    step: 1000,
    numberLocale: "es-CO",
    taxNote: "+ applicable local taxes",
    taxLabel: "any taxes that apply where you operate",
  },
];

export const DEFAULT_LOCALE = PRICE_LOCALES[0];

export const localeByCode = (code: string) =>
  PRICE_LOCALES.find((l) => l.code === code) ?? DEFAULT_LOCALE;

/** Converts an INR amount into `loc`'s currency, rounded to its step. */
export const convert = (inr: number, loc: PriceLocale) => {
  const raw = inr * loc.rate;
  return Math.max(loc.step, Math.round(raw / loc.step) * loc.step);
};

/** Formats an INR amount as local currency, e.g. 699 -> "₱470". */
export const money = (inr: number, loc: PriceLocale) =>
  `${loc.symbol}${new Intl.NumberFormat(loc.numberLocale, {
    maximumFractionDigits: 0,
  }).format(convert(inr, loc))}`;

// Time zones are a better country signal than navigator.language, which often
// reports a UI language with no region at all ("en"). Only zones for countries
// we actually price are listed; anything else falls through to India.
const ZONE_TO_COUNTRY: Record<string, string> = {
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/Colombo": "LK",
  "Asia/Manila": "PH",
  "Asia/Jakarta": "ID",
  "Asia/Pontianak": "ID",
  "Asia/Makassar": "ID",
  "Asia/Jayapura": "ID",
  "Africa/Lagos": "NG",
  "Africa/Nairobi": "KE",
  "Africa/Johannesburg": "ZA",
  "America/Bogota": "CO",
};

/**
 * Best guess at the visitor's pricing country, for use in an effect after
 * hydration — never during render. The prerendered HTML must stay identical
 * for every visitor and every crawler; switching currency during render would
 * both break hydration and start showing search engines something other than
 * what the cached page says.
 */
export const detectLocale = (): PriceLocale => {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const byZone = zone && ZONE_TO_COUNTRY[zone];
    if (byZone) return localeByCode(byZone);
  } catch {
    // Intl can throw in older or locked-down browsers; fall through.
  }

  const region = new Intl.Locale(navigator.language || "en-IN").region;
  if (region) {
    const match = PRICE_LOCALES.find((l) => l.code === region);
    if (match) return match;
  }

  return DEFAULT_LOCALE;
};

const STORAGE_KEY = "vasool.pricing.country";

export const readStoredLocale = (): PriceLocale | null => {
  if (typeof window === "undefined") return null;
  try {
    const code = window.localStorage.getItem(STORAGE_KEY);
    return code ? localeByCode(code) : null;
  } catch {
    return null;
  }
};

export const storeLocale = (code: string) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Private browsing and blocked storage are fine — the selector still works
    // for this visit, it just won't be remembered.
  }
};
