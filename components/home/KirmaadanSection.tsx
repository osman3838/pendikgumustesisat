import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ProcessTimeline from "@/components/ui/ProcessTimeline";

const benefits = [
  "Duvar/fayans zarar görmez",
  "Ekstra masraf yok",
  "Daha hızlı ve temiz",
  "Kalıcı, kesin çözüm",
];

export function KirmaadanSection() {
  return (
    <Section className="section-divider bg-surface">
      <SectionHeader
        eyebrow="Kırmadan müdahale"
        title="Kameralı Cihazlarla Kırmadan Tıkanıklık Açma"
        lead="Geleneksel yöntemlerde tıkanıklık açma çoğu zaman kırma, dökme ve gereksiz masrafa yol açar. Pendik Gümüş Tesisat olarak bu süreci modern teknolojiyle değiştiriyoruz. Gelişmiş kameralı görüntüleme sistemlerimizle gider hatları detaylı incelenir, tıkanıklığın yeri noktasal tespit edilir; gereksiz kırma ve ek masraftan kaçınılır."
      />

      <div className="mt-10 rounded-xl border border-border bg-bg p-6 md:p-8">
        <h3 className="section-subtitle font-heading text-lg font-semibold">
          Sürecimiz
        </h3>
        <div className="mt-6">
          <ProcessTimeline />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="section-subtitle font-heading text-lg font-semibold">
          Neden kırmadan?
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="card-body flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-alt px-4 py-3 text-sm"
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
