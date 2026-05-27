/**
 * Script opcional para llenar tu proyecto de Sanity con los arreglos
 * de ejemplo (sin fotos; las subes tú después desde el panel).
 *
 * Cómo usarlo:
 *   1. Ten listo tu .env.local con NEXT_PUBLIC_SANITY_PROJECT_ID
 *   2. Crea un token de escritura en sanity.io/manage (API → Tokens → Editor)
 *      y ponlo en .env.local como SANITY_WRITE_TOKEN
 *   3. Ejecuta:  npm run seed
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";

// Carga simple de .env.local
try {
  const env = readFileSync(".env.local", "utf8");
  for (const line of env.split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m) process.env[m[1]] = m[2].trim();
  }
} catch {
  /* sin archivo .env.local */
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Falta NEXT_PUBLIC_SANITY_PROJECT_ID o SANITY_WRITE_TOKEN en .env.local"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const categories = [
  { _id: "cat-ramos", name: "Ramos", slug: "ramos", order: 1 },
  { _id: "cat-cajas", name: "Cajas", slug: "cajas", order: 2 },
  { _id: "cat-eventos", name: "Eventos", slug: "eventos", order: 3 },
  { _id: "cat-plantas", name: "Plantas", slug: "plantas", order: 4 },
];

const arrangements = [
  { name: "Ramo Primavera", price: 245, cat: "cat-ramos", featured: true, desc: "Ramo cálido en tonos durazno, perfecto para alegrar cualquier día.", flowers: ["lilis", "alstroemeria", "hypericum", "craspedia"] },
  { name: "Campo Silvestre", price: 290, cat: "cat-ramos", featured: true, desc: "Estilo natural y fresco, como recién cortado del jardín.", flowers: ["margaritas", "claveles", "gypsophila", "eucalipto"] },
  { name: "Blanco Sencillo", price: 260, cat: "cat-ramos", featured: true, desc: "Elegancia en blanco para los momentos importantes.", flowers: ["rosas blancas", "lisianthus", "follaje"] },
  { name: "Atardecer Durazno", price: 320, cat: "cat-ramos", featured: false, desc: "Tonos cálidos que recuerdan a una tarde de verano.", flowers: ["lilis durazno", "craspedia", "eucalipto"] },
  { name: "Caja Jardín", price: 480, cat: "cat-cajas", featured: true, desc: "Arreglo en caja con flores de temporada y follaje fino.", flowers: ["rosas", "hortensia", "follaje"] },
  { name: "Mini Detalle", price: 190, cat: "cat-cajas", featured: false, desc: "Pequeño y encantador, ideal para sorprender.", flowers: ["mini rosas", "gypsophila"] },
  { name: "Centro de Mesa Boda", price: 850, cat: "cat-eventos", featured: true, desc: "Centro de mesa elegante para bodas y celebraciones.", flowers: ["rosas", "eucalipto", "velas"] },
  { name: "Suculenta en Maceta", price: 150, cat: "cat-plantas", featured: false, desc: "Una planta que dura, con un toque verde y minimalista.", flowers: ["suculenta", "piedra volcánica"] },
  { name: "Orquídea Phalaenopsis", price: 420, cat: "cat-plantas", featured: false, desc: "Belleza serena y duradera para regalar o decorar.", flowers: ["orquídea blanca"] },
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function run() {
  console.log("Subiendo categorías…");
  for (const c of categories) {
    await client.createOrReplace({
      _id: c._id,
      _type: "category",
      name: c.name,
      slug: { _type: "slug", current: c.slug },
      order: c.order,
    });
  }

  console.log("Subiendo arreglos…");
  let i = 1;
  for (const a of arrangements) {
    const slug = slugify(a.name);
    await client.createOrReplace({
      _id: `arr-${slug}`,
      _type: "arrangement",
      name: a.name,
      slug: { _type: "slug", current: slug },
      price: a.price,
      category: { _type: "reference", _ref: a.cat },
      shortDescription: a.desc,
      flowers: a.flowers,
      isFeatured: a.featured,
      isAvailable: true,
      order: i++,
    });
  }

  console.log("✅ Listo. Abre el panel (npm run studio) para ver y editar.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
