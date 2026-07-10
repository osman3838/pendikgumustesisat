export const siteConfig = {
  name: "Pendik Gümüş Tesisat",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pendikgumustesisat.com",
  description:
    "Pendik, Kartal ve Tuzla'da kırmadan tıkanıklık açma, su kaçağı tespiti ve 7/24 acil tesisat hizmeti.",
  locale: "tr_TR",
  areas: ["Pendik", "Kartal", "Tuzla"] as const,
  hours: "7/24",
  defaultWhatsAppMessage:
    "Merhaba, tesisat hizmeti hakkında bilgi almak istiyorum.",
} as const;
