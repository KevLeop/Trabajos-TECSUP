import React, { useState } from "react";
import CarritoContext from "./carritoContext";

const CarritoState = ({ children }) => {
  const [cantidad, setCantidad] = useState(15);
  return (
    <div>
      <CarritoContext.Provider
        value={{ cantidad: cantidad, setCantidad: setCantidad }}
      >
        {children}
      </CarritoContext.Provider>
    </div>
  );
};

export default CarritoState;
