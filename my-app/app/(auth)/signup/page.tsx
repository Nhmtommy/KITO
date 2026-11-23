"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.session) {
      // Email confirmation is off: the user is signed in immediately.
      router.push("/dashboard");
      router.refresh();
      return;
    }

    setMessage("Check your email for a confirmation link, then log in.");
    setLoading(false);
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Create your account
      </h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        Start sending compliant UGX proformas.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          />
          <p className="mt-1 text-xs text-zinc-500">At least 6 characters.</p>
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {error}
          </p>
        )}

        {message && (
          <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60"
        >
          {loading ? "Creating account…" : "Sign up"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
