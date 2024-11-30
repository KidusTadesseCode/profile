// skillsData.js
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaCss3Alt,
  FaJira,
  FaGitAlt,
  FaUbuntu,
  FaAws,
  FaLinux,
  FaGitlab,
  FaApple,
  FaWindows,
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
  SiOracle,
  SiGerrit,
} from "react-icons/si";

const level = {
  adv: "Advanced",
  int: "Intermediate",
  bas: "Basic",
  exp: "Expert",
};

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        description:
          "A powerful JavaScript library for building user interfaces.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql />,
        description: "A flexible query language and runtime for APIs.",
        level: level.adv,
        yearsOfExperience: 4,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        description:
          "The latest version of the standard markup language for the web.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "Angular",
        icon: <SiAngular />,
        description:
          "A web application framework for building dynamic web apps.",
        level: level.adv,
        yearsOfExperience: 4,
      },
      {
        name: "Storybook",
        icon: <SiStorybook />,
        description:
          "A tool for developing and showcasing UI components in isolation.",
        level: level.exp,
        yearsOfExperience: 5,
      },
      {
        name: "Styled-Components",
        icon: <FaCss3Alt />,
        description: "A library for styling React components using CSS-in-JS.",
        level: level.adv,
        yearsOfExperience: 4,
      },
      {
        name: "CSS3",
        icon: <SiCss3 />,
        description: "The modern standard for cascading style sheets.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "jQuery",
        icon: <SiJquery />,
        description:
          "A fast, small, and feature-rich JavaScript library for simpler DOM manipulation.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        description:
          "A predictable state container for managing state in JavaScript apps.",
        level: level.adv,
        yearsOfExperience: 5,
      },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        description: "A JavaScript runtime for executing server-side code.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "Redis",
        icon: <SiRedis />,
        description:
          "An in-memory key-value store used as a database, cache, and message broker.",
        level: level.adv,
        yearsOfExperience: 7,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        description:
          "A NoSQL document database known for its flexibility and scalability.",
        level: level.adv,
        yearsOfExperience: 7,
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        description:
          "A popular open-source relational database management system.",
        level: level.adv,
        yearsOfExperience: 7,
      },
      {
        name: "Oracle",
        icon: <SiOracle />,
        description:
          "A widely-used relational database management system with enterprise features.",
        level: level.adv,
        yearsOfExperience: 5,
      },
      {
        name: "Postgres",
        icon: <SiPostgresql />,
        description:
          "A powerful, open-source, object-relational database system.",
        level: level.adv,
        yearsOfExperience: 7,
      },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        icon: <FaDocker />,
        description:
          "A platform for building, running, and shipping applications in containers.",
        level: level.adv,
        yearsOfExperience: 7,
      },
      {
        name: "Jenkins",
        icon: <SiJenkins />,
        description:
          "A popular automation server for continuous integration and delivery.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "AWS",
        icon: <FaAws />,
        description:
          "Amazon's cloud computing platform, offering a variety of scalable services.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "Webpack",
        icon: <SiWebpack />,
        description: "A static module bundler for JavaScript applications.",
        level: level.adv,
        yearsOfExperience: 7,
      },
      {
        name: "Rollup",
        icon: <SiRollupdotjs />,
        description:
          "A JavaScript module bundler optimized for building libraries.",
        level: level.adv,
        yearsOfExperience: 7,
      },
    ],
  },
  {
    category: "Version Control",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        description:
          "A distributed version control system to manage source code history.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "Gerrit",
        icon: <SiGerrit />,
        description:
          "A code review tool integrated with Git for collaborative development.",
        level: level.int,
        yearsOfExperience: 1,
      },
      {
        name: "GitLab",
        icon: <FaGitlab />,
        description:
          "A web-based DevOps lifecycle tool providing Git repository management.",
        level: level.adv,
        yearsOfExperience: 3,
      },
    ],
  },
  {
    category: "Project Management & Design",
    skills: [
      {
        name: "Jira",
        icon: <FaJira />,
        description:
          "A project management tool designed for agile development teams.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        description:
          "A cloud-based design tool for interface and UX design collaboration.",
        level: level.exp,
        yearsOfExperience: 6,
      },
      {
        name: "Adobe XD",
        icon: <SiAdobe />,
        description:
          "A vector-based tool for designing and prototyping user experiences.",
        level: level.exp,
        yearsOfExperience: 1,
      },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        description:
          "The standard language for building web pages and interactive features.",
        level: level.adv,
        yearsOfExperience: 7,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        description:
          "A superset of JavaScript that adds static types for enhanced development.",
        level: level.adv,
        yearsOfExperience: 5,
      },
      {
        name: "JSON",
        icon: <SiJson />,
        description:
          "A lightweight data-interchange format, easy for humans to read and write.",
        level: level.adv,
        yearsOfExperience: 7,
      },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      {
        name: "Linux",
        icon: <FaLinux />,
        description: "An open source family of Unix-like operating systems.",
        level: level.adv,
        yearsOfExperience: 7,
      },
      {
        name: "Ubuntu",
        icon: <FaUbuntu />,
        description: "A popular Linux distribution known for its ease of use.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "macOS",
        icon: <FaApple />,
        description: "Apple's Unix-based operating system for its devices.",
        level: level.exp,
        yearsOfExperience: 7,
      },
      {
        name: "Windows",
        icon: <FaWindows />,
        description: "A proprietary operating system developed by Microsoft.",
        level: level.exp,
        yearsOfExperience: 7,
      },
    ],
  },
];
export default skillsData;
