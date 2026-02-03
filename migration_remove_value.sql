-- Migration: Remove value column from leads table
-- Reason: User requested removal of collar value in favor of date tracking.

-- Optional: You can just ignore the column, but to clean up the schema:
alter table public.leads drop column if exists value;

-- Ensure created_at is present (it was in initial schema, but good to be safe)
-- alter table public.leads add column if not exists created_at timestamp with time zone default timezone('utc'::text, now()) not null;
