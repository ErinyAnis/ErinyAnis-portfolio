import { HashLink as Link } from "react-router-hash-link";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <Link to="https://linkedin.com/in/eriny-anis" target="_blank"><BsLinkedin /></Link>
        <Link to="https://github.com/ErinyAnis" target="_blank"><GrGithub /></Link>
    </div>
  )
}

export default HeaderSocials