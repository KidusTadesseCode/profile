// Resume.Style.js
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background-color: #36414c;
  color: white;
`;

const ContactContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
`;

const ContactLink = styled.a`
  color: #ffcc00;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #e6b800;
  }
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(135deg, #28313b, #485461);
  min-height: 100vh;
  color: #ffffff;
`;

const SvgContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 3rem 0;
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
`;

export {
  Container,
  ContactContainer,
  ContactLink,
  ResumeContainer,
  SvgContainer,
  DownloadButton,
};
