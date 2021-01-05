import React from "react";
import CarritoItem from "./CarritoItem";

const Carrito = ({ carrito = [], setCarrito }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title text-center">Carrito de compras</h4>
      </div>
      <div className="card-body">
        {carrito.length === 0 ? (
          <p>
            <i className="fas fa-sad-cry mr-3">Tu carrito está vacío</i>
          </p>
        ) : (
          carrito.map((objProducto, i) => {
            return (
              <CarritoItem
                objProducto={objProducto}
                key={objProducto.prod_id}
                setCarrito={setCarrito}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Carrito;
