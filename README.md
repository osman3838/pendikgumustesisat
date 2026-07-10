# Pendik Gümüş Tesisat

Production website for **Pendik Gümüş Tesisat** — plumbing and unclogging services in Pendik, Kartal, and Tuzla (Istanbul).

- **Domain:** [www.pendikgumustesisat.com](https://www.pendikgumustesisat.com)
- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS
- **Deploy:** Vercel

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number for click-to-chat links (digits only, e.g. `905511654955`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (defaults to `https://www.pendikgumustesisat.com`) |

Both variables are public (`NEXT_PUBLIC_`) so client components (sticky WhatsApp button, mobile nav) can build `wa.me` links safely. If unset, hardcoded fallbacks prevent broken URLs.

## Vercel deploy

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set environment variables for **Production**, **Preview**, and **Development**:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `905511654955`
   - `NEXT_PUBLIC_SITE_URL` = `https://www.pendikgumustesisat.com`
4. Add custom domain: `www.pendikgumustesisat.com` (optionally redirect apex `pendikgumustesisat.com` → www)
5. Deploy

### Post-deploy smoke tests

- Tap the sticky WhatsApp button on mobile → should open `wa.me/905511654955`
- View page source → JSON-LD shows `Pendik Gümüş Tesisat` and production URL
- Visit `/sitemap.xml` and `/robots.txt` → URLs use `https://www.pendikgumustesisat.com`

## Brand assets

Place your logo in `public/brand/`. The layout currently uses a text fallback until a logo is added.

## Blog

Blog ingestion is deferred. `/blog` shows a placeholder until a separate publishing system is connected.
