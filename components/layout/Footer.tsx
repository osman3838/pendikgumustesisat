import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <footer className="mt-auto border-t border-slate-200 bg-primary text-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-slate-200">
              {siteConfig.areas.join(" • ")} — {siteConfig.hours} acil servis
            </p>
          </div>
          <nav aria-label="Alt menü">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
              Sayfalar
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
              İletişim
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-200 hover:text-white"
            >
              WhatsApp ile ulaşın
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-slate-300">
          © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
      </Container>
    </footer>
  );
}
