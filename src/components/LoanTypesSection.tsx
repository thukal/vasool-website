import {
  Calendar,
  CalendarDays,
  Package,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import BalancedText from "./pretext/BalancedText";
import PretextReveal from "./pretext/PretextReveal";

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
    accent: "from-emerald-500 to-emerald-600",
    accentBg: "bg-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600",
    glowColor: "emerald",
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
    accent: "from-teal-500 to-teal-600",
    accentBg: "bg-teal-500",
    iconBg: "bg-teal-50 text-teal-600",
    glowColor: "teal",
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
    accent: "from-amber-500 to-amber-600",
    accentBg: "bg-amber-500",
    iconBg: "bg-amber-50 text-amber-600",
    glowColor: "amber",
    num: "03",
  },
];

const LoanTypesSection = () => {
  const { t } = useTranslation();

  const sectionTitle = `${t("home.loans.title1")} ${t("home.loans.title2")}`;

  return (
    <section className="py-20 sm:py-28 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header — balanced with Pretext */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3 block">
            {t("home.loans.badge")}
          </span>
          <BalancedText
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
            font='700 44px "Plus Jakarta Sans"'
            lineHeight={52}
          >
            {sectionTitle}
          </BalancedText>
          <PretextReveal
            as="p"
            className="text-muted-foreground text-base sm:text-lg leading-relaxed"
            font='400 18px "Plus Jakarta Sans"'
            lineHeight={28}
            staggerMs={60}
          >
            {t("home.loans.description")}
          </PretextReveal>
        </div>

        {/* Loan cards — redesigned with gradient accent and Pretext descriptions */}
        <div className="space-y-5 sm:space-y-6 mb-12">
          {loanTypes.map((loan) => (
            <div
              key={loan.titleKey}
              className="group relative bg-card rounded-2xl border border-border/60 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
            >
              {/* Left accent bar with gradient */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${loan.accentBg} rounded-l-2xl group-hover:w-1.5 transition-all duration-300`}
              />

              <div className="grid md:grid-cols-[1fr_auto] gap-6 p-6 sm:p-8 pl-7 sm:pl-10">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${loan.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
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
                  {/* Pretext-powered description with line reveal */}
                  <PretextReveal
                    as="p"
                    className="text-muted-foreground leading-relaxed mb-0 md:max-w-lg"
                    font='400 16px "Plus Jakarta Sans"'
                    lineHeight={26}
                    staggerMs={50}
                  >
                    {t(loan.descKey)}
                  </PretextReveal>
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
