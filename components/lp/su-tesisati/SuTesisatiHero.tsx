import { LpServiceHero } from "@/components/lp/LpServiceHero";
import {
  lpSuTesisatiHero,
  lpSuTesisatiWhatsAppMessage,
} from "@/content/lp/su-tesisati";

export function SuTesisatiHero() {
  return (
    <LpServiceHero
      title={lpSuTesisatiHero.title}
      lead={lpSuTesisatiHero.lead}
      image={lpSuTesisatiHero.image}
      badges={lpSuTesisatiHero.badges}
      whatsappMessage={lpSuTesisatiWhatsAppMessage}
    />
  );
}
