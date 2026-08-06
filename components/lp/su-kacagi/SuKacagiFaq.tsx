import { LpFaqSection } from "@/components/lp/LpFaqSection";
import { getLpSuKacagiFaqs } from "@/content/lp/su-kacagi-tespiti";

export function SuKacagiFaq() {
  return <LpFaqSection faqs={getLpSuKacagiFaqs()} />;
}
