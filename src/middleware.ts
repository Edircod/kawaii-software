import { NextRequest, NextResponse } from "next/server";

import { inferLocale, locales, type Locale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals and files with extensions (assets, OG images, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/opengraph-image" ||
    pathname === "/icon" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if the path already starts with a valid locale
  const pathnameLocale = locales.find(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameLocale) {
    // Pass the locale to the root layout via header
    const response = NextResponse.next();
    response.headers.set("x-locale", pathnameLocale);
    return response;
  }

  // No locale prefix — redirect to the inferred locale
  const locale: Locale = inferLocale(
    request.headers,
    request.cookies.get("locale")?.value
  );
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"]
};
