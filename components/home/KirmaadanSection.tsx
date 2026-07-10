import { Section } from "@/components/ui/Section";

const steps = [
  "Kameralı cihazla hat görüntülenir",
  "Yeri ve nedeni belirlenir",
  "Robot cihazla kırmadan müdahale",
  "Hat temizlenir ve test edilir",
];

const benefits = [
  "Duvar/fayans zarar görmez",
  "Ekstra masraf yok",
  "Daha hızlı ve temiz",
  "Kalıcı, kesin çözüm",
];

export function KirmaadanSection() {
  return (
    <Section className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Kameralı Cihazlarla Kırmadan Tıkanıklık Açma
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Geleneksel yöntemlerde tıkanıklık açma çoğu zaman kırma, dökme ve
            gereksiz masrafa yol açar. Pendik Gümüş Tesisat olarak bu süreci
            modern teknolojiyle değiştiriyoruz. Gelişmiş kameralı görüntüleme
            sistemlerimizle gider hatları detaylı incelenir, tıkanıklığın yeri
            noktasal tespit edilir; gereksiz kırma ve ek masraftan kaçınılır.
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-primary">Sürecimiz</h3>
            <ol className="mt-3 space-y-2">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Neden kırmadan?
            </h3>
            <ul className="mt-3 space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2 text-muted">
                  <span className="text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
