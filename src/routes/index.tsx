import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/MainPage";

import Basic1Page from "../pages/Basic1Page";
import Basic2Page from "../pages/Basic2Page";
import Principle1Page from "../pages/Principle1Page";
import Principle2Page from "../pages/Principle2Page";
import Principle3Page from "../pages/Principle3Page";
import Myth1Page from "../pages/Myth1Page";
import Myth2Page from "../pages/Myth2Page";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/basic/1" exact component={Basic1Page} />
        <Route path="/basic/2" exact component={Basic2Page} />
        <Route path="/principle/1" exact component={Principle1Page} />
        <Route path="/principle/2" exact component={Principle2Page} />
        <Route path="/principle/3" exact component={Principle3Page} />
        <Route path="/myth/1" exact component={Myth1Page} />
        <Route path="/myth/2" exact component={Myth2Page} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
