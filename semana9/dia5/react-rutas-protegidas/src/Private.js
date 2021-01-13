import React from "react";
import { Redirect, Route } from "react-router-dom";

const Private = ({ path, component: Component }) => {
  const pasar = false;
  return pasar ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

export default Private;
