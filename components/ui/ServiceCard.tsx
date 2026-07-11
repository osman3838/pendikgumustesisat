import Link from "next/link";
import type { Service } from "@/content/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className={cn("group card-elevated flex flex-col p-6", className)}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary">
        <ServiceIcon slug={service.slug} />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-primary group-hover:text-accent">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.shortDescription}
      </p>
      <span className="mt-4 text-sm font-semibold text-accent">
        Detaylı bilgi →
      </span>
    </Link>
  );
}
