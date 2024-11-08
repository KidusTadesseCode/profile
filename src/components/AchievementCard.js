import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const Card = styled(motion.div)`
  background: linear-gradient(135deg, #6b73ff, #000dff);
  padding: 2rem;
  border-radius: 20px;
  width: 300px;
  margin: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffd700;
`;

const Title = styled.h3`
  margin: 1rem 0;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`;

const AchievementCard = ({ title, description }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 2 }}
    >
      <IconWrapper>
        <FaMedal />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default AchievementCard;
