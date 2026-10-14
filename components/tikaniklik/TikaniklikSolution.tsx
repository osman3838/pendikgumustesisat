import Image from "next/image";
import { Section } from "@/components/ui/Section";
import type { TikaniklikLocationConfig } from "@/content/locations/tikaniklik/types";

type TikaniklikSolutionProps = {
  solution: TikaniklikLocationConfig["solution"];
};

export function TikaniklikSolution({ solution }: TikaniklikSolutionProps) {
  const { title, lead, image, bullets } = solution;

  return (
    <Section className="section-divider bg-bg-alt py-8 md:py-12">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative min-h-[220px] sm:min-h-[300px] lg:min-h-[360px] bg-bg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary w-fit">
              İleri Teknoloji
            </span>
            <h2 className="mt-3 font-heading text-lg font-semibold leading-snug text-primary-dark sm:text-2xl lg:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-on-light-muted sm:text-base">
              {lead}
            </p>
            <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-on-light"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-on-primary"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
