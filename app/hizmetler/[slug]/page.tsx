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
import { Section } from "@/components/ui/Section";

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
      <Section className="bg-primary text-white">
        <div className="max-w-3xl">
          <Link
            href="/hizmetler"
            className="text-sm text-slate-200 hover:text-white"
          >
            ← Tüm hizmetler
          </Link>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-slate-100">
            {service.shortDescription}
          </p>
        </div>
      </Section>

      <Section>
        <div className="prose prose-slate max-w-3xl">
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

      <Section className="bg-bg">
        <h2 className="text-xl font-bold text-primary">Diğer Hizmetler</h2>
        <ul className="mt-4 space-y-2">
          {related.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/hizmetler/${s.slug}`}
                className="text-accent hover:underline"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
