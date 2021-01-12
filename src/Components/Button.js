import React from "react";

export default function Button({
  text = "Make appointment",
  dataToggle = "modal",
  dataTarget = "#main-modal",
}) {
  return (
    <button
      type="button"
      className="btn btn-outline-primary btn-lg main-btn"
      data-bs-toggle={dataToggle}
      data-bs-target={dataTarget}
    >
      {text}
    </button>
  );
}
