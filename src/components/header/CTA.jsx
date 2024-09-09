import CV from "../../assets/Eriny-Anis-FrontEnd.pdf";
import { HashLink as Link } from "react-router-hash-link";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <Link to="#contact" className="btn btn-primary">
        Let&apos;s Talk
      </Link>
    </div>
  );
};

export default CTA;
