import { Check } from "lucide-react";

// A real progression: the same platform, feature-flagged up as the lender grows.
const TIERS = [
  {
    step: "01",
    tag: "Money lender",
    sub: "One route, cash & voice",
    points: [
      "Voice-entry daily collection",
      "Works fully offline",
      "Photo proof & PDF receipts",
    ],
  },
  {
    step: "02",
    tag: "Finance company",
    sub: "Multiple staff & branches",
    points: [
      "EMI, gold, interest-only & chit",
      "Staff GPS, routes & attendance",
      "P&L, day book & reports",
    ],
  },
  {
    step: "03",
    tag: "NBFC",
    sub: "Regulated, multi-branch",
    points: [
      "Audit trail & data isolation",
      "AI credit checks & DPD tracking",
      "Investor & borrowings ledger",
    ],
    highlight: true,
  },
];

const WhoItsFor = () => (
  <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow text-secondary">Who it's for</span>
        <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          From your first loan to a full NBFC
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Turn features on as you grow. The same Vasool runs a single-route money
          lender and a multi-branch NBFC — you never migrate to a different system.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.step}
            className={`relative rounded-2xl border bg-card p-6 shadow-card sm:p-7 ${
              tier.highlight
                ? "border-accent/40 ring-1 ring-accent/20"
                : "border-border/70"
            }`}
          >
            {tier.highlight && (
              <span className="absolute inset-x-0 -top-px mx-auto h-0.5 w-2/3 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
            )}
            <div className="flex items-baseline justify-between">
              <span
                className={`font-mono-ui text-sm font-semibold tnum ${
                  tier.highlight ? "text-accent" : "text-muted-foreground/60"
                }`}
              >
                {tier.step}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground/70">
                {tier.sub}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-foreground">{tier.tag}</h3>
            <ul className="mt-5 space-y-3">
              {tier.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check
                    className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                      tier.highlight ? "text-accent" : "text-secondary"
                    }`}
                    strokeWidth={2.4}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsFor;
