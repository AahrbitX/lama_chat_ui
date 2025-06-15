"use client";

import React from "react";

export default function Achievements() {
  const avatars = [1, 2, 3, 4].map((num) => ({
    url: `https://api.dicebear.com/7.x/avataaars/svg?seed=User${num}`,
    alt: `User ${num}`,
  }));
  return (
    <section className="relative z-10 max-w-[1200px] mx-auto px-2 md:px-8 py-16 md:py-24 rounded-[2.5rem] overflow-hidden bg-b" id="#achievements">
      <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between px-6 pt-12 pb-10 gap-8">
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-[#a78bfa] font-mono text-lg mb-2 tracking-widest uppercase">Ξxora Achievements</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight">
            <span className="text-[#a78bfa]">AI Impact,</span> <span className="text-[#c4b5fd]">Real Results</span>
          </h1>
          <div className="max-w-md text-white/80 text-base mt-2">
            Top 10 Emerging AI Tools of 2025<br />
            1M+ chats automated · 10+ countries<br />
             Avg. response: <span className="text-[#a78bfa] font-bold">1.2s</span> · <span className="text-[#a78bfa] font-bold">90%</span> workload cut
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-end gap-4">
          <button className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white px-8 py-3 rounded-full font-semibold text-base hover:from-[#7c3aed] hover:to-[#a78bfa] transition border-0 shadow mb-2" onClick={() => {window.location.href = "/demo"}}>
            Start Free Demo
          </button>
          <div className="flex items-center gap-2 bg-[#3b0764]/70 rounded-full px-4 py-2 shadow-lg border border-[#a78bfa]/30">
            {avatars.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar.url}
                alt={avatar.alt}
                className={`w-8 h-8 rounded-full border-2 border-white -ml-2 ${idx === 0 ? "ml-0" : ""}`}
              />
            ))}
            <span className="text-[#a78bfa] text-base font-semibold ml-2">Trusted by 50+ Brands</span>
          </div>
        </div>
      </div>
      {/* Bottom Section: Stats */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 mt-10">
        <div className="bg-gradient-to-br from-[#a78bfa]/30 via-[#7c3aed]/20 to-[#3b0764]/30 rounded-[2.5rem] px-8 py-10 flex flex-col items-center justify-center min-w-[220px] shadow-2xl border border-[#a78bfa]/30 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="block w-2 h-2 rounded-full bg-[#a78bfa]" />
            <span className="block w-12 h-[2px] bg-[#a78bfa]" />
          </div>
          <div className="text-[2.5rem] md:text-[3rem] font-extrabold text-[#a78bfa] mb-2">1M+</div>
          <div className="text-white text-base opacity-80">Chats Automated</div>
        </div>
        <div className="bg-gradient-to-br from-[#a78bfa]/30 via-[#7c3aed]/20 to-[#3b0764]/30 rounded-[2.5rem] px-8 py-10 flex flex-col items-center justify-center min-w-[220px] shadow-2xl border border-[#a78bfa]/30 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="block w-2 h-2 rounded-full bg-[#a78bfa]" />
            <span className="block w-12 h-[2px] bg-[#a78bfa]" />
          </div>
          <div className="text-[2.5rem] md:text-[3rem] font-extrabold text-[#a78bfa] mb-2">10+</div>
          <div className="text-white text-base opacity-80">Countries Served</div>
        </div>
        <div className="bg-gradient-to-br from-[#a78bfa]/30 via-[#7c3aed]/20 to-[#3b0764]/30 rounded-[2.5rem] px-8 py-10 flex flex-col items-center justify-center min-w-[220px] shadow-2xl border border-[#a78bfa]/30 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="block w-2 h-2 rounded-full bg-[#a78bfa]" />
            <span className="block w-12 h-[2px] bg-[#a78bfa]" />
          </div>
          <div className="text-[2.5rem] md:text-[3rem] font-extrabold text-[#a78bfa] mb-2">1.2s</div>
          <div className="text-white text-base opacity-80">Avg. Response Time</div>
        </div>
      </div>
      <div className="text-center mt-10 text-[#c4b5fd] text-base font-semibold">
        <span> Reduced support workload by up to <span className="text-[#a78bfa] font-bold">90%</span> for top clients</span>
      </div>
    </section>
  );
}