import { notFound } from "next/navigation";
import Link from "next/link";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
} from "@/content/services";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

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
      <FaqJsonLd faqs={service.faq} />

      <PageHero
        title={service.title}
        description={service.shortDescription}
        backLink={{ href: "/hizmetler", label: "← Tüm hizmetler" }}
      />

      <Section className="bg-surface">
        <article className="prose max-w-3xl prose-headings:font-heading">
          <h2>{service.introHeading}</h2>
          {service.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}

          <h2>{service.processHeading}</h2>
          <ol>
            {service.processSteps.map((step) => (
              <li key={step.slice(0, 48)}>{step}</li>
            ))}
          </ol>
        </article>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={waUrl} external variant="whatsapp">
            WhatsApp&apos;tan Teklif Alın
          </Button>
          <a
            href={siteConfig.phoneTel}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-on-light-border bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-primary-light"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </Section>

      <Section className="section-divider bg-bg-alt">
        <SectionHeader
          as="h2"
          title="Sıkça sorulan sorular"
          className="max-w-none"
        />
        <dl className="mt-8 max-w-3xl space-y-6">
          {service.faq.map((item) => (
            <div key={item.question}>
              <dt className="card-title font-heading text-lg font-semibold">
                {item.question}
              </dt>
              <dd className="card-body mt-2 text-base leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {related.length > 0 ? (
        <Section className="section-divider bg-bg">
          <SectionHeader title="İlgili Hizmetler" className="max-w-none" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <Link
            href="/hizmetler"
            className="link-on-light mt-6 inline-block text-sm font-semibold"
          >
            Tüm hizmetler →
          </Link>
        </Section>
      ) : null}
    </>
  );
}
