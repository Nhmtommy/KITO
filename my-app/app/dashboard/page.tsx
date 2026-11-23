import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./logout-button";

// This page reads the session (cookies) at request time, so it cannot be
// prerendered into the static shell. Opt out to keep it a blocking route.
export const instant = false;

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
          <LogoutButton />
        </header>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-950">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Signed in as
          </p>
          <p className="mt-1 text-lg font-medium text-zinc-900 dark:text-zinc-50">
            {user.email}
          </p>
        </div>

        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
          Business profile, clients, products and proformas are coming next.
        </p>
      </div>
    </div>
  );
}
