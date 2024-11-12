import React from "react";
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
import { SiOracle } from "react-icons/si";

import {
  SkillsContainer,
  Header,
  SkillGrid,
  SkillCard,
  SkillIcon,
} from "../styles/Skills.Styles";

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
    { name: "Adobe XD", icon: <SiAdobe /> },
    { name: "Oracle", icon: <SiOracle /> },
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Webpack", icon: <SiWebpack /> },
    { name: "Rollup", icon: <SiRollupdotjs /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "JSON", icon: <SiJson /> },
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
        Stack Skills
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
