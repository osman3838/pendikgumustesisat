import { buildMetadata } from "@/lib/metadata";
import { kartalTikaniklikConfig } from "@/content/locations/tikaniklik/kartal";
import { TikaniklikLocationTemplate } from "@/components/tikaniklik/TikaniklikLocationTemplate";

export const metadata = {
  ...buildMetadata({
    title: kartalTikaniklikConfig.meta.title,
    description: kartalTikaniklikConfig.meta.description,
    path: kartalTikaniklikConfig.path,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function KartalTikaniklikAcmaPage() {
  return <TikaniklikLocationTemplate config={kartalTikaniklikConfig} />;
}
