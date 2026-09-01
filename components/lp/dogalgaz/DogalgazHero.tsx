import { LpServiceHero } from "@/components/lp/LpServiceHero";
import {
  lpDogalgazHero,
  lpDogalgazWhatsAppMessage,
} from "@/content/lp/dogalgaz-tesisati";

export function DogalgazHero() {
  return (
    <LpServiceHero
      title={lpDogalgazHero.title}
      lead={lpDogalgazHero.lead}
      image={lpDogalgazHero.image}
      badges={lpDogalgazHero.badges}
      whatsappMessage={lpDogalgazWhatsAppMessage}
    />
  );
}
