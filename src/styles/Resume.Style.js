// Resume.Style.js
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  /* background-color: #36414c; */
  background: linear-gradient(135deg, #6b73ff, #000dff);
  color: white;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const ContactLink = styled.a`
  color: #ffcc00;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #e6b800;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  color: #ffffff;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SvgContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const DownloadButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #ffcc00;
  color: #28313b;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e6b800;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export {
  Container,
  ContactContainer,
  ContactLink,
  ResumeContainer,
  SvgContainer,
  DownloadButton,
};
