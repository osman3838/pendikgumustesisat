import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "accent" | "whatsapp" | "outline" | "ghost-inverse";
  href?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-primary text-on-dark shadow-md hover:bg-primary-dark",
  accent: "bg-accent text-on-dark shadow-md hover:opacity-90",
  whatsapp: "bg-whatsapp text-on-dark shadow-md hover:opacity-90",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-on-dark",
  "ghost-inverse":
    "border border-on-dark-border bg-white/10 text-on-dark backdrop-blur-sm hover:bg-white/15",
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
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-all focus-visible:outline-offset-2",
    variants[variant],
    className,
  );

  if (href) {
    const isExternalHttp =
      external && (href.startsWith("http://") || href.startsWith("https://"));
    if (isExternalHttp) {
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
    if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes}>
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
