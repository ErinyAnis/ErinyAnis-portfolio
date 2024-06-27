import { RxCheck } from "react-icons/rx";

import "./services.css";

const Services = () => {
  return (
    <section id="services" className="colored-sec">
      <div className="container">
        <div className="main-title text-center">
          <h5>What I Offer</h5>
          <h2>Services</h2>
        </div>

        <div className="services__container row g-4 justify-content-center">
          <div className="col-lg-4">
            <article className="service">
              <div className="service__head">
                <h3> Custom Web Development</h3>
              </div>

              <ul className="service__list">
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Responsive Design</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>SEO Optimization</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Performance Optimization</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Cross-Browser Compatibility</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>ASingle Page Applications (SPAs)</p>
                </li>
              </ul>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="service">
              <div className="service__head">
                <h3>React Development</h3>
              </div>

              <ul className="service__list">
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Custom Components</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>State Management with Redux</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>React Hooks</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Implementing Form Handling and Validation</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Routing with React Router</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Data Fetching with React Query</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Server-Side Rendering (Next.js)</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Code Splitting and Lazy Loading</p>
                </li>
              </ul>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="service">
              <div className="service__head">
                <h3>Frontend Development Services</h3>
              </div>

              <ul className="service__list">
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>HTML5, CSS3, and JavaScript</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Responsive Layouts with Flexbox and Grid</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Version Control with Git and GitHub</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Integration with RESTful APIs</p>
                </li>
                <li>
                  <div>
                    <RxCheck className="service__list-icon" />
                  </div>
                  <p>Building Reusable Components</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
