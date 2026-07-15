export const siteConfig = {
  name: "Pendik Gümüş Tesisat",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pendikgumustesisat.com",
  description:
    "Pendik, Kurtköy, Kartal ve Tuzla'da kırmadan tıkanıklık açma, su kaçağı tespiti ve 7/24 acil tesisat hizmeti.",
  locale: "tr_TR",
  areas: ["Pendik", "Kurtköy", "Kartal", "Tuzla"] as const,
  hours: "7/24",
  phoneDisplay: "0551 162 49 55",
  phoneTel: "tel:+905511624955",
  defaultWhatsAppMessage:
    "Merhaba, tesisat hizmeti hakkında bilgi almak istiyorum.",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61591200519192",
    instagram: "https://www.instagram.com/gumustesisat_34/",
  },
  logo: {
    src: "/brand/logo.png",
    alt: "Pendik Gümüş Tesisat",
    width: 942,
    height: 319,
  },
  hero: {
    src: "/brand/hero.jpg",
    alt: "Termal kamera ile banyoda su kaçağı tespiti yapan Gümüş Tesisat teknisyeni",
    width: 1024,
    height: 682,
  },
  map: {
    /** Keyless Google Maps embed — swap for a Google Business Profile embed URL when ready */
    embedUrl:
      "https://maps.google.com/maps?q=Pendik,+İstanbul,+Türkiye&hl=tr&z=11&output=embed",
    title: "Pendik, Kurtköy, Kartal ve Tuzla hizmet bölgesi haritası",
    caption: "Hizmet bölgemiz: Pendik, Kurtköy, Kartal ve Tuzla.",
  },
} as const;
