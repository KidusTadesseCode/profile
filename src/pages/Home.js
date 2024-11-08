import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HomeContainer,
  SubContainer,
  Heading,
  JourneyButton,
} from "../styles/Home.Style";

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
          <JourneyButton to="/tictactoe">Tic-Tac-Toe</JourneyButton>
          <JourneyButton to="/skills">Stack Skills</JourneyButton>
        </SubContainer>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
