import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Minus,
  X,
  Mic,
  Camera,
  WifiOff,
  Server,
  Palette,
  Layers,
  HelpCircle,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLangPage } from "@/lib/i18nPage";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

type CellValue = "yes" | "partial" | "no";
interface CompareRow {
  feature: string;
  vasool: CellValue;
  typicalApp: CellValue;
  notebook: CellValue;
}
interface Reason {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const rowValues: Pick<CompareRow, "vasool" | "typicalApp" | "notebook">[] = [
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "partial", notebook: "no" },
  { vasool: "yes", typicalApp: "partial", notebook: "yes" },
  { vasool: "yes", typicalApp: "yes", notebook: "partial" },
  { vasool: "yes", typicalApp: "partial", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "yes", notebook: "no" },
  { vasool: "yes", typicalApp: "partial", notebook: "no" },
  { vasool: "yes", typicalApp: "partial", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "partial", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "partial", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
  { vasool: "yes", typicalApp: "no", notebook: "no" },
];

const rowFeaturesEn = [
  "Voice to data — spoken entries become structured records (6 languages)",
  "Chit funds & lending together in a single app",
  "Self-host on your own server — even a Raspberry Pi",
  "White-label with your own brand & subdomain",
  "Photo proof on collections & photo KYC",
  "Works fully offline, syncs when back online",
  "Daily, weekly & monthly line finance",
  "EMI loans with foreclosure & tenure controls",
  "Gold loans with live gold-rate fetching",
  "Product-backed loans tied to inventory",
  "Automatic interest calculation",
  "PDF receipts & report export",
  "UPI collections (GPay, PhonePe, scan)",
  "Live GPS staff tracking & route planning",
  "Role-based staff permissions",
  "Customer self-service portal",
  "App interface in Tamil, Telugu, Hindi, Malayalam & Kannada",
  "Dedicated database per business",
  "Audit log with before/after snapshots",
];

const rowFeaturesTa = [
  "Voice to data — பேசற entry structured record ஆகும் (6 மொழி)",
  "Chit fund & lending ஒரே app-ல சேர்ந்து",
  "உங்க சொந்த server-ல self-host — Raspberry Pi-லயும்",
  "உங்க brand & subdomain-உடன் white-label",
  "Collection-ல photo proof & photo KYC",
  "முழுசா offline work ஆகும், online வந்தவுடன் sync",
  "Daily, weekly & monthly line finance",
  "Foreclosure & tenure control உள்ள EMI loan",
  "Live gold-rate எடுக்கற gold loan",
  "Inventory-உடன் இணைந்த product-backed loan",
  "Automatic interest calculation",
  "PDF receipt & report export",
  "UPI collection (GPay, PhonePe, scan)",
  "Live GPS staff tracking & route planning",
  "Role-based staff permission",
  "Customer self-service portal",
  "தமிழ், தெலுங்கு, இந்தி, மலையாளம் & கன்னடத்தில் app interface",
  "Business-க்கு dedicated database",
  "Before/after snapshot உள்ள audit log",
];

const content = {
  en: {
    title: "Best Vasool App 2026 - Vasool vs Vasool Book Apps & Diary",
    description:
      "Looking for a Vasool Book or Vasool Diary alternative? Compare the best vasool apps of 2026 — voice to data collections, self-hosting on your own server, white-label branding, chit & lending in one app, photo proof, GPS staff tracking. See why money lenders switch to Vasool.",
    back: "Back to Home",
    h1a: "The best vasool app in 2026 —",
    h1b: "compared",
    intro: (
      <>
        Searching for a Vasool Book or Vasool Diary alternative? Here's how
        Vasool compares with typical vasool book apps and the manual notebook
        most lending businesses still run on — voice to data entry, self-hosting
        on your own server, white-label branding, and chit &amp; lending in one
        app, feature by feature.
      </>
    ),
    colFeature: "Feature",
    colTypical: "Typical vasool book apps",
    colNotebook: "Manual notebook / diary",
    legendYes: "Included",
    legendPartial: "Varies or limited",
    legendNo: "Not available",
    tableNote:
      '"Typical vasool book apps" reflects features commonly found in generic vasool book and diary apps — individual apps vary.',
    whyTitle: "Why money lenders switch to Vasool",
    whyText:
      "Most vasool book apps digitize the ledger and stop there. Vasool runs the whole field operation — and four of its advantages no other vasool app offers at all.",
    altTitle: "Looking for a Vasool Book or Vasool Diary alternative?",
    altP1:
      "Vasool book and vasool diary apps replace your paper notebook with a digital one — customer names, amounts, and balances on a phone instead of paper. That's a good first step, but the daily work of a lending business happens in the field: agents knocking on doors, collecting cash and UPI, and writing entries while standing on the street.",
    freeTitle: "Is there a free vasool app?",
    freeP1: (
      <>
        Vasool is free to get started — book a demo and try it with your own
        loan data before you pay anything. The standard plan is ₹699/month with{" "}
        <em>every</em> feature included: unlimited staff accounts, live location
        tracking, route management, reports, and exports. No premium tiers, no
        features locked behind upsells.
      </>
    ),
    checklistTitle: "What makes the best vasool app in 2026?",
    checklistText:
      "Whichever app you choose, measure it against this checklist before moving your book:",
    faqTitle: "Comparison FAQs",
    faqText: "Common questions from lenders comparing vasool apps.",
    ctaTitle: "See the difference yourself",
    ctaText: "Book a free demo and record your first collection by voice in under a minute.",
    ctaBtn: "Book a Demo",
    ctaBtn2: "View Pricing",
  },
  ta: {
    title: "Vasool vs Vasool Book Apps & Diary - Best Vasool App 2026",
    description:
      "Vasool Book அல்லது Vasool Diary alternative தேடுறீங்களா? 2026-ஓட best vasool app-ஐ compare பண்ணுங்க — voice to data collection, சொந்த server-ல self-hosting, white-label branding, chit & lending ஒரே app-ல, photo proof, GPS staff tracking. Money lenders ஏன் Vasool-க்கு மாறுறாங்கனு பாருங்க.",
    back: "Home-க்கு திரும்பு",
    h1a: "2026-ல best vasool app —",
    h1b: "compared",
    intro: (
      <>
        Vasool Book அல்லது Vasool Diary alternative தேடுறீங்களா? Typical vasool
        book app-களோடயும், பல lending business இன்னும் use பண்ற manual
        notebook-ஓடயும் Vasool எப்படி compare ஆகுதுனு இங்க பாருங்க — voice to
        data entry, சொந்த server-ல self-hosting, white-label branding, chit
        &amp; lending ஒரே app-ல — feature by feature.
      </>
    ),
    colFeature: "Feature",
    colTypical: "Typical vasool book apps",
    colNotebook: "Manual notebook / diary",
    legendYes: "Included",
    legendPartial: "Varies or limited",
    legendNo: "Not available",
    tableNote:
      '"Typical vasool book apps" — generic vasool book மற்றும் diary app-ல common-ஆ இருக்கற feature-ஐ காட்டுது; ஒவ்வொரு app-உம் மாறுபடும்.',
    whyTitle: "Money lenders ஏன் Vasool-க்கு மாறுறாங்க",
    whyText:
      "பெரும்பாலான vasool book app ledger-ஐ digital ஆக்கி நிறுத்திடுது. Vasool முழு field operation-ஐயும் நடத்துது — அதோட நாலு advantage வேற எந்த vasool app-லயும் இல்ல.",
    altTitle: "Vasool Book அல்லது Vasool Diary alternative தேடுறீங்களா?",
    altP1:
      "Vasool book மற்றும் vasool diary app உங்க paper notebook-ஐ digital ஆக்குது — customer name, amount, balance காகிதத்துக்கு பதிலா phone-ல. அது ஒரு நல்ல first step, ஆனா lending business-ஓட daily வேலை field-ல நடக்குது: agent-கள் வீடு வீடா போய், cash மற்றும் UPI collect பண்ணி, தெருவுல நின்னு entry எழுதுறாங்க.",
    freeTitle: "Free vasool app இருக்கா?",
    freeP1: (
      <>
        Vasool start பண்ண free — பணம் கட்டற முன்னாடி demo book பண்ணி உங்க சொந்த
        loan data-வுடன் try பண்ணுங்க. Standard plan ₹699/month, <em>எல்லா</em>{" "}
        feature-உம் அடங்கும்: unlimited staff account, live location tracking,
        route management, report மற்றும் export. Premium tier இல்ல, upsell-ல
        lock பண்ணப்பட்ட feature இல்ல.
      </>
    ),
    checklistTitle: "2026-ல best vasool app எது?",
    checklistText:
      "எந்த app-ஐ choose பண்ணாலும், உங்க book-ஐ move பண்றதுக்கு முன்னாடி இந்த checklist-உடன் அளவிடுங்க:",
    faqTitle: "Comparison FAQs",
    faqText: "Vasool app-களை compare பண்ற lender-கள் கேட்கற common questions.",
    ctaTitle: "வித்தியாசத்தை நீங்களே பாருங்க",
    ctaText: "Free demo book பண்ணுங்க, ஒரு நிமிஷத்துக்குள்ள உங்க முதல் collection-ஐ voice-ல record பண்ணுங்க.",
    ctaBtn: "Demo Book பண்ணுங்க",
    ctaBtn2: "View Pricing",
  },
};

const switchReasonsEn: Reason[] = [
  { icon: Mic, title: "Voice to data, not typing", desc: 'Your agent says "Arun 500 cash" and Vasool turns the spoken words into a structured payment record against the right customer — in Tamil, Telugu, Hindi, Malayalam, Kannada or English. No other vasool app does this.' },
  { icon: Layers, title: "Chit & lending in one app", desc: "Run your chit funds and your lending book — daily, weekly, monthly, EMI, gold — in a single app instead of juggling separate software for each side of the business." },
  { icon: Server, title: "Host it anywhere — even a Raspberry Pi", desc: "Run Vasool on our cloud, your own server, or a Raspberry Pi in your shop. Your borrower data lives where you decide, in a dedicated database that never mixes with other lenders." },
  { icon: Palette, title: "White-label it as your own", desc: "Put your brand on it — your name, your logo, your own subdomain like yourbusiness.vasool.app. Customers see your finance business, not ours." },
  { icon: Camera, title: "Photo proof on everything", desc: "Customer photos, ID proofs, signed documents and collection photo proof attached to every loan. Photo-wise tracking replaces the paper trail completely." },
  { icon: WifiOff, title: "Offline-first like a notebook", desc: "The one thing a notebook does well — work without internet — Vasool does too. Record collections anywhere and sync automatically when the network returns." },
];

const switchReasonsTa: Reason[] = [
  { icon: Mic, title: "Voice to data, type பண்றது இல்ல", desc: 'உங்க agent "Arun 500 cash" சொன்னா, Vasool அந்த பேச்சை சரியான customer-க்கு எதிரா structured payment record ஆக்குது — தமிழ், தெலுங்கு, இந்தி, மலையாளம், கன்னடம் அல்லது English-ல. வேற எந்த vasool app-உம் இதை பண்றதில்ல.' },
  { icon: Layers, title: "Chit & lending ஒரே app-ல", desc: "உங்க chit fund-ஐயும் lending book-ஐயும் — daily, weekly, monthly, EMI, gold — ஒரே app-ல நடத்துங்க, தனித்தனி software juggle பண்ணாம." },
  { icon: Server, title: "எங்கேயும் host பண்ணுங்க — Raspberry Pi-லயும்", desc: "Vasool-ஐ எங்க cloud-ல, உங்க சொந்த server-ல, அல்லது உங்க கடையில Raspberry Pi-ல run பண்ணுங்க. உங்க borrower data நீங்க தீர்மானிக்கற இடத்துல, வேற lender-உடன் mix ஆகாத dedicated database-ல இருக்கும்." },
  { icon: Palette, title: "உங்க சொந்த brand-ஆ white-label", desc: "உங்க brand போடுங்க — உங்க name, logo, yourbusiness.vasool.app மாதிரி உங்க subdomain. Customer-கள் உங்க finance business-ஐ பார்ப்பாங்க, எங்களோடதை இல்ல." },
  { icon: Camera, title: "எல்லாத்துலயும் photo proof", desc: "Customer photo, ID proof, sign பண்ணப்பட்ட document மற்றும் collection photo proof ஒவ்வொரு loan-க்கும் attach. Photo-wise tracking paper trail-ஐ முழுசா replace பண்ணுது." },
  { icon: WifiOff, title: "Notebook மாதிரி offline-first", desc: "Notebook நல்லா பண்ற ஒரே விஷயம் — internet illama work பண்றது — Vasool-உம் பண்ணுது. எங்கேயும் collection record பண்ணுங்க, network வந்தவுடன் automatic-ஆ sync ஆகும்." },
];

const checklistEn = [
  "Voice entry so field agents record collections hands-free",
  "Photo proof and photo KYC for every borrower",
  "Full offline support — collections don't stop when the network does",
  "Every loan type: daily, weekly, monthly, EMI, interest-only, gold",
  "Live GPS tracking and route planning for collection staff",
  "Automatic PDF receipts and exportable reports",
  "UPI collections recorded alongside cash",
  "Your own isolated database, not a shared multi-tenant table",
];
const checklistTa = [
  "Field agent hands-free-ஆ collection record பண்ண voice entry",
  "ஒவ்வொரு borrower-க்கும் photo proof மற்றும் photo KYC",
  "Full offline support — network போனாலும் collection நிக்காது",
  "எல்லா loan type: daily, weekly, monthly, EMI, interest-only, gold",
  "Collection staff-க்கு live GPS tracking மற்றும் route planning",
  "Automatic PDF receipt மற்றும் export பண்றக்கூடிய report",
  "Cash-ஓட சேர்த்து UPI collection record",
  "Shared multi-tenant table இல்ல, உங்க சொந்த isolated database",
];

const faqsEn = [
  { q: "What is the best vasool app in 2026?", a: "The best vasool app in 2026 should cover every loan type you run (daily, weekly, monthly, EMI, gold), work fully offline, and remove manual typing in the field. Vasool is the only vasool app with voice entry collections in 6 languages plus photo proof, live GPS staff tracking, UPI collections, and a dedicated database per business — which is why money lenders and micro finance businesses across India are switching to it." },
  { q: "What is a good alternative to a vasool book or vasool diary app?", a: "If you've outgrown a basic vasool book or vasool diary app, look for one that goes beyond a digital ledger: Vasool adds voice entry collections, photo KYC, gold and EMI loan management, live GPS staff tracking, route planning, PDF receipts, and a customer self-service portal — while still working fully offline like a simple ledger app." },
  { q: "Is there a free vasool app?", a: "Vasool is free to get started — book a demo and try it with your own loan data. The standard plan is ₹699/month with every feature included: unlimited staff accounts, live location tracking, route management, and reports. There are no premium tiers locking away core features." },
  { q: "Can I move my data from a notebook or another vasool app?", a: "Yes. Vasool supports importing your existing customers and loans, so you can move from a manual vasool notebook or another collection app without re-entering history. From day one, your staff record collections by voice or a single tap, and balances, interest, and due dates are calculated automatically." },
  { q: "Does Vasool work for kandhu vatti, thandal, and line vasool businesses?", a: "Yes. Vasool is built for Indian lending styles — kandhu vatti and thandal (Tamil daily interest lending), line vasool, byaj wasooli, ugrani, and pigmy collection businesses are all covered by its daily, weekly, monthly, and interest-only loan types, with the app and voice entry available in Tamil, Telugu, Hindi, Malayalam, and Kannada." },
  { q: "Can I host the vasool app on my own server?", a: "Yes. Unlike cloud-only vasool apps, Vasool can run on our cloud, on your own server, or even on a Raspberry Pi in your office. Self-hosting gives you complete control of your borrower data and works well for lenders who want everything on premises." },
  { q: "Can I white-label Vasool with my own brand?", a: "Yes. Vasool supports white-labeling — your business name, your logo, and your own branded subdomain like yourbusiness.vasool.app. Your customers and staff see your finance brand throughout the app and customer portal." },
  { q: "Can I manage chit funds and lending in the same app?", a: "Yes. Vasool handles chit funds and lending together in a single app — daily, weekly, monthly, and EMI loans, gold loans, interest-only loans, and chit operations — so you don't need separate software for each side of your finance business." },
];
const faqsTa = [
  { q: "2026-ல best vasool app எது?", a: "2026-ல best vasool app உங்க எல்லா loan type-ஐயும் (daily, weekly, monthly, EMI, gold) cover பண்ணணும், முழுசா offline work ஆகணும், field-ல manual typing-ஐ நீக்கணும். 6 மொழியில voice entry collection, photo proof, live GPS staff tracking, UPI collection மற்றும் business-க்கு dedicated database உள்ள ஒரே vasool app Vasool தான் — அதனால தான் India முழுக்க money lenders மற்றும் micro finance business இதுக்கு மாறுறாங்க." },
  { q: "Vasool book அல்லது vasool diary app-க்கு நல்ல alternative என்ன?", a: "Basic vasool book அல்லது vasool diary app-ஐ தாண்டிட்டீங்கனா, digital ledger-ஐ தாண்டி போறதை தேடுங்க: Vasool voice entry collection, photo KYC, gold மற்றும் EMI loan management, live GPS staff tracking, route planning, PDF receipt மற்றும் customer self-service portal சேர்க்குது — simple ledger app மாதிரி முழுசா offline-லயும் work ஆகுது." },
  { q: "Free vasool app இருக்கா?", a: "Vasool start பண்ண free — demo book பண்ணி உங்க சொந்த loan data-வுடன் try பண்ணுங்க. Standard plan ₹699/month, எல்லா feature-உம் அடங்கும்: unlimited staff account, live location tracking, route management மற்றும் report. Core feature-ஐ lock பண்ற premium tier இல்ல." },
  { q: "Notebook அல்லது வேற vasool app-லிருந்து என் data-ஐ move பண்ணலாமா?", a: "ஆமா. Vasool உங்க existing customer மற்றும் loan-ஐ import பண்ண support பண்ணுது, அதனால manual vasool notebook அல்லது வேற collection app-லிருந்து history-ஐ மறுபடி enter பண்ணாம move பண்ணலாம். முதல் நாளிலிருந்தே staff voice அல்லது ஒரே tap-ல collection record பண்ணுவாங்க, balance, interest, due date automatic-ஆ calculate ஆகும்." },
  { q: "Kandhu vatti, thandal, line vasool business-க்கு Vasool work ஆகுமா?", a: "ஆமா. Vasool Indian lending style-க்காக build பண்ணப்பட்டது — kandhu vatti மற்றும் thandal (தமிழ் daily interest lending), line vasool, byaj wasooli, ugrani, pigmy collection business எல்லாமே அதோட daily, weekly, monthly, interest-only loan type-ல cover ஆகுது, app மற்றும் voice entry தமிழ், தெலுங்கு, இந்தி, மலையாளம், கன்னடத்தில் இருக்கு." },
  { q: "Vasool app-ஐ என் சொந்த server-ல host பண்ணலாமா?", a: "ஆமா. Cloud-only vasool app மாதிரி இல்லாம, Vasool எங்க cloud-ல, உங்க சொந்த server-ல, அல்லது உங்க office-ல Raspberry Pi-லயும் run ஆகும். Self-hosting உங்க borrower data மேல complete control தருது, எல்லாத்தையும் on-premise வைக்க விரும்பற lender-க்கு நல்லா work ஆகுது." },
  { q: "Vasool-ஐ என் சொந்த brand-உடன் white-label பண்ணலாமா?", a: "ஆமா. Vasool white-labeling-ஐ support பண்ணுது — உங்க business name, logo மற்றும் yourbusiness.vasool.app மாதிரி உங்க branded subdomain. உங்க customer மற்றும் staff app முழுக்க, customer portal-ல உங்க finance brand-ஐ பார்ப்பாங்க." },
  { q: "Chit fund மற்றும் lending-ஐ ஒரே app-ல manage பண்ணலாமா?", a: "ஆமா. Vasool chit fund மற்றும் lending-ஐ ஒரே app-ல handle பண்ணுது — daily, weekly, monthly, EMI loan, gold loan, interest-only loan மற்றும் chit operation — அதனால உங்க finance business-ஓட ஒவ்வொரு பக்கத்துக்கும் தனி software தேவையில்ல." },
];

const Cell = ({ value }: { value: CellValue }) => {
  if (value === "yes")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/10">
        <Check className="w-4 h-4 text-secondary" strokeWidth={3} aria-label="Included" />
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/10">
        <Minus className="w-4 h-4 text-amber-500" strokeWidth={3} aria-label="Varies or limited" />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted">
      <X className="w-4 h-4 text-muted-foreground/60" strokeWidth={3} aria-label="Not available" />
    </span>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card rounded-xl border border-border/60 shadow-card overflow-hidden">
      <button className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
          <span className="text-sm sm:text-base font-semibold text-foreground">{q}</span>
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 pl-14">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const Compare = () => {
  const { i18n } = useTranslation();
  const { isTamil, canonical, alternates, ogLocale } = useLangPage("/compare");
  const c = isTamil ? content.ta : content.en;
  const features = isTamil ? rowFeaturesTa : rowFeaturesEn;
  const switchReasons = isTamil ? switchReasonsTa : switchReasonsEn;
  const checklist = isTamil ? checklistTa : checklistEn;
  const faqs = isTamil ? faqsTa : faqsEn;
  const rows: CompareRow[] = rowValues.map((v, i) => ({ feature: features[i], ...v }));

  const compareFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vasool.app/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: `https://vasool.app${canonical}` },
    ],
  };

  const proseLink = (to: string, label: ReactNode) => (
    <Link to={isTamil ? `/ta${to}` : to} className="text-secondary hover:underline">
      {label}
    </Link>
  );

  return (
    <main className="min-h-screen">
      <SEO
        title={c.title}
        description={c.description}
        keywords="best vasool app 2026, free vasool app, vasool book alternative, vasool diary alternative, vasool app comparison, vasool book vs vasool app, money lender app comparison, loan collection app comparison, self hosted loan management software, white label loan collection app, chit fund and lending app, voice to data collection entry, kandhu vatti app, thandal app, line vasool app, byaj wasooli app, digital vasool ledger, replace vasool notebook"
        canonical={canonical}
        ogLocale={ogLocale}
        alternates={alternates}
        structuredData={[compareFAQSchema, breadcrumbSchema]}
      />

      {/* Header */}
      <div className="bg-hero py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Link to={isTamil ? "/ta" : "/"} className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />
            {c.back}
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {c.h1a} <span className="text-gradient">{c.h1b}</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{c.intro}</p>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <section className="container mx-auto px-4 sm:px-6 -mt-6 sm:-mt-10 relative z-10 pb-14 sm:pb-20">
        <div className="max-w-5xl mx-auto bg-card rounded-2xl border border-border/60 shadow-card-hover overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/40">
                  <th className="text-left font-semibold text-foreground px-5 sm:px-6 py-4 w-[44%]">{c.colFeature}</th>
                  <th className="text-center font-bold text-secondary px-3 py-4">Vasool</th>
                  <th className="text-center font-semibold text-foreground px-3 py-4">{c.colTypical}</th>
                  <th className="text-center font-semibold text-foreground px-3 py-4">{c.colNotebook}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-border/40 last:border-b-0 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                    <td className="px-5 sm:px-6 py-3.5 text-foreground">{row.feature}</td>
                    <td className="px-3 py-3.5 text-center"><Cell value={row.vasool} /></td>
                    <td className="px-3 py-3.5 text-center"><Cell value={row.typicalApp} /></td>
                    <td className="px-3 py-3.5 text-center"><Cell value={row.notebook} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 sm:px-6 py-4 bg-muted/30 border-t border-border/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Cell value="yes" /> {c.legendYes}</span>
            <span className="inline-flex items-center gap-2"><Cell value="partial" /> {c.legendPartial}</span>
            <span className="inline-flex items-center gap-2"><Cell value="no" /> {c.legendNo}</span>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">{c.tableNote}</p>
      </section>

      {/* Why switch */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{c.whyTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{c.whyText}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl">
          {switchReasons.map((r) => (
            <div key={r.title} className="bg-card rounded-xl p-6 border border-border/60 shadow-card flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                <r.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alternative */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{c.altTitle}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>{c.altP1}</p>
            <p>
              {isTamil ? (
                <>
                  Vasool அந்த field வேலைக்காக build பண்ணப்பட்டது. Agent-கள் type
                  பண்றதுக்கு பதிலா entry-ஐ பேசுறாங்க, அந்த இடத்துலயே photo proof
                  attach பண்றாங்க, GPS-planned route-ஐ follow பண்றாங்க — office
                  live dashboard-ல collection வர்றதை பார்க்குது. Live gold-rate
                  எடுக்கற gold loan, foreclosure control உள்ள EMI,{" "}
                  {proseLink("/staff-tools", "staff tracking")}, customer
                  self-service portal சேர்த்தா, எந்த simple ledger app-உம்
                  கொடுக்காத upgrade path கிடைக்குது. முழு{" "}
                  {proseLink("/features", "feature list")} அல்லது Vasool cover
                  பண்ற {proseLink("/loan-types", "loan types")}-ஐ பாருங்க.
                </>
              ) : (
                <>
                  Vasool is built for that field work. Agents speak entries
                  instead of typing them, attach photo proof on the spot, and
                  follow GPS-planned routes — while the office watches
                  collections land in a live dashboard. Add gold loans with live
                  gold-rate fetching, EMI with foreclosure controls,{" "}
                  {proseLink("/staff-tools", "staff tracking")}, and a customer
                  self-service portal, and you have an upgrade path no simple
                  ledger app offers. See the full{" "}
                  {proseLink("/features", "feature list")} or the{" "}
                  {proseLink("/loan-types", "loan types")} Vasool covers.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Free vasool app */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{c.freeTitle}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>{c.freeP1}</p>
            <p>
              {isTamil ? (
                <>
                  வேற மாதிரி monetize பண்ற "free" vasool app-ல கவனமா இருங்க —
                  shared database, ads, அல்லது உங்க borrower data. Vasool
                  ஒவ்வொரு business-க்கும் அதோட சொந்த isolated database கொடுக்குது,
                  அதனால உங்க book உங்களுதா. {proseLink("/pricing", "Full pricing details")}{" "}
                  பாருங்க.
                </>
              ) : (
                <>
                  Be careful with "free" vasool apps that monetize another way —
                  shared databases, ads, or your borrower data. Vasool gives
                  every business its own isolated database, so your book stays
                  yours. See {proseLink("/pricing", "full pricing details")}.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{c.checklistTitle}</h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">{c.checklistText}</p>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" strokeWidth={3} />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{c.faqTitle}</h2>
          <p className="text-muted-foreground mb-8">{c.faqText}</p>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto rounded-2xl bg-hero p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(158_70%_38%/0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{c.ctaTitle}</h2>
            <p className="text-white/60 mb-7 max-w-xl mx-auto leading-relaxed">{c.ctaText}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={CONTACT_PHONE_HREF}>
                <Button variant="hero" size="lg">
                  {c.ctaBtn}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link to={isTamil ? "/ta/pricing" : "/pricing"}>
                <Button variant="heroOutline" size="lg">{c.ctaBtn2}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer key={i18n.language} />
    </main>
  );
};

export default Compare;
