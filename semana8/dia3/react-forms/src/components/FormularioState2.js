import React, { useState } from "react";

const FormularioState2 = () => {
  const [formulario, setFormulario] = useState({ nombre: "", horas: 0 });
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(formulario);
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
            name="nombre"
            id=""
            placeholder="Ejm.: ReactJS"
            value={formulario.nombre}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="">Cantidad de horas</label>
          <input
            type="number"
            name="horas"
            id=""
            value={formulario.horas}
            onChange={handleChange}
          />
        </p>
        <p>
          <button type="submit">Registrar</button>
        </p>
      </form>
    </fieldset>
  );
};

export default FormularioState2;
