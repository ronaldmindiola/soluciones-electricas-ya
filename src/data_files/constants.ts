import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Soluciones Eléctrica Ya",
  tagline: "Soluciones Eléctricas de Alta Calidad para Proyectos Profesionales",
  description: "Soluciones Eléctricas YA ofrece herramientas eléctricas de primera calidad y servicios especializados para garantizar el éxito de tus proyectos. Comienza a explorar nuestras soluciones y contacta a nuestro equipo para asegurar eficiencia y confiabilidad en cada instalación.",
  description_short: "Soluciones Eléctricas YA ofrece herramientas eléctricas de alta calidad y servicios especializados para cubrir todas las necesidades de tus proyectos.",
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
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Herramientas Eléctricas & Servicios de Instalación`,
  description: "Equipa tus proyectos con las herramientas eléctricas de primera calidad y servicios de instalación expertos de Soluciones Eléctricas YA. Con la confianza de líderes en la industria, ofrecemos soluciones simples, asequibles y confiables. Experimenta la diferencia con un diseño centrado en el usuario y tecnología de vanguardia. ¡Comienza a explorar ahora!",

  image: ogImageSrc,
};
