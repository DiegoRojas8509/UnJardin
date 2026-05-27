/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: genera archivos HTML/CSS/JS listos para subir
  // a Cloudflare Pages (gratis, uso comercial permitido, ancho de banda ilimitado).
  output: "export",

  // Las imágenes vienen del CDN de Sanity (ya optimizadas), así que
  // no necesitamos el optimizador de Next.
  images: {
    unoptimized: true,
  },

  // URLs con barra final, más amables para hosting estático.
  trailingSlash: true,
};

export default nextConfig;
