import { buildMetadata } from "@/lib/metadata";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Hizmetlerimiz",
  description:
    "Su kaçağı tespiti, tıkanıklık açma, gömme rezervuar, tesisat arızaları, petek bakımı ve 7/24 acil servis.",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          Hizmetlerimiz
        </h1>
        <p className="mt-4 text-lg text-muted">
          Pendik, Kartal ve Tuzla genelinde sunduğumuz tesisat ve tıkanıklık
          açma hizmetleri.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
