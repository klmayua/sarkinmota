"use client";

import Image from "next/image";

export default function SellSwapHub() {
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
            <a href="/contact" className="text-xs uppercase tracking-wider bg-gold text-black px-6 py-2.5 rounded-full hover:bg-gold-glow transition-all font-semibold">Contact Us</a>
          </div>
        </nav>
      </header>

      {/* Main Options */}
      <main className="max-w-5xl mx-auto px-6 py-16 flex-1 flex flex-col justify-center">
        <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
          <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Sell & Swap</span>
        </nav>

        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-wide">
            Sell or Swap Your Vehicle
          </h1>
          <p className="text-sm text-text-muted">
            Nigeria's most secure and premium platform to monetize your luxury automobile or exchange it for a high-end upgrade from our verified inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Sell Your Car */}
          <div className="bg-panel border border-white/10 rounded-md p-10 flex flex-col justify-between hover:border-gold/40 transition-all group shadow-xl">
            <div className="space-y-6">
              <div className="text-4xl">💰</div>
              <h2 className="text-2xl font-bold font-heading uppercase tracking-tight text-white group-hover:text-gold transition-colors">
                Sell Your Car
              </h2>
              <p className="text-xs text-text-muted leading-relaxed">
                List your luxury vehicle directly on Sarkin Mota Autos. Access our vetted network of Abuja and Lagos high-net-worth buyers, certified auto brokers, and import dealers. Real-time offer tracking.
              </p>
              <ul className="space-y-2 text-xs text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Vetted Buyer Network
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Verified Valuation Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Escrow & Legal Protection
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a
                href="/sell"
                className="block text-center py-3 bg-white/5 hover:bg-gold hover:text-black transition-all text-xs uppercase font-semibold tracking-wider rounded-sm"
              >
                Create Listing →
              </a>
            </div>
          </div>

          {/* Card 2: Swap / Trade-In */}
          <div className="bg-panel border border-white/10 rounded-md p-10 flex flex-col justify-between hover:border-gold/40 transition-all group shadow-xl">
            <div className="space-y-6">
              <div className="text-4xl">🔄</div>
              <h2 className="text-2xl font-bold font-heading uppercase tracking-tight text-white group-hover:text-gold transition-colors">
                Trade-In / Swap
              </h2>
              <p className="text-xs text-text-muted leading-relaxed">
                Upgrade your status instantly. Tell us about your current luxury vehicle, pick your desired upgrade from our showroom catalog, and get an instant trade-in value valuation from our experts.
              </p>
              <ul className="space-y-2 text-xs text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Instant Showroom Upgrades
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Inspection & Diagnostics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Flexible Difference Financing
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a
                href="/swap"
                className="block text-center py-3 bg-gold text-black hover:bg-gold-glow transition-all text-xs uppercase font-semibold tracking-wider rounded-sm shadow-md shadow-gold/25"
              >
                Request Trade-in Value →
              </a>
            </div>
          </div>
        </div>

        {/* Existing Listings Link */}
        <div className="text-center mt-12 text-xs text-text-muted">
          Already have listings active?{" "}
          <a href="/sell/dashboard" className="text-gold hover:underline">
            Go to Seller Dashboard
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#060606] border-t border-white/5 py-8 text-center text-xs text-text-muted">
        <p>© SARKIN MOTA AUTOS 2026</p>
      </footer>
    </div>
  );
}
