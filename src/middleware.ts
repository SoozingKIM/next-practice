import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('&&&>>', request.cookies);
  const didLogin = request.cookies.has('nextjs'); // request.cookies.get('nextjs')
  // if (!didLogin) return NextResponse.redirect(new URL('/hello', request.url));
  request.headers.set('PPP', 'ppppp')
  if (!didLogin) return NextResponse.rewrite(new URL('/hello', request.url));
  return NextResponse.next();
}
export const config = {
  matcher: ['/api/:path*', '/bbb/:path*'],
};
