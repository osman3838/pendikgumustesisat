import { siteConfig } from "@/lib/site-config";

export function ServiceAreaMap() {
  const { map } = siteConfig;

  return (
    <figure className="mt-10">
      <div className="overflow-hidden rounded-xl border border-border bg-bg shadow-sm">
        <iframe
          src={map.embedUrl}
          title={map.title}
          loading="lazy"
          className="h-64 w-full border-0 sm:h-80 md:h-96"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <figcaption className="section-lead mt-3 text-center sm:text-left">
        {map.caption}
      </figcaption>
    </figure>
  );
}
