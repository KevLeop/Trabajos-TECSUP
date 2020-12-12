import React from "react";

const Producto = (props) => {
  return (
    <div>
      <li>Descripcion:{props.prod.descripcion}</li>
      <li>Precio: {props.prod.precio}</li>
    </div>
  );
};

export default Producto;
