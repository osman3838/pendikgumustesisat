import { LpServiceHero } from "@/components/lp/LpServiceHero";
import { LpEmergencyBanner } from "@/components/lp/LpEmergencyBanner";
import { LpWorkReels } from "@/components/lp/LpWorkReels";
import { LpReviewsGrid } from "@/components/lp/LpReviewsGrid";
import { LpFaqSection } from "@/components/lp/LpFaqSection";
import { LpCtaBand } from "@/components/lp/LpCtaBand";
import { LpStickyBar } from "@/components/lp/LpStickyBar";
import { LocationJsonLd } from "@/components/location/LocationJsonLd";
import { LocationNeighborhoods } from "@/components/location/LocationNeighborhoods";
import { LocationWhyProcess } from "@/components/location/LocationWhyProcess";
import { TikaniklikClogTypes } from "@/components/tikaniklik/TikaniklikClogTypes";
import { TikaniklikSolution } from "@/components/tikaniklik/TikaniklikSolution";
import type { TikaniklikLocationConfig } from "@/content/locations/tikaniklik/types";

type TikaniklikLocationTemplateProps = {
  config: TikaniklikLocationConfig;
};

export function TikaniklikLocationTemplate({
  config,
}: TikaniklikLocationTemplateProps) {
  return (
    <>
      <LocationJsonLd
        district={config.district}
        slug={config.slug}
        neighborhoods={config.neighborhoods}
      />

      <LpServiceHero
        title={config.hero.title}
        lead={config.hero.lead}
        image={config.hero.image}
        badges={config.hero.badges}
        whatsappMessage={config.whatsAppMessage}
      />

      <LpEmergencyBanner
        title={config.emergency.title}
        lead={config.emergency.lead}
        ctaLabel={config.emergency.ctaLabel}
      />

      <TikaniklikClogTypes
        heading={config.clogTypesHeading}
        lead={config.clogTypesLead}
        clogTypes={config.clogTypes}
      />

      <TikaniklikSolution solution={config.solution} />

      <LocationNeighborhoods
        district={config.district}
        heading={config.neighborhoodsHeading}
        lead={config.neighborhoodsLead}
        neighborhoods={config.neighborhoods}
        whatsAppMessage={config.whatsAppMessage}
      />

      <LocationWhyProcess
        district={config.district}
        whyUs={config.whyUs}
        processSteps={config.processSteps}
      />

      <LpWorkReels reels={config.reels} />

      <LpReviewsGrid reviews={config.reviews} />

      <LpFaqSection faqs={config.faqs} />

      <LpCtaBand
        title={config.bottomCta.title}
        lead={config.bottomCta.lead}
        whatsappMessage={config.whatsAppMessage}
      />

      <LpStickyBar whatsappMessage={config.whatsAppMessage} />
    </>
  );
}
