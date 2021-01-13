import React from "react";

const CatalogoProductoByIdScreen = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  console.log(id);
  return (
    <div>
      <p>CatalogoProductoByIdScreen</p>
      <p>Mostrando un producto individual dado su id</p>
      <br />
      <p>
        Informacion completa Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Laudantium quod quae eum assumenda? Nobis ea ad voluptatibus vitae
        incidunt necessitatibus.
      </p>
    </div>
  );
};

export default CatalogoProductoByIdScreen;
