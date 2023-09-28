import React, { ChangeEvent } from "react";
import { Input } from "@mui/material";
import "./FileUploader.css";

type FileUploaderProps = {
  selectedFiles: (File | string)[];
  setSelectedFiles: (files: (File | string)[]) => void;
};

const FileUploader: React.FC<FileUploaderProps> = (props) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );

      if (newFiles.length + props.selectedFiles.length <= 3) {
        props.setSelectedFiles([...props.selectedFiles, ...newFiles]);
      } else {
        alert("You can upload a maximum of 3 image files.");
      }
    }
  };

  const handleFileDelete = (index: number) => {
    const updatedFiles = [...props.selectedFiles];
    updatedFiles.splice(index, 1);
    props.setSelectedFiles(updatedFiles);
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
        {props.selectedFiles.length < 3 && (
          <label htmlFor="file-upload-input">
            <span className="primary-button">Upload photo</span>
          </label>
        )}
      </div>
      {props.selectedFiles.length > 0 && (
        <div className="images">
          {props.selectedFiles.map((file, index) => (
            <div key={index} className="uploaded-image-container">
              <img
                src={typeof file === 'string' ? file : URL.createObjectURL(file)}
                alt="Selected File Preview"
                className="uploaded-image"
              />
              <button onClick={() => handleFileDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
