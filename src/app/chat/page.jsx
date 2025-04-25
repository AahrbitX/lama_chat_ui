// 'use client'

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Send, MessageSquare, History, Settings, Trash2, Plus } from "lucide-react";
// import { chat } from "../../utils/action";

// export default function PremiumChatHome() {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");

//   const fetchChatResponse = async () => {
//     if (input.trim() === "") return;

//     try {
//       const result = await chat(input);
//       if (result && result.response) {
//         setResponse(result.response);
//       }
//     } catch (error) {
//       console.error("Error fetching chat response:", error);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-[#0d1117] text-white">
//       {/* Sidebar */}
//       <div className="w-64 bg-[#161b22] p-4 flex flex-col justify-between">
//         <div>
//           <button className="flex items-center gap-2 px-4 py-3 bg-[#281080] hover:bg-[#4c2ea0] rounded-xl mb-6 text-sm font-medium">
//             <Plus size={18} /> New Chat
//           </button>
//           <div className="space-y-4">
//             <SidebarItem icon={<MessageSquare size={18} />} label="Chats" />
//             <SidebarItem icon={<History size={18} />} label="History" />
//             <SidebarItem icon={<Trash2 size={18} />} label="Trash" />
//             <SidebarItem icon={<Settings size={18} />} label="Settings" />
//           </div>
//         </div>
//         <div className="text-sm opacity-60">© YourCompany 2025</div>
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col items-center justify-center px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl font-bold mb-4">Welcome to ChatBot Pro</h1>
//           <p className="text-lg opacity-70">Your intelligent assistant powered by AI</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
//           <FeatureCard
//             title="Examples"
//             items={[
//               '"Help me write a business pitch"',
//               '"Summarize this meeting transcript"',
//               '"Create a cold outreach email"',
//             ]}
//           />

//           <FeatureCard
//             title="Capabilities"
//             items={[
//               "Understands complex context",
//               "Remembers previous messages",
//               "Gives markdown-ready output",
//             ]}
//           />

//           <FeatureCard
//             title="Limitations"
//             items={[
//               "May require clarification",
//               "Relies on user-provided data",
//               "Might generate incomplete ideas",
//             ]}
//           />
//         </div>

//         {/* Chat Messages */}
//         <div className="w-full max-w-3xl mt-8 space-y-4">
//           {response && (
//             <div className="flex flex-col space-y-4">
//               <div className="flex justify-start">
//                 <div className="bg-[#161b22] p-3 rounded-lg max-w-xs text-sm border border-[#30363d]">
//                   {input}
//                 </div>
//               </div>
//               <div className="flex justify-end">
//                 <div className="bg-[#252386] p-3 rounded-lg max-w-xs text-sm border border-[#30363d]">
//                   {response}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Chat Input */}
//         <div className="w-full max-w-3xl mt-16">
//           <div className="flex items-center bg-[#161b22] rounded-xl px-4 py-3 shadow-md">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Send a message"
//               className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400"
//             />
//             <button className="ml-3 text-[#252386] hover:text-[#40417e]">
//               <Send size={20} />
//             </button>
//           </div>
//             <button
//               onClick={fetchChatResponse}
//               className="ml-3 text-[#252386] hover:text-[#40417e]"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//   );
// }

// function SidebarItem({ icon, label }) {
//   return (
//     <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#21262d] cursor-pointer transition-colors">
//       {icon}
//       <span className="text-sm font-medium">{label}</span>
//     </div>
//   );
// }
// function FeatureCard({ title, items }) {
//   return (
//     <div className="bg-[#161b22] rounded-2xl p-6 shadow-xl border border-[#30363d]">
//       <h3 className="text-xl font-semibold mb-4 text-[#58a6ff]">{title}</h3>
//       <ul className="space-y-3 text-sm text-gray-300">
//         {items.map((item, idx) => (
//           <li key={idx} className="bg-[#0d1117] p-3 rounded-lg border border-[#30363d]">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  MessageSquare,
  History,
  Settings,
  Trash2,
  Plus,
} from 'lucide-react';
import { chat } from '../../utils/action';

function SidebarItem({ icon, label }) {
  return (
    <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition px-2 py-1">
      {icon} {label}
    </button>
  );
}

export default function PremiumChatHome() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const fetchChatResponse = async () => {
    if (input.trim() === '') return;

    try {
      const result = await chat(input);
      if (result && result.response) {
        setResponse(result.response);
      }
    } catch (error) {
      console.error('Error fetching chat response:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchChatResponse();
    }
  };

  return (
    <div className="flex h-screen bg-[#0d1117] text-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#161b22] p-4 flex flex-col justify-between">
        <div>
          <button className="flex items-center gap-2 px-4 py-3 bg-[#281080] hover:bg-[#4c2ea0] rounded-xl mb-6 text-sm font-medium">
            <Plus size={18} /> New Chat
          </button>
          <div className="space-y-4">
            <SidebarItem icon={<MessageSquare size={18} />} label="Chats" />
            <SidebarItem icon={<History size={18} />} label="History" />
            <SidebarItem icon={<Trash2 size={18} />} label="Trash" />
            <SidebarItem icon={<Settings size={18} />} label="Settings" />
          </div>
        </div>
        <div className="text-sm opacity-60">© YourCompany 2025</div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col justify-between p-6">
        <div className="flex-1 overflow-auto">
          {response && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#161b22] p-4 rounded-xl max-w-2xl"
            >
              {response}
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-[#161b22] text-white p-3 rounded-xl outline-none"
          />
          <button
            onClick={fetchChatResponse}
            className="p-3 bg-[#281080] hover:bg-[#4c2ea0] rounded-xl"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

