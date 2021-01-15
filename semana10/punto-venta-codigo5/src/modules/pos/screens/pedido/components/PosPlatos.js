import React, { useContext, useEffect, useState } from "react";
import PosContext from "../../../../../contexts/pos/posContext";
import { getPlatosByCategoriaId } from "../../../../../services/categoriaService";
import PosPlato from "./PosPlato";

const PosPlatos = () => {
  const [platos, setPlatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria_global, mesa_global } = useContext(PosContext);
  // SI NO TENEMOS UNA CATEGORIA GLOBAL, NO MOSTRAR NADA
  // SI TENEMOS UNA CATEGORIA GLOBAL, CARGAR LOS PLATOS DE DICHA CATEGORÍA
  // SI LA CATEOGRÍA GLOBAL CAMBIA, EL COMPONENTE POSPLATOS, DEBE ACTUALIZAR LA INFO
  // CON LOS NUEVOS PLATOS

  useEffect(() => {
    if (categoria_global) {
      getPlatosByCategoriaId(categoria_global.categoria_id).then((data) => {
        if (data.ok) {
          setPlatos(data.content.Platos);
          setCargando(false);
        }
      });
    }
  }, [categoria_global]);

  return (
    <div className="carta__platos">
      {categoria_global ? (
        cargando ? (
          <div class="spinner-border text-light" role="status">
            <span class="visually-hidden"></span>
          </div>
        ) : (
          platos.map((objPlato) => {
            return <PosPlato objPlato={objPlato} key={objPlato.id} />;
          })
        )
      ) : (
        <h4 className="text-light">Seleccione una categoria de platos</h4>
      )}
    </div>
  );
};

export default PosPlatos;
