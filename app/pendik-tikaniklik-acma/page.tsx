import { buildMetadata } from "@/lib/metadata";
import { pendikTikaniklikConfig } from "@/content/locations/tikaniklik/pendik";
import { TikaniklikLocationTemplate } from "@/components/tikaniklik/TikaniklikLocationTemplate";

export const metadata = {
  ...buildMetadata({
    title: pendikTikaniklikConfig.meta.title,
    description: pendikTikaniklikConfig.meta.description,
    path: pendikTikaniklikConfig.path,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function PendikTikaniklikAcmaPage() {
  return <TikaniklikLocationTemplate config={pendikTikaniklikConfig} />;
}
