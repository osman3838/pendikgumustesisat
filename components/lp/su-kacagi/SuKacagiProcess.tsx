import { LpProcessTimeline } from "@/components/lp/LpProcessTimeline";
import { lpSuKacagiProcessSteps } from "@/content/lp/su-kacagi-tespiti";

export function SuKacagiProcess() {
  return <LpProcessTimeline steps={lpSuKacagiProcessSteps} />;
}
