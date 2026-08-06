import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/content/services";
import {
  lpSuKacagiPath,
  lpSuKacagiWhatsAppMessage,
} from "@/content/lp/su-kacagi-tespiti";
import { LpStickyBar } from "@/components/lp/LpStickyBar";
import { SuKacagiHero } from "@/components/lp/su-kacagi/SuKacagiHero";
import { SuKacagiSymptoms } from "@/components/lp/su-kacagi/SuKacagiSymptoms";
import { SuKacagiSolution } from "@/components/lp/su-kacagi/SuKacagiSolution";
import { SuKacagiLeakTypes } from "@/components/lp/su-kacagi/SuKacagiLeakTypes";
import { SuKacagiProcess } from "@/components/lp/su-kacagi/SuKacagiProcess";
import { SuKacagiReels } from "@/components/lp/su-kacagi/SuKacagiReels";
import { SuKacagiWhyUs } from "@/components/lp/su-kacagi/SuKacagiWhyUs";
import { SuKacagiAreas } from "@/components/lp/su-kacagi/SuKacagiAreas";
import { SuKacagiReviews } from "@/components/lp/su-kacagi/SuKacagiReviews";
import { SuKacagiFaq } from "@/components/lp/su-kacagi/SuKacagiFaq";
import { SuKacagiBottomCta } from "@/components/lp/su-kacagi/SuKacagiBottomCta";

const service = getServiceBySlug("su-kacagi-tespiti");

export const metadata = {
  ...buildMetadata({
    title: service?.title ?? "Su Kaçağı Tespiti",
    description:
      service?.metaDescription ??
      "Pendik su kaçağı tespiti: kameralı ve akustik yöntemlerle duvar kırmadan noktasal tespit.",
    path: lpSuKacagiPath,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function SuKacagiTespitiServicePage() {
  return (
    <>
      <SuKacagiHero />
      <SuKacagiSymptoms />
      <SuKacagiSolution />
      <SuKacagiLeakTypes />
      <SuKacagiProcess />
      <SuKacagiReels />
      <SuKacagiWhyUs />
      <SuKacagiAreas />
      <SuKacagiReviews />
      <SuKacagiFaq />
      <SuKacagiBottomCta />
      <LpStickyBar whatsappMessage={lpSuKacagiWhatsAppMessage} />
    </>
  );
}
