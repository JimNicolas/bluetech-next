const headers = {
  'Content-Type': 'application/json',
};

export const getGPU = async (apiUrl, id) => {
  try {
    const response = await fetch(`${apiUrl}/products/gpu/${id}`, {
      headers,
    });
    if (response.ok) {
      console.log('Se recibieron los datos');
      return response.json();
    }
  } catch (error) {
    throw new Error('No se encontró el producto');
  }
};
