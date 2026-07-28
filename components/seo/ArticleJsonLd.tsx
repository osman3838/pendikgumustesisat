import type { Article } from "@/lib/blog-types";
import { siteConfig } from "@/lib/site-config";

type ArticleJsonLdProps = {
  article: Article;
  url: string;
};

/** Article JSON-LD for blog post pages. */
export function ArticleJsonLd({ article, url }: ArticleJsonLdProps) {
  const publishedTime = article.publishedAt || article.createdAt;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.metaDescription,
    image: article.image,
    datePublished: publishedTime,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo.src}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(article.metaKeywords && { keywords: article.metaKeywords }),
    articleSection: "Tesisat",
    inLanguage: article.language || "tr",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
