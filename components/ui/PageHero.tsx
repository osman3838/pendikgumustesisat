import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type PageHeroProps = {
  title: string;
  description?: string;
  backLink?: { href: string; label: string };
  className?: string;
};

export function PageHero({
  title,
  description,
  backLink,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn("hero-gradient hero-mesh text-text-inverse", className)}
    >
      <Container className="py-10 md:py-14">
        <div className="max-w-3xl">
          {backLink && (
            <Link
              href={backLink.href}
              className="text-sm text-text-inverse-muted hover:text-text-inverse"
            >
              {backLink.label}
            </Link>
          )}
          <h1
            className={cn(
              "font-display text-3xl font-semibold md:text-4xl",
              backLink && "mt-4",
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-text-inverse-muted">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
