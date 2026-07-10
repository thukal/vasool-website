import {
  Users,
  MapPin,
  BarChart3,
  Lock,
  Building2,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import BalancedText from "./pretext/BalancedText";
import { useInView } from "@/hooks/useInView";

interface FeatureItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  iconBg: string;
}

const features: FeatureItem[] = [
  {
    icon: Users,
    titleKey: "home.features.customer.title",
    descKey: "home.features.customer.desc",
    iconBg: "bg-teal-500/10 text-teal-500",
  },
  {
    icon: MapPin,
    titleKey: "home.features.route.title",
    descKey: "home.features.route.desc",
    iconBg: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: BarChart3,
    titleKey: "home.features.reporting.title",
    descKey: "home.features.reporting.desc",
    iconBg: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Lock,
    titleKey: "home.features.security.title",
    descKey: "home.features.security.desc",
    iconBg: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: Building2,
    titleKey: "home.features.multiTenancy.title",
    descKey: "home.features.multiTenancy.desc",
    iconBg: "bg-cyan-500/10 text-cyan-500",
  },
  {
    icon: Sparkles,
    titleKey: "home.features.automation.title",
    descKey: "home.features.automation.desc",
    iconBg: "bg-violet-500/10 text-violet-500",
  },
];

const stats = [
  { value: "73+", labelKey: "home.features.stat1" },
  { value: "13", labelKey: "home.features.stat2" },
  { value: "100+", labelKey: "home.features.stat3" },
  { value: "27+", labelKey: "home.features.stat4" },
];

const FeaturesHighlight = () => {
  const { t } = useTranslation();
  const { ref: sectionRef, inView } = useInView(0.05);

  const sectionTitle = `${t("home.features.title1")} ${t("home.features.title2")}`;

  return (
    <section className="py-20 sm:py-28 bg-hero relative overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header with entrance transition */}
        <div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-emerald-400 font-semibold text-sm tracking-wide uppercase mb-3 block">
            {t("home.features.badge")}
          </span>
          <BalancedText
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            font='700 44px "Plus Jakarta Sans"'
            lineHeight={52}
          >
            {sectionTitle}
          </BalancedText>
          <p className="text-white/45 text-base sm:text-lg leading-relaxed text-balance">
            {t("home.features.description")}
          </p>
        </div>

        {/* Stats row with staggered entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-14 sm:mb-16">
          {stats.map((s, i) => (
            <div
              key={s.labelKey}
              className="text-center py-5 px-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06] hover:scale-105 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                transition: `opacity 0.5s ease ${300 + i * 100}ms, transform 0.5s ease ${300 + i * 100}ms`,
              }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                {s.value}
              </div>
              <div className="text-[11px] sm:text-xs text-white/40 uppercase tracking-wider font-medium">
                {t(s.labelKey)}
              </div>
            </div>
          ))}
        </div>

        {/* Feature grid — CSS grid with staggered entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {features.map((feature, i) => (
            <div
              key={feature.titleKey}
              className="group rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 sm:p-7 hover:bg-white/[0.07] hover:border-white/[0.1] hover:-translate-y-1 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${500 + i * 100}ms, transform 0.6s ease ${500 + i * 100}ms`,
              }}
            >
              <div
                className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div
          className="text-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 1.2s",
          }}
        >
          <a
            href="/features"
            className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:gap-3 transition-all"
          >
            {t("home.features.viewAll")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;
