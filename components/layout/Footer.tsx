import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

const footerLinks = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/blog", label: "Blog" },
];

const regionLinks = [
  { href: "/kartal-tesisatci", label: "Kartal Tesisatçı" },
  { href: "/tuzla-tesisatci", label: "Tuzla Tesisatçı" },
  { href: "/pendik-tikaniklik-acma", label: "Pendik Tıkanıklık Açma" },
  { href: "/kartal-tikaniklik-acma", label: "Kartal Tıkanıklık Açma" },
  { href: "/tuzla-tikaniklik-acma", label: "Tuzla Tıkanıklık Açma" },
];

export function Footer() {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <footer className="surface-dark mt-auto border-t border-on-dark-border bg-primary">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo variant="on-dark" className="h-11 sm:h-12" />
            <p className="mt-3 text-sm text-on-dark-muted">
              {siteConfig.areas.join(" • ")} — {siteConfig.hours} acil servis
            </p>
          </div>
          <nav aria-label="Alt menü">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-on-dark-subtle">
              Sayfalar
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-on-dark text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Hizmet bölgeleri">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-on-dark-subtle">
              Hizmet Bölgeleri
            </p>
            <ul className="space-y-2">
              {regionLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="link-on-dark text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-on-dark-subtle">
              İletişim
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.phoneTel}
                  className="link-on-dark inline-flex items-center gap-2 text-sm"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-on-dark text-sm"
                >
                  WhatsApp ile ulaşın
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-on-dark-border pt-6 text-center text-xs text-on-dark-subtle">
          © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
      </Container>
    </footer>
  );
}
