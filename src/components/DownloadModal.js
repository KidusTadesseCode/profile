// DownloadModal.js
import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalButtonContainer,
  ModalButton,
  IconWrapper,
} from "../styles/DownloadModal.Style";

import { FaFilePdf } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // Close icon for modal

const DownloadModal = ({ setShowModal, resumeLocation, promptMessage }) => {
  const handleDownload = (format) => {
    if (format === "pdf") {
      window.open(resumeLocation.pdf, "_blank"); // Open PDF in a new tab or download
    } else if (format === "docx") {
      window.location.href = resumeLocation.docx;
    }
    setShowModal(false);
  };

  return (
    <>
      <ModalOverlay onClick={() => setShowModal(false)} />
      <ModalContainer>
        <FaTimes
          onClick={() => setShowModal(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "#28313b",
          }}
        />
        <ModalHeader>{promptMessage}</ModalHeader>
        <ModalButtonContainer>
          <ModalButton onClick={() => handleDownload("pdf")}>
            <IconWrapper color="#D32F2F">
              <FaFilePdf />
            </IconWrapper>
            <div>PDF</div>
          </ModalButton>
          <ModalButton onClick={() => handleDownload("docx")}>
            <IconWrapper color="#2A5599">
              <FaFileWord />
            </IconWrapper>
            <div>DOCX</div>
            {/* DOCX */}
          </ModalButton>
        </ModalButtonContainer>
      </ModalContainer>
    </>
  );
};

export default DownloadModal;
