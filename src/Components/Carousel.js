import React from "react";
import CarouselItem from "./CarouselItem";

// Images
import famOne from "../utilities/imgs/family-1.jpg";
import famTwo from "../utilities/imgs/family-2.jpg";
import famThree from "../utilities/imgs/family-3.jpg";

export default function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide mt-5"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <CarouselItem
          carouselClass="carousel-item active"
          imgSrc={famOne}
          imgAlt="Kapalo tax family review"
          imgClassName="mx-auto d-block carousel-img rounded-circle"
          label="Susan Clarke"
          text="I’ve received better support, bigger refunds, and better peace of mind with Kapalo. Also, the live help is amazing so I don't feel alone when I have a question!
          Thanks again Kapalo."
        ></CarouselItem>
        <CarouselItem
          imgSrc={famTwo}
          imgAlt="Kapalo tax family review"
          imgClassName="mx-auto d-block carousel-img rounded-circle"
          label="Jason Mora"
          text="It removes all the anxiety behind tax season knowing I can do this myself with the confidence of it being quick, accurate, maximized, and plain done right.
           Highly recommended!"
        ></CarouselItem>
        <CarouselItem
          imgSrc={famThree}
          imgAlt="Kapalo tax family review"
          imgClassName="mx-auto d-block carousel-img rounded-circle"
          label="Marc Moon"
          text="Kapalo has the best tax experts in town, 
        I got the best return I've ever had.  Excellent service strongly recommended! is simply the best way to do taxes stress-free and securely."
        ></CarouselItem>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleDark"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleDark"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}
