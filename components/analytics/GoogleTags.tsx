import Script from "next/script";
import {
  GOOGLE_ADS_ID,
  getGaMeasurementId,
} from "@/lib/analytics-config";
import { ConversionClickTracker } from "./ConversionClickTracker";

/**
 * Site-wide Google Ads (gtag) base tag + optional GA4 config.
 * Loaded once from the root layout via next/script (beforeInteractive → head).
 */
export function GoogleTags() {
  const gaId = getGaMeasurementId();

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
