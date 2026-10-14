import type { TikaniklikLocationConfig } from "./types";
import { lpGoogleReviews } from "@/content/lp/google-reviews";
import { fieldWorkReels } from "@/content/field-work-reels";

export const kartalTikaniklikConfig: TikaniklikLocationConfig = {
  slug: "kartal-tikaniklik-acma",
  path: "/kartal-tikaniklik-acma",
  district: "Kartal",
  meta: {
    title: "Kartal Tıkanıklık Açma — 7/24 Kırmadan Kameralı Robotla Gider Açma",
    description:
      "Kartal tıkanıklık açma: Lavabo, tuvalet, mutfak ve ana gider tıkanıklıklarında kameralı robotik cihazlarla kırmadan kesin çözüm. 30-45 dakikada Kartal geneli servis.",
  },
  whatsAppMessage:
    "Merhaba, Kartal'da tıkanıklık açma hizmeti için yazıyorum. Lavabo / tuvalet / gider tıkanıklığım var, acil usta desteği rica ediyorum.",
  hero: {
    title: "Kartal Tıkanıklık Açma & Kameralı Robot Servisi",
    lead:
      "Kartal ve tüm mahallelerinde lavabo, tuvalet, mutfak ve bina pimaş tıkanıklıklarına kırmadan, dökmeden robot makinelerle müdahale ediyoruz. 30-45 dakikada kapınızdayız.",
    image: {
      src: "/media/lp/tikaniklik-acma/hero.jpg",
      alt: "Kartal kırmadan robot cihazla gider ve pimaş tıkanıklığı açan tesisat ustası",
      width: 1024,
      height: 682,
    },
    badges: [
      { id: "shield", label: "Kırmadan Robotla Açma" },
      { id: "clock", label: "30-45 Dk Hızlı Servis" },
      { id: "camera", label: "Kameralı Boru Kontrolü" },
      { id: "person", label: "Ehil Tesisat Ustası" },
    ] as const,
  },
  emergency: {
    title: "Kartal 7/24 Acil Tıkanıklık Açma Servisi",
    lead:
      "Geri basan lavabo, taşan klozet ve apartman ana hat tıkanıklıklarında Kartal nöbetçi mobil ekibimiz günün her saati hemen yola çıkar.",
    ctaLabel: "Acil Tıkanıklık Ara",
  },
  clogTypesHeading: "Kartal'da Kırmadan Müdahale Ettiğimiz Tıkanıklıklar",
  clogTypesLead:
    "Gelişmiş robotik helezon yaylı makinelerimizle hiçbir fayans veya boruya zarar vermeden tüm giderleri kısa sürede açıyoruz.",
  clogTypes: [
    {
      id: "lavabo",
      title: "Kartal Lavabo Tıkanıklığı Açma",
      description:
        "Banyo ve tuvalet lavabolarında suyun yavaş gitmesi veya tamamen durması durumunda kırmadan robotla açma.",
    },
    {
      id: "tuvalet",
      title: "Kartal Tuvalet & Klozet Açma",
      description:
        "Klozet ve alaturka tuvalet taşmalarında spiral çelik yaylı makinelerle hatta zarar vermeden temizlik.",
    },
    {
      id: "mutfak",
      title: "Kartal Mutfak Gideri Açma",
      description:
        "Bulaşık makinesi ve lavabo giderinde biriken donmuş yağ kütlelerini mekanik uçlarla parçalayarak tahliye etme.",
    },
    {
      id: "banyo",
      title: "Kartal Banyo & Yer Süzgeci Açma",
      description:
        "Duş teknesi ve yer süzgeçlerinde sabun ve kıl birikintilerinden kaynaklanan su taşkınlarına hızlı çözüm.",
    },
    {
      id: "pimas",
      title: "Kartal Bina Ana Pimaş Tıkanıklığı",
      description:
        "Apartmanların zemin ve bodrum katlarında su basmasına neden olan ana dikey kolon tıkanıklıklarını açma.",
    },
    {
      id: "logar",
      title: "Kartal Logar & Dış Hat Tıkanıklığı",
      description:
        "Bina parsel bacası ve bahçe giderlerindeki tıkanıklıkları kameralı inceleme ile tespit edip açma.",
    },
  ],
  solution: {
    title: "Robotik Makine ve Boru İçi Kamera ile Kırmadan Çözüm",
    lead:
      "Kartal'daki evinizi veya dükkanınızı moloz yığınına çevirmeden, gider hattı içinden ilerleyen robot teknolojisi ile kalıcı açma sağlıyoruz.",
    image: {
      src: "/media/lp/tikaniklik-acma/solution-kamera.png",
      alt: "Kartal gider içi kamera ile tıkanıklık tespiti ve robotik açma",
      width: 1024,
      height: 768,
    },
    bullets: [
      "Boru içi kamera sayesinde tıkanıklığın derinliğini ve türünü net olarak belirleriz.",
      "Robotik spiral makineler boru cidarlarına zarar vermeden yabancı maddeleri çeker veya parçalar.",
      "İşlem sonrası bol su testi yapılarak hattın tamamen açık olduğu garantilenir.",
    ],
  },
  neighborhoodsHeading: "Kartal'ın Tüm Mahallelerinde 30-45 Dakikada Servis",
  neighborhoodsLead:
    "Cevizli, Soğanlık, Yakacık, Uğur Mumcu ve sahil şeridi dahil Kartal'ın her noktasına hızlı mobil servis aracımızla ulaşıyoruz.",
  neighborhoods: [
    "Atalar Mahallesi",
    "Cevizli Mahallesi",
    "Çavuşoğlu Mahallesi",
    "Esentepe Mahallesi",
    "Gümüşpınar Mahallesi",
    "Hürriyet Mahallesi",
    "Karlıktepe Mahallesi",
    "Kordonboyu Mahallesi",
    "Orhantepe Mahallesi",
    "Orta Mahalle",
    "Petrol-İş Mahallesi",
    "Soğanlık Yeni Mahallesi",
    "Soğanlık Orta Mahallesi",
    "Topselvi Mahallesi",
    "Uğur Mumcu Mahallesi",
    "Yakacık Çarşı Mahallesi",
    "Yakacık Yeni Mahallesi",
    "Yalı Mahallesi",
    "Yukarı Mahalle",
    "Yunus Mahallesi",
  ],
  whyUs: [
    {
      id: "kirilmadan",
      title: "Kırmadan, Dökmeden",
      description:
        "Duvar veya fayans sökmeden, özel cihazlarla gider deliğinden hattın içine girerek işlem yapıyoruz.",
    },
    {
      id: "hizli",
      title: "30-45 Dk Servis Süresi",
      description:
        "Kartal bölgesindeki nöbetçi mobil ekiplerimiz sayesinde çağrınıza en kısa sürede yanıt veriyoruz.",
    },
    {
      id: "kamera",
      title: "Kameralı Boru Görüntüleme",
      description:
        "Tıkanıklığın açıldığını ve boruda herhangi bir kırık/çökme olmadığını kamerayla kontrol ediyoruz.",
    },
    {
      id: "seffaf",
      title: "Net ve Sabit Ücret",
      description:
        "Yapılacak işi yerinde inceleyip sabit fiyat teklifi sunuyor, sonradan ek sürpriz maliyet çıkarmıyoruz.",
    },
    {
      id: "temiz",
      title: "Temiz ve Titiz Çalışma",
      description:
        "Yaşam alanınıza zarar vermeden, etrafı kirletmeden hijyenik ve özenli şekilde çalışıyoruz.",
    },
    {
      id: "garanti",
      title: "İşçilik ve Sonuç Garantisi",
      description:
        "Açılmayan tıkanıklıktan ücret talep etmiyor, yaptığımız işin arkasında duruyoruz.",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "Bize Ulaşın",
      description:
        "Telefon veya WhatsApp ile tıkanıklığın türünü ve Kartal'daki konumunuzu iletin.",
      icon: "phone",
    },
    {
      step: 2,
      title: "30-45 Dk İçinde Kapınızdayız",
      description:
        "Gezici mobil servis aracımız tam donanımlı robot cihazlarla adresinize ulaşır.",
      icon: "person",
    },
    {
      step: 3,
      title: "Robot Cihazla Kırmadan Açma",
      description:
        "Pimaş hattına robot çelik yay gönderilerek tıkanıklık güvenle ve hızla açılır.",
      icon: "wrench",
    },
    {
      step: 4,
      title: "Kamera Kontrolü ve Teslim",
      description:
        "Boru içi kamera ile kontrol edilir, su akıtılarak test edilir ve sorunsuz teslim edilir.",
      icon: "wrench",
    },
  ],
  reels: fieldWorkReels.slice(0, 3),
  reviews: lpGoogleReviews.slice(0, 3),
  faqs: [
    {
      question: "Kartal'da tıkanıklık açma işlemi ne kadar sürer?",
      answer:
        "Standart bir lavabo veya tuvalet tıkanıklığı robotik makinelerimizle ortalama 20 ila 45 dakika arasında kırmadan açılır. Ana kolon veya bina dışı rögarlarda süre hattın uzunluğuna göre değişebilir.",
    },
    {
      question: "Kartal'ın tüm mahallelerine geliyor musunuz?",
      answer:
        "Evet; Cevizli, Atalar, Soğanlık, Yakacık, Uğur Mumcu, Esentepe, Karlıktepe dahil Kartal'ın 20 mahallesinin tamamına aynı gün ve 7/24 acil servis sağlıyoruz.",
    },
    {
      question: "Robot makine pimaş borularını deler mi?",
      answer:
        "Kesinlikle delmez. Kullandığımız spiral çelik yaylar boru kıvrımlarına uyum sağlayarak esner ve yalnızca tıkanıklığı oluşturan yabancı maddeleri parçalar, pimaş borusuna hiçbir zarar vermez.",
    },
    {
      question: "Kartal tıkanıklık açma fiyatı nasıl belirlenir?",
      answer:
        "Tıkanıklığın bulunduğu nokta (daire içi lavabo/tuvalet veya ortak bina ana hattı) yerinde değerlendirilir ve net fiyat önceden paylaşılır. Onayınız olmadan hiçbir işlem başlatılmaz.",
    },
    {
      question: "Gece veya hafta sonu acil çağrı yapabilir miyim?",
      answer:
        "Evet, 7/24 nöbetçi ekiplerimiz gece saatlerinde yaşanan taşma ve su baskınlarına anında müdahale etmek üzere hazır beklemektedir.",
    },
    {
      question: "Tıkanıklık sonrası kameralı kontrol yapılıyor mu?",
      answer:
        "Evet, açma işlemi tamamlandıktan sonra boru içi kameralarımızla hat görüntülenir ve tıkanıklığa neden olan faktörün tamamen ortadan kalktığı teyit edilir.",
    },
  ],
  bottomCta: {
    title: "Kartal'da Tıkanıklık Sorununuzu Hemen Çözelim!",
    lead:
      "Kırmadan kameralı ve robotik müdahale için hemen bizi arayın veya WhatsApp'tan konum atın, 30-45 dakikada gelelim.",
  },
};
