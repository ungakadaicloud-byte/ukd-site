# UNGA KADAI DIGITAL — Website

Lead-gen website for UNGA KADAI DIGITAL and its 5 product signboards:
Me & Mech, Me & Vakil, Me & Doctor, Me & Voter, Me & Eseva.

## Stack
React + Vite + Tailwind CSS + React Router + Supabase (lead capture only, no auth needed for v1).

## Local setup

```bash
npm install
cp .env.example .env      # then fill in your Supabase project URL + anon key
npm run dev
```

## Supabase — one-time setup

1. Create a new Supabase project (or reuse an existing one).
2. Run this in the SQL editor:

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  product text not null,
  name text not null,
  phone text not null,
  town text,
  message text,
  status text not null,        -- 'demo_request' | 'waitlist'
  created_at timestamptz default now()
);

alter table leads enable row level security;

create policy "Anyone can insert leads"
  on leads for insert
  with check (true);
```

3. Copy the Project URL and `anon` public key into `.env`.

**Optional — instant WhatsApp/notification on new lead:** wire a Supabase
Database Webhook on `leads` insert to your MSG91/Wati endpoint. This keeps
the frontend dumb (just an insert) and lets you swap notification channels
without touching the site.

## Adding or updating products

Everything about a product signboard — copy, features, status, accent color —
lives in one file: `src/data/products.js`. There is no per-product page code
to touch. To promote a product from "early access" to "live" (full flagship
page with demo request instead of waitlist), just:

1. Change `status: 'early'` to `status: 'live'` in `products.js`.
2. Fill in richer `features` and a sharper `solution` if the placeholder copy
   was a draft.

The router automatically serves `ProductFlagship.jsx` instead of
`ProductEarlyAccess.jsx` for that slug — no route changes needed.

## Deploy

### Vercel
```bash
npm i -g vercel
vercel
```
Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment
variables in the Vercel project settings (Production + Preview).

### Railway
- New Project → Deploy from GitHub repo.
- Build command: `npm run build`
- Start command: `npx serve dist` (or use Railway's static site output with `dist` as the publish directory)
- Add the two `VITE_*` env vars in Railway's Variables tab.

Either way: since this is a static Vite build, connect your domain's DNS
(A/CNAME per the platform's instructions) once the first deploy is live.

## Design system reference

- **Colors:** ink `#12142B` (background), paper `#EDE7D9` (text), gold
  `#E8A33D`, teal `#1F8A70`, brick `#C1502E` (Mechanix OS accent only).
- **Type:** Fraunces (display headlines), Space Grotesk (UI/sign labels),
  IBM Plex Sans (body — chosen because it has a matching Tamil companion
  face if you localize copy later).
- **Signature motif:** each product is a hanging "signboard" with rivet
  corners — a literal read of "Unga Kadai" (your shop).
