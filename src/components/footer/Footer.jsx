import { HashLink as Link } from "react-router-hash-link";
import { BsLinkedin } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";

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
            <Link to="#skills">Skills</Link>
          </li>
          <li>
            <Link to="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://linkedin.com/in/eriny-anis"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://wa.me/201227523105"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <SiWhatsapp />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Eriny Anis. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
