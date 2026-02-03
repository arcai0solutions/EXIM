-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- Inquiries Table
create table if not exists public.inquiries (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text,
  email text,
  phone text,
  message text,
  status text default 'new'
);

-- Leads Table for CRM
create table if not exists public.leads (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text,
  description text,
  value numeric,
  pipeline_stage text default 'New', 
  contact_email text,
  contact_name text
);

-- Set up Row Level Security (RLS)
-- For now, we are enabling public access for simplicity. 
-- In a production environment, you should restrict this.

-- Enable RLS
alter table public.inquiries enable row level security;
alter table public.leads enable row level security;

-- Create policies to allow public insert (for contact form)
create policy "Enable insert for public" on public.inquiries
  for insert with check (true);

-- Create policies to allow full access for authenticated users (admin)
-- Ideally you would check for a specific role manually or use Supabase Auth roles
create policy "Enable all access for authenticated users" on public.inquiries
  for all using (auth.role() = 'authenticated');

create policy "Enable all access for authenticated users" on public.leads
  for all using (auth.role() = 'authenticated');
