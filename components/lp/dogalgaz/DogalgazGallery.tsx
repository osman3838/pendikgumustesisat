import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { lpDogalgazGallery } from "@/content/lp/dogalgaz-tesisati";

export function DogalgazGallery() {
  return (
    <Section className="section-divider bg-bg-alt py-5 md:py-12">
      <h2 className="text-center font-heading text-lg font-semibold text-primary-dark sm:text-2xl md:text-3xl">
        Çalışmalarımız
      </h2>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
        {lpDogalgazGallery.map((item) => (
          <li
            key={item.id}
            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-bg shadow-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
