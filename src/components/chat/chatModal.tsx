import React, { useState, useRef, useEffect } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatModal({ open, setOpen }) {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi, I'm Ξxora! How can I help you today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Thanks for reaching out! We'll get back to you soon." }
      ]);
    }, 900);
  };

  return (
    <>
      <button
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-[#a78bfa] via-[#7c3aed] to-[#3b0764] text-white rounded-full shadow-lg p-4 hover:scale-105 transition"
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="14" fill="#a78bfa" />
          <path d="M8 18v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8l-3-2H10a2 2 0 0 1-2-2z" fill="#fff"/>
        </svg>
      </button>

      {open && (
          <div className="w-full h-[600px] fixed bottom-[12%] right-[2%] max-w-md bg-gradient-to-br from-[#3b0764] via-[#7c3aed] to-[#a78bfa] rounded-2xl shadow-2xl p-0 flex flex-col overflow-hidden z-50 animate-fadeInUp">
            <div className="flex items-center justify-between px-6 py-4 bg-[#a78bfa]/20 border-b border-[#a78bfa]/30">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white">Ξxora Chat</span>
                <span className="text-xs text-[#c4b5fd] bg-[#3b0764]/60 px-2 py-1 rounded-full">AI Assistant</span>
              </div>
              <button
                className="text-[#a78bfa] hover:text-white transition text-xl"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
            <div className="flex-1 px-4 py-3 overflow-y-auto bg-gradient-to-br from-[#3b0764]/80 via-[#7c3aed]/60 to-[#a78bfa]/30">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex mb-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm ${
                      msg.sender === "user"
                        ? "bg-[#a78bfa] text-white"
                        : "bg-[#ede9fe]/80 text-[#3b0764]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 px-4 py-3 bg-[#3b0764]/60 border-t border-[#a78bfa]/20"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full bg-[#ede9fe]/10 text-white border border-[#a78bfa]/30 focus:outline-none focus:border-[#a78bfa] placeholder-[#a78bfa]/60"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white px-5 py-2 rounded-full font-semibold hover:from-[#7c3aed] hover:to-[#a78bfa] transition"
              >
                Send
              </button>
            </form>
          </div>
      )}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s cubic-bezier(.4,2,.6,1);
        }
      `}</style>
    </>
  );
}