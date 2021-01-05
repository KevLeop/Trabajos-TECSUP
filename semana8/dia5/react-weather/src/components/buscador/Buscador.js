import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const Buscador = ({ modificarCiudad, pronosticos }) => {
  const [termino, setTermino] = useState("");

  let labels = pronosticos.map((objClima) => {
    let fechaYHoraString = moment(objClima.dt * 1000).format(
      "DD/MM/YYY HH:mm:ss"
    );
    return fechaYHoraString;
  });

  let temps = pronosticos.map((objClima) => {
    return +objClima.main.temp;
  });

  let data = {
    labels: labels,
    datasets: [
      {
        label: "Temperaturas",
        data: temps,
        borderWidth: 1,
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modificarCiudad(termino);
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-body">
              <form className="form-group" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar ciudad"
                  value={termino}
                  onChange={(e) => {
                    setTermino(e.target.value);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-body">
              <Line data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buscador;
