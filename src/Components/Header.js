import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark navbar-main">
      <div class="container-md  d-flex ">
        <a className="navbar-brand" href="#home">
          <h1>K</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <a className="nav-link" aria-current="page" href="#home">
              Home
            </a>
            <a className="nav-link" href="#home">
              About Us
            </a>
            <a className="nav-link" href="#home">
              phone
            </a>
            <a className="nav-link" href="#home">
              Facebook
            </a>
            <a className="nav-link" href="#home">
              location
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
