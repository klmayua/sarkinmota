"use client";

import Image from "next/image";

const toolsData = [
  {
    title: "AI Car Match",
    description: "Chat in Pidgin or English with MyBratha AI to get personalized luxury car suggestions from our showroom inventory.",
    href: "/tools/ai-match",
    icon: "🤖"
  },
  {
    title: "Loan Calculator",
    description: "Compute your monthly automotive finance repayments, interest rates, and amortization schedules dynamically.",
    href: "/tools/calculator",
    icon: "💵"
  },
  {
    title: "Compare Vehicles",
    description: "Select up to 3 supercars or luxury SUVs and inspect their performance specifications side-by-side.",
    href: "/tools/compare",
    icon: "📊"
  },
  {
    title: "Market Value Estimator",
    description: "Estimate your vehicle's current market trade-in and resale value in Nigeria based on age, mileage, and condition.",
    href: "/tools/valuation",
    icon: "📈"
  },
  {
    title: "Car History Check (VIN)",
    description: "Verify vehicle background records, accident history, mileage logs, and recall statuses via our 17-digit VIN portal.",
    href: "/tools/history",
    icon: "🛡️"
  },
  {
    title: "Customs Duty Estimator",
    description: "Estimate Nigeria Customs Service (NCS) clearing costs, port handling fees, and shipping values for exotic imports.",
    href: "/tools/estimator",
    icon: "⚓"
  }
];

export default function ToolsLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Ownership Tools</span>
      </nav>

      <div className="border-b border-white/10 pb-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Automotive Ownership Tools</h1>
        <p className="text-sm text-text-muted mt-2">Smart utility tools to buy, finance, clear, and verify your luxury vehicles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toolsData.map((tool) => (
          <a
            key={tool.href}
            href={tool.href}
            className="block p-8 bg-panel border border-white/10 rounded-md hover:border-gold/40 transition-all shadow-xl space-y-4 group"
          >
            <div className="text-3xl size-12 bg-black border border-white/5 rounded-md flex items-center justify-center group-hover:border-gold/30 group-hover:text-gold-glow transition-all">
              {tool.icon}
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-tight group-hover:text-gold transition-colors">{tool.title}</h2>
              <p className="text-xs text-text-muted mt-2 leading-relaxed">{tool.description}</p>
            </div>
            <div className="pt-2 text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Launch Tool <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
