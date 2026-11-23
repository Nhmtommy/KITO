import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
              K
            </span>
            <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Kito
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex dark:text-zinc-400">
            <a href="#how" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              How it works
            </a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Pricing
            </a>
            <Link
              href="/login"
              className="rounded-full bg-zinc-900 px-4 py-2 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
            >
              Get started
            </Link>
          </div>

          <Link
            href="/login"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white sm:hidden dark:bg-zinc-50 dark:text-black"
          >
            Get started
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-5 pb-16 pt-16 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300">
              Built for Ugandan business · UGX native
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
              Send a compliant proforma
              <br className="hidden sm:block" />{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                in 90 seconds
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Create a UGX proforma with VAT, download a compliant PDF, and send
              it on WhatsApp — all from your phone. No spreadsheets. No VAT
              mistakes. No fiscal headaches.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="w-full rounded-full bg-emerald-600 px-7 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 sm:w-auto"
              >
                Create your first proforma
              </Link>
              <a
                href="#how"
                className="w-full rounded-full border border-zinc-300 px-7 py-3.5 text-center text-base font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 sm:w-auto dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                See how it works
              </a>
            </div>

            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              Free to start · No card required
            </p>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────── */}
        <section id="how" className="border-t border-zinc-200 bg-white py-16 dark:border-white/10 dark:bg-zinc-950">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Three steps. That&apos;s it.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-zinc-600 dark:text-zinc-400">
              From blank page to a shareable proforma in under two minutes.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Add client & items",
                  body: "Pick a saved client and your products. Prices, quantities, VAT — all pre-filled.",
                },
                {
                  step: "2",
                  title: "Download PDF",
                  body: "A compliant A4 proforma with the mandatory NON-FISCAL disclaimer and your MoMo codes.",
                },
                {
                  step: "3",
                  title: "Send on WhatsApp",
                  body: "One tap opens WhatsApp with a pre-filled message and a link your client can accept.",
                },
              ].map((item) => (
                <div key={item.step} className="text-left">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-600 text-base font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Value props ──────────────────────────────────── */}
        <section className="border-t border-zinc-200 py-16 dark:border-white/10">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2">
            {[
              {
                title: "UGX-native formatting",
                body: "Every amount reads UGX 1,500,000 — comma separators, no decimals. The way Ugandan businesses actually quote.",
              },
              {
                title: "VAT done right",
                body: "18% VAT toggled per document, calculated on the subtotal, never per line. Exports stay exempt automatically.",
              },
              {
                title: "MoMo codes on every quote",
                body: "Your MTN MoMo and Airtel Money codes are printed on the PDF and in the WhatsApp message. Clients pay faster.",
              },
              {
                title: "Sequential, never reused",
                body: "Every proforma gets PI-2026-0001, PI-2026-0002… atomic and gap-free. No duplicate numbers, ever.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-950"
              >
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────── */}
        <section id="pricing" className="border-t border-zinc-200 bg-white py-16 dark:border-white/10 dark:bg-zinc-950">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Simple pricing
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-zinc-600 dark:text-zinc-400">
              Start free. Upgrade when you&apos;re sending quotes every week.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  name: "Free",
                  price: "UGX 0",
                  cadence: "/ month",
                  features: ["3 proformas / month", "UGX only", "PDF with watermark", "WhatsApp share"],
                  cta: "Start free",
                  highlight: false,
                },
                {
                  name: "Starter",
                  price: "UGX 25,000",
                  cadence: "/ month",
                  features: ["Unlimited proformas", "Your logo on PDF", "MoMo payment codes", "Client & product library"],
                  cta: "Choose Starter",
                  highlight: true,
                },
                {
                  name: "Pro",
                  price: "UGX 60,000",
                  cadence: "/ month",
                  features: ["Everything in Starter", "EFRIS fiscal conversion", "WhatsApp reminders", "Priority support"],
                  cta: "Choose Pro",
                  highlight: false,
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={
                    "relative rounded-2xl border p-6 " +
                    (tier.highlight
                      ? "border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600 dark:bg-emerald-950/20"
                      : "border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950")
                  }
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {tier.name}
                  </h3>
                  <p className="mt-3">
                    <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {tier.price}
                    </span>
                    <span className="text-sm text-zinc-500">{tier.cadence}</span>
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-600 dark:text-emerald-400">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/login"
                    className={
                      "mt-6 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors " +
                      (tier.highlight
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "border border-zinc-300 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900")
                    }
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────── */}
        <section className="border-t border-zinc-200 py-16 dark:border-white/10">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Ready to stop fighting with quotes?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
              Create your first UGX proforma in under 90 seconds. It&apos;s free
              to start.
            </p>
            <Link
              href="/login"
              className="mt-8 inline-block rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
            >
              Get started — it&apos;s free
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-zinc-200 bg-white py-8 dark:border-white/10 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 text-sm text-zinc-500 sm:flex-row dark:text-zinc-500">
          <p>© 2026 Kito. Built for Ugandan business.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
