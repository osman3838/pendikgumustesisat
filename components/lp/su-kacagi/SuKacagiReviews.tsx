"use client";

import { LpReviewsGrid } from "@/components/lp/LpReviewsGrid";
import { lpSuKacagiReviews } from "@/content/lp/su-kacagi-tespiti";

export function SuKacagiReviews() {
  return <LpReviewsGrid reviews={lpSuKacagiReviews} />;
}
