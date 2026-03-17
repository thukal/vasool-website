import {
  Banknote,
  CreditCard,
  MapPin,
  Users,
  UserCog,
  Wallet,
  BarChart3,
  Shield,
  Package,
  Lock,
  Building2,
  Code2,
  Settings,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const categories = [
  { key: "coreLoan", icon: Banknote, color: "from-emerald-500 to-teal-500" },
  { key: "collection", icon: CreditCard, color: "from-blue-500 to-cyan-500" },
  { key: "route", icon: MapPin, color: "from-orange-500 to-amber-500" },
  { key: "customer", icon: Users, color: "from-violet-500 to-purple-500" },
  { key: "staffTeam", icon: UserCog, color: "from-rose-500 to-pink-500" },
  { key: "staffFinancials", icon: Wallet, color: "from-yellow-500 to-orange-500" },
  { key: "reporting", icon: BarChart3, color: "from-indigo-500 to-blue-500" },
  { key: "referee", icon: Shield, color: "from-teal-500 to-emerald-500" },
  { key: "product", icon: Package, color: "from-pink-500 to-rose-500" },
  { key: "security", icon: Lock, color: "from-red-500 to-orange-500" },
  { key: "multiTenancy", icon: Building2, color: "from-cyan-500 to-blue-500" },
  { key: "api", icon: Code2, color: "from-purple-500 to-violet-500" },
  { key: "operations", icon: Settings, color: "from-slate-500 to-gray-500" },
];

const AllFeatures = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            {t("allFeatures.badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t("allFeatures.title1")}{" "}
            <span className="text-gradient">{t("allFeatures.title2")}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            {t("allFeatures.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => {
            const items = t(`allFeatures.${category.key}.items`, {
              returnObjects: true,
            }) as string[];

            return (
              <div
                key={category.key}
                className="group relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} p-2 sm:p-2.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {t(`allFeatures.${category.key}.title`)}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {items.length} {t("allFeatures.featuresLabel")}
                    </span>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;
