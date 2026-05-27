"use client";

import type { Arrangement } from "@/lib/types";
import { formatPrice } from "@/lib/whatsapp";
import Placeholder from "./Placeholder";

export default function ArrangementCard({
  arrangement,
  onOpen,
}: {
  arrangement: Arrangement;
  onOpen: (a: Arrangement) => void;
}) {
  return (
    <button
      onClick={() => onOpen(arrangement)}
      className="group block w-full text-left"
      aria-label={`Ver ${arrangement.name}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 bg-cream-deep">
        {arrangement.imageUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={arrangement.imageUrl}
            alt={arrangement.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <Placeholder name={arrangement.name} />
        )}

        {arrangement.isFeatured && (
          <span className="absolute left-3 top-3 rounded-full bg-cream-light/90 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-olive backdrop-blur">
            Destacado
          </span>
        )}

        <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-olive/0 pb-5 opacity-0 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-olive/55 group-hover:to-transparent group-hover:opacity-100">
          <span className="rounded-full bg-cream-light px-5 py-2 text-xs font-medium text-olive shadow-sm">
            Ver detalle
          </span>
        </span>
      </div>

      <div className="mt-3.5 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-lg leading-tight text-olive">
          {arrangement.name}
        </h3>
        <span className="shrink-0 text-sm font-medium text-sage-dark">
          {formatPrice(arrangement)}
        </span>
      </div>
      {arrangement.category && (
        <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-sage">
          {arrangement.category.name}
        </p>
      )}
    </button>
  );
}
