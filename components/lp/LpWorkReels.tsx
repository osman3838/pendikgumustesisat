"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { ReelCard } from "@/components/home/ReelCard";
import { cn } from "@/lib/utils";

export type LpReelItem = {
  id: string;
  title: string;
  posterSrc: string;
  videoSrc: string;
};

const reelItemClass =
  "w-fit shrink-0 snap-center first:snap-start last:snap-end";

const reelFrameClass =
  "aspect-[9/16] h-[min(220px,40vh)] w-auto md:h-[min(360px,42vh)]";

type LpWorkReelsProps = {
  reels: readonly LpReelItem[];
  showAllLink?: boolean;
};

export function LpWorkReels({
  reels,
  showAllLink = true,
}: LpWorkReelsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Section className="section-divider bg-bg-alt py-8 md:py-12">
      <h2 className="text-center font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        Gerçek Çalışmalarımız
      </h2>
      <div ref={ref} className="mt-4 sm:mt-6 md:mt-8">
        <div
          className={cn(
            "flex justify-start gap-3 overflow-x-auto px-1 pb-2 sm:justify-center sm:gap-4 sm:px-0",
            "snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "md:gap-5",
          )}
        >
          {reels.map((reel) =>
            visible ? (
              <ReelCard
                key={reel.id}
                title={reel.title}
                posterSrc={reel.posterSrc}
                videoSrc={reel.videoSrc}
                className={reelItemClass}
              />
            ) : (
              <div key={reel.id} className={reelItemClass} aria-hidden="true">
                <div
                  className={cn(
                    reelFrameClass,
                    "rounded-xl border border-border bg-bg",
                  )}
                />
              </div>
            ),
          )}
        </div>
        {showAllLink ? (
          <p className="mt-5 text-center">
            <Link
              href="/#saha"
              className="link-on-light text-sm font-semibold"
            >
              Tüm çalışmalarımızı görmek için tıklayın →
            </Link>
          </p>
        ) : null}
      </div>
    </Section>
  );
}
