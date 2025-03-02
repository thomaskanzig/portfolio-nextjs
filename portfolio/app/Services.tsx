import {ReactElement} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Service} from "@/types/Service";
import "./services.scss";

export default async function Services (): Promise<ReactElement> {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`);
   const services = await response.json();

  return (
      <section className="services">
          <div className="container">
              <h2 className="text-center">
                  Awesome Services
              </h2>

              <div className="services__description text-secondary">
                  Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
              </div>

              <div className="row">
                  {services.map((service: Service, index: number) => (
                    <div key={index} className="col-md-12 col-lg-4 mb-4 m-lg-0">
                        <div className="card border-0 p-1 rounded-4 services__card">
                            <div className="card-body">
                                <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary"/>

                                <h5 className="mt-3">
                                    {service.title}
                                </h5>

                                <p className="text-secondary">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>
  );
}