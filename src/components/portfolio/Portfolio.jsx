import { useState } from "react";
import YASEER from "../../assets/projects/Yaseer.png";
import AIRBNB_CLONE from "../../assets/projects/airbnb-clone.png";
import TAMAYOZ from "../../assets/projects/Tamayoz.png";
import EMS from "../../assets/projects/EMS.png";
import KOSOOR from "../../assets/projects/Kosoor.png";
import TRAVEL_LOG from "../../assets/projects/TravelLog.png";
import PropTypes from "prop-types";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: KOSOOR,
    title: "Kosoor",
    github: null,
    demo: "https://kosoortest.kosoor.com.sa/admin/#/",
    description:
      "Admin dashboard for a multi-branch car wash management platform, streamlining service orders, customer tracking, subscriptions, and pricing.",
    tags: ["Vue.js", "Pinia", "Vee-Validate"],
    credentials: { username: "test_user", password: "Pos@1234" },
  },
  {
    id: 2,
    image: TRAVEL_LOG,
    title: "Travel Log",
    github: "https://github.com/ErinyAnis/travel-log.git",
    demo: "https://travel-log.vercel.app/",
    description:
      "Nuxt 4 travel journal with GitHub OAuth authentication, an interactive MapLibre map, and form validation with VeeValidate and Zod.",
    tags: ["Nuxt 4", "Pinia", "MapLibre"],
    credentials: null,
  },
  {
    id: 3,
    image: AIRBNB_CLONE,
    title: "Airbnb Clone",
    github: "https://github.com/ErinyAnis/airbnb-clone.git",
    demo: "https://airbnb-clone-two-silk.vercel.app",
    description:
      "Full-stack property rental platform with OAuth authentication, listing creation, Cloudinary image upload, and dynamic filtering.",
    tags: ["Next.js", "Prisma", "MongoDB"],
    credentials: null,
  },
  {
    id: 4,
    image: EMS,
    title: "Employee Management System",
    github: "https://github.com/ErinyAnis/Employee_management_system.git",
    demo: "https://employee-management-system-steel-alpha.vercel.app/",
    description:
      "Role-based admin and employee dashboards with full CRUD operations for employees, departments, leaves, salary, and attendance.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    credentials: { username: "admin@gmail.com", password: "admin" },
  },
  {
    id: 5,
    image: TAMAYOZ,
    title: "Tamayoz",
    github: "https://github.com/ErinyAnis/tamayoz.git",
    demo: "https://tamayoz.netlify.app/",
    description:
      "Corporate website for a Saudi consultancy, focused on performance and clean, maintainable code.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    credentials: null,
  },
  {
    id: 6,
    image: YASEER,
    title: "Yaseer",
    github: "https://github.com/ErinyAnis/yaseer.git",
    demo: "https://yaseer-puce.vercel.app/",
    description:
      "Responsive website for a Saudi tax and accounting services company.",
    tags: ["Next.js", "Bootstrap"],
    credentials: null,
  },
];

const CredentialReveal = ({ credentials }) => {
  const [revealed, setRevealed] = useState(false);

  if (!credentials) return null;

  return revealed ? (
    <div className="cred-chip">
      <span className="cred-chip-seg">{credentials.username}</span>
      <span className="cred-chip-sep">/</span>
      <span className="cred-chip-seg">{credentials.password}</span>
      <span className="cred-chip-close" onClick={() => setRevealed(false)}>
        ×
      </span>
    </div>
  ) : (
    <button className="cred-pill" onClick={() => setRevealed(true)}>
      🔑 Show demo login
    </button>
  );
};

CredentialReveal.propTypes = {
  credentials: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="main-title text-center">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio-container row g-4">
          {data.map(
            ({
              id,
              image,
              title,
              github,
              demo,
              description,
              tags,
              credentials,
            }) => (
              <div className="col-md-6 col-lg-4 d-flex" key={id}>
                <article className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} loading="lazy" />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>

                  <div className="portfolio__item-tags">
                    {tags.map((tag, i) => (
                      <span key={i} className="portfolio__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio__item-footer">
                    <CredentialReveal credentials={credentials} />

                    <div
                      className={`portfolio__item-cta ${
                        !github || !demo ? "single" : ""
                      }`}
                    >
                      {github && (
                        <a
                          href={github}
                          className="btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      {demo && (
                        <a
                          href={demo}
                          className="btn btn-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
