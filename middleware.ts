'use server';

import { NextRequest } from 'next/server';
import authenticateAction from './app/auth/actions/authenticated';
import { unauthenticatedRoutes } from './app/common/constants/routes';

export async function middleware(request: NextRequest) {
  const auth = await authenticateAction();

  if (
    !auth &&
    !unauthenticatedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route.path)
    )
  ) {
    return Response.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
