import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/lp/FaqAccordion";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { lpFaqs } from "@/content/lp/tikaniklik-acma";

export function LpFaq() {
  return (
    <>
      <FaqJsonLd faqs={lpFaqs} />
      <Section className="section-divider bg-bg-alt py-8 md:py-12">
        <h2 className="text-center font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
          Sıkça Sorulan Sorular
        </h2>
        <div className="mx-auto mt-4 max-w-3xl sm:mt-6">
          <FaqAccordion faqs={lpFaqs} />
        </div>
      </Section>
    </>
  );
}
