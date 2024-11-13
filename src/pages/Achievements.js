// The page colors are missmatching.

import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "../components/AchievementCard";
import { useState } from "react";
import achievementsData from "../data/achievementsData";
import {
  AchievementsContainer,
  Header,
  CardsWrapper,
} from "../styles/Achievements.Style";

const Achievements = () => {
  // Achievements data inspired by your resume

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
