import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/eriny-anis"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/ErinyAnis"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <GrGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
