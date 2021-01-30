import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/MainPage";

import Basic1Page from "../pages/Basic1Page";
import Basic2Page from "../pages/Basic2Page";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/basic/1" exact component={Basic1Page} />
        <Route path="/basic/2" exact component={Basic2Page} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
