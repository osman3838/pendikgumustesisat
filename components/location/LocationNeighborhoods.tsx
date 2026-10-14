"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type LocationNeighborhoodsProps = {
  district: string;
  heading: string;
  lead: string;
  neighborhoods: readonly string[];
  whatsAppMessage: string;
};

export function LocationNeighborhoods({
  district,
  heading,
  lead,
  neighborhoods,
  whatsAppMessage,
}: LocationNeighborhoodsProps) {
  const [search, setSearch] = useState("");
  const waUrl = whatsappUrl(whatsAppMessage);

  const filtered = neighborhoods.filter((n) =>
    n.toLocaleLowerCase("tr-TR").includes(search.toLocaleLowerCase("tr-TR")),
  );

  return (
    <Section className="section-divider bg-surface py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Geniş Hizmet Ağı
        </span>
        <h2 className="mt-3 font-heading text-xl font-semibold text-primary-dark sm:text-2xl md:text-3xl">
          {heading}
        </h2>
        <p className="mt-2 text-sm text-on-light-muted sm:text-base">
          {lead}
        </p>

        {/* Search input for quick lookup */}
        <div className="mt-5 mx-auto max-w-sm">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`${district}'daki mahallenizi arayın...`}
              aria-label={`${district} mahalle ara`}
              className="w-full rounded-xl border border-border bg-bg py-2.5 pl-10 pr-4 text-sm text-on-light placeholder:text-on-light-muted focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <svg
              className="absolute left-3.5 top-3 h-4 w-4 text-on-light-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-2.5">
          {filtered.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-lg border border-border bg-bg-alt/70 px-3 py-2.5 text-xs font-medium text-on-light transition hover:border-primary/40 hover:bg-surface sm:text-sm"
            >
              <svg
                className="h-3.5 w-3.5 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-4 text-center text-sm text-on-light-muted">
            Mahalle bulunamadı. Ancak {district}&apos;ın tüm sokak ve sitelerine servisimiz bulunmaktadır!
          </p>
        ) : null}
      </div>

      <div className="mt-8 rounded-xl border border-primary/20 bg-primary-light/40 p-4 sm:p-6 text-center">
        <p className="font-heading text-sm font-semibold text-primary-dark sm:text-base">
          {district}&apos;da mahallenize en yakın nöbetçi ustayı hemen yönlendirelim
        </p>
        <p className="mt-1 text-xs text-on-light-muted sm:text-sm">
          Konumunuzu ilettiğinizde tahmini varış süresi ve fiyat bilgisi anında paylaşılır.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteConfig.phoneTel}
            className="inline-flex items-center gap-2 rounded-lg bg-cta-call px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-on-cta-call shadow-sm hover:bg-cta-call-hover"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            Hemen Ara: {siteConfig.phoneDisplay}
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-on-dark shadow-sm hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            Konum Gönder & WhatsApp&apos;tan Yaz
          </a>
        </div>
      </div>
    </Section>
  );
}
