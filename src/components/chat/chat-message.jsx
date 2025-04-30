"use client";

import { Bot, User } from "lucide-react";
import React from "react";

function ChatMessage({ type, message }) {
  console.log(type, message);
  return (
    <div
      className={`w-full my-3 flex items-start gap-2 ${
        type === "user" ? "flex-row-reverse" : "justify-start"
      } `}
    >
      <span className="p-2 bg-violet-600 rounded-full">
        {type === "user" ? <User /> : <Bot />}
      </span>
      <p
        className={` px-4 py-3 rounded-xl  ${
          type === "user"
            ? " bg-neutral-300 text-black "
            : "bg-neutral-800 text-white"
        }`}
      >
        {message}
      </p>
    </div>
  );
}

export default ChatMessage;
