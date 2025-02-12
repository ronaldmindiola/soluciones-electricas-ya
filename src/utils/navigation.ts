// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Showcase", url: "/showcase" },
  { name: "Nosotros", url: "/nosotros" },
  { name: "Contacto", url: "/contacto" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Herramientas & Equipos", url: "/herramientas-equipos" },
      { name: "Servicios Eléctricos", url: "/servicios-electricos" },
      { name: "Proyectos Destacados", url: "/proyectos-destacados" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre Nosotros", url: "/nosotros" },
      { name: "Contacto", url: "/contacto" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/solucionelectricasya",
  x: "https://twitter.com/Soluciones_Electricas_YA",
  instagram: "https://www.instagram.com/soluciones_electricas_ya/",
  linkedin: "https://www.linkedin.com/company/soluciones-electricas-ya-sas/",
  youtube: "https://www.youtube.com/@Soluciones_Electricas_YA",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};