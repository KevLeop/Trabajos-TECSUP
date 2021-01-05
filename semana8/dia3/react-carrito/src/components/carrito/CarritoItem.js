import React from "react";

const CarritoItem = ({ objProducto, setCarrito }) => {
  const eliminarItem = () => {
    setCarrito((prevState) => {
      let carritoNuevo = prevState.filter((prod) => {
        if (prod.prod_id !== objProducto.prod_id) {
          return prod;
        }
      });
      return carritoNuevo;
    });
  };
  return (
    <div className="carrito-item">
      <img src={objProducto.prod_img} alt="" width="25" />
      <small>{objProducto.prod_nom}</small>
      <small>S/{objProducto.prod_pre * objProducto.cant}</small>
      <small>({objProducto.cant})</small>

      <button
        className="btn btn-outline-danger btn-eliminar"
        onClick={eliminarItem}
      >
        <i className="fas fa-trash    "></i>
      </button>
    </div>
  );
};

export default CarritoItem;
