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
  const tokenData = jwt.decode(token.value);
  return tokenData;
};
export const deleteCookie = async () => {
  cookies().remove('userToken', {
    path: '/',
    domain: '.vercel.app',
  });
};
