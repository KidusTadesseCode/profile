// ConsentModal.js
import React from "react";
import {
  ModalOverlay,
  ModalContent,
  Button,
} from "../styles/ConsentModal.Style";

const ConsentModal = ({ handleAccept, handleDecline }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h3>I Personally Value Your Privacy</h3>
        <p>
          I use cookies to enhance your browsing experience and to understand
          how my profile is used. Do you accept analytics tracking?
        </p>
        <Button onClick={handleAccept}>Accept</Button>
        <Button onClick={handleDecline}>Decline</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConsentModal;
