const WHATSAPP_FALLBACK = "905511654955";

export function getWhatsAppNumber(): string {
  const raw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? WHATSAPP_FALLBACK;
  const digits = raw.replace(/\D/g, "");
  return digits.length > 0 ? digits : WHATSAPP_FALLBACK;
}

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${getWhatsAppNumber()}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function whatsappTelephone(): string {
  return `+${getWhatsAppNumber()}`;
}
