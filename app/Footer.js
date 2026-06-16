"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#060606] border-t border-white/5 pt-20 pb-8 mt-auto">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        
        {/* Col 1: Vehicles */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-gold font-heading font-black mb-6">
            Vehicles Showroom
          </h3>
          <ul className="space-y-3 text-xs text-text-muted">
            <li><a href="/vehicles" className="hover:text-white transition-colors">Browse All Inventory</a></li>
            <li><a href="/cars/executive" className="hover:text-white transition-colors">Executive Class Sedans</a></li>
            <li><a href="/cars/sport" className="hover:text-white transition-colors">Sport & Performance</a></li>
            <li><a href="/cars/suvs" className="hover:text-white transition-colors">Premium SUVs</a></li>
            <li><a href="/cars/electric" className="hover:text-white transition-colors">Electric Vehicles (EVs)</a></li>
            <li><a href="/bikes" className="hover:text-white transition-colors">Luxury Power Bikes</a></li>
            <li><a href="/buses" className="hover:text-white transition-colors">VIP Buses & Vans</a></li>
          </ul>
        </div>

        {/* Col 2: Ownership Tools */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-gold font-heading font-black mb-6">
            Ownership Tools
          </h3>
          <ul className="space-y-3 text-xs text-text-muted">
            <li><a href="/tools/ai-match" className="hover:text-white transition-colors">MyBratha AI Assistant</a></li>
            <li><a href="/tools/calculator" className="hover:text-white transition-colors">Loan Repay Calculator</a></li>
            <li><a href="/tools/compare" className="hover:text-white transition-colors">Compare Vehicle Specs</a></li>
            <li><a href="/tools/valuation" className="hover:text-white transition-colors">Value Depreciation Calculator</a></li>
            <li><a href="/tools/history" className="hover:text-white transition-colors">VIN Car History Check</a></li>
            <li><a href="/professional/customs" className="hover:text-white transition-colors">Customs Duty Estimator</a></li>
          </ul>
        </div>

        {/* Col 3: Sarkin Mota Network */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-gold font-heading font-black mb-6">
            Partner Network
          </h3>
          <ul className="space-y-3 text-xs text-text-muted">
            <li><a href="/network/brokers" className="hover:text-white transition-colors">Auto Broker Directory</a></li>
            <li><a href="/network/customs" className="hover:text-white transition-colors">Customs Clearing Specialists</a></li>
            <li><a href="/network/experts" className="hover:text-white transition-colors">Pre-Purchase Inspectors</a></li>
            <li><a href="/network/concierge" className="hover:text-white transition-colors">VIP Import Concierge</a></li>
            <li><a href="/network/technicians" className="hover:text-white transition-colors">Maintenance Technicians</a></li>
            <li><a href="/network/partner" className="hover:text-white transition-colors">Dealer Partner Program</a></li>
          </ul>
        </div>

        {/* Col 4: Corporate Ecosystem */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-gold font-heading font-black mb-6">
            Ecosystem & Brand
          </h3>
          <ul className="space-y-3 text-xs text-text-muted">
            <li><a href="/news" className="hover:text-white transition-colors">News, Blogs & Press</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About SARKIN MOTA</a></li>
            <li><a href="/careers" className="hover:text-white transition-colors">Careers & Job Openings</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Showroom</a></li>
            <li><a href="/sell-swap" className="hover:text-white transition-colors">Sell or Swap Portals</a></li>
          </ul>

          <div className="flex gap-4 mt-6">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="size-8 rounded border border-white/10 flex items-center justify-center text-[10px] text-text-muted hover:border-gold hover:text-gold transition-all bg-black font-bold">X</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="size-8 rounded border border-white/10 flex items-center justify-center text-[10px] text-text-muted hover:border-gold hover:text-gold transition-all bg-black font-bold">YT</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="size-8 rounded border border-white/10 flex items-center justify-center text-[10px] text-text-muted hover:border-gold hover:text-gold transition-all bg-black font-bold">IG</a>
          </div>
        </div>

      </div>

      <div className="max-w-8xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-[10px] text-text-muted gap-4">
        <p>© SARKIN MOTA AUTOS 2026. ALL RIGHTS RESERVED.</p>
        <p>Website by <a href="#" className="hover:text-gold transition-colors font-semibold">WeAreQuest</a></p>
      </div>
    </footer>
  );
}
