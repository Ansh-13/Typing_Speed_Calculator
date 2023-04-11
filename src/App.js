import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import SpeedTest from "./components/SpeedTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/SpeedTest" component={SpeedTest} />
        </Switch>
      </div>
    </Router>
  );
}
