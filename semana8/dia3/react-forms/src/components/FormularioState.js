import React, { useState } from "react";

const FormularioState = () => {
  const [nombre, setNombre] = useState("");
  const [horas, setHoras] = useState(0);
  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(`Nombre: ${nombre}`);
    console.log(`Horas: ${horas}`);
  };
  return (
    <fieldset>
      <legend>
        {" "}
        <h1>Registrar Curso - FormState</h1>{" "}
        <h2> Formulario controlado por State</h2>
      </legend>
      <form onSubmit={enviarFormulario}>
        <p>
          <label htmlFor="">Nombre del curso</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ejm.: ReactJS"
            onChange={(e) => {
              console.log(e);
              setNombre(e.target.value);
            }}
            value={nombre}
          />
        </p>
        <p>
          <label htmlFor="">Cantidad de horas</label>
          <input
            type="number"
            name=""
            id=""
            onChange={(e) => {
              console.log(e);
              setHoras(e.target.value);
            }}
            value={horas}
          />
        </p>
        <p>
          <button type="submit">Registrar</button>
        </p>
      </form>
    </fieldset>
  );
};

export default FormularioState;
