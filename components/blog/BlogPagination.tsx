import Link from "next/link";
import { cn } from "@/lib/utils";

type BlogPaginationProps = {
  pageNumber: number;
  lastPage: number;
  className?: string;
};

export function BlogPagination({
  pageNumber,
  lastPage,
  className,
}: BlogPaginationProps) {
  if (lastPage <= 1) return null;

  const current = pageNumber + 1;
  const prevHref = current <= 2 ? "/blog" : `/blog?page=${current - 1}`;
  const nextHref = `/blog?page=${current + 1}`;

  return (
    <nav
      aria-label="Blog sayfalama"
      className={cn("mt-10 flex items-center justify-center gap-3", className)}
    >
      {current > 1 ? (
        <Link
          href={prevHref}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-primary-light"
        >
          ← Önceki
        </Link>
      ) : (
        <span className="rounded-lg border border-transparent px-4 py-2 text-sm text-on-light-subtle">
          ← Önceki
        </span>
      )}

      <span className="text-sm text-on-light-muted">
        {current} / {lastPage}
      </span>

      {current < lastPage ? (
        <Link
          href={nextHref}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-primary-light"
        >
          Sonraki →
        </Link>
      ) : (
        <span className="rounded-lg border border-transparent px-4 py-2 text-sm text-on-light-subtle">
          Sonraki →
        </span>
      )}
    </nav>
  );
}
