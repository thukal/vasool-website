import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/useInView";

export interface FAQItem {
  question: string;
  answer: string;
}

// FAQ content lives in the locale files (home.faq) so it follows the active
// language. This hook is shared by the section and by Index.tsx's FAQPage
// structured data, keeping the visible text and schema in sync per language.
export const useHomeFaq = (): FAQItem[] => {
  const { t } = useTranslation();
  return t("home.faq", { returnObjects: true }) as FAQItem[];
};

const FAQSection = () => {
  const { t } = useTranslation();
  const faqItems = useHomeFaq();
  const { ref: sectionRef, inView } = useInView(0.05);

  return (
    <section className="py-20 sm:py-28 bg-background relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-emerald-600 font-semibold text-sm tracking-wide uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="mb-5 text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            {t("home.faqTitle")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-balance">
            {t("home.faqSubtitle")}
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 200ms, transform 0.6s ease 200ms",
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
