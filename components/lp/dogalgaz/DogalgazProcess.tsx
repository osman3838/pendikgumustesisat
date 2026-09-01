import { LpProcessTimeline } from "@/components/lp/LpProcessTimeline";
import { lpDogalgazProcessSteps } from "@/content/lp/dogalgaz-tesisati";

export function DogalgazProcess() {
  return <LpProcessTimeline steps={lpDogalgazProcessSteps} />;
}
