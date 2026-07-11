import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  lead?: string;
  eyebrow?: string;
  as?: "h1" | "h2" | "h3";
  titleClassName?: string;
  className?: string;
};

export function SectionHeader({
  title,
  lead,
  eyebrow,
  as: Tag = "h2",
  titleClassName,
  className,
}: SectionHeaderProps) {
  const isHeroTitle = Tag === "h1";

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="section-eyebrow text-sm font-semibold uppercase tracking-wide">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "section-title font-heading font-semibold",
          isHeroTitle
            ? "section-title-lg mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.65rem]"
            : "mt-2 text-2xl md:text-3xl",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={cn(
            "section-lead max-w-2xl",
            isHeroTitle
              ? "mt-4 text-base leading-relaxed md:text-lg"
              : "mt-3 text-base",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
