import {ReactElement} from "react";
import "./header.scss";
import Image from "next/image";

export default function Header (): ReactElement {
  return (
      <section className="header">
          <div className="header__gradient"/>

          <div className="container header__container">
              <Image
                  src="/img/thomas_kanzig.jpg"
                  alt="Thomas Känzig"
                  width={208}
                  height={208}
                  className="header__profile-picture"
              />

              <h1 className="text-white mt-3">
                  Here I'am Thomas Känzig
              </h1>

              <p className="text-white">
                  I'm a Passionate Software Engineer
              </p>

              <div>
                  <button className="btn btn-primary">
                      Hire me
                  </button>

                  <button className="btn btn-primary ms-2">
                      Download CV
                  </button>
              </div>
          </div>
      </section>
  );
}