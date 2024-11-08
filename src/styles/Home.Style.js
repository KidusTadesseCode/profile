import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  color: white;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 2rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const JourneyButton = styled(Link)`
  text-decoration: none;
  color: #61dafb;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: 2px solid #61dafb;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }
`;

export { HomeContainer, SubContainer, Heading, JourneyButton };
