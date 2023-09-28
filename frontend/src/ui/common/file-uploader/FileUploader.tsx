import React, { useState, ChangeEvent } from "react";
import { Input } from "@mui/material";
import "./FileUploader.css";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="files-uploader-container">
      <div className="files-uploader">
        <Input
          type="file"
          style={{ display: "none" } as React.CSSProperties}
          id="file-upload-input"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload-input">
          <span className="primary-button">Upload photo</span>
        </label>
      </div>
      {selectedFile && (
        <div className="images">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected File Preview"
            className="uploaded-image"
          />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
