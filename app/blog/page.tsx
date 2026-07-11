import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Pendik Gümüş Tesisat blog — yakında.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" description="Blog içeriklerimiz yakında yayında olacak." />
      <Section className="bg-surface">
        <div className="mx-auto max-w-md rounded-xl border border-border bg-bg p-8 text-center shadow-sm">
          <p className="text-muted">
            Tesisat ipuçları ve bölgesel bilgiler yakında burada olacak.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block font-semibold text-accent hover:underline"
          >
            Anasayfaya dön →
          </Link>
        </div>
      </Section>
    </>
  );
}
