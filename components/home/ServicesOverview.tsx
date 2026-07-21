import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site-config";

export function ServicesOverview() {
  return (
    <Section className="section-divider bg-surface pt-4 md:pt-6">
      <SectionHeader
        as="h2"
        title="Pendik ve çevresinde tesisat çözümleri"
        className="max-w-none"
      />
      <div className="prose mt-6 max-w-3xl prose-headings:font-heading">
        <p>
          Pendik Gümüş Tesisat olarak Pendik, Kurtköy, Kartal ve Tuzla&apos;da
          günlük tesisat sorunlarından acil müdahaleye kadar yanınızdayız.
          Lavabo veya tuvalet tıkanıklığında{" "}
          <Link href="/hizmetler/tikaniklik-acma">
            kırmadan tıkanıklık açma
          </Link>
          ; fatura artışı veya duvar neminde{" "}
          <Link href="/hizmetler/su-kacagi-tespiti">
            kameralı su kaçağı tespiti
          </Link>{" "}
          ile kaynağı buluyoruz.
        </p>
        <p>
          Musluk, vana ve bağlantı sorunlarında{" "}
          <Link href="/hizmetler/tesisat-arizalari">tesisat arızaları</Link>;
          gömme rezervuar akıntılarında{" "}
          <Link href="/hizmetler/gomme-rezervuar">gömme rezervuar tamiri</Link>;
          hat ve montaj işlerinde{" "}
          <Link href="/hizmetler/su-tesisati">su tesisatı</Link> hizmeti
          veriyoruz. Isınma tarafında{" "}
          <Link href="/hizmetler/petek-bakimi">petek bakımı</Link> ve{" "}
          <Link href="/hizmetler/kombi-bakim-onarim">
            kombi bakım ve onarım
          </Link>
          ; doğalgaz iç tesisat ihtiyaçlarında{" "}
          <Link href="/hizmetler/dogalgaz-tesisati">doğalgaz tesisatı</Link>{" "}
          için keşif planlıyoruz.
        </p>
        <p>
          Su baskını veya ani arızada{" "}
          <Link href="/hizmetler/acil-servis">7/24 acil servis</Link>{" "}
          hattımızdan ulaşabilirsiniz. Kısa bir mesaj veya arama yeterli —
          WhatsApp&apos;tan yazın veya {siteConfig.phoneDisplay}&apos;i arayın.
        </p>
      </div>
    </Section>
  );
}
