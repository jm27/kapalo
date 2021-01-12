import React from "react";
import Image from "./Image";
import Stars from "./Stars";

export default function CarouselItem({
  carouselClass = "carousel-item",
  imgSrc,
  imgAlt,
  imgClassName,
  label,
  text,
}) {
  return (
    <>
      <div className={carouselClass}>
        <div class="container">
          <div class="row">
            <div class="col align-self-center">
              <div className="card h-100">
                <Image
                  imgSrc={imgSrc}
                  imgClassName={imgClassName}
                  imgAlt={imgAlt}
                />
                <div className="card-body">
                  <h5>{label}</h5>
                  <Stars></Stars>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// // "mx-auto d-block carousel-img rounded-circle"
// Kapalo has the best tax experts in town, I got the best
//                     // return I've ever had excellent service strongly recommended!
