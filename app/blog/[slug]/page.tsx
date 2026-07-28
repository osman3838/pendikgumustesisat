import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BLOG_DEFAULT_LANGUAGE, getPost } from "@/lib/blog-api";
import { siteConfig } from "@/lib/site-config";
import {
  deduplicateHreflangTags,
  truncateDescription,
  truncateTitle,
} from "@/lib/seo";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug, BLOG_DEFAULT_LANGUAGE);

  if (!post) {
    return {
      title: "Yazı Bulunamadı",
      robots: { index: false, follow: false },
    };
  }

  const title = truncateTitle(post.headline);
  const description = truncateDescription(post.metaDescription);
  const canonicalUrl = `${siteConfig.url}/blog/${slug}`;
  const images = [
    {
      url: post.image,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  const languages: Record<string, string> = {};
  for (const tag of deduplicateHreflangTags(post.hreflangTags)) {
    languages[tag.language] = tag.url;
  }

  const publishedTime = post.publishedAt || post.createdAt;
  const articleTags = post.tags?.map((tag) => tag.title) || [];

  return {
    title,
    description,
    keywords: post.metaKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.keys(languages).length > 0 ? languages : undefined,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      images,
      publishedTime,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.name],
      tags: articleTags,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPost(slug, BLOG_DEFAULT_LANGUAGE);

  if (!post) notFound();

  const publishedTime = post.publishedAt || post.createdAt;
  const canonicalUrl = `${siteConfig.url}/blog/${slug}`;

  return (
    <>
      <ArticleJsonLd article={post} url={canonicalUrl} />

      {/* No page H1 here — API HTML already includes the article headline */}
      <section className="surface-dark hero-gradient hero-mesh">
        <Container className="py-8 md:py-10">
          <Link href="/blog" className="link-on-dark text-sm">
            ← Tüm yazılar
          </Link>
          <p className="mt-4 text-sm text-on-dark-muted">
            <time dateTime={publishedTime}>{formatDate(publishedTime)}</time>
            {post.readingTime ? ` · ${post.readingTime} dk okuma` : null}
          </p>
        </Container>
      </section>

      <Section className="bg-surface">
        <article className="mx-auto max-w-3xl">
          {post.image ? (
            <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-xl bg-bg-alt shadow-md">
              <Image
                src={post.image}
                alt={post.headline}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          ) : null}

          {post.html ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          ) : (
            <>
              <h1 className="font-heading text-3xl font-semibold md:text-4xl">
                {post.headline}
              </h1>
              <p className="mt-4 text-on-light-muted">{post.metaDescription}</p>
            </>
          )}

          {post.tags && post.tags.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag.title}
                  className="rounded-lg bg-primary-light px-3 py-1 text-sm font-medium text-primary"
                >
                  {tag.title}
                </span>
              ))}
            </div>
          ) : null}
        </article>

        {post.relatedPosts && post.relatedPosts.length > 0 ? (
          <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-10">
            <h2 className="font-heading text-2xl font-semibold">
              İlgili yazılar
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {post.relatedPosts.map((related) => (
                <li key={related.id}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="link-on-light font-semibold"
                  >
                    {related.headline} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>
    </>
  );
}
