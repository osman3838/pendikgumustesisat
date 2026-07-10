import { siteConfig } from "@/lib/site-config";
import { whatsappTelephone } from "@/lib/whatsapp";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: whatsappTelephone(),
    areaServed: siteConfig.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: "00:00",
      closes: "23:59",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
