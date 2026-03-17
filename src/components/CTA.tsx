import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-hero overflow-hidden px-6 sm:px-12 py-14 sm:py-20">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.12)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,hsl(38_90%_52%/0.08)_0%,transparent_70%)]" />
          </div>

          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
              <span className="text-white">{t("cta.title1")} </span>
              <span className="text-gradient">{t("cta.title2")}</span>
            </h2>
            <p className="text-white/45 text-base sm:text-lg mb-9 max-w-xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>

            <div className="flex items-center justify-center mb-10">
              <a href="tel:+918680901007">
                <Button variant="hero" size="lg">
                  {t("nav.bookDemo")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 pt-7 border-t border-white/[0.08]">
              <a
                href="tel:+918680901007"
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 8680901007</span>
              </a>
              <a
                href="mailto:hello@thukal.in"
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@thukal.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
