import { LpIconCardGrid } from "@/components/lp/LpIconCardGrid";
import { lpDogalgazServices } from "@/content/lp/dogalgaz-tesisati";

function ServiceIcon({ id }: { id: string }) {
  const common = {
    className: "h-8 w-8 sm:h-9 sm:w-9",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "hat":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10h6v4H4v-4zm10 0h6v4h-6v-4zM10 12h4"
          />
          <circle cx="7" cy="12" r="1.5" />
          <circle cx="17" cy="12" r="1.5" />
        </svg>
      );
    case "tadilat":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
          />
        </svg>
      );
    case "mutfak":
      return (
        <svg {...common}>
          <path d="M6 20V10M10 20V10M8 10V6a2 2 0 114 0v4" strokeLinecap="round" />
          <path d="M5 20h14M14 20V12h4v8" strokeLinecap="round" />
        </svg>
      );
    case "kombi":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function DogalgazServices() {
  return (
    <LpIconCardGrid
      title="Doğalgaz Tesisatı Hizmetlerimiz"
      items={lpDogalgazServices}
      variant="detailed"
      columns={4}
      className="bg-surface py-5 md:py-12"
      renderIcon={(id) => <ServiceIcon id={id} />}
    />
  );
}
