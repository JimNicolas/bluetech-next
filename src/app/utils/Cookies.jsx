// Returna los datos del token almacenados en el cache del navegador
'use server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
export async function CreateCookie(token) {
  cookies().set({
    name: 'userToken',
    value: token,
    httpOnly: true,
    maxAge: 360, // Número en segundos
  });
}
export const getCookie = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('userToken');
  if (token) {
    // console.log(jwt.decode(token.value));
    return jwt.decode(token.value);
  } else {
    return { username: '', email: '' };
  }
  // console.log(token); // Si existe el token devuelve un objeto {name: 'userToken', value: 'token', path '/'} si no existe estos deben ser vacios
};
export const deleteCookie = async () => {
  cookies().remove('userToken', {
    path: '/',
    domain: '.vercel.app',
  });
};
