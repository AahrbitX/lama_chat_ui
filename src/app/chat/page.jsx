"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { chat } from "../../utils/action";
import { useChat } from "./context";
import ChatContainer from "./chat-container";
import { TextShimmerWave } from "@/components/chat/text-shimmer";

export default function PremiumChatHome() {
  const [input, setInput] = useState("");

  const { loading, setLoading, addMessage } = useChat();

  const fetchChatResponse = async () => {
    setLoading(true);
    if (input.trim() === "") return;

    addMessage({ type: "user", message: input });

    try {
      const result = await chat(input);
      if (result && result.response) {
        setLoading(false);
        setInput("");
        addMessage({ type: "bot", message: result.response });
      }
    } catch (error) {
      console.error("Error fetching chat response:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchChatResponse();
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6">
      <ChatContainer />

      {/* Input Area */}
      {loading && (
        <TextShimmerWave
          duration={1}
          spread={1}
          zDistance={1}
          scaleDistance={1.1}
          rotateYDistance={20}
        >
          Loading
        </TextShimmerWave>
      )}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-[#161b22] text-white p-3 rounded-xl outline-none"
          disabled={loading}
        />

        <button
          disabled={loading || input.trim() === ""}
          onClick={fetchChatResponse}
          className={`p-3 rounded-xl ${
            loading || input.trim() === ""
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#281080] hover:bg-[#4c2ea0]"
          }`}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
