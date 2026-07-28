import type { Metadata } from "next";
import Link from "next/link";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  BLOG_DEFAULT_LANGUAGE,
  BLOG_PAGE_SIZE,
  getPosts,
} from "@/lib/blog-api";
import { buildMetadata } from "@/lib/metadata";
import { truncateDescription } from "@/lib/seo";

const BLOG_TITLE = "Blog";
const BLOG_DESCRIPTION =
  "Tesisat ipuçları, su kaçağı tespiti ve tıkanıklık açma hakkında pratik bilgiler — Pendik Gümüş Tesisat.";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: BLOG_TITLE,
    description: truncateDescription(BLOG_DESCRIPTION),
    path: "/blog",
  });
}

type BlogPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const pageNumber = Math.max(parseInt(page || "1", 10) - 1, 0);

  let total = 0;
  let articles: Awaited<ReturnType<typeof getPosts>>["articles"] = [];

  try {
    const result = await getPosts(
      pageNumber,
      BLOG_PAGE_SIZE,
      BLOG_DEFAULT_LANGUAGE,
    );
    total = result.total;
    articles = result.articles;
  } catch (error) {
    console.error("Blog listing failed:", error);
  }

  const lastPage = Math.max(Math.ceil(total / BLOG_PAGE_SIZE), 1);

  return (
    <>
      <PageHero title={BLOG_TITLE} description={BLOG_DESCRIPTION} />
      <Section className="bg-bg-alt">
        {articles.length > 0 ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            <BlogPagination pageNumber={pageNumber} lastPage={lastPage} />
          </>
        ) : (
          <div className="mx-auto max-w-md rounded-xl border border-border bg-bg p-8 text-center shadow-sm">
            <p className="section-lead">
              Blog yazılarımız yakında burada olacak. Tesisat ipuçları ve
              bölgesel bilgiler için takipte kalın.
            </p>
            <Link
              href="/"
              className="link-on-light mt-6 inline-block font-semibold"
            >
              Anasayfaya dön →
            </Link>
          </div>
        )}
      </Section>
    </>
  );
}
