import React from "react";

export default function Card({
  title = " Hello ",
  cardText = "word",
  imgSrc,
  imgAlt,
  imgClassName = "card-img-top",
}) {
  return (
    <div className="card h-100">
      <img src={imgSrc} className={imgClassName} alt={imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{cardText}</p>
      </div>
    </div>
  );
}
