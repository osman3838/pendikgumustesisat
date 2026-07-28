export interface RelatedPost {
  id: string;
  headline: string;
  slug: string;
}

export interface ArticleTranslation {
  language: string;
  title: string;
  slug: string;
  metaDescription: string;
}

export interface HreflangTag {
  language: string;
  url: string;
}

export interface ArticleIndex {
  id: string;
  slug: string;
  headline: string;
  metaDescription: string;
  image: string;
  htmlUrl?: string;
  readingTime?: number;
  publicUrl?: string;
  publishedAt: string;
  createdAt: string;
  relatedPosts?: RelatedPost[];
  translations?: ArticleTranslation[];
}

export interface Article extends ArticleIndex {
  headlineId: string;
  metaKeywords?: string;
  host?: string;
  hreflangTags?: HreflangTag[];
  deleted: boolean;
  published: boolean;
  manual: boolean;
  updatedAt: string;
  html?: string;
  tags?: Array<{ title: string }>;
  blog?: Record<string, unknown>;
  language: string;
  originalLanguage: string;
}

export interface ArticlesListResponse {
  status: "success";
  data: {
    success: boolean;
    total: number;
    page: number;
    limit: number;
    language: string;
    articles: ArticleIndex[];
  };
}

export interface SingleArticleResponse {
  status: "success";
  data: {
    success: boolean;
    article: Article;
  };
}

export interface SitemapArticle {
  id: string;
  slug: string;
  url: string;
  title: string;
  lastmod: string;
  language: string;
  priority: string;
  changefreq: string;
}

export interface SitemapResponse {
  status: "success";
  data: {
    articles: SitemapArticle[];
    languages: {
      available: string[];
      total: number;
      withTranslations: number;
    };
  };
}
