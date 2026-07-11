import { buildMetadata } from "@/lib/metadata";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Hizmetlerimiz",
  description:
    "Su kaçağı tespiti, tıkanıklık açma, gömme rezervuar, tesisat arızaları, petek bakımı ve 7/24 acil servis.",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        description="Pendik, Kartal ve Tuzla genelinde sunduğumuz tesisat ve tıkanıklık açma hizmetleri."
      />
      <Section className="bg-bg-alt">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
    </>
  );
}
