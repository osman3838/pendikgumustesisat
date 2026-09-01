import { LpCtaBand } from "@/components/lp/LpCtaBand";
import {
  lpDogalgazBottomCta,
  lpDogalgazWhatsAppMessage,
} from "@/content/lp/dogalgaz-tesisati";

export function DogalgazBottomCta() {
  return (
    <LpCtaBand
      title={lpDogalgazBottomCta.title}
      lead={lpDogalgazBottomCta.lead}
      whatsappMessage={lpDogalgazWhatsAppMessage}
    />
  );
}
