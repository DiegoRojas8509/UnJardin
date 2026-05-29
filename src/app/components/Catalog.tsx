"use client";

import { useEffect, useMemo, useState } from "react";
import type { Arrangement, Category } from "@/lib/types";
import { getArrangements, getCategories } from "@/lib/data";
import ArrangementCard from "./ArrangementCard";
import ArrangementModal from "./ArrangementModal";
import Reveal from "./Reveal";

export default function Catalog() {
  const [arrangements, setArrangements] = useState<Arrangement[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("todos");
  const [selected, setSelected] = useState<Arrangement | null>(null);

  useEffect(() => {
    let active = true;
    Promise.all([getArrangements(), getCategories()]).then(([arr, cats]) => {
      if (!active) return;
      setArrangements(arr);
      setCategories(cats);
      setLoading(false);
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("arreglo");
      if (slug) {
        const found = arr.find((a) => a.slug === slug);
        if (found) setSelected(found);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const featured = useMemo(
    () => arrangements.filter((a) => a.isFeatured).slice(0, 4),
    [arrangements]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return arrangements.filter((a) => {
      const matchesCat =
        activeCat === "todos" || a.category?.slug === activeCat;
      if (!matchesCat) return false;
      if (!q) return true;
      const haystack = [
        a.name,
        a.category?.name ?? "",
        a.shortDescription ?? "",
        ...(a.flowers ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [arrangements, query, activeCat]);

  const isBrowsing = query.trim() !== "" || activeCat !== "todos";

  function openArrangement(a: Arrangement) {
    setSelected(a);
    const url = new URL(window.location.href);
    url.searchParams.set("arreglo", a.slug);
    window.history.replaceState({}, "", url);
  }

  function closeModal() {
    setSelected(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("arreglo");
    window.history.replaceState({}, "", url);
  }

  return (
    <>
      {/* Destacados */}
      {!loading && featured.length > 0 && (
        <section id="destacados" className="bg-carbon-soft px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow text-center text-gold/60">Selección especial</p>
              <h2 className="mt-3 text-center font-display text-4xl text-cream sm:text-5xl">
                Arreglos destacados
              </h2>
            </Reveal>
            <div className="mt-12 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
              <div className="grid grid-rows-1 grid-flow-col gap-5 [grid-auto-columns:calc(50vw-20px)] md:[grid-auto-columns:260px]">
                {featured.map((a) => (
                  <ArrangementCard key={a._id} arrangement={a} onOpen={openArrangement} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Catálogo completo + búsqueda + filtros */}
      <section id="catalogo" className="bg-carbon px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-center text-gold/60">Nuestro catálogo</p>
            <h2 className="mt-3 text-center font-display text-4xl text-cream sm:text-5xl">
              Explora todos los arreglos
            </h2>
          </Reveal>

          {/* Buscador */}
          <div className="mx-auto mt-10 max-w-md">
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold/40"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                id="buscar-arreglos"
                name="buscar-arreglos"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por flor, nombre o categoría…"
                aria-label="Buscar arreglos"
                className="w-full rounded-full border border-gold/25 bg-carbon-soft py-3.5 pl-11 pr-4 text-cream placeholder:text-cream/25 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>
          </div>

          {/* Filtros por categoría */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <FilterPill
              label="Todos"
              active={activeCat === "todos"}
              onClick={() => setActiveCat("todos")}
            />
            {categories.map((c) => (
              <FilterPill
                key={c._id}
                label={c.name}
                active={activeCat === c.slug}
                onClick={() => setActiveCat(c.slug)}
              />
            ))}
          </div>

          {/* Cuadrícula con scroll horizontal */}
          <div className="mt-12">
            {loading ? (
              <SkeletonGrid />
            ) : filtered.length === 0 ? (
              <p className="py-16 text-center text-cream/30">
                No encontramos arreglos con esa búsqueda. Intenta con otra palabra.
              </p>
            ) : (
              <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
                <div className="grid grid-rows-2 grid-flow-col gap-5 [grid-auto-columns:calc(50vw-20px)] md:grid-rows-1 md:[grid-auto-columns:185px]">
                  {filtered.map((a) => (
                    <ArrangementCard key={a._id} arrangement={a} onOpen={openArrangement} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ArrangementModal arrangement={selected} onClose={closeModal} />
    </>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm transition ${
        active
          ? "bg-gold text-carbon font-semibold"
          : "border border-gold/25 text-cream/60 hover:border-gold hover:text-cream"
      }`}
    >
      {label}
    </button>
  );
}

function SkeletonGrid() {
  return (
    <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
      <div className="grid grid-rows-2 grid-flow-col gap-5 [grid-auto-columns:calc(50vw-20px)] md:grid-rows-1 md:[grid-auto-columns:185px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-[4/5] w-full rounded-xl2 bg-carbon-soft" />
            <div className="mt-3 h-4 w-2/3 rounded bg-carbon-soft" />
            <div className="mt-2 h-3 w-1/3 rounded bg-carbon-soft" />
          </div>
        ))}
      </div>
    </div>
  );
}
