import React, { useState, useEffect } from "react";
import { getProductos } from "../services/services";
import Producto from "./Producto";

const Productos = ({ termino, setCarrito }) => {
  const [productos, setProductos] = useState([]);
  // console.log(termino);

  useEffect(() => {
    console.log("USE EFFECT PRODUCTOS");
    getProductos(termino).then((data) => {
      console.log(data);
      setProductos(data);
    });
  }, [termino]);

  return (
    <>
      {termino.trim().length > 2 ? (
        <div className="row">
          <div className="col-12">
            <h2>Resultados para la busqueda: {termino}</h2>
          </div>
        </div>
      ) : null}

      <div className="row">
        {productos.map((objProducto) => {
          return (
            <Producto
              key={objProducto.prod_id}
              objProducto={objProducto}
              // carrito={carrito}
              setCarrito={setCarrito}
            />
          );
        })}
      </div>
    </>
  );
};

export default Productos;
