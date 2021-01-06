import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Clientes from "./screens/Clientes";
import Nosotros from "./screens/Nosotros";
import Proyectos from "./screens/Proyectos";
// yarn add react-router-dom
const App = () => {
  return (
    <BrowserRouter>
      <div>
        Algunos enlaces
        <ul>
          <li>
            <Link to="/nosotros"> Nosotros </Link>
          </li>
          <li>
            <Link to="/clientes"> Clientes </Link>
          </li>
          <li>
            <Link to="/proyectos"> Proyectos </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/proyectos" component={Proyectos} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
