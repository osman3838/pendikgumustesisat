import { buildMetadata } from "@/lib/metadata";
import {
  lpTikaniklikMeta,
  lpTikaniklikPath,
} from "@/content/lp/tikaniklik-acma";
import { LpStickyBar } from "@/components/lp/LpStickyBar";
import { LpHero } from "@/components/lp/tikaniklik/LpHero";
import { LpClogTypes } from "@/components/lp/tikaniklik/LpClogTypes";
import { LpSolution } from "@/components/lp/tikaniklik/LpSolution";
import { LpProcess } from "@/components/lp/tikaniklik/LpProcess";
import { LpReels } from "@/components/lp/tikaniklik/LpReels";
import { LpWhyUs } from "@/components/lp/tikaniklik/LpWhyUs";
import { LpAreas } from "@/components/lp/tikaniklik/LpAreas";
import { LpReviews } from "@/components/lp/tikaniklik/LpReviews";
import { LpFaq } from "@/components/lp/tikaniklik/LpFaq";
import { LpBottomCta } from "@/components/lp/tikaniklik/LpBottomCta";

export const metadata = {
  ...buildMetadata({
    title: lpTikaniklikMeta.title,
    description: lpTikaniklikMeta.description,
    path: lpTikaniklikPath,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function TikaniklikAcmaServicePage() {
  return (
    <>
      <LpHero />
      <LpClogTypes />
      <LpSolution />
      <LpProcess />
      <LpReels />
      <LpWhyUs />
      <LpAreas />
      <LpReviews />
      <LpFaq />
      <LpBottomCta />
      <LpStickyBar />
    </>
  );
}
