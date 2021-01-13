import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactoScreen from "./home/ContactoScreen";
import HomeScreen from "./home/HomeScreen";
import NosotrosScreen from "./home/NosotrosScreen";
import Private from "./Private";
import AdminScreen from "./screens/admin/AdminScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contacto" component={ContactoScreen} />
        <Route path="/nosotros" component={NosotrosScreen} />
        <Private path="/admin" component={AdminScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
