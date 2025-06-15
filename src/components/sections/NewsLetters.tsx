import React, { useState } from "react";

export default function NewsLetters() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative z-10 max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="flex justify-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full border border-[#a78bfa] text-[#a78bfa] text-xs font-semibold bg-[#3b0764]/60 tracking-widest">
          Stay Updated
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
        Get <span className="text-[#a78bfa]">Ξxora</span> Updates & Insights
      </h2>
      <p className="text-[#c4b5fd] mb-8">
        Be the first to know about new features, AI tips, and exclusive offers. No spam—just smart updates.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="px-5 py-3 rounded-full bg-[#3b0764]/60 border border-[#a78bfa]/40 text-white focus:outline-none focus:border-[#a78bfa] w-full sm:w-80 placeholder-[#a78bfa]/60"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white px-8 py-3 rounded-full font-semibold hover:from-[#7c3aed] hover:to-[#a78bfa] transition"
        >
          Subscribe
        </button>
      </form>
      {submitted && (
        <div className="mt-4 text-[#a78bfa] font-semibold">
          Thank you for subscribing!
        </div>
      )}
    </section>
  );
}