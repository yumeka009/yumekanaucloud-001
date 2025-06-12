import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/', '/login', '/register', '/register-steps'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;
  const isPublicPath = publicPaths.includes(pathname);

  // Add debug info as a custom response header
  const response = NextResponse.next();
  response.headers.set('x-debug-pathname', pathname);
  response.headers.set('x-debug-token', token ?? 'null');

  if (!token && !isPublicPath) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && isPublicPath) {
    const jobsUrl = new URL('/jobs', request.url);
    return NextResponse.redirect(jobsUrl);
  }

  return response;
}


// Define which paths this middleware runs on:
export const config = {
  matcher: [
    // Match all pages except API, _next, static files, and favicon.ico
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
