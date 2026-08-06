import { LpIconCardGrid } from "@/components/lp/LpIconCardGrid";
import { lpSuKacagiSymptoms } from "@/content/lp/su-kacagi-tespiti";

function SymptomIcon({ id }: { id: string }) {
  const common = {
    className: "h-8 w-8 sm:h-9 sm:w-9",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "fatura":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11v6M9.5 13.5c.8-1 1.5-1.5 2.5-1.5s1.7.5 2.5 1.5"
          />
        </svg>
      );
    case "nem":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 20V8l8-4 8 4v12H4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 14c0-1.5 1.5-3 3-4 1.5 1 3 2.5 3 4a3 3 0 11-6 0z"
          />
        </svg>
      );
    case "sizinti":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M6 6v4c0 2 2 3 2 5v3h8v-3c0-2 2-3 2-5V6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14v4M10 20h4"
          />
        </svg>
      );
    case "ses":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14c1.5-1.5 3-3.2 3-5a3 3 0 10-6 0c0 1.8 1.5 3.5 3 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 18h10M5 21h14"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 9c.8.4 1.5 1.2 1.5 2.2M18.5 8c1 .6 1.8 1.6 1.8 2.8"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function SuKacagiSymptoms() {
  return (
    <LpIconCardGrid
      title="Su Kaçağı Belirtileri"
      items={lpSuKacagiSymptoms}
      variant="compact"
      renderIcon={(id) => <SymptomIcon id={id} />}
    />
  );
}
