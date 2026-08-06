import { LpIconCardGrid } from "@/components/lp/LpIconCardGrid";
import { lpSuKacagiLeakTypes } from "@/content/lp/su-kacagi-tespiti";

function LeakIcon({ id }: { id: string }) {
  const common = {
    className: "h-8 w-8 sm:h-9 sm:w-9",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "temiz-su":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c-2.5 3.5-6 6.5-6 10a6 6 0 0012 0c0-3.5-3.5-6.5-6-10z"
          />
          <path strokeLinecap="round" d="M12 14v2" />
        </svg>
      );
    case "banyo":
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
    case "zemin":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 20V8l8-4 8 4v12H4z"
          />
          <path strokeLinecap="round" d="M4 14h16M12 8v12" />
        </svg>
      );
    default:
      return null;
  }
}

export function SuKacagiLeakTypes() {
  return (
    <LpIconCardGrid
      title="Hangi Kaçakları Tespit Ediyoruz?"
      items={lpSuKacagiLeakTypes}
      variant="detailed"
      className="section-divider bg-surface py-5 md:py-12"
      renderIcon={(id) => <LeakIcon id={id} />}
    />
  );
}
