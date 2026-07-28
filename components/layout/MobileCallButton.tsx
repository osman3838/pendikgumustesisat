import { siteConfig } from "@/lib/site-config";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

export function MobileCallButton() {
  return (
    <a
      href={siteConfig.phoneTel}
      aria-label={`Hemen Ara: ${siteConfig.phoneDisplay}`}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-whatsapp px-4 py-3.5 text-base font-semibold text-on-dark shadow-[0_-2px_10px_rgba(0,0,0,0.12)] md:hidden"
      style={{
        paddingBottom: "max(0.875rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <PhoneIcon className="h-5 w-5" aria-hidden="true" />
      Hemen Ara
    </a>
  );
}
