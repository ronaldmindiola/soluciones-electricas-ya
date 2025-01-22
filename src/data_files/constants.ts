import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Soluciones Eléctricas Ya",
  tagline: "Soluciones confiables para tus proyectos eléctricos",
  description: "Soluciones Eléctricas Ya ofrece herramientas eléctricas de alta calidad y servicios especializados para satisfacer todas tus necesidades en proyectos eléctricos. Explora nuestra oferta y contacta a nuestro equipo para obtener productos y servicios de confianza.",
  description_short: "Herramientas y servicios eléctricos confiables para tus proyectos.",
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

export const ABOUT_US = {
  pageTitle: "Nosotros | Soluciones Eléctricas Ya",
  title: "Quienes Somos?",
  tagline: "Energizamos tus proyectos con soluciones confiables y de calidad.",
  mission: "Nuestra misión es proporcionar herramientas eléctricas de alta calidad y servicios especializados que permitan a nuestros clientes llevar a cabo proyectos eléctricos seguros, eficientes y duraderos. En 'Soluciones Eléctricas Ya', trabajamos con pasión para convertirnos en tus aliados estratégicos en cada reto eléctrico.",
  vision: "Ser reconocidos como líderes en soluciones eléctricas en el mercado, destacándonos por la calidad de nuestros productos, nuestra atención personalizada y nuestro compromiso con la innovación y sostenibilidad.",
  values: [
    {
      name: "Compromiso",
      description: "Estamos dedicados a ofrecer soluciones que cumplan y superen las expectativas de nuestros clientes.",
    },
    {
      name: "Calidad",
      description: "Seleccionamos cuidadosamente nuestras herramientas y servicios para garantizar resultados excepcionales.",
    },
    {
      name: "Innovación",
      description: "Adoptamos las últimas tecnologías y tendencias para ofrecer soluciones modernas y efectivas.",
    },
    {
      name: "Sostenibilidad",
      description: "Promovemos prácticas responsables con el medio ambiente en cada aspecto de nuestro negocio.",
    },
    {
      name: "Confianza",
      description: "Construimos relaciones sólidas con nuestros clientes basándonos en la transparencia y el respeto mutuo.",
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
      "¿Estás listo para llevar tus proyectos eléctricos al siguiente nivel? Contáctanos hoy mismo y descubre cómo 'Soluciones Eléctricas Ya' puede energizar tus ideas y proyectos con confianza y calidad.",
    btnTitle: "Contáctanos",
  },
};
