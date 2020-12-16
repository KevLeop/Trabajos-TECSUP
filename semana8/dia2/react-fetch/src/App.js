import React, { useEffect, useState } from "react";
import { getUsuarios } from "./services/services";

const App = () => {
  const [pagina, setPagina] = useState(1);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios(pagina).then((data) => {
      console.log(data.data);
      setUsuarios(data.data);
    });
  }, [pagina]);

  return (
    <div>
      <ul>
        {usuarios.map((usu) => {
          return <li key={usu.id}> {usu.first_name} </li>;
        })}
      </ul>
      <hr />
      <button
        onClick={() => {
          setPagina(pagina + 1);
        }}
      >
        Pagina +1
      </button>
    </div>
  );
};

export default App;
