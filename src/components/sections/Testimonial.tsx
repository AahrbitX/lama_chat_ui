'use client';

import React from "react";

const testimonials = [
  {
    name: "Rahul S.",
    role: "Founder, EcomGrow",
    message:
      "Ξxora helped us reduce support workload by 85% within a week. Customers now get instant answers 24/7 across all our channels.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha R.",
    role: "Head of Ops, DineDirect",
    message:
      "An incredibly powerful tool. Ξxora doesn't just answer questions; it understands them. Seamless integration with WhatsApp and Insta too!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ajay V.",
    role: "CTO, FinNova",
    message:
      "Our support costs dropped significantly, and our customers love the instant response. Ξxora is the future of communication.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonial() {
  // Duplicate testimonials for seamless scroll
  const leftTestimonials = [...testimonials, ...testimonials];
  const centerTestimonials = [...testimonials, ...testimonials];
  const rightTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 py-24">
      <div className="flex justify-center mb-4">
        <span className="px-4 py-1 rounded-full border border-[#a78bfa] text-[#a78bfa] font-semibold text-sm bg-[#3b0764]/70 flex items-center gap-2">
          <span role="img" aria-label="star">✨</span> Testimonials
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-white text-center">
        What our users <span className="text-[#a78bfa]">say</span>
      </h2>
      <div className="text-[#c4b5fd] max-w-2xl mb-12 mx-auto text-center text-base md:text-lg">
        Real results. Real impact. See how Ξxora transforms support for modern businesses.
      </div>
      {/* Desktop: 3 columns, Mobile: 1 column with all testimonials scrolling up */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 relative fade-mask" style={{ height: "480px" }}>
        {/* Left Blur Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20">
          <div className="w-full h-full bg-gradient-to-r from-[#3b0764]/80 via-[#7c3aed]/30 to-transparent blur-xl" />
        </div>
        {/* Right Blur Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20">
          <div className="w-full h-full bg-gradient-to-l from-[#3b0764]/80 via-[#7c3aed]/30 to-transparent blur-xl" />
        </div>
        {/* Left column - Infinite scroll downwards */}
        <div className="flex flex-col gap-6 overflow-hidden relative" >
          <div className="flex flex-col gap-6 scroll-down">
            {leftTestimonials.map((t, idx) => (
              <div
                key={t.name + "-left-" + idx}
                className="bg-gradient-to-br from-[#3b0764]/80 via-[#7c3aed]/60 to-[#a78bfa]/40 border border-[#a78bfa]/30 rounded-xl p-6 shadow-lg flex flex-col min-h-[180px]"
              >
                <div className="text-white text-base mb-4">{t.message}</div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full border-2 border-[#a78bfa]" />
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-[#c4b5fd] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Center column - Infinite scroll upwards */}
        <div className="flex flex-col gap-6 overflow-hidden relative">
          <div className="flex flex-col gap-6 scroll-up">
            {centerTestimonials.map((t, idx) => (
              <div
                key={t.name + "-center-" + idx}
                className="bg-gradient-to-br from-[#3b0764]/80 via-[#7c3aed]/60 to-[#a78bfa]/40 border border-[#a78bfa]/30 rounded-xl p-6 shadow-lg flex flex-col min-h-[180px]"
              >
                <div className="text-white text-base mb-4">{t.message}</div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full border-2 border-[#a78bfa]" />
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-[#c4b5fd] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right column - Infinite scroll downwards */}
        <div className="flex flex-col gap-6 overflow-hidden relative">
          <div className="flex flex-col gap-6 scroll-down">
            {rightTestimonials.map((t, idx) => (
              <div
                key={t.name + "-right-" + idx}
                className="bg-gradient-to-br from-[#3b0764]/80 via-[#7c3aed]/60 to-[#a78bfa]/40 border border-[#a78bfa]/30 rounded-xl p-6 shadow-lg flex flex-col min-h-[180px]"
              >
                <div className="text-white text-base mb-4">{t.message}</div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full border-2 border-[#a78bfa]" />
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-[#c4b5fd] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile: Single column, all testimonials scroll up */}
      <div className="md:hidden flex flex-col gap-6 overflow-hidden relative fade-mask" style={{ height: "390px" }}>
        <div className="flex flex-col gap-6 scroll-up-mobile">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={t.name + "-mobile-" + idx}
              className="bg-gradient-to-br from-[#3b0764]/80 via-[#7c3aed]/60 to-[#a78bfa]/40 border border-[#a78bfa]/30 rounded-xl p-6 shadow-lg flex flex-col min-h-[180px]"
            >
              <div className="text-white text-base mb-4">{t.message}</div>
              <div className="flex items-center gap-3 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full border-2 border-[#a78bfa]" />
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-[#c4b5fd] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animations */}
      <style>{`
      @keyframes scrollDown {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      @keyframes scrollUp {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }
      @keyframes scrollUpMobile {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      .scroll-down {
        animation: scrollDown 14s linear infinite;
      }
      .scroll-up {
        animation: scrollUp 14s linear infinite;
      }
      .scroll-up-mobile {
        animation: scrollUpMobile 18s linear infinite;
      }
      @media (max-width: 650px) {
        .max-w-5xl { max-width: 100vw !important; }
      }
      .fade-mask {
        mask-image: linear-gradient(
          to bottom,
          transparent 0%,
          #000 10%,
          #000 90%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to bottom,
          transparent 0%,
          #000 10%,
          #000 90%,
          transparent 100%
        );
      }
      `}</style>
    </section>
  );
}