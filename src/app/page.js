"use client";

import React from "react";
import HeroSection from "../components/sections/HomeSection";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import NewsLetters from "../components/sections/NewsLetters";
import Achievements from "../components/sections/achivements";
import FAQSection from "../components/sections/questions";

export default function Home() {

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-black text-white relative">
      <HeroSection />
      <About />
      <Features/>
      <Achievements />
      <FAQSection />
      <NewsLetters />
      
      <script src={`${apiBase}/static/config.js`} defer></script>
      <script
        src={`${apiBase}/static/widget.js`}
        data-client-id="ddac2c8b-cc1f-41d3-a624-6f7c5c84095c"
        defer
      ></script>
    </main>
  );
}