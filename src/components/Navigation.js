// Navigation.js
import React, { useState } from "react";
import {
  NavContainer,
  NavLink,
  MenuIcon,
  MobileMenu,
} from "../styles/Navigation.Style";
import { FaBars, FaTimes } from "react-icons/fa";
import routes from "../routes/routes";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
              isActive={location.pathname === route.path}
            >
              {route.name}
            </NavLink>
          ))}
      </MobileMenu>
    </NavContainer>
  );
};

export default Navigation;
