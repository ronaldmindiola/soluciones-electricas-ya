// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/productos" },
  { name: "Servicios", url: "/servicios" },
  { name: "Blog", url: "/#" },
  { name: "Contacto", url: "/contact" },
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
      { name: "Blog", url: "/blog" },
      { name: "Contacto", url: "/contact" },
    ],
  },
];


// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/SolucionesElectricasYA",
  x: "https://twitter.com/SolucionesYA",
  github: "https://github.com/SolucionesElectricasYA",
  linkedin: "https://www.linkedin.com/company/solucioneselectricasya",
  instagram: "https://www.instagram.com/solucioneselectricasya",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};