import React, { Component } from "react";
import { FaHome, FaInfo } from "react-icons/fa";
import { BrowserRouter as Link } from "react-router-dom";

import { useWeb3React } from "@web3-react/core"
import { injected } from "./wallet/connectors"

import { useState } from "react";
import { ethers } from "ethers";
  
function Navbar(props){ 

    return (
      <nav className="navbar navbar-expand-lg navbar-light ">

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav sp-font h5">

            <li className="nav-item mx-2">
              <a className="navbar-brand " href="/">
                {/* <span className="logo h1"><b>Articles for review</b></span> */}
                <span className="logo h1">Publish the article</span>
              </a>
            </li>
          </ul>
          <div className="d-flex flex-column">
            {/* <button className="btn btn-primary" onClick={requestAccount}>Connect to wallet</button> */}
            <small> Wallet adddress :</small>
            <small> {props.walletAccountAddress}</small>
          </div>

        </div>
      </nav>
    );
  
}

export default Navbar;
