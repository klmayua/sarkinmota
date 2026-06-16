"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function AiMatchPage() {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "ai",
      content: "Welcome back, My Bratha! I be the official Sarkin Mota AI assistant. Tell me which kind luxury ride you want (SUV, sedan, EV) or any clearing question make I find answer for you sharply!"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setChatInput("");
    setIsTyping(true);

    // Simulate response delay
    setTimeout(() => {
      let aiText = "My Bratha, we get correct luxury rides inside our Abuja showroom. You fit view our electric vehicles like the Xiaomi YU7 or AMG GLE 63S.";
      if (userMsg.toLowerCase().includes("custom") || userMsg.toLowerCase().includes("duty")) {
        aiText = "Duty clearing na my specialty! Use our Customs Estimator tool to calculate Apapa/Tin Can landing rates instantly. Or make I connect you to our verified agents?";
      } else if (userMsg.toLowerCase().includes("price") || userMsg.toLowerCase().includes("cost")) {
        aiText = "Standard retail pricing is listed inside the vehicle profile, but you fit call Alamin Sarkinmota directly or submit an inquiry for custom VIP discounts.";
      } else if (userMsg.toLowerCase().includes("history") || userMsg.toLowerCase().includes("vin")) {
        aiText = "My Bratha, enter the 17-digit VIN code inside our Car History check tool to see if the ride get accident history or mileage rollback issues.";
      }
      setChatMessages((prev) => [...prev, { role: "ai", content: aiText }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto flex flex-col justify-between">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/tools" className="hover:text-gold transition-colors">Tools</a> / <span className="text-gold">AI Car Match</span>
      </nav>

      {/* Header */}
      <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-8">
        <div className="relative size-16 bg-panel border border-gold/30 rounded-md flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" fill="none" className="size-10 stroke-gold text-gold animate-pulse" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25-9 3.694-9 8.25c0 1.63.515 3.14 1.399 4.394L3.75 19.5l3.593-.898a9.123 9.123 0 004.657 1.648z" />
            <path d="M9 10l3 2 3-2v3.5l-3-1-3 1V10z" fill="currentColor" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-wide">MyBratha AI Assistant</h1>
          <p className="text-xs text-text-muted mt-1">Pidgin and English AI vehicle matcher and customs advisory chatbot.</p>
        </div>
      </div>

      {/* Chat Display Box */}
      <div className="flex-1 min-h-[400px] bg-panel border border-white/10 rounded-md p-6 overflow-y-auto space-y-4 shadow-xl flex flex-col justify-between mb-6">
        <div className="space-y-4 overflow-y-auto flex-1 max-h-[50vh] pr-2">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-gold text-black self-end rounded-br-none ml-auto"
                  : "bg-black border border-white/5 text-white self-start rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          ))}
          {isTyping && (
            <div className="bg-black border border-white/5 text-white p-4 rounded-lg self-start rounded-bl-none animate-pulse text-xs max-w-[200px]">
              MyBratha is typing...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Message Form */}
      <form onSubmit={handleSendMessage} className="flex gap-4 items-center">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Type your message (e.g., 'Find me a high range EV' or 'Custom duty rates')..."
          className="flex-1 bg-panel border border-white/10 rounded-md px-4 py-3.5 text-sm focus:border-gold outline-none text-white shadow-xl"
        />
        <button
          type="submit"
          className="px-8 py-3.5 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded-md hover:bg-gold-glow transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
}
