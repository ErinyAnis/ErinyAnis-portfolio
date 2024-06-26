import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me-1.png";
import HeaderSocials from "./HeaderSocials";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div>
          <h5>Hello I&apos;m</h5>
          <h1>Eriny Anis</h1>
        </div>
        <h5 className="job-title text-light">FrontEnd developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <Link to="#contact" className="scroll__down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
