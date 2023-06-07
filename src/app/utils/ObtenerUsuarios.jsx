// Returna los datos del token almacenados en el cache del navegador
'use server';
import { cookies } from 'next/headers';
export async function create(data) {
  cookies().set({
    name: 'userToken',
    value: data,
    httpOnly: true,
    maxAge: 3600, // Número en segundos
  });
}
