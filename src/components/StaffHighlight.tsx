import {
  Smartphone,
  MapPin,
  Receipt,
  Shield,
  WifiOff,
  Fingerprint,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import BalancedText from "./pretext/BalancedText";
import PretextReveal from "./pretext/PretextReveal";

const staffCards = [
  {
    icon: Smartphone,
    titleKey: "home.staff.cards.mobile.title",
    descKey: "home.staff.cards.mobile.desc",
    iconColor: "text-emerald-500",
    borderHover: "hover:border-emerald-500/30",
  },
  {
    icon: MapPin,
    titleKey: "home.staff.cards.gps.title",
    descKey: "home.staff.cards.gps.desc",
    iconColor: "text-teal-500",
    borderHover: "hover:border-teal-500/30",
  },
  {
    icon: Receipt,
    titleKey: "home.staff.cards.expense.title",
    descKey: "home.staff.cards.expense.desc",
    iconColor: "text-amber-500",
    borderHover: "hover:border-amber-500/30",
  },
  {
    icon: Shield,
    titleKey: "home.staff.cards.rbac.title",
    descKey: "home.staff.cards.rbac.desc",
    iconColor: "text-cyan-500",
    borderHover: "hover:border-cyan-500/30",
  },
  {
    icon: WifiOff,
    titleKey: "home.staff.cards.offline.title",
    descKey: "home.staff.cards.offline.desc",
    iconColor: "text-violet-500",
    borderHover: "hover:border-violet-500/30",
  },
  {
    icon: Fingerprint,
    titleKey: "home.staff.cards.biometric.title",
    descKey: "home.staff.cards.biometric.desc",
    iconColor: "text-rose-500",
    borderHover: "hover:border-rose-500/30",
  },
];

const StaffHighlight = () => {
  const { t } = useTranslation();

  const sectionTitle = `${t("home.staff.title1")} ${t("home.staff.title2")}`;

  const bulletKeys = [
    "home.staff.bullet1",
    "home.staff.bullet2",
    "home.staff.bullet3",
    "home.staff.bullet4",
    "home.staff.bullet5",
  ];

  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left content — Pretext balanced & reveal */}
          <div>
            <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3 block">
              {t("home.staff.badge")}
            </span>
            <BalancedText
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight"
              font='700 44px "Plus Jakarta Sans"'
              lineHeight={52}
            >
              {sectionTitle}
            </BalancedText>
            <PretextReveal
              as="p"
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8"
              font='400 18px "Plus Jakarta Sans"'
              lineHeight={28}
              staggerMs={70}
            >
              {t("home.staff.description")}
            </PretextReveal>

            <div className="space-y-3.5 mb-9">
              {bulletKeys.map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <CheckCircle2 className="w-[18px] h-[18px] text-secondary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/staff-tools"
              className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
            >
              {t("home.staff.exploreBtn")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — card grid with Pretext-powered descriptions */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            {staffCards.map((card, idx) => (
              <div
                key={card.titleKey}
                className={`bg-card rounded-2xl p-5 sm:p-6 border border-border/60 shadow-card hover:shadow-card-hover ${card.borderHover} transition-all duration-300 ${
                  idx % 2 === 1 ? "sm:translate-y-4" : ""
                }`}
              >
                <card.icon
                  className={`w-6 h-6 ${card.iconColor} mb-3.5`}
                />
                <h4 className="text-sm sm:text-[15px] font-bold text-foreground mb-1.5">
                  {t(card.titleKey)}
                </h4>
                <PretextReveal
                  as="p"
                  className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed"
                  font='400 13px "Plus Jakarta Sans"'
                  lineHeight={20}
                  staggerMs={40}
                >
                  {t(card.descKey)}
                </PretextReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffHighlight;
