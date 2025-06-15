import React from "react";

const features = [
  {
    title: "Smart Chat Engine",
    description:
      "Instant, human-like replies—24/7. No agents, no delays. Ξxora understands, learns, and solves.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#3b0764" />
        <path d="M18 38l10-20 10 20" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="38" r="2.5" fill="#a78bfa"/>
      </svg>
    ),
    image: "/assets/images/team.png",
  },
  {
    title: "Omnichannel Integration",
    description:
      "WhatsApp, Facebook, Instagram, Web—one AI, every channel. Seamless, unified, always-on.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#7c3aed" />
        <rect x="18" y="18" width="20" height="20" rx="6" stroke="#a78bfa" strokeWidth="3"/>
        <circle cx="28" cy="28" r="5" fill="#a78bfa"/>
      </svg>
    ),
    image: "/assets/images/workspace.png",
  },
  {
    title: "Secure & Scalable",
    description:
      "Cloud-based, GDPR-ready, and built to scale—handle 10 or 10,000 chats with zero hassle.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#7c3aed" />
        <rect x="16" y="22" width="24" height="12" rx="4" stroke="#a78bfa" strokeWidth="3"/>
        <circle cx="22" cy="28" r="2" fill="#a78bfa"/>
        <circle cx="34" cy="28" r="2" fill="#a78bfa"/>
      </svg>
    ),
    image: "/assets/images/office.png",
  }
];

export default function Features() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
        <span className="text-[#a78bfa]">Ξxora</span> Features
      </h2>
      <div className="text-[#c4b5fd] max-w-2xl mb-12">
        The next-gen AI assistant for chat, voice, and call—built for every channel, every customer, every moment.
      </div>
      <div className="flex flex-col gap-20">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className={`
              flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20
              ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Text Section */}
            <div className="flex-1">
              <div className="mb-4">{feature.icon}</div>
              <div className="text-white text-2xl md:text-3xl font-bold mb-2">{feature.title}</div>
              <div className="text-[#c4b5fd] text-base mb-6">{feature.description}</div>
              <button className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white px-5 py-2 rounded-full font-semibold text-base hover:from-[#7c3aed] hover:to-[#a78bfa] transition w-fit">
                Learn More →
              </button>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#a78bfa]/40 to-[#3b0764]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-60 md:h-72"
                  style={{ background: "linear-gradient(135deg, #a78bfa33 0%, #3b0764 100%)" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}