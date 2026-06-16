"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Header Navigation */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto h-[108px] flex justify-between items-center px-6 lg:px-12">
          <a href="/" className="relative w-28 h-16 flex items-center">
            <Image
              src="/static/brand-logo-light.webp"
              alt="SarkinMota Logo"
              fill
              className="object-contain"
              priority
            />
          </a>
          <div className="flex gap-x-6 items-center">
            <a href="/vehicles" className="text-xs uppercase tracking-wider text-white hover:text-gold transition-colors font-medium">Showroom</a>
            <a href="/tools" className="text-xs uppercase tracking-wider text-white hover:text-gold transition-colors font-medium">Tools</a>
            <a href="/sell-swap" className="text-xs uppercase tracking-wider text-white hover:text-gold transition-colors font-medium">Sell / Swap</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 flex-1 w-full space-y-16">
        {/* Breadcrumbs */}
        <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
          <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">About Us</span>
        </nav>

        {/* Section 1: Intro */}
        <div className="border-b border-white/10 pb-6 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">About Sarkin Mota</h1>
          <p className="text-sm text-text-muted mt-2">Nigeria's premier luxury vehicle commerce and maintenance ecosystem.</p>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 bg-panel border border-white/10 rounded-md p-8 lg:p-12 shadow-2xl items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-tight text-gold">
              Redefining Luxury Auto Sourcing
            </h2>
            <p className="text-xs text-text-muted leading-relaxed">
              Established in the heart of the Central Business District, Abuja, Sarkin Mota Autos represents the pinnacle of premium automotive brokerages in Nigeria. We bridge the gap between high-net-worth individuals and global manufacturers, specializing in custom exotic imports, bespoke vehicle configuration, and premium detailing care.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Our name, <span className="text-white font-semibold">Sarkin Mota</span> (Hausa for "King of Cars"), represents our dedication to absolute visual and engineering authority. Whether importing the latest limited-edition Ferrari, clearing complex customs duty tariffs, or performing EV diagnostics, we deliver a flawless client experience.
            </p>
          </div>
          <div className="relative aspect-square w-full bg-black border border-white/5 rounded overflow-hidden">
            <Image
              src="/static/carousel/xaiomi-yu7-blue.png"
              alt="Luxury Brokerage"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-heading text-center">Our Core Operating Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-panel border border-white/5 p-8 rounded space-y-4">
              <div className="text-2xl text-gold">🛡️</div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Forensic Transparency</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Every vehicle listed in our inventory or imported via our concierge network undergoes comprehensive VIN history checks and rigorous physical diagnostic testing.
              </p>
            </div>
            <div className="bg-panel border border-white/5 p-8 rounded space-y-4">
              <div className="text-2xl text-gold">⚡</div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">EV Leadership</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Sarkin Mota is leading Nigeria's transition to green luxury. We are Abuja's first brokerage to verify, import, and service high-performance electric vehicles like the Xiaomi YU7 and Stelato S9.
              </p>
            </div>
            <div className="bg-panel border border-white/5 p-8 rounded space-y-4">
              <div className="text-2xl text-gold">🤝</div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Broker Ecosystem</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We foster a collaborative network, licensing accredited Abuja auto brokers, customs clearance specialists, and certified technicians to guarantee hassle-free deliveries.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Callout */}
        <div className="border border-white/10 rounded bg-[#0A0A0A] p-8 text-center space-y-4">
          <h3 className="text-lg font-bold font-heading uppercase text-white">Alamin Sarkinmota</h3>
          <p className="text-xs text-gold uppercase tracking-wider">Founder & Managing Director</p>
          <p className="text-xs text-text-muted max-w-xl mx-auto leading-relaxed">
            "Sarkin Mota isn't just about selling supercars; it's about engineering an ecosystem. We believe luxury vehicle ownership in Nigeria should be backed by complete legal clarity, digital convenience, and elite maintenance standards."
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#060606] border-t border-white/5 py-8 text-center text-xs text-text-muted">
        <p>© SARKIN MOTA AUTOS 2026</p>
      </footer>
    </div>
  );
}
