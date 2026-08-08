import { LpIconCardGrid } from "@/components/lp/LpIconCardGrid";
import { lpSuTesisatiServices } from "@/content/lp/su-tesisati";

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
    case "musluk":
      return (
        <svg {...common}>
          <path d="M8 4h4a3 3 0 013 3v2H8V4z" />
          <path d="M12 9v3M10 14h4" strokeLinecap="round" />
          <path d="M7 12h10v3a2 2 0 01-2 2H9a2 2 0 01-2-2v-3z" />
        </svg>
      );
    case "vana":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" />
        </svg>
      );
    case "sifon":
      return (
        <svg {...common}>
          <path d="M4 12h16v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7z" />
          <path d="M7 12V8a5 5 0 0110 0v4" />
          <path d="M12 15v2" strokeLinecap="round" />
        </svg>
      );
    case "klozet":
      return (
        <svg {...common}>
          <path d="M7 4h10v6a5 5 0 01-10 0V4z" />
          <path d="M5 20h14M9 20v-4M15 20v-4" strokeLinecap="round" />
        </svg>
      );
    case "boru":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10h6v4H4v-4zm10 0h6v4h-6v-4zM10 12h4"
          />
        </svg>
      );
    case "montaj":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function SuTesisatiServices() {
  return (
    <LpIconCardGrid
      title="Su Tesisatı Hizmetlerimiz"
      items={lpSuTesisatiServices}
      variant="detailed"
      columns={3}
      className="bg-surface py-5 md:py-12"
      renderIcon={(id) => <ServiceIcon id={id} />}
    />
  );
}
