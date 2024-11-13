// ImageConverter.js
import React, { useState } from "react";
import toIco from "image-to-ico";
// import imageCompression from "browser-image-compression";

const ImageConverter = () => {
  const [file, setFile] = useState(null);
  const [convertedURL, setConvertedURL] = useState("");

  const MAX_FILE_SIZE_MB = 10; // Set maximum allowed file size

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check file size
      if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert(`File size should not exceed ${MAX_FILE_SIZE_MB}MB`);
        return;
      }
      setFile(selectedFile);
    }
  };

  //   const handleConvert = async () => {
  //     if (!file) {
  //       alert("Please select an image file to convert.");
  //       return;
  //     }

  //     try {
  //       // Step 1: Compress the image
  //       const compressionOptions = {
  //         maxSizeMB: 1, // Set the maximum size after compression (e.g., 1MB)
  //         maxWidthOrHeight: 1024, // Set the max width or height for resizing
  //         useWebWorker: true, // Use web worker for offloading the compression process
  //       };

  //       const compressedFile = await imageCompression(file, compressionOptions);

  //       // Step 2: Read the compressed image using FileReader
  //       const reader = new FileReader();
  //       reader.onload = async (event) => {
  //         const img = new Image();
  //         img.src = event.target.result;
  //         img.onload = async () => {
  //           // Step 3: Resize the image using canvas
  //           const canvas = document.createElement("canvas");
  //           const targetSize = 64; // Resize the image to 64x64
  //           canvas.width = targetSize;
  //           canvas.height = targetSize;
  //           const ctx = canvas.getContext("2d");

  //           // Draw the image on the canvas with reduced size
  //           ctx.drawImage(img, 0, 0, targetSize, targetSize);

  //           // Convert the canvas to a Blob
  //           const pngBlob = await new Promise((resolve) =>
  //             canvas.toBlob(resolve, "image/png")
  //           );

  //           // Step 4: Convert the PNG blob to ICO format
  //           const icoBuffer = await toIco([pngBlob]);
  //           const blob = new Blob([icoBuffer], { type: "image/x-icon" });
  //           const icoUrl = URL.createObjectURL(blob);
  //           setConvertedURL(icoUrl);
  //         };
  //       };
  //       reader.readAsDataURL(compressedFile);
  //     } catch (error) {
  //       console.error("Error converting image to ICO:", error);
  //     }
  //   };

  const handleConvert = async () => {
    return;
  };
  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleFileChange}
      />
      <button onClick={handleConvert}>Convert to ICO</button>
      {convertedURL && (
        <a href={convertedURL} download="favicon.ico">
          Download ICO
        </a>
      )}
    </div>
  );
};

export default ImageConverter;
