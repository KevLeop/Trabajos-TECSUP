const URL_BACKEND = "https://5fd162f8b485ea0016eee4f1.mockapi.io";

export const getProductos = async () => {
  const peticion = await fetch(`${URL_BACKEND}/producto`);
  const data = await peticion.json();
  return data;
};

export const getUsuarios = async (page) => {
  const peticion = await fetch(`https://reqres.in/api/users?page=${page}`);
  const data = await peticion.json();
  return data;
};
