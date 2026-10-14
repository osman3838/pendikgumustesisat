import type { LpHeroBadge, LpHeroImage } from "@/components/lp/LpServiceHero";
import type { LpWhyItem } from "@/components/lp/LpWhyGrid";
import type { LpReelItem } from "@/components/lp/LpWorkReels";
import type { LpGoogleReview } from "@/content/lp/google-reviews";
import type { ServiceFaq } from "@/content/services";

export type LocationService = {
  id: string;
  title: string;
  description: string;
  serviceHref: string;
  badge?: string;
};

export type LocationProcessStep = {
  step: number;
  title: string;
  description: string;
  icon: "phone" | "person" | "wrench";
};

export type LocationConfig = {
  slug: string;
  path: string;
  district: string;
  meta: {
    title: string;
    description: string;
  };
  whatsAppMessage: string;
  hero: {
    title: string;
    lead: string;
    image: LpHeroImage;
    badges: readonly LpHeroBadge[];
  };
  emergency: {
    title: string;
    lead: string;
    ctaLabel: string;
  };
  servicesHeading: string;
  servicesLead: string;
  services: readonly LocationService[];
  neighborhoodsHeading: string;
  neighborhoodsLead: string;
  neighborhoods: readonly string[];
  whyUs: readonly LpWhyItem[];
  processSteps: readonly LocationProcessStep[];
  reels: readonly LpReelItem[];
  reviews: readonly LpGoogleReview[];
  faqs: ServiceFaq[];
  bottomCta: {
    title: string;
    lead: string;
  };
};
