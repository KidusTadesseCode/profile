// Navigation.Style.js
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeInSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  color: white;
  backdrop-filter: blur(10px);
  background: rgba(30, 30, 60, 0.7);
  transition: background 0.3s ease;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    background: none;
    background: ${({ isOpen }) => (isOpen ? "rgba(30, 30, 60, 0.7)" : "none")};
    backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(10px)" : "none")};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "#61dafb" : "white")};
  font-size: 1.1rem;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  position: relative;
  overflow: hidden;
  padding: 0.5rem;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ isActive }) => (isActive ? "#61dafb" : "transparent")};
    transform: scaleX(${({ isActive }) => (isActive ? "1" : "0")});
    transform-origin: right;
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    color: #61dafb;

    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: #ffcc00;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #6b73ff, #000dff);
    animation: ${fadeInSlideDown} 0.4s ease forwards;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export { NavContainer, NavLink, MenuIcon, MobileMenu };
