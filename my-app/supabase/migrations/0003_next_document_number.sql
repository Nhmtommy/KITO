-- supabase/migrations/0003_next_document_number.sql
-- Kito — Ship 2: atomic document numbering (MASTER_PROMPT section 6).
-- Format: PI-{YYYY}-{NNNN}. Uses a Postgres sequence per business per year,
-- so values are atomic and never reused. Gaps are acceptable (never decremented).

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

-- Only the owning logic / server role should call this.
revoke all on function next_document_number(uuid, int) from public;
grant execute on function next_document_number(uuid, int) to service_role;
