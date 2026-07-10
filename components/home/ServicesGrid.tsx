import Link from "next/link";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Section } from "@/components/ui/Section";

export function ServicesGrid() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Hizmetlerimiz
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          Pendik, Kartal ve Tuzla genelinde profesyonel tesisat hizmetleri.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="mt-8 text-center">
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
