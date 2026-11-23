# supabase/

Database migrations for Kito.

## Ship 2 — how to run (option A: paste into SQL Editor)

1. Open your Supabase project → **SQL Editor** → **New query**.
2. Open `supabase/RUN_ALL_ship2.sql`, copy the whole file, paste, **Run**.
3. Verify in **Table Editor**: you should see `businesses`, `clients`,
   `items`, `documents`, `document_lines`, `activity_log`.
4. Verify RLS: each table shows a green **RLS enabled** shield.

## Files

| File | Purpose |
|------|---------|
| `0001_init_schema.sql` | Enums + 6 tables + indexes |
| `0002_rls_policies.sql` | RLS enabled + owner-scoped policies on every table |
| `0003_next_document_number.sql` | Atomic `PI-{YYYY}-{NNNN}` numbering function |
| `RUN_ALL_ship2.sql` | All three concatenated — the one you paste |

## Notes

- `users_id` on `businesses` is nullable until Ship 3 (auth). Once auth
  ships, the signup flow sets it and RLS activates.
- `next_document_number` is granted to `service_role` only; call it from the
  server (Route Handler / Server Action), never from the browser.
- These files double as history. If we later adopt the Supabase CLI,
  they run as `supabase db push` with no changes.
