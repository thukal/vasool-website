import {
  Wallet,
  Split,
  TrendingDown,
  WifiOff,
  ShieldCheck,
  ScrollText,
  Mic,
  MapPin,
  BarChart3,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
  type LandingChrome,
} from "@/components/KeywordLanding";

const chrome: LandingChrome = {
  backHome: "Volver al inicio",
  bookDemo: "Solicitar una demo gratuita",
  viewPricing: "Ver precios",
  faqHeading: "Preguntas frecuentes",
  relatedHeading: "Explorar más",
  ctaButton: "Solicitar una demo",
  compareButton: "Comparar Vasool",
};

const config: KeywordLandingConfig = {
  seo: {
    title: "Software de Cobranza en Campo para Microcrédito | Vasool",
    description:
      "Vasool es un software de cobranza para instituciones de microcrédito y cooperativas: registro de cada abono con su método y cobrador, separación de capital, intereses y mora, conciliación por cuenta, cartera vencida por antigüedad y trazabilidad completa. Solo para operaciones formales. Demo gratuita.",
    keywords:
      "software de cobranza, software de cobranza colombia, software para prestamos, software para prestamos personales, software de cobranza automatizado, que es un software de cobranza, software para microcredito, software de cartera vencida, sistema de gestion de cobranza, software para cooperativas de ahorro y credito",
    canonical: "/software-de-cobranza",
    ogLocale: "es_CO",
  },
  lang: "es",
  chrome,
  breadcrumbName: "Software de Cobranza",
  badge: "Para microcrédito formal",
  h1: (
    <>
      Software de cobranza para{" "}
      <span className="text-gradient">operaciones en campo</span>
    </>
  ),
  intro:
    "Cuando la cobranza ocurre en la calle y no en una oficina, el problema deja de ser el cálculo y pasa a ser la prueba: quién cobró, cuánto, por qué medio y contra qué saldo. Vasool registra cada abono con su método, su cobrador y su asignación entre capital, intereses y mora, y concilia el efectivo de cada cobrador al cierre del día. Los montos se guardan exactamente como se digitan, sin redondeos ocultos.",
  featuresHeading: "Lo que exige una operación de cobranza en campo",
  featuresSub:
    "Un total recaudado no es una utilidad, y un crédito vencido no es una pérdida. La diferencia entre ambas cosas vive en el registro, no en la hoja de cálculo del cobrador.",
  features: [
    {
      icon: MapPin,
      title: "La ruta es la unidad del día",
      desc: "Planifique rutas diarias y semanales, asígnelas a los asesores y siga su avance en vivo con GPS e historial de ubicación. Cada cobro y cada gasto queda ligado a su ruta, de modo que el cierre de caja del día es una conciliación y no una discusión.",
    },
    {
      icon: BarChart3,
      title: "Informes que cierran el día y el mes",
      desc: "Libro diario por ruta, desempeño por asesor con eficiencia de cobro y desglose de gastos, resúmenes de recaudo, antigüedad de mora, flujo de caja por cuenta y estado de resultados — todo exportable en PDF o CSV.",
    },
    {
      icon: Mic,
      title: "Registro por voz, aprobación deliberada",
      desc: "El asesor dicta el cobro en español y Vasool escribe un registro estructurado — cliente, monto, medio de pago — y no un audio guardado. Los cambios que sí pesan, como reescribir una condición o una tasa por modalidad, pueden quedar retenidos en la bandeja de aprobaciones hasta que un responsable los autorice.",
    },
    {
      icon: Split,
      title: "Asignación transparente de cada pago",
      desc: "Cada abono muestra cómo se aplicó entre capital, intereses, comisiones y mora, de modo que un saldo se puede explicar línea por línea en lugar de simplemente afirmarse.",
    },
    {
      icon: Wallet,
      title: "Responsabilidad de caja por cobrador",
      desc: "Recaudo esperado, recaudo real, gastos y consignación se controlan por cobrador con cierre diario, de modo que un faltante aparece esa misma noche y no a fin de mes.",
    },
    {
      icon: TrendingDown,
      title: "Cartera vencida por antigüedad",
      desc: "Los créditos en mora se clasifican automáticamente por rangos de días, así el riesgo de la cartera se lee hoy en lugar de reconstruirse al cierre del trimestre.",
    },
    {
      icon: WifiOff,
      title: "Funciona sin conexión",
      desc: "Los registros se guardan en el dispositivo y se sincronizan cuando vuelve la señal, de modo que una ruta rural nunca cuesta el registro de un día de recaudo.",
    },
    {
      icon: ScrollText,
      title: "Precio por modalidad de crédito",
      desc: "Los intereses, comisiones y cargos se registran por categoría de producto, porque una sola tasa mensual genérica no constituye un registro de nada.",
    },
    {
      icon: ShieldCheck,
      title: "Trazabilidad de cada cambio",
      desc: "Toda edición, reversión, descuento, castigo y cierre queda registrado con su autor y su fecha, de modo que el saldo pendiente siempre es explicable.",
    },
  ],
  stepsHeading: "Cómo funciona en la operación diaria",
  steps: [
    {
      title: "Configure su entidad y su moneda",
      desc: "Montos en pesos, fechas hábiles de América/Bogotá y formatos locales, sobre una base de datos aislada propia de su entidad.",
    },
    {
      title: "Registre productos y precios",
      desc: "Defina la modalidad de crédito y el precio permitido antes de desembolsar, para que cada crédito quede clasificado en una categoría real.",
    },
    {
      title: "Cobre con evidencia",
      desc: "El cobrador registra el monto, el método de pago y la evidencia fotográfica en el sitio, y el cliente recibe su comprobante.",
    },
    {
      title: "Cierre y concilie",
      desc: "Concilie efectivo y transferencias contra el recaudo esperado por cobrador, y lea la cartera vencida del mismo libro.",
    },
  ],
  prose: [
    {
      heading: "Crédito formal, no gota a gota",
      paragraphs: [
        "Colombia cuenta con categorías formales de microcrédito y crédito productivo que atienden a microempresas urbanas y rurales a través de cooperativas, bancos, fintech y otras instituciones vigiladas. El supervisor financiero publica tasas certificadas por modalidad de crédito, y por eso una sola tasa mensual genérica no acredita cumplimiento de nada: la modalidad en la que se ubica su producto determina qué puede cobrar y cómo debe expresarlo.",
        "Junto a eso existe la práctica informal de pago diario conocida como gota a gota o paga diario. La Policía Nacional vincula reiteradamente las versiones ilegales de ese modelo con intereses excesivos, intimidación, coacción y cobro criminal. Vasool no se ofrece como una forma de legitimar ni de operar préstamos ilegales o cobranzas coercitivas, y preferimos perder la venta antes que aceptar ese negocio.",
        "Vasool es software de cobranza y portafolio. No es una licencia, un registro ni una aprobación regulatoria, y ninguna función suya vuelve lícito un préstamo que no lo es. Confirme su entidad, su autorización para prestar y el alcance de sus productos con un abogado colombiano antes del primer desembolso.",
      ],
    },
    {
      heading: "Lo que un operador formal siempre puede demostrar",
      paragraphs: [
        "Identificar su autoridad legal para prestar. Identificar la modalidad de crédito aplicable. Declarar el precio permitido y cómo se expresa. Mostrar los términos firmados por el cliente. Mostrar el capital pendiente, separado de intereses, comisiones y mora. Mostrar la vía de reclamación del cliente. Esas seis cosas son la definición práctica de una operación formal, y son el eje sobre el que está organizado el software.",
        "Los montos en pesos son largos, de modo que la exactitud numérica y la trazabilidad importan más que la familiaridad visual: un campo que reformatea o trunca una cifra produce un libro que nadie puede conciliar, y el error suele aparecer meses después, dentro de una disputa.",
        "El pago diario es un cronograma legítimo cuando sigue el ciclo de caja real de una microempresa y un contrato firmado. Se convierte en otra cosa cuando se elige para maximizar la presión sobre el deudor. Vasool registra el acuerdo, el cronograma y la conducta de cobro — algo útil para un prestamista honesto e incómodo para uno coercitivo.",
      ],
    },
  ],
  checklist: {
    heading: "Antes del primer desembolso",
    sub: "Si no puede completar esta lista, la respuesta no es cambiar de software. Revísela con un abogado colombiano.",
    items: [
      "Identifique su autoridad legal para prestar y el supervisor ante el cual responde.",
      "Identifique la modalidad de crédito aplicable a su producto.",
      "Confirme el precio permitido para esa modalidad y cómo deben expresarse intereses y comisiones.",
      "Entregue a cada cliente términos firmados con monto recibido, obligación total, cronograma y precio.",
      "Entregue a cada cliente un canal de reclamación real y conserve las quejas registradas.",
      "Registre el capital separado de intereses, comisiones y mora, en pesos completos.",
      "Evalúe la capacidad de pago según el ciclo de caja real de la microempresa.",
      "Documente su conducta de cobranza: sin intimidación, coacción, escarnio público ni uso de la lista de contactos.",
    ],
  },
  faqs: [
    {
      q: "¿También se pueden registrar los gastos por voz?",
      a: "Sí. El asesor dicta el gasto tal como lo diría en voz alta — por ejemplo \"Transporte 8 mil\" — y queda en el libro de ingresos y gastos con la foto del comprobante adjunta. Es la misma vía de captura que un cobro, así que la jornada queda registrada completa mientras el asesor sigue en la calle, y el libro diario cierra contra caja real y no contra un estimado escrito en la noche.",
    },
    {
      q: "¿Cómo se planifican y se controlan las rutas de cobro?",
      a: "Las rutas se planifican por día o por semana, se asignan a un asesor y se cargan con los créditos y clientes que vencen. El asesor navega con GPS, el avance se ve en vivo y el historial de ubicación deja constancia de dónde estuvo. Como cada cobro y cada gasto queda ligado a su ruta, hay libro diario por ruta y cierre de caja por asesor.",
    },
    {
      q: "¿El asesor puede registrar el cobro hablando?",
      a: "Sí. El asesor toca el micrófono y dicta el cobro en español; Vasool identifica al cliente, interpreta el monto y el medio de pago, y muestra la coincidencia para que la confirme antes de guardar. Nada entra a la cartera sin esa confirmación. La entrada por voz está disponible en todos los países donde opera Vasool, no solo en India.",
    },
    {
      q: "¿Qué cambios se pueden retener para aprobación?",
      a: "El control maker-checker cubre clientes, créditos, esquemas de ahorro y natilleras, ventas de oro, gastos, personal, roles y rutas, y se activa por rol y por recurso. La solicitud se enruta al aprobador asignado, se aplica solo si es aprobada, y tanto la aprobación como el rechazo quedan en la traza de auditoría. Retener un cobro individual está en la hoja de ruta y hoy no es una función disponible.",
    },
    {
      q: "¿Puedo usar Vasool para una operación de gota a gota?",
      a: "No. Vasool es para préstamos formales y vigilados. Los modelos ilegales de gota a gota se asocian por la Policía Nacional con intereses excesivos, intimidación y cobro criminal, y nada en este producto busca habilitarlos, disimularlos ni legitimarlos. La cobranza coercitiva no es un caso de uso que apoyemos en ningún país.",
    },
    {
      q: "¿Basta con una sola tasa mensual para configurar mi producto?",
      a: "No para efectos de cumplimiento. El supervisor certifica tasas por modalidad de crédito, así que su producto debe quedar registrado en la categoría correcta y con su precio asociado. Vasool guarda el precio por categoría de producto precisamente por eso.",
    },
    {
      q: "¿La aplicación está en español?",
      a: "Esta página está en español, pero la interfaz de la aplicación funciona hoy en inglés. El español está en la hoja de ruta. Preferimos decirlo desde ahora y no que usted lo descubra durante la implementación.",
    },
    {
      q: "¿Se integra con PSE, Nequi o Daviplata?",
      a: "No de forma automática. Cada pago se registra con su método y su referencia para que concilie contra sus extractos y quede trazable, pero Vasool no importa transacciones automáticamente de esas plataformas.",
    },
    {
      q: "¿Sirve para una cooperativa de ahorro y crédito?",
      a: "Cubre el lado de crédito y cobranza: asociados, créditos, desembolsos, abonos, mora, correcciones y cierres, todo con trazabilidad. La administración de aportes y ahorros permanece en su sistema central.",
    },
    {
      q: "¿Vasool me hace cumplir ante la Superintendencia Financiera?",
      a: "No. Su autorización, modalidad de producto, precios, revelaciones y conducta provienen de la ley colombiana y de su supervisor. Vasool le entrega los registros para evidenciar una operación formal; no puede crear un permiso que usted no tiene.",
    },
  ],
  related: [
    { label: "Vasool en Colombia", to: "/loan-management-software-colombia" },
    { label: "Todos los países", to: "/countries" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "White-Label Loan App", to: "/white-label-loan-app" },
  ],
  ctaHeading: "Véalo con su propia cartera",
  ctaSub:
    "Solicite una llamada, traiga algunos créditos reales y le mostramos el cierre de caja por cobrador y la conciliación sobre sus propias cifras.",
};

const SoftwareDeCobranza = () => <KeywordLanding config={config} />;

export default SoftwareDeCobranza;
