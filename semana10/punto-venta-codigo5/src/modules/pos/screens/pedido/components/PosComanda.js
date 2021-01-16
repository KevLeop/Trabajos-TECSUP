import React, { useContext } from "react";
import PosContext from "../../../../../contexts/pos/posContext";
import { postPedido } from "../../../../../services/pedidoService";
import PosComandaItem from "./PosComandaItem";
import moment from "moment";
import Swal from "sweetalert2";

const PosComanda = () => {
  const { pedidos, mesa_global } = useContext(PosContext);
  let pedidoActual = null;
  if (mesa_global) {
    pedidoActual = pedidos.find(
      (objPedido) => objPedido.objMesa.mesa_id === mesa_global.mesa_id
    );
  }

  const pagar = () => {
    let pedidoActual = pedidos.find(
      (pedido) => pedido.objMesa.mesa_id === mesa_global.mesa_id
    );

    let platos = pedidoActual.platos.map((plato) => {
      return {
        plato_id: plato.plato_id,
        pedidoplato_cant: plato.cantidad,
      };
    });
    const objPedido = {
      pedido_fech: moment().format("YYYY-MM-DD HH:mm:ss"),
      pedido_nro: "123",
      pedido_est: "pagado",
      usu_id: 6,
      mesa_id: mesa_global,
      pedidoplatos: [platos],
    };

    postPedido(objPedido).then((data) => {
      if (data.ok) {
        Swal.fire({
          title: "Hecho",
          text: "Pedido registrado con exito",
          icon: "success",
          timer: 800,
        });
      }
    });
  };

  return (
    <div className="comanda">
      <h4 className="comanda__mesa">
        {mesa_global ? `Mesa ${mesa_global.mesa_nro}` : ""}
      </h4>
      <p className="comanda__usuario">Carlos Jimenez</p>
      <hr />
      {!mesa_global ? (
        <div>Selecciona una mesa</div>
      ) : pedidoActual ? (
        <>
          <ul className="comanda__lista">
            {pedidoActual.platos.map((objPlato) => {
              return <PosComandaItem objPlato={objPlato} />;
            })}
          </ul>
          <button
            className="boton boton-success boton-block"
            onClick={() => {
              pagar();
            }}
          >
            PAGAR
          </button>
        </>
      ) : (
        <div>No hay pedidos 😥</div>
      )}
    </div>
  );
};

export default PosComanda;
