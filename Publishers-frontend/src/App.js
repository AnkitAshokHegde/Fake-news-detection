import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Publish from "./components/Publish";
import { Loading } from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { useState, useEffect } from "react";
import { NotificationContainer, NotificationManager } from "react-notifications";


export default function App() {


  const [isConnected, setisConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const checkMetaMaskConnection = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        NotificationManager.info('User connected with meta mask', 'Connected');
        console.log('User is connected to MetaMask');
        setisConnected(true);
        setWalletAddress(accounts[0]);

      } catch (error) {
        NotificationManager.error('User not connected with meta mask', 'Not connected');
        console.log('User is not connected to MetaMask');
      }
    } else {
      NotificationManager.error('Metamask not installed', 'Not connected');
      console.log('MetaMask is not installed');
    }
  };

  useEffect(() => {
    checkMetaMaskConnection();
  }, []);


  return (
    <>
      {isConnected ? <Navbar walletAccountAddress={walletAddress} /> :
        <Navbar walletAccountAddress={"Not found"} />
      }
      <Router>
        <Switch>
          <Route exact path="/">
            <NotificationContainer />
            {isConnected ?
              <Publish /> :
              <div className="m-5 d-flex flex-column justify-content-center">
                <div className="m-5 d-flex justify-content-center">
                  <h1 className="text-white ">User not connected with MetaMask</h1>
                </div>
                <div className="m-5 d-flex justify-content-center">
                  <p className="text-white">Please connect with metamask or install it if not installed</p>
                </div>
              </div>
            }
          </Route>
        </Switch>
      </Router>
    </>
  );
}
