import type { ServiceFaq } from "@/content/services";
import { fieldWorkReels } from "@/content/field-work-reels";

export const lpTikaniklikPath = "/hizmetler/tikaniklik-acma";

export const lpTikaniklikMeta = {
  title: "Kırmadan Tıkanıklık Açma — Pendik, Kurtköy, Kartal, Tuzla",
  description:
    "Lavabo, tuvalet ve gider tıkanıklıklarına aynı gün müdahale. Pendik, Kurtköy, Kartal ve Tuzla'da kırmadan, kameralı tıkanıklık açma.",
} as const;

export const lpTikaniklikWhatsAppMessage =
  "Merhaba, tıkanıklık açma için yazıyorum. Lavabo / tuvalet / gider tıkanıklığım var.";

export const lpTikaniklikHero = {
  title: "Kırmadan Tıkanıklık Açma",
  lead: "Lavabo, tuvalet ve gider tıkanıklıklarına aynı gün müdahale.",
  image: {
    src: "/media/lp/tikaniklik-acma/hero.jpg",
    alt: "Kameralı cihazla kırmadan gider kontrolü yapan Gümüş Tesisat teknisyeni",
    width: 1024,
    height: 682,
  },
  badges: [
    { id: "shield", label: "Kırmadan Müdahale" },
    { id: "clock", label: "Aynı Gün Servis" },
    { id: "camera", label: "Kameralı Kontrol" },
  ] as const,
} as const;

export const lpClogTypes = [
  {
    id: "lavabo",
    title: "Lavabo",
    description:
      "Lavabo giderlerinde oluşan tıkanıklıkları kırmadan açıyoruz.",
  },
  {
    id: "tuvalet",
    title: "Tuvalet",
    description:
      "Tuvalet tıkanıklıklarına hızlı ve etkili çözümler sunuyoruz.",
  },
  {
    id: "mutfak",
    title: "Mutfak Gideri",
    description:
      "Mutfak gideri tıkanıklıklarını profesyonel ekipmanla açıyoruz.",
  },
  {
    id: "banyo",
    title: "Banyo Gideri",
    description:
      "Banyo gideri ve duş kanalı tıkanıklıklarını açıyoruz.",
  },
] as const;

export const lpSolution = {
  title: "Kameralı ve Robotik Makine ile Kırmadan Çözüm",
  lead: "Son teknoloji kameralı sistemler ile tıkanıklığın yerini tespit ediyor, robotik makinelerle kırmadan, dökmeden kalıcı çözüm sağlıyoruz.",
  image: {
    src: "/media/lp/tikaniklik-acma/solution-kamera.png",
    alt: "Kameralı gider görüntüleme cihazı ile boru içi kontrol ve tıkanıklık tespiti",
    width: 1024,
    height: 768,
  },
  bullets: [
    "Tıkanıklığın yerini kamerayla net olarak tespit ederiz.",
    "Robotik makinelerle borulara zarar vermeden açarız.",
    "Temiz, hızlı ve kalıcı çözümler sunarız.",
  ] as const,
} as const;

export const lpProcessSteps = [
  {
    step: 1,
    title: "Bizi Arayın",
    description: "Tıkanıklık sorununu anlatın, adresinizi paylaşın.",
    icon: "phone" as const,
  },
  {
    step: 2,
    title: "Ekibimiz Gelsin",
    description: "Aynı gün içerisinde adresinize ulaşarak keşif yapalım.",
    icon: "van" as const,
  },
  {
    step: 3,
    title: "Tıkanıklığı Açalım",
    description: "Kırmadan, temiz ve garantili şekilde tıkanıklığı açalım.",
    icon: "check" as const,
  },
] as const;

/** First 3 field-work reels for the ads LP. */
export const lpFieldWorkReels = fieldWorkReels.slice(0, 3);

export const lpWhyUs = [
  {
    id: "kirmadan",
    title: "Kırmadan Müdahale",
    description: "Duvar, fayans ve zemine zarar vermeden çözüm.",
  },
  {
    id: "ayni-gun",
    title: "Aynı Gün Servis",
    description: "Aynı gün içerisinde hızlı müdahale hedefleriz.",
  },
  {
    id: "kamera",
    title: "Kameralı Kontrol",
    description: "Sorunun kaynağını net tespit ederiz.",
  },
  {
    id: "uzman",
    title: "Uzman Ekip",
    description: "Deneyimli ve eğitimli profesyonel ekip.",
  },
  {
    id: "garanti",
    title: "Garantili Hizmet",
    description: "Yaptığımız işin arkasında duruyoruz.",
  },
  {
    id: "destek",
    title: "7/24 Destek",
    description: "Haftanın her günü bize ulaşabilirsiniz.",
  },
] as const;

export const lpAreasNote =
  "Belirtilen bölgelerde aynı gün servis imkanı sunuyoruz.";

export { lpGoogleReviews as lpReviews } from "@/content/lp/google-reviews";

export const lpFaqs: ServiceFaq[] = [
  {
    question: "Tıkanıklık açma işlemi kırma gerektirir mi?",
    answer:
      "Çoğu durumda hayır. Kameralı inceleme ve robotik / mekanik cihazlarla duvar, fayans veya zemin kaplamasını sökmeden hattın içinden müdahale ediyoruz. Amaç gereksiz yıkımı önlemektir.",
  },
  {
    question: "Tıkanıklık açma işlemi ne kadar sürer?",
    answer:
      "Lavabo, tuvalet ve gider tipi ile tıkanıklığın yerine göre değişir. Ön bilgi sonrası süre hakkında daha net konuşabiliriz; çoğu çağrıda aynı gün müdahale hedeflenir.",
  },
  {
    question: "Hangi yöntemleri kullanıyorsunuz?",
    answer:
      "Gerekli durumlarda kameralı görüntüleme ile tıkanıklığın yerini belirliyor; robotik ve mekanik açma cihazlarıyla kırmadan temizliyoruz. Körleme kimyasal kullanımından kaçınırız.",
  },
  {
    question: "Garanti veriyor musunuz?",
    answer:
      "Yaptığımız işin arkasında duruyoruz. Garanti kapsamı, yapılan müdahaleye göre yerinde netleşir.",
  },
  {
    question: "Gece veya hafta sonu hizmetiniz var mı?",
    answer:
      "Evet — 7/24 ulaşabilirsiniz. Yoğunluk anında dönüş süresi değişebilir; acil çağrıları önceliklendiririz.",
  },
];

export const lpBottomCta = {
  title: "Tıkanıklığınızı Hemen Açalım!",
  lead: "Aynı gün servis için bizi arayın veya WhatsApp'tan yazın.",
} as const;
