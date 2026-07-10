import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Pendik Gümüş Tesisat blog — yakında.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section>
      <div className="max-w-2xl text-center mx-auto">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Blog</h1>
        <p className="mt-4 text-lg text-muted">
          Blog içeriklerimiz yakında yayında olacak.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-accent font-semibold hover:underline"
        >
          Anasayfaya dön →
        </Link>
      </div>
    </Section>
  );
}
