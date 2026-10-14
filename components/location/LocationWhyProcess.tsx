import { Section } from "@/components/ui/Section";
import type { LocationConfig } from "@/content/locations/types";

type LocationWhyProcessProps = {
  district: string;
  whyUs: LocationConfig["whyUs"];
  processSteps: LocationConfig["processSteps"];
};

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
    case "kirilmadan":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "seffaf":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
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
    case "garanti":
    default:
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      );
  }
}

function StepIcon({ icon }: { icon: string }) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true as const,
  };

  if (icon === "phone") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    );
  }
  if (icon === "person") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
      />
    </svg>
  );
}

export function LocationWhyProcess({
  district,
  whyUs,
  processSteps,
}: LocationWhyProcessProps) {
  return (
    <Section className="section-divider bg-bg-alt py-8 md:py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Why Us */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Güven & Tecrübe
          </span>
          <h2 className="mt-2 font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
            Neden {district}&apos;da Gümüş Tesisat?
          </h2>
          <p className="mt-2 text-sm text-on-light-muted">
            Tesisat alanında modern teknolojiyi geleneksel usta tecrübesiyle birleştirerek bölgedeki en güvenilir hizmeti sunuyoruz.
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-3.5">
            {whyUs.map((item) => (
              <li
                key={item.id}
                className="flex flex-col rounded-xl border border-border bg-surface p-3.5 shadow-sm sm:p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <WhyIcon id={item.id} />
                </span>
                <h3 className="mt-2.5 font-heading text-sm font-semibold text-primary-dark sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-on-light-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Şeffaf Süreç
            </span>
            <h2 className="mt-2 font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="mt-2 text-sm text-on-light-muted">
              İlk telefon görüşmesinden işin test edilip teslim edilmesine kadar sürprizsiz ve şeffaf 4 adım.
            </p>

            <ol className="relative mt-6 space-y-4">
              {processSteps.map((step) => (
                <li
                  key={step.step}
                  className="relative flex items-start gap-3.5 rounded-xl border border-border bg-surface p-3.5 shadow-sm sm:p-4"
                >
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary">
                    <StepIcon icon={step.icon} />
                    <span className="absolute -left-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white ring-2 ring-surface">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-primary-dark sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm leading-relaxed text-on-light-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
