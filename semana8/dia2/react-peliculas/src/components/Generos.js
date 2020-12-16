import React from "react";
import { generos } from "../data/data";

const Generos = ({ generoPeli }) => {
  let generosString = generoPeli.map((genId) => {
    let objGenero = generos.find((gen) => {
      if (+gen.id === +genId) {
        return gen;
      }
    });
    return objGenero.name;
  });

  return (
    <p>
      {generosString.map((gen, i) => {
        return (
          <span className="badge badge-success mr-2 " key={i}>
            {gen}
          </span>
        );
      })}
    </p>
  );
};

export default Generos;
