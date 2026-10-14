import { buildMetadata } from "@/lib/metadata";
import { tuzlaTikaniklikConfig } from "@/content/locations/tikaniklik/tuzla";
import { TikaniklikLocationTemplate } from "@/components/tikaniklik/TikaniklikLocationTemplate";

export const metadata = {
  ...buildMetadata({
    title: tuzlaTikaniklikConfig.meta.title,
    description: tuzlaTikaniklikConfig.meta.description,
    path: tuzlaTikaniklikConfig.path,
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function TuzlaTikaniklikAcmaPage() {
  return <TikaniklikLocationTemplate config={tuzlaTikaniklikConfig} />;
}
