📘 THE COURSE BOOK

Uganda 2026 Proforma & Cashflow Engine

From Zero to Founder Who Ships — 90 Days, 72 Lessons, 30 Ships

Version: 1.0 · Frozen: 2026-10-23 · Start: 2026-11-26 · End: 2027-02-23

How to use this book: Save it as COURSE_BOOK.md in your repo. When a chat fills up, paste it + your PROGRESS.md and say: "Read COURSE_BOOK.md and PROGRESS.md. Continue from Day X." Nothing is lost. The book is the source of truth. Chat history is not.

---

PART 1 — MISSION & CONTRACT

1.1 Mission

Transform you into a solo founder who ships fullstack SaaS and can debug AI-generated code when it breaks. Not a salaried software engineer. Not a tutorial graduate. A builder who takes an idea to paying customers alone.

1.2 One-Sentence Product

A Ugandan business owner signs up, creates a UGX proforma with VAT, downloads a compliant PDF, and sends it on WhatsApp — in under 90 seconds from first login.

1.3 The Contract (Frozen — do not change without a written reason)

Item Locked Value
Product Uganda 2026 Proforma & Cashflow Engine (MVP)
Spec MASTER_PROMPT.md v1.0.0 + scope cuts (§5.2)
AI in product None. Build tool only. No OpenAI key in the project.
Stack Next.js 16 App Router · TypeScript strict · Tailwind v4 · shadcn/ui · react-hook-form + Zod · Supabase (Postgres + Auth + RLS) · @react-pdf/renderer · Vercel (host + cron + blob) · Stripe test mode · Sentry
Start 2026-11-26 (day after exams)
Cadence Ship every 3rd day · Buffer every 5th · 72 lessons · 18 buffers · 30 ships
Phase 1 end 2026-12-25 (Christmas)
Phase 2 end 2027-01-24
Phase 3 end 2027-02-23 (launch target)
Principles Tagged per lesson, practiced in code (§7)

1.4 What "Ready" Means

Not enthusiasm. Not planning. Two dates and a URL:

1. All 8 pre-flight items done by 2026-11-25
2. You message me on 2026-11-26: "Day 1. Pre-flight done. Running create-next-app now."
3. A live Vercel URL by 2026-11-28 (Day 3, Ship 1)

1.5 What You Will and Won't Be on Day 90

You will be able to:

· Build and ship a fullstack SaaS solo, end to end
· Read a stack trace and find the actual bug
· Know when AI is lying to you and why
· Design a database schema that doesn't fall apart
· Handle auth, payments, and compliance without hand-holding
· Take an idea to paying customers in weeks, not months

You will NOT be able to (yet):

· Design systems for 1M concurrent users
· Reason about algorithmic complexity at a deep level
· Maintain a 500k-line codebase with a team of 20
· Pass a FAANG senior engineer interview
· Replace a 3–5 year software engineering apprenticeship

That's not a flaw. It's the scope. Founder who codes ≠ software engineer. Both are real. Both are valuable.

---

PART 2 — THE PLAN

2.1 The 90-Day Roadmap

Phase Days Dates Core Skills Ship Outcome Metric
1: Core Shipper 1–30 Nov 26 – Dec 25, 2026 App Router, Supabase Auth/DB/RLS, CRUD, PDF gen, WhatsApp share Proforma flow live 10 test users each generate 1 proforma
2: Money + Conversion 31–60 Dec 26 – Jan 24, 2027 Status pipeline, EFRIS conversion (simulated), Stripe billing, expiry Status pipeline + convert + SaaS billing live $1 SaaS test charge + 1 successful proforma → fiscal conversion
3: Real Product 61–90 Jan 25 – Feb 23, 2027 Onboarding, SEO, launch, distribution Public launch 100 signups, 5 paying

2.2 The Cadence

· Ship every 3rd day. Deploy to Vercel. Get feedback. No deploy = lesson = 0%.
· Buffer every 5th day (Days 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90). Buffers are for fixing, reviewing, or catching up. Slipping is planned.
· Buffer + Ship days: 15, 30, 45, 60, 75, 90 (fix, then deploy).
· Content gate: No new lesson until last ship is live.
· Blocked > 2 days = I call it out.

2.3 What a Ship Is

A live Vercel URL with a clear new capability another person can use. Not a branch. Not local code. Not a half-finished feature. Deployed, working, shareable.

---

PART 3 — THE MVP (PHASE 1 DETAILED)

3.1 MVP Definition

10 ships in 30 days. A business owner can:

1. Sign up
2. Set up their business once (name, TIN, phone, MoMo codes)
3. Add a client
4. Add products to a reusable library
5. Create a proforma: pick client, pick products, adjust qty/price, VAT toggle
6. See live UGX totals recalculate
7. Download a compliant PDF with the verbatim §8.3 disclaimer
8. Send it on WhatsApp with a pre-filled message
9. See all past proformas in a list

That's a real product. That's what they'd pay for. That's the MVP.

3.2 The 10 MVP Ships (Days 1–30)

Ship Day Feature Master Prompt Ref Deliverable
1 3 Landing page + Vercel deploy §12.1, §12.4 Live URL with hero + CTA
2 6 Supabase schema + RLS (businesses, clients, items, documents, document_lines, activity_log) §3 Tables exist, RLS enabled
3 9 Auth (signup, login, logout) + /dashboard protected §13 User can sign up, log in, see dashboard
4 12 Business profile: name, TIN, address, phone, logo, MTN/Airtel codes §3, §8.1 Settings page, filled once
5 15 BUFFER + SHIP — Clients CRUD (create, list, edit, delete) §11 Client saved and reusable
6 18 Products CRUD — description, unit price (UGX), unit (pcs/kg/hr/service) §3, §11 Product library working
7 21 Proforma form: pick client, pick product or type new, qty, VAT toggle, live UGX totals, atomic numbering PI-2026-0001, save draft §4, §5, §6, §12.2 Draft created with correct total
8 24 PDF generation — watermark "PROFORMA INVOICE — NON-FISCAL", verbatim §8.3 disclaimer, MoMo codes, correct UGX formatting §8.1–8.3 Downloadable PDF, pixel-correct
9 27 WhatsApp share — pre-filled wa.me message with total, validity, share URL, MoMo codes §10 WhatsApp opens with exact message
10 30 BUFFER + SHIP — Polish, onboarding message, deploy, onboard 10 real test users §Success Criteria 10 proformas generated by real people

3.3 Explicitly Cut from MVP (Deferred to Phase 2/3)

Feature When Why deferred
Multi-currency (USD/KES) Phase 2 UGX-only proves the value
EFRIS conversion (fiscal invoice) Phase 2 Big feature, needs the proforma flow solid first
Public share page with "Accept" Phase 2 WhatsApp + PDF attachment is enough for MVP
Status pipeline (viewed/accepted) Phase 2 MVP just needs draft + sent
Stripe billing / paywall Phase 2 Get 10 users first, then charge
Logo upload Phase 3 Nice-to-have, not revenue
HS codes / Incoterms Phase 3 Cross-border is a later market
PWA / offline mode Cut entirely Not revenue-critical
Email notifications Phase 3 WhatsApp is the notification channel
Admin dashboard Phase 3 Owner sees their own list; that's enough
Expiry cron Phase 2 Manual expiry by owner is fine in MVP
VAT per line Phase 3 Document-level VAT only in MVP (§5)
AI features (any) Cut AI-free product. Build-tool only.

Rule: if it doesn't serve the one-sentence MVP, it waits.

3.4 Phase 2 Ships (Days 31–60)

Ship Day Feature
11 33 Status pipeline UI (draft/sent/viewed/accepted) + activity log
12 36 Public accept flow (client clicks Accept → status = accepted)
13 39 Document list + filters + detail page
14 42 Free-tier limits (3 proformas/mo) + paywall
15 45 BUFFER + SHIP — Stripe Checkout (test mode) for Pro tier
16 48 Stripe webhook → subscription row + feature gating (Pro unlocks logo, MoMo fields, multi-currency)
17 51 EFRIS payload builder (simulated) + Convert button
18 54 Fiscal invoice PDF (watermark removed, TAX INVOICE header, QR placeholder)
19 57 Expiry logic + Vercel Cron (auto-expire at valid_until) + renew flow
20 60 BUFFER + SHIP — Phase 2 hardening: PDF cache fix, edge cases, 0 data loss on conversion

3.5 Phase 3 Ships (Days 61–90)

Ship Day Feature
21 63 Onboarding flow: new user → first proforma in < 90s
22 66 Transactional email (Resend): welcome, receipt, expiry warning
23 69 SEO: metadata, sitemap, robots, OG image
24 72 Performance pass + Sentry integration
25 75 BUFFER + SHIP — Conversion-focused landing page
26 78 Pricing page (Free/Starter/Pro/Business) + ToS + Privacy
27 81 Support widget + feedback loop
28 84 Launch assets: WhatsApp broadcast scripts, LinkedIn posts, Reddit
29 87 Launch day + distribution push
30 90 BUFFER + SHIP — 5 paying customers + 90-day retro + next quarter plan

---

PART 4 — THE 72-LESSON FRAMEWORK

4.1 Structure

· 72 teaching days across 3 phases (24 per phase)
· 18 buffer days (6 per phase)
· 30 ships (10 per phase)
· Lessons are 1 day. Ships are on Day 3, 6, 9... of each phase. Buffers fill the gaps.

4.2 Phase 1 — Days 1–30 (24 lessons + 6 buffers)

Day Type Topic
1 Learn Next.js 16 App Router skeleton · deploy pipeline · Server vs Client Components
2 Learn Layouts, routing, loading.tsx, error.tsx, metadata API
3 SHIP 1 Landing page live on Vercel
4 Learn Tailwind v4 + shadcn/ui + design tokens (CSS variables)
5 BUFFER Fix deploy, review
6 SHIP 2 Supabase project + schema (5 tables) + RLS
7 Learn Supabase client/server helpers, env vars, typed queries
8 Learn Auth 1: signup, email confirmation, magic link vs password
9 SHIP 3 Auth flow working, /dashboard protected
10 BUFFER 
11 Learn Middleware + route protection
12 SHIP 4 Business profile form (name, TIN, address, phone, logo, MoMo codes)
13 Learn Server Actions + forms: CREATE pattern
14 Learn RLS policies: auth.uid() = business_id pattern
15 BUFFER + SHIP 5 Clients CRUD (create, list, edit, delete)
16 Learn READ: list + detail pages, pagination
17 Learn UPDATE + DELETE via Server Actions
18 SHIP 6 Products CRUD — the pattern applied to a second table
19 Learn Zod validation shared between client and server
20 BUFFER 
21 SHIP 7 Proforma form: client picker, product picker, line items, live totals, VAT toggle, atomic numbering, save draft
22 Learn Currency formatting (lib/currency.ts) + VAT calculation (lib/vat.ts) — unit tested
23 Learn @react-pdf/renderer basics: component-to-PDF
24 SHIP 8 PDF: watermark + verbatim §8.3 disclaimer + MoMo codes + correct UGX
25 BUFFER 
26 Learn PDF layout polish: pagination, table overflow, currency alignment
27 SHIP 9 WhatsApp share: buildWhatsAppMessage + wa.me link + signed share URL
28 Learn Error boundaries, loading states, optimistic UI
29 Learn Documentation: README, seed script, env var template
30 BUFFER + SHIP 10 Onboard 10 real users. Phase 1 retro.

4.3 Phase 2 — Days 31–60 (24 lessons + 6 buffers)

Day Type Topic
31 Learn Status pipeline design + state machine patterns
32 Learn activityLog append-only writes
33 SHIP 11 Status pipeline UI + activity log
34 Learn Signed tokens for public share (uuid + HMAC)
35 BUFFER 
36 SHIP 12 Public accept page (/p/{token}) + Accept button
37 Learn Document list: filters, search, sort
38 Learn Detail page: single document view + timeline
39 SHIP 13 Document list + filters + detail
40 BUFFER 
41 Learn Free tier design: counting, limits, edge cases
42 SHIP 14 Free-tier limits (3/mo) + paywall
43 Learn Stripe Checkout: products, prices, sessions
44 Learn Stripe webhooks: signature verification, idempotency
45 BUFFER + SHIP 15 Stripe Checkout (test mode) live
46 Learn Subscription model + feature gating pattern
47 Learn Entitlements: plan check middleware
48 SHIP 16 Webhook → subscription row + gated features
49 Learn EFRIS payload structure (§9) + preconditions
50 BUFFER 
51 SHIP 17 EFRIS payload builder (simulated) + Convert button
52 Learn Fiscal invoice PDF: watermark removal, header swap, QR placeholder
53 Learn Data integrity: FK relationships, no copies (§8.4)
54 SHIP 18 Fiscal invoice PDF with 0 data loss
55 BUFFER 
56 Learn Vercel Cron + expiry logic
57 Learn Renew flow: clone document, new number, keep old immutable
58 Learn Phase 2 audit: all MUST constraints tested
59 Learn Hardening: edge cases, concurrency, idempotency
60 BUFFER + SHIP 20 Phase 2 complete: $1 charge + 1 successful conversion

4.4 Phase 3 — Days 61–90 (24 lessons + 6 buffers)

Day Type Topic
61 Learn Onboarding design: time-to-value < 90s
62 Learn Onboarding implementation: empty states, first-run hints
63 SHIP 21 Onboarding flow: signup → first proforma in < 90s
64 Learn Transactional email (Resend): templates, deliverability
65 BUFFER 
66 SHIP 22 Welcome + receipt + expiry-warning emails
67 Learn SEO: metadata API, sitemap, robots
68 Learn OG images + social previews
69 SHIP 23 Shareable links look professional on WhatsApp/Twitter
70 BUFFER 
71 Learn Performance: caching, image optimization, bundle size
72 Learn Sentry integration + structured logging
73 SHIP 24 Errors tracked before users complain
74 Learn Landing copy: headline, proof, CTA
75 BUFFER + SHIP 25 Conversion-focused landing page
76 Learn Pricing page design
77 Learn Legal: ToS, Privacy, refund policy (Uganda DPPA 2019)
78 SHIP 26 Checkout-ready pricing page
79 Learn Support: feedback widget, contact channel
80 BUFFER 
81 SHIP 27 Feedback loop live
82 Learn Launch checklist (20 items)
83 Learn Distribution: communities, outreach scripts, WhatsApp broadcast
84 SHIP 28 Launch assets ready
85 BUFFER 
86 Learn Launch day execution plan
87 SHIP 29 Launch day + first 100 signups push
88 Learn Post-launch iteration from real feedback
89 Learn Metrics review + next 90-day plan
90 BUFFER + SHIP 30 5 paying customers + retro

4.5 The Lesson Format (Every Day)

Every lesson follows this template exactly:

```
🧭 PRINCIPLES IN PLAY: [named principles for the day]

**DAY X/72: [Topic] | Date: YYYY-MM-DD**

1. FEYNMAN EXPLAIN — analogy first, as many sentences as truth needs
2. CORE CODE — minimal, paste-and-run, max 30 lines, stack only
3. WHY THIS SHIPS MONEY — 2 lines, tie to UX/speed/revenue
4. WHEN AI/CODE FAILS — student's actual error + Socratic debug steps
5. SHIP TASK — clear feature, acceptance criteria, deploy by Day X+2
6. CHECKPOINT — 1 question testing the core idea
```

4.6 The Buffer Day Format

```
**DAY X/90: BUFFER | Date: YYYY-MM-DD**

"What are you stuck on? Paste error + code. Let's unblock in 10 min.
Then review last 3 ships."

If blocked > 2 days: name the real blocker (terminal, GitHub, Vercel, motivation).
Shrink the task to the smallest possible action.
```

---

PART 5 — STACK & SCOPE CUTS

5.1 The Stack (Locked)

```yaml
frontend:
  framework: Next.js 16 (App Router)
  language: TypeScript (strict, no any, no @ts-ignore)
  ui: shadcn/ui + Tailwind CSS v4
  forms: react-hook-form + zod (shared client/server schemas)
  state: Server Components + Server Actions; Zustand only for draft autosave

backend:
  runtime: Node.js 22
  framework: Next.js Route Handlers + Server Actions (monolith)
  db: Supabase Postgres (via @supabase/ssr)
  auth: Supabase Auth
  security: Row Level Security (RLS) on every table
  cron: Vercel Cron (for expiry)

pdf:
  engine: @react-pdf/renderer (pure JS, serverless-friendly)
  template: React components → PDF
  caching: none in MVP; regenerate per request

payments_integrations:
  momo: manual text fields for MTN/Airtel merchant codes (no API in MVP)
  bank: manual entry fields
  saas_billing: Stripe (test mode in Phase 1-2; live in Phase 3)

efris:
  mvp: simulated — generate EFRIS-format payload + placeholder QR
  prod: URA EFRIS REST API (documented handshake for Phase 3+)

hosting:
  app: Vercel
  db: Supabase
  storage: Vercel Blob (logos ≤ 2MB)
  cron: Vercel Cron

observability:
  errors: Sentry
  logs: Vercel built-in logs

testing:
  unit: Vitest (currency, VAT, numbering, status)
  e2e: Playwright (create-proforma, convert, whatsapp message format)
  no visual regression in MVP
```

5.2 The Scope Cuts (from Master Prompt)

The master prompt is the destination, not the starting line. These deviations are locked:

Master Prompt Says MVP Decision Why
Drizzle ORM + Neon Supabase Postgres + Supabase client + generated TS types One less layer. Supabase types are production-grade.
Better Auth Supabase Auth One less service. RLS + Supabase Auth is production-grade.
Puppeteer @react-pdf/renderer Puppeteer on Vercel = Chromium binary hell. react-pdf is pure JS.
Inngest Vercel Cron Free, built-in, one config file. Inngest is overkill.
Redis PDF cache No cache in MVP Regenerate. Add only if latency becomes a problem.
PWA / offline drafts Cut Phase 3+ at earliest. Not revenue-critical.
Visual regression tests Cut Snapshot + unit tests on lib/ are the 80/20.
PostHog + Axiom Sentry only One observability tool.
TanStack Query everywhere Server Components + Server Actions + RHF 90% is forms and reads. Don't over-abstract.
EUR currency UGX + USD + KES only (Phase 2) EUR is not an MVP market.
Next.js 15 Next.js 16.2.6 App Router identical.
AI features (any) Cut entirely Product is AI-free. Build-tool only.

Rule: Any deviation from this stack must be justified in a code comment starting with # STACK_DEVIATION: and include the trade-off. Otherwise you follow the locked stack.

---

PART 6 — PRODUCT SPECIFICATION

6.1 Core User Journeys

1. Create → Send: Onboard → add client → pick products → generate PDF → WhatsApp → client pays
2. Repeat Client Fast Path: select saved client → select saved products → generate → send (target: < 45 seconds)
3. Cross-border Quote (Phase 2): Toggle to USD/KES → Incoterms → HS codes → customs-ready PDF
4. Recovery Flow (Phase 2): Client ignores proforma → auto-WhatsApp at 7/3/1 days before expiry → re-accept

6.2 Data Model (Canonical — Drizzle-like, but implemented in Supabase SQL)

```sql
-- Core tables. All monetary fields: numeric(15,2). Never float.

businesses (
  id uuid PK default gen_random_uuid(),
  name text NOT NULL,
  tin text,                              -- Uganda TIN
  address text NOT NULL,
  phone text NOT NULL,                   -- +256 format
  email text,
  logo_url text,                         -- Vercel Blob URL, ≤2MB
  default_currency currency_enum NOT NULL DEFAULT 'UGX',
  default_vat_enabled boolean NOT NULL DEFAULT true,
  momo_mtn_code text,                    -- e.g., "*165*3*123456#"
  momo_airtel_code text,
  bank_name text, bank_branch text, bank_account text, swift_code text,
  created_at timestamptz DEFAULT now() NOT NULL
)

clients (
  id uuid PK, business_id uuid FK ON DELETE CASCADE,
  name text NOT NULL, tin text, email text, phone text, address text,
  created_at timestamptz DEFAULT now() NOT NULL
)

items (                                 -- The product library (MVP)
  id uuid PK, business_id uuid FK ON DELETE CASCADE,
  description text NOT NULL,
  unit_price numeric(15,2) NOT NULL,
  unit text,                            -- "pcs", "kg", "hr", "service"
  hs_code text,                         -- Phase 3
  is_service boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now() NOT NULL
)

documents (
  id uuid PK, business_id uuid FK, client_id uuid FK,
  number text NOT NULL UNIQUE,          -- PI-2026-0001
  status doc_status NOT NULL DEFAULT 'draft',
  currency currency_enum NOT NULL,
  exchange_rate numeric(15,6) NOT NULL, -- snapshot at creation, never re-fetched
  subtotal numeric(15,2) NOT NULL,
  vat_amount numeric(15,2) NOT NULL,
  total numeric(15,2) NOT NULL,
  vat_enabled boolean NOT NULL,
  incoterm incoterm_enum,               -- Phase 3
  valid_until timestamptz NOT NULL,
  notes text,
  fiscal_invoice_number text,           -- populated on convert
  efris_payload jsonb,                  -- audit trail
  viewed_at timestamptz, accepted_at timestamptz, converted_at timestamptz,
  created_at timestamptz DEFAULT now() NOT NULL
)

document_lines (
  id uuid PK, document_id uuid FK ON DELETE CASCADE,
  item_id uuid FK,                      -- nullable: ad-hoc lines allowed
  description text NOT NULL, hs_code text,
  quantity numeric(15,3) NOT NULL,
  unit_price numeric(15,2) NOT NULL,
  line_total numeric(15,2) NOT NULL,
  order integer NOT NULL
)

activity_log (                          -- Append-only. Never UPDATE or DELETE.
  id uuid PK, document_id uuid FK,
  action text NOT NULL,
  metadata jsonb,
  created_at timestamptz DEFAULT now() NOT NULL
)
```

Enums:

· currency_enum: 'UGX' | 'USD' | 'EUR' | 'KES'
· doc_status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'converted' | 'expired' | 'rejected'
· incoterm_enum: 'EXW' | 'FOB' | 'CIF' | 'DAP' | 'DDP' | 'FCA'

6.3 Currency & Formatting — Zero Tolerance

```typescript
// lib/currency.ts
export type Currency = 'UGX' | 'USD' | 'EUR' | 'KES';

export function formatMoney(amount: number | string, currency: Currency = 'UGX'): string {
  const n = typeof amount === 'string' ? parseFloat(amount) : amount;
  const decimals = currency === 'UGX' ? 0 : 2;
  const formatted = new Intl.NumberFormat('en-UG', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
  return `${currency}\u00A0${formatted}`; // non-breaking space
}
```

Tests MUST include:

· formatMoney(1500000) === 'UGX 1,500,000'
· formatMoney(1500000.5) === 'UGX 1,500,001' (rounds, no decimals)
· formatMoney(1234.56, 'USD') === 'USD 1,234.56'
· formatMoney(0) === 'UGX 0'

Rules:

· Server PDFs and client UI MUST use same formatMoney.
· Never use toLocaleString() directly in component code.
· Rounding: Math.round for UGX.
· Never use float for money.

6.4 VAT & Calculation

```typescript
// lib/vat.ts
export const VAT_RATE = 0.18;

export interface LineCalc { quantity: number; unitPrice: number; }

export function calculateDocument(
  lines: LineCalc[],
  vatEnabled: boolean
): { subtotal: number; vatAmount: number; total: number } {
  const subtotal = lines.reduce((sum, l) => sum + l.quantity * l.unitPrice, 0);
  const vatAmount = vatEnabled ? roundUGX(subtotal * VAT_RATE) : 0;
  return { subtotal: roundUGX(subtotal), vatAmount, total: subtotal + vatAmount };
}

const roundUGX = (n: number) => Math.round(n);
```

Rules:

· VAT computed on document subtotal, not per-line (avoids rounding drift).
· If vatEnabled = false, vatAmount MUST be 0 and PDF shows "VAT: Not applicable (Exempt/Export)".
· Exports (currency ≠ UGX OR incoterm present) default vatEnabled = false.
· Never hardcode 18. Use VAT_RATE.

6.5 Document Numbering (Atomic)

Format: PI-{YYYY}-{NNNN} — zero-padded to 4 digits, expands beyond 4 if needed.

```sql
-- Per business per year
CREATE SEQUENCE doc_number_seq_{businessId}_{year} START 1;
```

```typescript
export async function nextDocumentNumber(tx, businessId: string): Promise<string> {
  const year = new Date().getFullYear();
  const seqName = `doc_number_seq_${businessId.replace(/-/g, '_')}_${year}`;
  const result = await tx.execute(sql`SELECT nextval(${seqName}) AS n`);
  const n = result.rows[0].n;
  return `PI-${year}-${String(n).padStart(4, '0')}`;
}
```

Rules:

· Numbering happens on draft → first save, not at creation of empty draft.
· Never reuse numbers. On delete, log the gap; do not decrement.
· Uses advisory lock + sequence per business per year.

6.6 Status Pipeline

```
draft ──send──► sent ──view──► viewed ──accept──► accepted ──convert──► converted
  │              │              │                 │
  │              └──expire──────┴──expire─────────┴──expire──► expired
  │
  └──delete──► (soft delete; number preserved in ledger)
```

Transition Trigger Side effects
draft → sent User clicks "Send" Generate share token, log activity, schedule expiry reminder
sent → viewed Client opens share link Log viewedAt, fire webhook to owner
sent/viewed → accepted Client clicks "Accept" OR owner marks accepted Lock line items
accepted → converted User clicks "Convert to Fiscal" Generate EFRIS payload, assign fiscal number, remove watermark
Any → expired Cron at validUntil Auto-reject subsequent accepts; require re-quote
expired → draft User clicks "Renew" Clone doc with new number, new validity; keep old doc immutable

Implementation:

· Status transition function MUST be idempotent.
· Allowed transitions are a whitelist — reject any others with HTTP 409.
· Every transition writes to activityLog.

6.7 PDF Specification

Layout (A4, portrait, 1-page target)

```
┌─────────────────────────────────────────────────────────┐
│ [LOGO]                           PROFORMA INVOICE       │
│ Business Name                    Number: PI-2026-0001   │
│ TIN: 100XXXXXXXX                 Date: 2026-01-15       │
│ Plot 12, Kampala Road            Valid Until: 2026-02-15│
│ +256 7XX XXX XXX                 Currency: UGX          │
│ ───────────────────────────────────────────────────────  │
│ BILL TO                          SHIP TO (if diff.)     │
│ Client Name                      [same by default]      │
│ TIN: 100YYYYYYYY                                        │
│ ───────────────────────────────────────────────────────  │
│ #  │ Description      │ HS Code │ Qty │ Unit │ Line     │
│ 1  │ [item]           │ 8517.62 │ 10  │ pcs  │ 1,500,000│
│ ───────────────────────────────────────────────────────  │
│                                     Subtotal: UGX 1,500,000
│                                     VAT (18%): UGX 270,000
│                                     ─────────────────────
│                                     TOTAL:   UGX 1,770,000
│ ───────────────────────────────────────────────────────  │
│ PAYMENT DETAILS                                         │
│ MTN MoMo: *165*3*123456#    Airtel: *185*9*789012#      │
│ Bank: Stanbic | Branch: Kampala Rd | Acc: 903000XXXX    │
│ SWIFT: SBICUGKX                                          │
│ ───────────────────────────────────────────────────────  │
│ Incoterm: FOB (optional)                                │
│ Notes: [user notes]                                     │
│ ───────────────────────────────────────────────────────  │
│ ⚠ NON-FISCAL DISCLAIMER (see below)                    │
└─────────────────────────────────────────────────────────┘
```

Rendering rules

· Font: Inter or Helvetica (embedded)
· Table rows auto-paginate if > 12 items; page 2+ repeats header
· All amounts right-aligned
· Currency symbol in every money cell (no ambiguity)
· Watermark (DRAFT/NON-FISCAL): diagonal, 15% opacity, 60pt, repeated across page — but NEVER overlaps text illegibly

Mandatory disclaimer (verbatim, do not paraphrase)

PROFORMA INVOICE — NOT A TAX INVOICE. This document is a preliminary estimate prepared for the recipient and does not constitute a demand for payment, a tax invoice, or a fiscal receipt. It is not valid for VAT claims or URA reporting. All prices are valid until the stated date, after which a new proforma must be requested. Upon acceptance and payment, a valid fiscal invoice will be issued.

Conversion to fiscal (Phase 2)

On accepted → converted:

1. Watermark removed.
2. Header changes from "PROFORMA INVOICE" to "TAX INVOICE".
3. Disclaimer replaced with: "This is a fiscal invoice issued under URA EFRIS. Invoice No: [fiscal_invoice_number]. Verify at ura.go.ug."
4. EFRIS-style QR code + fiscal number rendered top-right.
5. Line items, client, TIN, HS codes — byte-for-byte identical to the proforma (retrieved via foreign-key relationship, not copied — single source of truth: document_lines).

6.8 EFRIS Integration (MVP: Simulated)

The MVP does NOT hit the live URA API. It generates a structurally correct EFRIS payload and stores it in documents.efrisPayload.

```typescript
export interface EfrisInvoice {
  invoiceNumber: string;      // "FISCAL-{businessTin}-{seq}"
  issueDate: string;          // ISO 8601
  sellerTin: string;
  sellerName: string;
  buyerTin: string | null;
  buyerName: string;
  currency: string;
  subtotal: number;
  vatAmount: number;
  total: number;
  lineItems: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
    vatRate: number;
    hsCode?: string;
  }>;
  signature: string;          // placeholder HMAC until real API
}
```

Preconditions for conversion (enforced server-side, fail fast):

· business.tin non-null
· business.address non-null
· document.status === 'accepted'
· At least 1 line item

6.9 WhatsApp Share

```typescript
export function buildWhatsAppMessage(doc, business, shareUrl: string): string {
  return [
    `Hello ${doc.clientName},`,
    ``,
    `Please find our proforma invoice *${doc.number}*.`,
    ``,
    `Total: *${formatMoney(doc.total, doc.currency)}*`,
    `Valid until: ${formatDate(doc.validUntil)}`,
    ``,
    `📄 View & accept: ${shareUrl}`,
    ``,
    `💳 Pay via MTN MoMo: ${business.momoMtnCode ?? 'N/A'}`,
    `💳 Pay via Airtel Money: ${business.momoAirtelCode ?? 'N/A'}`,
    ``,
    `${business.name} · ${business.phone}`,
  ].join('\n');
}

export function waLink(message: string, phone?: string): string {
  const base = 'https://wa.me/';
  const digits = phone?.replace(/\D/g, '') ?? '';
  return `${base}${digits}?text=${encodeURIComponent(message)}`;
}
```

Rules:

· shareUrl is a signed, expiring link (/p/{token}) valid for validUntil + 7 days.
· Share link page renders mobile-optimized HTML view + "Download PDF" + "Accept" + "Pay" buttons.
· Opening share link sets status = viewed (idempotent — only if currently sent).

6.10 API Surface

All endpoints under /api. All require auth unless marked public.

```
POST   /api/documents              create draft
GET    /api/documents              list (paginated, filterable by status)
GET    /api/documents/:id          get one
PATCH  /api/documents/:id          update draft only (409 if not draft)
POST   /api/documents/:id/send     draft → sent, returns shareUrl
POST   /api/documents/:id/accept   sent|viewed → accepted (owner action)
POST   /api/documents/:id/convert  accepted → converted, returns fiscal number
POST   /api/documents/:id/renew    expired → new draft (clone)
GET    /api/documents/:id/pdf      signed PDF URL (5 min TTL)
GET    /api/share/:token           PUBLIC — view proforma
POST   /api/share/:token/accept    PUBLIC — client accepts

POST   /api/clients                create
GET    /api/clients                list
POST   /api/items                  create
GET    /api/items                  list/search (for autocomplete)

GET    /api/me                     session info
```

Response envelope: { data: T } on success; { error: { code, message, details? } } on failure. HTTP status codes strict (200/201/400/401/403/404/409/422/500).

Validation: Zod schemas shared between client and server (packages/shared/schemas/ or lib/schemas/).

6.11 UI/UX Requirements

Layout language:

· Mobile-first. Ugandan SMEs often operate from phones.
· Every page ≤ 2 taps from "New Proforma" home CTA.
· Bottom nav on mobile: Home · Documents · Clients · Items · Settings.
· Desktop: 2-column form + live PDF preview (right pane).

Critical interactions:

· New Proforma button on home — always visible.
· Item line entry: type-ahead to saved items; "+ Add row" button; drag-to-reorder (desktop only).
· Currency toggle: persistent, top-right, remembers last choice per user.
· Valid Until: date picker defaults to +30 days; quick chips for +7/+14/+30/+60.
· Live total: recalculates as you type; shows UGX 1,500,000 · VAT 18% · Total UGX 1,770,000 in a sticky footer.

Microcopy (the Ugandan touch):

· Save button: "Save Draft" (never "Save").
· Send: "Send via WhatsApp" (primary) / "Email" / "Copy link."
· Convert: "Convert to Fiscal Invoice" with tooltip: "This will generate a URA-compliant tax invoice. Cannot be undone."
· Expiry banner (sticky): "This quote expires in 3 days. [Renew] [Extend +7 days]"

Empty states:

· First-run: "No proformas yet. Create your first one — it takes 60 seconds."
· No clients: "Add a client to save time on the next quote."
· No items: "Add your first product or service — you'll reuse it every time."

6.12 Security & Compliance

· Auth: httpOnly cookies, CSRF tokens on all mutations.
· Share tokens: UUIDv7 + HMAC signature; verified server-side; expires 7 days after validUntil.
· PDF URLs: signed with 5-minute TTL; not guessable.
· PII: client TINs are PII under Uganda's Data Protection and Privacy Act 2019 — encrypt at rest (pgcrypto) and exclude from logs.
· Rate limits: 20 req/min per user on mutations; 60 req/min on reads.
· Input validation: all Zod. Reject unknown fields (.strict()).
· File upload: logos ≤ 2MB, magic-byte validated (JPEG/PNG only), stored in Vercel Blob with random keys.
· Audit: every state transition logged immutably. Retention: 7 years (URA alignment).

6.13 Testing Requirements

```
/test
  /unit
    currency.test.ts        # 12+ cases covering formatMoney
    vat.test.ts             # edge cases: 0, 0.01 rounding, large numbers
    numbering.test.ts       # atomicity, year rollover, >9999 documents
    status.test.ts          # all transitions, invalid transitions rejected
  /integration
    documents.test.ts       # full lifecycle draft → converted
    share.test.ts           # token expiry, viewed tracking
    pdf.test.ts             # @react-pdf renders without error
  /e2e
    create-proforma.spec.ts # new user → PDF download < 90s
    convert.spec.ts         # accepted → fiscal invoice data integrity
    whatsapp.spec.ts        # message formatting exact match
```

Coverage targets: 90% on lib/, 75% overall. All MUST constraints have explicit tests.

---

PART 7 — PRINCIPLES (APPLIED, NOT LECTURED)

7.1 The 15 Principles That Pay Rent in the MVP

Every lesson gets 🧭 PRINCIPLES IN PLAY: [names] at the top. Named. Tied to real code. Not a lecture. By Day 90 you'll have seen each of these 30+ times in context.

Principle Where it bites in this build
SRP formatMoney lives in lib/currency.ts, not in 4 components. One reason to change.
DRY Zod schema shared client + server. One truth.
KISS UGX only in MVP. Supabase client, not Drizzle. No abstractions you don't need.
YAGNI No PWA, no Redis cache, no Inngest, no AI in product.
Fail Fast Zod rejects bad input before DB. RLS rejects cross-tenant reads before leak.
Single Source of Truth Line items live in document_lines only. Fiscal invoice reads them.
Idempotency Share link opens twice → viewed set once. Accept twice → no double state change.
Least Privilege RLS on every table. Service role key never on the client.
Encapsulation Auth logic in lib/auth.ts. Routes don't touch Supabase auth directly.
Convention over Configuration app/ folder = routes. page.tsx = page. You don't invent structure.
Make It Work → Make It Right → Make It Fast Ship 7 ships a working form. Ship 9 refactors. Ship 26 optimizes. Not before.
Boy Scout Rule Each ship leaves the codebase cleaner than the last. Buffers exist for this.
Explicit over Implicit TypeScript strict. .strict() on Zod. No any.
Chesterton's Fence Before deleting code, ask why it's there. Use buffer days.
Postel's Law Lenient input (trim, normalize phone), strict output (UGX\u00A01,500,000).

7.2 The Principles That Wait (Phase 3+ or Never)

Promoted only when you hit a real problem they solve. That's YAGNI applied to learning itself.

· SOLID full set (ISP, LSP, DIP) — you'll use them; we won't lecture.
· Hexagonal / Clean / Onion — over-engineering for a monolith MVP (Gall's Law).
· CQRS, Event Sourcing, DDD bounded contexts — Phase 3 at earliest.
· Circuit breaker, bulkhead, backpressure — when you have real traffic.
· Blue-green, canary, feature flags — Vercel preview deploys are enough.
· Full TDD ceremony — tests on money-critical paths only in MVP.
· Mutation testing, property-based testing, visual regression — cut.

7.3 Anti-Patterns (Never Do These)

· ❌ Use float for money
· ❌ Use toLocaleString() inline instead of formatMoney()
· ❌ Regenerate PDF on every view without considering cost
· ❌ Fetch live exchange rates on document read (snapshot at create)
· ❌ Allow editing after status = sent (require renew instead)
· ❌ Store PII (TIN) in logs, Sentry breadcrumbs, or analytics events
· ❌ Paraphrase the non-fiscal disclaimer — copy it verbatim from §6.7
· ❌ Skip activityLog writes on state transitions
· ❌ Use any in TypeScript
· ❌ Ship without running migrations in CI
· ❌ Hardcode 18 — use VAT_RATE
· ❌ Use Date.now() inside React renders (hydration mismatches)
· ❌ Add OPENAI_API_KEY to the project (product is AI-free)

---

PART 8 — SHIPPING PROTOCOL

8.1 Every Ship Day

1. Ship status check: Last ship live? URL posted? If no → fix it first. No new content.
2. Lesson delivered using the template (§4.5).
3. You build locally.
4. Deploy to Vercel.
5. Post URL + checkpoint answer.

8.2 When AI / Code Fails — Socratic Debug Protocol

You paste:

· The full error (exact text, not paraphrase)
· The code (the file, with line numbers)
· What you expected vs what happened

I ask:

1. What line broke?
2. What did you expect line X to do?
3. Why did it do Y instead?

We find the real bug together. No generic "check your syntax." No copy-paste fix without understanding. This is the "codes when AI fails" training.

8.3 When You're Blocked > 2 Days

I call it out. No new content until the block is named and resolved. The block is usually one of:

· Terminal / Node / install
· GitHub account / repo / push
· Vercel account / import / build
· Motivation / overwhelm

Shrink the task to the smallest possible next action. Name it. Do it. Then ship.

8.4 Definition of Done (per Ship)

A ship is done only if:

· ☑ Live Vercel URL posted
· ☑ Acceptance criteria from the ship task met
· ☑ No errors in browser console
· ☑ TypeScript strict clean (no any, no @ts-ignore)
· ☑ Lint clean
· ☑ Relevant tests pass (if code is money-critical: currency, VAT, numbering, status)
· ☑ PROGRESS.md updated

If any of these is false, the ship failed. Buffer day is for fixing.

---

PART 9 — PRE-FLIGHT & START

9.1 Pre-Flight Checklist (Complete by 2026-11-25)

One item per study break. 45 minutes total across 3 weeks. No tutorials. No Next.js reading. No coding. Exams first. Setup in the gaps.

☐ GitHub account + empty repo uganda-proforma-engine created
☐ Vercel account (sign up with GitHub login)
☐ Node.js LTS installed — run node -v, paste output somewhere you'll remember
☐ Supabase account created (no project yet)
☐ Stripe account in test mode
☐ Sentry account (free tier)
☐ MASTER_PROMPT.md saved in repo root, committed
☐ PROGRESS.md (see §10.1) saved in repo root, committed

If any item is missing on Nov 26, we don't start Day 1 — we spend that day on setup. Slipping once is planned. Slipping twice is a pattern.

9.2 Day 1 Launch (2026-11-26)

You message me:

"Day 1. Pre-flight done. Running create-next-app now."

Then we ship §4.2 Day 1 → Day 3 (Vercel URL).

9.3 Deadline Table (Frozen)

Milestone Date
Pre-flight complete 2026-11-25
Day 1 starts 2026-11-26
Ship 1 (Vercel URL) 2026-11-28
Ship 10 (MVP complete) 2026-12-25
Phase 2 complete 2027-01-24
Phase 3 launch (Ship 29) 2027-02-21
Ship 30 (5 paying users) 2027-02-23

---

PART 10 — TRACKING & RESUMPTION

10.1 PROGRESS.md Template (Save to Repo)

```md
# SHIPPER PROGRESS — Uganda Proforma Engine

## PLAN
Start: 2026-11-26 | Day: 0/72 | Ships: 0/30
Cadence: ship every 3rd day, buffer every 5th
Spec: MASTER_PROMPT.md v1.0.0 (scope cuts applied)
Stack: Next.js 16 · TS strict · Tailwind v4 · shadcn/ui · RHF+Zod ·
       Supabase (PG+Auth+RLS) · @react-pdf/renderer · Vercel · Stripe test · Sentry
MVP: user signs up → UGX proforma + VAT → compliant PDF → WhatsApp — under 90s
AI in product: NONE. Build tool only.

## CURRENT
Day: 0 (pre-flight)
Lesson: —
Checkpoint answered: —
Ship task: —
Ship URL: —
Blocker: —

## SHIPPED (date | URL | feature)
(none)

## ERRORS + FIXES (paste error, paste fix, date)
(none)

## NEXT LESSON
Day 1: Next.js 16 App Router skeleton
```

10.2 How to Resume in a New Chat

When a chat fills up:

1. Open a new chat.
2. Paste COURSE_BOOK.md (this file) + PROGRESS.md (yours).
3. Say: "Read COURSE_BOOK.md and PROGRESS.md. Continue from Day X. Last ship status: [live / blocked / not shipped]. Here is my current error / question: [paste]."

Nothing is lost. The book is the source of truth. Chat history is not.

10.3 Daily Update Rule

Update PROGRESS.md at the end of every ship day, and after every debug session. Two minutes. It's insurance.

---

PART 11 — WHAT YOU WILL HAVE ON DAY 90

11.1 The Product

A live, deployed SaaS at your Vercel URL. Ugandan business owners can sign up, create UGX proformas, download compliant PDFs, share via WhatsApp, convert to fiscal invoices, and pay you a monthly subscription.

· 100 signups
· 5 paying customers
· A real product with a real revenue stream
· A live portfolio piece no degree can fake

11.2 The Skill

· Read a stack trace and find the bug
· Know when AI is lying to you and why
· Design a schema that scales to your first 1,000 users
· Ship a feature end to end in 3 days without supervision
· Debug React, Next.js, Supabase, Stripe, PDF rendering, auth, cron, email — solo

11.3 The Foundation for What's Next

· Year 2: 3–4 more SaaS products. Read Designing Data-Intensive Applications and Release It!. Contribute to open source. Get code reviews from senior engineers.
· Year 3–5: Become a software engineer and a founder. The rarest combination.


PART 12 — THE BUILD (EXACT)

This section is pure building. No sales, no pricing, no customer talk. What gets built, in what order, in what files, with what logic.

---

12.1 Repository Structure (Final)

```
uganda-proforma-engine/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── clients/page.tsx
│   │   │   ├── clients/new/page.tsx
│   │   │   ├── clients/[id]/edit/page.tsx
│   │   │   ├── products/page.tsx
│   │   │   ├── products/new/page.tsx
│   │   │   ├── products/[id]/edit/page.tsx
│   │   │   ├── documents/page.tsx
│   │   │   ├── documents/new/page.tsx
│   │   │   ├── documents/[id]/page.tsx
│   │   │   ├── settings/page.tsx
│   │   │   └── layout.tsx
│   │   ├── p/[token]/page.tsx          ← public share view
│   │   ├── api/
│   │   │   ├── documents/route.ts
│   │   │   ├── documents/[id]/route.ts
│   │   │   ├── documents/[id]/pdf/route.ts
│   │   │   ├── documents/[id]/send/route.ts
│   │   │   └── share/[token]/route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx                    ← landing
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                         ← shadcn components
│   │   ├── nav.tsx
│   │   ├── document-form.tsx
│   │   ├── document-line-row.tsx
│   │   ├── pdf-preview.tsx
│   │   └── whatsapp-share-button.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts               ← browser client
│   │   │   ├── server.ts               ← server client
│   │   │   └── middleware.ts
│   │   ├── currency.ts                 ← formatMoney
│   │   ├── vat.ts                      ← calculateDocument
│   │   ├── numbering.ts                ← nextDocumentNumber
│   │   ├── share.ts                    ← buildWhatsAppMessage, waLink, signedToken
│   │   ├── pdf/
│   │   │   ├── document.tsx            ← react-pdf component
│   │   │   └── styles.ts
│   │   ├── schemas/                    ← Zod schemas (shared)
│   │   │   ├── client.ts
│   │   │   ├── product.ts
│   │   │   └── document.ts
│   │   └── auth.ts                     ← getCurrentUser, requireAuth
│   └── types/
│       └── supabase.ts                 ← generated types
├── supabase/
│   ├── migrations/
│   │   ├── 001_initial_schema.sql
│   │   └── 002_rls_policies.sql
│   └── seed.sql
├── middleware.ts                       ← auth redirect
├── .env.local
├── .env.example
└── package.json
```

---

12.2 Dependencies (Exact Versions)

```json
{
  "dependencies": {
    "next": "16.2.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "@react-pdf/renderer": "^4.0.0",
    "react-hook-form": "^7.53.0",
    "@hookform/resolvers": "^3.9.0",
    "zod": "^3.23.8",
    "tailwindcss": "^4.0.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.454.0",
    "date-fns": "^4.1.0"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "vitest": "^2.1.0",
    "@playwright/test": "^1.48.0",
    "eslint": "^9.0.0",
    "prettier": "^3.3.0"
  }
}
```

Install command:

```bash
npx create-next-app@latest uganda-proforma-engine \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd uganda-proforma-engine
npm install @supabase/supabase-js @supabase/ssr @react-pdf/renderer \
  react-hook-form @hookform/resolvers zod clsx tailwind-merge lucide-react date-fns
npm install -D vitest @playwright/test
```

---

12.3 Environment Variables (Exact)

.env.example (commit this):

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
SHARE_TOKEN_SECRET=
```

.env.local (never commit):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
NEXT_PUBLIC_APP_URL=http://localhost:3000
SHARE_TOKEN_SECRET=<openssl rand -hex 32>
```

Vercel: set the same five variables in Project Settings → Environment Variables. NEXT_PUBLIC_APP_URL = your production URL.

---

12.4 Database Schema (Exact SQL)

supabase/migrations/001_initial_schema.sql

```sql
-- Enums
create type currency_enum as enum ('UGX', 'USD', 'EUR', 'KES');
create type doc_status as enum ('draft', 'sent', 'viewed', 'accepted', 'converted', 'expired', 'rejected');
create type incoterm_enum as enum ('EXW', 'FOB', 'CIF', 'DAP', 'DDP', 'FCA');

-- Businesses (one per auth user)
create table businesses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
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
  created_at timestamptz default now() not null
);

-- Clients
create table clients (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade not null,
  name text not null,
  tin text,
  email text,
  phone text,
  address text,
  created_at timestamptz default now() not null
);

-- Products (the library)
create table products (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade not null,
  description text not null,
  unit_price numeric(15,2) not null check (unit_price >= 0),
  unit text,
  is_service boolean not null default false,
  created_at timestamptz default now() not null
);

-- Documents
create table documents (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade not null,
  client_id uuid references clients(id) not null,
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
  created_at timestamptz default now() not null
);

-- Document lines (single source of truth for line items)
create table document_lines (
  id uuid primary key default gen_random_uuid(),
  document_id uuid references documents(id) on delete cascade not null,
  product_id uuid references products(id),
  description text not null,
  quantity numeric(15,3) not null check (quantity > 0),
  unit_price numeric(15,2) not null check (unit_price >= 0),
  line_total numeric(15,2) not null,
  order integer not null
);

-- Activity log (append-only)
create table activity_log (
  id uuid primary key default gen_random_uuid(),
  document_id uuid references documents(id) not null,
  action text not null,
  metadata jsonb,
  created_at timestamptz default now() not null
);

-- Indexes
create index idx_clients_business on clients(business_id);
create index idx_products_business on products(business_id);
create index idx_documents_business on documents(business_id);
create index idx_documents_status on documents(business_id, status);
create index idx_document_lines_doc on document_lines(document_id);
create index idx_activity_doc on activity_log(document_id);
```

supabase/migrations/002_rls_policies.sql

```sql
-- Enable RLS on every table
alter table businesses enable row level security;
alter table clients enable row level security;
alter table products enable row level security;
alter table documents enable row level security;
alter table document_lines enable row level security;
alter table activity_log enable row level security;

-- Helper: does this user own this business?
create or replace function user_owns_business(bid uuid)
returns boolean language sql security definer stable as $$
  select exists (
    select 1 from businesses
    where id = bid and user_id = auth.uid()
  );
$$;

-- Businesses: user sees only their own
create policy "business_select" on businesses for select using (user_id = auth.uid());
create policy "business_insert" on businesses for insert with check (user_id = auth.uid());
create policy "business_update" on businesses for update using (user_id = auth.uid());

-- Clients
create policy "clients_all" on clients for all using (user_owns_business(business_id));
create policy "clients_insert" on clients for insert with check (user_owns_business(business_id));

-- Products
create policy "products_all" on products for all using (user_owns_business(business_id));
create policy "products_insert" on products for insert with check (user_owns_business(business_id));

-- Documents
create policy "documents_all" on documents for all using (user_owns_business(business_id));
create policy "documents_insert" on documents for insert with check (user_owns_business(business_id));

-- Document lines: via parent document
create policy "lines_all" on document_lines for all using (
  exists (select 1 from documents d where d.id = document_id and user_owns_business(d.business_id))
);

-- Activity log
create policy "activity_all" on activity_log for all using (
  exists (select 1 from documents d where d.id = document_id and user_owns_business(d.business_id))
);
```

---

12.5 Core Library Files (Exact Code)

src/lib/supabase/client.ts

```typescript
import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

src/lib/supabase/server.ts

```typescript
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );
}
```

src/lib/currency.ts

```typescript
export type Currency = 'UGX' | 'USD' | 'EUR' | 'KES';

export function formatMoney(
  amount: number | string,
  currency: Currency = 'UGX'
): string {
  const n = typeof amount === 'string' ? parseFloat(amount) : amount;
  const decimals = currency === 'UGX' ? 0 : 2;
  const formatted = new Intl.NumberFormat('en-UG', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
  return `${currency}\u00A0${formatted}`;
}
```

src/lib/vat.ts

```typescript
export const VAT_RATE = 0.18;

export interface LineCalc {
  quantity: number;
  unitPrice: number;
}

export function calculateDocument(lines: LineCalc[], vatEnabled: boolean) {
  const subtotal = lines.reduce((sum, l) => sum + l.quantity * l.unitPrice, 0);
  const roundedSubtotal = Math.round(subtotal);
  const vatAmount = vatEnabled ? Math.round(subtotal * VAT_RATE) : 0;
  return {
    subtotal: roundedSubtotal,
    vatAmount,
    total: roundedSubtotal + vatAmount,
  };
}
```

src/lib/numbering.ts

```typescript
import type { SupabaseClient } from '@supabase/supabase-js';

export async function nextDocumentNumber(
  supabase: SupabaseClient,
  businessId: string
): Promise<string> {
  const year = new Date().getFullYear();
  const { data, error } = await supabase.rpc('next_document_number', {
    p_business_id: businessId,
    p_year: year,
  });
  if (error) throw error;
  return data as string;
}
```

Corresponding SQL function (add to 001_initial_schema.sql):

```sql
create or replace function next_document_number(p_business_id uuid, p_year int)
returns text language plpgsql as $$
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
```

src/lib/share.ts

```typescript
import crypto from 'crypto';
import { formatMoney, type Currency } from './currency';

const SECRET = process.env.SHARE_TOKEN_SECRET!;

export function signShareToken(documentId: string): string {
  const payload = `${documentId}.${Date.now()}`;
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex').slice(0, 16);
  return Buffer.from(`${payload}.${sig}`).toString('base64url');
}

export function verifyShareToken(token: string): { documentId: string; issuedAt: number } | null {
  try {
    const decoded = Buffer.from(token, 'base64url').toString();
    const [documentId, issuedAt, sig] = decoded.split('.');
    const expected = crypto.createHmac('sha256', SECRET)
      .update(`${documentId}.${issuedAt}`)
      .digest('hex').slice(0, 16);
    if (sig !== expected) return null;
    return { documentId, issuedAt: parseInt(issuedAt) };
  } catch {
    return null;
  }
}

export function buildWhatsAppMessage(
  doc: { number: string; total: number; currency: Currency; validUntil: string; clientName: string },
  business: { name: string; phone: string; momoMtnCode?: string | null; momoAirtelCode?: string | null },
  shareUrl: string
): string {
  return [
    `Hello ${doc.clientName},`,
    ``,
    `Please find our proforma invoice *${doc.number}*.`,
    ``,
    `Total: *${formatMoney(doc.total, doc.currency)}*`,
    `Valid until: ${new Date(doc.validUntil).toLocaleDateString('en-GB')}`,
    ``,
    `📄 View & accept: ${shareUrl}`,
    ``,
    `💳 Pay via MTN MoMo: ${business.momoMtnCode ?? 'N/A'}`,
    `💳 Pay via Airtel Money: ${business.momoAirtelCode ?? 'N/A'}`,
    ``,
    `${business.name} · ${business.phone}`,
  ].join('\n');
}

export function waLink(message: string, phone?: string): string {
  const digits = phone?.replace(/\D/g, '') ?? '';
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
```

---

12.6 Zod Schemas (Exact)

src/lib/schemas/client.ts

```typescript
import { z } from 'zod';

export const clientSchema = z.object({
  name: z.string().min(1, 'Name required').max(200),
  tin: z.string().max(20).optional().nullable(),
  email: z.string().email().optional().nullable().or(z.literal('')),
  phone: z.string().max(30).optional().nullable(),
  address: z.string().max(500).optional().nullable(),
}).strict();

export type ClientInput = z.infer<typeof clientSchema>;
```

src/lib/schemas/product.ts

```typescript
import { z } from 'zod';

export const productSchema = z.object({
  description: z.string().min(1).max(300),
  unitPrice: z.coerce.number().min(0),
  unit: z.string().max(20).optional().nullable(),
  isService: z.boolean().default(false),
}).strict();

export type ProductInput = z.infer<typeof productSchema>;
```

src/lib/schemas/document.ts

```typescript
import { z } from 'zod';

export const documentLineSchema = z.object({
  productId: z.string().uuid().nullable().optional(),
  description: z.string().min(1).max(300),
  quantity: z.coerce.number().positive(),
  unitPrice: z.coerce.number().min(0),
});

export const documentSchema = z.object({
  clientId: z.string().uuid(),
  currency: z.enum(['UGX', 'USD', 'EUR', 'KES']),
  vatEnabled: z.boolean(),
  validUntil: z.string(),
  notes: z.string().max(1000).optional().nullable(),
  lines: z.array(documentLineSchema).min(1, 'At least one line required'),
}).strict();

export type DocumentInput = z.infer<typeof documentSchema>;
```

---

12.7 PDF Component (Exact)

src/lib/pdf/document.tsx

```tsx
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { formatMoney, type Currency } from '@/lib/currency';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 9, fontFamily: 'Helvetica' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold' },
  section: { marginBottom: 12 },
  label: { fontSize: 8, color: '#666' },
  table: { marginTop: 10 },
  row: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#ccc', paddingVertical: 6 },
  cell: { flex: 1 },
  cellRight: { flex: 1, textAlign: 'right' },
  totalRow: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 4 },
  totalLabel: { width: 100, textAlign: 'right', paddingRight: 10 },
  totalValue: { width: 100, textAlign: 'right', fontWeight: 'bold' },
  disclaimer: { marginTop: 20, fontSize: 7, color: '#444', borderTopWidth: 1, borderTopColor: '#999', paddingTop: 8 },
  watermark: { position: 'absolute', top: '45%', left: '15%', fontSize: 60, color: '#eee', transform: 'rotate(-30deg)' },
});

export interface PdfDocumentProps {
  document: {
    number: string;
    currency: Currency;
    subtotal: number;
    vatAmount: number;
    total: number;
    vatEnabled: boolean;
    validUntil: string;
    notes?: string | null;
    createdAt: string;
  };
  business: {
    name: string; tin?: string | null; address: string; phone: string;
    momoMtnCode?: string | null; momoAirtelCode?: string | null;
    bankName?: string | null; bankAccount?: string | null;
  };
  client: { name: string; tin?: string | null; address?: string | null };
  lines: Array<{ description: string; quantity: number; unitPrice: number; lineTotal: number }>;
}

export function PdfDocument({ document, business, client, lines }: PdfDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.watermark} fixed>NON-FISCAL</Text>

        <View style={styles.header}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{business.name}</Text>
            {business.tin && <Text style={styles.label}>TIN: {business.tin}</Text>}
            <Text style={styles.label}>{business.address}</Text>
            <Text style={styles.label}>{business.phone}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.title}>PROFORMA INVOICE</Text>
            <Text style={styles.label}>Number: {document.number}</Text>
            <Text style={styles.label}>Date: {new Date(document.createdAt).toLocaleDateString('en-GB')}</Text>
            <Text style={styles.label}>Valid Until: {new Date(document.validUntil).toLocaleDateString('en-GB')}</Text>
            <Text style={styles.label}>Currency: {document.currency}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>BILL TO</Text>
          <Text>{client.name}</Text>
          {client.tin && <Text style={styles.label}>TIN: {client.tin}</Text>}
          {client.address && <Text style={styles.label}>{client.address}</Text>}
        </View>

        <View style={styles.table}>
          <View style={[styles.row, { borderBottomWidth: 1, borderBottomColor: '#333' }]}>
            <Text style={styles.cell}>Description</Text>
            <Text style={[styles.cellRight, { flex: 0.5 }]}>Qty</Text>
            <Text style={[styles.cellRight, { flex: 0.7 }]}>Unit Price</Text>
            <Text style={[styles.cellRight, { flex: 0.8 }]}>Total</Text>
          </View>
          {lines.map((line, i) => (
            <View key={i} style={styles.row}>
              <Text style={styles.cell}>{line.description}</Text>
              <Text style={[styles.cellRight, { flex: 0.5 }]}>{line.quantity}</Text>
              <Text style={[styles.cellRight, { flex: 0.7 }]}>{formatMoney(line.unitPrice, document.currency)}</Text>
              <Text style={[styles.cellRight, { flex: 0.8 }]}>{formatMoney(line.lineTotal, document.currency)}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal:</Text>
            <Text style={styles.totalValue}>{formatMoney(document.subtotal, document.currency)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>VAT (18%):</Text>
            <Text style={styles.totalValue}>
              {document.vatEnabled ? formatMoney(document.vatAmount, document.currency) : 'N/A'}
            </Text>
          </View>
          <View style={[styles.totalRow, { marginTop: 6, borderTopWidth: 1, paddingTop: 6 }]}>
            <Text style={styles.totalLabel}>TOTAL:</Text>
            <Text style={styles.totalValue}>{formatMoney(document.total, document.currency)}</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>PAYMENT DETAILS</Text>
          {business.momoMtnCode && <Text>MTN MoMo: {business.momoMtnCode}</Text>}
          {business.momoAirtelCode && <Text>Airtel Money: {business.momoAirtelCode}</Text>}
          {business.bankName && <Text>Bank: {business.bankName} · {business.bankAccount}</Text>}
        </View>

        {document.notes && (
          <View style={{ marginTop: 12 }}>
            <Text style={styles.label}>NOTES</Text>
            <Text>{document.notes}</Text>
          </View>
        )}

        <View style={styles.disclaimer}>
          <Text>
            PROFORMA INVOICE — NOT A TAX INVOICE. This document is a preliminary estimate prepared for the recipient and does not constitute a demand for payment, a tax invoice, or a fiscal receipt. It is not valid for VAT claims or URA reporting. All prices are valid until the stated date, after which a new proforma must be requested. Upon acceptance and payment, a valid fiscal invoice will be issued.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
```

---

12.8 PDF Route Handler (Exact)

src/app/api/documents/[id]/pdf/route.ts

```typescript
import { renderToBuffer } from '@react-pdf/renderer';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { PdfDocument } from '@/lib/pdf/document';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: doc, error } = await supabase
    .from('documents')
    .select(`
      *,
      clients (name, tin, address),
      businesses (name, tin, address, phone, momo_mtn_code, momo_airtel_code, bank_name, bank_account),
      document_lines (description, quantity, unit_price, line_total)
    `)
    .eq('id', id)
    .single();

  if (error || !doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const buffer = await renderToBuffer(
    PdfDocument({
      document: {
        number: doc.number,
        currency: doc.currency,
        subtotal: Number(doc.subtotal),
        vatAmount: Number(doc.vat_amount),
        total: Number(doc.total),
        vatEnabled: doc.vat_enabled,
        validUntil: doc.valid_until,
        notes: doc.notes,
        createdAt: doc.created_at,
      },
      business: {
        name: doc.businesses.name,
        tin: doc.businesses.tin,
        address: doc.businesses.address,
        phone: doc.businesses.phone,
        momoMtnCode: doc.businesses.momo_mtn_code,
        momoAirtelCode: doc.businesses.momo_airtel_code,
        bankName: doc.businesses.bank_name,
        bankAccount: doc.businesses.bank_account,
      },
      client: {
        name: doc.clients.name,
        tin: doc.clients.tin,
        address: doc.clients.address,
      },
      lines: doc.document_lines.map((l: any) => ({
        description: l.description,
        quantity: Number(l.quantity),
        unitPrice: Number(l.unit_price),
        lineTotal: Number(l.line_total),
      })),
    })
  );

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${doc.number}.pdf"`,
    },
  });
}
```

---

12.9 Middleware (Auth Guard)

middleware.ts (repo root)

```typescript
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  const protectedPaths = ['/dashboard', '/clients', '/products', '/documents', '/settings'];
  const isProtected = protectedPaths.some((p) => request.nextUrl.pathname.startsWith(p));

  if (isProtected && !user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|p/).*)'],
};
```

---

12.10 Ship-by-Ship Build Order (Exact)

SHIP 1 — Landing Page + Deploy (Day 3)

Files touched: src/app/page.tsx, src/app/layout.tsx, src/app/globals.css, tailwind.config.ts
Acceptance: Vercel URL loads, heading "My SaaS is Alive" visible, no console errors.
Test: Open URL on phone and desktop.

SHIP 2 — Database + RLS (Day 6)

Files touched: supabase/migrations/001_initial_schema.sql, 002_rls_policies.sql, src/types/supabase.ts (generated)
Commands:

```bash
npx supabase login
npx supabase link --project-ref <your-project-ref>
npx supabase db push
npx supabase gen types typescript --linked > src/types/supabase.ts
```

Acceptance: 6 tables exist in Supabase. RLS enabled on all. select * from businesses; from anon client returns 0 rows (no user).

SHIP 3 — Auth (Day 9)

Files touched: src/app/(auth)/login/page.tsx, src/app/(auth)/signup/page.tsx, middleware.ts, src/lib/supabase/client.ts, src/lib/supabase/server.ts
Acceptance: Sign up with email → confirm → login → land on /dashboard. Logout works. /dashboard redirects to /login when logged out.
Manual test: Create user. Confirm email. Login. Logout. Try /dashboard URL directly → redirect.

SHIP 4 — Business Profile (Day 12)

Files touched: src/app/(dashboard)/settings/page.tsx, src/app/api/business/route.ts (or Server Action), src/lib/schemas/business.ts
Logic:

· On signup, auto-create a businesses row with user_id = auth.uid() and placeholder name. (Do this in a trigger, not in app code — safer.)
· Settings page: form for name, TIN, address, phone, email, momo_mtn_code, momo_airtel_code, bank fields.
· Save via Server Action. Validate with Zod. Upsert.
  Acceptance: Fill settings → save → reload → data persists. RLS blocks other users.

SHIP 5 — Clients CRUD (Day 15)

Files touched: src/app/(dashboard)/clients/*, src/lib/schemas/client.ts, Server Actions in src/app/(dashboard)/clients/actions.ts
Logic:

· listClients() — select * from clients where business_id = ?
· createClient(input) — Zod validate → insert → revalidatePath
· updateClient(id, input) — Zod validate → update → revalidate
· deleteClient(id) — delete → revalidate
  Acceptance: Create 3 clients. Edit one. Delete one. Only your own clients visible.

SHIP 6 — Products CRUD (Day 18)

Files touched: src/app/(dashboard)/products/*, src/lib/schemas/product.ts, src/app/(dashboard)/products/actions.ts
Same pattern as Ship 5, different table.
Acceptance: Create 5 products with different units. Edit one. List shows UGX-formatted prices.

SHIP 7 — Proforma Form (Day 21)

Files touched: src/app/(dashboard)/documents/new/page.tsx, src/components/document-form.tsx, src/components/document-line-row.tsx, src/app/api/documents/route.ts, src/lib/schemas/document.ts, src/lib/numbering.ts, src/lib/vat.ts
Logic:

1. Load clients + products (Server Component).
2. Client Component form with react-hook-form + documentSchema.
3. Line rows: product picker (dropdown search) OR custom line. Qty + unit price editable. lineTotal = qty × unitPrice.
4. Live total: calculateDocument(lines, vatEnabled) renders subtotal, VAT, total using formatMoney.
5. Submit: POST /api/documents → server validates → calls nextDocumentNumber() → insert documents row → insert document_lines rows in transaction → return { id, number }.
6. Redirect to /documents/[id].
   Acceptance: Create a document with 3 lines and VAT on. Total = subtotal × 1.18 rounded. Number = PI-2026-0001. Second doc = PI-2026-0002.

Document creation API (exact):

```typescript
// src/app/api/documents/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { documentSchema } from '@/lib/schemas/document';
import { calculateDocument } from '@/lib/vat';
import { nextDocumentNumber } from '@/lib/numbering';

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const parsed = documentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const input = parsed.data;

  const { data: business } = await supabase
    .from('businesses')
    .select('id')
    .eq('user_id', user.id)
    .single();
  if (!business) return NextResponse.json({ error: 'No business' }, { status: 400 });

  const totals = calculateDocument(
    input.lines.map((l) => ({ quantity: l.quantity, unitPrice: l.unitPrice })),
    input.vatEnabled
  );

  const number = await nextDocumentNumber(supabase, business.id);

  const { data: doc, error: docErr } = await supabase
    .from('documents')
    .insert({
      business_id: business.id,
      client_id: input.clientId,
      number,
      currency: input.currency,
      exchange_rate: 1,
      subtotal: totals.subtotal,
      vat_amount: totals.vatAmount,
      total: totals.total,
      vat_enabled: input.vatEnabled,
      valid_until: input.validUntil,
      notes: input.notes,
    })
    .select()
    .single();
  if (docErr) return NextResponse.json({ error: docErr.message }, { status: 500 });

  const lines = input.lines.map((l, i) => ({
    document_id: doc.id,
    product_id: l.productId ?? null,
    description: l.description,
    quantity: l.quantity,
    unit_price: l.unitPrice,
    line_total: Math.round(l.quantity * l.unitPrice),
    order: i,
  }));

  const { error: linesErr } = await supabase.from('document_lines').insert(lines);
  if (linesErr) {
    await supabase.from('documents').delete().eq('id', doc.id);
    return NextResponse.json({ error: linesErr.message }, { status: 500 });
  }

  return NextResponse.json({ data: { id: doc.id, number: doc.number } }, { status: 201 });
}
```

SHIP 8 — PDF (Day 24)

Files touched: src/lib/pdf/document.tsx, src/lib/pdf/styles.ts, src/app/api/documents/[id]/pdf/route.ts, src/app/(dashboard)/documents/[id]/page.tsx (add Download button)
Acceptance: Click "Download PDF" → file opens. Header shows business + number + date + valid until. Table lists lines with UGX. Totals correct. Disclaimer verbatim at bottom. Watermark "NON-FISCAL" diagonal.

Manual verification checklist:

☐ UGX 1,500,000 not UGX 1500000 (comma separators)
☐ Non-breaking space after UGX
☐ VAT shows UGX 270,000 when enabled, N/A when disabled
☐ Total = subtotal + VAT exactly
☐ Disclaimer word-for-word matches §6.7
☐ MoMo codes appear if set in business profile

SHIP 9 — WhatsApp Share (Day 27)

Files touched: src/lib/share.ts, src/app/api/documents/[id]/send/route.ts, src/components/whatsapp-share-button.tsx, src/app/p/[token]/page.tsx, src/app/api/share/[token]/route.ts
Logic:

1. Click "Send via WhatsApp" → POST /api/documents/[id]/send → server signs share token → sets share_token + status = 'sent' → returns { shareUrl, waUrl }.
2. Client opens waUrl in new tab.
3. Share link /p/[token] = public page showing proforma HTML + Download PDF + Accept button.
4. On /p/[token] load: POST /api/share/[token] → verify token → if status is sent, set viewed_at = now(), status = 'viewed'.
   Acceptance: Click send → WhatsApp opens with exact message (number, total, valid until, share URL, MoMo codes). Opening share link in another browser sets status to viewed.

SHIP 10 — Polish + 10 Users (Day 30)

Files touched: anywhere needed. UX pass, error boundaries, loading states.
Acceptance: 10 real users each generated 1 proforma. No console errors. Works on mobile.

---

12.11 Local Testing (Exact)

src/lib/currency.test.ts

```typescript
import { describe, it, expect } from 'vitest';
import { formatMoney } from './currency';

describe('formatMoney', () => {
  it('formats UGX without decimals', () => {
    expect(formatMoney(1500000)).toBe('UGX\u00A01,500,000');
  });
  it('rounds UGX to whole shillings', () => {
    expect(formatMoney(1500000.5)).toBe('UGX\u00A01,500,001');
  });
  it('formats USD with 2 decimals', () => {
    expect(formatMoney(1234.56, 'USD')).toBe('USD\u00A01,234.56');
  });
  it('handles zero', () => {
    expect(formatMoney(0)).toBe('UGX\u00A00');
  });
  it('handles string input', () => {
    expect(formatMoney('1770000.49')).toBe('UGX\u00A01,770,000');
  });
});
```

src/lib/vat.test.ts

```typescript
import { describe, it, expect } from 'vitest';
import { calculateDocument, VAT_RATE } from './vat';

describe('calculateDocument', () => {
  it('computes VAT on subtotal', () => {
    const r = calculateDocument([{ quantity: 10, unitPrice: 150000 }], true);
    expect(r.subtotal).toBe(1500000);
    expect(r.vatAmount).toBe(270000);
    expect(r.total).toBe(1770000);
  });
  it('returns zero VAT when disabled', () => {
    const r = calculateDocument([{ quantity: 1, unitPrice: 100 }], false);
    expect(r.vatAmount).toBe(0);
    expect(r.total).toBe(100);
  });
  it('rounds to whole shillings', () => {
    const r = calculateDocument([{ quantity: 1, unitPrice: 99.4 }], true);
    expect(Number.isInteger(r.subtotal)).toBe(true);
    expect(Number.isInteger(r.vatAmount)).toBe(true);
    expect(Number.isInteger(r.total)).toBe(true);
  });
});
```

Run: npx vitest run

---

12.12 Deploy Checklist (Every Ship)

1. git add . && git commit -m "Ship N: <feature>"
2. git push origin main
3. Vercel auto-deploys. Wait ~90s.
4. Open production URL. Test the acceptance criteria.
5. If any acceptance criterion fails → fix → push again → re-test.
6. Update PROGRESS.md: Ship N done, URL posted, timestamp.
7. Tick the box in the scoreboard.

Never mark a ship done if the acceptance test fails on production. Buffer day exists for that.

---

Question: Of the code above — schema, RLS, currency, VAT, PDF component, API, middleware — which file are you writing first on Nov 26, and do you want me to pre-write any of them so Day 1 is paste-and-deploy instead of design-and-build?


11.4 The Honest Caveat

Day 90 does not make you a software engineer. It makes you a founder who ships. That's the promise. The software engineering title is a 3–5 year journey after Day 90, if you choose it.

---

APPENDIX A — Error Log Template (Copy for Each Debug)

```
DATE: YYYY-MM-DD
SHIP: [Ship number]
ERROR (exact):
```

[paste full error text]

```

CODE (file + line):
```

[paste the file, with the broken line marked]

```

EXPECTED: [what you thought would happen]
ACTUAL: [what did happen]
LINE X SUSPECTED: [line number]
FIX ATTEMPTED: [what you tried]
RESOLUTION: [what actually fixed it — after debug]
TIME TO FIX: [minutes]
LESSON: [what you'll remember next time]
```

APPENDIX B — Checkpoint Answers (for self-review)

Each lesson ends with a checkpoint. Answer it in writing before the next lesson. If you can't answer it, you didn't internalize the lesson. Common checkpoints you'll see:

· Why can't you use useState in page.tsx without 'use client'?
  → Because useState needs client-side React runtime. Server Components run on the server, never send JS to the browser. Without 'use client', Next.js treats the file as a Server Component and useState isn't available. The error is explicit: "You're importing a component that needs useState. It only works in a Client Component." Fix: add 'use client' at the top — but only if that component needs interactivity. Overusing it kills performance.
· Why can't you expose SUPABASE_SERVICE_ROLE_KEY in a client component?
  → Any env var prefixed NEXT_PUBLIC_ gets bundled into the client JS. The service role key bypasses all RLS — anyone with it can read/write/delete all data. Only the anon key belongs on the client, and even then it's gated by RLS. Server-only keys live in server code.
· Why must formatMoney be a shared function instead of toLocaleString() in each component?
  → One source of truth. Server PDFs and client UI must show identical formatting. If PDF shows UGX 1,500,000 and UI shows UGX 1,500,000.00, users lose trust. One function, one format, one place to fix bugs.
· Why must the fiscal invoice read from document_lines instead of copying them?
  → Single source of truth. If you copy, later edits or a bug fix to the proforma lines won't propagate. The fiscal invoice becomes a snapshot that can diverge from the source. FK relationships force you to always read the canonical rows. Zero data loss on conversion.
· Why must exchange rate be snapshotted at creation, not looked up on read?
  → The customer agreed to a price at a moment in time. If you re-fetch the rate on view, the total changes without consent. A proforma is a legal-ish document; it must be frozen. Snapshot at creation, never re-fetch.

---

APPENDIX C — The 30-Ship Master Checklist

# Ship Day Live URL posted?
1 Landing + Vercel 3 ☐
2 Schema + RLS 6 ☐
3 Auth 9 ☐
4 Business profile 12 ☐
5 Clients CRUD 15 ☐
6 Products CRUD 18 ☐
7 Proforma form 21 ☐
8 PDF 24 ☐
9 WhatsApp share 27 ☐
10 Polish + 10 users 30 ☐
11 Status pipeline 33 ☐
12 Public accept 36 ☐
13 Doc list + detail 39 ☐
14 Free-tier + paywall 42 ☐
15 Stripe Checkout 45 ☐
16 Webhook + gating 48 ☐
17 EFRIS convert 51 ☐
18 Fiscal PDF 54 ☐
19 Expiry + renew 57 ☐
20 Phase 2 hardening 60 ☐
21 Onboarding 63 ☐
22 Emails 66 ☐
23 SEO + OG 69 ☐
24 Performance + Sentry 72 ☐
25 Landing polish 75 ☐
26 Pricing + ToS 78 ☐
27 Support widget 81 ☐
28 Launch assets 84 ☐
29 Launch day 87 ☐
30 5 paying users + retro 90 ☐

---

📌 THE LAST WORD

This book is the plan. It is frozen. It survives chat limits.

The only thing that isn't in this book is the one thing that matters: your npx create-next-app on 2026-11-26.

Four months of planning has produced zero deployed URLs. The difference between this time and every previous attempt is a hard stop (exams) and a hard start (Nov 26). Use it.

Pre-flight. Exams. Nov 26. Ship 1 by Nov 28.

If you ever paste this book into a new chat and it's Day 45, that means you shipped. If it's still Day 0, that means you didn't. The book cannot tell the difference between you and someone who didn't read it. Only the URL can.

---

END OF COURSE BOOK v1.0

Save as COURSE_BOOK.md alongside MASTER_PROMPT.md and PROGRESS.md. Commit all three. Never lose the plan again.