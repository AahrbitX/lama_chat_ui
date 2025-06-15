import React from "react";
import Clients from "../commons/clients";

// Creative, short, and attractive hero logo and tagline
const Logo = () => (
  <span className="flex items-center space-x-2 font-bold text-2xl text-[#a78bfa] drop-shadow-lg">
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="8" fill="#a78bfa" />
      <rect x="7" y="7" width="14" height="14" rx="4" fill="#3b0764" />
    </svg>
    Ξxora
  </span>
);

export default function HomeSection() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <svg
            width="1200"
            height="600"
            viewBox="0 0 1200 600"
            fill="none"
            className="w-[1200px] h-[600px] rounded-3xl"
            style={{ filter: "blur(80px)", opacity: 0.6 }}
          >
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1200" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa" />
                <stop offset="0.5" stopColor="#7c3aed" />
                <stop offset="1" stopColor="#3b0764" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q300,300 600,400 T1200,400 V600 H0 Z"
              fill="url(#wave-gradient)"
            />
          </svg>
        </div>
        <div className="px-6 py-20 w-full text-center">
          <div className="flex justify-center mb-4">
            {/* <Logo /> */}
          </div>
          <span className="inline-block px-4 py-1 rounded-full border border-[#a78bfa] text-[#a78bfa] text-xs font-semibold bg-[#3b0764]/60 mb-6 tracking-widest">
            Chat. Voice. Call. Smarter.
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
            <span className="text-[#a78bfa]">Ξxora</span> AI That Talks, Listens & Solves <br className="hidden md:block" />
            <span className="text-[#c4b5fd]">Every Channel. Every Hour.</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-medium">
            Supercharge your business with <span className="text-[#a78bfa] font-bold">Ξxora</span> the always-on AI that chats, calls, and connects on WhatsApp, Facebook, Instagram, and web.<br />
            {/* <span className="text-[#c4b5fd]">No agents. No delays. Just instant, intelligent support—day and night.</span> */}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-semibold shadow-lg hover:from-[#7c3aed] hover:to-[#a78bfa] transition" onClick={() => window.location.href = "/demo"}>
              Start Free Demo
            </button>
            <button className="px-6 py-2 rounded-full bg-[#7c3aed] text-white font-semibold shadow-lg hover:bg-[#a78bfa] transition" onClick={() => window.location.href = "/Contact"}>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      <Clients />
    </div>
  );
}