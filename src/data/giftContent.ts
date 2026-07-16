/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN DEL REGALO
 * ─────────────────────────────────────────────────────────────────────────
 *  Todo el contenido de la experiencia se edita desde este archivo.
 *  No hace falta tocar los componentes para cambiar textos, nombres o enlaces.
 *
 *  ▸ Nombre del cumpleañero  → constante `birthdayName` (abajo).
 *  ▸ Enlace al vale real      → constante `realVoucherUrl` (abajo).
 *  ▸ Escudo y caricatura      → objeto `images` (abajo). Los archivos van en
 *                               /public/images/logo-nacional.png y
 *                               /public/images/caricatura-nacional.png
 * ─────────────────────────────────────────────────────────────────────────
 */

/** 👉 Cambiá el nombre del cumpleañero acá (por ejemplo "Silvio"). */
export const birthdayName = "Elbio";

/**
 * 👉 Enlace al vale/reserva real. Dejalo como "" mientras no exista.
 *    Cuando tenga una URL, aparecerá automáticamente el botón
 *    "Ver reserva o vale original" debajo del botón de descarga.
 */
export const realVoucherUrl = "";

export const giftContent = {
  birthdayName,
  realVoucherUrl,

  /** Quiénes regalan la experiencia. El orden se respeta tal cual. */
  from: ["Vale", "Xavi"],

  /**
   * Paleta inspirada en Nacional (blanco → rojo → azul).
   * Se aplica como variables CSS globales desde src/app/layout.tsx.
   */
  theme: {
    white: "#ffffff",
    snow: "#f6f7fb",
    paper: "#fffdf5",
    red: "#d4212a",
    redDeep: "#a30f18",
    blue: "#123f9e",
    blueDeep: "#0a1f52",
    ink: "#0c1430",
    gold: "#e6b34a",
    goldSoft: "#f4d58d",
  },

  /** Metadatos para compartir la página. */
  meta: {
    title: `¡Feliz cumpleaños, ${birthdayName}!`,
    description:
      "Una pequeña historia con pistas antes de descubrir el regalo. Deslizá para descubrirlo.",
  },

  /** Recursos gráficos. Los archivos van en /public. */
  images: {
    escudo: {
      src: "/images/logo-nacional.png",
      alt: "Escudo de Nacional",
      // Proporción del archivo (para reservar espacio y no deformar).
      width: 600,
      height: 600,
    },
    caricatura: {
      src: "/images/caricatura-nacional.png",
      alt:
        "Caricatura de Elbio, Ana y Vale sacándose una selfie frente al Gran Parque Central mientras Xavi intenta escapar.",
      width: 1122,
      height: 1402,
    },
  },

  /** Textos de cada escena de la historia. */
  sections: {
    // 1. Portada
    hero: {
      eyebrow: "Tenemos algo para vos…",
      title: (name: string) => `¡Feliz cumpleaños, ${name}!`,
      scrollHint: "Deslizá para descubrirlo",
    },

    /*
     * PISTAS
     * Cada sección comunica UNA sola idea y vive directamente sobre el
     * degradado (sin recuadros blancos). Debajo de cada pista va un pequeño
     * remate en rojo (`comment`). Orden:
     *   1. intro    → introducción del regalo
     *   2. comida   → mezcla de comer bien + Nacional
     *   3. vale     → siempre le insistís a Vale para ir a la cancha
     *   4. vasco    → guiño breve al "vasco fallido" (Xavi)
     *   5. familia  → vivir un lugar conocido, distinto, en familia
     *   6. reveal   → el vale (única tarjeta especial)
     */

    // 1. Introducción del regalo
    intro: {
      lines: [
        "Este año queríamos regalarte algo especial.",
        "Algo que combinara dos cosas que sabemos que te gustan mucho…",
      ],
    },

    // 2. Comer bien + Nacional
    comida: {
      left: "Comer bien",
      right: "Nacional",
      comment:
        "No es una camiseta, no es una botella… y tampoco pensamos cocinar nosotros, por suerte.",
    },

    // 3. Vale y la cancha
    vale: {
      lines: [
        "Siempre le insistís a Vale para que vaya a la cancha.",
        "Y Vale… nunca te dio mucha bola.",
      ],
      comment: "Esta vez la vas a tener más cerca del Parque que nunca.",
    },

    // 4. El "vasco fallido" (guiño breve a Xavi)
    vasco: {
      lines: [
        "Siempre decís que Xavi es un vasco fallido porque no es de Nacional…",
        "Así que este regalo va a empezar el proceso de arreglar eso.",
      ],
      comment:
        "Primera etapa del tratamiento: exposición controlada al Gran Parque Central.",
    },

    // 5. Un lugar conocido, vivido distinto, en familia
    familia: {
      lead: "Capaz que este lugar no te sea del todo nuevo…",
      linePrefix: "Pero esta vez lo vamos a vivir distinto: en ",
      emphasis: "familia",
      comment: "Ya falta muy poco para descubrir el regalo.",
      ctaLabel: "Descubrir el regalo",
    },

    // 6. Revelación final
    reveal: {
      voucherHeader: "Este vale incluye",
      title: "Una merienda para cuatro",
      subtitle: "en el Gran Parque Central",
      signaturePrefix: "Con cariño,",
      footnote: "Fecha a coordinar. Hambre obligatoria.",
      downloadLabel: "Descargar el vale",
      realVoucherLabel: "Ver reserva o vale original",
      restartLabel: "Volver al inicio",
    },
  },
} as const;

export type GiftContent = typeof giftContent;
