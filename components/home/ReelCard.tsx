"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ReelCardProps = {
  title: string;
  posterSrc: string;
  videoSrc: string;
  className?: string;
};

export function ReelCard({
  title,
  posterSrc,
  videoSrc,
  className,
}: ReelCardProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (playing && videoRef.current) {
      void videoRef.current.play();
    }
  }, [playing]);

  return (
    <figure className={cn("flex w-fit flex-col gap-2.5 sm:gap-3", className)}>
      <div className="relative aspect-[9/16] h-[min(300px,54vh)] w-auto overflow-hidden rounded-xl border border-border bg-bg-alt shadow-md md:h-[min(440px,46vh)]">
        {!playing ? (
          <>
            <Image
              src={posterSrc}
              alt=""
              width={720}
              height={1280}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 170px, 248px"
            />
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
              aria-label={`Videoyu oynat: ${title}`}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg md:h-14 md:w-14"
                aria-hidden="true"
              >
                <svg
                  className="ml-0.5 h-5 w-5 md:ml-1 md:h-6 md:w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </>
        ) : (
          <video
            ref={videoRef}
            src={videoSrc}
            preload="none"
            muted
            playsInline
            controls
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <figcaption className="card-body text-center text-sm font-medium">
        {title}
      </figcaption>
    </figure>
  );
}
