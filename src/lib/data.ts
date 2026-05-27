import { sanityClient, sanityConfigured } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { sampleArrangements, sampleCategories } from "@/lib/sampleData";
import type { Arrangement, Category } from "@/lib/types";

// Consulta GROQ: trae los arreglos disponibles con su categoría e imagen.
const arrangementsQuery = `
*[_type == "arrangement" && isAvailable != false] | order(order asc, _createdAt desc){
  _id,
  name,
  "slug": slug.current,
  price,
  priceLabel,
  "category": category->{name, "slug": slug.current},
  shortDescription,
  flowers,
  isFeatured,
  isAvailable,
  order,
  image
}`;

const categoriesQuery = `
*[_type == "category"] | order(order asc, name asc){
  _id, name, "slug": slug.current, description, order
}`;

type RawArrangement = Omit<Arrangement, "imageUrl"> & { image?: unknown };

export async function getArrangements(): Promise<Arrangement[]> {
  if (!sanityConfigured || !sanityClient) {
    return sampleArrangements;
  }
  try {
    const raw = await sanityClient.fetch<RawArrangement[]>(arrangementsQuery);
    return raw.map((a) => ({
      ...a,
      imageUrl: a.image ? urlForImage(a.image as never, 1000) : null,
    }));
  } catch (err) {
    console.error("No se pudo leer de Sanity, usando datos de ejemplo:", err);
    return sampleArrangements;
  }
}

export async function getCategories(): Promise<Category[]> {
  if (!sanityConfigured || !sanityClient) {
    return sampleCategories;
  }
  try {
    return await sanityClient.fetch<Category[]>(categoriesQuery);
  } catch (err) {
    console.error("No se pudo leer categorías de Sanity:", err);
    return sampleCategories;
  }
}
