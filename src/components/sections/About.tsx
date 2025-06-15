"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, type: "spring", stiffness: 80 }
  }),
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Mouse parallax handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    setParallax({ x, y });
  };

  const headline = [
    { text: "Meet", highlight: false },
    { text: "Ξxora", highlight: true },
    { text: "by", highlight: false },
    { text: "AahrbitX", highlight: true }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.08, type: "spring", stiffness: 70 }
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-10 max-w-6xl mx-auto px-4 py-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
    >
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 flex flex-wrap justify-center gap-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            custom={0}
          >
            {headline.map((word, i) => (
              <motion.span
                key={i}
                className={word.highlight ? "text-[#a78bfa]" : ""}
                variants={textVariants}
                custom={i}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-[#c4b5fd] max-w-2xl mx-auto text-lg"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            custom={headline.length + 1}
          >
            Not just a chatbot—Ξxora is your always-on, human-like AI assistant. Automate, learn, and connect with customers 24/7 across WhatsApp, Facebook, Instagram, and web. <span className="text-[#a78bfa] font-semibold">One dashboard. Zero hassle.</span>
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            className="bg-gradient-to-br from-[#a78bfa]/30 via-[#7c3aed]/20 to-[#3b0764]/30 rounded-2xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group"
            style={{
              transform: `translateX(${parallax.x}px) translateY(${parallax.y}px)`,
              transition: "transform 0.2s cubic-bezier(.4,2,.6,1)"
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={0}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 #a78bfa55",
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            <span className="bg-[#a78bfa]/20 text-[#a78bfa] px-4 py-1 rounded-full text-xs font-semibold mb-4 w-fit animate-pulse">
              Why Ξxora?
            </span>
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              variants={textVariants}
              custom={1}
            >
              Smarter. Faster. Human-like.
            </motion.h3>
            <motion.ul
              className="text-[#ede9fe] text-base space-y-2"
              variants={textVariants}
              custom={2}
            >
              <li>Cut support costs by <span className="text-[#a78bfa] font-bold">90%</span></li>
              <li>Omnichannel: WhatsApp, FB, Insta, Web</li>
              <li>Custom-trained for your brand</li>
              <li>Multilingual & emoji-friendly</li>
              <li>Scales instantly, 24/7</li>
            </motion.ul>
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="8,8" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden flex items-center justify-center bg-[#7c3aed]/30 min-h-[300px]"
            style={{
              transform: `translateX(${-parallax.x}px) translateY(${-parallax.y}px)`,
              transition: "transform 0.2s cubic-bezier(.4,2,.6,1)"
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={1}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px 0 #a78bfa33",
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            <img
              src="/assets/images/creative-team.png"
              alt="Creative team in action"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-[#a78bfa]/30 via-[#7c3aed]/20 to-[#3b0764]/30 rounded-2xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group"
            style={{
              transform: `translateX(${-parallax.x}px) translateY(${-parallax.y}px)`,
              transition: "transform 0.2s cubic-bezier(.4,2,.6,1)"
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={2}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 #a78bfa33",
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            <span className="bg-[#a78bfa]/20 text-[#a78bfa] px-4 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
              Powered by AI
            </span>
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              variants={textVariants}
              custom={1}
            >
              Built for Results
            </motion.h3>
            <motion.p
              className="text-[#ede9fe]"
              variants={textVariants}
              custom={2}
            >
              Ξxora automates, learns, and adapts—delivering instant, consistent answers and freeing your team for what matters.
            </motion.p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div className="bg-gradient-to-br from-[#a78bfa]/30 via-[#7c3aed]/20 to-[#3b0764]/30 rounded-2xl p-6 flex flex-col justify-between min-h-[180px]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={3}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 8px 32px 0 #a78bfa55",
              transition: { type: "spring", stiffness: 200 }
            }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#a78bfa] rounded-full w-6 h-6 flex items-center justify-center">
                <svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="8" fill="#3b0764"/><path d="M5 8l2 2 4-4" stroke="#a78bfa" strokeWidth="2" fill="none"/></svg>
              </span>
              <div className="text-white font-bold text-lg">Unified Dashboard</div>
            </div>
            <div className="text-white font-bold text-lg mb-1">All Channels. One Place.</div>
            <p className="text-[#ede9fe] text-[13px]">
              Manage every chat, call, and DM from a single, beautiful interface—real-time, everywhere.
            </p>
          </motion.div>

          <motion.div className="bg-gradient-to-br from-[#a78bfa]/30 via-[#7c3aed]/20 to-[#3b0764]/30 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[180px]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={4}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 8px 32px 0 #a78bfa55",
              transition: { type: "spring", stiffness: 200 }
            }}>
            <div className="w-full flex items-end gap-1 h-16 mb-3 px-7">
              {[8, 12, 6, 14, 10, 16, 12, 14, 8, 15, 10, 13, 20, 25].map((h, i) => (
                <div key={i} className="bg-[#ede9fe] rounded w-2" style={{ height: `${h * 5}%` }} />
              ))}
            </div>
            <div className="text-3xl font-extrabold text-white mb-1">1M+</div>
            <div className="text-[#ede9fe] text-sm">Chats Automated</div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default About;