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

export { NavContainer, NavLink };
