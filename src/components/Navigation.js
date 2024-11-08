// Navigation.js
import React, { useState } from "react";
import { NavContainer } from "../styles/Navigation.Style";
import { NavLink } from "../styles/Navigation.Style";
import { MenuIcon } from "../styles/Navigation.Style";
import { MobileMenu } from "../styles/Navigation.Style";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/resume" onClick={() => setIsOpen(false)}>
          Resume
        </NavLink>
        <NavLink to="/tictactoe" onClick={() => setIsOpen(false)}>
          Tic-Tac-Toe
        </NavLink>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>
          Stack
        </NavLink>
        <NavLink to="/achievements" onClick={() => setIsOpen(false)}>
          Achievements
        </NavLink>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navigation;
