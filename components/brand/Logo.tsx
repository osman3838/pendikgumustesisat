import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Wraps logo on a light surface so full-color mark stays readable on navy backgrounds */
  variant?: "default" | "on-dark";
  linked?: boolean;
  priority?: boolean;
};

export function Logo({
  className,
  variant = "default",
  linked = true,
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src={siteConfig.logo.src}
      alt={siteConfig.logo.alt}
      width={siteConfig.logo.width}
      height={siteConfig.logo.height}
      className={cn("h-9 w-auto sm:h-10", className)}
      priority={priority}
    />
  );

  const content =
    variant === "on-dark" ? (
      <span className="inline-flex rounded-lg bg-surface p-2 shadow-sm">
        {image}
      </span>
    ) : (
      image
    );

  if (!linked) {
    return <span className="inline-flex shrink-0">{content}</span>;
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 rounded-lg focus-visible:outline-offset-4"
      aria-label={`${siteConfig.name} — Anasayfa`}
    >
      {content}
    </Link>
  );
}
