import { site } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-carbon-soft border-t border-gold/15 px-5 py-12 text-cream/50 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt={site.name} className="h-20 w-auto opacity-80" />
          <p className="eyebrow mt-1 text-[0.58rem] text-gold/40">{site.city}</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">
            Instagram
          </a>
          <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">
            TikTok
          </a>
          <a href={`tel:+${site.whatsapp}`} className="transition hover:text-gold">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-cream/25 sm:text-left">
        © {year} Florería {site.name}. Hecho con amor 🌹
      </p>
    </footer>
  );
}
