import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { projectId, dataset, sanityConfigured } from "./client";

const builder = sanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

// Genera una URL de imagen optimizada (tamaño + formato moderno) desde el CDN.
export function urlForImage(
  source: SanityImageSource,
  width = 800,
  height?: number
): string | null {
  if (!builder) return null;
  let img = builder.image(source).width(width).auto("format").fit("crop");
  if (height) img = img.height(height);
  return img.url();
}
