import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import "./styles.scss";

const NavBar = () => {
  const [click, setClick] = useState(false); //returns a statful value & a function to update it
  const handleClick = () => {
    setClick(!click); //react dispatch
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <img src="favicon.ico" alt="" />
          </Link>
          <ul
            className={
              click
                ? "navbar__container__menu active"
                : "navbar__container__menu"
            }
          >
            {navMenus.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  to={item.to}
                  className="navbar__container__menu__item__links"
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
