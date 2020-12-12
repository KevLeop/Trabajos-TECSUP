/**
 * Colocar asyn en una funcion hace que,
 * lo que retortne una función sea una promesa
 *
 */
const url = "https://5fd162f8b485ea0016eee4f1.mockapi.io";
export const getCategorias = async () => {
  let peticion = await fetch(`${url}/categoria`);
  let data = await peticion.json();
  return data;
};

export const getProductos = async () => {
  let peticion = await fetch(`${url}/producto`);
  let data = await peticion.json();
  return data;
};

export const postProductos = async (objProducto) => {
  let peticion = await fetch(`${url}/producto`, {
    method: "POST",
    body: JSON.stringify(objProducto),
    headers: {
      "Content-type": "application/json",
    },
  });
  let data = await peticion.json();
  return data;
};
