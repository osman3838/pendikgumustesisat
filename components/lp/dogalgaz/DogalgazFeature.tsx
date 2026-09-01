import { LpFeatureSplit } from "@/components/lp/LpFeatureSplit";
import { lpDogalgazFeature } from "@/content/lp/dogalgaz-tesisati";

export function DogalgazFeature() {
  return (
    <LpFeatureSplit
      title={lpDogalgazFeature.title}
      image={lpDogalgazFeature.image}
      bullets={lpDogalgazFeature.bullets}
    />
  );
}
