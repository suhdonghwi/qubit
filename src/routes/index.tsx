import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Basic1Page from "../pages/Basic1Page";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/basic/1" exact component={Basic1Page} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
