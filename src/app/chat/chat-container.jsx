"use client";

import React from "react";
import { useChat } from "./context";
import ChatMessage from "@/components/chat/chat-message";

function ChatContainer() {
  const { messages } = useChat();
  return (
    <div className="max-w-4xl mx-auto flex-1 w-full">
      {messages.map((m, i) => (
        <ChatMessage key={`chat-${i}`} {...m} />
      ))}
    </div>
  );
}

export default ChatContainer;
