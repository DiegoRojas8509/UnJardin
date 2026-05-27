import { site } from "@/lib/config";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="nosotros" className="bg-olive px-5 py-24 text-cream sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow text-sage-light">Nosotros</p>
          <h2 className="mt-4 font-display text-4xl leading-snug text-cream-light sm:text-5xl">
            {site.tagline}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/75">
            {site.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
