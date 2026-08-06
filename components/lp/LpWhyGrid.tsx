import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export type LpWhyItem = {
  id: string;
  title: string;
  description: string;
};

type LpWhyGridProps = {
  items: readonly LpWhyItem[];
  renderIcon: (id: string) => ReactNode;
  /** Desktop columns: 3 (2×3) or 6 (single row on xl) */
  columns?: 3 | 6;
};

export function LpWhyGrid({
  items,
  renderIcon,
  columns = 3,
}: LpWhyGridProps) {
  return (
    <Section className="section-divider bg-surface py-8 md:py-12">
      <h2 className="text-center font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        Neden Bizi Tercih Etmelisiniz?
      </h2>
      <ul
        className={cn(
          "mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3",
          columns === 6
            ? "lg:grid-cols-3 xl:grid-cols-6"
            : "lg:grid-cols-3",
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center rounded-xl border border-border bg-surface px-3 py-3.5 text-center shadow-sm sm:px-4 sm:py-5"
          >
            <span className="text-primary">{renderIcon(item.id)}</span>
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
