import { LpFaqSection } from "@/components/lp/LpFaqSection";
import { getLpSuTesisatiFaqs } from "@/content/lp/su-tesisati";

export function SuTesisatiFaq() {
  return <LpFaqSection faqs={getLpSuTesisatiFaqs()} />;
}
