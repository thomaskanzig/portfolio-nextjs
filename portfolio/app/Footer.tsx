import {ReactElement} from "react";
import "./footer.scss";

export default function Footer (): ReactElement {
  return (
      <footer className="mt-auto bg-body-tertiary">
          <div className="bg-light py-5">
              <div className="container text-center">
                  <h5>
                      Thomas Känzig
                  </h5>

                  <p>
                      Obviously I'm a Software Engineer. Experienced with all stages of the development cycle for dynamic web projects.
                  </p>
              </div>
          </div>

          <div className="bg-black text-white py-3">
              <div className="container text-center">
                  <span>
                     © 2025 Thomas Känzig. Design by myself
                  </span>
              </div>
          </div>
      </footer>
  );
}