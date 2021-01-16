import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRouter from "./modules/admin/AdminRouter";

import AuthRouter from "./modules/auth/AuthRouter";
import PosRouter from "./modules/pos/PosRouter";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pos" component={PosRouter} />
        <Route path="/auth" component={AuthRouter} />
        <Route path="/admin" component={AdminRouter} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
