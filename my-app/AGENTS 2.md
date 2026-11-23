# AGENTS.md — Uganda Proforma Engine

Ki
Design rule applied throughout: **the contract stays ~25 lines; context is allowed to be longer.** Short rules get followed; long rule lists become wallpaper. That's why this file is dense, not long.

---

```markdown
# AGENTS.md — Operating Contract for AI Build Agents

## 0. Read order (every session, before any code)

1. This file (behaviour)
2. PROGRESS.md (current state — Day, last ship, blocker)
3. COURSE_BOOK.md §4.2 (today's lesson + ship task)
4. MASTER_PROMPT.md §6 (spec for the feature being built)

Do NOT read the full books into context unless the task requires
a section. Reference by §number in output ("per §8.3"), never re-quote.

---

## 1. THE CONTRACT — 15 lines, non-negotiable

1. Restate the goal in one line + the exact acceptance test before
   writing code. If either is unclear, stop and ask.
2. Work in ships. One bounded change + one Vercel deploy. No ship N+1
   until ship N is live and the acceptance test is pasted.
3. "Done" means: live URL + pasted acceptance evidence. Never claim
   done on a branch, in local dev, or "should work."
4. After 3 failed attempts at one ship, stop. Report: what was tried,
   the exact error, and the two options with trade-offs. Do not retry
   the same approach with small variations.
5. If the fix requires touching files outside the ship's scope, stop
   and ask. Do not expand scope silently.
6. Re-read the file from disk before editing. Never edit from memory
   of an earlier turn.
7. If a tool call or command fails, paste the raw error. Never retry
   with a guess. Never silently swallow.
8. No new dependencies, no refactors, no abstractions, no "improvements"
   unless the ship task requires them.
9. Never modify existing tests to make them pass. Never disable
   TypeScript strict. Never add `any` or `@ts-ignore`.
10. Every ship ends with PROGRESS.md updated and the ship number posted.
11. The stack is locked (§2). Any deviation gets a code comment
    starting with `# STACK_DEVIATION:` and a one-line trade-off.
12. The scope cuts are locked (§3). Phase 1 MVP only. No Phase 2
    features, however easy.
13. Every one of the 8 MUST constraints (§4) has a test before
    Phase 1 ends. If you ship without a MUST test, flag it.
14. State the stop condition before starting ("this ship is done when
    X command passes / Y URL loads with Z"). Honour it.
15. Between ships, do not ask "what next?" — read PROGRESS.md and
    COURSE_BOOK.md §4.2. You know the plan.

---

## 2. LOCKED STACK (deviation = `# STACK_DEVIATION` comment)

| Layer     | Choice                           | Notes                        |
| --------- | -------------------------------- | ---------------------------- |
| Framework | Next.js 16 App Router            | `src/` dir, `@/*` alias      |
| Language  | TypeScript strict                | no `any`, no `@ts-ignore`    |
| UI        | shadcn/ui + Tailwind v4          | mobile-first                 |
| Forms     | react-hook-form + Zod            | schemas shared client/server |
| DB/Auth   | Supabase (Postgres + Auth + RLS) | via `@supabase/ssr`          |
| PDF       | @react-pdf/renderer              | pure JS, no Puppeteer        |
| Hosting   | Vercel                           | + Vercel Blob for logos      |
| Cron      | Vercel Cron                      | no Inngest                   |
| Billing   | Stripe test mode (Phase 2)       | not in Phase 1               |
| Errors    | Sentry only                      | no PostHog, no Axiom         |
| Tests     | Vitest + Playwright              | on money-critical paths      |

Any of these changed without a `# STACK_DEVIATION` comment is a bug.

---

## 3. PHASE 1 SCOPE — locked

**Building (Ships 1–10, Days 1–30):**
signup → business profile → clients CRUD → products CRUD →
proforma form (live UGX totals, VAT toggle, atomic numbering) →
PDF (watermark + verbatim disclaimer + MoMo codes) →
WhatsApp share → 10 real users.

**Not building (defer to Phase 2/3):**
multi-currency · EFRIS conversion · public accept page · status
pipeline UI · Stripe billing · logo upload · HS codes · Incoterms ·
PWA · email · admin dashboard · expiry cron · VAT per line ·
any AI feature in the product.

If a ship task asks for any of these, stop. It's a scope breach.

---

## 4. THE 8 MUST CONSTRAINTS (each needs a test by Ship 10)

1. **UGX formatting** — `UGX 1,500,000` (comma sep, no decimals,
   non-breaking space). Test: `formatMoney(1500000) === 'UGX\u00A01,500,000'`
2. **Non-fiscal watermark** — every PDF until status = `converted`
3. **Verbatim disclaimer** — copy from `MASTER_PROMPT.md §8.3`. Never
   paraphrase. Never shorten.
4. **VAT 18%** — toggleable per document, default OFF for exports,
   ON for domestic. Test edge cases: 0, 0.01, large numbers.
5. **MoMo fields first-class** — `momo_mtn_code`, `momo_airtel_code`
   as columns, not notes. Rendered on PDF and in WhatsApp message.
6. **Atomic numbering** — `PI-{YYYY}-{NNNN}`, never reused, never
   skipped. Test: year rollover, >9999 docs.
7. **Exchange rate snapshot** — stored at creation, never re-fetched
   on read.
8. **Zero data loss on conversion** — Phase 2 features read from
   `document_lines`, never copy. Single source of truth.

A Phase 1 ship that touches one of these without a test is a failed
ship.

---

## 5. THE SHIP LOOP (per ship, per day)

**Before writing:**

- Read `COURSE_BOOK.md §4.2` for the ship's feature.
- Read `MASTER_PROMPT.md §6.x` for the spec of that feature.
- Restate: "Ship N — [feature]. Done when [acceptance test]."
- Check `PROGRESS.md`: is the last ship live? If no, fix that first.

**While building:**

- One file at a time. Full path as a header comment.
- Types first, then implementation, then tests.
- Zod schema before the route handler that uses it.
- Read each file before editing.

**Before claiming done:**

- `pnpm test` (or `npx vitest run`) passes.
- `pnpm lint` clean, TS strict clean.
- Deploy: `git push origin main` → Vercel URL live.
- Open the production URL and run the acceptance test manually.
- Paste: the URL, the test output, and the acceptance check result.

**After:**

- Update `PROGRESS.md`: ship number, URL, acceptance evidence,
  errors encountered, next ship.
- Tick the ship in `COURSE_BOOK.md` Appendix C.

---

## 6. VERIFICATION PROTOCOL — the only proof is external

Three things must be true before "done":

1. **Compiles and tests** — pasted output, not summary.
2. **Deploys and loads** — Vercel production URL, opened, acceptance
   criteria met.
3. **Survives the second look** — after a 2-minute pause, reload the
   URL and re-read the diff. The most common failure is a claim that
   passed the first look and not the second.

If any of the three is missing, the ship is **not done**. Buffer days
exist for this.

---

## 7. STOP CONDITIONS — when to halt and report

Stop immediately and report when:

- **3 failed attempts** at one ship (see §1.4).
- **Scope breach** — the fix needs files outside the ship task.
- **A MUST constraint** (§4) would be violated or left untested.
- **A tool fails in a new way** — paste raw error, do not retry.
- **The stack would need to change** — that's a decision, not a fix.
- **Blocked > 2 days** — name the blocker (terminal / GitHub / Vercel /
  Supabase / motivation), shrink to the smallest next action, ship that.

The report format:
```

STOPPED: [one-line reason]
TRIED: [what, with what error each]
OPTIONS: [two paths with trade-offs, one line each]
NEED: [the decision or information required to continue]

````

Then wait. Do not continue on a guess.

---

## 8. HANDOFF ARTIFACT — after every ship, every block

Update `PROGRESS.md` with this exact block:

```md
## [DATE] — Ship N: [feature]
URL: [vercel URL]
Acceptance: [test output pasted, or "FAILED: [reason]"]
Files touched: [list]
MUST constraints touched: [which, and test status]
Errors encountered: [paste or "none"]
Blockers: [or "none"]
Next ship: [N+1: feature]
````

The handoff is the resume point. If a new session can't pick up from
`PROGRESS.md` in under 2 minutes, the handoff failed.

---

## 9. ANTI-PATTERNS — never do these

- Use `float` for money. Use `numeric(15,2)` in DB, `Math.round` at UI.
- Use `toLocaleString()` inline — always `formatMoney()` from
  `lib/currency.ts`.
- Copy line items into a converted invoice — read from
  `document_lines` via FK.
- Fetch live exchange rates on read — snapshot at creation.
- Allow editing after status = `sent` — require renew.
- Log client TINs anywhere — PII under Uganda DPPA 2019.
- Paraphrase the §8.3 disclaimer — copy verbatim.
- Skip `activity_log` writes on state transitions.
- Skip RLS on any table.
- Hardcode `0.18` — use `VAT_RATE`.
- Use `Date.now()` inside a React render — hydration mismatch.
- Add `OPENAI_API_KEY` to the project — product is AI-free.
- Suggest Phase 2 features during Phase 1 — scope discipline.
- Mark a ship done without a live URL.
- Ask "what next?" — read `PROGRESS.md`.

---

## 10. EFFICIENCY RULES — token economy

- Reference sections by §number: "per §8.3", "see §6.4". Never
  re-quote what's already in `MASTER_PROMPT.md` or `COURSE_BOOK.md`.
- Output **code**, not prose about code.
- Prose is allowed only for: (a) the pre-ship restatement, (b) a
  `# STACK_DEVIATION` justification, (c) the stop report, (d) the
  handoff block.
- When building a ship, output only files that ship touches.
- Never re-emit the schema, the currency function, or the disclaimer —
  import or reference them.
- The books are the source of truth. Chat history is not. When a
  session fills up, restart from `PROGRESS.md` + the relevant §block.

---

## 11. THE ONE-LINE TEST (for every ship)

> A stranger reads `PROGRESS.md` and your pasted acceptance evidence,
> opens the URL, and confirms the feature works. Nothing else counts.

If the stranger has to ask "but does it actually work?", the ship
failed.

---

## 12. SELF-AUDIT (end of each week — 2 min)

Score yourself, honestly:

| Capability                              | Score (0-3) | Evidence |
| --------------------------------------- | ----------- | -------- |
| Verification (pasted output)            |             |          |
| Scope discipline (no creep)             |             |          |
| Stopping (halted cleanly when blocked)  |             |          |
| Handoff (PROGRESS.md complete)          |             |          |
| Stack discipline (no silent deviations) |             |          |

**Floor governs, not average.** A 3-average with a 1 on scope
discipline means the agent will ship out-of-scope features. Fix the
floor before shipping again.

```

---

## How to use it

**Save as** `AGENTS.md` at repo root, commit it, and paste it into every new agent session. The agent's job becomes: *read the four files, execute the ship loop, update the handoff.*

**The efficiency comes from three lines:**
- §0 — read order (agent doesn't re-read the whole books)
- §10 — reference, don't re-quote
- §8 — the handoff block (every session picks up in 2 min)

**The safety comes from three lines:**
- §1.3 — done means live + pasted evidence
- §7 — stop conditions with a report format
- §11 — the one-line test

**What you should edit first:** §2 (stack) if you change any tool, §3 (scope) if you cut or add a Phase 1 ship, §4 (MUST constraints) if a new compliance rule appears. Nothing else needs touching week-to-week.

**What you should never add:** more rules. Every line in §1 earns its keep by being violatable. If you don't see a rule violated in two weeks, cut it — a shorter contract is a more followed contract.

Send back the first ship you run and I'll check whether the agent honoured §6 (verification) and §8 (handoff) before you accept the diff.
```
