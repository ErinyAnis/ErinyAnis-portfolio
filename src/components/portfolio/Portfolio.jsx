import IMG_BG from "../../assets/projects-bg.jpg";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG_BG,
    title: "Project-1",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 2,
    image: IMG_BG,
    title: "Project-2",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 3,
    image: IMG_BG,
    title: "Project-3",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 4,
    image: IMG_BG,
    title: "Project-4",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 5,
    image: IMG_BG,
    title: "Project-5",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 6,
    image: IMG_BG,
    title: "Project-6",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="main-title text-center">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio-container row g-4">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <div className="col-md-6 col-lg-4" key={id}>
                <article className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, animi.</p>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target="_blank">
                      Github
                    </a>
                    <a href={demo} className="btn btn-primary" target="_blank">
                      Live Demo
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
