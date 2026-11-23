-- supabase/migrations/0002_rls_policies.sql
-- Kito — Ship 2: Row Level Security on every table.
-- Rule (AGENTS section 4 / MASTER_PROMPT section 13): RLS on every table.
-- A business is owned by exactly one auth user (businesses.user_id).
-- A user may only touch rows belonging to a business they own.

-- Enable RLS on every table.
alter table businesses      enable row level security;
alter table clients         enable row level security;
alter table items           enable row level security;
alter table documents       enable row level security;
alter table document_lines  enable row level security;
alter table activity_log    enable row level security;

-- ─────────────────────────────────────────────────────────────
-- Helper: does the current auth user own this business?
-- ─────────────────────────────────────────────────────────────
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

-- ─────────────────────────────────────────────────────────────
-- businesses: owner-only CRUD
-- ─────────────────────────────────────────────────────────────
create policy businesses_select on businesses
  for select using (user_id = auth.uid());

create policy businesses_insert on businesses
  for insert with check (user_id = auth.uid());

create policy businesses_update on businesses
  for update using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy businesses_delete on businesses
  for delete using (user_id = auth.uid());

-- ─────────────────────────────────────────────────────────────
-- clients: scoped via owning business
-- ─────────────────────────────────────────────────────────────
create policy clients_select on clients
  for select using (owns_business(business_id));

create policy clients_insert on clients
  for insert with check (owns_business(business_id));

create policy clients_update on clients
  for update using (owns_business(business_id))
  with check (owns_business(business_id));

create policy clients_delete on clients
  for delete using (owns_business(business_id));

-- ─────────────────────────────────────────────────────────────
-- items: scoped via owning business
-- ─────────────────────────────────────────────────────────────
create policy items_select on items
  for select using (owns_business(business_id));

create policy items_insert on items
  for insert with check (owns_business(business_id));

create policy items_update on items
  for update using (owns_business(business_id))
  with check (owns_business(business_id));

create policy items_delete on items
  for delete using (owns_business(business_id));

-- ─────────────────────────────────────────────────────────────
-- documents: scoped via owning business
-- ─────────────────────────────────────────────────────────────
create policy documents_select on documents
  for select using (owns_business(business_id));

create policy documents_insert on documents
  for insert with check (owns_business(business_id));

create policy documents_update on documents
  for update using (owns_business(business_id))
  with check (owns_business(business_id));

create policy documents_delete on documents
  for delete using (owns_business(business_id));

-- ─────────────────────────────────────────────────────────────
-- document_lines: scoped via parent document's business
-- ─────────────────────────────────────────────────────────────
create policy document_lines_select on document_lines
  for select using (
    exists (
      select 1 from documents d
      where d.id = document_lines.document_id
        and owns_business(d.business_id)
    )
  );

create policy document_lines_insert on document_lines
  for insert with check (
    exists (
      select 1 from documents d
      where d.id = document_lines.document_id
        and owns_business(d.business_id)
    )
  );

create policy document_lines_update on document_lines
  for update using (
    exists (
      select 1 from documents d
      where d.id = document_lines.document_id
        and owns_business(d.business_id)
    )
  )
  with check (
    exists (
      select 1 from documents d
      where d.id = document_lines.document_id
        and owns_business(d.business_id)
    )
  );

create policy document_lines_delete on document_lines
  for delete using (
    exists (
      select 1 from documents d
      where d.id = document_lines.document_id
        and owns_business(d.business_id)
    )
  );

-- ─────────────────────────────────────────────────────────────
-- activity_log: append-only via parent document's business.
-- No UPDATE/DELETE policies => those operations are denied.
-- ─────────────────────────────────────────────────────────────
create policy activity_log_select on activity_log
  for select using (
    exists (
      select 1 from documents d
      where d.id = activity_log.document_id
        and owns_business(d.business_id)
    )
  );

create policy activity_log_insert on activity_log
  for insert with check (
    exists (
      select 1 from documents d
      where d.id = activity_log.document_id
        and owns_business(d.business_id)
    )
  );
