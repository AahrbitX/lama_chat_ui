"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, Download } from "lucide-react";
import { uploadFile } from "../../utils/action.js"; // Adjust the import path as needed

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uplaodStatus, setUploadStatus] = useState("");
  // const [result,setResult] =useState("");
  // const [sessionId, setSessionId] = useState(""); // Added session ID state
  // Added upload status state
  // const [showServices, setShowServices] = useState(false);

  const handleGoBack = () => {
    // Go back to the service selection screen
    setShowUpload(false);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    simulateUpload();
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 140);
  };

  const handleCancel = () => {
    setFile(null);
    setUploadProgress(0);
  };

  const handleUplaod = async () => {
    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const result = await uploadFile(file, setUploadStatus);
      sessionStorage.setItem("session_id", result.session_id);
      // setSessionId(sessionStorage.getItem("session_id"));
      // Assuming the API returns a session ID
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus(
        "An error occurred during upload. Please try again later."
      );
    } // Simulate an API call
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1a1a1a] rounded-3xl shadow-xl p-10 w-full max-w-5xl grid md:grid-cols-2 gap-12"
      >
        {/* Left Illustration */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <UploadCloud size={100} className="text-blue-400" />
          <h2 className="text-xl font-semibold text-center">
            Drop your files here or click to upload
          </h2>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-4 hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl cursor-pointer transition"
          >
            Choose File
          </label>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold">Uploading</h1>
          <p className="text-gray-400">
            Upload your data securely to start working. Make sure your file
            format matches the required template.
          </p>

          {file && (
            <div>
              <p className="mb-2 text-sm text-gray-300">
                Uploading: {file.name}
              </p>
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-500 h-4 transition-all duration-300 ease-in-out"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-right text-sm mt-1 text-gray-400">
                {uploadProgress}%
              </p>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
              disabled={!file}
              onClick={handleUplaod}
            >
              Upload
            </button>
            <button
              onClick={handleCancel}
              className="border border-gray-600 hover:bg-gray-800 text-gray-300 px-6 py-2 rounded-xl transition"
              disabled={!file}
            >
              Cancel
            </button>
          </div>

          <button className="mt-6 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-500 transition">
            <Download size={18} />
            Download Sample Template
          </button>

          {sessionStorage.getItem("session_id") && (
            <button
              onClick={() => {
                window.location.href = "/chatx";
              }}
              className="bg-blue-600 hover:bg-blue-700 text-gray-300 px-6 py-2 rounded-xl transition"
            >
              Go to Chat
            </button>
          )}
        </div>
      </motion.div>
    </>
  );
}
