import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ShieldCheck, Database, ServerCog, FileCheck2, ArrowUpRight } from "lucide-react";
import { localizedPath } from "@/lib/langRoutes";

// The signals a regulated lender / NBFC evaluates first. Stated as capabilities
// Vasool has today — no compliance guarantees are implied.
const SIGNALS = [
  { icon: ShieldCheck, label: "Complete audit trail" },
  { icon: Database, label: "Isolated database per tenant" },
  { icon: ServerCog, label: "Self-hosted — you own the data" },
  { icon: FileCheck2, label: "KYC document vault" },
];

const TrustBar = () => {
  const { pathname } = useLocation();
  const to = (target: string) => localizedPath(target, pathname);

  return (
    <section className="border-b border-border/70 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-6">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-secondary to-accent" />
            <span className="eyebrow text-secondary">Built for regulated lending</span>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 lg:flex-1 lg:justify-center">
            {SIGNALS.map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                <s.icon className="h-4 w-4 flex-shrink-0 text-secondary" strokeWidth={2} />
                <span className="text-[13px] font-medium text-foreground/75">{s.label}</span>
              </li>
            ))}
          </ul>

          <Link
            to={to("/nbfc-loan-management")}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-secondary hover:text-accent"
          >
            For NBFCs
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
