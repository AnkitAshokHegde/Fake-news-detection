import React, { Component } from "react";
import { FaHome, FaInfo } from "react-icons/fa";
import { BrowserRouter as Link } from "react-router-dom";

import { useWeb3React } from "@web3-react/core"
import { injected } from "./wallet/connectors"

import { useState } from "react";
import { ethers } from "ethers";

  
function Navbar(props){ 

// const [walletAddress, setWalletAddress] = useState("");

  
//   async function requestAccount() {

//     console.log("Requesting accounts .....");

//     if (window.ethereum) {
//       console.log("Metamsk Detected");

//       try {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         console.log(accounts);
//         setWalletAddress(accounts[0]);
//       }
//       catch (error) {
//         console.log("Error connecting the wallet");
//       }

//     }

//     else {
//       console.log("Meta mask not detected");
//     }
//   }


  // async function connectWallet(){
  //   if(typeof window.ethereum !== 'undefined'){
  //     await requestAccount();

  //     const provider  = new ethers.BrowserProvider(window.ethereum);
  //   }
  // }
  

    return (
      <nav className="navbar navbar-expand-lg navbar-light ">

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav sp-font h5">

            <li className="nav-item mx-2">
              <a className="navbar-brand " href="/">
                {/* <span className="logo h1"><b>Articles for review</b></span> */}
                <span className="logo h1">Articles for review</span>
              </a>
            </li>
          </ul>
          <div className="d-flex flex-column justify-content-center">
            {/* <button className="btn btn-primary" onClick={requestAccount}>Connect to wallet</button> */}
            <small> Wallet adddress :</small>
            <small> {props.walletAccountAddress}</small>
          </div>

        </div>
      </nav>
    );
  
}

export default Navbar;
