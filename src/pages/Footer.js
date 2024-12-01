// Footer.js
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  FooterContainer,
  SocialIcons,
  Copyright,
} from "../styles/Footer.Style";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a
          href="https://www.linkedin.com/in/kidustadesse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kidustadesse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:KidusTadesseArega@gmail.com">
          <FaEnvelope />
        </a>
      </SocialIcons>
      <Copyright>&copy; 2024 Kidus Tadessa. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
