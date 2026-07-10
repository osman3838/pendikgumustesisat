import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "İletişim",
  description: `${siteConfig.name} iletişim — ${siteConfig.areas.join(", ")}. ${siteConfig.hours} WhatsApp destek.`,
  path: "/iletisim",
});

export default function IletisimPage() {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <Section>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          İletişim
        </h1>
        <p className="mt-4 text-lg text-muted">
          Bize WhatsApp üzerinden 7/24 ulaşabilirsiniz.
        </p>

        <dl className="mt-10 space-y-6">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
              Hizmet Bölgeleri
            </dt>
            <dd className="mt-1 text-lg text-text">
              {siteConfig.areas.join(" • ")}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
              Çalışma Saatleri
            </dt>
            <dd className="mt-1 text-lg text-text">{siteConfig.hours}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
              WhatsApp
            </dt>
            <dd className="mt-1">
              <Button href={waUrl} external variant="whatsapp">
                WhatsApp&apos;tan Yazın
              </Button>
            </dd>
          </div>
        </dl>

        {/* TODO: İletişim formu — Formspree, Resend veya benzeri entegrasyon eklenebilir */}
        {/* TODO: Harita — Google Maps embed veya Mapbox ile konum gösterimi eklenebilir */}

        <div className="mt-12 rounded-xl border border-dashed border-slate-300 bg-bg p-6 text-sm text-muted">
          <p className="font-medium text-text">Yakında</p>
          <p className="mt-1">
            İletişim formu ve harita entegrasyonu ileride eklenecektir.
          </p>
        </div>
      </div>
    </Section>
  );
}
