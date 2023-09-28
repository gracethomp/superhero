import React, { useState, ChangeEvent } from "react";
import { Input } from "@mui/material";
import "./FileUploader.css";

const FileUploader: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );

      if (newFiles.length + selectedFiles.length <= 3) {
        setSelectedFiles([...selectedFiles, ...newFiles]);
      } else {
        alert("You can upload a maximum of 3 image files.");
      }
    }
  };

  const handleFileDelete = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  // const handleUpload = () => {
  //   if (selectedFile) {
  //     console.log("Uploading file:", selectedFile);
  //   } else {
  //     alert("Please select a file to upload.");
  //   }
  // };

  return (
    <div className="files-uploader-container">
      <div className="files-uploader">
        <Input
          type="file"
          style={{ display: "none" } as React.CSSProperties}
          id="file-upload-input"
          onChange={handleFileChange}
        />
        {selectedFiles.length < 3 && (
          <label htmlFor="file-upload-input">
            <span className="primary-button">Upload photo</span>
          </label>
        )}
      </div>
      {selectedFiles.length > 0 && (
        <div className="images">
          {selectedFiles.map((file, index) => (
            <div key={index} className="uploaded-image-container">
              <img
                src={URL.createObjectURL(file)}
                alt="Selected File Preview"
                className="uploaded-image"
              />
              <button
                onClick={() => handleFileDelete(index)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
