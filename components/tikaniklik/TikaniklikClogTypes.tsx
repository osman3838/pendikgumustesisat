import { Section } from "@/components/ui/Section";
import type { TikaniklikClogType } from "@/content/locations/tikaniklik/types";

function ClogIcon({ id }: { id: TikaniklikClogType["id"] }) {
  const common = {
    className: "h-7 w-7 sm:h-8 sm:w-8",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
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
    case "pimas":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 18h16M12 6v12M8 10l4-4 4 4M8 14l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "logar":
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18M7.5 7.5l9 9M7.5 16.5l9-9" strokeLinecap="round" />
        </svg>
      );
  }
}

type TikaniklikClogTypesProps = {
  heading: string;
  lead: string;
  clogTypes: readonly TikaniklikClogType[];
};

export function TikaniklikClogTypes({
  heading,
  lead,
  clogTypes,
}: TikaniklikClogTypesProps) {
  return (
    <Section className="bg-surface py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
          {heading}
        </h2>
        <p className="mt-2 text-sm text-on-light-muted sm:text-base">
          {lead}
        </p>
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {clogTypes.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3.5 rounded-xl border border-border bg-surface p-4 shadow-sm transition hover:border-primary/40 hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <ClogIcon id={item.id} />
            </span>
            <div className="min-w-0 text-left">
              <h3 className="font-heading text-base font-semibold text-primary-dark">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-on-light-muted sm:text-sm">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
