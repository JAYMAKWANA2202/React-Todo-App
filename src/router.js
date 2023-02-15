import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Todo from "./pages/Todo/Todo";

export default function MainRouter() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </div>
  );
}
