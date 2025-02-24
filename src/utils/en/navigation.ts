// Enlaces para la barra de navegación
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Showcase", url: "/showcase" },
  { name: "Nosotros", url: "/nosotros" },
  { name: "Contacto", url: "/contacto" },
];

// Enlaces para el pie de página
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/documentacion" },
      { name: "Fabricación de Mobiliario", url: "/productos" },
      { name: "Servicios Eléctricos", url: "/servicios" },
      { name: "Proyectos Realizados", url: "/proyectos" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Acerca de Nosotros", url: "/acerca" },
      { name: "Blog", url: "/blog" },
      { name: "Carreras", url: "/carreras" },
      { name: "Clientes", url: "/clientes" },
    ],
  },
];

// Enlaces para las redes sociales
const socialLinks = {
  facebook: "https://www.facebook.com/SolucionesElectricasYA",
  instagram: "https://www.instagram.com/SolucionesElectricasYA",
  linkedin: "https://www.linkedin.com/company/soluciones-electricas-ya",
  twitter: "https://twitter.com/SolucionesElectricasYA",
  whatsapp: "https://wa.me/1234567890",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
