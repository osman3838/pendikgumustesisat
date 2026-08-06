import { LpCtaBand } from "@/components/lp/LpCtaBand";
import {
  lpSuKacagiBottomCta,
  lpSuKacagiWhatsAppMessage,
} from "@/content/lp/su-kacagi-tespiti";

export function SuKacagiBottomCta() {
  return (
    <LpCtaBand
      title={lpSuKacagiBottomCta.title}
      lead={lpSuKacagiBottomCta.lead}
      whatsappMessage={lpSuKacagiWhatsAppMessage}
    />
  );
}
