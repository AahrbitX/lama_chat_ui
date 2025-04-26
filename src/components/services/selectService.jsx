"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import UploadService from "../upload/uploadService.jsx";
import { ArrowLeft } from "lucide-react"; // Assuming you have this component for the upload functionality

export default function ChooseService() {
  const [showUpload, setShowUpload] = useState(false);

  const handleStartWithBusinessBot = () => {
    // Show the upload component without navigation
    setShowUpload(true);
  };

  const handleGoBack = () => {
    // Go back to the service selection screen
    setShowUpload(false);
  };

  return (
    <motion.div
      // initial={{ opacity: 0, x: 100 }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <div className="w-full max-w-3xl absolute top-1/2 transform -translate-y-1/2 rounded-3xl shadow-xl p-10">
        {/* Service Selection or Upload Content */}
        {!showUpload ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2">Business Chatbot</h3>
              <p className="text-gray-400 mb-4 flex-1">
                Upload your documents and let our AI-powered assistant take over
                customer conversations, tailored to your business.
              </p>
              <button
                onClick={handleStartWithBusinessBot}
                className="mt-2 px-4 py-2 bg-neutral-300 rounded-md text-black font-medium hover:bg-neutral-400"
              >
                Start with Business Bot
              </button>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl opacity-60 cursor-not-allowed bg-gray-900 flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2">
                Website Integrated Chatbot
              </h3>
              <p className="text-gray-400 mb-4 flex-1">
                Coming soon: Our AI scans your site and builds a chatbot with no
                effort required.
              </p>
              <button
                className="mt-2 px-4 py-2 bg-gray-600 rounded-md text-white font-medium"
                disabled
              >
                Coming Soon...
              </button>
            </div>
          </div>
        ) : (
          <div className="w-ful flex justify-center">
            <div className="absolute left-10 p-4">
              <button
                onClick={handleGoBack}
                className="flex items-center text-gray-400 hover:text-white transition-all"
              >
                <ArrowLeft size={15} className="mr-2" />
                Back
              </button>
            </div>
            <div className="flex flex-col items-center">
              <UploadService />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
