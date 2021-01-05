import React, { useContext } from "react";
import CarritoContext from "../contextos/carritoContext";
import UsuarioContext from "../contextos/usuarioContext";
import UsuarioState from "../contextos/usuarioState";

const Header = () => {
  const { nombre } = useContext(UsuarioContext);
  const { cantidad } = useContext(CarritoContext);
  console.log(nombre);
  return (
    <>
      <nav>
        <strong>
          <small>{nombre}</small>
        </strong>
        | Carrito: <strong>{cantidad}</strong>
      </nav>
      <header className="header">Titulo</header>
    </>
  );
};

export default Header;
