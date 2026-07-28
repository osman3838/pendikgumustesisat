import type {
  Article,
  ArticleIndex,
  ArticlesListResponse,
  SingleArticleResponse,
  SitemapResponse,
} from "./blog-types";

export const BLOG_PAGE_SIZE = 9;
/** Site language — try Turkish first, then English */
export const BLOG_DEFAULT_LANGUAGE = "tr";

function getBaseUrl(): string {
  const baseUrl = process.env.BLOG_WRITER_BASE_URL;
  if (!baseUrl) {
    throw new Error("BLOG_WRITER_BASE_URL environment variable must be set.");
  }
  return baseUrl;
}

async function fetchWithAuth<T>(
  url: string,
  options: RequestInit = {},
): Promise<T | null> {
  const apiKey = process.env.BLOG_WRITER_API_KEY;

  if (!apiKey) {
    throw new Error("BLOG_WRITER_API_KEY environment variable must be set.");
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      "X-API-Key": apiKey,
      ...options.headers,
    },
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

function languagesToTry(language?: string): string[] {
  const requested = language || BLOG_DEFAULT_LANGUAGE;
  if (requested === "en") return ["en"];
  return [requested, "en"];
}

/**
 * Fetches a single blog post by slug.
 * Tries requested language first, then falls back to English.
 */
export async function getPost(
  slug: string,
  language?: string,
): Promise<Article | null> {
  const baseUrl = getBaseUrl();
  const langs = languagesToTry(language);

  for (const lang of langs) {
    try {
      const url = new URL(`${baseUrl}/articles`);
      url.searchParams.set("slug", slug);
      url.searchParams.set("language", lang);

      const response = await fetchWithAuth<SingleArticleResponse>(
        url.toString(),
      );

      if (response?.data?.article) {
        const article = response.data.article;

        if (article.htmlUrl) {
          try {
            const htmlResponse = await fetch(article.htmlUrl, {
              next: { revalidate: 60 },
            });
            if (htmlResponse.ok) {
              article.html = await htmlResponse.text();
            }
          } catch (error) {
            console.warn("Failed to fetch HTML content:", error);
          }
        }

        return article;
      }
    } catch (error) {
      if (lang === langs[langs.length - 1]) {
        console.error("Error fetching post:", error);
        return null;
      }
    }
  }

  return null;
}

/**
 * Fetches a paginated list of blog posts.
 * @param pageNumber — Zero-indexed page number
 */
export async function getPosts(
  pageNumber: number,
  limit: number = BLOG_PAGE_SIZE,
  language?: string,
): Promise<{ total: number; articles: ArticleIndex[] }> {
  const baseUrl = getBaseUrl();
  const langs = languagesToTry(language);

  for (const lang of langs) {
    try {
      const url = new URL(`${baseUrl}/articles`);
      url.searchParams.set("page", pageNumber.toString());
      url.searchParams.set("limit", limit.toString());
      url.searchParams.set("language", lang);

      const response = await fetchWithAuth<ArticlesListResponse>(
        url.toString(),
      );

      if (response?.data) {
        return {
          total: response.data.total,
          articles: response.data.articles,
        };
      }
    } catch (error) {
      if (lang === langs[langs.length - 1]) {
        throw error;
      }
    }
  }

  return { total: 0, articles: [] };
}

/** Fetches all post slugs for a language (static generation if needed) */
export async function getAllPostsSlugs(language?: string): Promise<string[]> {
  const articles = await getSitemapArticles(language);
  return articles.map((article) => article.slug);
}

/** Fetches sitemap data for all blog posts */
export async function getSitemapArticles(language?: string) {
  const baseUrl = getBaseUrl();
  const url = new URL(`${baseUrl}/sitemap`);
  if (language) {
    url.searchParams.set("language", language);
  }

  const response = await fetchWithAuth<SitemapResponse>(url.toString());
  if (!response?.data) {
    return [];
  }
  return response.data.articles;
}
