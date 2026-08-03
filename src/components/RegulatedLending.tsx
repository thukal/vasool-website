import { Link, useLocation } from "react-router-dom";
import {
  ShieldCheck,
  Database,
  FileCheck2,
  Sparkles,
  UserCheck,
  EyeOff,
  ArrowRight,
  Info,
} from "lucide-react";
import { localizedPath } from "@/lib/langRoutes";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Immutable audit trail",
    desc: "Every edit, approval, and closure is written to an audit log with full entity history — reconstruct exactly what changed, when, and by whom.",
  },
  {
    icon: UserCheck,
    title: "Maker-checker approvals",
    desc: "Hold a staff member's create, edit or delete until an owner or manager approves it. Turn it on for the resources that need a second pair of eyes, leave the rest one-tap.",
  },
  {
    icon: EyeOff,
    title: "Need-to-know data scoping",
    desc: "Roles default to seeing only their own customers and loans. Grant View All per resource — so no field phone ever holds the whole book unless you say so.",
  },
  {
    icon: Database,
    title: "Per-tenant data isolation",
    desc: "Your company runs in its own database, on your own server. Data never mixes with another lender's — the governance story an examiner expects.",
  },
  {
    icon: FileCheck2,
    title: "KYC document vault",
    desc: "Capture and store Aadhaar, PAN, voter ID, ration-card and gas-bill proofs against every borrower, ready for verification and inspection.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted credit checks",
    desc: "Aggregate a borrower's full history into a risk score with an approve / review / reject call and a suggested limit — an underwriting second opinion.",
  },
];

const RegulatedLending = () => {
  const { pathname } = useLocation();
  const to = (target: string) => localizedPath(target, pathname);

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-secondary">Regulated lending</span>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            The controls a regulated lender is judged on
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vasool gives an NBFC the governance layer up front — and stays honest
            about what's still on the roadmap.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-card sm:p-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <p.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Honest roadmap note — trust is built by not overclaiming to a regulated buyer. */}
        <div className="mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-xl border border-accent/30 bg-accent/[0.07] px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={2.2} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">On the roadmap:</span>{" "}
            NPA classification (RBI norms), credit-bureau reporting (CIBIL / CRIF),
            and CKYC upload. Vasool is built to support your compliance — never a
            substitute for it.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link
            to={to("/nbfc-loan-management")}
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 transition-all hover:brightness-110"
          >
            Explore the NBFC platform
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/security"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-accent"
          >
            Security &amp; data ownership
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegulatedLending;
