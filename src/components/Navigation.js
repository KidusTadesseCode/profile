// Navigation.js
import React, { useState } from "react";
import { NavContainer } from "../styles/Navigation.Style";
import { NavLink } from "../styles/Navigation.Style";
import { MenuIcon } from "../styles/Navigation.Style";
import { MobileMenu } from "../styles/Navigation.Style";
import { FaBars, FaTimes } from "react-icons/fa";
import routes from "../routes/routes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer isOpen={isOpen}>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <MobileMenu isOpen={isOpen}>
        {routes &&
          routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </NavLink>
          ))}
      </MobileMenu>
    </NavContainer>
  );
};

export default Navigation;
