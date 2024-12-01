// Footer.Style.js
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #28313b;
  color: #ffffff;
  padding: 1rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin: 1rem 0;

  a {
    margin: 0 1rem;
    color: #ffffff;
    font-size: 1.5rem;

    &:hover {
      color: #61dafb;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #d8b4fe;
`;

const FooterQuote = styled.p`
  /* font-style: italic; */
  font-size: 1rem;
  color: #d8b4fe;
  /* color: #fff; */
  margin-top: 1rem;
`;

export { FooterContainer, SocialIcons, Copyright, FooterQuote };
