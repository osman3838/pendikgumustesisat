import { Section } from "@/components/ui/Section";
import { LpProcessTimeline } from "@/components/lp/LpProcessTimeline";
import {
  lpSuTesisatiProcessSteps,
  lpSuTesisatiWhyUs,
} from "@/content/lp/su-tesisati";

function WhyIcon({ id }: { id: string }) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "hizli":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "usta":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "temiz":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l1.5 4.5L19 9l-4.5 1.5L13 15l-1.5-4.5L7 9l4.5-1.5L13 3z"
          />
        </svg>
      );
    case "bilgi":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function SuTesisatiWhyProcess() {
  return (
    <Section className="section-divider bg-bg-alt py-5 md:py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <h2 className="font-heading text-lg font-semibold text-primary-dark sm:text-2xl md:text-3xl">
            Neden Pendik Gümüş Tesisat?
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
            {lpSuTesisatiWhyUs.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center rounded-xl border border-border bg-surface px-3 py-4 text-center shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-on-primary">
                  <WhyIcon id={item.id} />
                </span>
                <h3 className="mt-2.5 font-heading text-sm font-semibold text-primary-dark sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-on-light-muted sm:text-sm">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <LpProcessTimeline
          steps={lpSuTesisatiProcessSteps}
          asSection={false}
        />
      </div>
    </Section>
  );
}
