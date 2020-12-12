import React from "react";
import Producto from "./Producto";
const Productos = (props) => {
  const listProductos = props.productos.map((prod) => {
    return <Producto prod={prod} key={prod.id} />;
  });
  return (
    <div>
      <ul>{listProductos}</ul>
    </div>
  );
};

export default Productos;
