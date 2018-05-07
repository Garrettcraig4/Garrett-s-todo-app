import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Todolistmaker from "./Components/Todolistmaker/Todolistmaker";
import Account from "./Components/Account/Account";
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Todolistmaker} path="/Creator" />
    <Route component={Account} path="/Account" />
  </Switch>
);
