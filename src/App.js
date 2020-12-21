/** @format */
import React from "react";
import "./App.css";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/class">
            <Screen2 />
          </Route>
          <Route path="/">
            <Screen1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
