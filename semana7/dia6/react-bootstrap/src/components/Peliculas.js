import React from "react";
import { peliculas } from "./../data/data";
import Pelicula from "./Pelicula";
const Peliculas = () => {
  return (
    <section className="row">
      {peliculas.map((peli) => {
        return <Pelicula peli={peli} key={peli.id} />;
      })}
    </section>
  );
};
export default Peliculas;
