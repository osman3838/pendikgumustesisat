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
      className={cn(
        "surface-dark hero-gradient hero-mesh",
        className,
      )}
    >
      <Container className="py-10 md:py-14">
        <div className="max-w-3xl">
          {backLink && (
            <Link href={backLink.href} className="link-on-dark text-sm">
              {backLink.label}
            </Link>
          )}
          <h1
            className={cn(
              "font-display text-3xl font-semibold text-on-dark md:text-4xl",
              backLink && "mt-4",
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-on-dark-muted">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
