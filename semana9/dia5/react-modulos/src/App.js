import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRouter from "./modules/admin/AdminRouter";
import AuthRouter from "./modules/auth/screens/AuthRouter";
import CatalogoRouter from "./modules/catalogo/CatalogoRouter";
import NotFoundScreen from "./modules/home/screens/404/NotFoundScreen";
import HomeScreen from "./modules/home/screens/home/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/catalogo" component={CatalogoRouter} />
        <Route path="/admin" component={AdminRouter} />
        <Route path="/auth" component={AuthRouter} />
        <Route path="/" exact component={HomeScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
