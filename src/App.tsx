import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Security from "./pages/Security";
import AboutUs from "./pages/AboutUs";
import FeaturesPage from "./pages/Features";
import LoanTypes from "./pages/LoanTypes";
import StaffTools from "./pages/StaffTools";
import Pricing from "./pages/Pricing";
import Compare from "./pages/Compare";
import LoanCollectionApp from "./pages/solutions/LoanCollectionApp";
import DailyCollectionApp from "./pages/solutions/DailyCollectionApp";
import VoiceEntryCollectionApp from "./pages/solutions/VoiceEntryCollectionApp";
import WeeklyCollectionApp from "./pages/solutions/WeeklyCollectionApp";
import MonthlyFinanceApp from "./pages/solutions/MonthlyFinanceApp";
import LineManagementApp from "./pages/solutions/LineManagementApp";
import KandhuVattiApp from "./pages/solutions/KandhuVattiApp";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";

const queryClient = new QueryClient();

// The router is provided by the entry point: BrowserRouter in main.tsx,
// StaticRouter in entry-server.tsx (prerendering).
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/loan-types" element={<LoanTypes />} />
        <Route path="/staff-tools" element={<StaffTools />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/loan-collection-app" element={<LoanCollectionApp />} />
        <Route path="/daily-collection-app" element={<DailyCollectionApp />} />
        <Route path="/voice-entry-collection-app" element={<VoiceEntryCollectionApp />} />
        <Route path="/weekly-collection-app" element={<WeeklyCollectionApp />} />
        <Route path="/monthly-finance-app" element={<MonthlyFinanceApp />} />
        <Route path="/line-management-app" element={<LineManagementApp />} />
        <Route path="/kandhu-vatti-app" element={<KandhuVattiApp />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppFloat />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
