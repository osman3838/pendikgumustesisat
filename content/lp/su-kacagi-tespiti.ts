import type { ServiceFaq } from "@/content/services";
import { getServiceBySlug } from "@/content/services";

export const lpSuKacagiPath = "/hizmetler/su-kacagi-tespiti";

/** Matches existing service page metadata (title + metaDescription). */
export const lpSuKacagiMeta = {
  title: "Su Kaçağı Tespiti",
  description:
    "Pendik su kaçağı tespiti: kameralı ve akustik yöntemlerle duvar kırmadan noktasal tespit. Kurtköy, Kartal ve Tuzla'da aynı gün destek.",
} as const;

export const lpSuKacagiWhatsAppMessage =
  "Merhaba, su kaçağı tespiti için yazıyorum. Fatura artışı / nem / sızıntı şüphem var.";

export const lpSuKacagiHero = {
  title: "Kırmadan Su Kaçağı Tespiti",
  lead: "Fatura artışı, duvar nemi ve alt kata sızıntı sorunlarına aynı gün müdahale.",
  image: {
    src: "/media/lp/su-kacagi-tespiti/hero.jpg",
    alt: "Termal kamera ile banyoda kırmadan su kaçağı tespiti yapan Gümüş Tesisat teknisyeni",
    width: 1024,
    height: 682,
  },
  badges: [
    { id: "shield", label: "Kırmadan Tespit" },
    { id: "clock", label: "Aynı Gün Servis" },
    { id: "camera", label: "Termal Kamera" },
  ] as const,
} as const;

export const lpSuKacagiSymptoms = [
  {
    id: "fatura",
    title: "Yüksek Su Faturası",
    description: "Sebebi bilinmeyen ani fatura yükselişi.",
  },
  {
    id: "nem",
    title: "Duvarlarda Nem ve Kabarma",
    description: "Boya kabarması, nem lekesi veya küf belirtileri.",
  },
  {
    id: "sizinti",
    title: "Alt Kata Su Sızması",
    description: "Alt dairede ıslaklık veya damlama şikâyeti.",
  },
  {
    id: "ses",
    title: "Zeminde Islaklık veya Su Sesi",
    description: "Zemin ıslaklığı veya boru içinden su sesi.",
  },
] as const;

export const lpSuKacagiSolution = {
  title: "Termal Kamera ve Akustik Cihazlarla Noktasal Tespit",
  image: {
    src: "/media/lp/su-kacagi-tespiti/solution.png",
    alt: "Termal kamera ve akustik dinleme cihazı ile noktasal su kaçağı tespiti ekipmanı",
    width: 1024,
    height: 768,
  },
  bullets: [
    "Kaçağın yerini gereksiz kırma yapmadan belirleriz.",
    "Termal kamera ve akustik dinleme kullanırız.",
    "Onarım yapılacak noktayı netleştiririz.",
  ] as const,
} as const;

export const lpSuKacagiLeakTypes = [
  {
    id: "temiz-su",
    title: "Temiz Su Hattı",
    description: "Temiz su tesisatındaki gizli kaçakları tespit ediyoruz.",
  },
  {
    id: "banyo",
    title: "Banyo ve Tuvalet",
    description: "Tuvalet, duş ve batarya hatlarındaki kaçakları belirliyoruz.",
  },
  {
    id: "mutfak",
    title: "Mutfak ve Lavabo",
    description: "Lavabo ve mutfak hatlarındaki su kaçaklarını buluyoruz.",
  },
  {
    id: "zemin",
    title: "Zemin ve Duvar İçi",
    description: "Zemin ve duvar içindeki tesisat kaçaklarını tespit ediyoruz.",
  },
] as const;

export const lpSuKacagiProcessSteps = [
  {
    step: 1,
    title: "Bizi Arayın",
    description:
      "WhatsApp veya telefonla bize ulaşın, sorununuzu anlatalım.",
    icon: "phone" as const,
  },
  {
    step: 2,
    title: "Ekibimiz Gelsin",
    description:
      "Aynı gün içinde adresinize gelip, detaylı inceleme yapalım.",
    icon: "van" as const,
  },
  {
    step: 3,
    title: "Kaçağı Tespit Edelim",
    description:
      "Kırmadan, noktasal olarak kaçağın yerini tespit edip raporlayalım.",
    icon: "target" as const,
  },
] as const;

/** Dedicated su kaçağı reels — add these media files under public/media/lp/su-kacagi-tespiti/reels/ */
export const lpSuKacagiReels = [
  {
    id: "termal-01",
    title: "Termal Kamera ile Kaçak Tespiti",
    posterSrc: "/media/lp/su-kacagi-tespiti/reels/termal-01-poster.webp",
    videoSrc: "/media/lp/su-kacagi-tespiti/reels/termal-01.mp4",
  },
  {
    id: "akustik-01",
    title: "Akustik Dinleme ile Kaçak Tespiti",
    posterSrc: "/media/lp/su-kacagi-tespiti/reels/akustik-01-poster.webp",
    videoSrc: "/media/lp/su-kacagi-tespiti/reels/akustik-01.mp4",
  },
  {
    id: "nem-01",
    title: "Duvar İçi Nem Tespiti",
    posterSrc: "/media/lp/su-kacagi-tespiti/reels/nem-01-poster.webp",
    videoSrc: "/media/lp/su-kacagi-tespiti/reels/nem-01.mp4",
  },
] as const;

export const lpSuKacagiWhyUs = [
  {
    id: "kirmadan",
    title: "Kırmadan Tespit",
    description: "Gereksiz kırma yapmadan noktasal tespit.",
  },
  {
    id: "ayni-gun",
    title: "Aynı Gün Servis",
    description: "Aynı gün içinde hızlı servis ve çözüm.",
  },
  {
    id: "cihaz",
    title: "Modern Cihazlar",
    description: "Termal kamera ve akustik cihazlarla kesin sonuç.",
  },
  {
    id: "uzman",
    title: "Uzman Ekip",
    description: "Deneyimli ve eğitimli teknik ekibimizle hizmet.",
  },
  {
    id: "bilgi",
    title: "Açık Bilgilendirme",
    description: "Tespit sonrası net bilgi ve şeffaf fiyatlandırma.",
  },
  {
    id: "destek",
    title: "7/24 İletişim",
    description: "Her zaman bize ulaşabilir, destek alabilirsiniz.",
  },
] as const;

export const lpSuKacagiAreasNote =
  "Belirtilen bölgelerde aynı gün servis imkanı sunuyoruz.";

/** Placeholder reviews — replace with real Google reviews when ready. */
export const lpSuKacagiReviews = [
  {
    id: "review-1",
    text: "[PLACEHOLDER: Google yorum metnini buraya yapıştırın — 1] Örn: Faturam artmıştı, sebebini buldular; sorunumuz kısa sürede çözüldü.",
    rating: 5,
  },
  {
    id: "review-2",
    text: "[PLACEHOLDER: Google yorum metnini buraya yapıştırın — 2] Örn: Hızlı geldiler, kırmadan kaçağı buldular. Teşekkürler.",
    rating: 5,
  },
  {
    id: "review-3",
    text: "[PLACEHOLDER: Google yorum metnini buraya yapıştırın — 3] Örn: Termal kamera ile noktasal tespit yaptılar, net bilgilendirdiler.",
    rating: 5,
  },
] as const;

/** Keep existing service FAQ copy for FAQPage JSON-LD. */
export function getLpSuKacagiFaqs(): ServiceFaq[] {
  return getServiceBySlug("su-kacagi-tespiti")?.faq ?? [];
}

export const lpSuKacagiBottomCta = {
  title: "Su Kaçağını Büyümeden Tespit Edelim",
  lead: "Aynı gün servis için bizi arayın veya WhatsApp'tan yazın.",
} as const;
