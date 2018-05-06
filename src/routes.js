import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Todolistmaker from "./Components/Todolistmaker/Todolistmaker";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Todolistmaker} path="/Creator" />
  </Switch>
);
