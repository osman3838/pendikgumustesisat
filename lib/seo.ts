import type { HreflangTag } from "./blog-types";

/**
 * Truncates text to a maximum length with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number = 60): string {
  if (!text || text.length <= maxLength) {
    return text;
  }
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + "...";
  }
  return truncated + "...";
}

/** Truncates title to SEO-optimal length (60 characters) */
export function truncateTitle(title: string): string {
  return truncateText(title, 60);
}

/** Truncates meta description to SEO-optimal length (160 characters) */
export function truncateDescription(description: string): string {
  return truncateText(description, 160);
}

/**
 * Deduplicates hreflang tags by language code, keeping the first occurrence
 */
export function deduplicateHreflangTags(
  hreflangTags: HreflangTag[] | undefined,
): HreflangTag[] {
  if (!hreflangTags || hreflangTags.length === 0) {
    return [];
  }

  const seen = new Map<string, HreflangTag>();
  const result: HreflangTag[] = [];

  for (const tag of hreflangTags) {
    const language = tag.language.toLowerCase();
    if (!seen.has(language)) {
      seen.set(language, tag);
      result.push(tag);
    }
  }

  return result;
}
