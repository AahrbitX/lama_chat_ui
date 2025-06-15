import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}