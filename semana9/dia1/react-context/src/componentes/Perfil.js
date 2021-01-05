import React, { useContext } from "react";
import UsuarioContext from "../contextos/usuarioContext";

const Perfil = () => {
  const { nombre } = useContext(UsuarioContext);
  return (
    <section>
      Nombre de usuario: <strong>{nombre}</strong>
    </section>
  );
};

export default Perfil;
