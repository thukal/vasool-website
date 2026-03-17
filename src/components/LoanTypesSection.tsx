import {
  Calendar,
  CalendarDays,
  Package,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const loanTypes = [
  {
    icon: Calendar,
    titleKey: "home.loans.daily.title",
    descKey: "home.loans.daily.desc",
    highlights: [
      "home.loans.daily.h1",
      "home.loans.daily.h2",
      "home.loans.daily.h3",
    ],
    accent: "bg-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600",
    num: "01",
  },
  {
    icon: CalendarDays,
    titleKey: "home.loans.weekly.title",
    descKey: "home.loans.weekly.desc",
    highlights: [
      "home.loans.weekly.h1",
      "home.loans.weekly.h2",
      "home.loans.weekly.h3",
    ],
    accent: "bg-teal-500",
    iconBg: "bg-teal-50 text-teal-600",
    num: "02",
  },
  {
    icon: Package,
    titleKey: "home.loans.product.title",
    descKey: "home.loans.product.desc",
    highlights: [
      "home.loans.product.h1",
      "home.loans.product.h2",
      "home.loans.product.h3",
    ],
    accent: "bg-amber-500",
    iconBg: "bg-amber-50 text-amber-600",
    num: "03",
  },
];

const LoanTypesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header — left-aligned */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3 block">
            {t("home.loans.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {t("home.loans.title1")}{" "}
            <span className="text-gradient">{t("home.loans.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {t("home.loans.description")}
          </p>
        </div>

        {/* Loan cards — stacked with left accent */}
        <div className="space-y-5 sm:space-y-6 mb-12">
          {loanTypes.map((loan) => (
            <div
              key={loan.titleKey}
              className="group relative bg-card rounded-2xl border border-border/60 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
            >
              {/* Left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${loan.accent} rounded-l-2xl`}
              />

              <div className="grid md:grid-cols-[1fr_auto] gap-6 p-6 sm:p-8 pl-7 sm:pl-10">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${loan.iconBg} flex items-center justify-center`}
                    >
                      <loan.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-muted-foreground/40 text-xs font-bold tracking-widest">
                        {loan.num}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                        {t(loan.titleKey)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-0 md:max-w-lg">
                    {t(loan.descKey)}
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-2.5 md:min-w-[260px]">
                  {loan.highlights.map((hKey) => (
                    <div key={hKey} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">
                        {t(hKey)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/loan-types"
          className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
        >
          {t("home.loans.viewAll")}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default LoanTypesSection;
