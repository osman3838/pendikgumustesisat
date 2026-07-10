import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "accent" | "whatsapp" | "outline";
  href?: string;
  external?: boolean;
};

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  accent: "bg-accent text-white hover:opacity-90",
  whatsapp: "bg-whatsapp text-white hover:opacity-90",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
};

export function Button({
  className,
  variant = "primary",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-colors focus-visible:outline-offset-2",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
