import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;


  if (pathname.startsWith('/signin')) {
    return NextResponse.next();
  }


  if (!token) {
    console.log('SIGN IN REQUIRED!');
    return NextResponse.redirect(new URL('/signin', req.url));
  }


  if (pathname.startsWith('/AdminDashboard')) {
    if (token.role !== 'ADMIN' && token.role !== 'SUPERADMIN') {
      console.log('ADMIN ROLE REQUIRED!');
      return NextResponse.redirect(new URL('/UserDashboard', req.url));
    }
  }

//   if (pathname.startsWith('/superadmin')) {
//     if (token.role !== 'SUPERADMIN') {
//       return NextResponse.redirect(new URL('/UserDashboard', req.url));
//     }
//   }

  return NextResponse.next();
}

export const config = {
    matcher: ['/AdminDashboard/:path*', '/UserDashboard/:path*', '/signin'],
};
