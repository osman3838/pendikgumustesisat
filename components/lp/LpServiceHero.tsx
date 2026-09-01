import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export type LpHeroBadge = { id: string; label: string };
export type LpHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type LpServiceHeroProps = {
  title: string;
  lead: string;
  image: LpHeroImage;
  badges: readonly LpHeroBadge[];
  whatsappMessage: string;
};

function BadgeIcon({ id }: { id: string }) {
  const common = {
    className: "h-3 w-3 shrink-0 sm:h-4 sm:w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true as const,
  };

  if (id === "shield") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    );
  }
  if (id === "clock") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  }
  if (id === "person") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    );
  }
  if (id === "sparkle") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l1.5 4.5L19 9l-4.5 1.5L13 15l-1.5-4.5L7 9l4.5-1.5L13 3z"
        />
      </svg>
    );
  }
  if (id === "pin") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

export function LpServiceHero({
  title,
  lead,
  image,
  badges,
  whatsappMessage,
}: LpServiceHeroProps) {
  const waUrl = whatsappUrl(whatsappMessage);

  return (
    <section className="surface-light border-b border-border bg-surface">
      <Container className="pb-3 pt-3 md:py-10 lg:py-12">
        <div className="grid items-center gap-3 lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="font-heading text-[1.55rem] font-bold leading-tight text-primary-dark sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>
            <p className="mt-1.5 max-w-xl text-sm leading-snug text-on-light-muted sm:mt-3 sm:text-base sm:leading-relaxed md:text-lg">
              {lead}
            </p>
            <div className="mt-2.5 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:items-stretch sm:gap-3">
              <Button
                href={siteConfig.phoneTel}
                external
                variant="cta-call"
                className="h-10 gap-2 px-4 py-0 text-sm font-bold uppercase tracking-wide sm:h-auto sm:min-h-12 sm:min-w-[11rem] sm:flex-col sm:gap-0.5 sm:px-6 sm:py-3 sm:text-base"
              >
                <span className="inline-flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  Hemen Ara
                </span>
                <span className="hidden text-xs font-semibold normal-case tracking-normal opacity-90 sm:inline">
                  {siteConfig.phoneDisplay}
                </span>
              </Button>
              <Button
                href={waUrl}
                external
                variant="whatsapp"
                className="h-10 gap-2 px-4 py-0 text-sm font-bold uppercase tracking-wide sm:h-auto sm:min-h-12 sm:min-w-[11rem] sm:flex-col sm:gap-0.5 sm:px-6 sm:py-3 sm:text-base"
              >
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  WhatsApp&apos;tan Yaz
                </span>
                <span className="hidden text-xs font-semibold normal-case tracking-normal opacity-90 sm:inline">
                  Hemen Destek Alın
                </span>
              </Button>
            </div>
            <ul
              className="mt-2.5 flex flex-nowrap items-center justify-between gap-1 sm:mt-4 sm:justify-start sm:gap-4"
              aria-label="Öne çıkan avantajlar"
            >
              {badges.map((badge) => (
                <li
                  key={badge.id}
                  className="inline-flex min-w-0 items-center gap-0.5 text-[10px] font-semibold leading-none text-on-light sm:gap-1.5 sm:text-sm"
                >
                  <span className="text-primary" aria-hidden="true">
                    <BadgeIcon id={badge.id} />
                  </span>
                  <span className="truncate">{badge.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-border bg-bg shadow-md">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto max-h-[200px] w-full object-cover sm:max-h-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
