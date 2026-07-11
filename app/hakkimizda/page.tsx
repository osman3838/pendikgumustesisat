import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Hakkımızda",
  description: `${siteConfig.name} — Pendik, Kartal ve Tuzla'da güvenilir tesisat hizmeti.`,
  path: "/hakkimizda",
});

export default function HakkimizdaPage() {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <>
      <PageHero title="Hakkımızda" />
      <Section className="bg-surface">
        <div className="prose prose-slate max-w-3xl prose-headings:font-display">
          <p>
            {siteConfig.name} olarak Pendik, Kartal ve Tuzla bölgelerinde
            tesisat, tıkanıklık açma ve su kaçağı tespiti alanlarında
            profesyonel hizmet sunuyoruz. Müşterilerimize kırmadan müdahale
            yöntemleriyle hızlı, temiz ve kalıcı çözümler sağlamayı
            hedefliyoruz.
          </p>
          <p>
            Kameralı görüntüleme ve robotik ekipmanlarımız sayesinde
            tıkanıklıkların ve kaçakların yerini noktasal olarak tespit
            ediyor; gereksiz duvar kırma ve ek masrafların önüne geçiyoruz.
          </p>
          <p>
            {siteConfig.hours} acil servis imkânımızla su baskını, patlak boru
            ve ani tıkanıklık gibi acil durumlarda hızlı müdahale ediyoruz.
            Bölgenizde güvenilir bir tesisat ekibi arıyorsanız WhatsApp
            üzerinden bize ulaşabilirsiniz.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={waUrl} external variant="whatsapp">
            WhatsApp&apos;tan İletişime Geçin
          </Button>
          <Button href={siteConfig.phoneTel} external variant="outline">
            {siteConfig.phoneDisplay}
          </Button>
        </div>
      </Section>
    </>
  );
}
