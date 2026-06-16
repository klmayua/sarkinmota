"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slidesData = [
  {
    type: "image",
    src: "/static/carousel/xaiomi-yu7-green.png",
    title: "Nigeria's First Xiaomi YU7",
    subtitle: "The SUV redefining electric luxury. Only 2 units in the country.",
    btnText: "Reserve Yours",
    btnHref: "/vehicles/xiaomi-yu7"
  },
  {
    type: "image",
    src: "/static/carousel/R8.png",
    title: "Audi R8 - The Icon",
    subtitle: "V10 symphony. Mid-engine perfection. The supercar that needs no introduction.",
    btnText: "Experience R8",
    btnHref: "/vehicles/audi-r8"
  },
  {
    type: "image",
    src: "/static/carousel/mercedes-amg-gle-63.jpg",
    title: "Mercedes-AMG GLE 63S",
    subtitle: "603 HP of refined aggression. For those who demand both power and class.",
    btnText: "Unleash Performance",
    btnHref: "/vehicles/gle-63s"
  },
  {
    type: "image",
    src: "/static/carousel/bmw-i7-2025.png",
    title: "2025 BMW i7 - Pure Electric Prestige",
    subtitle: "Zero emissions. Infinite presence. The future of executive transport.",
    btnText: "Experience Innovation",
    btnHref: "/vehicles/bmw-i7"
  },
  {
    type: "image",
    src: "/static/carousel/CT.png",
    title: "Tesla Cybertruck - The Future Is Here",
    subtitle: "Bulletproof exoskeleton. Unmatched capability. Turn heads, break boundaries.",
    btnText: "Explore Cybertruck",
    btnHref: "/vehicles/cybertruck"
  },
  {
    type: "image",
    src: "/static/carousel/nissan-patrol-2025.png",
    title: "2025 Nissan Patrol - Command Respect",
    subtitle: "Built for Nigerian roads. Engineered for status. Uncompromising capability.",
    btnText: "Explore Patrol",
    btnHref: "/vehicles/nissan-patrol"
  },
  {
    type: "image",
    src: "/static/carousel/stelato-S9-Huawei-and-BAIC-1s.jpg",
    title: "Stelato S9 - Chinese Innovation",
    subtitle: "Huawei's AI-powered luxury sedan. The executive choice of tomorrow.",
    btnText: "Discover S9",
    btnHref: "/vehicles/stelato-s9"
  },
  {
    type: "image",
    src: "/static/carousel/xaiomi-yu7-blue.png",
    title: "Xiaomi YU7 - Technology Game-changer",
    subtitle: "Tech giant. Automotive disruptor. Own what's next in Abuja.",
    btnText: "Get Details",
    btnHref: "/vehicles/xiaomi-yu7"
  },
  {
    type: "video",
    src: "/static/carousel/sarkin-mota-addressed.mp4",
    title: "Sarkin Mota Autos Flagship",
    subtitle: "Experience luxury vehicle care, custom imports, and direct showroom sales in Abuja.",
    btnText: "Contact Us",
    btnHref: "/contact"
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    {
      role: "ai",
      content: "Welcome, My Bratha! I be the official Sarkin Mota guide. How I fit help you clear custom or find correct ride today?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Fade out initial loading overlay
    const timer = setTimeout(() => {
      setIsLoaderVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play carousel slides (10s intervals)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesData.length);
    }, 10000);
    return () => clearInterval(slideInterval);
  }, [activeSlide]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setChatInput("");
    setIsTyping(true);

    // Dynamic mock responses (to be hooked to live LLM in Phase 3)
    setTimeout(() => {
      let aiText = "My Bratha, we get correct luxury rides inside our Abuja showroom. You fit view our electric vehicles like the Xiaomi YU7 or AMG GLE 63S.";
      if (userMsg.toLowerCase().includes("custom") || userMsg.toLowerCase().includes("duty")) {
        aiText = "Duty clearing na my specialty! Use our Customs Estimator tool to calculate Apapa/Tin Can landing rates instantly. Or make I connect you to our verified agents?";
      } else if (userMsg.toLowerCase().includes("price") || userMsg.toLowerCase().includes("cost")) {
        aiText = "Standard retail pricing is listed inside the vehicle profile, but you fit call Alamin Sarkinmota directly or submit an inquiry for custom VIP discounts.";
      }
      setChatMessages((prev) => [...prev, { role: "ai", content: aiText }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen relative bg-black text-white font-sans overflow-hidden">
      {/* 1. INITIAL LOADER SCREEN */}
      {isLoaderVisible && (
        <div className="loader-overlay flex flex-col justify-center items-center">
          <div className="loader-glow"></div>
          <div className="relative w-48 h-32 animate-[logoFadeIn_0.8s_ease-out_both]">
            <Image
              src="/static/brand-logo-light.webp"
              alt="SarkinMota Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}



      {/* 3. HERO SLIDER */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="hero-vignette"></div>

        {slidesData.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover object-bottom"
                priority={idx === 0}
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-bottom"
              />
            )}

            {/* Slide Content Box */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 lg:px-32 bg-black/30">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading uppercase drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl text-white/90 font-medium drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="pt-4">
                  <a
                    href={slide.btnHref}
                    className="inline-block px-10 py-4 bg-gold text-black font-semibold text-sm uppercase tracking-widest rounded-md hover:bg-gold-glow hover:shadow-lg hover:shadow-gold/30 transition-all font-heading"
                  >
                    {slide.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Counter Overlay */}
        <div className="absolute right-6 top-36 z-20 md:right-20 lg:right-32">
          <div className="text-white/80 font-heading text-lg flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gold">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>
            <span className="text-white/40">/</span>
            <span className="text-sm font-light">09</span>
          </div>
        </div>

        {/* Horizontal Navigation Steppers */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex gap-3 justify-center px-6">
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${idx === activeSlide ? "w-12 bg-gold" : "w-6 bg-white/30 hover:bg-white/50"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>



      {/* 6. FLOATING CHAT WIDGET ("MyBratha" Assistant) */}
      <div className="fixed bottom-4 right-4 z-[998] flex flex-col items-end">
        {/* Chat Window */}
        {isChatOpen && (
          <div className="w-[360px] h-[480px] bg-[#0A0A0A] border border-gold/20 rounded-lg shadow-2xl flex flex-col mb-4 overflow-hidden animate-[fadeInUp_0.3s_ease-out]">
            {/* Header */}
            <div className="bg-gold text-black p-4 flex justify-between items-center font-heading font-bold">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>MyBratha AI</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-black hover:opacity-75">✕</button>
            </div>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm flex flex-col">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] p-3 rounded-lg leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gold text-black self-end rounded-br-none"
                      : "bg-zinc-900 text-white self-start rounded-bl-none border border-white/5"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="bg-zinc-900 text-white p-3 rounded-lg self-start rounded-bl-none border border-white/5 animate-pulse text-xs">
                  MyBratha is typing...
                </div>
              )}
            </div>
            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-black border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask in Pidgin or English..."
                className="flex-1 bg-zinc-900 border border-white/10 rounded px-3 py-2 text-white focus:border-gold outline-none"
              />
              <button type="submit" className="bg-gold text-black px-4 py-2 rounded font-semibold hover:bg-gold-glow">Send</button>
            </form>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="size-14 bg-black border border-gold/40 rounded-md flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer relative group"
          aria-label="Open Chat Guide"
        >
          <div className="absolute inset-0 rounded-md bg-gold/10 blur group-hover:bg-gold/25 transition-all"></div>
          <Image
            src="/static/mybratha.svg"
            alt="MyBratha logo"
            width={40}
            height={40}
            className="z-10 animate-pulse"
          />
        </button>
      </div>
    </div>
  );
}
