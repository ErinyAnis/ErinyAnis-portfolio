// import VS from "../../assets/projects/VS.png";
// import IC from "../../assets/projects/IC.png";
import YASEER from "../../assets/projects/Yaseer.png";
import MINA_HEMAIA from "../../assets/projects/mena_hemaia.png";
import AIRBNB_CLONE from "../../assets/projects/airbnb-clone.png";
import SHOPPERS from "../../assets/projects/shoppers.png";
import TAMAYOZ from "../../assets/projects/Tamayoz.png";
import CHAT from "../../assets/projects/Chat.png";

// import IMG_BG from "../../assets/projects-bg.jpg";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: TAMAYOZ,
    title: "Tamayoz",
    github: "https://github.com/ErinyAnis/tamayoz.git",
    demo: "https://tamayoz.netlify.app/",
    description:
      "Freelance project developing a corporate website for a Saudi consultancy using TypeScript, Next.js, and Tailwind CSS to build Tamayoz with clean code and high performance.",
  },

  {
    id: 2,
    image: AIRBNB_CLONE,
    title: "Airbnb Clone",
    github: "https://github.com/ErinyAnis/airbnb-clone.git",
    demo: "https://escapenest.netlify.app/",
    description:
      "Developed an Airbnb clone using Next.js, TypeScript, Tailwind CSS, Prisma, and MongoDB. The application features a responsive UI, user authentication, property listings, and dynamic filtering, offering a seamless booking experience.",
  },
  {
    id: 3,
    image: YASEER,
    title: "Yaseer",
    github: "https://github.com/ErinyAnis/yaseer.git",
    demo: "https://yaseer-puce.vercel.app/",
    description:
      "Yaseer is a leading Saudi establishment providing accounting and tax services to companies and organizations.",
  },
  {
    id: 4,
    image: SHOPPERS,
    title: "E-commerce",
    github: "https://github.com/ErinyAnis/e-commerce.git",
    demo: "https://shoppers-one.vercel.app/",
    description:
      "Developed an e-commerce platform using Next.js, TypeScript, Tailwind CSS, and Redux Toolkit. Key features include a dynamic product catalog, advanced search, real-time shopping cart updates, and secure Stripe payments, with content management via Sanity and backend support from Firebase.",
  },
  {
    id: 5,
    image: CHAT,
    title: "Real-Time Chat Application",
    github: "https://github.com/ErinyAnis/chat-app.git",
    demo: "https://chat-app-alpha-roan.vercel.app/",
    description:
      "Built a real-time chat app using React, Tailwind CSS, Socket.io, and Axios for instant messaging. Integrated Socket.io for real-time communication, Axios for API handling, and designed a responsive UI for a seamless user experience",
  },
  {
      id: 6,
      image: MINA_HEMAIA,
      title: "mena Hemaia",
      github: "https://github.com/ErinyAnis/MealsApp.git",
      demo: "https://mena-hemaia.vercel.app/",
      description:
        "Built a portfolio website for finance expert Mena Hemaia, highlighting his roles, qualifications, and commitment to financial education.",
    },

  // {
  //   id: 5,
  //   image: VS,
  //   title: "Visual Studio Clone",
  //   github: "https://github.com/ErinyAnis/visual-studio-clone.git",
  //   demo: "https://visual-studio-clone-two.vercel.app/",
  //   description:
  //     "Recreated Visual Studio using React and TypeScript, showcasing interactive features and customizable UI.",
  // },
  //
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
                    <img src={image} alt={title} loading="lazy" />
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
