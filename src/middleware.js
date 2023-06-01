import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
export async function middleware(request) {
  const cookie = request.cookies.get('userToken');
  if (request.nextUrl.pathname.includes('/profile')) {
    if (!cookie) {
      return NextResponse.redirect(new URL('/signIn', request.url));
    }
    try {
      const { payload } = await jwtVerify(
        cookie.value,
        new TextEncoder().encode('secretKey')
      );
      console.log('La cookie es: ', payload);
      return NextResponse.next();
    } catch (error) {
      console.log('token no valido');
      return NextResponse.redirect(new URL('/signIn', request.url));
    }
  }

  return NextResponse.next();
}
