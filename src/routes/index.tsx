import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/MainPage";
import BasicPage from "../pages/BasicPage";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/basics" exact component={BasicPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
