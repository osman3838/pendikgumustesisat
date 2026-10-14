import { buildMetadata } from "@/lib/metadata";
import { tuzlaLocationConfig } from "@/content/locations/tuzla";
import { LocationPageTemplate } from "@/components/location/LocationPageTemplate";

export const metadata = {
  ...buildMetadata({
    title: tuzlaLocationConfig.meta.title,
    description: tuzlaLocationConfig.meta.description,
    path: tuzlaLocationConfig.path,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function TuzlaTesisatciPage() {
  return <LocationPageTemplate config={tuzlaLocationConfig} />;
}
