// ───────────────────────────────────────────────────────────
//  DATOS DE LA FLORERÍA  —  edita aquí, todo el sitio se actualiza
// ───────────────────────────────────────────────────────────

export const site = {
  name: "Dulce Amor",
  tagline: "15 años creando arreglos para bodas, presentaciones y toda ocasión especial.",
  intro:
    "Arreglos florales hechos con pasión para bodas, cumpleaños y toda ocasión especial. Mira nuestro catálogo y pide tu cotización por WhatsApp.",

  // Número de WhatsApp en formato internacional, SIN signos ni espacios.
  // México: 52 + lada + número.  Ej: 52 445 113 9018 → "524451139018"
  whatsapp: "524451139018",
  phoneDisplay: "445 113 9018",

  instagram: "https://www.instagram.com/floreria.dulce.am7/",
  instagramHandle: "@floreria.dulce.am7",

  tiktok: "https://www.tiktok.com/@floreria.dulce.am7",
  tiktokHandle: "@floreria.dulce.am7",

  address: "Av. Francisco I. Madero 31, Zona Centro, 38980 Uriangato, Gto.",
  mapsUrl: "https://maps.google.com/?q=Av.+Francisco+I.+Madero+31,+Zona+Centro,+Uriangato,+Gto.",
  city: "Uriangato, Gto.",
  hours: "Lunes a sábado · 9:00 a.m. – cierre",

  about:
    "Florería Dulce Amor nació del amor por las flores y la pasión por crear momentos que no se olvidan. Con más de 15 años de experiencia en Uriangato, diseñamos arreglos para bodas, XV años, cumpleaños y toda ocasión especial. Cada flor es elegida con cuidado para que tu regalo sea único e inolvidable.",
};

// Mensaje que se manda por WhatsApp al cotizar.
// {nombre} y {precio} se reemplazan con los datos del arreglo.
export const whatsappTemplate =
  'Hola Dulce Amor 🌹 Me interesa cotizar el arreglo "{nombre}" ({precio}). ¿Me podrían dar más información?';

export const whatsappGeneral =
  "Hola Dulce Amor 🌹 Me gustaría más información sobre sus arreglos florales.";
