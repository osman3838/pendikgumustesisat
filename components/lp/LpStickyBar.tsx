import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { lpTikaniklikWhatsAppMessage } from "@/content/lp/tikaniklik-acma";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type LpStickyBarProps = {
  whatsappMessage?: string;
};

export function LpStickyBar({
  whatsappMessage = lpTikaniklikWhatsAppMessage,
}: LpStickyBarProps) {
  const waUrl = whatsappUrl(whatsappMessage);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-surface/95 px-3 pt-2 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] backdrop-blur md:hidden"
      style={{
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <a
        href={siteConfig.phoneTel}
        aria-label={`Hemen ara: ${siteConfig.phoneDisplay}`}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta-call px-3 py-3 text-sm font-bold uppercase tracking-wide text-on-cta-call shadow-sm hover:bg-cta-call-hover"
      >
        <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        Hemen Ara
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yaz"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-3 py-3 text-sm font-bold uppercase tracking-wide text-on-dark shadow-sm hover:opacity-90"
      >
        <WhatsAppIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
