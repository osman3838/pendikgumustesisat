import { LpCtaBand } from "@/components/lp/LpCtaBand";
import {
  lpSuTesisatiBottomCta,
  lpSuTesisatiWhatsAppMessage,
} from "@/content/lp/su-tesisati";

export function SuTesisatiBottomCta() {
  return (
    <LpCtaBand
      title={lpSuTesisatiBottomCta.title}
      lead={lpSuTesisatiBottomCta.lead}
      whatsappMessage={lpSuTesisatiWhatsAppMessage}
    />
  );
}
