import type { LpHeroBadge, LpHeroImage } from "@/components/lp/LpServiceHero";
import type { LpWhyItem } from "@/components/lp/LpWhyGrid";
import type { LpReelItem } from "@/components/lp/LpWorkReels";
import type { LpGoogleReview } from "@/content/lp/google-reviews";
import type { ServiceFaq } from "@/content/services";

export type TikaniklikClogType = {
  id: "lavabo" | "tuvalet" | "mutfak" | "banyo" | "pimas" | "logar";
  title: string;
  description: string;
};

export type TikaniklikProcessStep = {
  step: number;
  title: string;
  description: string;
  icon: "phone" | "person" | "wrench";
};

export type TikaniklikLocationConfig = {
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
  clogTypesHeading: string;
  clogTypesLead: string;
  clogTypes: readonly TikaniklikClogType[];
  solution: {
    title: string;
    lead: string;
    image: LpHeroImage;
    bullets: readonly string[];
  };
  neighborhoodsHeading: string;
  neighborhoodsLead: string;
  neighborhoods: readonly string[];
  whyUs: readonly LpWhyItem[];
  processSteps: readonly TikaniklikProcessStep[];
  reels: readonly LpReelItem[];
  reviews: readonly LpGoogleReview[];
  faqs: ServiceFaq[];
  bottomCta: {
    title: string;
    lead: string;
  };
};
