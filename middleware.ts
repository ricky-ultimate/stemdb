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


  if (pathname === '/superuser') {
    if (token.role !== 'SUPERADMIN') {
      if (token.role === 'ADMIN') {
        console.log('REDIRECTING ADMIN TO /AdminDashboard');
        return NextResponse.redirect(new URL('/AdminDashboard', req.url));
      } else {
        console.log('REDIRECTING USER TO /UserDashboard');
        return NextResponse.redirect(new URL('/UserDashboard', req.url));
      }
    }
    console.log('REWRITING /superuser TO /SUDashboard');
    return NextResponse.rewrite(new URL('/SUDashboard', req.url));
  }

  if (pathname === '/admindashboard') {
    console.log('REWRITING /admindashboard TO /AdminDashboard');
    return NextResponse.rewrite(new URL('/AdminDashboard', req.url));
  }

  if (pathname === '/userdashboard') {
    console.log('REWRITING /userdashboard TO /UserDashboard');
    return NextResponse.rewrite(new URL('/UserDashboard', req.url));
  }


  if (pathname.startsWith('/AdminDashboard')) {
    if (token.role !== 'ADMIN' && token.role !== 'SUPERADMIN') {
      console.log('ADMIN ROLE REQUIRED!');
      return NextResponse.redirect(new URL('/UserDashboard', req.url));
    }
  }

  if (pathname.startsWith('/SUDashboard')) {
    if (token.role !== 'SUPERADMIN') {
      if (token.role === 'ADMIN') {
        console.log('REDIRECTING ADMIN TO /AdminDashboard');
        return NextResponse.redirect(new URL('/AdminDashboard', req.url));
      } else {
        console.log('REDIRECTING USER TO /UserDashboard');
        return NextResponse.redirect(new URL('/UserDashboard', req.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/AdminDashboard/:path*', '/UserDashboard/:path*', '/SUDashboard/:path*', '/signin', '/admindashboard', '/userdashboard', '/superuser',],
  };
