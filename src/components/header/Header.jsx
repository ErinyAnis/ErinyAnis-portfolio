import CTA from "./CTA";
import ME from "../../assets/me-1.webp";
import HeaderSocials from "./HeaderSocials";
import { HashLink as Link } from "react-router-hash-link";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__intro">
          <h5 className="header__greeting">Hello I&apos;m</h5>
          <h1 className="header__name">Eriny Anis</h1>
          <h5 className="job-title text-light">
            Front-End Developer
            <span className="tech-stack">
              React · Next.js · Vue · Nuxt · TypeScript
            </span>
          </h5>
        </div>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Eriny Anis - Front-End Developer" loading="lazy" />
        </div>

        <Link to="#contact" className="scroll__down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
