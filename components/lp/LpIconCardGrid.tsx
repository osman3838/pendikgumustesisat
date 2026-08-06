import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";

export type LpIconCardItem = {
  id: string;
  title: string;
  description?: string;
};

type LpIconCardGridProps = {
  title: string;
  items: readonly LpIconCardItem[];
  renderIcon: (id: string) => ReactNode;
  /** title-only compact cards (symptoms) vs title+description (leak types) */
  variant?: "compact" | "detailed";
  className?: string;
};

export function LpIconCardGrid({
  title,
  items,
  renderIcon,
  variant = "detailed",
  className = "bg-surface py-5 md:py-12",
}: LpIconCardGridProps) {
  return (
    <Section className={className}>
      <h2 className="text-center font-heading text-lg font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        {title}
      </h2>
      <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {items.map((item) => (
          <li
            key={item.id}
            className={
              variant === "compact"
                ? "flex flex-col items-center rounded-xl border border-border bg-surface px-3 py-4 text-center shadow-sm sm:px-4 sm:py-5"
                : "flex items-center gap-2.5 rounded-xl border border-border bg-surface p-3 shadow-sm sm:gap-3 sm:p-4"
            }
          >
            <span
              className={
                variant === "compact"
                  ? "text-primary"
                  : "flex shrink-0 items-center justify-center text-primary"
              }
            >
              {renderIcon(item.id)}
            </span>
            <div
              className={
                variant === "compact" ? "mt-2 min-w-0" : "min-w-0 text-left"
              }
            >
              <h3 className="font-heading text-sm font-semibold text-primary-dark sm:text-base">
                {item.title}
              </h3>
              {item.description && variant === "detailed" ? (
                <p className="mt-0.5 text-[11px] leading-snug text-on-light-muted sm:text-sm sm:leading-relaxed">
                  {item.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
