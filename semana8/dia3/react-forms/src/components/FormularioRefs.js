import React, { useRef } from "react";

const FormularioRefs = () => {
  const refNombre = useRef();
  const refHoras = useRef();

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("enviando el formulario");
    console.log(`Nombre: ${refNombre.current.value}`);
    console.log(`Numero: ${refHoras.current.value}`);
  };

  return (
    <fieldset>
      <legend>Registrar Curso</legend>
      <form onSubmit={enviarFormulario}>
        <p>
          <label htmlFor="">Nombre del curso</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ejm.: ReactJS"
            ref={refNombre}
          />
        </p>
        <p>
          <label htmlFor="">Cantidad de horas</label>
          <input type="number" name="" id="" ref={refHoras} />
        </p>
        <p>
          <button type="submit">Registrar</button>
        </p>
      </form>
    </fieldset>
  );
};

export default FormularioRefs;
