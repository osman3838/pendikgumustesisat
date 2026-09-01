/** Google Tag Manager container ID. */
export const GTM_ID = "GTM-TZNHZTJ5";

/** Google Ads conversion ID (base tag). */
export const GOOGLE_ADS_ID = "AW-16513117105";

/** WhatsApp click conversion label. */
export const ADS_CONVERSION_WHATSAPP =
  "AW-16513117105/h_aFCPrjqdEcELHXiMI9";

/** Phone (tel:) click conversion label. */
export const ADS_CONVERSION_PHONE =
  "AW-16513117105/5Mt2CMOgv9EcELHXiMI9";

/** GA4 measurement ID (default). Override with NEXT_PUBLIC_GA_MEASUREMENT_ID. */
export const GA_MEASUREMENT_ID = "G-1YX918GS90";

/**
 * GA4 measurement ID from env, falling back to GA_MEASUREMENT_ID.
 * Explicitly empty env value (`""`) skips GA4 config.
 */
export function getGaMeasurementId(): string {
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== undefined) {
    return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID.trim();
  }
  return GA_MEASUREMENT_ID;
}
