import { LpServiceHero } from "@/components/lp/LpServiceHero";
import {
  lpSuKacagiHero,
  lpSuKacagiWhatsAppMessage,
} from "@/content/lp/su-kacagi-tespiti";

export function SuKacagiHero() {
  return (
    <LpServiceHero
      title={lpSuKacagiHero.title}
      lead={lpSuKacagiHero.lead}
      image={lpSuKacagiHero.image}
      badges={lpSuKacagiHero.badges}
      whatsappMessage={lpSuKacagiWhatsAppMessage}
    />
  );
}
