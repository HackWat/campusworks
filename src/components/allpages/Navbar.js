import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar navbar-expand-md navbar-light text-dark">
        <a className="navbar-brand">
          <img src="./images/logo.jpeg" alt="logo"></img>
          College
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-label="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto outline-none">
            <li className="nav-item active">
              <a classname="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a classname="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a classname="nav-link" href="#">
                Founders
              </a>
            </li>
            <li className="nav-item">
              <a classname="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <span className="navbar-btn">
            <button className="btn btn-outline-info">
              <Link to="/jobs">Search Now!</Link>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
