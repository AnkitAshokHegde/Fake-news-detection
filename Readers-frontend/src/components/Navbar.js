import React from "react";
import { FaHome, FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand " href="/">
        <span className="logo h1">
          <b>
            <i>NewsClick</i>
          </b>
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav sp-font h5">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/Business">
              Business
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/Entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/Health">
              Health
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/Science">
              Science
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/Sports">
              Sports
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/Tech">
              Technical
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
