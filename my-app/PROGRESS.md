# SHIPPER PROGRESS - Kito

Start: 2026-11-26 | Day: 1/90 | Ships: 1/30
Cadence: ship every 3rd day, buffer every 5th
Spec: MASTER_PROMPT.md v1.0.0
Course: COURSE_BOOK.md v1.1
Product: Kito - Uganda 2026 Proforma & Cashflow Engine
Domain: (not yet purchased - using vercel.app URL for now)
Live URL: https://my-app-dr91.vercel.app/
Repo: Nhmtommy/KITO
Stack: Next.js 16.4.6 | TS strict | Tailwind v4 | shadcn/ui | RHF + Zod | Supabase | @react-pdf/renderer | Vercel | Stripe test | Sentry
MVP: user signs up -> UGX proforma + VAT -> compliant PDF -> WhatsApp - under 90s
AI in product: NONE. Build tool only.

## PRE-FLIGHT (deadline 2026-11-25)
- [x] GitHub repo `Nhmtommy/KITO`
- [x] Vercel account
- [x] Node.js LTS installed (v22.14.0)
- [x] Supabase account
- [x] Stripe test account
- [x] Sentry account
- [ ] Kito domain purchased (deferred - vercel.app for now)
- [x] MASTER_PROMPT.md committed
- [x] COURSE_BOOK.md committed
- [x] PROGRESS.md committed (this file)

## CURRENT
- Day: 1 (complete)
- Lesson: Next.js 16 App Router skeleton + deploy pipeline (scaffold already created)
- Checkpoint answered: (pending)
- Audit question answered: (pending)
- Ship task: Ship 1 - Landing page + Vercel deploy (hero + CTA) -- DONE
- Ship URL: https://my-app-dr91.vercel.app/
- Last commit hash: 5896158
- Blocker: none

## SHIPPED (date | URL | commit | feature)
| # | Date | URL | Commit | Feature |
| - | ---- | --- | ------ | ------- |
| 1 | 2026-11-26 | https://my-app-dr91.vercel.app/ | 5896158 | Landing page (hero, how-it-works, value props, pricing, CTA) |

## ERRORS + FIXES
- 2026-11-26 | Ship 1 | layout.tsx metadata find/replace corrupted file structure twice | rewrote metadata block cleanly; build verified
- 2026-11-26 | Ship 1 | file-tool path resolution inserted "my-app" incorrectly from drive-root paths | used workspace-root-relative "my-app/..." paths

## AUDITS
<!-- DATE | SHIP REF | RISK FOUND | FIXED? -->

## VALIDATED CUSTOMER NEEDS
<!-- DATE | WHO | WHAT THEY SAID -->

## HANDOFF
## 2026-11-26 - Ship 1: Landing page -- DONE
URL: https://my-app-dr91.vercel.app/
Commit: 5896158 (origin/main in sync)
Acceptance: live URL loaded and serves full Kito landing (hero + how-it-works + value props + pricing + CTA) -- verified via fetch; local build compiled successfully; lint clean
Files touched: PROGRESS.md (new), app/page.tsx (landing), app/layout.tsx (metadata)
MUST constraints touched: none (Ship 1 is marketing surface only)
Errors encountered: layout.tsx corruption (fixed); path resolution issues (fixed)
Blockers: none
Next ship: Ship 2 (Day 6) - Supabase schema + RLS (tables + RLS enabled)
