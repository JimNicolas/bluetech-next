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
