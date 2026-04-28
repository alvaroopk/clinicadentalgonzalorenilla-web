export const BUSINESS = {
  name: "Clínica Dental Gonzalo Renilla",
  shortName: "Clínica Dental Renilla",
  phone: "915547875",
  phoneDisplay: "915 547 875",
  mobile: "669870154",
  mobileDisplay: "669 870 154",
  email: "clinica.gre@gmail.com",
  address: "Calle Blasco de Garay 94, 1º Dcha",
  city: "Madrid",
  postalCode: "28015",
  hours: {
    weekdays: "Lunes a Jueves: 09:00 - 20:00",
    friday: "Viernes: 09:00 - 14:00",
  },
  mapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1!2d-3.7122!3d40.4290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228f!2sCalle+Blasco+de+Garay+94!5e0!3m2!1ses!2ses!4v1",
  since: "1995",
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const TREATMENTS = [
  {
    slug: "implantologia",
    title: "Implantología",
    icon: "Gem",
    shortDesc:
      "Recupera tu sonrisa completa con implantes Nobel-Biocare de la máxima calidad.",
    desc: "La aparición de los implantes ha supuesto una auténtica revolución en la odontología. Trabajamos con la marca Nobel-Biocare, líder mundial en investigación. Ofrecemos carga inmediata cuando es posible, minimizando los tiempos de espera. Podemos reemplazar desde un solo diente hasta toda la arcada.",
  },
  {
    slug: "estetica-dental",
    title: "Estética Dental",
    icon: "Sparkles",
    shortDesc:
      "Carillas, blanqueamiento y rehabilitaciones para la sonrisa que siempre quisiste.",
    desc: "Transformamos tu sonrisa con carillas de composite o porcelana sistema e-max, incrustaciones y blanqueamiento. Resultados naturales y duraderos, diseñados específicamente para ti. Empleamos las porcelanas aluminosas más avanzadas para un acabado impecable.",
  },
  {
    slug: "blanqueamiento",
    title: "Blanqueamiento Dental",
    icon: "Sun",
    shortDesc: "Dientes más blancos de forma segura y con resultados duraderos.",
    desc: "Consigue una sonrisa más brillante con nuestro tratamiento de blanqueamiento, disponible en modalidad de gabinete (luz halógena o láser), ambulatoria (férulas en casa) o mixta. Un proceso seguro, conservador y con resultados visibles desde la primera sesión.",
  },
  {
    slug: "endodoncia",
    title: "Endodoncia",
    icon: "Shield",
    shortDesc:
      "Salvamos tu diente natural con técnicas especializadas y sin dolor.",
    desc: "Eliminamos la infección interna del diente con la máxima precisión. El Dr. Renilla es especialista en Endodoncia por la Universidad de Valencia, formado con los mejores especialistas del país. Salvamos tu diente natural cuando otros considerarían la extracción.",
  },
  {
    slug: "odontologia-infantil",
    title: "Odontología Infantil",
    icon: "Baby",
    shortDesc:
      "Un entorno tranquilo y amigable para que los más pequeños cuiden sus dientes.",
    desc: "Cuidamos la salud dental de tus hijos desde los primeros dientes. Un entorno tranquilo y un equipo paciente para que los más pequeños pierdan el miedo al dentista. Apostamos por la prevención y la educación dental desde pequeños.",
  },
  {
    slug: "odontologia-restauradora",
    title: "Odontología Restauradora",
    icon: "Wrench",
    shortDesc:
      "Reconstruimos dientes dañados con materiales de alta calidad estética.",
    desc: "Reconstruimos dientes dañados o perdidos mediante empastes, incrustaciones y coronas de alta calidad estética y funcional. Empleamos los materiales más avanzados para restauraciones que se integran perfectamente con tus dientes naturales.",
  },
  {
    slug: "periodoncia",
    title: "Periodoncia",
    icon: "Leaf",
    shortDesc: "Cuidamos tus encías para proteger tus dientes a largo plazo.",
    desc: "Las encías sanas son la base de unos dientes sanos. Diagnosticamos y tratamos la enfermedad periodontal para proteger tu dentición a largo plazo. Un diagnóstico precoz es clave para prevenir la pérdida de dientes.",
  },
  {
    slug: "protesis",
    title: "Prótesis",
    icon: "Puzzle",
    shortDesc: "Prótesis fijas y removibles para recuperar tu funcionalidad.",
    desc: "Prótesis fijas y removibles adaptadas a tus necesidades, fabricadas con materiales de alta durabilidad y acabado natural. Cada prótesis se diseña y ajusta individualmente para garantizar la máxima comodidad y funcionalidad.",
  },
  {
    slug: "sedacion-consciente",
    title: "Sedación Consciente",
    icon: "Eye",
    shortDesc:
      "Para pacientes con ansiedad: tratamientos relajados con gafas 3D Zeiss.",
    desc: "Para pacientes con ansiedad dental, ofrecemos sedación consciente y la posibilidad de ver películas o documentales con las gafas 3D Cinemizer OLED de Zeiss durante el tratamiento. Una experiencia completamente diferente en el sillón dental.",
  },
];

// URL de la web original del cliente (usada en el banner de demo)
export const ORIGINAL_URL = "https://clinicadentalgonzalorenilla.es/";

// Cambiar a true para habilitar la indexación en Google
export const SITE_INDEXED = false;
