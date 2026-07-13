import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Shared shell around the routed page content. The router and the route
// table itself are provided by the entry point: main.tsx renders
// ClientRoutes (code-split) inside BrowserRouter, entry-server.tsx renders
// ServerRoutes (eagerly resolved) inside StaticRouter for prerendering.
const App = ({ children }: { children: ReactNode }) => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    {children}
    <WhatsAppFloat />
  </TooltipProvider>
);

export default App;
