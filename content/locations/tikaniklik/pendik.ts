import type { TikaniklikLocationConfig } from "./types";
import { lpGoogleReviews } from "@/content/lp/google-reviews";
import { fieldWorkReels } from "@/content/field-work-reels";

export const pendikTikaniklikConfig: TikaniklikLocationConfig = {
  slug: "pendik-tikaniklik-acma",
  path: "/pendik-tikaniklik-acma",
  district: "Pendik",
  meta: {
    title: "Pendik Tıkanıklık Açma — 7/24 Kırmadan Kameralı Robotla Gider Açma",
    description:
      "Pendik tıkanıklık açma: Lavabo, tuvalet, mutfak ve ana pimaş tıkanıklıklarında kameralı robot ile kırmadan noktasal çözüm. 30 dakikada Pendik geneli acil servis.",
  },
  whatsAppMessage:
    "Merhaba, Pendik'te tıkanıklık açma hizmeti için yazıyorum. Lavabo / tuvalet / gider tıkanıklığım var, acil destek rica ediyorum.",
  hero: {
    title: "Pendik Tıkanıklık Açma & Kameralı Gider Açma Servisi",
    lead:
      "Pendik merkez, Kurtköy, Kaynarca ve tüm mahallelerde lavabo, tuvalet, mutfak ve ana kolon gider tıkanıklıklarını kırmadan robot cihazlarla açıyoruz. 30 dakikada kapınızdayız.",
    image: {
      src: "/media/lp/tikaniklik-acma/hero.jpg",
      alt: "Pendik kırmadan kameralı tıkanıklık açma ve gider görüntüleme yapan Gümüş Tesisat ustası",
      width: 1024,
      height: 682,
    },
    badges: [
      { id: "shield", label: "Kırmadan Robotla Açma" },
      { id: "clock", label: "30 Dk Hızlı Servis" },
      { id: "camera", label: "Kameralı Boru İnceleme" },
      { id: "person", label: "Deneyimli Tesisat Ustası" },
    ] as const,
  },
  emergency: {
    title: "Pendik 7/24 Acil Tıkanıklık Açma Hattı",
    lead:
      "Taşan tuvalet, geri basan mutfak gideri veya acil bina ana pimaş tıkanıklıklarında Pendik nöbetçi ekibimiz hemen yola çıkar.",
    ctaLabel: "Acil Tıkanıklık Servisi",
  },
  clogTypesHeading: "Pendik'te Hangi Tıkanıklıkları Kırmadan Açıyoruz?",
  clogTypesLead:
    "Evinizde, iş yerinizde veya apartmanınızda oluşan tüm gider tıkanıklıklarını özel robotik helezon makineler ve kameralı tespit sistemleri ile kırmadan açıyoruz.",
  clogTypes: [
    {
      id: "lavabo",
      title: "Pendik Lavabo Tıkanıklığı Açma",
      description:
        "Banyo ve el yıkama lavabolarında saç, sabun ve kireç artıklarından kaynaklanan su birikintilerini kırmadan açıyoruz.",
    },
    {
      id: "tuvalet",
      title: "Pendik Tuvalet & Klozet Açma",
      description:
        "Tuvalet kağıdı, ıslak mendil veya yabancı cisim kaynaklı taşmaları robotik çelik yay sistemiyle boruyu zedelemeden temizliyoruz.",
    },
    {
      id: "mutfak",
      title: "Pendik Mutfak Gideri Açma",
      description:
        "Yemek artıkları ve donmuş yağ birikintilerinin tıkadığı mutfak borularını özel yağ parçalayıcı uçlarla tamamen temizliyoruz.",
    },
    {
      id: "banyo",
      title: "Pendik Banyo & Duş Kanalı Açma",
      description:
        "Duşakabin ve yer süzgeçlerindeki yavaş su tahliyesini fayanslara zarar vermeden dakikalar içinde çözüyoruz.",
    },
    {
      id: "pimas",
      title: "Pendik Ana Pimaş & Kolon Tıkanıklığı",
      description:
        "Apartman dikey ortak kolon borularında alt katlara taşma yapan tıkanıklıkları güçlü motorlu robotlarla açıyoruz.",
    },
    {
      id: "logar",
      title: "Pendik Logar & Rögar Tıkanıklığı Açma",
      description:
        "Bina dışı ana hat ve parsel bacası tıkanıklıklarında kameralı görüntüleme ve yüksek basınçlı müdahale sağlıyoruz.",
    },
  ],
  solution: {
    title: "Kameralı ve Robotik Makine ile Kırmadan Kesin Çözüm",
    lead:
      "Geleneksel yöntemlerle duvar veya fayans kırmaya, boruları delip evi şantiyeye çevirmeye son! Pendik Gümüş Tesisat olarak son teknoloji ekipmanla çalışıyoruz.",
    image: {
      src: "/media/lp/tikaniklik-acma/solution-kamera.png",
      alt: "Pendik gider içi kameralı kontrol ve tıkanıklık açma cihazı",
      width: 1024,
      height: 768,
    },
    bullets: [
      "Boru içi renkli kamera ile tıkanıklığın tam yerini ve nedenini görüntüleriz.",
      "Robotik spiral çelik yaylarla kırmadan hattı pırıl pırıl temizleriz.",
      "İşlem sonrası kamerayla hattın tamamen açıldığını kontrol eder, garantili teslim ederiz.",
    ],
  },
  neighborhoodsHeading: "Pendik'in Tüm Mahallelerinde 30 Dakikada Hizmet",
  neighborhoodsLead:
    "Merkez, sahil, E-5 hattı veya Kurtköy fark etmeksizin Pendik'in her mahallesine gezici mobil araçlarımızla yarım saatte ulaşıyoruz.",
  neighborhoods: [
    "Ahmet Yesevi Mahallesi",
    "Bahçelievler Mahallesi",
    "Batı Mahallesi",
    "Çamçeşme Mahallesi",
    "Çamlık Mahallesi",
    "Çınardere Mahallesi",
    "Doğu Mahallesi",
    "Dumlupınar Mahallesi",
    "Ertuğrul Gazi Mahallesi",
    "Esenler Mahallesi",
    "Esenyalı Mahallesi",
    "Fatih Mahallesi",
    "Fevzi Çakmak Mahallesi",
    "Güllübağlar Mahallesi",
    "Güzelyalı Mahallesi",
    "Harmandere Mahallesi",
    "Kavakpınar Mahallesi",
    "Kaynarca Mahallesi",
    "Kurtköy Mahallesi",
    "Orhangazi Mahallesi",
    "Orta Mahalle",
    "Ramazanoğlu Mahallesi",
    "Sanayi Mahallesi",
    "Sapan Bağları Mahallesi",
    "Sülüntepe Mahallesi",
    "Şeyhli Mahallesi",
    "Velibaba Mahallesi",
    "Yaylar Mahallesi",
    "Yeni Mahalle",
    "Yeşilbağlar Mahallesi",
  ],
  whyUs: [
    {
      id: "kirilmadan",
      title: "Kırmadan Robotik Müdahale",
      description:
        "Fayans, beton veya pimaş boruyu kırmadan borunun içinden spiral çelik yay ile temizlik.",
    },
    {
      id: "hizli",
      title: "30 Dakikada Pendik Servisi",
      description:
        "Pendik merkez ve Kurtköy bölgesinde sürekli hazır bekleyen nöbetçi mobil tesisat araçları.",
    },
    {
      id: "kamera",
      title: "Kameralı Hat Kontrolü",
      description:
        "Tıkanıklığı açtıktan sonra borunun içini kamerayla inceleyerek çökme veya kırık kontrolü yaparız.",
    },
    {
      id: "seffaf",
      title: "Önceden Net Fiyat",
      description:
        "Yapılacak işlemi açıklar, işe başlamadan önce sabit fiyat verir; ekstra sürpriz ücret talep etmeyiz.",
    },
    {
      id: "temiz",
      title: "Tertemiz Teslimat",
      description:
        "Evinizi kirletmeden, taşma ve sıçramaya karşı önlem alarak temiz ve titiz bir şekilde çalışırız.",
    },
    {
      id: "garanti",
      title: "%100 Açma Garantisi",
      description:
        "Açılmayan tıkanıklıktan ücret almıyoruz; işimizin arkasında durarak garantili hizmet veriyoruz.",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "Arayın veya WhatsApp'tan Yazın",
      description:
        "Hangi giderin tıkandığını (lavabo, tuvalet vb.) ve Pendik'teki adresinizi bize bildirin.",
      icon: "phone",
    },
    {
      step: 2,
      title: "30 Dakikada Kapınızdayız",
      description:
        "Tam donanımlı robot makinelerimiz ve kameralı teşhis cihazlarımızla adrese hızla varıyoruz.",
      icon: "person",
    },
    {
      step: 3,
      title: "Robot Cihazla Kırmadan Açma",
      description:
        "Tıkanıklığın türüne uygun ucu robota takarak boru içerisindeki pislikleri güvenle temizliyoruz.",
      icon: "wrench",
    },
    {
      step: 4,
      title: "Kamera & Su Akış Testi",
      description:
        "Giderden bol su akıtarak test ediyor, kamera ile borunun tertemiz açıldığını doğruluyoruz.",
      icon: "wrench",
    },
  ],
  reels: fieldWorkReels.slice(0, 3),
  reviews: lpGoogleReviews.slice(0, 3),
  faqs: [
    {
      question: "Pendik'te tıkanıklık açma işlemi kırma gerektirir mi?",
      answer:
        "Kesinlikle hayır. Robotik helezon yaylı makinelerimiz doğrudan gider deliğinden boru içine girer ve tıkanıklığa sebep olan atıkları parçalayarak temizler. Fayans, zemin ya da duvarlarda hiçbir kırma işlemi yapılmaz.",
    },
    {
      question: "Pendik'te servis süreniz ne kadar sürer?",
      answer:
        "Pendik merkez, Kurtköy, Kaynarca, Esenyalı, Güzelyalı, Batı, Çamlık ve Velibaba dahil tüm mahallelere ortalama 30 dakika içinde ulaşıyoruz. Acil taşma durumlarında öncelik verilir.",
    },
    {
      question: "Kimyasal açıcılar döktüm ama açılmadı, robot makine açar mı?",
      answer:
        "Evet. Kimyasal açıcılar genellikle borunun dip noktalarında donarak tortuyu daha da sertleştirir ve pimaş contalarına zarar verir. Robot cihazımız mekanik güçle bu sertleşmiş tabakayı parçalayarak akışı anında sağlar.",
    },
    {
      question: "Gece tuvalet taştı, nöbetçi tıkanıklık servisiniz var mı?",
      answer:
        "Evet, 7 gün 24 saat kesintisiz nöbetçi ekibimiz bulunmaktadır. Gece veya hafta sonu fark etmeksizin acil çağrılarınızda hemen ekibimizi yönlendiriyoruz.",
    },
    {
      question: "Pendik tıkanıklık açma fiyatı ne kadar?",
      answer:
        "Tıkanıklığın türüne (lavabo, klozet, süzgeç veya bina ana kolonu) göre uygun ve şeffaf fiyatlandırma uygulanır. Ustamız adrese geldiğinde işlemi yerinde görüp net fiyatı onayınıza sunar, onayınız olmadan işlem başlamaz.",
    },
    {
      question: "Açıldıktan sonra tekrar tıkanır mı?",
      answer:
        "İşlem sonrası boru içi kamera ile hattın temizliği kontrol edilir. Kullanıcı hatası (ıslak mendil vb. atılması) veya pimaş eğim bozukluğu haricinde hat uzun süre sorunsuz şekilde akmaya devam eder.",
    },
  ],
  bottomCta: {
    title: "Pendik'te Tıkanıklık Sorununuz mu Var?",
    lead:
      "Kırmadan, dökmeden robot cihazla anında açalım. Hemen arayın veya WhatsApp'tan konum gönderin, ustamız 30 dakikada gelsin.",
  },
};
