import { business } from "../data/business";

export function createWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/91${business.contact.whatsapp}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}