export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  /** Opening H2 for the main content block */
  introHeading: string;
  intro: string[];
  processHeading: string;
  processSteps: string[];
  faq: ServiceFaq[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "su-kacagi-tespiti",
    title: "Su Kaçağı Tespiti",
    shortDescription:
      "Kırmadan, kameralı sistemlerle noktasal kaçak tespiti.",
    metaDescription:
      "Pendik su kaçağı tespiti: kameralı ve akustik yöntemlerle duvar kırmadan noktasal tespit. Kurtköy, Kartal ve Tuzla'da aynı gün destek.",
    introHeading: "Su kaçağı şüphesi ne zaman oluşur?",
    intro: [
      "Fatura ani yükseldiyse, duvarda nem veya boya kabarması varsa, zeminde ıslaklık veya komşu dairede sızıntı şikâyeti duyuyorsanız gizli bir su kaçağı olabilir. Körleme kırma çoğu zaman gereksiz hasar ve ek maliyet üretir; önce kaçağın yerini netleştirmek gerekir.",
      "Pendik Gümüş Tesisat olarak Pendik, Kurtköy, Kartal ve Tuzla'da kameralı görüntüleme ve akustik dinleme ile kaçak noktasını kırmadan tespit ediyoruz. Amaç, fayans veya duvarı geniş alanlarda sökmeden arızayı bulmak ve onarım planını netleştirmek.",
      "Tespit sonrası size durumu açıkça anlatıyoruz: kaçak nerede, nasıl onarılacak, hangi adımlar gerekir. İsterseniz onarımı da aynı süreçte planlarız.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "Ön görüşme — WhatsApp veya telefonla belirtileri (nem, fatura, ses, koku) ve kaçak şüphesinin olduğu alanı netleştiriyoruz.",
      "Yerinde inceleme — Adreste görsel kontrol ve gerekli ölçümlerle başlıyoruz.",
      "Kameralı / akustik tespit — Hat ve yapıya uygun yöntemle kaçak noktasını belirliyoruz; mümkün olduğunca kırmadan ilerliyoruz.",
      "Sonuç ve plan — Tespiti size net anlatıyor; onarım seçeneklerini şeffaf şekilde paylaşıyoruz.",
      "Onarım yönlendirmesi — Gerekirse tesisat onarımı veya gömme rezervuar gibi ilgili hizmete geçiyoruz.",
    ],
    faq: [
      {
        question: "Pendik'te su kaçağı tespiti kırmadan yapılır mı?",
        answer:
          "Çoğu durumda kameralı ve akustik yöntemlerle duvar/fayans kırmadan noktasal tespit hedeflenir. Erişim veya hat tipine göre istisna olabilir; yerinde netleşir.",
      },
      {
        question: "Su kaçağı mı yoksa yoğuşma / nem mi?",
        answer:
          "Belirtiler benzer görünebilir. Tespitin amacı kaynağı ayırt etmek ve gereksiz müdahaleden kaçınmaktır.",
      },
      {
        question: "Tespit sonrası onarım da yapıyor musunuz?",
        answer:
          "Evet — tespit sonrası kalıcı onarım için çözüm planı sunuyoruz. Kapsam arızaya göre değişir.",
      },
      {
        question: "Kurtköy, Kartal, Tuzla'dan da geliyor musunuz?",
        answer:
          "Evet. Hizmet bölgemiz Pendik, Kurtköy, Kartal ve Tuzla.",
      },
      {
        question: "Ne kadar sürer?",
        answer:
          "Adres, erişim ve kaçak tipine göre değişir. Ön bilgi sonrası süre hakkında daha net konuşabiliriz.",
      },
      {
        question: "Fiyat ne kadar?",
        answer:
          "Kaçağın yeri, erişim ve kullanılan yönteme göre değişir. Sabit liste fiyatı yok; keşif / ön bilgi sonrası netleşir.",
      },
    ],
    relatedSlugs: [
      "tikaniklik-acma",
      "tesisat-arizalari",
      "gomme-rezervuar",
    ],
  },
  {
    slug: "tikaniklik-acma",
    title: "Tıkanıklık Açma",
    shortDescription:
      "Lavabo, tuvalet ve gider tıkanıklıklarında kırmadan, kameralı müdahale.",
    metaDescription:
      "Pendik tıkanıklık açma: lavabo, tuvalet ve ana hat tıkanıklıklarında kırmadan çözüm. Kurtköy, Kartal ve Tuzla'da aynı gün destek.",
    introHeading: "Pendik'te tıkanıklık açma — ne zaman çağırılmalı?",
    intro: [
      "Lavabo yavaş boşalıyor, tuvalet taşıyor veya duş gideri sürekli doluyorsa sorun çoğu zaman yüzeyde değil; hattın içinde birikir. Kimyasal dökmek veya körleme açmak geçici rahatlama verse de tıkanıklık kısa sürede geri gelir; bazen de hattı daha da daraltır.",
      "Pendik Gümüş Tesisat olarak Pendik, Kurtköy, Kartal ve Tuzla'da lavabo, tuvalet, mutfak gideri, duş gideri ve ana kolon tıkanıklıklarına kırmadan müdahale ediyoruz. Amaç, duvar veya fayansı sökmeden tıkanıklığın yerini bulmak ve hattı temizleyip yeniden akışa almak.",
      "Belirtiler arasında kötü koku, üst katlarda ortak tıkanma, bodrum veya şaftta su birikmesi ve yağ/atık kökenli yavaş akış da sık görülür. Erken müdahale, taşma ve su hasarını büyütmeden çözümü kolaylaştırır.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "İletişim ve ön bilgi — WhatsApp veya telefonla tıkanıklığın nerede olduğunu (lavabo, tuvalet, ana hat) ve aciliyeti netleştiriyoruz.",
      "Yerinde inceleme — Adreste hattı ve belirtileri kontrol ediyoruz; gerekiyorsa kameralı görüntüleme ile tıkanıklığın yerini ve nedenini belirliyoruz.",
      "Kırmadan müdahale — Robotik / mekanik açma ile tıkanıklığı gideriyoruz; mümkün olduğunca kaplama ve duvara zarar vermeden çalışıyoruz.",
      "Test ve kontrol — Açılış sonrası su akışını test ediyoruz; tekrar riski varsa sizinle net konuşuyoruz.",
      "Sonraki adım — Gerekirse su kaçağı tespiti veya tesisat onarımı gibi ilgili hizmete yönlendiriyoruz.",
    ],
    faq: [
      {
        question: "Pendik'te tıkanıklık açma aynı gün yapılır mı?",
        answer:
          "Çoğu lavabo, tuvalet ve gider tıkanıklığında aynı gün müdahale hedefliyoruz. Yoğunluk ve adrese göre süre değişebilir; WhatsApp'tan yazdığınızda güncel durumu netleştiririz.",
      },
      {
        question: "Kırmadan tıkanıklık açma ne demek?",
        answer:
          "Duvar, fayans veya zemin kaplamasını sökmeden, kameralı inceleme ve robotik/mekanik cihazlarla hattın içinden müdahale etmek demektir. Her durumda kırma gerekmez; amaç gereksiz yıkımı önlemektir.",
      },
      {
        question: "Kimyasal tıkanıklık açıcı kullanmalı mıyım?",
        answer:
          "Körleme kimyasal kullanımından kaçınıp tıkanıklığın kaynağını bulup temizlemek daha sağlıklı bir yaklaşımdır. Kimyasallar geçici rahatlama verse de hattı daraltabilir veya hasar riski yaratabilir.",
      },
      {
        question:
          "Tuvalet tıkanıklığı ile lavabo tıkanıklığı aynı mı?",
        answer:
          "Belirtiler benzer olsa da tıkanıklığın yeri ve nedeni farklı olabilir. Tuvalette yabancı cisim, lavaboda yağ ve kireç birikimi daha sık görülür; yöntem buna göre seçilir.",
      },
      {
        question:
          "Kurtköy, Kartal veya Tuzla'dan da geliyor musunuz?",
        answer:
          "Evet — hizmet bölgemiz Pendik, Kurtköy, Kartal ve Tuzla. Konumunuzu ilettiğinizde yönlendirme buna göre yapılır.",
      },
      {
        question: "Fiyat ne kadar?",
        answer:
          "Tıkanıklığın yeri, erişim ve müdahale türüne göre değişir. Sabit liste fiyatı paylaşmıyoruz; keşif / ön bilgi sonrası net bilgi veririz. WhatsApp'tan kısa açıklama yazmanız yeterli.",
      },
    ],
    relatedSlugs: [
      "su-kacagi-tespiti",
      "acil-servis",
      "tesisat-arizalari",
    ],
  },
  {
    slug: "gomme-rezervuar",
    title: "Gömme Rezervuar",
    shortDescription: "Duvar kırmadan gömme rezervuar tamiri ve bakım.",
    metaDescription:
      "Pendik gömme rezervuar tamiri: sürekli akan veya basmayan rezervuarlarda duvar kırmadan müdahale. Kurtköy, Kartal, Tuzla.",
    introHeading: "Gömme rezervuar arızası nasıl anlaşılır?",
    intro: [
      "Sürekli su sesi, rezervuarın dolmaması, basma tuşunun çalışmaması veya WC arkasında nem çoğu zaman gömme rezervuar mekanizmasından kaynaklanır. Duvarı baştan sökmek ilk seçenek olmamalıdır; birçok arıza servis kapağı üzerinden giderilebilir.",
      "Pendik, Kurtköy, Kartal ve Tuzla'da gömme rezervuar tamiri ve bakımında mümkün olduğunca kırmadan çalışıyoruz: mekanizma ayarı, conta/parça değişimi ve kaçak kontrolü. Amaç, banyoyu bozmadan rezervuarı tekrar sorunsuz çalıştırmak.",
      "Erken müdahale hem su israfını hem de duvar içinde büyüyen nem hasarını azaltır. Şüphedeyseniz körleme kırma yerine önce kontrol ettirmenizi öneririz.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "Belirti dinleme — Sürekli akma, basmama, yavaş dolma veya nem gibi şikâyeti netleştiriyoruz.",
      "Servis erişimi — Mümkünse rezervuar kapağından mekanizmaya ulaşıyoruz; gereksiz kırmadan kaçınıyoruz.",
      "Arıza giderme — Ayarı, conta veya ilgili parçayı kontrol edip gerekli müdahaleyi yapıyoruz.",
      "Test — Dolum, basma ve kaçak kontrolünü birlikte doğruluyoruz.",
      "Sonraki adım — Duvar içi hat şüphesi varsa su kaçağı tespiti ile devam edebiliriz.",
    ],
    faq: [
      {
        question:
          "Gömme rezervuar tamiri için duvar kırmak gerekir mi?",
        answer:
          "Çoğu arızada servis kapağı üzerinden müdahale edilir. Duvar içi hat veya erişim sorunu varsa durum yerinde netleşir.",
      },
      {
        question: "Rezervuar sürekli akıyor — ne olabilir?",
        answer:
          "Conta, şamandıra veya basma mekanizması sık nedenler arasındadır. Net teşhis yerinde yapılır.",
      },
      {
        question: "Hangi markalarda çalışıyorsunuz?",
        answer:
          "Birçok marka gömme rezervuar sisteminde çalışıyoruz. Marka veya modelini biliyorsanız WhatsApp'tan yazmanız yönlendirmeyi kolaylaştırır.",
      },
      {
        question: "Pendik dışında da geliyor musunuz?",
        answer:
          "Evet — Kurtköy, Kartal ve Tuzla da hizmet bölgemiz.",
      },
      {
        question: "Parça değişimi gerekir mi?",
        answer:
          "Bazen ayar yeter; bazen conta veya mekanizma değişir. Gereksiz değişimden kaçınır, ihtiyacı yerinde söyleriz.",
      },
      {
        question: "Fiyat ne kadar?",
        answer:
          "Arıza tipi ve parçaya göre değişir. Sabit liste yok; keşif sonrası netleşir.",
      },
    ],
    relatedSlugs: [
      "tesisat-arizalari",
      "su-kacagi-tespiti",
      "su-tesisati",
    ],
  },
  {
    slug: "tesisat-arizalari",
    title: "Tesisat Arızaları",
    shortDescription:
      "Musluk, vana ve kaçak sorunlarına kalıcı çözüm odaklı müdahale.",
    metaDescription:
      "Pendik tesisat arızası: musluk tamiri, vana ve bağlantı kaçakları. Kurtköy, Kartal ve Tuzla'da hızlı onarım.",
    introHeading: "Hangi tesisat sorunlarında yardım alırsınız?",
    intro: [
      "Damlayan musluk, sıkışan vana, bağlantı noktasında sızıntı, düşük basınç veya ani su kesintisi günlük hayatı zorlaştırır. Erken onarım, nem ve fatura yükünü büyütmeden sorunu keser.",
      "Pendik Gümüş Tesisat olarak Pendik, Kurtköy, Kartal ve Tuzla'da musluk tamiri, vana değişimi, bağlantı kaçakları ve genel tesisat arızalarında kalıcı çözüm odaklı çalışıyoruz. Geçici “bantlama” yerine kaynağı bulup düzgün onarmayı tercih ederiz.",
      "Bazı durumlarda arıza görünür bağlantıda değil, gizli hatta olabilir. O zaman kameralı su kaçağı tespiti ile süreci birleştiririz.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "Sorunu dinleme — Nerede sızıntı / damlama / basınç sorunu olduğunu netleştiriyoruz.",
      "Yerinde kontrol — Bağlantı, vana, musluk ve erişilebilir hatları inceliyoruz.",
      "Onarım — Gerekli ayar, conta veya parça değişimini yapıyoruz; gereksiz değişimden kaçınıyoruz.",
      "Test — Sızdırmazlık ve kullanım testini birlikte kontrol ediyoruz.",
      "Gizli kaçak şüphesi — Gerekirse su kaçağı tespiti adımına geçiyoruz.",
    ],
    faq: [
      {
        question: "Musluk damlıyor — hemen değişmek gerekir mi?",
        answer:
          "Bazen conta veya kartuş yeter; bazen gövde değişir. Yerinde karar verilir.",
      },
      {
        question: "Garanti var mı?",
        answer:
          "Kalıcı ve garantili çözüm odaklı çalışıyoruz. Kapsam, yapılan işe göre yerinde netleşir.",
      },
      {
        question: "Aynı gün gelebilir misiniz?",
        answer:
          "Çoğu arızada aynı gün destek hedeflenir; yoğunluk ve adrese göre değişir.",
      },
      {
        question: "Pendik, Kurtköy, Kartal, Tuzla kapsıyor mu?",
        answer: "Evet — dört bölgede de hizmet veriyoruz.",
      },
      {
        question: "Su kesmeden onarım mümkün mü?",
        answer:
          "Arızaya göre değişir. Gerekirse ilgili vanadan kontrollü kesim yapılır.",
      },
      {
        question: "Fiyat ne kadar?",
        answer:
          "Parça ve işçilik arızaya göre değişir. Sabit liste yok; keşif sonrası netleşir.",
      },
    ],
    relatedSlugs: [
      "su-tesisati",
      "su-kacagi-tespiti",
      "acil-servis",
    ],
  },
  {
    slug: "petek-bakimi",
    title: "Petek Bakımı",
    shortDescription:
      "Petek temizliği, hava alma ve ısıtma verimliliği için bakım.",
    metaDescription:
      "Pendik petek bakımı: soğuk petek, hava alma ve temizlik. Kurtköy, Kartal ve Tuzla'da ısıtma verimliliği.",
    introHeading: "Petek bakımı neden gerekir?",
    intro: [
      "Petek altı sıcak üstü soğuksa, sistem gürültülü çalışıyorsa veya ev eşit ısınmıyorsa hava, birikinti veya dolaşım sorunu olabilir. Düzenli bakım, yakıt tüketimini ve konforu doğrudan etkiler.",
      "Pendik, Kurtköy, Kartal ve Tuzla'da petek bakımı kapsamında temizliği, hava alma ve bağlantı kontrollerini ele alıyoruz. Kış öncesi bakım, soğuk petek şikâyetlerini azaltmaya yardımcı olur; kombi ile birlikte düşünüldüğünde sistem daha dengeli çalışır.",
      "Petek sorunu bazen sadece petekte değil, kombi basıncı veya hattın genel durumunda da olabilir. Bu yüzden şikâyeti dinleyip doğru noktadan müdahale ederiz.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "Şikâyeti netleştirme — Soğuk bölge, gürültü, basınç düşmesi gibi belirtileri alıyoruz.",
      "Sistem kontrolü — Petekler, vanalar ve erişilebilir bağlantıları inceliyoruz.",
      "Bakım müdahalesi — Hava alma, temizlik ve gerekli ayarları uyguluyoruz.",
      "Isınma kontrolü — Dolaşım ve ısı dağılımını test ediyoruz.",
      "Kombi bağlantısı — Gerekirse kombi bakım / onarım adımına yönlendiriyoruz.",
    ],
    faq: [
      {
        question: "Petek neden üstten soğuk kalır?",
        answer:
          "Hava sıkışması veya dolaşım sorunu sık nedenlerdendir. Net teşhis yerinde yapılır.",
      },
      {
        question: "Petek temizliği ne sıklıkla yapılmalı?",
        answer:
          "Genellikle sezon öncesi bakım önerilir; kullanım ve sistem durumuna göre sıklık değişebilir.",
      },
      {
        question: "Kombi bakımı ile birlikte mi yapılmalı?",
        answer:
          "Çoğu durumda birlikte düşünmek verimi artırır; ihtiyaca göre planlarız.",
      },
      {
        question: "Kurtköy / Kartal / Tuzla'da da yapıyor musunuz?",
        answer:
          "Evet — Pendik ile birlikte bu bölgelerde de hizmet veriyoruz.",
      },
      {
        question: "Kimyasal temizlik her zaman gerekir mi?",
        answer:
          "Her evde aynı yöntem gerekmez. Duruma göre karar verilir.",
      },
      {
        question: "Fiyat ne kadar?",
        answer:
          "Petek sayısı ve işlem tipine göre değişir. Sabit liste yok; keşif sonrası netleşir.",
      },
    ],
    relatedSlugs: ["kombi-bakim-onarim", "dogalgaz-tesisati"],
  },
  {
    slug: "acil-servis",
    title: "Acil Servis",
    shortDescription:
      "Su baskını, patlak boru ve ani tıkanıklıkta 7/24 hızlı müdahale.",
    metaDescription:
      "Pendik acil tesisatçı: su baskını, patlak boru, ani tıkanıklık. Kurtköy, Kartal, Tuzla — 7/24 ulaşın.",
    introHeading: "Acil tesisat durumunda ne yapmalısınız?",
    intro: [
      "Su taşıyor, boru patladı veya ani tıkanıklık evi kullanılamaz hale getirdiyse ilk adım panik değil, kontrollü müdahaledir: mümkünse ana vanayı kapatın, elektriği ıslak bölgelerden uzak tutun ve bize konum + sorunu net yazın.",
      "Pendik Gümüş Tesisat olarak 7/24 ulaşılabilir acil servisle Pendik, Kurtköy, Kartal ve Tuzla'da su baskını, patlak boru, acil kaçak ve ani tıkanıklık çağrılarına yöneliyoruz. Amaç, hasarı büyümeden suyu kontrol altına almak ve kalıcı onarıma geçmek.",
      "Acil çağrıda WhatsApp özellikle işe yarar: kısa video veya fotoğraf, kat/daire bilgisi ve vana durumu yönlendirmeyi hızlandırır.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "Hızlı iletişim — WhatsApp veya telefonla acil durumu ve adresi alıyoruz.",
      "Ön güvenlik yönü — Vana / elektrik gibi temel güvenlik adımlarını hatırlatıyoruz.",
      "Yönlendirme — Ekibi adrese yönlendiriyoruz.",
      "Kontrol altına alma — Sızıntı veya tıkanıklığı önce stabilize ediyoruz.",
      "Kalıcı adım — Gerekirse tıkanıklık açma, su kaçağı tespiti veya tesisat onarımına geçiyoruz.",
    ],
    faq: [
      {
        question: "Gerçekten 7/24 mü?",
        answer:
          "Evet — gece ve gündüz ulaşabilirsiniz. Yoğunluk anında dönüş süresi değişebilir; acil çağrıları önceliklendiririz.",
      },
      {
        question: "Su baskınında önce ne yapmalıyım?",
        answer:
          "Mümkünse ana vanayı kapatın, ıslak alanda elektrik riskinden uzak durun ve bize yazın.",
      },
      {
        question: "Aynı gün / aynı saat gelir misiniz?",
        answer:
          "Acil çağrılarda en kısa sürede yönlendirme hedeflenir; trafik ve mesafe etkilidir.",
      },
      {
        question: "Hangi bölgeler?",
        answer: "Pendik, Kurtköy, Kartal ve Tuzla.",
      },
      {
        question: "Sadece tıkanıklık için de acil çağrı olur mu?",
        answer:
          "Evet — ani tıkanıklık ve taşma da acil kapsamına girer.",
      },
      {
        question: "Fiyat ne kadar?",
        answer:
          "Müdahale tipine göre değişir. Sabit liste yok; durum netleşince bilgi veririz.",
      },
    ],
    relatedSlugs: [
      "tikaniklik-acma",
      "su-kacagi-tespiti",
      "tesisat-arizalari",
    ],
  },
  {
    slug: "kombi-bakim-onarim",
    title: "Kombi Bakım ve Onarım",
    shortDescription:
      "Kombi bakımı, arıza tespiti ve onarım — ısınma ve sıcak su sorunlarında.",
    metaDescription:
      "Pendik kombi bakımı ve onarımı: basınç, ateşleme, sıcak su sorunları. Kurtköy, Kartal, Tuzla.",
    introHeading: "Kombi bakımı ve sık görülen arızalar",
    intro: [
      "Kombi düzenli bakılmazsa verim düşer, arıza riski artar; basınç düşmesi, ateşleme sorunu, su akıtma veya ısınmama gibi belirtiler günlük konforu bozar. Erken bakım, büyük arızaya giden yolu kısaltır.",
      "Pendik, Kurtköy, Kartal ve Tuzla'da kombi bakım ve onarımında arıza tespiti, periyodik bakım ve gerekli müdahaleleri şeffaf şekilde yürütüyoruz. Petek soğukluğu ile birlikte gelen şikâyetlerde sistemi bütün halinde değerlendiririz.",
      "Marka / model bilgisini WhatsApp'tan yazmanız, doğru yönlendirme için yardımcı olur.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "Belirti ve model — Hata kodu, basınç, sıcak su / ısınma şikâyetini ve mümkünse modeli alıyoruz.",
      "Yerinde kontrol — Güvenli şekilde cihazı ve bağlantıları inceliyoruz.",
      "Bakım veya onarım — Bakım işlemlerini veya arızaya yönelik müdahaleyi uyguluyoruz.",
      "Test — Ateşleme, sıcak su ve ısınma performansını kontrol ediyoruz.",
      "Petek / doğalgaz bağlantısı — Gerekirse petek bakımı veya doğalgaz tesisatı adımına yönlendiriyoruz.",
    ],
    faq: [
      {
        question: "Hangi markalarda çalışıyorsunuz?",
        answer:
          "Birçok marka kombide bakım ve onarım yapıyoruz. Model veya hata kodunu WhatsApp'tan yazmanız yönlendirmeyi kolaylaştırır.",
      },
      {
        question: "Kombi bakımı ne sıklıkla yapılmalı?",
        answer:
          "Genellikle sezon öncesi periyodik bakım önerilir; cihazın yaşı ve kullanımına göre sıklık değişebilir.",
      },
      {
        question: "Basınç sürekli düşüyorsa ne olur?",
        answer:
          "Kaçak veya genleşme tankı / tesisat kaynaklı olabilir. Yerinde ayırt edilir; gerekirse su kaçağı tespiti eklenir.",
      },
      {
        question: "Pendik dışında geliyor musunuz?",
        answer: "Evet — Kurtköy, Kartal, Tuzla.",
      },
      {
        question: "Yedek parça nasıl ilerler?",
        answer:
          "Gerekli parça netleşince size söyleriz; onayınız olmadan gereksiz değişim yapmayız.",
      },
      {
        question: "Fiyat ne kadar?",
        answer:
          "Bakım / arıza tipine göre değişir. Sabit liste yok; keşif sonrası netleşir.",
      },
    ],
    relatedSlugs: [
      "petek-bakimi",
      "dogalgaz-tesisati",
      "acil-servis",
    ],
  },
  {
    slug: "su-tesisati",
    title: "Su Tesisatı",
    shortDescription:
      "Su tesisatı kurulum, tamir, montaj ve hat onarımı.",
    metaDescription:
      "Pendik su tesisatı: boru hattı, musluk montajı, tadilat sonrası tesisat. Kurtköy, Kartal, Tuzla.",
    introHeading: "Su tesisatı hangi işleri kapsar?",
    intro: [
      "Yeni hat döşeme, tadilat sonrası tesisat düzenleme, musluk/vana montajı, kaçak onarımı ve mevcut hatların iyileştirilmesi su tesisatı kapsamındadır. Düzgün montaj, sonraki kaçak ve basınç sorunlarını azaltır.",
      "Pendik–Kurtköy başta olmak üzere Kartal ve Tuzla'da su tesisatı kurulum ve onarımında kaliteli malzeme ve düzgün işçilikle çalışıyoruz. Mutfak, banyo ve genel hat ihtiyaçlarında keşif sonrası net plan sunarız.",
      "Eski tesisatta sık tekrarlayan kaçak varsa, sadece noktasal yama değil hattın durumunu da konuşuruz — gerekirse kameralı tespit ile birleştiririz.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "İhtiyaç netleştirme — Kurulum mu, tadilat mı, onarım mı olduğunu belirliyoruz.",
      "Keşif — Mevcut hat, erişim ve malzeme ihtiyacını yerinde görüyoruz.",
      "Uygulama — Montaj / hat işini planladığınız kapsamda uyguluyoruz.",
      "Test — Basınç ve sızdırmazlık kontrolü yapıyoruz.",
      "Son kontrol — Kullanım noktalarını birlikte doğruluyoruz.",
    ],
    faq: [
      {
        question: "Sadece montaj da yapıyor musunuz?",
        answer:
          "Evet — musluk, vana ve bağlantı montajı da kapsamımızda.",
      },
      {
        question: "Tadilat sırasında mı çağırmalıyım?",
        answer:
          "İdeal olan, kaba iş aşamasında keşif almaktır; sonradan müdahale daha zor olabilir.",
      },
      {
        question: "Malzemeyi siz mi getiriyorsunuz?",
        answer:
          "Malzeme ihtiyacını keşifte birlikte netleştiriyoruz.",
      },
      {
        question: "Hangi bölgeler?",
        answer: "Pendik, Kurtköy, Kartal ve Tuzla.",
      },
      {
        question: "Eski galvaniz hat değişir mi?",
        answer:
          "Duruma göre kısmi veya kapsamlı yenileme gerekebilir; keşifte konuşulur.",
      },
      {
        question: "Fiyat ne kadar?",
        answer:
          "Metraj, malzeme ve iş tipine göre değişir. Sabit liste yok; keşif sonrası netleşir.",
      },
    ],
    relatedSlugs: [
      "tesisat-arizalari",
      "su-kacagi-tespiti",
      "gomme-rezervuar",
    ],
  },
  {
    slug: "dogalgaz-tesisati",
    title: "Doğalgaz Tesisatı",
    shortDescription:
      "Doğalgaz iç tesisat, hat çekimi, bağlantı ve tadilat düzenlemesi.",
    metaDescription:
      "Pendik doğalgaz tesisatı: iç tesisat, hat çekimi ve güvenli bağlantı. Kurtköy, Kartal, Tuzla.",
    introHeading: "Doğalgaz tesisatında güvenlik öncelikli",
    intro: [
      "Doğalgaz iç tesisatı, hat çekimi, cihaz bağlantısı ve tadilat sonrası düzenleme işlerinde güvenlik ve doğru uygulama esastır. Yanlış bağlantı veya özensiz hat, konfor değil risk üretir.",
      "Pendik–Kurtköy ve çevre bölgelerde (Kartal, Tuzla dahil) doğalgaz iç tesisat ve tadilat ihtiyaçlarında keşif ile başlıyoruz: mevcut hat, cihaz yeri ve ihtiyaç netleşir; ardından uygulama planlanır. Kombi veya petek tarafı da varsa süreci birlikte ele alırız.",
      "Resmi prosedür / onay gerektiren adımlar varsa bunları size açıkça söyleriz — uydurma “hemen bağlarız” vaadi vermeyiz.",
    ],
    processHeading: "Nasıl çalışıyoruz / Süreç",
    processSteps: [
      "Keşif talebi — Ne istediğinizi (yeni hat, tadilat, cihaz bağlantısı) netleştiriyoruz.",
      "Yerinde inceleme — Hat güzergâhı, cihaz konumu ve güvenlik koşullarını kontrol ediyoruz.",
      "Plan ve bilgilendirme — Yapılacak işi ve sizin onayınız gereken noktaları anlatıyoruz.",
      "Uygulama — Onaylanan kapsamda hat / bağlantı işini yürütüyoruz.",
      // Future: add ruhsat / gaz açım / yetkili kuruluş adımları when copy is supplied.
      "Kontrol — Bağlantı ve çalışma kontrolünü birlikte doğruluyoruz.",
    ],
    faq: [
      {
        question: "Doğalgaz tesisatı için keşif gerekir mi?",
        answer:
          "Evet. Hat güzergâhı, cihaz konumu ve güvenlik koşulları yerinde görülmeden net plan ve fiyat çıkarmak sağlıklı olmaz. Keşif sonrası kapsamı açıkça anlatırız.",
      },
      {
        question: "Ocak yeri değişince hat taşınabilir mi?",
        answer:
          "Çoğu durumda evet — mevcut hat durumu ve mesafe keşifte değerlendirilir. Uygun değilse alternatif güzergâh veya bağlantı seçeneklerini paylaşırız.",
      },
      {
        question: "Kombi bağlantı hattı nasıl hazırlanır?",
        answer:
          "Kombi yeri, hat güzergâhı ve güvenlik şartları keşifte netleşir. Onaylanan kapsamda bağlantı hattı hazırlanır; resmi prosedür gerektiren adımlar varsa bunları size söyleriz.",
      },
      {
        question: "Doğalgaz tesisatı fiyatı nasıl belirlenir?",
        answer:
          "Hat metrajı, iş tipi (yeni hat, tadilat, bağlantı) ve malzeme ihtiyacına göre değişir. Sabit liste fiyatı yok; keşif sonrası netleşir.",
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "Pendik, Kurtköy, Kartal ve Tuzla.",
      },
    ],
    relatedSlugs: [
      "kombi-bakim-onarim",
      "petek-bakimi",
      "su-tesisati",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string): Service[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return [];

  return current.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => s !== undefined);
}
