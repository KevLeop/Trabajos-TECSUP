import React, { useState } from "react";
import UsuarioContext from "./usuarioContext";

const UsuarioState = ({ children }) => {
  const [usu, setUsu] = useState("Lechka");
  return (
    <UsuarioContext.Provider value={{ nombre: usu, setNombre: setUsu }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioState;
