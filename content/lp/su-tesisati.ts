import type { ServiceFaq } from "@/content/services";
import { getServiceBySlug } from "@/content/services";
import {
  lpGoogleReviews,
  lpGoogleReviewsMeta,
} from "@/content/lp/google-reviews";

export const lpSuTesisatiPath = "/hizmetler/su-tesisati";

export const lpSuTesisatiWhatsAppMessage =
  "Merhaba, su tesisatı için yazıyorum. Musluk / vana / sifon / boru arızam var.";

export const lpSuTesisatiHero = {
  title: "Su Tesisat Ustası ve Hızlı Tesisat Servisi",
  lead:
    "Musluk, batarya, vana, sifon, klozet ve boru arızalarına aynı gün müdahale. Pendik, Kurtköy, Kartal ve Tuzla'da deneyimli tesisat ustası.",
  image: {
    src: "/media/lp/su-tesisati/hero.jpg",
    alt: "Mutfak lavabosu altında su tesisatı onarımı yapan Gümüş Tesisat ustası",
    width: 1024,
    height: 721,
  },
  badges: [
    { id: "clock", label: "Aynı Gün Servis" },
    { id: "person", label: "Deneyimli Tesisat Ustası" },
    { id: "sparkle", label: "Temiz İşçilik" },
  ] as const,
} as const;

export const lpSuTesisatiServices = [
  {
    id: "musluk",
    title: "Musluk ve Batarya Tamiri",
    description: "Damlayan veya arızalı musluk ve batarya onarımı / değişimi.",
  },
  {
    id: "vana",
    title: "Vana Tamiri ve Değişimi",
    description: "Sızdıran veya çalışmayan vanaların tamiri ve yenilenmesi.",
  },
  {
    id: "sifon",
    title: "Sifon ve Lavabo Tesisatı",
    description: "Sifon değişimi, lavabo bağlantı ve kaçak onarımı.",
  },
  {
    id: "klozet",
    title: "Klozet ve Rezervuar Tamiri",
    description: "Klozet, rezervuar ve bağlantı arızalarında hızlı çözüm.",
  },
  {
    id: "boru",
    title: "Boru ve Bağlantı Onarımı",
    description: "Boru sızıntısı, bağlantı gevşekliği ve hat onarımı.",
  },
  {
    id: "montaj",
    title: "Yeni Tesisat ve Montaj",
    description: "Yeni hat döşeme, tadilat sonrası tesisat ve montaj.",
  },
] as const;

export const lpSuTesisatiEmergency = {
  title: "7/24 Acil Servis",
  lead:
    "Boru patlaması, ani sızıntı ve acil tesisat arızalarında hızlı müdahale.",
  ctaLabel: "Acil Servisi Ara",
} as const;

export const lpSuTesisatiWhyUs = [
  {
    id: "hizli",
    title: "Hızlı Servis",
    description: "Aynı gün içinde adresinize ulaşıyoruz.",
  },
  {
    id: "usta",
    title: "Deneyimli Usta",
    description: "İşinin ehli tesisat ustalarıyla çalışıyoruz.",
  },
  {
    id: "temiz",
    title: "Temiz İşçilik",
    description: "Düzenli, temiz ve özenli uygulama.",
  },
  {
    id: "bilgi",
    title: "Açık Bilgilendirme",
    description: "Yapılacak işi ve fiyatı net anlatıyoruz.",
  },
] as const;

export const lpSuTesisatiProcessSteps = [
  {
    step: 1,
    title: "Bize Ulaşın",
    description: "Telefon veya WhatsApp ile arızayı kısaca anlatın.",
    icon: "phone" as const,
  },
  {
    step: 2,
    title: "Ustamız Gelsin",
    description: "Aynı gün adresinize gelip yerinde inceleriz.",
    icon: "person" as const,
  },
  {
    step: 3,
    title: "Arızayı Giderelim",
    description: "Onarım veya montajı temiz işçilikle tamamlarız.",
    icon: "wrench" as const,
  },
] as const;

/** Work gallery — add photos under public/media/lp/su-tesisati/gallery/ */
export const lpSuTesisatiGallery = [
  {
    id: "gal-01",
    src: "/media/lp/su-tesisati/gallery/01.jpg",
    alt: "Musluk ve batarya montaj çalışması",
  },
  {
    id: "gal-02",
    src: "/media/lp/su-tesisati/gallery/02.jpg",
    alt: "Boru ve bağlantı onarım çalışması",
  },
  {
    id: "gal-03",
    src: "/media/lp/su-tesisati/gallery/03.jpg",
    alt: "Klozet ve rezervuar tesisat çalışması",
  },
] as const;

export const lpSuTesisatiReviews = lpGoogleReviews.slice(0, 2);

export const lpSuTesisatiReviewsMeta = lpGoogleReviewsMeta;

export const lpSuTesisatiAreasNote =
  "Belirtilen bölgelerde aynı gün servis imkanı sunuyoruz.";

export function getLpSuTesisatiFaqs(): ServiceFaq[] {
  return getServiceBySlug("su-tesisati")?.faq ?? [];
}

export const lpSuTesisatiBottomCta = {
  title: "Su Tesisatı Arızanızı Ertelemeyin",
  lead: "Aynı gün servis için bizi arayın veya WhatsApp'tan yazın.",
} as const;
