import {ReactElement} from "react";

export default function Projects (): ReactElement {

   const projects = [
    {
      title: "Web Development",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Mobile Development",
        imageUrl: "https://via.placeholder.com/150",
    },
    {

      title: "Automation Testing",
        imageUrl: "https://via.placeholder.com/150",
    }
    ];

  return (
      <section className="w-100 py-5">
          <div className="container">
              <h2 className="text-center">
                  My Work & Portfolio
              </h2>

              <p className="text-center">
                  Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
              </p>

              <div className="row">
                  {projects.map((project: {title: string, imageUrl: string}, index: number) => (
                    <div key={index} className="col-md-12 col-lg-4 mb-4 m-lg-0">
                        <div className="card">

                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>
  );
}