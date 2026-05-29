import { site } from "@/lib/config";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="nosotros" className="bg-carbon-soft px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow text-gold/60">Nosotros</p>
          <h2
            className="mt-4 font-display text-4xl leading-snug sm:text-5xl"
            style={{
              background: "linear-gradient(90deg, #ffe9a8, #f6c34b 45%, #d99323 80%, #b5651d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {site.tagline}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/65">
            {site.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
