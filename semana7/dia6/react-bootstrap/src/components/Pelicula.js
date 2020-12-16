import React from "react";
import Categorias from "./Categorias";

const Pelicula = ({ peli }) => {
  return (
    <div className="col-xl-3 col-lg-3 col md-6">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
          alt=""
          className="card-img-top"
        />
        <div className="card-title">{peli.original_title}</div>
        <div className="card-body">
          <p>{peli.overview}</p>
          <div>
            <Categorias cats={peli.genre_ids} />
          </div>
        </div>
        <div className="footer">
          <button
            className="btn btn-outline-secondary"
            onClick={(e) => {
              alert(peli.original_title);
            }}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pelicula;
