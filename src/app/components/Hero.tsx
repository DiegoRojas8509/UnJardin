import { site } from "@/lib/config";
import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="top" className="paper relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Texto */}
          <div className="text-center md:text-left">
            <p
              className="eyebrow text-gold/60 animate-fade-in"
              style={{ animationDelay: "0.05s" }}
            >
              Flower Shop · {site.city}
            </p>

            <h1
              className="mt-6 font-display text-5xl leading-[1.05] animate-fade-up sm:text-6xl"
              style={{ animationDelay: "0.12s" }}
            >
              <span className="text-cream">Flores que</span>
              <span
                className="block italic"
                style={{
                  background: "linear-gradient(90deg, #ffe9a8, #f6c34b 45%, #d99323 80%, #b5651d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                lo dicen todo
              </span>
            </h1>

            <p
              className="mt-7 text-lg leading-relaxed text-cream/60 animate-fade-up"
              style={{ animationDelay: "0.24s" }}
            >
              {site.intro}
            </p>

            <div
              className="mt-10 flex flex-col items-center gap-3 animate-fade-up md:flex-row"
              style={{ animationDelay: "0.34s" }}
            >
              <a
                href="#catalogo"
                className="btn-gold w-full rounded-full px-8 py-4 font-medium transition md:w-auto"
              >
                Ver el catálogo
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-gold/30 px-8 py-4 font-medium text-cream/80 transition hover:border-gold hover:text-cream md:w-auto"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Anillo decorativo exterior */}
              <div className="absolute -inset-3 rounded-full border border-gold/25" />
              {/* Anillo interior */}
              <div className="absolute -inset-1 rounded-full border border-gold/15" />
              {/* Brillo de fondo */}
              <div className="absolute inset-0 rounded-full bg-gold/5 blur-xl" />
              {/* Imagen circular */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full ring-2 ring-gold/40 sm:h-72 sm:w-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/flores-hero.png"
                  alt="Arreglos florales Dulce Amor"
                  className="h-full w-full object-cover"
                />
                {/* Overlay sutil para integrar con el fondo oscuro */}
                <div className="absolute inset-0 rounded-full ring-inset ring-1 ring-gold/20" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Destellos de ambiente */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-10 top-10 h-52 w-52 rounded-full bg-gold/5 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-amber/8 blur-3xl" />
    </section>
  );
}
