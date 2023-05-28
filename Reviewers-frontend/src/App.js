import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Loading } from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <News key={"general"} pageSize={9} country="in" category="general" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
