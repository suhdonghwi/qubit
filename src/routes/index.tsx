import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/MainPage";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
