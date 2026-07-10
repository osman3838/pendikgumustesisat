import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/whatsapp";

export function CtaStrip() {
  const waUrl = whatsappUrl(
    "Merhaba, tıkanıklık sorunu yaşıyorum. Aynı gün servis alabilir miyim?",
  );

  return (
    <section className="bg-accent py-12 text-white">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-xl font-semibold md:text-2xl">
          Tıkanıklık mı var? Ekibimiz aynı gün adresinize gelir.
        </p>
        <Button href={waUrl} external variant="whatsapp" className="shrink-0">
          WhatsApp&apos;tan Yazın
        </Button>
      </Container>
    </section>
  );
}
