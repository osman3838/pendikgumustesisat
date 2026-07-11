import { siteConfig } from "@/lib/site-config";

const trustItems = [
  {
    label: "Aynı Gün Servis",
    description: "Acil durumlarda hızlı yönlendirme",
  },
  {
    label: "Garantili İşçilik",
    description: "Kalıcı çözüm odaklı müdahale",
  },
  {
    label: siteConfig.areas.join(" • "),
    description: "Hizmet bölgelerimiz",
  },
  {
    // TODO: Replace with verified years-of-experience once confirmed
    label: "Deneyimli Ekip",
    description: "Profesyonel tesisat kadrosu",
  },
];

export function TrustBar() {
  return (
    <div className="border-b border-border bg-surface shadow-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-4 sm:grid-cols-4 sm:gap-4 sm:px-6 lg:px-8">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col rounded-lg border border-border-subtle bg-bg px-3 py-2.5 sm:px-4"
          >
            <span className="text-xs font-bold uppercase tracking-wide text-primary sm:text-sm">
              {item.label}
            </span>
            <span className="mt-0.5 text-[11px] text-muted sm:text-xs">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
