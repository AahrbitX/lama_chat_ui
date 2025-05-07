"use client";

import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext(undefined);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message:
        "# Welcome to Lama Chat\n\nHow can I help you today?\n\n* Ask questions regarding the file\n* Get information about the file\n* Have a conversation about it",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, loading, setLoading }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within ChatProvider");
  return context;
};
