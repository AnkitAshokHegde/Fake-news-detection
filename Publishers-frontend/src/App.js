import "./App.css";
// f59178ab70df48bc83797911eebc20d9

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Publish from "./components/Publish";
import { Loading } from "./components/Loading";
//react-router
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
