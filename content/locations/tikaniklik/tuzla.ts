import type { TikaniklikLocationConfig } from "./types";
import { lpGoogleReviews } from "@/content/lp/google-reviews";
import { fieldWorkReels } from "@/content/field-work-reels";

export const tuzlaTikaniklikConfig: TikaniklikLocationConfig = {
  slug: "tuzla-tikaniklik-acma",
  path: "/tuzla-tikaniklik-acma",
  district: "Tuzla",
  meta: {
    title: "Tuzla Tıkanıklık Açma — 7/24 Kırmadan Kameralı Robotla Gider Açma",
    description:
      "Tuzla tıkanıklık açma: Mutfak, lavabo, tuvalet, logar ve pimaş tıkanıklıklarında kameralı robot sistemlerle kırmadan kesin çözüm. 30-45 dakikada Tuzla acil servis.",
  },
  whatsAppMessage:
    "Merhaba, Tuzla'da tıkanıklık açma hizmeti için yazıyorum. Lavabo / tuvalet / gider tıkanıklığım var, acil destek rica ediyorum.",
  hero: {
    title: "Tuzla Tıkanıklık Açma & Kameralı Robot Servisi",
    lead:
      "Tuzla Sahil, Marina, Aydınlı, Postane, Yayla ve tüm mahallelerde lavabo, tuvalet, mutfak ve ana pimaş tıkanıklıklarını kırmadan robot makinelerle açıyoruz. 30-45 dakikada kapınızdayız.",
    image: {
      src: "/media/lp/tikaniklik-acma/hero.jpg",
      alt: "Tuzla kırmadan robot cihazla pimaş ve gider tıkanıklığı açan uzman usta",
      width: 1024,
      height: 682,
    },
    badges: [
      { id: "shield", label: "Kırmadan Robotla Açma" },
      { id: "clock", label: "30-45 Dk Servis" },
      { id: "camera", label: "Kameralı Boru Görüntüleme" },
      { id: "person", label: "Deneyimli Tesisat Ustası" },
    ] as const,
  },
  emergency: {
    title: "Tuzla 7/24 Acil Tıkanıklık Açma Hattı",
    lead:
      "Geri basan mutfak gideri, taşan tuvalet ve acil logar tıkanıklıklarında Tuzla nöbetçi gezici ekibimiz 7/24 anında yola çıkar.",
    ctaLabel: "Acil Tıkanıklık Servisi",
  },
  clogTypesHeading: "Tuzla'da Kırmadan Müdahale Ettiğimiz Tıkanıklıklar",
  clogTypesLead:
    "Konut, villa, site, iş yeri ve işletmelerde oluşan tüm gider tıkanıklıklarına son teknoloji robot makinelerle zarar vermeden müdahale ediyoruz.",
  clogTypes: [
    {
      id: "lavabo",
      title: "Tuzla Lavabo Tıkanıklığı Açma",
      description:
        "Banyo ve tuvalet lavabolarındaki sabun, saç ve tortu birikintilerini kırmadan robotik yaylarla tahliye ediyoruz.",
    },
    {
      id: "tuvalet",
      title: "Tuzla Tuvalet & Klozet Açma",
      description:
        "Klozet ve alaturka tuvaletlerdeki peçete, ıslak mendil veya yabancı cisim tıkanıklıklarını sökmeden açıyoruz.",
    },
    {
      id: "mutfak",
      title: "Tuzla Mutfak Gideri Açma",
      description:
        "Restoran, ev ve iş yerlerinin mutfak giderlerinde donmuş yemek yağlarını özel freze uçlarla temizliyoruz.",
    },
    {
      id: "banyo",
      title: "Tuzla Banyo & Duş Süzgeci Açma",
      description:
        "Duş teknesi ve yer sifonlarındaki su birikintilerini fayanslara dokunmadan dakikalar içinde çözüyoruz.",
    },
    {
      id: "pimas",
      title: "Tuzla Ana Pimaş & Kolon Tıkanıklığı",
      description:
        "Apartman ve sitelerin ortak dikey pimaş hatlarındaki taşmaları güçlü sanayi tipi robotlarla temizliyoruz.",
    },
    {
      id: "logar",
      title: "Tuzla Logar & Rögar Tıkanıklığı Açma",
      description:
        "Site, fabrika ve müstakil binaların bahçe parsel bacalarındaki tıkanıklıkları kameralı cihazlarla açıyoruz.",
    },
  ],
  solution: {
    title: "Kameralı Robot Sistemle Kırmadan Kesin Sonuç",
    lead:
      "Tuzla'daki yaşam alanınızı şantiye ortamına çevirmeden, gider hattı içinden ilerleyen robot teknolojimizle tıkanıklığı dakikalar içinde çözüyoruz.",
    image: {
      src: "/media/lp/tikaniklik-acma/solution-kamera.png",
      alt: "Tuzla gider içi kameralı teşhis ve robotik tıkanıklık açma sistemi",
      width: 1024,
      height: 768,
    },
    bullets: [
      "Boru içi kamera ile tıkanıklığın tam sebebi ve noktası belirlenir.",
      "Robotik helezon makineler boru içindeki yabancı maddeleri kırmadan tahliye eder.",
      "İşlem sonrası bol su akış testi yapılarak hat tertemiz teslim edilir.",
    ],
  },
  neighborhoodsHeading: "Tuzla'nın Tüm Mahallelerinde 30-45 Dakikada Hizmet",
  neighborhoodsLead:
    "Marina, Postane, Yayla, Aydınlı, Aydıntepe, İçmeler ve Tepeören dahil Tuzla'nın her bölgesine donanımlı araçlarımızla ulaşıyoruz.",
  neighborhoods: [
    "Akfırat Mahallesi",
    "Anadolu Mahallesi",
    "Aydınlı Mahallesi",
    "Aydıntepe Mahallesi",
    "Cami Mahallesi",
    "Evliya Çelebi Mahallesi",
    "Fatih Mahallesi",
    "İçmeler Mahallesi",
    "İstasyon Mahallesi",
    "Mescit Mahallesi",
    "Mimar Sinan Mahallesi",
    "Orhanlı Mahallesi",
    "Orta Mahalle",
    "Postane Mahallesi",
    "Şifa Mahallesi",
    "Tepeören Mahallesi",
    "Yayla Mahallesi",
  ],
  whyUs: [
    {
      id: "kirilmadan",
      title: "Kırmadan Müdahale",
      description:
        "Fayans, mermer veya pimaş boruyu kırmadan borunun içinden spiral çelik yaylarla temizlik.",
    },
    {
      id: "hizli",
      title: "30-45 Dk Servis",
      description:
        "Tuzla genelinde sürekli hareket halinde olan tam teçhizatlı nöbetçi gezici ekipler.",
    },
    {
      id: "kamera",
      title: "Kameralı Kontrol",
      description:
        "İşlem sonrasında boru içi kamera ile hattı görüntüleyerek kırık veya çökme riskini inceleriz.",
    },
    {
      id: "seffaf",
      title: "Şeffaf Fiyatlandırma",
      description:
        "Yapılacak işleme göre net ve sabit fiyat verir, işlem sonrasında ek fatura çıkarmayız.",
    },
    {
      id: "temiz",
      title: "Temiz ve Titiz Teslim",
      description:
        "Etrafı kirletmeden, taşmaya karşı koruma sağlayarak hijyenik ve özenli çalışırız.",
    },
    {
      id: "garanti",
      title: "%100 Açma Garantisi",
      description:
        "Açılmayan tıkanıklıktan hiçbir ücret talep etmez, güvene dayalı profesyonel hizmet sunarız.",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "İletişime Geçin",
      description:
        "Telefon veya WhatsApp ile tıkalı gideri ve Tuzla'daki adresinizi iletin.",
      icon: "phone",
    },
    {
      step: 2,
      title: "30-45 Dk İçinde Adresteyiz",
      description:
        "Robot ve kameralı cihazlarla donatılmış servis aracımız hızla adresinize ulaşır.",
      icon: "person",
    },
    {
      step: 3,
      title: "Robot Cihazla Kırmadan Açma",
      description:
        "Tıkanıklığa uygun çelik helezon uç takılarak pimaş borusu içinden işlem yapılır.",
      icon: "wrench",
    },
    {
      step: 4,
      title: "Kamera & Su Testi",
      description:
        "Kamera kontrolü ve su akış testi yapılarak sorunsuz çalıştığı onaylanır.",
      icon: "wrench",
    },
  ],
  reels: fieldWorkReels.slice(0, 3),
  reviews: lpGoogleReviews.slice(0, 3),
  faqs: [
    {
      question: "Tuzla'da tıkanıklık açma işlemi ne kadar sürer?",
      answer:
        "Robot cihazlarımızla standart lavabo, tuvalet veya mutfak tıkanıklıkları ortalama 20-40 dakika içinde kırmadan açılmaktadır. Bina ana hatlarında bu süre boru uzunluğuna göre biraz daha uzayabilir.",
    },
    {
      question: "Tuzla villa, site ve sanayi işletmelerine hizmetiniz var mı?",
      answer:
        "Evet. Dairelerin yanı sıra Tepeören villaları, Aydınlı ve Postane siteleri ile Tuzla Deri OSB, Birlik OSB ve İçmeler bölgesindeki iş yerlerine de ana gider açma hizmeti veriyoruz.",
    },
    {
      question: "Tıkanıklık açılırken pimaş veya fayans kırılır mı?",
      answer:
        "Hayır, robot makinelerimiz pimaş borusunun ağzından girerek boru hattı boyunca ilerler. Hiçbir fayans sökülmez veya kırılmaz.",
    },
    {
      question: "Tuzla tıkanıklık açma ücreti ne kadar?",
      answer:
        "Tıkanıklığın türü (lavabo, klozet, yer süzgeci veya ortak kolon hattı) yerinde değerlendirilir ve ustamız işe başlamadan önce sabit ve net fiyat sunar. Onayınız olmadan ek ücret çıkarılmaz.",
    },
    {
      question: "Gece veya hafta sonu servisiniz var mı?",
      answer:
        "Evet, 7/24 nöbetçi tıkanıklık açma ekibimiz Tuzla genelinde gece ve hafta sonu acil çağrıları karşılamaktadır.",
    },
    {
      question: "İşlem sonrası kamera ile bakılıyor mu?",
      answer:
        "Evet, tıkanıklık açıldıktan sonra özel boru içi kamera ile hattın temizliği kontrol edilir ve hatta başka bir engel kalmadığından emin olunur.",
    },
  ],
  bottomCta: {
    title: "Tuzla'da Tıkanıklık Sorununuzu Hemen Çözelim!",
    lead:
      "Kırmadan kameralı ve robotik müdahale için hemen bizi arayın veya WhatsApp'tan yazın, ustamız kapınıza gelsin.",
  },
};
