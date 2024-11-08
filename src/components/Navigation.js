import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  color: white;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: #61dafb;
  }
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/tic-tac-toe">Tic-Tac-Toe</NavLink>
      <NavLink to="/skills">Stack</NavLink>
      <NavLink to="/achievements">Achievements</NavLink>
    </NavContainer>
  );
};

export default Navigation;
