"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChooseService from "../services/selectService.jsx";
import { HomeIcon } from "lucide-react";

export default function HeroSection() {
  const [showServices, setShowServices] = useState(false);
  // const [showUpload, setshowUpload] = useState(false)

  const handleTryFree = () => {
    setShowServices(true);
  };
  const handleGoBack = () => {
    // Go back to the service selection screen
    setShowServices(false);
  };

  return (
    <main className="h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111111] text-white px-6 py-20 w-full  flex flex-col items-center justify-center">
      <AnimatePresence>
        {!showServices && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            className="text-center max-w-4xl"
          >
            <p className="uppercase text-xs text-[#888] tracking-widest mb-4">
              Powered by{" "}
              <a
                href="https://www.aarbhitx.in"
                className="underline hover:text-indigo-400"
              >
                AarbhitX
              </a>
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-heading">
              Revolutionize Your{" "}
              <span className="text-indigo-400">Brand Presence</span>
              <br />
              with <span className="text-blue-500">AI Assistant</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Meet your next AI-powered celebrity personal assistant and
              business chatbot—ready to enhance communication, manage tasks, and
              engage customers effortlessly.
            </p>
            <button
              onClick={handleTryFree}
              className="mt-10 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg text-white font-medium"
            >
              Try it Free
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {" "}
        {showServices && (
          <motion.div
            key="services"
            // // initial={{ opacity: 100, x: 20 }}
            // animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: -100 }}
            // transition={{ duration: 0.8 }}
            className="w-full flex justify-center mt-10 absolute"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 absolute top-[50px] left-[20px]">
                <button
                  onClick={handleGoBack}
                  className="px-2 py-2 bg-gray-600 rounded-full text-white font-medium hover:bg-gray-700"
                >
                  <HomeIcon />
                </button>
              </div>
            </div>
            <ChooseService />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
