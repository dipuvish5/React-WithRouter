import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Users from "./User";
import Login from "./Login";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
