"use client";

import { MessageSquare, History, Settings, Trash2, Plus } from "lucide-react";
import React from "react";
import { ChatProvider } from "./context";

function ChatLayout({ children }) {
  return (
    <ChatProvider>
      <div className="flex h-screen bg-[#0d1117] text-white">
        {/* Sidebar */}
        <div className="w-64 bg-[#161b22] p-4 flex flex-col justify-between">
          <div>
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-2 px-4 py-3 bg-[#281080] hover:bg-[#4c2ea0] rounded-xl mb-6 text-sm font-medium"
            >
              <Plus size={18} /> New Chat
            </button>
            <div className="space-y-4">
              <SidebarItem icon={<MessageSquare size={18} />} label="Chats" />
              <SidebarItem icon={<History size={18} />} label="History" />
              <SidebarItem icon={<Trash2 size={18} />} label="Trash" />
              <SidebarItem icon={<Settings size={18} />} label="Settings" />
            </div>
          </div>
          <div className="text-sm opacity-60">
            &copy;&nbsp;AahrbitX&deg; 2025
          </div>
        </div>
        {children}
      </div>
    </ChatProvider>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition px-2 py-1">
      {icon} {label}
    </button>
  );
}

export default ChatLayout;
