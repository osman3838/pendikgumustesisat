import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <section className="bg-primary text-white">
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
            7/24 Acil Servis
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Kırmadan Tıkanıklık Açma ve Su Kaçağı Tespiti — Pendik, Kartal,
            Tuzla
          </h1>
          <p className="mt-6 text-lg text-slate-100 md:text-xl">
            Kameralı cihazlarla noktasal tespit, robotik müdahale. Duvar ve
            fayansınıza zarar vermeden; aynı gün, garantili çözüm.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={waUrl}
              external
              variant="whatsapp"
              className="text-base"
            >
              WhatsApp&apos;tan Hemen Yazın
            </Button>
            <span className="text-sm font-medium text-slate-200">
              7/24 Acil Servis
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
