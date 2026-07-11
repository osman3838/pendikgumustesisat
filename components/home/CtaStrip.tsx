import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/whatsapp";

export function CtaStrip() {
  const waUrl = whatsappUrl(
    "Merhaba, tıkanıklık sorunu yaşıyorum. Aynı gün servis alabilir miyim?",
  );

  return (
    <section className="surface-dark relative overflow-hidden bg-primary py-12">
      <div
        className="hero-mesh absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-display text-xl font-semibold text-on-dark md:text-2xl">
          Tıkanıklık mı var? Ekibimiz aynı gün adresinize gelir.
        </p>
        <Button href={waUrl} external variant="whatsapp" className="shrink-0 shadow-lg">
          WhatsApp&apos;tan Yazın
        </Button>
      </Container>
    </section>
  );
}
