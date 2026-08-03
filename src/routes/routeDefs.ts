import type { ComponentType } from "react";

export interface RouteDef {
  path: string;
  importer: () => Promise<{ default: ComponentType }>;
}

// Single source of truth for the site's routes. ClientRoutes.tsx code-splits
// each page behind React.lazy(); ServerRoutes.tsx resolves every importer
// eagerly (see resolveServerRoutes) so prerendering — which uses
// renderToString and can't wait on Suspense — always gets full page markup.
export const routeDefs: RouteDef[] = [
  { path: "/", importer: () => import("../pages/Index") },
  { path: "/ta", importer: () => import("../pages/Index") },
  { path: "/privacy", importer: () => import("../pages/PrivacyPolicy") },
  { path: "/terms", importer: () => import("../pages/TermsOfService") },
  { path: "/security", importer: () => import("../pages/Security") },
  { path: "/about", importer: () => import("../pages/AboutUs") },
  { path: "/features", importer: () => import("../pages/Features") },
  { path: "/ta/features", importer: () => import("../pages/Features") },
  { path: "/loan-types", importer: () => import("../pages/LoanTypes") },
  { path: "/ta/loan-types", importer: () => import("../pages/LoanTypes") },
  { path: "/staff-tools", importer: () => import("../pages/StaffTools") },
  { path: "/ta/staff-tools", importer: () => import("../pages/StaffTools") },
  { path: "/pricing", importer: () => import("../pages/Pricing") },
  { path: "/ta/pricing", importer: () => import("../pages/Pricing") },
  { path: "/compare", importer: () => import("../pages/Compare") },
  { path: "/ta/compare", importer: () => import("../pages/Compare") },
  { path: "/loan-collection-app", importer: () => import("../pages/solutions/LoanCollectionApp") },
  { path: "/daily-collection-app", importer: () => import("../pages/solutions/DailyCollectionApp") },
  { path: "/voice-entry-collection-app", importer: () => import("../pages/solutions/VoiceEntryCollectionApp") },
  { path: "/weekly-collection-app", importer: () => import("../pages/solutions/WeeklyCollectionApp") },
  { path: "/monthly-finance-app", importer: () => import("../pages/solutions/MonthlyFinanceApp") },
  { path: "/line-management-app", importer: () => import("../pages/solutions/LineManagementApp") },
  { path: "/kandhu-vatti-app", importer: () => import("../pages/solutions/KandhuVattiApp") },
  { path: "/byaj-wasooli-app", importer: () => import("../pages/solutions/ByajWasooliApp") },
  { path: "/ugrani-app", importer: () => import("../pages/solutions/UgraniApp") },
  { path: "/self-hosted-loan-software", importer: () => import("../pages/solutions/SelfHostedLoanSoftware") },
  { path: "/white-label-loan-app", importer: () => import("../pages/solutions/WhiteLabelLoanApp") },
  { path: "/chit-fund-and-lending-app", importer: () => import("../pages/solutions/ChitFundAndLendingApp") },
  { path: "/nbfc-loan-management", importer: () => import("../pages/solutions/NbfcLoanManagement") },
  // Exact-match pages for the head terms buyers actually search in each market.
  // The Indonesian and Spanish pages are written in-language: an English page
  // does not rank for an Indonesian or Spanish query. See PAGE_LANG in
  // scripts/prerender.mjs, which sets <html lang> for them.
  { path: "/sacco-management-system", importer: () => import("../pages/solutions/SaccoManagementSystem") },
  { path: "/aplikasi-koperasi-simpan-pinjam", importer: () => import("../pages/solutions/AplikasiKoperasiSimpanPinjam") },
  { path: "/software-de-cobranza", importer: () => import("../pages/solutions/SoftwareDeCobranza") },
  { path: "/debt-collection-software-south-africa", importer: () => import("../pages/solutions/DebtCollectionSoftwareSouthAfrica") },
  // Country pages. India isn't listed here — the whole site is the India
  // pitch, and /nbfc-loan-management is its entry in the country hub.
  { path: "/countries", importer: () => import("../pages/Countries") },
  { path: "/loan-management-software-philippines", importer: () => import("../pages/countries/Philippines") },
  { path: "/loan-management-software-nigeria", importer: () => import("../pages/countries/Nigeria") },
  { path: "/loan-management-software-kenya", importer: () => import("../pages/countries/Kenya") },
  { path: "/loan-management-software-sri-lanka", importer: () => import("../pages/countries/SriLanka") },
  { path: "/loan-management-software-indonesia", importer: () => import("../pages/countries/Indonesia") },
  { path: "/loan-management-software-south-africa", importer: () => import("../pages/countries/SouthAfrica") },
  { path: "/loan-management-software-colombia", importer: () => import("../pages/countries/Colombia") },
  // Cambodia has a market page but no company setup yet — see status: "preview".
  { path: "/loan-management-software-cambodia", importer: () => import("../pages/countries/Cambodia") },
  // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
  { path: "*", importer: () => import("../pages/NotFound") },
];
