import {ReactElement} from "react";
import "./intro.scss";

export default function Intro (): ReactElement {
  return (
      <section className="intro">
          <div className="container intro__container shadow-sm">
              <div className="row">
                  <div className="col-md-12 col-lg-4">
                      <div className="intro__personal-detail">
                          <h5>Personal Details</h5>
                          <p className="text-muted mb-1 mt-3">Email: thomas.kanzig@gmail.com</p>
                          <p className="text-muted mb-1 mt-0">Languages: English, German & Portuguese</p>
                          <p className="text-muted mb-1 mt-0">Nationality: Swiss</p>
                      </div>
                  </div>

                  <div className="col-md-12 col-lg-8 mt-4 mt-lg-0">
                      {/* TODO: This title should be animated by changing multiple text. */}
                      <h4 className="mb-3">I am Fullstack Web Developer</h4>

                      <p className="text-secondary">
                          I’m a passionate Full-Stack Developer who thrives on challenges and continuous learning. I specialize in Next.js, React, React Native, and Symfony, building scalable, high-performance applications. Passionate about automation testing, I use PHPUnit and Playwright for reliability.
                      </p>
                  </div>
              </div>
          </div>
      </section>
  );
}