import React, { useContext } from "react";
import CarritoContext from "../contextos/carritoContext";
import UsuarioContext from "../contextos/usuarioContext";

const EditarPerfil = () => {
  const { setNombre } = useContext(UsuarioContext);
  const { cantidad, setCantidad } = useContext(CarritoContext);
  return (
    <div>
      <button
        onClick={() => {
          setNombre("Kevin");
        }}
      >
        Editar Perfil
      </button>
      <button
        onClick={() => {
          setCantidad(cantidad + 1);
        }}
      >
        Aumentar Carrito
      </button>
    </div>
  );
};

export default EditarPerfil;
