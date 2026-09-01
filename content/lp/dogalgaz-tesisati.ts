import type { ServiceFaq } from "@/content/services";
import { getServiceBySlug } from "@/content/services";

export const lpDogalgazPath = "/hizmetler/dogalgaz-tesisati";

export const lpDogalgazWhatsAppMessage =
  "Merhaba, doğalgaz tesisatı için yazıyorum. Yeni hat / tadilat / kombi veya ocak bağlantısı hakkında keşif istiyorum.";

export const lpDogalgazHero = {
  title: "Pendik Doğalgaz Tesisatı",
  lead:
    "Yeni hat, tesisat tadilatı, kombi ve ocak bağlantısı için keşif talebinizi iletin.",
  image: {
    src: "/media/lp/dogalgaz-tesisati/hero.jpg",
    alt: "Kombi ve doğalgaz hattı üzerinde çalışan Gümüş Tesisat teknisyeni",
    width: 1536,
    height: 1024,
  },
  badges: [
    { id: "pin", label: "Yerinde Keşif" },
    { id: "shield", label: "Güvenlik Odaklı" },
    { id: "clock", label: "Açık Fiyatlandırma" },
  ] as const,
} as const;

export const lpDogalgazServices = [
  {
    id: "hat",
    title: "Doğalgaz Hattı Çekimi",
    description: "Yeni doğalgaz hattı planlama ve güvenli hat çekimi.",
  },
  {
    id: "tadilat",
    title: "Tesisat Tadilatı",
    description: "Mevcut doğalgaz tesisatında tadilat ve güzergâh düzenlemesi.",
  },
  {
    id: "mutfak",
    title: "Mutfak Doğalgaz Hattı",
    description: "Ocak ve mutfak doğalgaz hattı bağlantı / taşıma işleri.",
  },
  {
    id: "kombi",
    title: "Kombi Bağlantı Hattı",
    description: "Kombi için hat hazırlığı ve bağlantı düzenlemesi.",
  },
] as const;

export const lpDogalgazFeature = {
  title: "Doğalgaz Hattı Çekimi ve Tadilatı",
  image: {
    src: "/media/lp/dogalgaz-tesisati/solution.jpg",
    alt: "Doğalgaz borusu ve basınç kontrolü yapan tesisat ustası",
    width: 1536,
    height: 1024,
  },
  bullets: [
    "Hat güzergâhı yerinde incelenir.",
    "Bağlantılar ve tesisat kontrol edilir.",
    "Proje ve onay süreci hakkında bilgi verilir.",
  ] as const,
} as const;

export const lpDogalgazProcessSteps = [
  {
    step: 1,
    title: "Bizi Arayın",
    description: "WhatsApp veya telefonla ihtiyacınızı kısaca anlatın.",
    icon: "phone" as const,
  },
  {
    step: 2,
    title: "Yerinde Keşif",
    description: "Adreste hat, cihaz yeri ve güvenlik koşullarını inceleriz.",
    icon: "target" as const,
  },
  {
    step: 3,
    title: "Uygulama ve Kontrol",
    description: "Onaylanan kapsamda uygulama yapıp son kontrolü paylaşırız.",
    icon: "wrench" as const,
  },
] as const;

/** Gallery — add photos under public/media/lp/dogalgaz-tesisati/gallery/ */
export const lpDogalgazGallery = [
  {
    id: "gal-01",
    src: "/media/lp/dogalgaz-tesisati/gallery/01.jpg",
    alt: "Doğalgaz boru hattı montaj detayı",
  },
  {
    id: "gal-02",
    src: "/media/lp/dogalgaz-tesisati/gallery/02.jpg",
    alt: "Doğalgaz basınç ve bağlantı kontrolü",
  },
  {
    id: "gal-03",
    src: "/media/lp/dogalgaz-tesisati/gallery/03.jpg",
    alt: "Mutfak ocak doğalgaz bağlantısı",
  },
] as const;

export const lpDogalgazWhyUs = [
  {
    id: "kesif",
    title: "Yerinde Keşif",
    description: "İşi yerinde görüp net plan çıkarıyoruz.",
  },
  {
    id: "guvenlik",
    title: "Güvenlik Odaklı",
    description: "Doğalgazda güvenlik her zaman öncelikli.",
  },
  {
    id: "planli",
    title: "Planlı Uygulama",
    description: "Keşif sonrası adımları netleştirip uyguluyoruz.",
  },
  {
    id: "kapsam",
    title: "Net İş Kapsamı",
    description: "Yapılacak işi ve sınırları açık anlatıyoruz.",
  },
  {
    id: "bolge",
    title: "Bölgesel Hizmet",
    description: "Pendik, Kurtköy, Kartal ve Tuzla.",
  },
  {
    id: "kontrol",
    title: "İşlem Sonrası Kontrol",
    description: "Bağlantı ve çalışma kontrolünü birlikte doğrularız.",
  },
] as const;

export const lpDogalgazAreasNote =
  "Belirtilen bölgelerde keşif ve uygulama hizmeti sunuyoruz.";

export function getLpDogalgazFaqs(): ServiceFaq[] {
  return getServiceBySlug("dogalgaz-tesisati")?.faq ?? [];
}

export const lpDogalgazBottomCta = {
  title: "Doğalgaz Tesisatı İçin Bizi Arayın",
  lead: "Keşif için bizi arayın veya WhatsApp'tan yazın.",
} as const;
