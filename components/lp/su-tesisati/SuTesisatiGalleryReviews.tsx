import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import {
  lpGoogleReviewsMeta,
  type LpGoogleReview,
} from "@/content/lp/google-reviews";
import {
  lpSuTesisatiGallery,
  lpSuTesisatiReviews,
} from "@/content/lp/su-tesisati";

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
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-[#fbbc05]" : "text-border"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function CompactReview({ review }: { review: LpGoogleReview }) {
  return (
    <article className="rounded-xl border border-border bg-surface px-3.5 py-3.5 shadow-sm">
      <div className="flex items-center gap-2">
        <Stars rating={review.rating} />
        <GoogleMark className="h-4 w-4 shrink-0" />
      </div>
      <p className="mt-2 line-clamp-3 text-sm leading-snug text-on-light-muted">
        {review.text}
      </p>
      <p className="mt-2 text-xs font-semibold text-on-light">{review.author}</p>
    </article>
  );
}

export function SuTesisatiGalleryReviews() {
  const { ratingAverage, reviewCount, mapsUrl } = lpGoogleReviewsMeta;

  return (
    <Section className="section-divider bg-surface py-5 md:py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <h2 className="font-heading text-lg font-semibold text-primary-dark sm:text-2xl md:text-3xl">
            Gerçek Çalışmalarımız
          </h2>
          <ul className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
            {lpSuTesisatiGallery.map((item) => (
              <li
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-xl border border-border bg-bg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 33vw, 180px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center sm:text-left">
            <Link
              href="/#saha"
              className="inline-flex rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
            >
              Tüm Çalışmaları Görün
            </Link>
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-primary-dark sm:text-2xl md:text-3xl">
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-stretch sm:gap-4">
            <div className="flex shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-surface px-4 py-5 text-center shadow-sm sm:w-36">
              <p className="font-heading text-3xl font-bold text-primary-dark">
                {ratingAverage.toFixed(1)}
              </p>
              <Stars rating={Math.round(ratingAverage)} />
              <p className="mt-2 text-xs font-medium text-on-light-muted">
                {reviewCount} Google yorumu
              </p>
            </div>
            <ul className="flex min-w-0 flex-1 flex-col gap-2.5">
              {lpSuTesisatiReviews.map((review) => (
                <li key={review.id}>
                  <CompactReview review={review} />
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-center sm:text-left">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
            >
              Tüm Yorumları Görün
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
