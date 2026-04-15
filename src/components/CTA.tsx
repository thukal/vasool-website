import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  mailtoHref,
} from "@/lib/contact";

const CTA = () => {
  const { t } = useTranslation();
  const { ref: sectionRef, inView } = useInView(0.2);

  const ctaTitle = `${t("cta.title1")} ${t("cta.title2")}`;

  return (
    <section className="py-16 sm:py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-3xl bg-hero overflow-hidden px-6 sm:px-12 py-14 sm:py-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.96)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.12)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,hsl(38_90%_52%/0.08)_0%,transparent_70%)]" />
          </div>

          <div className="relative max-w-2xl mx-auto text-center">
            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease 200ms, transform 0.6s ease 200ms",
              }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight text-white text-balance">
                {ctaTitle}
              </h2>
            </div>
            <p
              className="text-white/45 text-base sm:text-lg mb-9 max-w-xl mx-auto leading-relaxed text-balance"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 350ms, transform 0.6s ease 350ms",
              }}
            >
              {t("cta.description")}
            </p>

            <div
              className="flex items-center justify-center mb-10"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
                transition: "opacity 0.5s ease 500ms, transform 0.5s ease 500ms",
              }}
            >
              <a href={CONTACT_PHONE_HREF}>
                <Button variant="hero" size="lg">
                  {t("nav.bookDemo")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 pt-7 border-t border-white/[0.08]"
              style={{
                opacity: inView ? 1 : 0,
                transition: "opacity 0.6s ease 650ms",
              }}
            >
              <a
                href={CONTACT_PHONE_HREF}
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <a
                href={mailtoHref()}
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
