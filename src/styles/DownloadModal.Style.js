// DownloadModal.Style.js
import styled from "styled-components";
import { keyframes } from "styled-components";

// Animation for icons
const IconBounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px #ffcc00;
  z-index: 1000;
  width: 90%;
  max-width: 450px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const ModalHeader = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #28313b;
  background: linear-gradient(135deg, #ffcc00, #d8b4fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

const ModalButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(135deg, #ffcc00, #d8b4fe);
  color: #28313b;
  border: none;
  border-radius: 15px;
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #e6b800, #c391ff);
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4), 0 0 15px #ffcc00;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem; /* Increase the size of the icon */
  margin-right: 0.5rem; /* Add spacing between the icon and text */
  color: ${(props) =>
    props.color || "#000"}; /* Use custom color, with a fallback */
  display: inline-flex;
  align-items: center;

  &:hover {
    animation: ${IconBounce} 0.6s ease-in-out infinite;
  }
`;

export {
  ModalContainer,
  ModalOverlay,
  ModalHeader,
  ModalButtonContainer,
  ModalButton,
  IconWrapper,
};
