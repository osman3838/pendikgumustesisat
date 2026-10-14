import { siteConfig } from "@/lib/site-config";
import { whatsappTelephone } from "@/lib/whatsapp";

type LocationJsonLdProps = {
  district: string;
  slug: string;
  neighborhoods: readonly string[];
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function LocationJsonLd({
  district,
  slug,
  neighborhoods,
}: LocationJsonLdProps) {
  const pageUrl = `${siteConfig.url}/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: `${siteConfig.name} - ${district} Su Tesisatçısı`,
    url: pageUrl,
    image: `${siteConfig.url}${siteConfig.logo.src}`,
    telephone: whatsappTelephone(),
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      addressLocality: district,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: district === "Kartal" ? 40.8986 : 40.8166,
      longitude: district === "Kartal" ? 29.1866 : 29.3033,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: `${district}, İstanbul`,
      },
      ...neighborhoods.map((neighborhood) => ({
        "@type": "Place",
        name: `${neighborhood}, ${district}`,
      })),
    ],
    openingHoursSpecification: days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: "00:00",
      closes: "23:59",
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${district} Su Tesisatı ve Tıkanıklık Açma Hizmetleri`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${district} Kırmadan Su Kaçağı Tespiti`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${district} Robotla Kameralı Tıkanıklık Açma`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${district} 7/24 Acil Su Tesisat Ustası`,
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
