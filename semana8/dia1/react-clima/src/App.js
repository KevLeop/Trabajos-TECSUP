import React, { useState } from "react";
import CardClima from "./components/CardClima";
import Header from "./components/Header";
import { temperaturas } from "./data/data";
// import "./estilos.css";

const App = () => {
  let [pos, setPos] = useState(0);
  return (
    <>
      <Header />
      <main className="container">
        <div className="row-mt-4">
          <div className="col-12">
            <h1 className="display-3">Pronóstico del tiempo en Puno</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 flex-centrado">
            <button
              className="btn btn-outline-danger botonFlecha"
              onClick={() => {
                // pos > 0 && setPos(pos - 1);
                if (pos === 0) {
                  return;
                }
                setPos(pos - 1);
              }}
            >
              {" "}
              {"<"}{" "}
            </button>
          </div>

          <div className="col-md-8">
            <CardClima objClima={temperaturas[pos]} />
          </div>
          <div className="col-md-2 flex-centrado">
            <button
              className="botonFlecha btn btn-outline-danger "
              onClick={() => {
                if (pos === temperaturas.length - 1) {
                  return;
                }
                setPos(pos + 1);
              }}
            >
              {" "}
              {">"}{" "}
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
