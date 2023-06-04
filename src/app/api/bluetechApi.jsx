'use client';
const headers = {
  'Content-Type': 'application/json',
};

export const loginAuthentication = async (
  apiUrl,
  emailValue,
  passwordValue
) => {
  try {
    const response = await fetch(apiUrl, {
      headers,
      method: 'POST',
      body: JSON.stringify({ email: emailValue, password: passwordValue }),
      credentials: 'include', // Permite incluir cookies en la solicitud
    });
    if (!response.ok) {
      throw new Error('Error al enviar los datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al enviar los datos');
  }
};
export const register = async (apiUrl, username, email, password) => {
  try {
    const response = await fetch(apiUrl, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Error al enviar los datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al enviar los datos');
  }
};
export const getUsersData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl, {
      headers,
      method: 'GET',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Error al obtener las cookies del usuario');
    }
    return response.json();
  } catch (error) {
    console.log('Error al obtener usuarios');
  }
};

export const logoutFetch = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl, {
      headers,
      method: 'POST',
      credentials: 'include',
    });
    const { result } = await response.json();
    return result;
  } catch (error) {}
};
