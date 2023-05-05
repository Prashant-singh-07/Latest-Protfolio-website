import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="NavigationBar_NavigationBarUL__2576y">
        <li>
          <NavLink
            aria-current="page"
            className="NavigationBar_NavLink__gjcCz active a-dost"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavigationBar_NavLink__gjcCz a-dost"
            to="/project"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavigationBar_NavLink__gjcCz a-dost"
            to="/experience"
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavigationBar_NavLink__gjcCz a-dost"
            to="/education"
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink className="NavigationBar_NavLink__gjcCz a-dost" to="#">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
