import Image from "next/image";
import Link from "next/link";
import type { ArticleIndex } from "@/lib/blog-types";
import { cn } from "@/lib/utils";

type BlogPostCardProps = {
  post: ArticleIndex;
  className?: string;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPostCard({ post, className }: BlogPostCardProps) {
  const published = post.publishedAt || post.createdAt;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group card-elevated flex flex-col overflow-hidden p-0",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-alt">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.headline}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <time
          dateTime={published}
          className="text-xs font-medium text-on-light-subtle"
        >
          {formatDate(published)}
          {post.readingTime ? ` · ${post.readingTime} dk okuma` : null}
        </time>
        <h2 className="card-title mt-2 font-heading text-lg font-semibold leading-snug group-hover:text-accent">
          {post.headline}
        </h2>
        {post.metaDescription ? (
          <p className="card-body mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
            {post.metaDescription}
          </p>
        ) : null}
        <span className="mt-4 text-sm font-semibold text-accent">
          Devamını oku →
        </span>
      </div>
    </Link>
  );
}
