import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { ServiceAreaMap } from "@/components/ui/ServiceAreaMap";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata = buildMetadata({
  title: "İletişim",
  description: `${siteConfig.name} iletişim — ${siteConfig.areas.join(", ")}. ${siteConfig.hours} WhatsApp destek.`,
  path: "/iletisim",
});

export default function IletisimPage() {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <>
      <PageHero
        title="İletişim"
        description="Bize WhatsApp veya telefon ile 7/24 ulaşabilirsiniz."
      />
      <Section className="bg-surface">
        <div className="max-w-3xl">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-bg p-5 shadow-sm">
              <dt className="card-body text-xs font-semibold uppercase tracking-wide">
                Hizmet Bölgeleri
              </dt>
              <dd className="card-title mt-2 text-lg font-semibold">
                {siteConfig.areas.join(" • ")}
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-bg p-5 shadow-sm">
              <dt className="card-body text-xs font-semibold uppercase tracking-wide">
                Çalışma Saatleri
              </dt>
              <dd className="card-title mt-2 text-lg font-semibold">
                {siteConfig.hours}
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-bg p-5 shadow-sm sm:col-span-2">
              <dt className="card-body text-xs font-semibold uppercase tracking-wide">
                Hemen Ulaşın
              </dt>
              <dd className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button href={waUrl} external variant="whatsapp">
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp&apos;tan Yazın
                </Button>
                <Button href={siteConfig.phoneTel} external variant="outline">
                  <PhoneIcon className="h-5 w-5" />
                  {siteConfig.phoneDisplay}
                </Button>
              </dd>
            </div>
          </dl>

          <ServiceAreaMap />
        </div>
      </Section>
    </>
  );
}
