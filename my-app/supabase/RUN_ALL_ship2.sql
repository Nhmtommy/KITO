-- supabase/RUN_ALL_ship2.sql
-- Kito — Ship 2 paste-and-run file.
-- Paste this ENTIRE file into the Supabase SQL Editor and click Run.
-- It is migrations 0001 + 0002 + 0003 concatenated in order.
-- Safe to run once on a fresh project. Re-running will error on
-- "already exists" objects — that is expected and harmless.

-- ============================================================
-- 0001_init_schema.sql
-- ============================================================
create type currency_enum as enum ('UGX', 'USD', 'EUR', 'KES');
create type doc_status as enum ('draft', 'sent', 'viewed', 'accepted', 'converted', 'expired', 'rejected');
create type incoterm_enum as enum ('EXW', 'FOB', 'CIF', 'DAP', 'DDP', 'FCA');

create table businesses (
  id uuid primary key default gen_random_uuid(),
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

create table documents (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  client_id uuid not null references clients(id),
  number text not null unique,
  status doc_status not null default 'draft',
  currency currency_enum not null,
  exchange_rate numeric(15,6) not null default 1,
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

create table document_lines (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references documents(id) on delete cascade,
  item_id uuid references items(id),
  description text not null,
  hs_code text,
  quantity numeric(15,3) not null check (quantity > 0),
  unit_price numeric(15,2) not null check (unit_price >= 0),
  line_total numeric(15,2) not null,
  "order" integer not null
);

create table activity_log (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references documents(id),
  action text not null,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index idx_clients_business on clients(business_id);
create index idx_items_business on items(business_id);
create index idx_documents_business on documents(business_id);
create index idx_document_lines_document on document_lines(document_id);
create index idx_activity_log_document on activity_log(document_id);

-- ============================================================
-- 0002_rls_policies.sql
-- ============================================================
alter table businesses      enable row level security;
alter table clients         enable row level security;
alter table items           enable row level security;
alter table documents       enable row level security;
alter table document_lines  enable row level security;
alter table activity_log    enable row level security;

create or replace function owns_business(p_business_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from businesses b
    where b.id = p_business_id
      and b.user_id = auth.uid()
  );
$$;

create policy businesses_select on businesses for select using (user_id = auth.uid());
create policy businesses_insert on businesses for insert with check (user_id = auth.uid());
create policy businesses_update on businesses for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy businesses_delete on businesses for delete using (user_id = auth.uid());

create policy clients_select on clients for select using (owns_business(business_id));
create policy clients_insert on clients for insert with check (owns_business(business_id));
create policy clients_update on clients for update using (owns_business(business_id)) with check (owns_business(business_id));
create policy clients_delete on clients for delete using (owns_business(business_id));

create policy items_select on items for select using (owns_business(business_id));
create policy items_insert on items for insert with check (owns_business(business_id));
create policy items_update on items for update using (owns_business(business_id)) with check (owns_business(business_id));
create policy items_delete on items for delete using (owns_business(business_id));

create policy documents_select on documents for select using (owns_business(business_id));
create policy documents_insert on documents for insert with check (owns_business(business_id));
create policy documents_update on documents for update using (owns_business(business_id)) with check (owns_business(business_id));
create policy documents_delete on documents for delete using (owns_business(business_id));

create policy document_lines_select on document_lines for select using (
  exists (select 1 from documents d where d.id = document_lines.document_id and owns_business(d.business_id))
);
create policy document_lines_insert on document_lines for insert with check (
  exists (select 1 from documents d where d.id = document_lines.document_id and owns_business(d.business_id))
);
create policy document_lines_update on document_lines for update using (
  exists (select 1 from documents d where d.id = document_lines.document_id and owns_business(d.business_id))
) with check (
  exists (select 1 from documents d where d.id = document_lines.document_id and owns_business(d.business_id))
);
create policy document_lines_delete on document_lines for delete using (
  exists (select 1 from documents d where d.id = document_lines.document_id and owns_business(d.business_id))
);

create policy activity_log_select on activity_log for select using (
  exists (select 1 from documents d where d.id = activity_log.document_id and owns_business(d.business_id))
);
create policy activity_log_insert on activity_log for insert with check (
  exists (select 1 from documents d where d.id = activity_log.document_id and owns_business(d.business_id))
);

-- ============================================================
-- 0003_next_document_number.sql
-- ============================================================
create or replace function next_document_number(p_business_id uuid, p_year int)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  seq_name text;
  next_val bigint;
begin
  seq_name := 'doc_seq_' || replace(p_business_id::text, '-', '_') || '_' || p_year;
  execute format('create sequence if not exists %I start 1', seq_name);
  execute format('select nextval(%L)', seq_name) into next_val;
  return 'PI-' || p_year || '-' || lpad(next_val::text, 4, '0');
end;
$$;

revoke all on function next_document_number(uuid, int) from public;
grant execute on function next_document_number(uuid, int) to service_role;
