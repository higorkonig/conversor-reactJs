import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";

function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contato" component={Contato} />
    </Switch>
  );
}

export default Routes;
