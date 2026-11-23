import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Routes that require an authenticated user (Phase 1 scope, per AGENTS §3).
const PROTECTED_PATHS = [
  "/dashboard",
  "/clients",
  "/products",
  "/documents",
  "/settings",
];

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
          // Prevent CDNs from caching auth responses (per @supabase/ssr).
          Object.entries(headers).forEach(([key, value]) =>
            response.headers.set(key, value)
          );
        },
      },
    }
  );

  // Refresh the session and return the current user (if any).
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (isAuthPage && user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
