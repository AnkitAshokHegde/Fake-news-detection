import "./App.css";
// f59178ab70df48bc83797911eebc20d9

import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Loading } from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <News key={"general"} pageSize={9} country="in" category="general" />
          </Route>
          <Route exact path="/Business">
            <News key={"business"} pageSize={9} country="in" category="business" />
          </Route>
          <Route exact path="/Science">
            <News key={"science"} pageSize={9} country="in" category="science" />
          </Route>
          <Route exact path="/Entertainment">
            <News key={"entertainment"} pageSize={9} country="in" category="entertainment" />
          </Route>
          <Route exact path="/Sports">
            <News key={"sports"} pageSize={9} country="in" category="sports" />
          </Route>
          <Route exact path="/Tech">
            <News key={"tech"} pageSize={9} country="in" category="technology" />
          </Route>
          <Route exact path="/Health">
            <News key={"health"} pageSize={9} country="in" category="health" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
