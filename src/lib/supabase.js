import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Client is created even if env vars are missing so the app doesn't crash
// in local dev before .env is configured. submitLead() will surface a clear
// error instead of a blank failure.
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

/**
 * Inserts a lead into the `leads` table.
 * Table schema (create in Supabase SQL editor):
 *
 * create table leads (
 *   id uuid primary key default gen_random_uuid(),
 *   product text not null,
 *   name text not null,
 *   phone text not null,
 *   town text,
 *   message text,
 *   status text not null,        -- 'demo_request' | 'waitlist'
 *   created_at timestamptz default now()
 * );
 * alter table leads enable row level security;
 * create policy "Anyone can insert leads" on leads for insert with check (true);
 */
export async function submitLead({ product, name, phone, town, message, status }) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
    )
  }
  const { error } = await supabase.from('leads').insert([
    { product, name, phone, town, message, status },
  ])
  if (error) throw error
  return true
}
