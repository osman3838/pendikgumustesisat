import { Section } from "@/components/ui/Section";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

const steps = [
  { title: "Kameralı cihazla hat görüntülenir" },
  { title: "Yeri ve nedeni belirlenir" },
  { title: "Robot cihazla kırmadan müdahale" },
  { title: "Hat temizlenir ve test edilir" },
];

const benefits = [
  "Duvar/fayans zarar görmez",
  "Ekstra masraf yok",
  "Daha hızlı ve temiz",
  "Kalıcı, kesin çözüm",
];

export function KirmaadanSection() {
  return (
    <Section className="section-divider bg-surface">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Kırmadan müdahale
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-primary md:text-3xl">
          Kameralı Cihazlarla Kırmadan Tıkanıklık Açma
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Geleneksel yöntemlerde tıkanıklık açma çoğu zaman kırma, dökme ve
          gereksiz masrafa yol açar. Pendik Gümüş Tesisat olarak bu süreci
          modern teknolojiyle değiştiriyoruz. Gelişmiş kameralı görüntüleme
          sistemlerimizle gider hatları detaylı incelenir, tıkanıklığın yeri
          noktasal tespit edilir; gereksiz kırma ve ek masraftan kaçınılır.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-border bg-bg p-6 md:p-8">
        <h3 className="font-display text-lg font-semibold text-primary">
          Sürecimiz
        </h3>
        <div className="mt-6">
          <ProcessTimeline steps={steps} />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-lg font-semibold text-primary">
          Neden kırmadan?
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-alt px-4 py-3 text-sm text-on-light"
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent"
                aria-hidden="true"
              >
                ✓
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
