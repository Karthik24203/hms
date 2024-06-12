import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

const FileUpload = ({ setPermissionLetter }) => {
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadHandler = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Simulating file upload progress with setInterval
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : prevProgress
      );
    }, 500);

    // Simulating file upload completion after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setUploadSuccess(true);
      setPermissionLetter(uploadedFile);
    }, 5000);
  };

  const deleteFile = () => {
    setFile(null);
    setUploadSuccess(false);
    setUploadProgress(0);
  };

  return (
    <>
      {uploadSuccess && (
        <div className="bg-gray-300 flex flex-col min-h-52 min-w-80 max-w-84 justify-center items-center border-2 border-dashed border-black mb-5">
          <div className="bg-white p-10 text-xl max-w-52 rounded-md mt-3 font-bold">
            File uploaded successfully
          </div>
          <div className="flex items-center justify-between bg-white text-xl p-2 mt-3 min-w-52 mb-5 shadow-lg rounded-md">
            <MdDescription className="text-3xl" />
            <span className="mx-2 text-xl">{file.name}</span>
            <IoIosCloseCircle className="text-3xl" onClick={deleteFile} />
          </div>
        </div>
      )}

      {!uploadSuccess && (
        <div className="bg-gray-300 flex flex-col min-h-52 min-w-80 max-w-84 justify-center items-center border-2 border-dashed border-black">
          <div className="relative mb-5 flex justify-center items-center">
            <input
              className="relative opacity-0 max-w-48 min-h-16 z-20 cursor-pointer"
              type="file"
              onChange={uploadHandler}
            />
            <button
              style={{ width: "100%", height: "100%" }}
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center btn z-10 shadow-lg shadow-gray-500 hover:bg-blue-500"
            >
              <IoAddCircle className="text-2xl" />
              Upload
            </button>
          </div>

          <p>Supported files: pdf, jpeg, png</p>

          {file && (
            <div className="w-full bg-gray-200 h-3 ">
              <div
                className="bg-gray-500 h-3"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FileUpload;
