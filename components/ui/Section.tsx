import { cn } from "@/lib/utils";
import type { SurfaceTone } from "@/lib/surface";
import { Container } from "./Container";

type SectionProps = React.ComponentProps<"section"> & {
  containerClassName?: string;
  /** Sets foreground tokens for this section and its children */
  tone?: SurfaceTone;
};

export function Section({
  className,
  containerClassName,
  tone = "light",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        tone === "dark" ? "surface-dark" : "surface-light",
        className,
      )}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
