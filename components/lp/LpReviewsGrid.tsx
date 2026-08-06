"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { lpGoogleReviewsMeta } from "@/content/lp/google-reviews";
import type { LpGoogleReview } from "@/content/lp/google-reviews";
import { cn } from "@/lib/utils";

export type LpReviewItem = LpGoogleReview;

const INITIAL_VISIBLE = 3;

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-[#fbbc05]" : "text-border"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: LpReviewItem }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface px-4 py-4 sm:px-5 sm:py-5">
      <Stars rating={review.rating} />
      <h3 className="mt-3 font-heading text-sm font-bold text-on-light sm:text-base">
        {review.author}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-snug text-on-light-muted line-clamp-5 sm:leading-relaxed">
        {review.text}
      </p>
    </article>
  );
}

type LpReviewsGridProps = {
  reviews: readonly LpReviewItem[];
  ratingAverage?: number;
  reviewCount?: number;
  mapsUrl?: string;
  initialVisible?: number;
};

export function LpReviewsGrid({
  reviews,
  ratingAverage = lpGoogleReviewsMeta.ratingAverage,
  reviewCount = lpGoogleReviewsMeta.reviewCount,
  mapsUrl = lpGoogleReviewsMeta.mapsUrl,
  initialVisible = INITIAL_VISIBLE,
}: LpReviewsGridProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? reviews : reviews.slice(0, initialVisible);
  const canExpand = reviews.length > initialVisible;

  return (
    <Section className="section-divider bg-bg-alt py-8 md:py-12">
      <h2 className="text-center font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        Google&apos;da Bizi Tercih Eden Müşterilerimiz
      </h2>

      <div className="mt-5 overflow-hidden rounded-lg bg-[#1a1a1a] sm:mt-6">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-3 text-sm text-white sm:gap-x-4 sm:text-base">
          <GoogleMark className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
          <span className="font-bold tabular-nums">
            {ratingAverage.toFixed(1)}
          </span>
          <Stars rating={Math.round(ratingAverage)} />
          <span className="font-medium text-white/90">
            {reviewCount} Google yorumu
          </span>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-white underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Tüm yorumlar
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {visible.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>

      {canExpand && !expanded ? (
        <div className="mt-5 flex justify-center sm:mt-6">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-on-light-muted transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Daha Fazla Göster
          </button>
        </div>
      ) : null}
    </Section>
  );
}
