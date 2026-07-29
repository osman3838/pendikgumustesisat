"use client";

import { useId, useState } from "react";
import type { ServiceFaq } from "@/content/services";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  faqs: ServiceFaq[];
  className?: string;
};

export function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "divide-y divide-border rounded-xl border border-border bg-surface shadow-sm",
        className,
      )}
    >
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-3 px-3.5 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-5"
              >
                <span className="font-heading text-sm font-semibold text-primary-dark sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center text-on-light-subtle transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-3.5 pb-3.5 sm:px-5 sm:pb-5"
            >
              <p className="text-sm leading-relaxed text-on-light-muted sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
