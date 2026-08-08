import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { siteConfig } from "@/lib/site-config";

type LpEmergencyBannerProps = {
  title: string;
  lead: string;
  ctaLabel: string;
};

export function LpEmergencyBanner({
  title,
  lead,
  ctaLabel,
}: LpEmergencyBannerProps) {
  return (
    <section className="surface-dark bg-primary py-6 md:py-8">
      <Container className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-on-primary"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
          </span>
          <div>
            <h2 className="font-heading text-lg font-semibold text-on-primary sm:text-xl">
              {title}
            </h2>
            <p className="mt-1 max-w-xl text-sm font-medium text-on-primary/90 md:text-base">
              {lead}
            </p>
          </div>
        </div>
        <Button
          href={siteConfig.phoneTel}
          external
          variant="cta-call"
          className="min-h-12 shrink-0 uppercase tracking-wide shadow-lg"
        >
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          {ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
