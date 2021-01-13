import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminClientesScreen from "./screens/clientes/AdminClientesScreen";
import AdminProductosScreen from "./screens/productos/AdminProductosScreen";
import AdminHeader from "./components/AdminHeader";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/productos" component={AdminProductosScreen} />
        <Route path="/admin/clientes" component={AdminClientesScreen} />
      </Switch>
    </>
  );
};

export default AdminRouter;
