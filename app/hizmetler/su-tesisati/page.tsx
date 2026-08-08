import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/content/services";
import {
  lpSuTesisatiPath,
  lpSuTesisatiWhatsAppMessage,
} from "@/content/lp/su-tesisati";
import { LpStickyBar } from "@/components/lp/LpStickyBar";
import { SuTesisatiHero } from "@/components/lp/su-tesisati/SuTesisatiHero";
import { SuTesisatiServices } from "@/components/lp/su-tesisati/SuTesisatiServices";
import { SuTesisatiEmergency } from "@/components/lp/su-tesisati/SuTesisatiEmergency";
import { SuTesisatiWhyProcess } from "@/components/lp/su-tesisati/SuTesisatiWhyProcess";
import { SuTesisatiGalleryReviews } from "@/components/lp/su-tesisati/SuTesisatiGalleryReviews";
import { SuTesisatiAreas } from "@/components/lp/su-tesisati/SuTesisatiAreas";
import { SuTesisatiFaq } from "@/components/lp/su-tesisati/SuTesisatiFaq";
import { SuTesisatiBottomCta } from "@/components/lp/su-tesisati/SuTesisatiBottomCta";

const service = getServiceBySlug("su-tesisati");

export const metadata = {
  ...buildMetadata({
    title: service?.title ?? "Su Tesisatı",
    description:
      service?.metaDescription ??
      "Pendik su tesisatı: boru hattı, musluk montajı, tadilat sonrası tesisat. Kurtköy, Kartal, Tuzla.",
    path: lpSuTesisatiPath,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function SuTesisatiServicePage() {
  return (
    <>
      <SuTesisatiHero />
      <SuTesisatiServices />
      <SuTesisatiEmergency />
      <SuTesisatiWhyProcess />
      <SuTesisatiGalleryReviews />
      <SuTesisatiAreas />
      <SuTesisatiFaq />
      <SuTesisatiBottomCta />
      <LpStickyBar whatsappMessage={lpSuTesisatiWhatsAppMessage} />
    </>
  );
}
