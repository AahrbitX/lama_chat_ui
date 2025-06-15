"use client";

import React from "react";
import HeroSection from "../components/sections/HomeSection";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import NewsLetters from "../components/sections/NewsLetters";
import Achievements from "../components/sections/achivements";
import FAQSection from "../components/sections/questions";

export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-black text-white relative">
      <HeroSection />
      <About />
      <Features/>
      <Achievements />
      <FAQSection />
      <NewsLetters />
    </main>
  );
}