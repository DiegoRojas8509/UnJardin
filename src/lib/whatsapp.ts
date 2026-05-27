import { site, whatsappTemplate, whatsappGeneral } from "./config";
import type { Arrangement } from "./types";

export function formatPrice(a: Pick<Arrangement, "price" | "priceLabel">): string {
  if (a.priceLabel) return a.priceLabel;
  if (typeof a.price === "number") {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
    }).format(a.price);
  }
  return "Precio a consultar";
}

export function whatsappLink(arrangement?: Arrangement): string {
  let text: string;
  if (arrangement) {
    text = whatsappTemplate
      .replace("{nombre}", arrangement.name)
      .replace("{precio}", formatPrice(arrangement));
  } else {
    text = whatsappGeneral;
  }
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
