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
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 bg-carbon-soft">
        {arrangement.imageUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={arrangement.imageUrl}
            alt={arrangement.name}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <Placeholder name={arrangement.name} />
        )}

        {/* Overlay oscuro permanente en la parte baja para legibilidad */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-carbon/70 to-transparent" />

        {arrangement.isFeatured && (
          <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-carbon/80 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-gold backdrop-blur">
            Destacado
          </span>
        )}

        <span className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span className="rounded-full bg-gold px-5 py-2 text-xs font-semibold text-carbon shadow-sm">
            Ver detalle
          </span>
        </span>
      </div>

      <div className="mt-3.5">
        <h3 className="font-display text-lg leading-tight text-cream">
          {arrangement.name}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-medium text-gold">
            {formatPrice(arrangement)}
          </span>
          {arrangement.category && (
            <span className="text-gold/30">·</span>
          )}
          {arrangement.category && (
            <p className="truncate text-xs uppercase tracking-[0.18em] text-gold/50">
              {arrangement.category.name}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}
