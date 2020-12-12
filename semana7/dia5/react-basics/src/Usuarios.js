import React from "react";
import Usuario from "./Usuario";
import "./Usuarios.css";

// comando rafce para crear componente base
const Usuarios = (props) => {
  console.log(props.user);
  console.log(props.miTitulo);
  let lis = props.user.map((usu) => {
    return <Usuario usu={usu} key={usu.id} />;
  });
  return (
    <div>
      <ul>{lis}</ul>
    </div>
  );
};

export default Usuarios;
