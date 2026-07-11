import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

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
        {backLink ? (
          <Link href={backLink.href} className="link-on-dark text-sm">
            {backLink.label}
          </Link>
        ) : null}
        <SectionHeader
          as="h1"
          title={title}
          lead={description}
          titleClassName={cn("md:text-4xl", backLink && "mt-4")}
          className="max-w-3xl"
        />
      </Container>
    </section>
  );
}
