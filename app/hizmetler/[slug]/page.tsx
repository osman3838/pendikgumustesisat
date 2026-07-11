import { notFound } from "next/navigation";
import Link from "next/link";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
} from "@/content/services";
import { buildMetadata } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);
  const waUrl = whatsappUrl(
    `Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`,
  );

  return (
    <>
      <PageHero
        title={service.title}
        description={service.shortDescription}
        backLink={{ href: "/hizmetler", label: "← Tüm hizmetler" }}
      />

      <Section className="bg-surface">
        <div className="prose prose-slate max-w-3xl prose-headings:font-display">
          {service.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10">
          <Button href={waUrl} external variant="whatsapp">
            WhatsApp&apos;tan Teklif Alın
          </Button>
        </div>
      </Section>

      <Section className="section-divider bg-bg-alt">
        <h2 className="font-display text-xl font-semibold text-primary">
          Diğer Hizmetler
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <Link
          href="/hizmetler"
          className="mt-6 inline-block text-sm font-semibold text-accent hover:underline"
        >
          Tüm hizmetler →
        </Link>
      </Section>
    </>
  );
}
