import "./about.css";
import ME from "../../assets/file-1.webp";
import { TbAward } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <section id="about" className="colored-sec">
      <div className="container">
        <div className="main-title text-center">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>

        <div className="row g-5 pt-2">
          <div className="col-lg-4 col-xl-3">
            <div className="about__me">
              <div className="about__me-img">
                <img src={ME} alt="Eriny Anis - Front-End Developer" />
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-xl-9">
            <div className="about__content">
              <div className="about__cards d-flex gap-3 gap-md-4 align-items-center flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start">
                <article className="about__card">
                  <TbAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>3+ Years</small>
                </article>

                <article className="about__card">
                  <LuUsers className="about__icon" />
                  <h5>Clients</h5>
                  <small>5+ Worldwide</small>
                </article>

                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>10+ Completed</small>
                </article>
              </div>

              <p>
                I&apos;m Eriny, a Front-End Developer with 3+ years of
                experience building responsive, performant web applications. I
                specialize in React, Next.js, Vue, and Nuxt, with a strong focus
                on clean code, scalable architecture, and smooth user
                experiences. I&apos;ve worked with clients across Egypt and
                Saudi Arabia, delivering everything from admin dashboards and
                reservation systems to corporate websites — always with
                attention to detail and a commitment to quality.
              </p>

              <Link to="#contact" className="btn btn-primary px-4 py-2">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
