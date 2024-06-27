import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";
import { LuFiles } from "react-icons/lu";
import { HashLink as Link } from 'react-router-hash-link';

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');

  // Function to handle scroll event
  const handleScroll = () => {
    const sections = ['#header', '#about', '#experience', '#services', '#portfolio', '#testimonials', '#contact'];
    const scrollPosition = window.scrollY + 150;

    for (const section of sections) {
      const element = document.querySelector(section);
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        setActiveNav(section);
      }
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <Link to="#header" className={activeNav === '#header' ? 'active' : ''}>
        <AiOutlineHome />
      </Link>
      <Link to="#about" className={activeNav === '#about' ? 'active' : ''}>
        <BiUser />
      </Link>
      <Link to="#experience" className={activeNav === '#experience' ? 'active' : ''}>
        <RiBook2Line />
      </Link>
      <Link to="#services" className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </Link>
      <Link to="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''}>
        <LuFiles />
      </Link>
      <Link to="#testimonials" className={activeNav === '#testimonials' ? 'active' : ''}>
        <MdOutlineRateReview />
      </Link>
      <Link to="#contact" className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
