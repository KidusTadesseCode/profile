// ConsentModal.Style.js
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  /* background: white; */
  background: linear-gradient(135deg, #6b73ff, #000dff);
  padding: 2rem;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 1rem;

  &:first-of-type {
    background-color: #28a745;
    color: white;
  }

  &:last-of-type {
    background-color: #dc3545;
    color: white;
  }
`;

export { ModalOverlay, ModalContent, Button };
