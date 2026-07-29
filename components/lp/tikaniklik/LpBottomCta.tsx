import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  lpBottomCta,
  lpTikaniklikWhatsAppMessage,
} from "@/content/lp/tikaniklik-acma";

export function LpBottomCta() {
  const waUrl = whatsappUrl(lpTikaniklikWhatsAppMessage);

  return (
    <section className="surface-dark relative overflow-hidden bg-primary py-8 md:py-12">
      <div
        className="hero-mesh absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
        <div className="max-w-xl">
          <h2 className="font-heading text-lg font-semibold text-on-primary sm:text-xl md:text-2xl lg:text-3xl">
            {lpBottomCta.title}
          </h2>
          <p className="mt-1.5 text-sm font-medium text-on-primary md:mt-2 md:text-base">
            {lpBottomCta.lead}
          </p>
        </div>
        <div className="flex w-full max-w-md flex-row gap-2.5 sm:max-w-none sm:justify-center md:w-auto md:shrink-0 md:gap-3">
          <Button
            href={siteConfig.phoneTel}
            external
            variant="cta-call"
            className="min-h-12 uppercase tracking-wide shadow-lg"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Hemen Ara
          </Button>
          <Button
            href={waUrl}
            external
            variant="whatsapp"
            className="min-h-12 uppercase tracking-wide shadow-lg"
          >
            <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
            WhatsApp&apos;tan Yaz
          </Button>
        </div>
      </Container>
    </section>
  );
}
