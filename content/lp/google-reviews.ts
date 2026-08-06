/** Shared Google Business Profile meta + curated reviews (from Maps, not API). */
export const lpGoogleReviewsMeta = {
  ratingAverage: 5,
  /** Update to match the live Google Maps profile count. */
  reviewCount: 85,
  mapsUrl: "https://maps.app.goo.gl/WDT3AQEKv6f13i7T6",
} as const;

export type LpGoogleReview = {
  id: string;
  author: string;
  text: string;
  rating: number;
};

/** Real Google reviews (author + text from Business Profile screenshots). */
export const lpGoogleReviews: readonly LpGoogleReview[] = [
  {
    id: "sezer",
    author: "Sezer",
    text: "Verdiğiniz emeklerden dolayı teşekkür ederim yaparız dediniz ve yaptınız sıkıntı bir yerde olmasına rağmen bütün hatları değiştirdiler emeğinize sağlık bol kazançlarınız olsun",
    rating: 5,
  },
  {
    id: "nuray-karadag",
    author: "Nuray KARADAĞ",
    text: "Yaklaşık 3 senedir duvarımızda banyodan kaynaklandığını düşündüğümüz bir kabarma sorunumuz vardı. Kaç usta çağırdıysak aynı şeyi yapıp biz yaparız deyip iş zor gelince uygunluğumuz yok deyip gelmediler. Muammer bey ile 24 Nisan'da görüştük, bizim isteğimiz ile 28 Nisan'da işe başladı, 30 Nisan'da banyomuz tertemiz teslim edildi. Ve yaptıkları işin arkasında olduklarından garantisini de veriyorlar, bence en önemlisi bu. Bu 3 günde banyo yerleri, duşakabin, klozet her yer değişti. Bilal usta sağolsun gerçekten işinin ehli; olur olana olur, olmayacak şeye bu olmaz diyor. Olmaz demesinin nedeni erinmek ya da işin zor olması değil, kullanış açısından olmaz diyor. Bir gün geç gelmediler; hatta saatini biz ötelemek istedik ama tam saatinde evdeydiler. Efendiliğiniz, emeğiniz ile verilen her bir kuruş helali hoş olsun. Evde tadilat tamirat işi sayenizde zulüm olmaktan çıktı :)",
    rating: 5,
  },
  {
    id: "sadi-benli",
    author: "Sadi Benli",
    text: "Pendik Su kaçak tespiti için geldiler. Cihazla çok kısa sürede tespit yapıldı ve gerekli tadilat yapıldı. Oldukça profesyonel bir çalışma sistemleri var. İşlerini özenle yapıyorlar",
    rating: 5,
  },
  {
    id: "recep-hancer",
    author: "Recep Hançer",
    text: "Klozet tıkanıklığı için çağırdım ustalar gelip lavabomu robotlu cihazlarla açıp kamerayla gösterdiler ellerine sağlık teşekkür ederim",
    rating: 5,
  },
  {
    id: "yasemin-eskikoy",
    author: "Yasemin Eskiköy",
    text: "Banyomuzun yenilenme sürecinde tesisat altyapısından son dokunuşlara kadar sergiledikleri üstün performans için Gümüş Teknik firmasına ve tüm ekibine içtenlikle teşekkür ederim. Tesisat gibi hata kabul etmeyen, teknik uzmanlık gerektiren bir konuda gösterdikleri hassasiyet ve modern çözümleri gerçekten takdire şayan. Sadece işlerini yapmakla kalmayıp, sürecin her aşamasında bizi bilgilendirmeleri, temiz çalışma prensipleri ve en önemlisi vaat ettikleri sürede işi teslim etmeleri büyük bir profesyonellik örneğiydi. Titiz işçilikleri sayesinde banyomuz hem estetik hem de fonksiyonel olarak beklediğimizden çok daha güzel bir hale geldi. Güvenin ön planda olduğu bu sektörde, Gümüş Teknik gibi işinin arkasında duran bir firma ile çalışmak büyük bir ayrıcalık. Evini veya iş yerini profesyonel ellere teslim etmek isteyen herkese kendilerini tereddütsüz tavsiye ediyorum. Emekleriniz için tekrar teşekkürler!",
    rating: 5,
  },
  {
    id: "yavuz-ince",
    author: "Yavuz İnce",
    text: "Binamızda ana mutfak gideri tıkanmıştı zor durumda kalmıştık saat geç olmasına rağmen ustalar sözünde ve işini temiz yaparak bizi memnun ettiler gümüş teknik ekibi ve muammer beye teşekkür ederim",
    rating: 5,
  },
] as const;
