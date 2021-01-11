import React from "react";

export default function Button({ text = "Make appointment" }) {
  return (
    <button type="button" className="btn btn-outline-primary btn-lg main-btn">
      {text}
    </button>
  );
}
