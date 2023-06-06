// Returna los datos del token almacenados en el cache del navegador
'use server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
export default async function ObtenerUsuario() {
  const cookieStore = cookies();
  const token = cookieStore.get('userToken');
  if (token) {
    const tokenData = jwt.decode(token.value);
    return tokenData;

    // console.log(token);
  }
}
