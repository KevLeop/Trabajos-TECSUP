import React, { useEffect, useState } from "react";
import platoIcon from "../../../../../assets/img/plato_blanco.svg";
import { getCategorias } from "../../../../../services/categoriaService";
const PosCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    getCategorias().then((data) => {
      if (data.ok) {
        setCategorias(data.content);
        setCargando(false);
      }
    });
  }, []);

  return (
    <nav className="menu">
      <ul className="menu__lista">
        {categorias.map((objCategoria) => {
          return (
            // <li className="active">
            <li
              className=""
              style={{ textAlign: "center" }}
              key={objCategoria.categoria_id}
            >
              <img src={platoIcon} alt="" />
              <span>{objCategoria.categoria_nom}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PosCategorias;
