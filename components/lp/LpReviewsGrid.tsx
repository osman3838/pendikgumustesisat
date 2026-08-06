"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export type LpReviewItem = {
  id: string;
  text: string;
  rating: number;
};

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

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5" aria-hidden="true">
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
      <span className="text-sm font-bold text-on-light">{rating.toFixed(1)}</span>
    </div>
  );
}

function ReviewCard({
  text,
  rating,
}: {
  text: string;
  rating: number;
}) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface px-4 py-4 shadow-sm sm:px-5 sm:py-5">
      <div className="flex items-center gap-3">
        <GoogleMark className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
        <Stars rating={rating} />
      </div>
      <p className="mt-3 flex-1 text-sm leading-snug text-on-light-muted sm:mt-4 sm:leading-relaxed">
        {text}
      </p>
      <p className="mt-3 text-xs font-medium text-on-light-subtle sm:mt-4">
        Google yorumu
      </p>
    </article>
  );
}

type LpReviewsGridProps = {
  reviews: readonly LpReviewItem[];
};

export function LpReviewsGrid({ reviews }: LpReviewsGridProps) {
  const [active, setActive] = useState(0);

  return (
    <Section className="section-divider bg-surface py-8 md:py-12">
      <h2 className="text-center font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        Google&apos;da Bizi Tercih Eden Müşterilerimiz
      </h2>

      <ul className="mt-4 hidden gap-4 sm:mt-6 md:grid md:grid-cols-3">
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewCard text={review.text} rating={review.rating} />
          </li>
        ))}
      </ul>

      <div className="mt-4 md:hidden">
        <ReviewCard
          text={reviews[active].text}
          rating={reviews[active].rating}
        />
        <div
          className="mt-4 flex justify-center gap-2"
          role="tablist"
          aria-label="Yorumlar"
        >
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`${index + 1}. yorum`}
              onClick={() => setActive(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                active === index ? "bg-primary" : "bg-on-light-border",
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
