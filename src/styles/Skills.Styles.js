import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const SkillsContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  min-height: 100vh;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SkillsWrapper = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: start;

  @media (max-width: 768px) {
    align-items: center; /* Center align on smaller screens */
  }
`;

const Header = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #ffcc00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  h3 {
    margin-bottom: 1rem;
  }

  .years-experience {
    font-size: 1rem;
    color: #d8b4fe;
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .skill-level {
    background-color: #6b73ff;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    display: inline-block;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const KeyFrames = keyframes`
  0% {
    color: #d8b4fe;
  }
  100% {
    color: #ffcc00;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0;
  text-align: center;
  color: #d8b4fe;
  font-weight: 800;
  animation: ${KeyFrames} 3s forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const SkillsDataContainer = styled.div`
  width: 100%;
`;

const Experience = styled.div.attrs({
  className: "years-experience",
})``;

const SkillLevel = styled.div.attrs({
  className: "skill-level",
})``;

export {
  SkillsContainer,
  SkillsWrapper,
  Header,
  SkillGrid,
  SkillCard,
  SkillIcon,
  CategoryTitle,
  SkillsDataContainer,
  Experience,
  SkillLevel,
};
