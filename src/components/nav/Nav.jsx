import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { LuFiles } from "react-icons/lu";
import { HashLink as Link } from "react-router-hash-link";
import "./nav.css";

const navItems = [
  { to: "#header", icon: <AiOutlineHome />, label: "Home" },
  { to: "#about", icon: <BiUser />, label: "About" },
  { to: "#experience", icon: <RiBook2Line />, label: "Experience" },
  { to: "#services", icon: <RiServiceLine />, label: "Services" },
  { to: "#portfolio", icon: <LuFiles />, label: "Portfolio" },
  { to: "#contact", icon: <BiMessageSquareDetail />, label: "Contact" },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const { to } of navItems) {
        const element = document.querySelector(to);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveNav(to);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      {navItems.map(({ to, icon, label }) => (
        <Link
          key={to}
          to={to}
          className={activeNav === to ? "active" : ""}
          aria-label={label}
        >
          {icon}
          <span className="nav__tooltip">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
