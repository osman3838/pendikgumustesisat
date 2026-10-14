import type { LocationConfig } from "./types";
import { lpGoogleReviews } from "@/content/lp/google-reviews";
import { fieldWorkReels } from "@/content/field-work-reels";

export const tuzlaLocationConfig: LocationConfig = {
  slug: "tuzla-tesisatci",
  path: "/tuzla-tesisatci",
  district: "Tuzla",
  meta: {
    title: "Tuzla Tesisatçı — 7/24 Tuzla Su Tesisatı & Kırmadan Tıkanıklık Açma",
    description:
      "Tuzla tesisatçı: Kırmadan termal kameralı su kaçağı tespiti, robotla gider ve tuvalet açma, sıhhi tesisat onarımı. 30-45 dakikada Tuzla geneli acil servis.",
  },
  whatsAppMessage:
    "Merhaba, Tuzla'da tesisat hizmeti için yazıyorum. Acil usta desteği ve fiyat bilgisi alabilir miyim?",
  hero: {
    title: "Tuzla Tesisatçı & 7/24 Acil Su Tesisat Servisi",
    lead:
      "Tuzla Marina, Aydınlı, Postane, Yayla, İçmeler ve tüm mahallelerde kırmadan kameralı tıkanıklık açma, cihazla su kaçağı tespiti ve sıhhi tesisat tamiri. 30-45 dakikada kapınızdayız.",
    image: {
      src: "/media/lp/su-tesisati/hero.jpg",
      alt: "Tuzla su tesisatçısı ve lavabo altında onarım yapan Gümüş Tesisat ustası",
      width: 1024,
      height: 721,
    },
    badges: [
      { id: "clock", label: "30-45 Dk Servis" },
      { id: "shield", label: "Kırmadan Tespit" },
      { id: "sparkle", label: "Temiz & Garantili İşçilik" },
      { id: "person", label: "Deneyimli Tesisat Ustası" },
    ] as const,
  },
  emergency: {
    title: "Tuzla 7/24 Acil Su Tesisatçısı",
    lead:
      "Patlak boru, daire içi su sızıntısı, taşan klozet ve acil gider tıkanıklıklarında Tuzla nöbetçi gezici ekibimiz 7/24 anında yola çıkar.",
    ctaLabel: "Acil Servisi Ara",
  },
  servicesHeading: "Tuzla Genelinde Profesyonel Tesisat Hizmetlerimiz",
  servicesLead:
    "Konut, villa, site, iş yeri ve işletmelerde meydana gelen tüm su tesisatı sorunlarına modern teknolojik cihazlar ve garantili işçilikle müdahale ediyoruz.",
  services: [
    {
      id: "tikaniklik",
      title: "Tuzla Robotla Tıkanıklık Açma",
      description:
        "Mutfak lavabosu, banyo gideri, tuvalet ve bina ana logar hatlarını kırmadan robotik helezon yaylı makinelerle temizleyip açıyoruz.",
      serviceHref: "/hizmetler/tikaniklik-acma",
      badge: "Kırmadan Robotla",
    },
    {
      id: "su-kacagi",
      title: "Tuzla Su Kaçağı Tespiti",
      description:
        "Termal kamera ve akustik frekans dinleme cihazları ile borulardaki gizli su kaçaklarını fayans kırmadan noktasal tespit ediyoruz.",
      serviceHref: "/hizmetler/su-kacagi-tespiti",
      badge: "Kameralı & Akustik",
    },
    {
      id: "su-tesisati",
      title: "Tuzla Sıhhi Tesisat & Boru Tamiri",
      description:
        "Patlak su borusu onarımı, batarya, musluk ve vana değişimi, mutfak-banyo tesisatı yenileme ve komple hat montajı.",
      serviceHref: "/hizmetler/su-tesisati",
      badge: "Aynı Gün Servis",
    },
    {
      id: "gomme-rezervuar",
      title: "Tuzla Gömme Rezervuar & Klozet Onarımı",
      description:
        "Geberit, VitrA, Grohe, Siamp vb. gömme rezervuarlarda sürekli su akıtma, dolum veya buton arızalarını kırmadan gideriyoruz.",
      serviceHref: "/hizmetler/gomme-rezervuar",
      badge: "Kırmadan Onarım",
    },
    {
      id: "petek-bakimi",
      title: "Tuzla Petek Temizliği & Isıtma Bakımı",
      description:
        "Çift yönlü yıkama makineleri ve özel tesisat kimyasalları ile peteklerin alt kısımlarındaki çamurlaşmayı temizleyerek yakıt tasarrufu sağlıyoruz.",
      serviceHref: "/hizmetler/petek-bakimi",
      badge: "Yüksek Isı Verimi",
    },
    {
      id: "dogalgaz",
      title: "Tuzla Doğalgaz & Kombi Tesisatı",
      description:
        "Doğalgaz boru hattı montajı, ocak ve kombi esnek bağlantıları, gaz kaçak tespiti ve vana kontrollerinde güvenilir standartlar.",
      serviceHref: "/hizmetler/dogalgaz-tesisati",
      badge: "Güvenli Standart",
    },
  ],
  neighborhoodsHeading: "Tuzla'nın Tüm Mahallelerinde 7/24 Hizmetinizdeyiz",
  neighborhoodsLead:
    "Tuzla Sahil, Marina, Aydınlı, Postane, İçmeler ve Tepeören dahil tüm semtlere donanımlı araçlarımızla 30-45 dakikada ulaşıyoruz.",
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
      id: "hizli",
      title: "30-45 Dk Ulaşım",
      description:
        "Tuzla'nın hem sahil hem iç kesimlerine hızla ulaşan mobil nöbetçi tesisat ekipleri.",
    },
    {
      id: "kirilmadan",
      title: "Kırmadan Çözüm Odaklı",
      description:
        "Evinizi şantiyeye çevirmeden kameralı robot ve akustik cihazlarla noktasal müdahale.",
    },
    {
      id: "seffaf",
      title: "Önceden Net Fiyat",
      description:
        "Yapılacak işi yerinde inceler, sürpriz veya gizli maliyet olmadan açıkça fiyatlandırırız.",
    },
    {
      id: "usta",
      title: "Deneyimli Tesisat Ustaları",
      description:
        "Yıllardır bölgede hizmet veren, temiz ve kaliteli malzeme kullanan ehil ustalar.",
    },
    {
      id: "temiz",
      title: "Temiz Çalışma Prensibi",
      description:
        "Onarım esnasında çevreye zarar vermez, iş bitiminde çalışma alanını tertemiz bırakırız.",
    },
    {
      id: "garanti",
      title: "Garantili Hizmet",
      description:
        "Tüm onarım, parça değişimi ve tesisat işlerimizde memnuniyet ve işçilik güvencesi sunarız.",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "İletişime Geçin",
      description:
        "Telefon veya WhatsApp üzerinden arıza detayını ve Tuzla'daki konumunuzu paylaşın.",
      icon: "phone",
    },
    {
      step: 2,
      title: "Mobil Servis Yola Çıkar",
      description:
        "Tuzla nöbetçi gezici ekibimiz 30-45 dakika içinde tam teçhizatlı olarak adresinize ulaşır.",
      icon: "person",
    },
    {
      step: 3,
      title: "Kırmadan İnceleme & Onay",
      description:
        "Cihazlarla arızanın kaynağını noktasal olarak belirler, işlem ve maliyet bilgisini onayınıza sunarız.",
      icon: "wrench",
    },
    {
      step: 4,
      title: "Usta İşi Onarım & Teslim",
      description:
        "Gerekli tamiratı tamamlar, testleri gerçekleştirir ve sorunsuz şekilde teslim ederiz.",
      icon: "wrench",
    },
  ],
  reels: fieldWorkReels.slice(0, 4),
  reviews: lpGoogleReviews.slice(0, 4),
  faqs: [
    {
      question: "Tuzla'da servis süreniz ne kadar sürer?",
      answer:
        "Tuzla Marina, Postane, Yayla, Aydınlı, Aydıntepe, İçmeler ve Tepeören dahil tüm noktalara gezici mobil araçlarımızla ortalama 30-45 dakika içinde varıyoruz.",
    },
    {
      question: "Tuzla'da kırmadan su kaçağı tespiti yapıyor musunuz?",
      answer:
        "Evet, en son teknoloji akustik dinleme mikrofonları ve termal kameralar kullanarak kaçak noktasını milimetrik tespit ediyoruz. Duvarları ya da fayansları boydan boya kırmadan yalnızca tek fayanslık alanda onarım yapıyoruz.",
    },
    {
      question: "Tuzla'da robotla tıkanıklık açma güvenli midir?",
      answer:
        "Kesinlikle güvenlidir. Kullandığımız robotik spiral makineler pimaş borularının iç çeperine zarar vermeden yalnızca tıkanıklığa neden olan atıkları temizler. Sonrasında kameralı kontrolle hattın açıldığı doğrulanır.",
    },
    {
      question: "Tuzla sanayi, fabrika veya iş yerlerine tesisat hizmetiniz var mı?",
      answer:
        "Evet, daire ve villaların yanı sıra Tuzla Deri OSB, Birlik OSB, Orhanlı ve İçmeler bölgesindeki iş yerleri ve işletmelerin sıhhi tesisat, ana hat tıkanıklık ve yangın/kullanım suyu boru arızalarına da profesyonel hizmet veriyoruz.",
    },
    {
      question: "Tuzla tesisatçı fiyatları nasıl belirlenir?",
      answer:
        "Tesisat arızasının türü, müdahale yöntemi ve gerekli parça ihtiyacı yerinde netleşir. Ustamız işleme başlamadan önce net fiyat verir, onayınız olmadan hiçbir işlem yapılmaz.",
    },
    {
      question: "Gece veya hafta sonu acil çağrı yapabilir miyiz?",
      answer:
        "Evet, 7/24 acil tesisat servisimiz Tuzla genelinde kesintisiz çalışmaktadır. Patlayan boru, su baskını veya taşan gider gibi acil durumlarda istediğiniz saatte bizi arayabilirsiniz.",
    },
  ],
  bottomCta: {
    title: "Tuzla'da Güvenilir Tesisat Ustasına mı İhtiyacınız Var?",
    lead:
      "Aynı gün servis ve 7/24 acil destek için hemen bizi arayın veya WhatsApp'tan konum atın, ustamız kapınıza gelsin.",
  },
};
