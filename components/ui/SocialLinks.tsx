import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

const socialItems = [
  {
    href: siteConfig.social.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
    className:
      "border-transparent bg-[#1877F2] text-white shadow-sm hover:bg-[#166FE5]",
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
    className:
      "border-transparent bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-sm hover:opacity-90",
  },
] as const;

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {socialItems.map(({ href, label, Icon, className: itemClassName }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} — ${siteConfig.name}`}
          className={cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-md border transition-colors",
            itemClassName,
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}
