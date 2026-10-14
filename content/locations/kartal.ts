import type { LocationConfig } from "./types";
import { lpGoogleReviews } from "@/content/lp/google-reviews";
import { fieldWorkReels } from "@/content/field-work-reels";

export const kartalLocationConfig: LocationConfig = {
  slug: "kartal-tesisatci",
  path: "/kartal-tesisatci",
  district: "Kartal",
  meta: {
    title: "Kartal Tesisatçı — 7/24 Kartal Su Tesisatı & Kırmadan Tıkanıklık Açma",
    description:
      "Kartal tesisatçı: Kırmadan termal kameralı su kaçağı tespiti, robot cihazla tıkanıklık açma ve 7/24 acil su tesisatı servisi. 30-45 dakikada Kartal kapınızda.",
  },
  whatsAppMessage:
    "Merhaba, Kartal'da tesisat hizmeti için yazıyorum. Acil usta desteği ve fiyat bilgisi alabilir miyim?",
  hero: {
    title: "Kartal Tesisatçı & 7/24 Acil Su Tesisat Ustası",
    lead:
      "Kartal ve tüm mahallelerinde kırmadan kameralı tıkanıklık açma, termal cihazla su kaçağı tespiti, klozet ve batarya tamiri. 30-45 dakikada mobil servisimiz kapınızda.",
    image: {
      src: "/media/lp/su-kacagi-tespiti/hero.jpg",
      alt: "Kartal su tesisatçısı ve kırmadan kaçak tespiti yapan Gümüş Tesisat ustası",
      width: 1024,
      height: 682,
    },
    badges: [
      { id: "clock", label: "30-45 Dk Servis" },
      { id: "shield", label: "Kırmadan Müdahale" },
      { id: "sparkle", label: "Temiz & Garantili İşçilik" },
      { id: "person", label: "Deneyimli Tesisat Ustası" },
    ] as const,
  },
  emergency: {
    title: "Kartal 7/24 Acil Tesisat Servisi",
    lead:
      "Su baskını, patlak boru, taşan tuvalet ve acil gider tıkanıklıklarında Kartal nöbetçi mobil ekibimiz hemen yola çıkıyor.",
    ctaLabel: "Acil Servisi Ara",
  },
  servicesHeading: "Kartal Genelinde Sunduğumuz Tesisat Hizmetleri",
  servicesLead:
    "Evinizde veya iş yerinizde meydana gelen tüm tesisat arızalarına modern cihazlar ve profesyonel ustalıkla kalıcı çözümler üretiyoruz.",
  services: [
    {
      id: "tikaniklik",
      title: "Kartal Kırmadan Tıkanıklık Açma",
      description:
        "Lavabo, tuvalet, mutfak ve ana gider tıkanıklıklarını kırmadan robot cihaz ve spiral yaylı makinelerle hızla açıyoruz.",
      serviceHref: "/hizmetler/tikaniklik-acma",
      badge: "Robotlu & Kameralı",
    },
    {
      id: "su-kacagi",
      title: "Kartal Su Kaçağı Tespiti",
      description:
        "Fayansları kırmadan termal kamera ve akustik dinleme dedektörleri ile gizli boru patlaklarını noktasal olarak tespit ediyoruz.",
      serviceHref: "/hizmetler/su-kacagi-tespiti",
      badge: "Noktasal Tespit",
    },
    {
      id: "su-tesisati",
      title: "Kartal Sıhhi Tesisat & Boru Tamiri",
      description:
        "PPRC temiz su borusu kaynakları, pimaş atık su hattı değişimi, musluk, batarya, vana montaj ve arıza onarımları.",
      serviceHref: "/hizmetler/su-tesisati",
      badge: "Aynı Gün Servis",
    },
    {
      id: "gomme-rezervuar",
      title: "Kartal Gömme Rezervuar & Klozet Tamiri",
      description:
        "Geberit, VitrA, Grohe, Serel ve tüm markaların şamandıra, boşaltma grubu ve su sızdırma problemlerine kırmadan müdahale.",
      serviceHref: "/hizmetler/gomme-rezervuar",
      badge: "Orijinal Parça",
    },
    {
      id: "petek-bakimi",
      title: "Kartal Petek Temizliği & Isıtma Tesisatı",
      description:
        "Özel makineler ve tesisat koruyucu ilaçlarla peteklerdeki kireç ve çamuru temizleyerek ısı verimini artırıyoruz.",
      serviceHref: "/hizmetler/petek-bakimi",
      badge: "Tasarruflu Isınma",
    },
    {
      id: "dogalgaz",
      title: "Kartal Doğalgaz & Kombi Tesisatı",
      description:
        "Doğalgaz iç hat çekimi, ocak-kombi bağlantıları, sızdırmazlık kontrolleri ve vana montajında güvenli standartlar.",
      serviceHref: "/hizmetler/dogalgaz-tesisati",
      badge: "Yetkili & Güvenli",
    },
  ],
  neighborhoodsHeading: "Kartal'ın Tüm Mahallelerinde 7/24 Hizmetinizdeyiz",
  neighborhoodsLead:
    "Gezici mobil servis araçlarımızla Kartal'ın her noktasına 30-45 dakika içinde ulaşıyoruz. Hiçbir servis ücreti sürprizi olmadan şeffaf çalışıyoruz.",
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
      id: "hizli",
      title: "Hızlı Mobil Servis",
      description:
        "Kartal'ın tüm mahallelerine 30-45 dakika içinde hızlı ulaşım sağlayan nöbetçi mobil ekipler.",
    },
    {
      id: "kirilmadan",
      title: "Kırmadan Cihazla Tespit",
      description:
        "Gereksiz kırma ve moloz masrafı çıkarmadan termal kamera ve kameralı robot sistemlerle net tespit.",
    },
    {
      id: "seffaf",
      title: "Şeffaf Fiyatlandırma",
      description:
        "İşleme başlamadan önce arızayı ve uygulanacak ücreti netleştirir, sonradan ek maliyet çıkarmayız.",
    },
    {
      id: "usta",
      title: "Deneyimli & Belgeli Ustalar",
      description:
        "Tesisat alanında yılların tecrübesine sahip, dürüst ve işine özen gösteren uzman kadro.",
    },
    {
      id: "temiz",
      title: "Temiz ve Düzenli Teslim",
      description:
        "Evinizde çalışırken yaşam alanınızı korur, onarım sonrasında çalışma alanını temiz teslim ederiz.",
    },
    {
      id: "garanti",
      title: "İşçilik Garantisi",
      description:
        "Yaptığımız tamir, montaj ve tesisat yenileme işlemlerinin arkasında durur, garanti veririz.",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "Bizi Arayın veya Yazın",
      description:
        "Telefon veya WhatsApp ile arıza durumunu ve adresinizi iletin; hemen uygun ustayı yönlendirelim.",
      icon: "phone",
    },
    {
      step: 2,
      title: "30-45 Dk İçinde Adresteyiz",
      description:
        "Kartal bölgesindeki tam donanımlı mobil servis aracımızla kapınıza gelip yerinde inceliyoruz.",
      icon: "person",
    },
    {
      step: 3,
      title: "Cihazla Teşhis ve Net Fiyat",
      description:
        "Kırmadan kameralı veya akustik inceleme yapıp durumu açıkça anlatıyor ve onayınızı alıyoruz.",
      icon: "wrench",
    },
    {
      step: 4,
      title: "Temiz Onarım ve Test",
      description:
        "Onarımı tamamlayıp su akış ve sızdırmazlık testlerini yaparak sistemi sorunsuz teslim ediyoruz.",
      icon: "wrench",
    },
  ],
  reels: fieldWorkReels.slice(0, 4),
  reviews: lpGoogleReviews.slice(0, 4),
  faqs: [
    {
      question: "Kartal'da servis süreniz ne kadardır?",
      answer:
        "Kartal merkez, Cevizli, Soğanlık, Yakacık ve Uğur Mumcu dahil tüm mahallelere ortalama 30 ila 45 dakika içinde mobil servis aracımızla ulaşıyoruz. Acil su baskını veya boru patlamalarında öncelikli yönlendirme yapılır.",
    },
    {
      question: "Kartal'da kırmadan su kaçağı tespiti nasıl yapılır?",
      answer:
        "Akustik dinleme kulaklıkları ve yüksek çözünürlüklü termal kameralar kullanarak su kaçağının boru üzerindeki tam noktasını tespit ediyoruz. Fayans veya duvarları gereksiz yere kırmaz, yalnızca kaçağın olduğu 1-2 fayanslık alanda noktasal onarım yaparız.",
    },
    {
      question: "Tıkanıklık açma işleminde fayans veya pimaş kırılır mı?",
      answer:
        "Hayır, özel robotik helezon yaylı makinelerimiz gider borusu içinden ilerleyerek tıkanıklığa neden olan yağ, kireç, bez veya yabancı cisimleri parçalar veya geri çeker. Ardından boru içi kamera ile hat kontrol edilir; hiçbir kırma işlemi yapılmaz.",
    },
    {
      question: "Kartal'da hafta sonu ve gece acil nöbetçi tesisatçınız var mı?",
      answer:
        "Evet, Pendik Gümüş Tesisat olarak Kartal ve çevre ilçelerde 7 gün 24 saat kesintisiz hizmet vermekteyiz. Gece saatlerinde meydana gelen boru patlaması veya taşma gibi acil durumlarda bizi hemen arayabilirsiniz.",
    },
    {
      question: "Kartal tesisatçı servis ve tamir ücretleri nasıl belirlenir?",
      answer:
        "Arızanın niteliği (örneğin kırmadan kaçak tespiti, robotla tuvalet tıkanıklığı açma, musluk değişimi vb.) yerinde incelenir ve işe başlamadan önce net fiyat tarafınıza iletilir. Onayınız olmadan hiçbir ek maliyet çıkarılmaz.",
    },
    {
      question: "Kartal'ın hangi mahallelerine geliyorsunuz?",
      answer:
        "Atalar, Cevizli, Esentepe, Karlıktepe, Kordonboyu, Orhantepe, Petrol-İş, Soğanlık, Topselvi, Uğur Mumcu, Yakacık, Yalı ve Yunus dahil olmak üzere Kartal'ın istisnasız tüm mahallelerine hizmet veriyoruz.",
    },
  ],
  bottomCta: {
    title: "Kartal'da Güvenilir & Hızlı Tesisatçı mı Arıyorsunuz?",
    lead:
      "Aynı gün servis ve 7/24 acil müdahale için hemen arayın veya WhatsApp'tan konum gönderin. Uzman ekibimiz hemen yola çıksın.",
  },
};
