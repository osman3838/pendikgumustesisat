import Link from "next/link";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className={cn(
        "group flex flex-col rounded-xl border border-slate-200 bg-surface p-6 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <h3 className="text-lg font-semibold text-primary group-hover:text-accent">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-muted">{service.shortDescription}</p>
      <span className="mt-4 text-sm font-medium text-accent">
        Detaylı bilgi →
      </span>
    </Link>
  );
}
