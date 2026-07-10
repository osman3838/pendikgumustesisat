import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
