"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/config";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-gold/20 bg-carbon/92 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="leading-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt={site.name} className="h-20 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/60 transition hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-full px-5 py-2 text-sm transition"
          >
            WhatsApp
          </a>
        </nav>

        <a
          href="#catalogo"
          className="btn-gold rounded-full px-4 py-2 text-sm md:hidden"
        >
          Ver catálogo
        </a>
      </div>
    </header>
  );
}
