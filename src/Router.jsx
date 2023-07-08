import React from "react";
import { Route, Switch } from "react-router-dom";
import TriviaApp from "./pages/TriviaApp";
import Chuck from "./pages/Chuck";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <TriviaApp />
      </Route>
      <Route path="/chuck">
        <Chuck />
      </Route>
    </Switch>
  );
}

/* // redux trivia */
