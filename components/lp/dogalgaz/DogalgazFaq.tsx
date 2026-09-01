import { LpFaqSection } from "@/components/lp/LpFaqSection";
import { getLpDogalgazFaqs } from "@/content/lp/dogalgaz-tesisati";

export function DogalgazFaq() {
  return <LpFaqSection faqs={getLpDogalgazFaqs()} />;
}
