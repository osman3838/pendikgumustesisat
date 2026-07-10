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
      "Pendik, Kartal ve Tuzla'da kameralı su kaçağı tespiti. Duvar ve fayans kırmadan noktasal arıza bulma.",
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
      "Pendik, Kartal ve Tuzla'da kırmadan tıkanıklık açma. Lavabo, tuvalet ve gider hatlarında robotik müdahale.",
    body: [
      "Lavabo, tuvalet, duş gideri ve ana hat tıkanıklıkları günlük hayatı zorlaştırır. Geleneksel yöntemler çoğu zaman geçici çözüm sunar; biz ise kameralı inceleme ve robotik cihazlarla tıkanıklığın kaynağını bularak kalıcı müdahale yapıyoruz.",
      "Kırmadan tıkanıklık açma yöntemimiz duvar, fayans ve zemin kaplamalarınıza zarar vermeden hattı temizler. Aynı gün servis imkânıyla Pendik, Kartal ve Tuzla genelinde hızlı destek sağlıyoruz.",
    ],
  },
  {
    slug: "gomme-rezervuar",
    title: "Gömme Rezervuar",
    shortDescription: "Duvar kırmadan tamir ve bakım.",
    metaDescription:
      "Gömme rezervuar tamiri ve bakımı — Pendik, Kartal, Tuzla. Duvar kırmadan arıza giderme.",
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
      "Tesisat arızaları, musluk tamiri ve kaçak onarımı — Pendik, Kartal, Tuzla. Kalıcı ve garantili çözüm.",
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
      "Petek bakımı ve temizliği — Pendik, Kartal, Tuzla. Isıtma verimliliğini artırın.",
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
      "7/24 acil tesisat servisi — Pendik, Kartal, Tuzla. Su baskını, patlak boru ve acil tıkanıklık müdahalesi.",
    body: [
      "Su baskını, patlak boru, ani tıkanıklık veya acil kaçak durumlarında 7/24 ulaşabileceğiniz ekibimizle hızlı müdahale sağlıyoruz. Pendik, Kartal ve Tuzla bölgelerinde aynı gün servis imkânı sunuyoruz.",
      "Acil durumlarda WhatsApp üzerinden bize ulaşarak konumunuzu ve sorununuzu iletebilir; en kısa sürede adresinize yönlendirme yapılır.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, limit = 3): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
