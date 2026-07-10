/**
 * Todo el contenido de la experiencia se configura desde este archivo.
 * Cambiá los textos, nombres, imágenes y enlaces acá — no hace falta tocar
 * los componentes para actualizar el regalo.
 */

export const giftContent = {
  /** Nombre de la cumpleañera (se usa en varias secciones). */
  birthdayPerson: "Pepi",

  /** Quienes regalan la experiencia. */
  from: ["Vale", "Xavi"],

  /** Fecha del cumpleaños (texto libre, se muestra en detalles pequeños). */
  birthdayDateLabel: "7 de Julio",

  /** Ubicación del destino sorpresa. */
  location: {
    city: "Minas",
    department: "Lavalleja",
    country: "Uruguay",
    full: "Minas, Lavalleja",
  },

  /** Paleta de colores principal. Se aplica como variables CSS globales. */
  theme: {
    forest: "#1f3324",
    forestDeep: "#152219",
    sage: "#8aa287",
    sageLight: "#c3d2bb",
    beige: "#e7dcc3",
    cream: "#faf5e9",
    brown: "#8a6a4d",
    accent: "#e2924a",
    accentSoft: "#f0b76b",
  },

  /** Metadatos para compartir la página (título, descripción, OG). */
  meta: {
    title: "Pepi's birthday gift",
    description:
      "Una pequeña historia con pistas antes de descubrir el regalo de cumpleaños de Pepi. Deslizá para descubrirlo.",
    ogImageAlt: "Sierras de Minas, Lavalleja, al amanecer",
  },

  /** Imágenes usadas a lo largo de la historia. Podés usar rutas locales
   * dentro de /public/images o URLs externas (configurando next.config.ts). */
  images: {
    hero: {
      src: "/images/hero.svg",
      alt: "Cielo al amanecer sobre las sierras",
    },
    friends: {
      src: "/images/friends.svg",
      alt: "Ruta abierta hacia el horizonte, lista para una escapada",
    },
    nature: {
      src: "/images/nature.svg",
      alt: "Colinas verdes y líneas topográficas al amanecer",
    },
    trekking: {
      src: "/images/trekking.svg",
      alt: "Sendero serpenteante entre cerros",
    },
    minas: {
      src: "/images/minas.svg",
      alt: "Sierras de Minas, Lavalleja",
    },
    airbnb: {
      src: "/images/airbnb.svg",
      alt: "Alojamiento entre las sierras de Minas",
    },
  },

  /** Datos del alojamiento (el regalo real). */
  airbnb: {
    title: "Casa de sierra en Minas",
    url: "https://www.airbnb.com/rooms/1639807967734664458?photo_id=1688729784&source_impression_id=p3_1783720292_P3rIwpPE6CdmkSjS&previous_page_section_name=1000&modal=PHOTO_TOUR_SCROLLABLE",
    nightsLabel: "1 noche",
    description: "Una escapada para disfrutar juntas",
    datesNote: "Las fechas las coordinamos juntas.",
    ctaLabel: "Ver el lugar",
  },

  /** Textos de cada escena de la historia. */
  sections: {
    hero: {
      eyebrow: "Tenemos algo para vos…",
      title: (name: string) => `¡Feliz cumpleaños, ${name}!`,
      subtitle: "Este año no queríamos regalarte simplemente una cosa.",
      scrollHint: "Deslizá para descubrirlo",
    },

    together: {
      lines: [
        "Hace tiempo venimos hablando de hacer algo juntas…",
        "Lo pensamos.",
        "Lo imaginamos.",
        "Lo postergamos alguna que otra vez…",
        "Pero esta vez decidimos convertirlo en un plan de verdad.",
      ],
      emphasisWord: "juntas",
    },

    pause: {
      kicker: "Primera pista",
      lines: [
        "Una pequeña pausa.",
        "Lejos de la rutina.",
        "Un lugar para desconectar…",
        "…y volver a conectar.",
      ],
    },

    nature: {
      kicker: "Segunda pista",
      lines: [
        "Sabemos cuánto te gusta estar en contacto con la naturaleza.",
        "Aire fresco.",
        "Paisajes.",
        "Silencio.",
        "Y alguna aventura en el medio.",
      ],
    },

    trekking: {
      kicker: "Tercera pista",
      lines: [
        "Prepará calzado cómodo.",
        "Probablemente caminemos bastante.",
        "Puede haber senderos…",
        "Subidas…",
        "Y vistas que van a valer la pena.",
      ],
    },

    destination: {
      kicker: "Cuarta pista",
      intro: "Tenemos un destino en mente.",
      name: "Minas.",
      description: "Sierras, naturaleza y unos días para compartir juntas.",
    },

    beforeReveal: {
      lines: [
        "Porque los mejores regalos no siempre entran en una caja.",
        "A veces son un lugar.",
        "Un momento.",
        "Una aventura.",
        "Y las personas con quienes la compartís.",
      ],
      closingLines: ["Así que esta vez…", "Tenemos plan."],
      ctaLabel: "Descubrir el regalo",
    },

    giftReveal: {
      preTitle: "¡Nos vamos juntas!",
      title: (city: string) => `Tu regalo es una estadía en ${city}.`,
    },

    finalMessage: {
      lines: [
        "Esperamos que este regalo se convierta en uno de esos recuerdos que vamos a seguir mencionando durante mucho tiempo.",
        "Feliz cumpleaños.",
        "Te queremos mucho.",
      ],
      signaturePrefix: "Con amor,",
      restartLabel: "Volver a ver la sorpresa",
    },
  },
} as const;

export type GiftContent = typeof giftContent;
