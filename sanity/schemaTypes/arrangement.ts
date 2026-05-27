import { defineField, defineType } from "sanity";

export const arrangement = defineType({
  name: "arrangement",
  title: "Arreglo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required().error("El nombre es obligatorio."),
    }),
    defineField({
      name: "slug",
      title: "Enlace (se genera solo)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      description: "Sube la foto del arreglo. Se optimiza automáticamente.",
    }),
    defineField({
      name: "price",
      title: "Precio (MXN)",
      type: "number",
      description: "Solo el número, ej. 245",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "priceLabel",
      title: "Texto de precio (opcional)",
      type: "string",
      description: 'Para mostrar algo como "desde $245". Si lo dejas vacío, se usa el precio normal.',
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "shortDescription",
      title: "Descripción corta",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "flowers",
      title: "Flores incluidas",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: 'Escribe cada flor y presiona Enter. Ej: lilis, alstroemeria, hypericum.',
    }),
    defineField({
      name: "isFeatured",
      title: "¿Destacado en portada?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isAvailable",
      title: "¿Disponible?",
      type: "boolean",
      description: "Apágalo para ocultarlo del sitio sin borrarlo.",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Orden (opcional)",
      type: "number",
      description: "Número más bajo aparece primero. Déjalo vacío si no te importa el orden.",
    }),
  ],
  orderings: [
    {
      title: "Orden manual",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Más recientes",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category.name", media: "image" },
  },
});
