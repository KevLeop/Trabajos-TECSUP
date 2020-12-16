import React from "react";
import { generos } from "./../data/data";

const Categorias = (props) => {
  let catsString = props.cats.map((cat_id) => {
    let objGenero = generos.find((gen) => {
      if (+gen.id === +cat_id) {
        return gen;
      }
    });
    return objGenero.name;
  });

  return (
    <p className="card-text">
      {catsString.map((cat) => {
        return (
          <span className="badge badge-danger mr-2" key={cat}>
            {cat}
          </span>
        );
      })}
    </p>
  );
};

export default Categorias;
