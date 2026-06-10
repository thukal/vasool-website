import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BalancedText from "./pretext/BalancedText";
import { useInView } from "@/hooks/useInView";

export interface FAQItem {
  question: string;
  answer: string;
}

// Rendered on the page and emitted as FAQPage structured data — keep both in
// sync by editing only this list.
export const faqItems: FAQItem[] = [
  {
    question: "What is Vasool App?",
    answer:
      "Vasool App is a voice entry loan collection app for money lenders, micro finance companies, finance shops, and chit fund operators in India. It manages daily, weekly, and monthly collections, EMI loans, gold loans, and interest-only loans with a mobile app for field staff, a web dashboard for the office, and a self-service portal for customers.",
  },
  {
    question: "How does voice entry collection work?",
    answer:
      'Instead of typing, your collection agent simply speaks the entry — for example "Arun 500 cash" or "Selvi 200 GPay" — and Vasool records the payment against the right customer automatically. Voice entry works in 6 languages including Tamil, Telugu, Hindi, Malayalam, and Kannada, making it the fastest way to record daily collections in the field.',
  },
  {
    question: "Does Vasool work offline without internet?",
    answer:
      "Yes. Vasool is built for field conditions — the mobile app works fully offline and syncs automatically when your phone is back online. Collection agents can record payments, add customers, and view balances in areas with no network coverage, so you never lose an entry.",
  },
  {
    question: "Can I attach photos to loan entries and customer profiles?",
    answer:
      "Yes. Vasool supports photo proof on collections, photo KYC for borrowers, and document photo storage. Attach customer photos, ID proofs, and signed documents to every loan, so you have customer photo-wise tracking and paperless records instead of a manual vasool notebook.",
  },
  {
    question: "What types of loans does Vasool support?",
    answer:
      "Vasool supports daily, weekly, monthly, and semi-monthly line finance, EMI loans with foreclosure and tenure controls, interest-only loans, gold loans with live gold-rate fetching, gold sales, and product-backed loans tied to your inventory. Each loan type has its own collection workflow and repayment schedule.",
  },
  {
    question: "Which languages does Vasool support?",
    answer:
      "Vasool works in English, Tamil, Telugu, Hindi, Malayalam, and Kannada — both the app interface and voice entry. Your field staff can collect in their own language while the office sees everything in one dashboard.",
  },
  {
    question: "Can Vasool manage my collection staff?",
    answer:
      "Yes. Vasool is a loan collection app with full staff management: live GPS tracking of field agents, route planning and navigation, custom role-based permissions, performance reports, cash advances, expense approvals, and a day book per route.",
  },
  {
    question: "Does Vasool generate PDF receipts and reports?",
    answer:
      "Yes. Every collection generates an automated PDF receipt, and every report — Profit & Loss, day book, officer performance, customer overdue — can be exported as a PDF. UPI collections via GPay, PhonePe, and scan are recorded with a full audit log.",
  },
  {
    question: "How do I move my manual vasool notebook to the app?",
    answer:
      "Digitizing your vasool business is simple: import your existing customers and loans, and from day one your staff record collections by voice or a single tap instead of writing in a vasool book or diary. Balances, interest, and due dates are calculated automatically, with no math errors and no lost notebooks.",
  },
  {
    question: "Is Vasool free to use? How does pricing work?",
    answer:
      "Vasool offers a free plan to get started, and every deployment includes all features with no upsells. Each business runs on its own isolated infrastructure with a dedicated database — your data never mixes with another tenant's. Contact us for pricing for your finance business.",
  },
];

const FAQSection = () => {
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
          <BalancedText
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight"
            font='700 44px "Plus Jakarta Sans"'
            lineHeight={52}
          >
            Frequently Asked Questions
          </BalancedText>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-balance">
            Everything money lenders and finance businesses ask before
            switching from a manual vasool notebook to Vasool.
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
