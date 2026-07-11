import Link from "next/link";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServicesGrid() {
  return (
    <Section className="bg-bg-alt pb-12 pt-10 md:pb-16 md:pt-12">
      <SectionHeader
        title="Hizmetlerimiz"
        lead="Pendik, Kurtköy, Kartal ve Tuzla genelinde profesyonel tesisat hizmetleri."
        className="max-w-none"
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="mt-8">
        <Link href="/hizmetler" className="link-on-light text-sm font-semibold">
          Tüm hizmetleri görüntüle →
        </Link>
      </div>
    </Section>
  );
}
