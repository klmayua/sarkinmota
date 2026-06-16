"use client";

import Image from "next/image";

const networkCategories = [
  {
    title: "Auto Brokers",
    description: "Connect with accredited luxury brokers in Abuja to negotiate sales, leasing, and swaps.",
    href: "/network/brokers",
    icon: "💼"
  },
  {
    title: "Customs Specialists",
    description: "Hire licensed clearing agents experienced in handling RORO customs clearance at Lagos ports.",
    href: "/network/customs",
    icon: "⚓"
  },
  {
    title: "Inspections & Valuers",
    description: "Book certified vehicle appraisers to verify VIN background status and condition before purchase.",
    href: "/network/experts",
    icon: "🛡️"
  },
  {
    title: "VIP Concierge",
    description: "Submit custom import requests for exotic supercars and next-gen electric vehicles not found in stock.",
    href: "/network/concierge",
    icon: "🔑"
  },
  {
    title: "Supercar Clubs",
    description: "Join verified luxury car owner circles, regional chapters, and track day clubs in Nigeria.",
    href: "/network/clubs",
    icon: "🏎️"
  },
  {
    title: "Maintenance Technicians",
    description: "Browse certified engine tuners, auto electricians, and EV diagnostics experts in Abuja.",
    href: "/network/technicians",
    icon: "🔧"
  },
  {
    title: "Dealer Partner Network",
    description: "Explore catalog lists of verified dealership affiliates and authorized importers.",
    href: "/network/partner",
    icon: "🤝"
  }
];

export default function NetworkLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Partner Network</span>
      </nav>

      <div className="border-b border-white/10 pb-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Sarkin Mota Partner Network</h1>
        <p className="text-sm text-text-muted mt-2">Connect with verified logistics, brokerage, clearing, and maintenance professionals in Abuja.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {networkCategories.map((cat) => (
          <a
            key={cat.href}
            href={cat.href}
            className="block p-8 bg-panel border border-white/10 rounded-md hover:border-gold/40 transition-all shadow-xl space-y-4 group"
          >
            <div className="text-3xl size-12 bg-black border border-white/5 rounded-md flex items-center justify-center group-hover:border-gold/30 group-hover:text-gold-glow transition-all">
              {cat.icon}
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-tight group-hover:text-gold transition-colors">{cat.title}</h2>
              <p className="text-xs text-text-muted mt-2 leading-relaxed">{cat.description}</p>
            </div>
            <div className="pt-2 text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Browse Directory <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
