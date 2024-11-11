// Home.Style.js
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  color: white;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 0 3rem 0;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const JourneyButton = styled(Link)`
  text-decoration: none;
  color: #61dafb;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: 2px solid #61dafb;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
`;

const iPhoneMessage = styled.p`
  margin-top: 2rem;
  background: #ffffff;
  color: #000000;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem;
  }
`;

const AddToHomeButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #007aff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #005bb5;
    transform: translateY(-3px);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  position: inherit;
  top: 70%;
`;

const ArrowIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 2rem;
  animation: bounce 1s infinite alternate;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }
`;

export {
  HomeContainer,
  SubContainer,
  Heading,
  JourneyButton,
  iPhoneMessage,
  AddToHomeButton,
  Modal,
  ModalContainer,
  ArrowIcon,
};
