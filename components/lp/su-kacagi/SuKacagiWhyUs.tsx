import { LpWhyGrid } from "@/components/lp/LpWhyGrid";
import { lpSuKacagiWhyUs } from "@/content/lp/su-kacagi-tespiti";

function WhyIcon({ id }: { id: string }) {
  const common = {
    className: "h-5 w-5 sm:h-6 sm:w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "kirmadan":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
          />
        </svg>
      );
    case "ayni-gun":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "cihaz":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "uzman":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "bilgi":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "destek":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 14v-2a8 8 0 0116 0v2M4 14a2 2 0 002 2h1v-6H6a2 2 0 00-2 2zm16 0a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2zm-6 4h-4a2 2 0 002 2h0a2 2 0 002-2z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function SuKacagiWhyUs() {
  return (
    <LpWhyGrid
      items={lpSuKacagiWhyUs}
      columns={3}
      renderIcon={(id) => <WhyIcon id={id} />}
    />
  );
}
