import { Section } from "@/components/ui/Section";
import { lpWhyUs } from "@/content/lp/tikaniklik-acma";

function WhyIcon({ id }: { id: (typeof lpWhyUs)[number]["id"] }) {
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
    case "kamera":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      );
    case "uzman":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.5 4.5L12 3l4.5 1.5v4.2c0 3.3-2.1 6.3-4.5 7.3-2.4-1-4.5-4-4.5-7.3V4.5z"
          />
        </svg>
      );
    case "garanti":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 11v8a1 1 0 001 1h3v-9H8a1 1 0 00-1 1zM11 10V6.5A2.5 2.5 0 0113.5 4h.3c.9 0 1.7.6 1.9 1.5L17 11h2a1 1 0 011 1v1.5a1 1 0 01-1 1h-1.5L17 20H12v-9h-1z"
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
  }
}

export function LpWhyUs() {
  return (
    <Section className="section-divider bg-surface py-8 md:py-12">
      <h2 className="text-center font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        Neden Bizi Tercih Etmelisiniz?
      </h2>
      <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 lg:grid-cols-3 xl:grid-cols-6">
        {lpWhyUs.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center rounded-xl border border-border bg-surface px-3 py-3.5 text-center shadow-sm sm:px-4 sm:py-5"
          >
            <span className="text-primary">
              <WhyIcon id={item.id} />
            </span>
            <h3 className="mt-2 font-heading text-sm font-semibold text-primary-dark sm:mt-3 sm:text-base">
              {item.title}
            </h3>
            <p className="mt-1 text-[11px] leading-snug text-on-light-muted sm:text-sm sm:leading-relaxed">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
