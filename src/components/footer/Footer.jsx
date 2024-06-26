import { HashLink as Link } from "react-router-hash-link";
import { GrFacebookOption } from "react-icons/gr";

import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to="#header" className="footer__logo">
          Eriny Anis
        </Link>

        <ul className="permalinks">
          <li>
            <Link to="#header">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#experience">Experience</Link>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
          <li>
            <Link to="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="#contact">Conntact</Link>
          </li>
        </ul>

        <div className="footer__socials">
          <Link to="https://www.facebook.com/eriny.anis/" target="_blank">
            <GrFacebookOption />
          </Link>
          <Link to="https://linkedin.com/in/eriny-anis" target="_blank">
            <BsLinkedin />
          </Link>
          <Link to="https://github.com/ErinyAnis" target="_blank">
            <GrGithub />
          </Link>
        </div>

        <div className="footer__copyright">
          <small>&copy; Eriny Anis. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
