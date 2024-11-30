// Skills.js
import React, { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
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
} from "../styles/Skills.Styles";
import skillsData from "../data/skillsData";

const Skills = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRevealed(true);
    }, 500);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <SkillsContainer
      className="SkillsContainer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Stack Skills
      </Header>
      <SkillsWrapper>
        {skillsData.map((category, categoryIndex) => (
          <SkillsDataContainer
            key={categoryIndex}
            className={`skill-category-${categoryIndex}`}
          >
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillGrid>
              {category.skills.map((skill, index) => (
                // <SkillCard
                //   key={index}
                //   initial={{ opacity: 0, scale: 0.8 }}
                //   animate={revealed ? { opacity: 1, scale: 1 } : {}}
                //   transition={{ duration: 0.5, delay: index * 0.3 }}
                //   whileHover={{ scale: 1.1 }}
                //   aria-label={skill.name}
                //   data-tooltip-id="skills-tooltip"
                //   data-tooltip-content={skill.description}
                // >
                //   <SkillIcon>{skill.icon}</SkillIcon>
                //   {skill.name}
                // </SkillCard>
                <SkillCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={revealed ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  aria-label={skill.name}
                  data-tooltip-id="skills-tooltip"
                  data-tooltip-content={skill.description}
                >
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <h3>{skill.name}</h3>
                  <Experience>{skill.yearsOfExperience} Years</Experience>
                  <SkillLevel>{skill.level}</SkillLevel>
                </SkillCard>
              ))}
            </SkillGrid>
          </SkillsDataContainer>
        ))}
        <ReactTooltip id="skills-tooltip" place="top" effect="solid" />
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
