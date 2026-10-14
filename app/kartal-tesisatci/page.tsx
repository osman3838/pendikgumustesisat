import { buildMetadata } from "@/lib/metadata";
import { kartalLocationConfig } from "@/content/locations/kartal";
import { LocationPageTemplate } from "@/components/location/LocationPageTemplate";

export const metadata = {
  ...buildMetadata({
    title: kartalLocationConfig.meta.title,
    description: kartalLocationConfig.meta.description,
    path: kartalLocationConfig.path,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function KartalTesisatciPage() {
  return <LocationPageTemplate config={kartalLocationConfig} />;
}
