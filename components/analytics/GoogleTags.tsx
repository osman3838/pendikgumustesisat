import Script from "next/script";
import {
  GOOGLE_ADS_ID,
  GTM_ID,
  getGaMeasurementId,
} from "@/lib/analytics-config";
import { ConversionClickTracker } from "./ConversionClickTracker";

/**
 * Site-wide GTM + Google Ads + GA4.
 * GTM and gtag load once from the root layout via next/script (beforeInteractive → head).
 */
export function GoogleTags() {
  const gaId = getGaMeasurementId();

  const gtmBootstrap = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

  const inlineConfig = [
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('js', new Date());",
    `gtag('config', '${GOOGLE_ADS_ID}');`,
    gaId ? `gtag('config', '${gaId}');` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {gtmBootstrap}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="beforeInteractive"
      />
      <Script id="google-gtag-config" strategy="beforeInteractive">
        {inlineConfig}
      </Script>
      <ConversionClickTracker />
    </>
  );
}

/** GTM noscript fallback — place immediately after the opening <body> tag. */
export function GoogleTagManagerNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height={0}
        width={0}
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
