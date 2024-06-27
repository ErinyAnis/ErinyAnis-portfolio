import "./about.css";
import ME from "../../assets/file-1.png";
import { TbAward } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <section id="about" className="colored-sec">
      <div className="container">
        <div className="main-title text-center mb-5">
          <h5>Get To know</h5>
          <h2>About Me</h2>
        </div>

        <div className="row g-5 pt-2">
          <div className="col-lg-4">
            <div className="about__me">
              <div className="about__me-img">
                <img src={ME} alt="about image" />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="about__content">
              <div className="about__cards d-flex gap-3 gap-md-4 align-items-center flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start">
                <article className="about__card">
                  <TbAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>1+ year working</small>
                </article>

                <article className="about__card">
                  <LuUsers className="about__icon" />
                  <h5>Clients</h5>
                  <small>20+ Worldwide</small>
                </article>

                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>50+ Completed</small>
                </article>
              </div>

              <p>
                As a React frontend developer, I specialize in creating
                dynamic and user-friendly web applications. With
                experience in JavaScript and a strong proficiency in React, I
                excel at building responsive and efficient interfaces. I
                continuously seek to enhance my skills and stay updated with the
                latest industry trends to ensure the delivery of exceptional
                user experiences.
              </p>
              <Link to="#contact" className="btn btn-primary">
                Let&apos;s Tack
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
