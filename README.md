# Pendik Gümüş Tesisat

Production website for **Pendik Gümüş Tesisat** — plumbing and unclogging services in Pendik, Kurtköy, Kartal, and Tuzla (Istanbul).

- **Domain:** [www.pendikgumustesisat.com](https://www.pendikgumustesisat.com)
- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS
- **Repo:** GitLab (`aybekyilmaz1/pendikgumustesisat`)
- **Deploy:** Vercel

## Local development

```bash
npm install
cp .env.example .env.local
# Fill in BLOG_WRITER_* from the Aymar project / Vercel env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | No | WhatsApp number for `wa.me` links (digits only, e.g. `905511624955`). Falls back to that number if unset. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL. Defaults to `https://www.pendikgumustesisat.com`. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | GA4 measurement ID. Defaults to `G-1YX918GS90`. Set empty to disable. |
| `BLOG_WRITER_BASE_URL` | For blog | Aymar publish API base URL for this project. |
| `BLOG_WRITER_API_KEY` | For blog | Server-only API key (`X-API-Key`). Keep out of git. |

Phone display / `tel:` links live in `lib/site-config.ts` (not env). Change both there and `NEXT_PUBLIC_WHATSAPP_NUMBER` if the business number changes.

## Main routes

| Path | Notes |
|------|--------|
| `/` | Home |
| `/hizmetler` | Services index |
| `/hizmetler/tikaniklik-acma` | Landing: tıkanıklık açma |
| `/hizmetler/su-kacagi-tespiti` | Landing: su kaçağı tespiti |
| `/hizmetler/su-tesisati` | Landing: su tesisatı |
| `/hizmetler/dogalgaz-tesisati` | Landing: doğalgaz tesisatı |
| `/hizmetler/[slug]` | Other service detail pages from `content/services.ts` |
| `/blog`, `/blog/[slug]` | Blog (Aymar CMS) |
| `/hakkimizda`, `/iletisim` | About / contact |
| `/lp/tikaniklik-acma` | 301 → `/hizmetler/tikaniklik-acma` |

Content for service landings lives under `content/lp/` and `content/services.ts`.

## Blog

Posts are fetched server-side from Aymar (`lib/blog-api.ts`). Without valid `BLOG_WRITER_*` env vars, `/blog` shows an empty-state message instead of posts. Sitemap includes blog URLs when the API responds.

## Brand assets

- Logo (UI / JSON-LD): [`public/brand/logo.png`](public/brand/logo.png) — path set in `lib/site-config.ts`
- Also on disk: `logo.jpg`, `hero.jpg`, favicon/icon assets under `public/brand/` and `app/`

## Vercel deploy

1. Connect the GitLab repo in [Vercel](https://vercel.com)
2. Set env vars for **Production** (and Preview if needed):
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `905511624955`
   - `NEXT_PUBLIC_SITE_URL` = `https://www.pendikgumustesisat.com`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-1YX918GS90` (or empty to disable)
   - `BLOG_WRITER_BASE_URL` = Aymar publish URL for this project
   - `BLOG_WRITER_API_KEY` = Aymar API key
3. Custom domain: `www.pendikgumustesisat.com` (optionally redirect apex → www)
4. Deploy

### Post-deploy smoke tests

- Mobile sticky **Hemen Ara** bar → opens `tel:+905511624955` (hidden on dedicated service landings, which use their own sticky CTAs)
- Footer / LP WhatsApp links → `wa.me/905511624955`
- View page source → JSON-LD shows `Pendik Gümüş Tesisat` and production URL
- `/sitemap.xml` and `/robots.txt` → URLs use `https://www.pendikgumustesisat.com`
- `/blog` → lists posts when Aymar env is configured
