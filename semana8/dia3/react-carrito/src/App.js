import React, { useState } from "react";
import Carrito from "./components/carrito/Carrito";
import Filtro from "./components/filtro/Filtro";
import Header from "./components/Header";
import Productos from "./components/Productos";

const App = () => {
  const [termino, setTermino] = useState("");
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <Header />;
      <main className="container-fluid">
        <div className="row">
          <div className="col-md2">
            <Filtro setTermino={setTermino} />
          </div>
          <div className="col-md-8">
            <Productos
              termino={termino}
              // carrito={carrito}
              setCarrito={setCarrito}
            />
          </div>
          <div className="col-md-2">
            <Carrito carrito={carrito} setCarrito={setCarrito} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
