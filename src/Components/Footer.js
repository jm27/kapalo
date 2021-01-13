import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
// map image
import map from "../utilities/imgs/map.png";

export default function Footer() {
  return (
    <nav className="navbar navbar-main">
      <div class="container-md  d-flex ">
        <Link className="navbar-brand" to="/">
          <h1>K</h1>
        </Link>

        <h3 className="footer-h">Need Support ?</h3>
      </div>
      <div className="justify-content-end container-md d-block text-end">
        <h4 className="footer-h">
          <i class="fas fa-phone"></i> (520)-470-7030
        </h4>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=4301+S+6th+Ave+suite+117%2C+Tucson%2C+AZ&oq=4301+S+6th+Ave+suite+117%2C+Tucson%2C+AZ&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8"
        >
          {" "}
          <Image
            imgSrc={map}
            imgClassName=" img-map"
            imgAlt="kapalo map location"
          >
            {" "}
          </Image>
        </a>

        <h4 className="footer-h">
          <i class="fas fa-map-marker-alt"></i> 4301 S 6th Ave suite 117,
          Tucson, AZ
        </h4>
        <h2 className="footer-h">
          <a
            href="https://www.facebook.com/kapalotax/"
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Check our facebook page"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </h2>
        <h2 className="footer-h">
          <a
            href="mailto:kapalotaxservices@gmail.com?Subject=Tax"
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Send us an E-mail"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </h2>
      </div>
    </nav>
  );
}
