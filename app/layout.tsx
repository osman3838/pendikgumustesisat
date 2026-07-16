import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { GoogleTags } from "@/components/analytics/GoogleTags";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileWhatsAppButton } from "@/components/layout/MobileWhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const fontHeading = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: siteConfig.logo.src, alt: siteConfig.logo.alt }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${fontHeading.variable} ${fontBody.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <GoogleTags />
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileWhatsAppButton />
      </body>
    </html>
  );
}
