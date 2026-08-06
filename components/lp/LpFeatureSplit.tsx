import Image from "next/image";
import { Section } from "@/components/ui/Section";

type LpFeatureSplitProps = {
  title: string;
  lead?: string;
  image: { src: string; alt: string; width: number; height: number };
  bullets: readonly string[];
};

export function LpFeatureSplit({
  title,
  lead,
  image,
  bullets,
}: LpFeatureSplitProps) {
  return (
    <Section className="section-divider bg-bg-alt py-5 md:py-12">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <div className="grid grid-cols-2 items-stretch">
          <div className="relative min-h-[170px] bg-bg sm:min-h-[240px] lg:min-h-[300px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={95}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 50vw, 560px"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
            <h2 className="font-heading text-sm font-semibold leading-snug text-primary-dark sm:text-xl md:text-2xl lg:text-[1.75rem]">
              {title}
            </h2>
            {lead ? (
              <p className="mt-1.5 text-[11px] leading-snug text-on-light-muted sm:mt-3 sm:text-sm sm:leading-relaxed">
                {lead}
              </p>
            ) : null}
            <ul className="mt-2 space-y-1.5 sm:mt-4 sm:space-y-3">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-1.5 text-[11px] leading-snug text-on-light sm:gap-2.5 sm:text-sm"
                >
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-on-primary sm:h-5 sm:w-5 sm:text-[10px]"
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
