import { Section } from "@/components/ui/Section";

const reasons = [
  {
    title: "7/24 Acil Servis",
    description: "Gece gündüz ulaşabileceğiniz hızlı müdahale ekibi.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Garantili Çözüm",
    description: "Kalıcı onarım odaklı çalışma; geçici çözümlerden kaçınırız.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Modern Ekipman",
    description: "Kameralı tespit ve robotik müdahale cihazları.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Bölge Uzmanlığı",
    description: "Pendik, Kartal ve Tuzla'da yerel deneyim.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
];

export function WhyUs() {
  return (
    <Section className="bg-bg">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Neden biz
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-primary md:text-3xl">
          Neden Pendik Gümüş Tesisat?
        </h2>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="card-elevated p-6 text-left"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light text-accent">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                {reason.icon}
              </svg>
            </span>
            <h3 className="mt-4 font-display font-semibold text-primary">
              {reason.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
