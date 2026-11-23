-- supabase/migrations/0001_init_schema.sql
-- Kito — Ship 2: initial schema
-- Source of truth: MASTER_PROMPT.md section 3 (Data Model).
-- Paste into Supabase SQL Editor and run once on a fresh project.

-- ─────────────────────────────────────────────────────────────
-- Enums
-- ─────────────────────────────────────────────────────────────
create type currency_enum as enum ('UGX', 'USD', 'EUR', 'KES');
create type doc_status as enum ('draft', 'sent', 'viewed', 'accepted', 'converted', 'expired', 'rejected');
create type incoterm_enum as enum ('EXW', 'FOB', 'CIF', 'DAP', 'DDP', 'FCA');

-- ─────────────────────────────────────────────────────────────
-- businesses
-- ─────────────────────────────────────────────────────────────
create table businesses (
  id uuid primary key default gen_random_uuid(),
  -- user_id links to auth.users. Nullable until auth ships (Ship 3);
  -- unique per user so one owner = one business.
  user_id uuid references auth.users(id) on delete cascade unique,
  name text not null,
  tin text,
  address text not null,
  phone text not null,
  email text,
  logo_url text,
  default_currency currency_enum not null default 'UGX',
  default_vat_enabled boolean not null default true,
  momo_mtn_code text,
  momo_airtel_code text,
  bank_name text,
  bank_branch text,
  bank_account text,
  swift_code text,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- clients
-- ─────────────────────────────────────────────────────────────
create table clients (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  name text not null,
  tin text,
  email text,
  phone text,
  address text,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- items  (product/service library; named "items" per section 3)
-- ─────────────────────────────────────────────────────────────
create table items (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  description text not null,
  unit_price numeric(15,2) not null check (unit_price >= 0),
  hs_code text,
  unit text,
  is_service boolean not null default false,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- documents
-- ─────────────────────────────────────────────────────────────
create table documents (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  client_id uuid not null references clients(id),
  number text not null unique,                       -- PI-2026-0001
  status doc_status not null default 'draft',
  currency currency_enum not null,
  exchange_rate numeric(15,6) not null default 1,    -- snapshot at creation
  subtotal numeric(15,2) not null,
  vat_amount numeric(15,2) not null,
  total numeric(15,2) not null,
  vat_enabled boolean not null,
  incoterm incoterm_enum,
  valid_until timestamptz not null,
  notes text,
  share_token text unique,
  viewed_at timestamptz,
  accepted_at timestamptz,
  converted_at timestamptz,
  fiscal_invoice_number text,
  efris_payload jsonb,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- document_lines
-- ─────────────────────────────────────────────────────────────
create table document_lines (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references documents(id) on delete cascade,
  item_id uuid references items(id),                 -- nullable: ad-hoc lines allowed
  description text not null,
  hs_code text,
  quantity numeric(15,3) not null check (quantity > 0),
  unit_price numeric(15,2) not null check (unit_price >= 0),
  line_total numeric(15,2) not null,
  "order" integer not null
);

-- ─────────────────────────────────────────────────────────────
-- activity_log  (append-only; never update/delete)
-- ─────────────────────────────────────────────────────────────
create table activity_log (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references documents(id),
  action text not null,                              -- 'created' | 'sent' | 'viewed' | ...
  metadata jsonb,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Helper indexes
-- ─────────────────────────────────────────────────────────────
create index idx_clients_business on clients(business_id);
create index idx_items_business on items(business_id);
create index idx_documents_business on documents(business_id);
create index idx_document_lines_document on document_lines(document_id);
create index idx_activity_log_document on activity_log(document_id);
