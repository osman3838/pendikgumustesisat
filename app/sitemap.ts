import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { getSitemapArticles } from "@/lib/blog-api";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function normalizeUrl(url: string): string {
  if (!url) return url;
  return url.replace(/^https?:\/\/(?!www\.)([^/]+)/, (match, domain) =>
    match.replace(domain, `www.${domain}`),
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/hizmetler", "/hakkimizda", "/iletisim", "/blog"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/hizmetler/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogArticles = await getSitemapArticles();
    blogEntries = blogArticles.map((article) => ({
      url: normalizeUrl(
        article.url || `${siteConfig.url}/blog/${article.slug}`,
      ),
      lastModified: article.lastmod ? new Date(article.lastmod) : new Date(),
      changeFrequency: (article.changefreq ||
        "weekly") as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: article.priority ? parseFloat(article.priority) : 0.6,
    }));
  } catch (error) {
    console.warn(
      "Sitemap: Blog articles not included due to missing configuration:",
      error,
    );
  }

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
