import axios from "axios";

export const getUsuarios = async () => {
  const peticion = await axios.get("https://reqres.in/api/users?page=2");
  return peticion;
};
