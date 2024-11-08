import React from "react";
import { NavContainer, NavLink } from "../styles/Navigation";

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/tictactoe">Tic-Tac-Toe</NavLink>
      <NavLink to="/skills">Stack</NavLink>
      <NavLink to="/achievements">Achievements</NavLink>
    </NavContainer>
  );
};

export default Navigation;
