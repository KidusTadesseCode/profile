import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaCss3Alt,
  FaJira,
  FaGitAlt,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import {
  SiGraphql,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiAngular,
  SiStorybook,
  SiJenkins,
  SiFigma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiWebpack,
  SiRollupdotjs,
  SiJquery,
  SiJson,
  SiAdobe,
  SiCss3,
} from "react-icons/si";

const SkillsContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  min-height: 100vh;
  color: white;
`;

const Header = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
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
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Styled-Components", icon: <FaCss3Alt /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Storybook", icon: <SiStorybook /> },
    { name: "Jira", icon: <FaJira /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Webpack", icon: <SiWebpack /> },
    { name: "Rollup", icon: <SiRollupdotjs /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "JSON", icon: <SiJson /> },
    { name: "Adobe XD", icon: <SiAdobe /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Linux", icon: <FaLinux /> },
  ];

  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRevealed(true);
    }, 500);
  }, []);

  return (
    <SkillsContainer>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Stack And Skill
      </Header>
      <SkillGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={revealed ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <SkillIcon>{skill.icon}</SkillIcon>
            {skill.name}
          </SkillCard>
        ))}
      </SkillGrid>
    </SkillsContainer>
  );
};

export default Skills;
