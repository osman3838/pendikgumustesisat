import { LpEmergencyBanner } from "@/components/lp/LpEmergencyBanner";
import { lpSuTesisatiEmergency } from "@/content/lp/su-tesisati";

export function SuTesisatiEmergency() {
  return (
    <LpEmergencyBanner
      title={lpSuTesisatiEmergency.title}
      lead={lpSuTesisatiEmergency.lead}
      ctaLabel={lpSuTesisatiEmergency.ctaLabel}
    />
  );
}
