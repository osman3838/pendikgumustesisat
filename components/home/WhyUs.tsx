import { Section } from "@/components/ui/Section";

const reasons = [
  {
    title: "7/24 Acil Servis",
    description: "Gece gündüz ulaşabileceğiniz hızlı müdahale ekibi.",
  },
  {
    title: "Garantili Çözüm",
    description: "Kalıcı onarım odaklı çalışma; geçici çözümlerden kaçınırız.",
  },
  {
    title: "Modern Ekipman",
    description: "Kameralı tespit ve robotik müdahale cihazları.",
  },
  {
    title: "Bölge Uzmanlığı",
    description: "Pendik, Kartal ve Tuzla'da yerel deneyim.",
  },
];

export function WhyUs() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Neden Pendik Gümüş Tesisat?
        </h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-xl border border-slate-200 bg-surface p-6 text-center"
          >
            <h3 className="font-semibold text-primary">{reason.title}</h3>
            <p className="mt-2 text-sm text-muted">{reason.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
