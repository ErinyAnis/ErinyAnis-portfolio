import { HiOutlineCheckCircle } from "react-icons/hi";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="main-title text-center">
          <h5>The Skills I Have</h5>
          <h2>My Experience</h2>
        </div>

        <div className="experience__container">
          <div>
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small>Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Next</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Redux & Redux toolkit</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>React Query</h4>
                  <small>Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>JQuery</h4>
                  <small>Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>EcmaScript 6</h4>
                  <small>Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>JacaScript</h4>
                  <small>Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small>Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <HiOutlineCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
