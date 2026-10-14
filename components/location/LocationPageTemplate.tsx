import { LpServiceHero } from "@/components/lp/LpServiceHero";
import { LpEmergencyBanner } from "@/components/lp/LpEmergencyBanner";
import { LpWorkReels } from "@/components/lp/LpWorkReels";
import { LpReviewsGrid } from "@/components/lp/LpReviewsGrid";
import { LpFaqSection } from "@/components/lp/LpFaqSection";
import { LpCtaBand } from "@/components/lp/LpCtaBand";
import { LpStickyBar } from "@/components/lp/LpStickyBar";
import { LocationJsonLd } from "@/components/location/LocationJsonLd";
import { LocationServicesGrid } from "@/components/location/LocationServicesGrid";
import { LocationNeighborhoods } from "@/components/location/LocationNeighborhoods";
import { LocationWhyProcess } from "@/components/location/LocationWhyProcess";
import type { LocationConfig } from "@/content/locations/types";

type LocationPageTemplateProps = {
  config: LocationConfig;
};

export function LocationPageTemplate({ config }: LocationPageTemplateProps) {
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

      <LocationServicesGrid
        heading={config.servicesHeading}
        lead={config.servicesLead}
        services={config.services}
      />

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
