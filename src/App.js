import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects"
import Nav from "./components/Nav";

function App() {
  return (
    <Router basename="/">
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;