"use client";

import { useEffect, useRef, useState } from "react";
import { fieldWorkReels } from "@/content/field-work-reels";
import { ReelCard } from "@/components/home/ReelCard";
import { cn } from "@/lib/utils";

const reelItemClass = "w-fit shrink-0 snap-center first:snap-start last:snap-end";

const reelFrameClass =
  "aspect-[9/16] h-[min(300px,54vh)] w-auto md:h-[min(440px,46vh)]";

export function FieldWorkReelsGrid() {
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
    <div ref={ref} className="mt-8 md:mt-10">
      <div
        className={cn(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "md:gap-5 md:px-0",
        )}
      >
        {fieldWorkReels.map((reel) =>
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
                  "rounded-xl border border-border bg-bg-alt",
                )}
              />
              <div className="mx-auto mt-2.5 h-3.5 w-2/3 rounded bg-bg-alt sm:mt-3 sm:h-4" />
            </div>
          ),
        )}
      </div>
      <p className="mt-3 text-center text-xs text-on-light-subtle">
        Kaydırarak diğer videoları görüntüleyin
      </p>
    </div>
  );
}
