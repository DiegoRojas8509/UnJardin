# 🌿 Un Jardín — Sitio web (galería + panel de administración)

Catálogo floral con galería pública, búsqueda, filtros, vista de detalle y
cotización por WhatsApp. El contenido se administra desde **Sanity** (un panel
fácil, sin tocar código) y el sitio se publica gratis en **Cloudflare Pages**.

> **¿Solo quieres verlo funcionando ya mismo?** Ve directo al **Paso 1**.
> El sitio arranca con arreglos de ejemplo aunque todavía no conectes Sanity.

---

## Requisitos previos (una sola vez)

Necesitas **Node.js 18 o superior** instalado en tu computadora.
Descárgalo gratis en https://nodejs.org (elige la versión "LTS").

Para confirmar que quedó instalado, abre una terminal y escribe:

```bash
node -v
```

Si te muestra un número (ej. `v20.11.0`), ya estás listo.

---

## Paso 1 — Ver el sitio en tu computadora

Dentro de la carpeta del proyecto, en la terminal:

```bash
npm install
npm run dev
```

Abre tu navegador en **http://localhost:3000** y verás el sitio completo con
arreglos de ejemplo. 🎉

(El comando `npm install` solo se hace la primera vez; puede tardar un par de
minutos.)

---

## Paso 2 — Conectar Sanity (tu base de datos + panel)

Esto es lo que te permite subir, editar y borrar arreglos tú misma/o.

1. Crea una cuenta gratis en https://www.sanity.io (puedes entrar con Google).
2. En la terminal, dentro del proyecto, ejecuta:

   ```bash
   npx sanity init
   ```

   - Cuando pregunte, elige **"Create new project"** y ponle nombre `Un Jardin`.
   - Dataset: escribe **production**.
   - Si pregunta si quieres usar la configuración existente / TypeScript,
     acepta las opciones por defecto.

3. Al terminar te dará un **Project ID** (algo como `ab12cd34`). Cópialo.
4. Copia el archivo `.env.local.example` y renómbralo a **`.env.local`**.
   Ábrelo y pega tu Project ID:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=ab12cd34
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

5. Guarda. ¡Listo! El sitio ahora leerá de tu Sanity.

### (Opcional) Cargar los arreglos de ejemplo en tu Sanity

Si quieres empezar con los 9 arreglos de ejemplo ya cargados (para no empezar
de cero):

1. Ve a https://www.sanity.io/manage, entra a tu proyecto → **API → Tokens →
   Add API token**, dale rol **Editor**, copia el token.
2. Pégalo en `.env.local`:

   ```
   SANITY_WRITE_TOKEN=tu_token_aqui
   ```

3. Ejecuta:

   ```bash
   npm run seed
   ```

Después puedes **borrar** ese token de `.env.local` (ya no se necesita).

---

## Paso 3 — Abrir el panel de administración

```bash
npm run studio
```

Se abre en **http://localhost:3333**. Ahí puedes:

- **Agregar** un arreglo → botón ✏️ / "+", llena nombre, precio, categoría,
  descripción, flores y **sube la foto**.
- **Editar** → clic en cualquier arreglo, cambia lo que quieras, **Publish**.
- **Borrar** → menú de los tres puntitos → Delete.
- **Ocultar sin borrar** → apaga el interruptor "¿Disponible?".
- **Destacar en portada** → enciende "¿Destacado?".

Los cambios aparecen en el sitio en segundos al recargar la página. ✨

### Publicar el panel en internet (para administrar desde cualquier lado)

```bash
npm run studio:deploy
```

Quedará en una dirección como **https://un-jardin.sanity.studio**.
Entras con tu cuenta de Sanity desde el celular o cualquier computadora.

---

## Paso 4 — Publicar el sitio en internet (gratis)

Usamos **Cloudflare Pages** (gratis, permite negocios, sin límite de tráfico).

1. Sube esta carpeta a un repositorio de **GitHub** (gratis).
2. Crea cuenta en https://pages.cloudflare.com → **Create application →
   Connect to Git** y elige tu repositorio.
3. En la configuración de build pon:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. En **Environment variables** agrega las mismas dos del `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
5. **Deploy**. Tu sitio quedará en una dirección gratis tipo
   **https://un-jardin.pages.dev** 🌼

> Más adelante puedes conectar un dominio propio (ej. unjardin.mx) desde el
> mismo panel de Cloudflare.

---

## Personalizar la marca

Casi todo lo editable está en **`src/lib/config.ts`**:

- Nombre, frase, texto de "Nosotros"
- **Número de WhatsApp** (formato `524771407875`)
- Dirección, horario, teléfono, Instagram, mapa

Colores y tipografías: `tailwind.config.ts` (paleta) y `src/app/layout.tsx`
(fuentes). La paleta actual es verde olivo + crema + kraft, inspirada en tu
identidad. Cuando tengas el logo real, se reemplaza el texto del encabezado en
`src/app/components/SiteHeader.tsx`.

---

## Estructura del proyecto

```
un-jardin/
├─ src/app/                 → el sitio público (páginas y componentes)
│  ├─ page.tsx              → arma la página principal
│  └─ components/           → hero, galería, tarjetas, modal, contacto…
├─ src/lib/
│  ├─ config.ts             → ⭐ datos de la florería (edita aquí)
│  ├─ data.ts               → lee de Sanity (o usa ejemplos)
│  └─ sampleData.ts         → arreglos de ejemplo
├─ sanity/schemaTypes/      → define los campos del panel
├─ sanity.config.ts         → configuración del panel de administración
├─ scripts/seed.ts          → carga de datos de ejemplo (opcional)
└─ .env.local               → tus claves de Sanity (no se sube a internet)
```

---

## Comandos rápidos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Ver el sitio en tu compu (localhost:3000) |
| `npm run studio` | Abrir el panel de administración (localhost:3333) |
| `npm run build` | Generar el sitio para publicar (carpeta `out`) |
| `npm run studio:deploy` | Publicar el panel en internet |
| `npm run seed` | Cargar arreglos de ejemplo en Sanity |

---

## Costos

Todo puede funcionar en **$0/mes**: Sanity (plan gratis, no se pausa) +
Cloudflare Pages (gratis, uso comercial permitido, tráfico ilimitado).
Único costo opcional a futuro: un dominio propio (~$10–15 USD al año).

¿Dudas? Cualquier ajuste de diseño, secciones o textos se puede cambiar. 🌿
