import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark navbar-main">
      <div class="container-md  d-flex ">
        <Link className="navbar-brand" to="/">
          <h1>K</h1>
        </Link>
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
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
            <a
              className="nav-link"
              href="tel:520-470-7030"
              target="_blank"
              rel="noopener noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Give us a call"
            >
              <i class="fas fa-phone"></i>
            </a>
            <a
              className="nav-link"
              href="https://www.facebook.com/kapalotax/"
              target="_blank"
              rel="noopener noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Check our facebook page"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              className="nav-link"
              href="mailto:kapalotaxservices@gmail.com?Subject=Tax"
              target="_blank"
              rel="noopener noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Send us an E-mail"
            >
              <i class="fas fa-at"></i>
            </a>
            <a
              className="nav-link"
              href="https://www.google.com/search?q=4301+S+6th+Ave+suite+117%2C+Tucson%2C+AZ&oq=4301+S+6th+Ave+suite+117%2C+Tucson%2C+AZ&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Visit us "
            >
              <i class="fas fa-map-marker-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
