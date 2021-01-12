import React from "react";
import Card from "./Card";

export default function CardGroup({ cardGroupTitle = "", children }) {
  return (
    <>
      <h1 className="m-4">{cardGroupTitle}</h1>
      <div className="row card-group">{children}</div>
    </>
  );
}
