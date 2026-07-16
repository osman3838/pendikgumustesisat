"use client";

import { useEffect } from "react";
import {
  ADS_CONVERSION_PHONE,
  ADS_CONVERSION_WHATSAPP,
  getGaMeasurementId,
} from "@/lib/analytics-config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function fireGtag(...args: unknown[]) {
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

/**
 * Event-delegation click tracker for WhatsApp and tel: conversion + GA4 events.
 * Does not call preventDefault — links navigate normally.
 */
export function ConversionClickTracker() {
  useEffect(() => {
    const gaId = getGaMeasurementId();

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";

      if (href.startsWith("https://wa.me")) {
        fireGtag("event", "conversion", {
          send_to: ADS_CONVERSION_WHATSAPP,
        });
        if (gaId) {
          fireGtag("event", "whatsapp_click", {
            send_to: gaId,
            link_url: href,
          });
        }
        return;
      }

      if (href.startsWith("tel:")) {
        fireGtag("event", "conversion", {
          send_to: ADS_CONVERSION_PHONE,
        });
        if (gaId) {
          fireGtag("event", "phone_click", {
            send_to: gaId,
            link_url: href,
          });
        }
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
