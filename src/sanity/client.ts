import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

// ¿Ya conectaste Sanity? Si no hay projectId, el sitio usa datos de ejemplo.
export const sanityConfigured = Boolean(projectId);

export const sanityClient = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // useCdn=true: lecturas rápidas y cacheadas desde el CDN público de Sanity.
      useCdn: true,
      perspective: "published",
    })
  : null;
