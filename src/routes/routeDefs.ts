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
  // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
  { path: "*", importer: () => import("../pages/NotFound") },
];
