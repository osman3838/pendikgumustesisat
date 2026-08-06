"use client";

import { LpReviewsGrid } from "@/components/lp/LpReviewsGrid";
import { lpReviews } from "@/content/lp/tikaniklik-acma";

export function LpReviews() {
  return <LpReviewsGrid reviews={lpReviews} />;
}
