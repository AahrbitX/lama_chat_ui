import React, { useState } from "react";

const faqs = [
  {
    question: "What is Ξxora?",
    answer:
      "Ξxora is an AI-powered assistant by AahrbitX that automates customer chat, voice, and call support—24/7, across WhatsApp, Facebook, Instagram, and web.",
  },
  {
    question: "How does Ξxora help my business?",
    answer:
      "Ξxora cuts support costs by up to 90%, delivers instant, human-like replies, and manages all channels from one dashboard.",
  },
  {
    question: "Which platforms does Ξxora integrate with?",
    answer:
      "WhatsApp, Facebook Messenger, Instagram DMs, web apps—and more coming soon like Telegram and Slack.",
  },
  {
    question: "Can Ξxora be trained for my brand?",
    answer:
      "Ξxora does not use your customer data for training. Instead, it leverages advanced Retrieval-Augmented Generation (RAG) technologies to answer questions accurately while respecting your data privacy.",
  },
  {
    question: "Is Ξxora multilingual?",
    answer:
      "Absolutely. Ξxora supports multiple languages, understands slang, emojis, and regional context.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Ξxora uses secure cloud architecture, is GDPR-ready, and keeps your customer data safe.",
  },
  {
    question: "How fast is the response time?",
    answer:
      "Average response time is just 1.2 seconds—even at scale.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click 'Start Free Demo' or 'Schedule a Call'—our team will help you onboard and integrate instantly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 py-24 scroll-smooth" id="faq">
      <div className="flex justify-center mb-4">
        <span className="px-4 py-1 rounded-full border border-[#a78bfa] text-[#a78bfa] font-semibold text-sm bg-[#3b0764]/70 flex items-center gap-2">
           FAQ
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-white text-center">
        Frequently Asked <span className="text-[#a78bfa]">Questions</span>
      </h2>
      <div className="text-[#c4b5fd] max-w-2xl mb-12 mx-auto text-center text-base md:text-lg">
        Everything you need to know about Ξxora’s AI, integrations, and support—short, crisp, and clear.
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-[#a78bfa]/30 rounded-xl  shadow-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-[#a78bfa] text-xl">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-[#c4b5fd] text-base animate-fadeIn" style={{ fontFamily: "Poppins, sans-serif" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </section>
  );
}