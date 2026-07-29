import { redirect } from "next/navigation";
import { lpTikaniklikPath } from "@/content/lp/tikaniklik-acma";

/** Legacy ads URL — permanent home is `/hizmetler/tikaniklik-acma`. */
export default function LegacyTikaniklikLpRedirect() {
  redirect(lpTikaniklikPath);
}
