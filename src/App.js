import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects"
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="prof_portfolio/" component={Main} />
          <Route exact path="prof_portfolio/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;