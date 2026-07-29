import { Section } from "@/components/ui/Section";
import { lpClogTypes } from "@/content/lp/tikaniklik-acma";

function ClogTypeIcon({ id }: { id: (typeof lpClogTypes)[number]["id"] }) {
  const common = {
    className: "h-8 w-8 sm:h-9 sm:w-9",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "lavabo":
      return (
        <svg {...common}>
          <path d="M4 14h16M4 14c0-3 2-5 5-5h6c3 0 5 2 5 5M8 14v4M16 14v4" />
          <path d="M10 8V6M14 8V6" strokeLinecap="round" />
        </svg>
      );
    case "tuvalet":
      return (
        <svg {...common}>
          <path d="M7 4h10v6a5 5 0 01-10 0V4z" />
          <path d="M5 20h14M9 20v-4M15 20v-4" strokeLinecap="round" />
        </svg>
      );
    case "mutfak":
      return (
        <svg {...common}>
          <path d="M4 12h16v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7z" />
          <path d="M7 12V8a5 5 0 0110 0v4" />
          <path d="M12 15v2" strokeLinecap="round" />
        </svg>
      );
    case "banyo":
      return (
        <svg {...common}>
          <path d="M4 14h16v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z" />
          <path d="M6 14V9a2 2 0 012-2h2" strokeLinecap="round" />
          <path d="M8 5v2M10 5v2M12 5v2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function LpClogTypes() {
  return (
    <Section className="bg-surface py-5 md:py-12">
      <h2 className="text-center font-heading text-lg font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        Hangi Tıkanıklıkları Açıyoruz?
      </h2>
      <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {lpClogTypes.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-surface p-3 shadow-sm sm:gap-3 sm:p-4"
          >
            <span className="flex shrink-0 items-center justify-center text-primary">
              <ClogTypeIcon id={item.id} />
            </span>
            <div className="min-w-0 text-left">
              <h3 className="font-heading text-sm font-semibold text-primary-dark sm:text-base">
                {item.title}
              </h3>
              <p className="mt-0.5 text-[11px] leading-snug text-on-light-muted sm:text-sm sm:leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
