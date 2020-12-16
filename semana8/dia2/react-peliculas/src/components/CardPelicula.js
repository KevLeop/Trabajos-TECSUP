import React from "react";
import Generos from "./Generos";

const CardPelicula = ({ objPelicula }) => {
  return (
    <div className="card shadow">
      <figure className="d-flex">
        <img
          width="50"
          src={`https://image.tmdb.org/t/p/w500${objPelicula.poster_path}`}
          alt=""
          className="card-img-top figure-img ounded"
        />
      </figure>
      <div className="card title">
        <h1 className="text-center">{objPelicula.original_title}</h1>
      </div>

      <div className="cardbody">{objPelicula.overview}</div>
      <div className="card-footer">
        <Generos generoPeli={objPelicula.genre_ids} />
      </div>
    </div>
  );
};

export default CardPelicula;
