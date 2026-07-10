import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { CONTACT_PHONE_HREF } from "@/lib/contact";
import { localizedPath, basePathOf } from "@/lib/langRoutes";

const NAV_LINKS = [
  { key: "nav.features", to: "/features" },
  { key: "nav.loanTypes", to: "/loan-types" },
  { key: "nav.staffTools", to: "/staff-tools" },
  { key: "nav.pricing", to: "/pricing" },
  { key: "nav.compare", to: "/compare" },
] as const;

const Navigation = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const to = (target: string) => localizedPath(target, pathname);
  const base = basePathOf(pathname);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      {/* Warm-white floating capsule — reads cleanly over the light hero and the
          deep-green inner-page bands alike. */}
      <nav className="mx-auto grid h-14 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[1.15rem] border border-foreground/[0.08] bg-[hsl(42_44%_99%/0.82)] pl-4 pr-2 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_14px_38px_-16px_hsl(156_40%_12%/0.35)] backdrop-blur-xl">
        {/* Brand */}
        <a href={to("/")} className="flex shrink-0 items-center gap-2.5 text-foreground" aria-label="Vasool home">
          <img src="/favicon.png" alt="" className="h-8 w-8 rounded-lg" />
          <span className="font-display text-lg font-extrabold tracking-tight">Vasool</span>
        </a>

        {/* Links */}
        <div className="hidden items-center justify-self-center lg:flex">
          {NAV_LINKS.map((link) => {
            const active = base === link.to;
            return (
              <a
                key={link.to}
                href={to(link.to)}
                aria-current={active ? "page" : undefined}
                className={`relative px-4 py-2 text-sm transition-colors ${
                  active ? "font-medium text-secondary" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {t(link.key)}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-self-end gap-2">
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>
          <a href={CONTACT_PHONE_HREF} className="hidden lg:block">
            <Button variant="hero" size="sm" className="shadow-md shadow-secondary/20">
              {t("nav.bookDemo")}
            </Button>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground/70 hover:bg-foreground/[0.06] hover:text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-foreground/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 mx-auto mt-2 max-w-6xl rounded-2xl border border-foreground/[0.08] bg-card p-3 shadow-xl">
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => {
                const active = base === link.to;
                return (
                  <a
                    key={link.to}
                    href={to(link.to)}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 text-[15px] ${
                      active ? "bg-secondary/10 font-semibold text-secondary" : "text-foreground/75"
                    }`}
                  >
                    {t(link.key)}
                    <ArrowRight className="h-4 w-4 text-foreground/25" />
                  </a>
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
              <LanguageSelector />
              <a href={CONTACT_PHONE_HREF} className="flex-1">
                <Button variant="hero" size="sm" className="w-full">
                  {t("nav.bookDemo")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
