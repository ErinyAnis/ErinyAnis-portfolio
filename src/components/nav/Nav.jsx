import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from "react";

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');

  return (
    <nav>
      <Link to="#header"  onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>
        <AiOutlineHome />
      </Link>
      <Link to="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <BiUser />
      </Link>
      <Link to="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <RiBook2Line />
      </Link>
      <Link to="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </Link>
      <Link to="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
