export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  body: string[];
};

export const services: Service[] = [
  {
    slug: "su-kacagi-tespiti",
    title: "Su Kaçağı Tespiti",
    shortDescription:
      "Kırmadan, kameralı sistemlerle noktasal tespit.",
    metaDescription:
      "Pendik, Kurtköy, Kartal ve Tuzla'da kameralı su kaçağı tespiti. Duvar ve fayans kırmadan noktasal arıza bulma.",
    body: [
      "Su kaçağı şüphesi duvar nemlenmesi, fatura artışı veya zemin altında ıslaklık gibi belirtilerle kendini gösterir. Pendik Gümüş Tesisat olarak gelişmiş kameralı görüntüleme ve akustik dinleme ekipmanlarıyla kaçağın yerini kırmadan tespit ediyoruz.",
      "Noktasal tespit sayesinde gereksiz kazı ve duvar kırma işlemlerinden kaçınılır; hem maliyet hem de tamir süresi önemli ölçüde azalır. Tespit sonrası kalıcı onarım için size net bir çözüm planı sunuyoruz.",
    ],
  },
  {
    slug: "tikaniklik-acma",
    title: "Tıkanıklık Açma",
    shortDescription:
      "Lavabo, tuvalet ve giderlerde kırmadan çözüm.",
    metaDescription:
      "Pendik, Kurtköy, Kartal ve Tuzla'da kırmadan tıkanıklık açma. Lavabo, tuvalet ve gider hatlarında robotik müdahale.",
    body: [
      "Lavabo, tuvalet, duş gideri ve ana hat tıkanıklıkları günlük hayatı zorlaştırır. Geleneksel yöntemler çoğu zaman geçici çözüm sunar; biz ise kameralı inceleme ve robotik cihazlarla tıkanıklığın kaynağını bularak kalıcı müdahale yapıyoruz.",
      "Kırmadan tıkanıklık açma yöntemimiz duvar, fayans ve zemin kaplamalarınıza zarar vermeden hattı temizler. Aynı gün servis imkânıyla Pendik, Kurtköy, Kartal ve Tuzla genelinde hızlı destek sağlıyoruz.",
    ],
  },
  {
    slug: "gomme-rezervuar",
    title: "Gömme Rezervuar",
    shortDescription: "Duvar kırmadan tamir ve bakım.",
    metaDescription:
      "Gömme rezervuar tamiri ve bakımı — Pendik, Kurtköy, Kartal, Tuzla. Duvar kırmadan arıza giderme.",
    body: [
      "Gömme rezervuar arızaları su kaçağı, sürekli akma veya basma mekanizması sorunlarıyla kendini belli eder. Deneyimli ekibimiz gömme rezervuar sistemlerinde duvar kırmadan müdahale ederek hızlı tamir ve bakım hizmeti sunar.",
      "Yedek parça değişimi, mekanizma ayarı ve periyodik bakım işlemlerini profesyonel ekipmanlarla gerçekleştiriyoruz. Böylece banyo ve WC alanlarınız minimum müdahaleyle tekrar sorunsuz çalışır.",
    ],
  },
  {
    slug: "tesisat-arizalari",
    title: "Tesisat Arızaları",
    shortDescription:
      "Musluk ve kaçak sorunlarına kalıcı çözüm.",
    metaDescription:
      "Tesisat arızaları, musluk tamiri ve kaçak onarımı — Pendik, Kurtköy, Kartal, Tuzla. Kalıcı ve garantili çözüm.",
    body: [
      "Musluk damlatması, vanaların arızalanması, boru bağlantı kaçakları ve genel tesisat sorunları zamanla büyük hasarlara yol açabilir. Pendik Gümüş Tesisat olarak tüm tesisat arızalarında kalıcı çözüm odaklı çalışıyoruz.",
      "Arıza tespitinden onarıma kadar süreci şeffaf yönetiyor; gereksiz parça değişiminden kaçınarak ihtiyacınıza uygun, uzun ömürlü çözümler sunuyoruz.",
    ],
  },
  {
    slug: "petek-bakimi",
    title: "Petek Bakımı",
    shortDescription: "Isıtma sistemlerinde verimli bakım.",
    metaDescription:
      "Petek bakımı ve temizliği — Pendik, Kurtköy, Kartal, Tuzla. Isıtma verimliliğini artırın.",
    body: [
      "Peteklerin düzenli bakımı ısınma verimliliğini artırır, enerji maliyetlerini düşürür ve sistemin ömrünü uzatır. Temizlik, hava alma ve bağlantı kontrollerini profesyonel ekipmanlarla gerçekleştiriyoruz.",
      "Kış sezonu öncesi petek bakımı yaptırarak soba ve kombi sisteminizin eşit ısıtmasını sağlayabilir, soğuk petek sorunlarının önüne geçebilirsiniz.",
    ],
  },
  {
    slug: "acil-servis",
    title: "Acil Servis",
    shortDescription: "7/24 hızlı müdahale.",
    metaDescription:
      "7/24 acil tesisat servisi — Pendik, Kurtköy, Kartal, Tuzla. Su baskını, patlak boru ve acil tıkanıklık müdahalesi.",
    body: [
      "Su baskını, patlak boru, ani tıkanıklık veya acil kaçak durumlarında 7/24 ulaşabileceğiniz ekibimizle hızlı müdahale sağlıyoruz. Pendik, Kurtköy, Kartal ve Tuzla bölgelerinde aynı gün servis imkânı sunuyoruz.",
      "Acil durumlarda WhatsApp üzerinden bize ulaşarak konumunuzu ve sorununuzu iletebilir; en kısa sürede adresinize yönlendirme yapılır.",
    ],
  },
  {
    slug: "kombi-bakim-onarim",
    title: "Kombi Bakım ve Onarım",
    shortDescription:
      "Tüm marka ve modellerde kombi bakımı, arıza tespiti ve onarımı.",
    metaDescription:
      "Kombi bakım ve onarım — Pendik, Kurtköy, Kartal, Tuzla. Tüm marka ve modellerde arıza tespiti, periyodik bakım ve onarım.",
    body: [
      "Kombinizin düzenli bakımı yakıt verimliliğini artırır, arıza riskini azaltır ve cihaz ömrünü uzatır. Pendik Gümüş Tesisat olarak tüm marka ve modellerde periyodik bakım, arıza tespiti ve onarım hizmeti sunuyoruz.",
      "Basınç düşüklüğü, su akıtma, ateşleme sorunları ve ısınma performansı kayıpları gibi kombi arızalarında hızlı müdahale ediyor; gerekli parça değişimlerini şeffaf fiyatlandırmayla gerçekleştiriyoruz.",
    ],
  },
  {
    slug: "su-tesisati",
    title: "Su Tesisatı",
    shortDescription:
      "Pendik–Kurtköy'de su tesisatı kurulum, tamir ve bakım.",
    metaDescription:
      "Su tesisatı kurulum, tamir ve bakım — Pendik, Kurtköy, Kartal, Tuzla. Boru hattı, bağlantı ve montaj işleri.",
    body: [
      "Yeni bina tesisatı, tadilat sonrası boru döşeme, musluk ve bağlantı montajı ile mevcut su hatlarının onarımı gibi tüm su tesisatı işlerinde profesyonel hizmet sunuyoruz. Pendik–Kurtköy ve çevre bölgelerde hızlı keşif ve uygulama sağlıyoruz.",
      "Kaliteli malzeme kullanımı ve düzgün montaj ile kaçak ve arıza riskini en aza indiriyoruz. Mutfak, banyo ve genel su tesisatı ihtiyaçlarınız için WhatsApp üzerinden bize ulaşabilirsiniz.",
    ],
  },
  {
    slug: "dogalgaz-tesisati",
    title: "Doğalgaz Tesisatı",
    shortDescription:
      "Pendik–Kurtköy'de doğalgaz iç tesisat ve tadilat işleri.",
    metaDescription:
      "Doğalgaz iç tesisat ve tadilat — Pendik, Kurtköy, Kartal, Tuzla. Hat çekimi, bağlantı ve güvenli montaj.",
    body: [
      "Doğalgaz iç tesisatı, hat çekimi, cihaz bağlantısı ve tadilat sonrası tesisat düzenlemesi gibi işlerde güvenlik standartlarına uygun çalışıyoruz. Pendik–Kurtköy ve çevre bölgelerde iç tesisat ve tadilat ihtiyaçlarınıza profesyonel çözüm sunuyoruz.",
      "Tesisat hattı kontrolü, bağlantı montajı ve cihaz devreye alma süreçlerini titizlikle yürütüyor; güvenli ve düzenli bir doğalgaz tesisatı için keşif ve teklif talebinde bize ulaşabilirsiniz.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, limit = 3): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
