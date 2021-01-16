import React from "react";

import {
  // See https://reacttraining.com/react-router/web/guides/quick-start for details
  HashRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import About from "./about/Router";
import Dashboard from "./dashboard/Router";

const ROUTES = [
  // {path: '', component: RouterComponent, [exact]}
  { path: "/about", component: About },
  { path: "/dashboard", component: Dashboard, exact: true }
];

export default function Router(props) {
  return (
    <HashRouter>
      <Switch>
        {ROUTES.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Redirect to="/dashboard" />
      </Switch>
    </HashRouter>
  );
}
