// import { NextResponse } from 'next/server';
// import { jwtVerify } from 'jose';
export async function middleware(request) {
  //   const cookie = request.cookies.get('userToken'); // Recupera la cookie que hay en el navegador de nombre userToken (este nombre lo definimos en el backend)
  //   // Si la ruta que se va a cargar contiene /profile // el if era de la siguiente forma pero para aplicar el
  //   // config matcher para el bloque a todas la rutas se elimino el if: if (request.nextUrl.pathname.includes('/profile'))
  //   if (!cookie) {
  //     // Si no se encontro una cookie en el navegador
  //     return NextResponse.redirect(new URL('/signIn', request.url)); // Redirige a la ruta /signin
  //   }
  //   try {
  //     const { payload } = await jwtVerify(
  //       // Verifica que el .value de la cookie corresponde a un formato de token valido
  //       cookie.value,
  //       new TextEncoder().encode('secretKey')
  //     );
  //     console.log('La cookie es: ', payload);
  //     return NextResponse.next(); // Si verifica el token continua con el middleware
  //   } catch (error) {
  //     console.log('token no valido');
  //     return NextResponse.redirect(new URL('/signIn', request.url)); // Si el token no es valido invita a volver a loguearse a la ruta signIn
  //   }
}
// export const config = {
//   matcher: ['/profile', '/products/:path*'], // Se aplicará el bloqueo a /profile y products/(cualquier subruta)
// };
