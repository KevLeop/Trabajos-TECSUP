import React from "react";
import EditarPerfil from "./componentes/EditarPerfil";
import Header from "./componentes/Header";
import Perfil from "./componentes/Perfil";
import CarritoState from "./contextos/carritoState";
import UsuarioState from "./contextos/usuarioState";

const App = () => {
  return (
    <CarritoState>
      <UsuarioState>
        <Header />
        <hr />
        <main>
          <Perfil />
          <hr />
          <EditarPerfil />
        </main>
      </UsuarioState>
    </CarritoState>
  );
};

export default App;
