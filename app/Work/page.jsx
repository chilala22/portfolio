import React from "react";

const Work = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className=""></div>
            <div className="col-span-8">
              <div className="text-gray-50">
                <p className="text-7xl font-semibold p-8 ">01</p>
                <p className="text-3xl font-bold">
                  A movie recommendation system (Web Application) — Thesis
                  project
                </p>
                <p className="py-2 font-thin">
                  Developed of a recommendation system for selecting movies of
                  interest for users as a final project in university. The
                  interface of the recommendation system is localized in form of
                  a web application, utilizing web technologies and tools to
                  create a seamless experience for its users, showcasing ability
                  create a comprehensive and functional recommendation system,
                  blending user-focused design with back-end functionality.
                  Demonstrated proficiency in full-stack development and
                  capacity to tackle complex projects from concept to
                  completion. This project not only served as a successful final
                  year project but also highlighted my skills in creating
                  real-world applications that caters the end-users.
                </p>
                <p className="py-2 font-light">PYTHON, HTML, CSS, JAVASCRIPT</p>
              </div>
            </div>

            {/* <div className="col-span-5 ">
              <div className="m-4">
                <div className="w-3/4 rounded-md ">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div> */}

            <div className=""></div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
            <div className="grid grid-cols-12 gap-4">
              <div className=""></div>
              <div className="col-span-8">
                <div className="text-gray-50 p-4">
                  <p className="text-7xl font-semibold p-4 ">02</p>
                  <p className="text-3xl font-bold">
                    Students Information System
                  </p>
                  <p className="py-2 font-thin">
                    Developed a comprehensive Student information System,
                    integrating front-end and back-end technologies to create an
                    efficient and user friendly application
                  </p>
                  <p className="py-2 font-light">HTML, CSS, PHP</p>
                </div>
              </div>

              {/* <div className="col-span-5 ">
                <div className="m-4">
                  <div className="w-3/4 rounded-md ">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div> */}

              <div className=""></div>
            </div>
        
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className=""></div>
            <div className="col-span-8">
              <div className="text-gray-50 p-4">
                <p className="text-7xl font-semibold p-4 ">03</p>
                <p className="text-3xl font-bold">
                  Systems of linear equations using the Jacobi method
                </p>
                <p className="py-2 font-thin">
                  Successfully designed and implemented a parallel program to
                  solve a system of linear equations using the jacobi method,
                  demonstrating expertise in algorithm optimization and parallel
                  computing. </p>
                  <p className="py-2 font-thin">
                   Achieved significant performance improvements
                  through parallelization, enabling faster processing of systems
                  of linear equations for large datasets
                </p>
                <p className="py-2 font-light">C++, OpenMP</p>
              </div>
            </div>

            {/* <div className="col-span-5 ">
              <div className="m-4">
                <div className="w-3/4 rounded-md ">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div> */}

            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 ">
        <a href="#item1" className="btn btn-sm">
          1
        </a>
        <a href="#item2" className="btn btn-sm">
          2
        </a>
        <a href="#item3" className="btn btn-sm">
          3
        </a>
      </div>
    </div>
  );
};

export default Work;
