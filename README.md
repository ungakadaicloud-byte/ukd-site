UNGA KADAI DIGITAL — Website
Lead-gen website for UNGA KADAI DIGITAL and its product signboards: Me & Doctor, Me & Coach, Me & Mech, Me & Vakil, Me & Voter, Me & Eseva.
Stack
React + Vite + Tailwind CSS + React Router + Supabase (lead capture only, no auth needed for v1).
Local setup
npm install
cp .env.example .env      # then fill in your Supabase project URL + anon key
npm run dev
Logo
Drop your logo file at public/logo.png (referenced directly by the Navbar as /logo.png). Recommended: a roughly square or wide transparent PNG, at least 128px tall so it stays crisp at the 32px navbar display height.
Supabase — one-time setup
Create a new Supabase project (or reuse an existing one).
Run this in the SQL editor:
create table leads (
  id uuid primary key default gen_random_uuid(),
  product text not null,
  name text not null,
  phone text not null,
  town text,
  message text,
  status text not null,   -- 'demo_request' | 'contact_request' | 'beta_request' | 'waitlist'
  created_at timestamptz default now()
);

alter table leads enable row level security;

create policy "Anyone can insert leads"
  on leads for insert
  with check (true);
Copy the Project URL and anon public key into .env as VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY. Use the anon/public key only — never the service_role key, since VITE_* vars are bundled into client-side JS and visible to anyone viewing the site's source. The anon key is safe here because the RLS policy above only allows inserts.
Optional — instant WhatsApp/notification on new lead: wire a Supabase Database Webhook on leads insert to your MSG91/Wati endpoint.
Product status model — the site's core honesty rule
Every product carries a status in src/data/products.js, and the site never shows a CTA the product's real stage can't back up:
status
Meaning
Template
CTA
live
Deployed, in real use
ProductFlagship.jsx
Links directly to liveUrl
testing
Closed pilot / beta with real users
ProductTesting.jsx
"Request Beta Access" form
developing
Pre-pilot, concept or build stage
ProductDeveloping.jsx
"Join Waitlist" form
To promote a product (e.g. testing → live once it has real production users and a public URL):
Change status in products.js.
Add a liveUrl field if promoting to live.
Sharpen features/solution copy if it was written for an earlier stage.
The router (App.jsx) maps status → template automatically — no route code to touch.
Deploy
Vercel
npm i -g vercel
vercel
Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY as environment variables in the Vercel project settings (Production + Preview).
Railway
New Project → Deploy from GitHub repo.
Build command: npm run build
Start command: npx serve dist (or use Railway's static site output with dist as the publish directory)
Add the two VITE_* env vars in Railway's Variables tab.
Design system reference
Colors: ink #12142B (background), paper #EDE7D9 (text), gold #E8A33D, teal #1F8A70, brick #C1502E (Mechanix OS accent only).
Type: Fraunces (display headlines), Space Grotesk (UI/sign labels), IBM Plex Sans (body — chosen because it has a matching Tamil companion face if you localize copy later).
Signature motif: each product is a hanging "signboard" with rivet corners — a literal read of "Unga Kadai" (your shop).
