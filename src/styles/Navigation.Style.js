// Navigation.Style.js
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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    background: ${({ isOpen }) =>
      isOpen ? "linear-gradient(135deg, #6b73ff, #000dff)" : "none"};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: #61dafb;
  }
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  left: 0;
  z-index: 999;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    top: 60px;
    position: absolute;
    padding: 0.5rem 2rem;
    background: linear-gradient(135deg, #6b73ff, #000dff);
  }
`;

export { NavContainer, NavLink, MenuIcon, MobileMenu };
