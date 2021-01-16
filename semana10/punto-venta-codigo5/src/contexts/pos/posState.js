import React, { useReducer } from "react";
import PosReducer from "./posReducer";
import PosContext from "./posContext";

const PosState = ({ children }) => {
  const [state, dispatch] = useReducer(PosReducer, {
    categoria_global: null,
    mesa_global: null,
    pedidos: [],
  });

  const seleccionarCategoriaGlobal = (objCategoria) => {
    console.log("click en seleccionarCateegoriagLOBAL");
    dispatch({
      data: objCategoria,
      type: "SELECCIONAR_CATEGORIA",
    });
  };

  const seleccionarMesaGlobal = (objMesa) => {
    dispatch({
      data: objMesa,
      type: "SELECCIONAR_MESA",
    });
  };

  const restarPlatoAPedido = (objPlato) => {
    let { pedidos, mesa_global } = state;
    if (!mesa_global) return;
    let objPedidoActual = pedidos.find(
      (objPedido) => objPedido.objMesa.mesa_id === mesa_global.mesa_id
    );

    if (objPedidoActual) {
      let platoPedido = objPedidoActual.platos.find(
        (plato) => plato.plato_id === objPlato.plato_id
      );

      if (platoPedido) {
        platoPedido.cantidad -= 1;
        if (platoPedido.cantidad === 0) {
          objPedidoActual.platos = objPedidoActual.platos.filter(
            (plato) => plato.plato_id !== objPlato.plato_id
          );
          if (objPedidoActual.platos.length === 0) {
            pedidos = pedidos.filter(
              (pedido) =>
                pedido.objMesa.mesa_id !== objPedidoActual.objMesa.mesa_id
            );
          }
        }
        dispatch({
          type: "ACTUALIZAR_PEDIDOS",
          data: pedidos,
        });
      }
    }
  };
  const incrementarPlatoAPedido = (objPlato) => {
    const { pedidos, mesa_global } = state;
    if (!mesa_global) return;
    let objPedidoActual = pedidos.find(
      (objPedido) => objPedido.objMesa.mesa_id === mesa_global.mesa_id
    );
    // preguntamos si existe pedidoActual
    // caso contrario el objPedido sería "undefined"
    if (objPedidoActual) {
      // significa que la mesa_global actual ya tenía pedido
      let platoPedido = objPedidoActual.platos.find(
        (plato) => plato.plato_id === objPlato.plato_id
      );
      /**
       * Preguntamos si el plato que estuvimos buscando ya se encontraba en el arreglo
       * del platos, debemosaumentar una unidad a la cantidad,
       * en caso contrario, significa que la mesa si tenía platos, pero no tenía un plato
       * que queremos agregar
       */
      if (platoPedido) {
        // ya habia uno o más platos del plato que qeuermos agregar
        platoPedido.cantidad += 1;
        dispatch({
          type: "ACTUALIZAR_PEDIDOS",
          data: pedidos,
        });
      } else {
        // la mesa tenía platos, pero no como el que queremos agregar
        objPedidoActual.platos.push({
          ...objPlato,
          cantidad: 1,
        });
        dispatch({
          type: "ACTUALIZAR_PEDIDOS",
          data: pedidos,
        });
      }
    } else {
      // significa que la mesa_global actual, está vacía, no tenía ningun pedido
      //agregamos el primer pedido de la mesa actual, con primer plato
      pedidos.push({
        estado: "pendiente",
        objMesa: {
          ...mesa_global,
        },
        platos: [
          {
            ...objPlato,
            cantidad: 1,
          },
        ],
      });

      dispatch({
        type: "ACTUALIZAR_PEDIDOS",
        data: pedidos,
      });
    }

    // 1. si la mesa estaba vacía, y es el primer plato del pedido
    // 2. si la mesa tenía un pedido pero no tenía el plato, y vamos
    // a crear el primer plato de ese pedido
    // 3. si la mesa tenía un pedido y tenía un plato de ese tipo en el
    // pedido, para incrementar la cantidad de platos en ese pedido.
  };

  return (
    <PosContext.Provider
      value={{
        seleccionarCategoriaGlobal: seleccionarCategoriaGlobal,
        seleccionarMesaGlobal: seleccionarMesaGlobal,
        categoria_global: state.categoria_global,
        mesa_global: state.mesa_global,
        incrementarPlatoAPedido: incrementarPlatoAPedido,
        pedidos: state.pedidos,
        restarPlatoAPedido: restarPlatoAPedido,
      }}
    >
      {children}
    </PosContext.Provider>
  );
};

export default PosState;
