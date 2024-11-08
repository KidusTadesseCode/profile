import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const Home = () => {
  const [text, setText] = useState("Welcome ");
  const fullText = "  to Kidus's Profile Journey";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length - 1) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <HomeContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading>{text}</Heading>
        <SubContainer>
          <JourneyButton to="/resume">Resume</JourneyButton>
          <JourneyButton to="/tic-tac-toe">Tic-Tac-Toe</JourneyButton>
          <JourneyButton to="/skills">Stack Skills</JourneyButton>
        </SubContainer>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
