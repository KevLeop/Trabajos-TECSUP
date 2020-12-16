import React, { useState } from "react";
import CardPelicula from "./components/CardPelicula";
import { peliculas } from "./data/data";

const App = () => {
  let [pos, setPos] = useState(0);
  return (
    <div className="container d-flex justify-content-center ">
      <div className="row">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-outline-dark btn-lg"
            onClick={() => {
              if (pos === 0) {
                return;
              }
              setPos(pos - 1);
            }}
          >
            {"<"}
          </button>
        </div>
        <div className="col-6 ">
          <CardPelicula objPelicula={peliculas[pos]} />
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-outline-dark btn-lg "
            onClick={() => {
              if (pos === peliculas.length - 1) {
                return;
              }
              setPos(pos + 1);
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
