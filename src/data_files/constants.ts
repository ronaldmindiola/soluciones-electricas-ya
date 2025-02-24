import ogImageSrc from "@images/social.png";

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
        icon: `@images/brands/alpina.png`,
        name: "Alpina",
        href: "#",
    },
    {
        icon: `@images/brands/claro.png`,
        name: "Claro",
        href: "#",
    },
    {
        icon: `@images/brands/betplay.png`,
        name: "BetPlay",
        href: "#",
    },
    {
        icon: `<svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 150 40"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <path
        stroke="#6B7280"
        stroke-miterlimit="3.864"
        stroke-width=".851"
        d="M.492 38.141h149.015M.492.911h149.015"></path>
      <path fill="#6B7280" d="M.545 33.488h27.878V5.565H.545v27.923Z"></path>
      <path
        fill="#d4d4d4"
        d="m2.176 22.319 12.286-14.24 12.286 14.24H18.65l-4.188-5.026-4.188 5.026H2.176ZM2.176 23.436h8.098v1.395h8.377v-1.395h8.097v5.584H2.176v-5.584Z"
      ></path>
      <path
        fill="#6B7280"
        fill-rule="evenodd"
        d="M56.51 25.334c0-2.875 1.218-5.637 4.462-5.637 3.244 0 4.463 2.762 4.463 5.637 0 2.737-1.219 5.499-4.463 5.499-3.244 0-4.462-2.762-4.462-5.5Zm-3.612 0c0 4.738 2.99 8.534 8.074 8.534s8.074-3.796 8.074-8.534c0-4.878-2.99-8.673-8.074-8.673s-8.074 3.795-8.074 8.673ZM85.25 22.573c-.438-3.796-3.473-5.913-7.084-5.913-5.085 0-8.074 3.797-8.074 8.673 0 4.74 2.989 8.535 8.074 8.535 4.024 0 6.853-2.624 7.222-6.717H81.89c-.275 2.163-1.518 3.68-3.724 3.68-3.245 0-4.464-2.761-4.464-5.498 0-2.875 1.219-5.637 4.464-5.637 1.794 0 3.357 1.244 3.588 2.877h3.496ZM86.688 33.477h3.611V26.39h6.648v7.086h3.612V17.05h-3.612v6.304H90.3V17.05h-3.612v16.426ZM106.898 33.477h3.611V20.089h4.923V17.05h-13.457v3.038h4.923v13.388ZM116.847 33.477h3.611V17.05h-3.611v16.426ZM123.397 33.477h12.468v-3.035h-8.856v-4.027h7.959v-2.808h-7.959V20.09h8.672V17.05h-12.284v16.426Z"
        clip-rule="evenodd"></path>
      <path
        fill="#6B7280"
        d="M137.873 33.477h3.611V26.69h6.878v-2.807h-6.878V20.09h7.937V17.05h-11.548v16.426ZM37.73 33.49h3.608v-7.085h6.648v7.086h3.612V17.065h-3.612v6.303h-6.648v-6.303h-3.607v16.426Z"
      ></path>
    </svg>`,
        name: "Second",
        href: "#",
    },
    {
        icon: ` <svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 150 39"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <g clip-path="url(#n)">
        <path
          fill="#6B7280"
          d="M66.454 14.419v12.11s4.413 1.098 11.32 1.098c6.855 0 11.316-1.093 11.316-1.093V22.42s-4.793.943-11.364.943c-3.19 0-5.304-.375-6.44-.489 0-.992.003-3.792 0-4.793 1.272-.127 3.412-.493 6.488-.493 6.397.026 11.316.974 11.316.974v-4.146s-4.39-1.093-11.316-1.093c-6.977 0-11.32 1.097-11.32 1.097ZM94.464 27.356h4.955V13.55h-4.955v13.806ZM28.155 27.356h4.954V13.55h-4.954v13.806ZM56.17 27.351s-3.583-2.896-8.852-5.627c-1.468-.76-2.71-1.267-3.863-1.734v7.361h-4.797V13.576s4.06.786 8.669 3.176c5.269 2.73 8.847 5.378 8.847 5.378v-8.58h4.81V27.35H56.17ZM24.843 16.678l-12.29 11.045L.245 16.669l3.68-3.351s7.518 7.235 8.628 8.27c1.11-1.035 8.624-8.27 8.624-8.27l3.666 3.36ZM110.599 13.558h6.899c2.516-.004 4.098-1.284 4.679-1.896.586-.612 1.94-2.14 1.94-3.92V2.007c0-1.061.861-1.922 1.922-1.922h7.48c1.062 0 1.923.86 1.923 1.927v7.48a1.923 1.923 0 0 1-1.923 1.922h-5.736c-1.779 0-3.308 1.354-3.919 1.94-.612.58-1.892 2.162-1.897 4.68v6.898h-11.368V13.558Z"
        ></path>
        <mask
          id="b"
          width="27"
          height="28"
          x="123"
          y="12"
          maskUnits="userSpaceOnUse"
          style="mask-type:luminance"
        >
          <path fill="#fff" d="M123.16 12.746h26.765v26.843H123.16V12.746Z"
          ></path>
        </mask>
        <g mask="url(#b)">
          <path
            fill="#6B7280"
            d="M149.755 19.605c0-1.826-.739-3.46-1.914-4.649-1.175-1.192-2.827-1.913-4.653-1.913-3.736 0-6.715 3.045-6.715 6.676 0 .664.288 1.922.288 2.46a5.18 5.18 0 0 1-5.177 5.177h-5.545a1.92 1.92 0 0 0-1.922 1.922v7.48c0 1.062.861 1.922 1.922 1.922h7.48c1.062 0 1.923-.86 1.923-1.922v-5.544a5.177 5.177 0 0 1 5.177-5.178c.537 0 1.796.289 2.455.289 3.635 0 6.681-2.98 6.681-6.72Z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="n">
          <path fill="#fff" d="M0 0h150v38.764H0z"></path>
        </clipPath>
      </defs>
    </svg>`,
        name: "Third",
        href: "#",
    },
    {
        icon: `<svg
      class="mx-auto h-auto w-24 py-3 sm:mx-0 md:w-32 lg:w-40 lg:py-5"
      viewBox="0 0 100 42"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <path
        fill="#6B7280"
        d="M77.466.414v6.157H36.751v8.093h1.356V7.885h40.729V.415h-1.37ZM58.693 19.465v5.686H55.4v3.195h-3.085v3.556H14.367v1.314h39.248v-3.57h3.1v-3.181h3.292v-7h-1.314Z"
      ></path>
      <path
        fill="#6B7280"
        d="M14.491 10.002h9.366l1.26.083s7.567.442 9.255 7.387c1.687 6.945-3.473 12.244-11.013 12.327-7.54.083-8.965 0-8.965 0v-1.162l.997-.083c.221-.042.428-.07.65-.097.207-.041.415-.083.609-.194.235-.124.4-.36.484-.608.083-.236.083-.47.083-.72 0-.083.014-.152.014-.235V13.184a5.03 5.03 0 0 0-.028-.457c-.014-.138-.028-.277-.055-.415a.9.9 0 0 0-.153-.304 1.063 1.063 0 0 0-.304-.305c-.124-.083-.249-.124-.387-.18a5.89 5.89 0 0 0-.969-.262 15.285 15.285 0 0 0-.844-.139v-1.12Zm6.074 1.425V26.09s-.139 1.605.968 2.048c1.107.442 3.085.401 4.233.11 1.149-.29 5.34-1.577 5.05-8.812-.29-7.222-6.17-8.093-7.512-8.093-1.342 0-2.74.083-2.74.083ZM40.459 11.178v-1.176h9.712s6.848-.139 6.516 5.395c-.332 5.534-7.07 5.825-7.706 5.797-.637-.028-2.31 0-2.31 0v4.634c0 .36 0 .72-.014 1.08 0 .276-.014.58.097.843.11.263.373.43.622.526.277.11.567.18.872.221.152.028.318.042.484.056.608.055.968 0 .968 0v1.231h-9.13v-1.162l1.369-.11c.124-.015.25-.042.36-.07.207-.055.442-.124.608-.249.167-.124.25-.318.305-.512.055-.193.11-.429.11-.65V12.921s.111-.609-.276-1.08c-.388-.497-2.587-.663-2.587-.663Zm6.24.166v8.467h1.535s4.565.166 4.648-4.013c.07-4.178-2.822-4.786-6.184-4.454ZM62.47 9.988h9.462s5.783-.29 6.835 3.597c1.051 3.901-2.601 5.672-3.016 5.838-.402.166-1.854.692-1.854.692l4.994 6.35s1.107 1.397 2.2 1.826c1.107.429 1.909.318 1.909.318v1.176h-5.728l-3.25-4.565-3.446-4.303h-2.02v5.907s-.082 1.204.623 1.453c.692.25 2.31.318 2.31.318V29.8h-9.061v-1.176s1.868-.042 2.393-.457c.47-.36.43-1.065.43-1.065v-14.29s.027-.831-.485-1.163c-.512-.318-2.31-.484-2.31-.484l.013-1.176Zm6.1 1.356v8.231h1.854s4.538.028 4.621-4.385c0-.346-.014-.706-.083-1.038a3.554 3.554 0 0 0-.277-.844 3.231 3.231 0 0 0-.415-.65 2.313 2.313 0 0 0-.54-.498 5.42 5.42 0 0 0-.608-.36 3.257 3.257 0 0 0-.609-.235 4.942 4.942 0 0 0-.65-.152c-.194-.028-.387-.056-.58-.07-.153-.013-.291-.027-.444-.027-.207 0-.415.014-.622.014-.263.014-.526.014-.789.014h-.858Z"
      ></path>
      <path
        fill="#6B7280"
        d="M25.089 13.432s-9.684-.608-17.64 7.277C-.504 28.581.008 38.35.008 38.35h1.508s-.498-9.145 7.014-16.657c7.526-7.526 16.518-6.89 16.518-6.89l.042-1.37ZM18.088 38.473l-1.065.07c-.014-.61-.249-.914-.72-.914-.525 0-.802.47-.802 1.411 0 .54.07.913.222 1.107.138.194.346.29.608.29.416 0 .678-.276.775-.816l.982.056c-.069.525-.262.913-.58 1.19-.319.262-.72.4-1.19.4-.581 0-1.038-.193-1.398-.594-.36-.401-.54-.941-.54-1.647 0-.65.18-1.19.527-1.604.345-.415.816-.623 1.424-.623 1.038 0 1.62.553 1.758 1.674ZM22.46 41.267c-.58 0-1.038-.22-1.356-.664-.318-.442-.484-.968-.484-1.59 0-.637.166-1.163.484-1.591.319-.43.789-.637 1.384-.637.608 0 1.065.222 1.37.678.304.457.456.968.456 1.55 0 .636-.152 1.162-.47 1.59-.319.443-.775.664-1.384.664Zm.028-3.638c-.54 0-.803.47-.803 1.411 0 .94.263 1.411.803 1.411.512 0 .774-.47.774-1.41 0-.942-.262-1.412-.774-1.412ZM30.484 36.855v4.344h-.872l-1.701-2.933v.152c.014.069.014.138.014.194v2.6h-.789v-4.344h1.093l1.48 2.56c-.014-.125-.014-.222-.014-.29v-2.27h.789v-.014ZM36.516 37.809l-.871.29c-.111-.345-.36-.511-.734-.511-.4 0-.608.124-.608.387 0 .11.041.194.11.263.083.069.25.138.512.194.443.083.761.18.969.262.207.097.373.236.525.443.139.208.208.429.208.678 0 .387-.152.733-.457 1.024-.304.29-.747.429-1.342.429-.442 0-.83-.097-1.134-.305a1.419 1.419 0 0 1-.623-.899l.941-.208c.11.402.401.61.885.61.236 0 .402-.042.526-.14.11-.096.166-.193.166-.317a.343.343 0 0 0-.152-.29c-.11-.07-.304-.14-.595-.194-.553-.111-.94-.277-1.176-.47-.235-.195-.346-.485-.346-.873 0-.387.139-.705.415-.982.277-.263.664-.4 1.149-.4.83 0 1.383.331 1.632 1.009ZM42.23 36.855v.857h-1.08v3.486h-1.023v-3.486h-1.08v-.858h3.183ZM45.84 39.483V41.2h-1.023v-4.344h1.909c.346 0 .636.041.844.124.207.083.387.235.525.456.139.222.208.457.208.734 0 .526-.25.899-.747 1.12l.802 1.923h-1.12l-.664-1.715h-.734v-.014Zm0-1.854v1.107h.623c.207 0 .346-.014.443-.041a.476.476 0 0 0 .249-.194.563.563 0 0 0 .11-.332.563.563 0 0 0-.11-.332.47.47 0 0 0-.236-.18c-.082-.028-.248-.028-.47-.028h-.609ZM54.611 36.855v2.697c0 .443-.055.761-.152.983-.097.207-.29.387-.553.525-.263.139-.609.208-1.024.208-.415 0-.747-.056-.996-.18a1.201 1.201 0 0 1-.553-.526c-.125-.221-.18-.553-.18-.996v-2.698h1.107v2.698c0 .235.013.401.055.512.041.11.11.194.235.263a.82.82 0 0 0 .429.097c.194 0 .346-.028.47-.097a.505.505 0 0 0 .236-.25c.041-.11.055-.276.055-.525v-2.698h.871v-.014ZM61.086 38.473l-1.065.07c-.014-.61-.25-.914-.72-.914-.525 0-.802.47-.802 1.411 0 .54.07.913.221 1.107.139.194.346.29.61.29.414 0 .677-.276.774-.816l.982.056c-.07.525-.263.913-.581 1.19-.318.262-.72.4-1.19.4-.58 0-1.037-.193-1.397-.594-.36-.401-.54-.941-.54-1.647 0-.65.18-1.19.526-1.604.346-.415.816-.623 1.425-.623 1.038 0 1.619.553 1.757 1.674ZM66.578 36.855v.857H65.5v3.486h-1.037v-3.486h-1.08v-.858h3.196ZM70.175 36.855h-1.01v4.344h1.01v-4.344ZM74.838 41.267c-.581 0-1.038-.22-1.356-.664-.318-.442-.484-.968-.484-1.59 0-.637.166-1.163.484-1.591.318-.43.788-.637 1.383-.637.609 0 1.066.222 1.37.678.304.457.456.968.456 1.55 0 .636-.152 1.162-.47 1.59-.304.443-.775.664-1.383.664Zm.027-3.638c-.54 0-.802.47-.802 1.411 0 .94.263 1.411.802 1.411.512 0 .775-.47.775-1.41 0-.942-.263-1.412-.775-1.412ZM82.862 36.855v4.344h-.872l-1.702-2.933v.152c.014.069.014.138.014.194v2.6h-.788v-4.344h1.093l1.48 2.56c-.014-.125-.014-.222-.014-.29v-2.27h.789v-.014Z"
      ></path>
    </svg>`,
        name: "Fourth",
        href: "#",
    },
]

export const ABOUT_US = {
  pageTitle: "Nosotros",
  sectionTitle: "Quienes Somos?",
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