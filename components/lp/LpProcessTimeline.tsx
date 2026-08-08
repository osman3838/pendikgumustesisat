import { Section } from "@/components/ui/Section";

export type LpProcessStep = {
  step: number;
  title: string;
  description: string;
  icon: "phone" | "van" | "check" | "target" | "person" | "wrench";
};

function StepIcon({ icon }: { icon: LpProcessStep["icon"] }) {
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
  if (icon === "van") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9h11v8H3V9zm11 2h4l3 3v3h-7v-6zM7 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        />
      </svg>
    );
  }
  if (icon === "target") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "person") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    );
  }
  if (icon === "wrench") {
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
  return (
    <svg {...common}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

type LpProcessTimelineProps = {
  steps: readonly LpProcessStep[];
  title?: string;
  /** When false, render without outer Section (for split layouts) */
  asSection?: boolean;
  className?: string;
};

export function LpProcessTimeline({
  steps,
  title = "Nasıl Çalışıyoruz?",
  asSection = true,
  className,
}: LpProcessTimelineProps) {
  const body = (
    <>
      <h2 className="text-center font-heading text-lg font-semibold text-primary-dark sm:text-left sm:text-2xl md:text-3xl">
        {title}
      </h2>

      <ol className="relative mx-auto mt-5 max-w-lg space-y-5 md:hidden">
        {steps.map((item, index) => (
          <li key={item.step} className="relative flex items-center gap-3">
            {index < steps.length - 1 ? (
              <span
                className="absolute left-[11px] top-7 bottom-[-1.25rem] border-l-2 border-dashed border-primary/40"
                aria-hidden="true"
              />
            ) : null}
            <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary">
              {item.step}
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
              <StepIcon icon={item.icon} />
            </span>
            <div className="min-w-0">
              <h3 className="font-heading text-base font-semibold text-primary-dark">
                {item.title}
              </h3>
              <p className="mt-0.5 text-xs leading-snug text-on-light-muted">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <ol className="relative mt-8 hidden md:grid md:grid-cols-3 md:gap-6">
        {steps.map((item, index) => (
          <li
            key={item.step}
            className="relative flex flex-col items-center text-center"
          >
            {index < steps.length - 1 ? (
              <span
                className="absolute left-[calc(50%+2.5rem)] right-[-12%] top-[1.375rem] border-t-2 border-dashed border-primary/40"
                aria-hidden="true"
              />
            ) : null}
            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm">
                <StepIcon icon={item.icon} />
              </span>
              <span className="absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary ring-2 ring-surface">
                {item.step}
              </span>
            </div>
            <h3 className="mt-3 font-heading text-lg font-semibold text-primary-dark">
              {item.title}
            </h3>
            <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-on-light-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </>
  );

  if (!asSection) {
    return <div className={className}>{body}</div>;
  }

  return (
    <Section
      className={className ?? "section-divider bg-surface py-5 md:py-12"}
    >
      {body}
    </Section>
  );
}
