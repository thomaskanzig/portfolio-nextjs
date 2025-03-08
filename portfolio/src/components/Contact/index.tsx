import {ReactElement} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./contact.scss";
import {faPhone, faEnvelope, faMap, faPaperPlane} from "@fortawesome/free-solid-svg-icons";

export default function Contact (): ReactElement {

  return (
      <section className="contact">
          <div className="container">
              <h2 className="text-center">
                  Contact Me
              </h2>

              <div className="services__description text-secondary">
                  Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web
                  projects.
              </div>

              <div className="row mt-5">
                  <div className="col-12 col-md-4 text-center">
                      <FontAwesomeIcon icon={faPhone} size="2x" className="mb-3"/>
                      <h3>Phone</h3>
                      <p className="text-secondary">
                          Promising development turmoil inclusive education transformative community
                      </p>
                      <a href={"tel:+436601247499"} className="text-decoration-none">+43 660 124 74 99</a>
                  </div>

                  <div className="col-12 col-md-4 text-center">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" className="mb-3"/>
                      <h3>Email</h3>
                      <p className="text-secondary">
                          Promising development turmoil inclusive education transformative community
                      </p>
                      <a href={"mailto:contact@thomaskanzig.com"}
                         className="text-decoration-none">contact@thomaskanzig.com</a>
                  </div>

                  <div className="col-12 col-md-4 text-center">
                      <FontAwesomeIcon icon={faMap} size="2x" className="mb-3"/>
                      <h3>Location</h3>
                      <p className="text-secondary">
                          Vienna, Austria
                      </p>
                      <a href={"https://maps.app.goo.gl/95aGi3QR9tKpXCA38"} className="text-decoration-none">
                          View on Google map
                      </a>
                  </div>
              </div>

              <form>
                  <div className="row mt-5">
                      <div className="col-12 col-md-6">
                          <div className="w-100">
                              <input
                                  type="text"
                                  className="form-control contact__input"
                                  placeholder="Name:"
                              />
                          </div>

                          <div className="w-100">
                              <input
                                  type="text"
                                  className="form-control contact__input"
                                  placeholder="Email:"
                              />
                          </div>

                          <div className="w-100">
                              <input
                                  type="text"
                                  className="form-control contact__input"
                                  placeholder="Subject:"
                              />
                          </div>
                      </div>

                      <div className="col-12 col-md-6">
                          <textarea
                              className="form-control contact__textarea"
                              placeholder="Your message:"
                              rows={6}
                          ></textarea>
                      </div>

                      <div className="col-12 d-flex mt-4">
                          <button type="submit" className="btn btn-primary btn-lg ms-auto text-wrap">
                              <FontAwesomeIcon icon={faPaperPlane} className="me-1"/> Send Message
                          </button>
                      </div>
                  </div>
              </form>
          </div>
      </section>
  )
}