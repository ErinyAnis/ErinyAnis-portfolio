import VS from "../../assets/projects/VS.png";
import IC from "../../assets/projects/IC.png"
import FOODIES from "../../assets/projects/foodies.png";
// import IMG_BG from "../../assets/projects-bg.jpg";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: VS,
    title: "Visual Studio Clone",
    github: "https://github.com/ErinyAnis/visual-studio-clone.git",
    demo: "https://visual-studio-clone-two.vercel.app/",
    description: "Recreated Visual Studio using React and TypeScript, showcasing interactive features and customizable UI."
  },
  {
    id: 2,
    image: IC,
    title: "International Contractors",
    github: "https://github.com/ErinyAnis/international-contractors.git",
    demo: "https://intcot.com/",
    description: "Developed a responsive, user-friendly website for IC company, leveraging 30+ years of industry expertise in Egyptian ports. Utilized HTML5, CSS3, Bootstrap 5, and jQuery for seamless navigation and interactive features."
  },
  {
    id: 3,
    image: FOODIES,
    title: "Foodies Community",
    github: "https://github.com/ErinyAnis/MealsApp.git",
    demo: "https://meals-app-weld-zeta.vercel.app/",
    description: "Built a dynamic foodies community platform with Next.js, enabling users to explore and share recipes. The project features a clean, user-friendly interface and fosters collaboration among food enthusiasts."
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
          {data.map(({ id, image, title, github, demo, description }) => {
            return (
              <div className="col-md-6 col-lg-4" key={id}>
                <article className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
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
