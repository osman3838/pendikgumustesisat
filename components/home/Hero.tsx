import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { HeroVisual } from "./HeroVisual";
import { TrustBar } from "./TrustBar";

export function Hero() {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <>
      <section className="surface-light border-b border-border bg-bg-alt">
        <Container className="py-10 md:py-12 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="inline-flex items-center rounded-full border border-on-light-border bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {siteConfig.hours} Acil Servis
              </span>
              <h1 className="mt-4 text-3xl font-semibold leading-[1.15] text-on-light sm:text-4xl lg:text-[2.65rem]">
                Kırmadan Tıkanıklık Açma ve Su Kaçağı Tespiti — Pendik,
                Kartal, Tuzla
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-on-light-muted md:text-lg">
                Kameralı cihazlarla noktasal tespit, robotik müdahale. Duvar ve
                fayansınıza zarar vermeden; aynı gün, garantili çözüm.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={waUrl}
                  external
                  variant="whatsapp"
                  className="shadow-md"
                >
                  WhatsApp&apos;tan Hemen Yazın
                </Button>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-on-light-border bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-primary-light"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
        </Container>
      </section>
      <TrustBar />
    </>
  );
}
