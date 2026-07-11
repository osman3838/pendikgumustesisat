import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

const footerLinks = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <footer className="mt-auto border-t border-border bg-primary-dark text-text-inverse">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-text-inverse-muted">
              {siteConfig.areas.join(" • ")} — {siteConfig.hours} acil servis
            </p>
          </div>
          <nav aria-label="Alt menü">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-inverse-muted">
              Sayfalar
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-inverse-muted hover:text-text-inverse"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-inverse-muted">
              İletişim
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center gap-2 text-sm text-text-inverse-muted hover:text-text-inverse"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-inverse-muted hover:text-text-inverse"
                >
                  WhatsApp ile ulaşın
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-text-inverse-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
      </Container>
    </footer>
  );
}
