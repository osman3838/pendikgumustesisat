import Link from "next/link";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Section } from "@/components/ui/Section";

export function ServicesGrid() {
  return (
    <Section className="bg-bg-alt pb-12 pt-10 md:pb-16 md:pt-12">
      <div>
        <h2 className="font-display text-2xl font-semibold text-primary md:text-3xl">
          Hizmetlerimiz
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Pendik, Kartal ve Tuzla genelinde profesyonel tesisat hizmetleri.
        </p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/hizmetler"
          className="text-sm font-semibold text-accent hover:underline"
        >
          Tüm hizmetleri görüntüle →
        </Link>
      </div>
    </Section>
  );
}
