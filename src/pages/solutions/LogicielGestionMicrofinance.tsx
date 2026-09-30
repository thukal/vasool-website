import {
  Users,
  PiggyBank,
  Wallet,
  Smartphone,
  WifiOff,
  ShieldCheck,
  Mic,
  MapPin,
  BarChart3,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
  type LandingChrome,
} from "@/components/KeywordLanding";

const CANONICAL = "/logiciel-gestion-microfinance";

const chrome: LandingChrome = {
  backHome: "Retour à l'accueil",
  bookDemo: "Demander une démo gratuite",
  viewPricing: "Voir les tarifs",
  faqHeading: "Questions fréquentes",
  relatedHeading: "Explorer plus",
  ctaButton: "Demander une démo",
  compareButton: "Comparer Vasool",
};

const config: KeywordLandingConfig = {
  seo: {
    title: "Logiciel de Gestion de Microfinance pour SFD | Vasool",
    description:
      "Logiciel de gestion de microfinance pour les SFD de la zone UEMOA : chaque versement saisi sur le terrain avec son agent, son membre et son canal, épargne et crédit tenus séparément, caisse arrêtée par agent chaque soir, fonctionnement hors ligne et piste d'audit complète. La configuration des pays UEMOA n'est pas encore disponible.",
    keywords:
      "logiciel de gestion de microfinance, logiciel microfinance, logiciel sfd, logiciel de gestion sfd, logiciel gestion credit epargne, logiciel microfinance afrique, logiciel de recouvrement microfinance, application de collecte terrain microfinance, logiciel institution de microfinance, logiciel microfinance uemoa, logiciel gestion de portefeuille credit",
    canonical: CANONICAL,
    ogLocale: "fr_CI",
  },
  lang: "fr",
  chrome,
  breadcrumbName: "Logiciel de Gestion de Microfinance",
  badge: "Zone UEMOA — configuration pays à venir",
  h1: (
    <>
      Logiciel de gestion de microfinance pour{" "}
      <span className="text-gradient">les opérations de terrain</span>
    </>
  ),
  intro:
    "L'argent d'un SFD appartient à ses membres, et ce seul fait fixe le niveau d'exigence de ses enregistrements. Chaque cotisation, chaque décaissement et chaque remboursement doit être rattaché à un membre nommé, avec la trace de celui qui a effectué l'opération. Vasool saisit l'écriture là où elle se produit — membre, montant, canal, agent — tient l'épargne séparée du crédit, et arrête la caisse par agent plutôt que par agence. Disons-le d'emblée : la configuration d'une société dans les pays de l'UEMOA n'est pas encore disponible. Si vous préparez un déploiement, parlons-en avant que vous ne construisiez autour.",
  featuresHeading: "Ce qu'un SFD supervisé attend de son système de terrain",
  featuresSub:
    "Un état réglementaire ne vaut que ce que vaut la saisie faite au pas de la porte. Voici les contrôles qui décident si vos chiffres sont défendables.",
  features: [
    {
      icon: Mic,
      title: "Dicter l'écriture plutôt que la taper",
      desc: "L'agent dicte le versement et Vasool en écrit un enregistrement structuré — membre, montant, canal — et non un fichier audio, en affichant le membre reconnu pour confirmation avant l'enregistrement. Taper sur un formulaire étroit en plein soleil, c'est ce qui reporte la saisie au soir, et le soir est l'endroit où elle se perd.",
    },
    {
      icon: Users,
      title: "Un enregistrement par membre sous chaque groupe",
      desc: "Gérez les groupes de caution solidaire et les associations villageoises à côté des membres individuels, chaque membre conservant sa propre épargne, son capital, ses intérêts et son historique sous le total du groupe.",
    },
    {
      icon: PiggyBank,
      title: "Épargne et crédit tenus séparément",
      desc: "Un membre peut épargner et emprunter en même temps. Son épargne est une dette que vous lui devez, son capital restant dû est ce qu'il vous doit — deux enregistrements distincts, jamais compensés pour faire croire qu'une échéance a été honorée.",
    },
    {
      icon: Wallet,
      title: "Arrêté de caisse quotidien par agent",
      desc: "Collecte attendue, collecte réalisée, dépenses et versement à la caisse sont suivis par agent jusqu'à un arrêté quotidien. Un écart apparaît le soir même, rattaché à une tournée et à une personne, et non en fin de mois rattaché à personne.",
    },
    {
      icon: Smartphone,
      title: "La référence de chaque paiement mobile",
      desc: "Chaque règlement enregistre son canal — Orange Money, MTN MoMo, Wave, Moov Money, virement ou espèces — et sa référence de transaction, afin qu'un reçu mobile se rapproche d'un relevé au lieu d'être admis sur parole.",
    },
    {
      icon: WifiOff,
      title: "Hors ligne d'abord",
      desc: "Les écritures sont enregistrées sur l'appareil et se synchronisent au retour du réseau. Une tournée en zone rurale ne coûte jamais une journée de collecte.",
    },
    {
      icon: MapPin,
      title: "La tournée est l'unité de la journée",
      desc: "Planifiez les tournées quotidiennes et hebdomadaires, affectez-les aux agents et suivez leur avancement en direct par GPS, avec un historique de localisation. Chaque versement et chaque dépense est rattaché à sa tournée, ce qui fait de l'arrêté du soir un rapprochement et non une discussion.",
    },
    {
      icon: ShieldCheck,
      title: "Piste d'audit et validation à double regard",
      desc: "Chaque modification, rééchelonnement, remise, passage en perte et clôture est journalisé avec son auteur et sa date. Les opérations conséquentes peuvent être retenues pour validation par un responsable avant de prendre effet.",
    },
    {
      icon: BarChart3,
      title: "Des états qui clôturent la journée et le mois",
      desc: "Journal de caisse par tournée, performance par agent avec taux de recouvrement et détail des dépenses, synthèses de collecte, antériorité des impayés et des jours de retard, flux de trésorerie par compte et compte de résultat — exportables en PDF ou CSV.",
    },
  ],
  stepsHeading: "Comment se déroulerait un déploiement",
  steps: [
    {
      title: "Dites-nous votre agrément et vos produits",
      desc: "Votre agrément de SFD et votre inscription au registre, si vous gérez de l'épargne, du crédit ou les deux, et comment vos agents sont organisés entre agences et caisses.",
    },
    {
      title: "Nous confirmons le périmètre",
      desc: "La configuration en franc CFA et l'interface en français sont les deux manques. Nous vous dirons honnêtement ce qui est prêt lorsque vous poserez la question, pas ce qui est prévu.",
    },
    {
      title: "Pilotez une caisse ou un groupe d'agents",
      desc: "Faites tourner une seule tournée d'abord, avec de vrais membres, avant toute migration plus large.",
    },
    {
      title: "Rapprochez de votre livre existant",
      desc: "Comparez les soldes des membres et la caisse quotidienne du pilote avec votre système actuel avant de lui confier le portefeuille.",
    },
  ],
  prose: [
    {
      heading: "Pourquoi la saisie terrain décide de tout le reste",
      paragraphs: [
        "Un SFD répond de ses ratios prudentiels, de son référentiel comptable sectoriel et de son portefeuille à risque. Or chacun de ces chiffres est assemblé à partir d'écritures qu'un agent a faites au pas d'une porte, souvent plusieurs jours avant que le siège ne les voie. Si l'écriture a été reconstituée de mémoire le soir, le ratio bâti dessus est une estimation avec une virgule.",
        "C'est pourquoi le premier critère d'un logiciel de microfinance n'est pas la richesse de ses états mais la fidélité de sa saisie. Une écriture faite devant le membre, rattachée à un agent nommé et à une tournée suivie par GPS, avec un reçu que le membre conserve, ne demande aucune reconstitution. Une écriture faite le soir en demande toujours une.",
        "Le second critère est la traçabilité du changement. Dans une institution commerciale, une erreur est un problème interne. Dans un SFD, une erreur porte sur l'épargne d'un membre — raison pour laquelle la piste d'audit n'est pas un confort, et pour laquelle les opérations à retenir pour validation sont précisément celles qui réécrivent ce qu'un membre doit ou détient.",
      ],
    },
    {
      heading: "Un cadre régional, des opérations locales",
      paragraphs: [
        "Les SFD de la zone UEMOA — Côte d'Ivoire, Sénégal, Bénin, Burkina Faso, Mali, Niger, Togo et Guinée-Bissau — relèvent d'une loi régionale commune, sous une supervision partagée entre la BCEAO au niveau régional et la structure ministérielle de suivi au niveau national. L'agrément est délivré par le Ministre et le SFD est inscrit sur un registre national.",
        "Un cadre commun ne veut pas dire des opérations identiques. Les canaux de paiement, les langues parlées en tournée et la densité des agences diffèrent d'un pays à l'autre, et un système qui suppose le contraire produit des rapports justes et des tournées impraticables. Ce que Vasool fixe, c'est la forme de l'opération : une tournée, un agent, un arrêté quotidien, un enregistrement par membre.",
        "Vasool est un logiciel de collecte et de gestion de portefeuille. Ce n'est ni un agrément, ni une inscription, ni une autorisation réglementaire, et aucune de ses fonctions ne rend licite une activité qui ne l'est pas. Faites confirmer votre forme juridique, votre autorisation d'exercer et le périmètre de vos produits par un conseil juridique local avant votre premier décaissement.",
      ],
    },
    {
      heading: "Ce qui n'est pas encore prêt",
      paragraphs: [
        "Aucun pays de l'UEMOA n'est aujourd'hui sélectionnable à la création d'une société. Vasool prend en charge l'Inde, le Sri Lanka, les Philippines, l'Indonésie, le Nigeria, le Kenya, l'Afrique du Sud et la Colombie. Ajouter la Côte d'Ivoire ou le Sénégal suppose le franc CFA comme devise de plein exercice, les dates d'arrêté locales et les formats de téléphone et d'adresse du pays.",
        "Le français n'est pas encore une langue d'interface ni de dictée : un agent ne pourrait donc pas encore dicter ses écritures en français, et le dioula, le baoulé ou le wolof sont plus lointains encore. Il n'existe pas d'import automatique depuis Orange Money, MTN MoMo, Wave ou Moov Money, et Vasool ne produit pas les états du référentiel comptable SFD ni les remontées de ratios prudentiels.",
        "Cette liste est délibérément ici plutôt qu'en note de bas de page. Si vous évaluez des solutions aujourd'hui, l'étape utile est une conversation sur le calendrier : ce dont vous avez besoin, pour quand, et si cela correspond à ce que nous pouvons honnêtement engager. Si ce n'est pas le cas, nous vous le dirons.",
      ],
    },
  ],
  faqs: [
    {
      q: "Qu'est-ce qu'un logiciel de gestion de microfinance ?",
      a: "Un système qui tient le livre de crédit et d'épargne d'une institution : membres, conditions de prêt, décaissements, chaque règlement avec son canal et son agent, soldes d'épargne, antériorité des impayés, corrections et clôtures, le tout sous une piste d'audit. Pour un SFD dont la collecte se fait en tournée, la partie décisive est la saisie sur le terrain, pas l'écran du siège.",
    },
    {
      q: "Puis-je créer une société ivoirienne ou sénégalaise dans Vasool aujourd'hui ?",
      a: "Non. Les pays disponibles à la configuration sont l'Inde, le Sri Lanka, les Philippines, l'Indonésie, le Nigeria, le Kenya, l'Afrique du Sud et la Colombie. Cette page existe parce que des SFD de la zone UEMOA posent la question, et parce que nous préférons publier une page de marché honnête plutôt que de vous laisser le découvrir après un rendez-vous commercial.",
    },
    {
      q: "L'interface est-elle disponible en français ?",
      a: "Pas encore. L'application est livrée avec six langues indiennes, l'anglais et le tamoul. Une interface et une dictée en français arriveraient avec la configuration des pays UEMOA, et non avant — c'est pourquoi cette page le dit au lieu de faire figurer le français parmi les langues utilisables aujourd'hui.",
    },
    {
      q: "Vasool produit-il les états réglementaires et les ratios prudentiels ?",
      a: "Non. C'est le système d'enregistrement du crédit et de la collecte. Les états du référentiel comptable sectoriel et les remontées de ratios prudentiels restent dans vos systèmes actuels.",
    },
    {
      q: "L'épargne et le crédit sont-ils gérés ensemble ?",
      a: "Les deux sont des enregistrements de plein exercice et un membre peut détenir les deux — l'essentiel étant qu'ils restent séparés. Une cotisation est une dette envers le membre, un remboursement réduit ce que le membre vous doit, et rien dans la caisse du jour ne permet de les distinguer si la distinction n'a pas été faite au pas de la porte.",
    },
    {
      q: "Le logiciel fonctionne-t-il sans réseau ?",
      a: "Oui. Les écritures sont enregistrées sur l'appareil et se synchronisent au retour de la connexion, de sorte qu'un agent continue de saisir dans une zone non couverte sans rien perdre. Le hors ligne est la condition supposée d'une tournée, pas un mode dégradé.",
    },
    {
      q: "Comment savoir si un agent a bien reversé la totalité de sa collecte ?",
      a: "Chaque tournée d'agent a une collecte attendue, une collecte réalisée, des dépenses et un versement, arrêtés quotidiennement. La comparaison se fait par personne et par tournée plutôt que globalement, donc un écart est imputable le soir même. Les tournées sont suivies par GPS avec un historique de localisation.",
    },
    {
      q: "Vasool rend-il mon SFD conforme à la réglementation BCEAO ?",
      a: "Non. La conformité découle de votre agrément, de vos fonds propres, de votre gouvernance, de votre tarification, de votre information à la clientèle et de vos déclarations. Vasool fournit les enregistrements et les contrôles qui permettent d'en apporter la preuve — il ne peut pas créer une autorisation que vous n'avez pas.",
    },
  ],
  related: [
    { label: "Vasool en Côte d'Ivoire", to: "/loan-management-software-cote-divoire" },
    { label: "Tous les pays pris en charge", to: "/countries" },
    { label: "Application de collecte de prêts", to: "/loan-collection-app" },
    { label: "Gestion des lignes de collecte", to: "/line-management-app" },
    { label: "Validation vocale et double regard", to: "/voice-approval-workflow" },
    { label: "Logiciel en marque blanche", to: "/white-label-loan-app" },
  ],
  ctaHeading: "Vous préparez un déploiement dans la zone UEMOA ?",
  ctaSub:
    "Dites-nous votre agrément, vos produits et votre calendrier. Nous vous dirons ce qui est prêt, ce qui ne l'est pas, et si les dates concordent — avant tout engagement.",
};

const LogicielGestionMicrofinance = () => <KeywordLanding config={config} />;

export default LogicielGestionMicrofinance;
