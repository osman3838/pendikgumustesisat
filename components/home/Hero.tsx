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
      <section className="surface-dark hero-gradient hero-mesh">
        <Container className="py-10 md:py-12 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="inline-flex items-center rounded-full border border-on-dark-border bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-on-dark-muted backdrop-blur-sm">
                {siteConfig.hours} Acil Servis
              </span>
              <h1 className="mt-4 text-3xl font-semibold leading-[1.15] text-on-dark sm:text-4xl lg:text-[2.65rem]">
                Kırmadan Tıkanıklık Açma ve Su Kaçağı Tespiti — Pendik,
                Kartal, Tuzla
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-on-dark-muted md:text-lg">
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
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-on-dark-border bg-white/10 px-6 py-3 text-sm font-semibold text-on-dark backdrop-blur-sm hover:bg-white/15"
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
