import React, { useState, useEffect } from "react";
import { getProductos } from "../services/productosService";
import ProductosContext from "./productosContext";

const ProductosState = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargandoProductos, setCargandoProductos] = useState(true);
  const [modalEditar, setModalEditar] = useState(false);
  const [productoEditar, setProductoEditar] = useState({});

  const obtenerProductos = () => {
    setCargandoProductos(true);
    getProductos().then((data) => {
      console.log("llego la data");
      console.log(data);
      setProductos(data);
      setCargandoProductos(false);
    });
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <ProductosContext.Provider
      value={{
        productos: productos,
        cargandoProductos: cargandoProductos,
        obtenerProductos: obtenerProductos,
        modalEditar: modalEditar,
        setModalEditar: setModalEditar,
        productoEditar: productoEditar,
        setProductoEditar: setProductoEditar,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosState;
