import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { CONTACT_PHONE_HREF } from "@/lib/contact";
import { localizedPath } from "@/lib/langRoutes";

// Illustrative collection feed — the product's core act (a spoken entry
// becoming a ledger row).
const LEDGER = [
  { name: "Arun K.", amount: "500", method: "Cash", voice: true },
  { name: "Selvi R.", amount: "200", method: "GPay", voice: false },
  { name: "Meena", amount: "150", method: "Cash", voice: false },
  { name: "Karthik", amount: "300", method: "GPay", voice: false },
];

const Hero = () => {
  const { pathname } = useLocation();
  const to = (target: string) => localizedPath(target, pathname);
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Warm, airy light ground: a soft emerald wash + faint grid, kept quiet. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-8%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,hsl(159_70%_40%/0.10)_0%,transparent_70%)]" />
        <div className="absolute -bottom-24 left-[-6%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,hsl(37_70%_50%/0.07)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(156_34%_11%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(156_34%_11%/0.03)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 pb-20 pt-24 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-32">
          {/* Left — message */}
          <div className="max-w-xl">
            <span className="animate-fade-up eyebrow inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/[0.07] px-3.5 py-1.5 text-secondary">
              <Mic className="h-3.5 w-3.5" />
              {t("hero.badge")}
            </span>

            <h1 className="animate-fade-up-delay-1 mt-6 text-balance text-[2.6rem] font-extrabold leading-[1.05] text-foreground sm:text-6xl lg:text-[4.1rem] lg:leading-[1.03]">
              {t("hero.title1")}{" "}
              <span className="text-gradient">{t("hero.title2")}</span>{" "}
              {t("hero.title3")}
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={CONTACT_PHONE_HREF} className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  {t("nav.bookDemo")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={to("/features")} className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  {t("nav.features")}
                </Button>
              </a>
            </div>

            <dl className="animate-fade-up-delay-4 mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:max-w-md">
              {[
                { v: t("hero.stat1Value"), l: t("hero.stat1Label") },
                { v: t("hero.stat2Value"), l: t("hero.stat2Label") },
                { v: t("hero.stat3Value"), l: t("hero.stat3Label") },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-mono-ui text-2xl font-extrabold tracking-tight text-foreground sm:text-[1.7rem]">
                    {s.v}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — the collection ledger (signature), light */}
          <div className="animate-fade-up-delay-3 relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card-hover">
              {/* Panel head */}
              <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
                <div>
                  <div className="eyebrow text-muted-foreground">Today's collection</div>
                  <div className="mt-1 font-mono-ui text-2xl font-extrabold text-foreground tnum">
                    ₹42,850
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono-ui text-sm font-bold text-secondary tnum">
                    68<span className="text-muted-foreground/50"> / 92</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    stops done
                  </div>
                </div>
              </div>

              {/* Route progress */}
              <div className="px-5 pt-4 sm:px-6">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-secondary to-accent" />
                </div>
              </div>

              {/* Ledger rows */}
              <div className="space-y-2 p-4 sm:p-5">
                {LEDGER.map((row) => (
                  <div
                    key={row.name}
                    className={`flex items-center gap-3 rounded-xl px-3.5 py-3 ${
                      row.voice
                        ? "bg-secondary/[0.08] ring-1 ring-secondary/20"
                        : "bg-muted/60"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        row.voice ? "bg-secondary/15 text-secondary" : "bg-foreground/[0.06] text-muted-foreground"
                      }`}
                    >
                      {row.voice ? (
                        <Mic className="h-4 w-4" />
                      ) : (
                        <span className="font-mono-ui text-xs font-semibold">{row.name[0]}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium text-foreground">
                        {row.name}
                        {row.voice && (
                          <span className="eyebrow ml-2 align-middle text-secondary">voice</span>
                        )}
                      </div>
                      <div className="text-[11px] text-muted-foreground">{row.method}</div>
                    </div>
                    <div className="font-mono-ui text-sm font-bold text-foreground tnum">
                      ₹{row.amount}
                    </div>
                  </div>
                ))}
              </div>

              {/* Voice prompt footer */}
              <div className="flex items-center gap-3 border-t border-border px-5 py-4 sm:px-6">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white">
                  <span className="absolute inset-0 animate-ping rounded-full bg-secondary/30" />
                  <Mic className="relative h-4 w-4" />
                </span>
                <span className="text-xs text-muted-foreground">
                  “Arun 500 cash” → <span className="font-semibold text-secondary">recorded</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
