// src/app/page.tsx

"use client";

import { useState } from "react";
import { useAIChatStream } from "next-ai-stream/client";

function HomePage() {
  const [inputText, setInputText] = useState("");

  const { messages, submitNewMessage, loading } = useAIChatStream({
    apiEndpoint: "/api/chat",
    systemPrompt: `You are a helpful AI assistant. Be very succinct in your responses because I don't want drop all my cash on tokens.`,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    submitNewMessage(inputText);
    setInputText("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8 pb-36">
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={`p-4 rounded-2xl max-w-[70%] ${
                message.role === "user"
                  ? "bg-slate-800 text-white ml-auto"
                  : "bg-slate-900 text-gray-200 mr-auto"
              }`}
            >
              {message.content as string}
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 w-full bg-black/90 backdrop-blur-sm py-6">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-4"
        >
          <input
            className="rounded-lg p-4 bg-slate-800 w-[500px]"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            className={`bg-slate-800 p-4 rounded-lg ${
              loading ? "opacity-50" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
