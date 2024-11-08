// The page colors are missmatching.

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AchievementCard from "../components/AchievementCard";
import { useState } from "react";

const AchievementsContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const Achievements = () => {
  // Achievements data inspired by your resume
  const achievementsData = [
    {
      title: "Developed Full-Stack Web Applications",
      description:
        "Built web applications using React, Node.js, and MongoDB. Collaborated closely with stakeholders to understand requirements.",
    },
    {
      title: "Middleware Development for Express",
      description:
        "Created and integrated custom middleware for Express servers, managing API requests and optimizing backend operations.",
    },
    {
      title: "JWT Authentication for Internal Applications",
      description:
        "Implemented JSON Web Token (JWT) authentication for Express servers, ensuring secure user access for internal projects.",
    },
    {
      title: "Scalable Data Solutions with SQL",
      description:
        "Designed and implemented scalable data storage solutions with Postgres and MySQL databases, focusing on optimal data retrieval.",
    },
    {
      title: "Accessibility Compliance",
      description:
        "Developed UI/UX interfaces in compliance with WCAG standards for internal and external web applications.",
    },
    {
      title: "AWS Application Deployment",
      description:
        "Deployed applications on AWS S3 and EC2 instances, configured NGINX for content delivery and load balancing.",
    },
    {
      title: "Proprietary Software for Federal Clients",
      description:
        "Pioneered the development of proprietary COTS software for Federal clients, incorporating stakeholder requirements.",
    },
    {
      title: "Continuous Integration & Delivery",
      description:
        "Established CI/CD pipelines using Jenkins, Gerrit, and shell scripts, adhering to change management protocols.",
    },
    {
      title: "UI/UX Development & WCAG Compliance",
      description:
        "Led the development of UI components using React, Angular, and Bootstrap while ensuring WCAG compliance.",
    },
    {
      title: "Subject Matter Expert for Federal Projects",
      description:
        "Served as an SME for the Chief Information Officer during the design and development of the CIO.gov website.",
    },
  ];

  const [unlockedAchievements, setUnlockedAchievements] = useState([0, 1, 2]); // Initially unlocked achievements

  const handleUnlock = () => {
    // Logic to unlock the next achievement
    if (unlockedAchievements.length < achievementsData.length) {
      setUnlockedAchievements([
        ...unlockedAchievements,
        unlockedAchievements.length,
      ]);
    }
  };

  return (
    <AchievementsContainer>
      <Header>Achievements</Header>
      <CardsWrapper>
        {unlockedAchievements.map((index) => (
          <AchievementCard
            key={index}
            title={achievementsData[index].title}
            description={achievementsData[index].description}
          />
        ))}
      </CardsWrapper>
      {unlockedAchievements.length < achievementsData.length && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleUnlock}
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            backgroundColor: "#007bff", // New button color
            color: "#ffffff", // White text for contrast
            border: "none",
            borderRadius: "10px",
          }}
        >
          Unlock Next Achievement
        </motion.button>
      )}
    </AchievementsContainer>
  );
};

export default Achievements;
