import React from "react";

const Usuario = (props) => {
  return (
    <li className="list-usuario">
      <span> {props.usu.nombre}</span>
      <span>{props.usu.apellido}</span>
    </li>
  );
};

export default Usuario;
