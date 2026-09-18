import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Hosted lead-capture form (finance name, phone number, state) — the form
// itself, its fields and its submission handling live entirely on
// automationclub.in; this component only decides *when* to show it and
// embeds it via iframe.
const FORM_URL = "https://connect.automationclub.in/widget/form/3I4QyHluL51uK4bf4wJi";

// Shows 10 seconds after the visitor's first scroll on the site (not 10
// seconds after page load — someone who never scrolls never sees it).
const SCROLL_DELAY_MS = 10_000;

// Session-scoped so the popup doesn't reappear on every client-side route
// change within the same visit, but a fresh visit (new tab / next day)
// gets another chance to show it.
const SESSION_KEY = "vasool_lead_popup_shown";

const LeadCapturePopup = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Storage unavailable (private browsing, blocked cookies, etc.) —
      // fall back to showing once per page load instead of erroring out.
    }
    if (alreadyShown) return;

    let hasStartedTimer = false;

    const onScroll = () => {
      if (hasStartedTimer) return;
      hasStartedTimer = true;
      timerRef.current = setTimeout(() => {
        setOpen(true);
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          // Best-effort only.
        }
      }, SCROLL_DELAY_MS);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md overflow-hidden p-0 sm:max-w-lg">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>{t("leadPopup.title")}</DialogTitle>
          <DialogDescription>{t("leadPopup.description")}</DialogDescription>
        </DialogHeader>
        <iframe
          src={FORM_URL}
          title={t("leadPopup.title")}
          style={{ width: "100%", height: "520px", border: "none" }}
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  );
};

export default LeadCapturePopup;
