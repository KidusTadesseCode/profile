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

  const [fullText] = useState("  to Kidus's Profile Journey ");

  useEffect(() => {
    if (text.length === fullText.length) return;

    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText, text.length]);

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
    // Listen for the "appinstalled" event and update localStorage
    const handleAppInstalled = () => {
      localStorage.setItem("appInstalled", "true");
      setAppInstalled(true);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleButtonClick = () => {
    if (isIphone && isSafari) {
      setShowModal(true);
    } else if (isIphone) {
      // Redirect user to Safari
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
        {/* Conditionally render the "Add to Home Screen" button */}
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

      {showModal && isIphone && (
        <ModaliPhoneContent handleModalClose={handleModalClose} />
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
      <h3>Scan the QR Code to try on an iOS Device</h3>
      <img src={qrCode} alt="QR Code" width="200" />
    </Modal>
  );
}

function ModaliPhoneContent({ handleModalClose }) {
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
      <ArrowIcon
        src={arrowDown}
        alt="Arrow pointing down"
        style={{
          animation: "bounce 1s infinite",
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </Modal>
  );
}

export default Home;
