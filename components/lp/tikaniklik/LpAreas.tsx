import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";
import { lpAreasNote } from "@/content/lp/tikaniklik-acma";

const tikaniklikAreaLinks: Record<string, string> = {
  Pendik: "/pendik-tikaniklik-acma",
  Kurtköy: "/pendik-tikaniklik-acma",
  Kartal: "/kartal-tikaniklik-acma",
  Tuzla: "/tuzla-tikaniklik-acma",
};

export function LpAreas() {
  return (
    <Section className="section-divider bg-bg-alt py-8 md:py-12">
      <h2 className="text-center font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        Hizmet Bölgelerimiz
      </h2>
      <ul className="mx-auto mt-4 grid max-w-3xl grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 lg:flex lg:max-w-none lg:flex-wrap lg:justify-center">
        {siteConfig.areas.map((area) => {
          const href = tikaniklikAreaLinks[area] ?? "/pendik-tikaniklik-acma";
          return (
            <li key={area}>
              <Link
                href={href}
                className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-surface px-3 py-2.5 text-sm font-semibold text-primary-dark shadow-sm transition hover:border-primary hover:bg-primary-light sm:gap-2 sm:px-6 sm:py-3 sm:text-base lg:w-auto"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:scale-110 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
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
                {area} Tıkanıklık Açma
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-center text-xs text-on-light-muted sm:mt-5 sm:text-sm">
        {lpAreasNote}
      </p>
    </Section>
  );
}
