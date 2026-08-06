import { LpFeatureSplit } from "@/components/lp/LpFeatureSplit";
import { lpSuKacagiSolution } from "@/content/lp/su-kacagi-tespiti";

export function SuKacagiSolution() {
  return (
    <LpFeatureSplit
      title={lpSuKacagiSolution.title}
      image={lpSuKacagiSolution.image}
      bullets={lpSuKacagiSolution.bullets}
    />
  );
}
