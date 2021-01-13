import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthLoginScreen from "./login/AuthLoginScreen";
import AuthRegisterScreen from "./register/AuthRegisterScreen";

const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/auth/login" component={AuthLoginScreen} />
        <Route path="/auth/register" component={AuthRegisterScreen} />
      </Switch>
    </>
  );
};

export default AuthRouter;
