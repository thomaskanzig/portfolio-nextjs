'use client';

import {ReactElement, useRef} from "react";
import "./navigation.scss";
import useWindowScrollListener from "@/src/hook/useWIndowScrollListener";

export default function Navigation (): ReactElement {
  const navigationRef = useRef(null);

  const notTopOfPageHandler = () => {
      const navigationElement = navigationRef.current as HTMLElement | null;

      if (!navigationElement){ return; }

      navigationElement.classList.add('navbar-black', 'bg-white');
      navigationElement.classList.remove('navigation--transparent');
  }

    const topOfPageHandler = () => {
        const navigationElement = navigationRef.current as HTMLElement | null;

        if (!navigationElement){ return; }

        navigationElement.classList.add('navigation--transparent');
        navigationElement.classList.remove('navbar-black', 'bg-white');
    }

  useWindowScrollListener(null,
      notTopOfPageHandler,
      topOfPageHandler
  );

  return (
      <nav
          className="navbar navbar-expand-md fixed-top navigation navigation--transparent"
          ref={navigationRef}
      >
          <div className="container">
              <a className="navbar-brand navigation__brand" href="#">Känzig</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse"
                      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                          <a className="nav-link navigation__link" aria-current="page" href="#">HOME</a>
                      </li>
                      <li className="nav-item ms-4">
                          <a className="nav-link navigation__link" aria-current="page" href="#">SERVICES</a>
                      </li>
                      <li className="nav-item ms-4">
                          <a className="nav-link navigation__link" aria-current="page" href="#">RESUME</a>
                      </li>
                      <li className="nav-item ms-4">
                          <a className="nav-link navigation__link" aria-current="page" href="#">PROJECTS</a>
                      </li>
                      <li className="nav-item ms-4">
                          <a className="nav-link navigation__link" aria-current="page" href="#">CONTACT</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}