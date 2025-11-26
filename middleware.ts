import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect guessed admin routes to homepage
  if (pathname === '/admin' || pathname === '/dashboard' || pathname.startsWith('/admin/')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Note: For full authentication protection on /staff-portal routes,
  // deploy to Vercel which supports server-side middleware with Supabase.
  // GitHub Pages (static export) cannot protect routes server-side.

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
