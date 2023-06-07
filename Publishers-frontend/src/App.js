import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Publish from "./components/Publish";
import { Loading } from "./components/Loading";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'



export default function App(){
   
    return (
      <>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Publish />
            </Route>
          </Switch>
        </Router>             
      </>
    );
}
