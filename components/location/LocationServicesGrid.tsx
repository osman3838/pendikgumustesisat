import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { LocationService } from "@/content/locations/types";

type LocationServicesGridProps = {
  heading: string;
  lead: string;
  services: readonly LocationService[];
};

export function LocationServicesGrid({
  heading,
  lead,
  services,
}: LocationServicesGridProps) {
  return (
    <Section className="section-divider bg-bg-alt py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
          {heading}
        </h2>
        <p className="mt-2 text-sm text-on-light-muted sm:text-base">
          {lead}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-8 sm:gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:border-primary/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <ServiceIcon
                    slug={
                      service.id === "tikaniklik"
                        ? "tikaniklik-acma"
                        : service.id === "su-kacagi"
                          ? "su-kacagi-tespiti"
                          : service.id === "su-tesisati"
                            ? "su-tesisati"
                            : service.id === "gomme-rezervuar"
                              ? "gomme-rezervuar"
                              : service.id === "petek-bakimi"
                                ? "petek-bakimi"
                                : "dogalgaz-tesisati"
                    }
                    className="h-6 w-6"
                  />
                </span>
                {service.badge ? (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {service.badge}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-4 font-heading text-lg font-semibold text-primary-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-light-muted">
                {service.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border">
              <Link
                href={service.serviceHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Hizmet detaylarını incele
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
