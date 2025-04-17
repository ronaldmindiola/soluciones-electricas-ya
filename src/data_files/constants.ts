import ogImageSrc from "@images/social.png";
import Claro from "@images/brands/claro.png";
import Alpina from "@images/brands/alpina.png";
import Betplay from "@images/brands/betplay.png";
import CocaCola from "@images/brands/coca-cola.png";
import Eucerin from "@images/brands/eucerin.png";
import ZTE from "@images/brands/zte.png";

export const SITE = {
  title: "Soluciones Electricas YA",
  tagline: "Soluciones confiables para tus proyectos eléctricos",
  description: "Soluciones Eléctricas Ya ofrece herramientas eléctricas de alta calidad y servicios especializados para satisfacer todas tus necesidades en proyectos eléctricos. Explora nuestra oferta y contacta a nuestro equipo para obtener productos y servicios de confianza.",
  description_short: "Ofrecemos soluciones de iluminación, mobiliario y servicios eléctricos de alta calidad.",
  url: "https://solucioneselectricasya.com",
  author: "Ronald Mindiola",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: ${SITE.tagline}`,
  description: SITE.description,
  image: ogImageSrc,
};

export const partnersData = [
    {
        logo: Alpina,
        name: "Alpina",
        href: "#",
    },
    {
        logo: Claro,
        name: "Claro",
        href: "#",
    },
    {
        logo: Betplay,
        name: "BetPlay",
        href: "#",
    },
    {
        logo: CocaCola,
        name: "Coca-Cola",
        href: "#",
    },
    {
        logo: Eucerin,
        name: "Eucerin",
        href: "#",
    },
    {
        logo: ZTE,
        name: "ZTE",
        href: "#",
    },
    
];

export const ABOUT_US = {
  pageTitle: "Nosotros",
  sectionTitle: "Nosotros",
  title: "Nosotros",
  subtitle: "Quienes Somos?",
  tagline: "En Soluciones Eléctricas YA SAS, energizamos tus proyectos con soluciones confiables y de calidad, respaldadas por experiencia y compromiso.",

  mission: "En Soluciones Eléctricas YA SAS, nos dedicamos a ofrecer herramientas eléctricas de alta calidad, junto con servicios especializados en iluminación, montajes y adecuaciones eléctricas. Nuestra misión es proporcionar soluciones seguras, eficientes y duraderas, permitiendo que nuestros clientes lleven a cabo sus proyectos eléctricos con total confianza. Trabajamos con pasión y compromiso para ser aliados estratégicos en cada desafío eléctrico, garantizando excelencia en cada detalle.",
  vision: "Ser reconocidos como líderes en soluciones eléctricas y de iluminación, destacándonos por la calidad de nuestros productos y servicios, nuestra atención personalizada y nuestro compromiso con la innovación y sostenibilidad. Aspiramos a transformar el sector, expandiendo nuestra presencia en nuevos mercados y brindando soluciones vanguardistas que contribuyan al desarrollo eficiente y responsable de cada proyecto.",
  
  values: [
    {
      name: "Compromiso",
      description: "Estamos dedicados a ofrecer soluciones que cumplan y superen las expectativas de nuestros clientes.",
      icon: "handshake",
    },
    {
      name: "Calidad",
      description: "Seleccionamos cuidadosamente nuestras herramientas y servicios para garantizar resultados excepcionales.",
      icon: "medal",
    },
    {
      name: "Innovación",
      description: "Adoptamos las últimas tecnologías y tendencias para ofrecer soluciones modernas y efectivas.",
      icon: "lightbulb",
    },
    {
      name: "Sostenibilidad",
      description: "Promovemos prácticas responsables con el medio ambiente en cada aspecto de nuestro negocio.",
      icon: "leaf",
    },
    {
      name: "Confianza",
      description: "Construimos relaciones sólidas con nuestros clientes basándonos en la transparencia y el respeto mutuo.",
      icon: "shield-heart",
    },
  ],
  story: {
    title: "Nuestra Historia",
    content: 
      "Desde nuestros inicios, en 'Soluciones Eléctricas Ya' hemos trabajado con un objetivo claro: ser la solución integral para todos los proyectos eléctricos de nuestros clientes. Nuestra pasión por la excelencia nos ha llevado a consolidarnos como un referente en el sector, ofreciendo no solo productos de alta calidad, sino también asesoramiento profesional que garantiza el éxito de cada proyecto. Cada paso que damos está inspirado en nuestro compromiso con la calidad, la innovación y la satisfacción del cliente.",
  },
  team: {
    title: "Nuestro Equipo",
    content: 
      "Contamos con un equipo de profesionales altamente capacitados que comparten nuestra visión y valores. Desde asesores técnicos hasta especialistas en instalación, todos trabajamos con un solo propósito: ofrecerte un servicio excepcional y soluciones adaptadas a tus necesidades. Nos enorgullece ser más que un proveedor; somos tus socios estratégicos en cada reto eléctrico.",
  },
  cta: {
    title: "Conecta con Nosotros",
    content: 
      "¿Listo para llevar tus proyectos eléctricos, mobiliarios y de iluminación al siguiente nivel? Contáctanos hoy y descubre cómo en Soluciones Eléctricas YA hacemos realidad tus ideas con energía, confianza y calidad.",
    btnTitle: "Contáctanos",
  },
};

export const SHOWCASE = {
  title: "Showcase",
  subtitle: "Soluciones confiables para tus proyectos eléctricos",
  tagline: "Soluciones Eléctricas Ya ofrece herramientas eléctricas de alta calidad y servicios especializados para satisfacer todas tus necesidades en proyectos eléctricos. Explora nuestra oferta y contacta a nuestro equipo para obtener productos y servicios de confianza.",
  
  url: "https://solucioneselectricasya.com",
  author: "Ronald Mindiola",
  imagePath: "showcase",
};