import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { KirmaadanSection } from "@/components/home/KirmaadanSection";
import { FieldWorkReels } from "@/components/home/FieldWorkReels";
import { WhyUs } from "@/components/home/WhyUs";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata = buildMetadata({
  title: "Kırmadan Tıkanıklık Açma ve Su Kaçağı Tespiti",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <KirmaadanSection />
      <FieldWorkReels />
      <WhyUs />
      <CtaStrip />
    </>
  );
}
