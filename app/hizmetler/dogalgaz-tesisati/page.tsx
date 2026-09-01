import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/content/services";
import {
  lpDogalgazPath,
  lpDogalgazWhatsAppMessage,
} from "@/content/lp/dogalgaz-tesisati";
import { LpStickyBar } from "@/components/lp/LpStickyBar";
import { DogalgazHero } from "@/components/lp/dogalgaz/DogalgazHero";
import { DogalgazServices } from "@/components/lp/dogalgaz/DogalgazServices";
import { DogalgazFeature } from "@/components/lp/dogalgaz/DogalgazFeature";
import { DogalgazProcess } from "@/components/lp/dogalgaz/DogalgazProcess";
import { DogalgazGallery } from "@/components/lp/dogalgaz/DogalgazGallery";
import { DogalgazWhyUs } from "@/components/lp/dogalgaz/DogalgazWhyUs";
import { DogalgazAreas } from "@/components/lp/dogalgaz/DogalgazAreas";
import { DogalgazFaq } from "@/components/lp/dogalgaz/DogalgazFaq";
import { DogalgazBottomCta } from "@/components/lp/dogalgaz/DogalgazBottomCta";

const service = getServiceBySlug("dogalgaz-tesisati");

export const metadata = {
  ...buildMetadata({
    title: service?.title ?? "Doğalgaz Tesisatı",
    description:
      service?.metaDescription ??
      "Pendik doğalgaz tesisatı: iç tesisat, hat çekimi ve güvenli bağlantı. Kurtköy, Kartal, Tuzla.",
    path: lpDogalgazPath,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function DogalgazTesisatiServicePage() {
  return (
    <>
      <DogalgazHero />
      <DogalgazServices />
      <DogalgazFeature />
      <DogalgazProcess />
      <DogalgazGallery />
      <DogalgazWhyUs />
      <DogalgazAreas />
      <DogalgazFaq />
      <DogalgazBottomCta />
      <LpStickyBar whatsappMessage={lpDogalgazWhatsAppMessage} />
    </>
  );
}
