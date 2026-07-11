type ProcessStep = {
  title: string;
  description?: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="relative grid gap-0 sm:grid-cols-4 sm:gap-4">
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex sm:flex-col sm:items-start">
          {/* Connector line — desktop */}
          {index < steps.length - 1 && (
            <span
              className="absolute left-[15px] top-8 hidden h-px w-full bg-border sm:left-[calc(50%+20px)] sm:top-5 sm:block sm:w-[calc(100%-20px)]"
              aria-hidden="true"
            />
          )}
          {/* Connector line — mobile */}
          {index < steps.length - 1 && (
            <span
              className="absolute left-[15px] top-8 h-[calc(100%-8px)] w-px bg-border sm:hidden"
              aria-hidden="true"
            />
          )}

          <div className="relative z-10 flex gap-4 pb-8 sm:flex-col sm:gap-3 sm:pb-0">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md">
              {index + 1}
            </span>
            <div className="pt-0.5 sm:pt-0">
              <p className="font-semibold text-primary">{step.title}</p>
              {step.description && (
                <p className="mt-1 text-sm text-muted">{step.description}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
