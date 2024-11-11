import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HomeContainer,
  SubContainer,
  Heading,
  JourneyButton,
  AddToHomeButton,
  Modal,
  ModalContainer,
  ArrowIcon,
} from "../styles/Home.Style";
import iPhoneShareButton from "../assets/iPhoneShareButton.svg";
import arrowDown from "../assets/arrowDown.svg";
import addToHomeScreen from "../assets/addToHomeScreen.svg";
import qrCode from "../assets/qrCode.svg";

const Home = () => {
  const [text, setText] = useState("Welcome ");
  const [isIphone, setIsIphone] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [appInstalled, setAppInstalled] = useState(
    localStorage.getItem("appInstalled") === "true"
  );
  const [showAddToHomeScreen, setShowAddToHomeScreen] = useState(false);

  const fullText = "  to Kidus's Profile Journey ";

  useEffect(() => {
    if (text.length === 35) return;
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length - 1) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Check if the user is on an iPhone
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("iphone")) {
      setIsIphone(true);
      // Check if the user is using Safari
      if (userAgent.includes("safari") && !userAgent.includes("crios")) {
        setIsSafari(true);
      }
    }
  }, []);

  useEffect(() => {
    // Check local storage to see if the app has been added to home screen
    const addedToHomeScreen = localStorage.getItem("addedToHomeScreen");
    if (!addedToHomeScreen) setShowAddToHomeScreen(true); // Show the button if the flag is not set
  }, []);

  const handleButtonClick = () => {
    if (isIphone && isSafari) {
      setShowModal(true);
    } else if (isIphone) {
      window.location.href = "https://bit.ly/4et2CQj";
    } else {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <HomeContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading>{text}</Heading>
        <SubContainer>
          <JourneyButton to="/resume">Resume</JourneyButton>
          <JourneyButton to="/tictactoe">Tic-Tac-Toe</JourneyButton>
          <JourneyButton to="/skills">Stack Skills</JourneyButton>
        </SubContainer>
        {/* isSafari && */}
        {!appInstalled && (
          <AddToHomeButton onClick={handleButtonClick}>
            {isIphone && !isSafari
              ? "Switch to Safari for a Better Experience"
              : isIphone && isSafari
              ? "Add to Home Screen"
              : "Try On iOS Safari Mobile Devices"}
          </AddToHomeButton>
        )}
      </motion.div>

      {showModal && isIphone && !showAddToHomeScreen && (
        <ModaliPhoneContent
          handleModalClose={handleModalClose}
          isIphone={isIphone}
        />
      )}

      {showModal && !isIphone && (
        <ModalQRContent handleModalClose={handleModalClose} />
      )}
    </HomeContainer>
  );
};
function ModalQRContent({ handleModalClose }) {
  return (
    <Modal onClick={handleModalClose}>
      <h3>Scan the QR Code to try on a iOS Device</h3>
      <img src={qrCode} alt="QR Code" width="200" />
    </Modal>
  );
}
function ModaliPhoneContent({ handleModalClose }) {
  const [showAddToHomeScreen, setShowAddToHomeScreen] = useState(false);
  return (
    <Modal onClick={handleModalClose}>
      <ModalContainer>
        <p>Try adding this app to your home screen for a better experience!</p>
        <p>
          Tap the icon &nbsp;&nbsp;
          <img src={iPhoneShareButton} alt="Share Button" width="20" />
          &nbsp;&nbsp;at the bottom then the icon&nbsp;&nbsp;
          <img src={addToHomeScreen} alt="Add to Home" width="20" />
        </p>
      </ModalContainer>
      <ArrowIcon src={arrowDown} alt="Arrow pointing down" />
    </Modal>
  );
}

export default Home;
