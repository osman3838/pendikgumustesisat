import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FieldWorkReelsGrid } from "@/components/home/FieldWorkReelsGrid";

export function FieldWorkReels() {
  return (
    <Section className="bg-bg-alt pb-12 pt-10 md:pb-16 md:pt-12">
      <SectionHeader
        eyebrow="Sahadan"
        title="Gerçek işlerimiz"
        lead="Kameralı tespit ve gider görüntüleme kayıtlarından sahadan görüntüler."
        className="max-w-none"
      />
      <FieldWorkReelsGrid />
    </Section>
  );
}
