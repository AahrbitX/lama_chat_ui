"use client";

import React from "react";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

function ChatMessage({ type, message }) {
  return (
    <div
      className={`w-full my-3 flex items-start gap-2 ${
        type === "user" ? "flex-row-reverse" : "justify-start"
      } `}
    >
      <span className="p-2 bg-violet-600 rounded-full">
        {type === "user" ? <User /> : <Bot />}
      </span>
      <div
        className={`chatbox px-4 py-3 rounded-xl  ${
          type === "user"
            ? " bg-neutral-300 text-black "
            : "bg-neutral-800 text-white"
        }`}
      >
        <ReactMarkdown>{message}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ChatMessage;
