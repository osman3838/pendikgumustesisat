/** Google Ads conversion ID (base tag). */
export const GOOGLE_ADS_ID = "AW-16513117105";

/** WhatsApp click conversion label. */
export const ADS_CONVERSION_WHATSAPP =
  "AW-16513117105/h_aFCPrjqdEcELHXiMI9";

/** Phone (tel:) click conversion label. */
export const ADS_CONVERSION_PHONE =
  "AW-16513117105/5Mt2CMOgv9EcELHXiMI9";

/**
 * GA4 measurement ID from env. Empty / unset → GA4 config is skipped.
 * Example: G-XXXXXXXXXX
 */
export function getGaMeasurementId(): string {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
}
