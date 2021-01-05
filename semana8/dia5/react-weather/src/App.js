import React, { useState, useEffect } from "react";
import Forecast from "./components/forecast/Forecast";
import Header from "./components/Header";

import Buscador from "./components/buscador/Buscador";
import { getWeatherPerCity } from "./services/services";

const App = () => {
  const [pronosticos, setPronosticos] = useState([]);
  const [ciudad, setCiudad] = useState("");

  const modificarCiudad = (termino) => {
    setCiudad(termino);
  };

  useEffect(() => {
    if (ciudad === "") {
      return;
    } else {
      getWeatherPerCity(ciudad).then((data) => {
        if (data.cod === "404") {
          console.log(data.cod);
          setPronosticos([]);
        } else {
          console.log(data.cod);
          console.log(data.list);
          setPronosticos(data.list);
        }
      });
    }
  }, [ciudad]);

  return (
    <div>
      <Header />
      <main className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <Forecast pronosticos={pronosticos} />
          </div>
          <div className="col-md-8">
            <Buscador
              modificarCiudad={modificarCiudad}
              pronosticos={pronosticos}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
