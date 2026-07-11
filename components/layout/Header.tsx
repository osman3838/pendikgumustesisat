"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/blog", label: "Blog" },
];

function ContactActions({ compact = false }: { compact?: boolean }) {
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  if (compact) {
    return (
      <>
        <a
          href={siteConfig.phoneTel}
          aria-label={`Telefon: ${siteConfig.phoneDisplay}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-primary shadow-sm hover:bg-primary-light"
        >
          <PhoneIcon className="h-4 w-4" />
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile yazın"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-whatsapp text-on-dark shadow-sm hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </a>
      </>
    );
  }

  return (
    <>
      <a
        href={siteConfig.phoneTel}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-primary-light"
      >
        <PhoneIcon className="h-4 w-4" />
        {siteConfig.phoneDisplay}
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-semibold text-on-dark shadow-sm hover:opacity-90"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const waUrl = whatsappUrl(siteConfig.defaultWhatsAppMessage);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Logo priority />

        <nav
          className="hidden items-center gap-5 md:flex"
          aria-label="Ana menü"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-on-light hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <ContactActions />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ContactActions compact />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-primary"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-surface md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobil menü">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-base font-medium text-on-light hover:bg-bg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.phoneTel}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-bg px-4 py-3 font-semibold text-primary"
          >
            <PhoneIcon className="h-5 w-5" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-3 font-semibold text-on-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
