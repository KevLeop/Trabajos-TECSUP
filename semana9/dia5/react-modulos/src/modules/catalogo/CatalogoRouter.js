import React from "react";
import { Switch, Route } from "react-router-dom";
import CatalogoBusquedaScreen from "./screens/busqueda/CatalogoBusquedaScreen";
import CatalogoCarritoScreen from "./screens/carrito/CatalogoCarritoScreen";
import CatalogoHeader from "./components/CatalogoHeader";
import CatalogoProductoByIdScreen from "./screens/productoById/CatalogoProductoByIdScreen";

const CatalogoRouter = () => {
  return (
    <>
      <CatalogoHeader />
      <Switch>
        <Route path="/catalogo/busqueda" component={CatalogoBusquedaScreen} />
        <Route path="/catalogo/carrito" component={CatalogoCarritoScreen} />
        <Route
          path="/catalogo/productos/:id"
          component={CatalogoProductoByIdScreen}
        />
        <Route path="/catalogo/productos" component={CatalogoCarritoScreen} />
      </Switch>
    </>
  );
};

export default CatalogoRouter;
