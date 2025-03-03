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
          <h5>Get To know</h5>
          <h2>About Me</h2>
        </div>

        <div className="row g-5 pt-2">
          <div className="col-lg-4 col-xl-3">
            <div className="about__me">
              <div className="about__me-img">
                <img src={ME} alt="about image" />
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-xl-9">
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
                  <small>5+ Worldwide</small>
                </article>

                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>20+ Completed</small>
                </article>
              </div>

              <p>
                Hi, I&apos;m Eriny! I&apos;m a passionate Frontend Developer with
                expertise in React, Next.js, Tailwind CSS, and Redux. I
                specialize in building responsive, user-friendly web
                applications that prioritize performance and design. With
                hands-on experience in freelancing, I&apos;ve developed solutions for
                diverse projects and am always eager to tackle new challenges.
                I&apos;m committed to continuous learning and building seamless
                digital experiences that delight users. 🚀
              </p>
              <Link to="#contact" className="btn btn-primary">
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
