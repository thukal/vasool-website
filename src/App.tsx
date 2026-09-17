import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { trackMetaEvent } from "@/lib/analytics";

// Classifies a clicked link's href into a Meta "Contact" sub-channel, or
// null if it isn't a contact action worth tracking.
function contactChannel(href: string): string | null {
  if (href.startsWith("tel:")) return "call";
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) return "whatsapp";
  return null;
}

// Shared shell around the routed page content. The router and the route
// table itself are provided by the entry point: main.tsx renders
// ClientRoutes (code-split) inside BrowserRouter, entry-server.tsx renders
// ServerRoutes (eagerly resolved) inside StaticRouter for prerendering.
const App = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Site-wide conversion tracking (Meta Pixel + Conversions API — see
    // src/lib/analytics.ts). The "Book Demo" tel: link, mailto: links, and
    // WhatsApp chat link are reused across ~15 components/pages; a single
    // delegated listener here covers every one of them (present and
    // future) instead of adding an onClick to each call site individually.
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      const channel = contactChannel(href);
      if (!channel) return;

      trackMetaEvent("Contact", { content_name: channel, content_category: "contact_cta" });
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
      <WhatsAppFloat />
    </TooltipProvider>
  );
};

export default App;
