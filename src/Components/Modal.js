import React from "react";

export default function Modal() {
  return (
    <div
      class="modal"
      tabindex="-1"
      id="main-modal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title footer-h">Contact Us</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex justify-content-evenly">
            <h4 className="footer-h">
              <i class="fas fa-phone"></i> (520)-470-7030
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
                <i class="fab fac-modal fa-facebook-f"></i>
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
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
