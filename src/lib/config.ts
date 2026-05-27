// ───────────────────────────────────────────────────────────
//  DATOS DE LA FLORERÍA  —  edita aquí, todo el sitio se actualiza
// ───────────────────────────────────────────────────────────

export const site = {
  name: "Un Jardín",
  // Frase que aparece bajo el logo
  tagline: "Un espacio floral para quienes disfrutan lo simple y lo bonito.",
  intro:
    "Cada arreglo se hace a mano con flores de temporada. Mira el catálogo y pide tu cotización por WhatsApp.",

  // Número de WhatsApp en formato internacional, SIN signos ni espacios.
  // México: 52 + lada + número.  Ej: 52 477 140 7875 → "524771407875"
  whatsapp: "524451586866",
  phoneDisplay: "445 158 6866",

  instagram: "https://www.instagram.com/unjardin__/",
  instagramHandle: "@unjardin__",

  // Dirección y horario (edítalos libremente)
  address: "Av. Guanajuato 1403, Jardines del Moral, 37160 León de los Aldama, Gto.",
  mapsUrl: "https://maps.google.com/?q=Av.+Guanajuato+1403,+Jardines+del+Moral,+León,+Gto.",
  city: "León, Gto.",
  hours: "Lunes a sábado · cierra 4:00 p.m.",

  // Texto de la sección "Nosotros"
  about:
    "Un Jardín nació del gusto por lo simple y lo bonito. Trabajamos flores frescas de temporada para crear ramos y arreglos con un estilo natural y cálido, pensados para regalar, decorar y celebrar los momentos que importan.",
};

// Mensaje que se manda por WhatsApp al cotizar.
// {nombre} y {precio} se reemplazan con los datos del arreglo.
export const whatsappTemplate =
  'Hola Un Jardín 🌿 Me interesa cotizar el arreglo "{nombre}" ({precio}). ¿Me podrías dar más información?';

export const whatsappGeneral =
  "Hola Un Jardín 🌿 Me gustaría más información sobre sus arreglos florales.";
