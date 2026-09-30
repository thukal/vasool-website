import {
  Users,
  PiggyBank,
  Wallet,
  Smartphone,
  WifiOff,
  ShieldCheck,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";
import { NOT_A_LICENCE, countryFor, relatedFor } from "@/lib/countries";
import {
  fieldDayFaqs,
  fieldDayProse,
  reportingFeature,
  routeTrackingFeature,
  voiceApprovalFaqs,
  voiceApprovalFeature,
  voiceApprovalProse,
  voiceExpenseFeature,
} from "@/lib/fieldOperations";

const CANONICAL = "/loan-management-software-cote-divoire";
const COUNTRY = countryFor(CANONICAL);

const config: KeywordLandingConfig = {
  seo: {
    title: "Loan Management Software for SFD Microfinance in Côte d'Ivoire | Vasool",
    description:
      "Vasool is loan and savings management software for approved SFDs in Côte d'Ivoire — per-member credit and savings records, field-agent cash accountability, mobile-money references, XOF and Africa/Abidjan, offline collection and a full audit trail. Ivorian company setup is not live yet; talk to us about your rollout.",
    keywords:
      "loan management software cote d'ivoire, sfd software, microfinance software cote d'ivoire, systemes financiers decentralises software, loan management system ivory coast, microfinance software uemoa, cooperative credit software west africa, field collection app abidjan, xof loan software, mobile money loan software cote d'ivoire",
    canonical: CANONICAL,
  },
  breadcrumbName: "Côte d'Ivoire",
  badge: "Market preview — setup not live yet",
  h1: (
    <>
      Loan and savings software for SFDs in{" "}
      <span className="text-gradient">Côte d'Ivoire</span>
    </>
  ),
  intro:
    "An SFD's money belongs to its members, and that single fact sets the standard for its records. Every contribution, every disbursement and every repayment has to be attributable to a named member, with the change traceable to whoever made it. Vasool records each entry where it happens — member, amount, channel, agent — keeps savings distinct from credit, and closes the day per agent rather than per branch, in CFA francs on Abidjan business dates. We should say plainly up front: Côte d'Ivoire is not yet selectable at company setup. If you are planning a rollout, talk to us before you build around it.",
  featuresHeading: "What a supervised SFD needs from its field system",
  featuresSub:
    "A reporting pack is only as good as what was recorded at the doorstep. These are the controls that decide whether the numbers you submit can be defended.",
  features: [
    voiceApprovalFeature(COUNTRY),
    voiceExpenseFeature(COUNTRY),
    {
      icon: Users,
      title: "Per-member records beneath every group",
      desc: "Run solidarity groups and village associations alongside individual members, with each member's own savings, principal, interest and payment history preserved underneath the group total.",
    },
    {
      icon: PiggyBank,
      title: "Savings and credit, held apart",
      desc: "A member can save and borrow at once. Their savings balance is a liability you owe them and their principal is what they owe you — separate records with separate histories, never netted to make a repayment look made.",
    },
    {
      icon: Wallet,
      title: "Per-agent daily close",
      desc: "Expected collection, actual collection, expenses and remittance are tracked per agent to a daily close, so a shortfall surfaces the same evening rather than at month end.",
    },
    {
      icon: Smartphone,
      title: "Mobile-money repayments carry their reference",
      desc: "Every payment records its channel — Orange Money, MTN MoMo, Wave, Moov Money, bank transfer or cash — and its transaction reference, so a wallet receipt reconciles against a statement instead of being taken on trust.",
    },
    {
      icon: WifiOff,
      title: "Offline collection outside Abidjan",
      desc: "Entries save on the device and sync when the connection returns, so a rural route never costs you a day's collection record.",
    },
    {
      icon: ShieldCheck,
      title: "Audit trail and maker-checker approvals",
      desc: "Every edit, rescheduling, discount, write-off and closure is logged with who did it and when, and the consequential ones can be held for a manager's approval before they take effect.",
    },
    routeTrackingFeature(),
    reportingFeature(),
  ],
  stepsHeading: "How an Ivorian rollout would work",
  steps: [
    {
      title: "Tell us your approval and your products",
      desc: "Your SFD approval and registration, whether you run savings, credit or both, and how your agents are organised across branches and caisses.",
    },
    {
      title: "We confirm the setup scope",
      desc: "XOF company setup and a French interface are the two gaps. We will tell you honestly which are ready when you ask, not which are planned.",
    },
    {
      title: "Pilot one caisse or agent group",
      desc: "Run a single round first, with real members, before any wider migration.",
    },
    {
      title: "Reconcile against your existing book",
      desc: "Match the pilot's member balances and daily cash against your current system before you trust it with the portfolio.",
    },
  ],
  prose: [
    {
      heading: "Who this is for in Côte d'Ivoire",
      paragraphs: [
        "Microfinance in Côte d'Ivoire is carried by SFDs — systèmes financiers décentralisés — the approved savings and credit cooperatives and microfinance institutions that serve members the banking sector does not reach. They operate under the UMOA-wide SFD law, supervised jointly by the BCEAO at the regional level and by the Direction Générale du Trésor et de la Comptabilité Publique under the Ministry of Finance nationally. Approval is granted by the Minister and the SFD is entered on a national register.",
        "That dual supervision is the reason a field system matters more here than the org chart suggests. An SFD is answerable for prudential ratios, a sector-specific accounting framework and portfolio-at-risk reporting — and every one of those numbers is assembled from entries a field agent made at a doorstep, often days before anyone in the office sees them. If the entry was reconstructed from memory that evening, the ratio built on it is a guess wearing a decimal point.",
        "The other thing that shapes the software is that the member owns the money. A commercial lender's error is its own problem. An SFD's error is a member's savings, which is why the audit trail here is not a nice-to-have and why the changes worth gating are the ones that rewrite what a member owes or holds.",
        NOT_A_LICENCE,
      ],
    },
    {
      heading: "A note on this page and the French one",
      paragraphs: [
        "This page is in English because the Vasool site is, and because procurement conversations in Abidjan often run in English when a vendor is foreign. The buyer-facing pitch in French lives on a separate page written in French rather than translated into it — an English page does not rank for a French query, and a machine-translated one reads like what it is.",
        "The French page covers the same product for the wider BCEAO zone: Senegal, Benin, Burkina Faso, Mali, Niger, Togo and Guinea-Bissau run under the same SFD framework, and an SFD in Dakar and one in Abidjan are asking the same question of a field system.",
      ],
    },
    {
      heading: "What is not ready yet",
      paragraphs: [
        "Côte d'Ivoire is not currently selectable at company setup. Vasool supports India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia today. Adding Côte d'Ivoire means the CFA franc as a first-class currency with Africa/Abidjan business dates and Ivorian phone and address formats.",
        "French is not shipped as an interface or dictation language, so an agent on an Ivorian route could not yet speak entries in French — and Dioula and Baoulé are further out than that. There is no automated import from Orange Money, MTN MoMo, Wave or Moov Money, and Vasool does not produce the SFD accounting framework's returns or prudential ratio submissions. Those stay in your existing systems.",
        "That is a real list, and it is deliberately here rather than in a footnote. If you are an Ivorian SFD evaluating options now, the useful next step is a conversation about timing — what you need, when you need it, and whether that lines up with what we can honestly commit to. If it does not, we will say so.",
      ],
    },
    voiceApprovalProse(COUNTRY),
    fieldDayProse(COUNTRY),
  ],
  checklist: {
    heading: "Before your first disbursement in Côte d'Ivoire",
    sub: "Work through this with Ivorian counsel. Vasool holds the records; none of these are questions software can answer.",
    items: [
      "Confirm your SFD approval and your entry on the national register, and exactly what they permit.",
      "Confirm your prudential ratio and reporting obligations to the BCEAO and the DGTCP.",
      "Confirm permitted pricing, fees and charges, and how they must be disclosed to the member.",
      "Keep each member's savings balance and loan principal as separate records, never netted.",
      "Record original principal apart from interest, fees, penalties and recoveries.",
      "Require a transaction reference on every mobile-money repayment, and reconcile against the statement.",
      "Restrict agent access to member data, and review every correction, rescheduling and closure.",
    ],
  },
  faqs: [
    ...voiceApprovalFaqs(COUNTRY),
    ...fieldDayFaqs(COUNTRY),
    {
      q: "Can I set up an Ivorian company in Vasool today?",
      a: "No. The countries available at setup are India, Sri Lanka, the Philippines, Indonesia, Nigeria, Kenya, South Africa and Colombia. This page exists because Ivorian and wider UEMOA SFDs ask, and because we would rather publish an honest market page than let you find out after a sales call.",
    },
    {
      q: "Is the interface available in French?",
      a: "Not yet. The app ships with six Indian languages plus English and Tamil. A French interface and French dictation would arrive with Ivorian company setup rather than before it — which is why this page says so instead of listing French among the languages an agent can use today.",
    },
    {
      q: "Does Vasool produce SFD regulatory returns or prudential ratios?",
      a: "No. It is the loan and collection system of record: member records, loan terms, disbursements, every payment with its channel and agent, savings balances, arrears ageing, corrections and closures, all under an audit trail. The sector accounting framework's returns and prudential ratio submissions stay in your existing systems.",
    },
    {
      q: "Does it handle savings as well as credit?",
      a: "Yes — savings schemes and loan books are both first-class records, and a member can hold both. The point is that they stay apart: a contribution is a liability you owe the member, a repayment reduces what the member owes you, and nothing in the day's cash tells you which is which unless it was recorded that way at the doorstep.",
    },
    {
      q: "Does it integrate with Orange Money, Wave or MTN MoMo?",
      a: "No automated integration. Every payment records its channel and transaction reference and can be tagged to the account it landed in, so wallet receipts reconcile against your statement — but the entry is made by the person taking the payment rather than pulled from the wallet.",
    },
    {
      q: "Does Vasool make my SFD compliant with BCEAO rules?",
      a: "No. Compliance comes from your approval, your capital, your governance, your pricing, your disclosures and your reporting. Vasool provides the records and controls that let you evidence those things — it cannot create permission you do not have.",
    },
  ],
  related: relatedFor(CANONICAL),
  ctaHeading: "Planning a rollout in Côte d'Ivoire or the UEMOA zone?",
  ctaSub:
    "Tell us your approval, your products and your timing. We will tell you what is ready, what is not, and whether the dates line up — before you commit to anything.",
};

const CoteDIvoire = () => <KeywordLanding config={config} />;

export default CoteDIvoire;
