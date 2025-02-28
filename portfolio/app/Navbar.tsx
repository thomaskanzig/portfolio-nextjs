import {ReactElement} from "react";

export default function Navbar (): ReactElement {
  return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container">
              <a className="navbar-brand" href="#">Känzig</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse"
                      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#">HOME</a>
                      </li>
                      <li className="nav-item ms-4">
                          <a className="nav-link" aria-current="page" href="#">SERVICES</a>
                      </li>
                      <li className="nav-item ms-4">
                          <a className="nav-link" aria-current="page" href="#">RESUME</a>
                      </li>
                      <li className="nav-item ms-4">
                          <a className="nav-link" aria-current="page" href="#">PROJECTS</a>
                      </li>
                      <li className="nav-item ms-4">
                          <a className="nav-link" aria-current="page" href="#">CONTACT</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}