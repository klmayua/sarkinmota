"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#060606] mt-auto w-full">
      {/* 1. JOIN SARKIN MOTA SECTION */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 py-20 text-center flex flex-col items-center justify-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-wider text-white uppercase">
          JOIN SARKIN MOTA
        </h2>
        <p className="text-sm text-text-muted font-medium">
          Get in touch to make your dream car true.
        </p>
        <div className="pt-2">
          <a
            href="/contact"
            className="inline-block px-10 py-3.5 border border-gold/30 hover:border-gold hover:text-gold-glow bg-black text-gold text-xs uppercase font-bold tracking-widest rounded-sm transition-all shadow-lg hover:shadow-gold/10"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* 2. FOOTER LINKS COLUMNS SECTION */}
      <div className="border-t border-white/10 py-16 bg-[#030303] relative overflow-hidden">
        {/* Luxury Diagonal Pinstripe Backdrops in corners */}
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none opacity-20"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(198, 146, 71, 0.12) 0px, rgba(198, 146, 71, 0.12) 1px, transparent 1px, transparent 12px)"
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-20"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(198, 146, 71, 0.12) 0px, rgba(198, 146, 71, 0.12) 1px, transparent 1px, transparent 12px)"
          }}
        ></div>

        <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {/* Col 1: Products */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold font-heading font-black mb-6">
              PRODUCTS
            </h3>
            <ul className="space-y-4 text-xs font-bold text-white uppercase tracking-wider">
              <li><a href="/cars/executive" className="hover:text-gold transition-colors">EXECUTIVE CLASS</a></li>
              <li><a href="/cars/sport" className="hover:text-gold transition-colors">SPORT & PERFORMANCE</a></li>
              <li><a href="/cars/suvs" className="hover:text-gold transition-colors">PREMIUM SUVS</a></li>
              <li><a href="/cars/electric" className="hover:text-gold transition-colors">ELECTRIC VEHICLES</a></li>
              <li><a href="/bikes" className="hover:text-gold transition-colors">POWER BIKES</a></li>
              <li><a href="/buses" className="hover:text-gold transition-colors">EXECUTIVE BUSES</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold font-heading font-black mb-6">
              SERVICES
            </h3>
            <ul className="space-y-4 text-xs font-bold text-white uppercase tracking-wider">
              <li><a href="/tools/ai-match" className="hover:text-gold transition-colors">AI CAR MATCH</a></li>
              <li><a href="/tools/calculator" className="hover:text-gold transition-colors">LOAN CALCULATOR</a></li>
              <li><a href="/tools/compare" className="hover:text-gold transition-colors">COMPARE CARS</a></li>
              <li><a href="/network/brokers" className="hover:text-gold transition-colors">AUTO BROKERS</a></li>
              <li><a href="/network/customs" className="hover:text-gold transition-colors">CUSTOMS SPECIALISTS</a></li>
              <li><a href="/sell-swap" className="hover:text-gold transition-colors">SELL OR SWAP</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold font-heading font-black mb-6">
              COMPANY
            </h3>
            <ul className="space-y-4 text-xs font-bold text-white uppercase tracking-wider">
              <li><a href="/news" className="hover:text-gold transition-colors">NEWS & EVENTS</a></li>
              <li><a href="/about" className="hover:text-gold transition-colors">ABOUT US</a></li>
              <li><a href="/careers" className="hover:text-gold transition-colors">CAREERS</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">CONTACT</a></li>
            </ul>
          </div>

          {/* Col 4: Follow Us */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold font-heading font-black mb-6">
              FOLLOW US
            </h3>
            <div className="flex flex-wrap gap-3 mt-2">
              {/* X */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                className="size-10 rounded-md border border-white/10 flex items-center justify-center text-text-muted hover:border-gold hover:text-gold transition-all bg-black/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="size-10 rounded-md border border-white/10 flex items-center justify-center text-text-muted hover:border-gold hover:text-gold transition-all bg-black/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="size-10 rounded-md border border-white/10 flex items-center justify-center text-text-muted hover:border-gold hover:text-gold transition-all bg-black/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer" 
                className="size-10 rounded-md border border-white/10 flex items-center justify-center text-text-muted hover:border-gold hover:text-gold transition-all bg-black/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.95-1.72-.1-.09-.17-.21-.3-.3v5.42c-.08 3.29-1.99 6.27-5.04 7.42-3.05 1.18-6.73.57-9.13-1.63-2.39-2.22-3.15-5.83-1.87-8.81 1.25-2.92 4.38-4.7 7.54-4.38v4.22c-1.77-.28-3.55.54-4.22 2.21-.67 1.66-.07 3.71 1.44 4.58 1.51.87 3.59.39 4.51-1.11.33-.52.48-1.13.48-1.74.02-3.41.01-6.82.02-10.23z" />
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="size-10 rounded-md border border-white/10 flex items-center justify-center text-text-muted hover:border-gold hover:text-gold transition-all bg-black/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="border-t border-white/10 py-8 bg-[#020202]">
        <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted gap-4">
          <p className="uppercase tracking-wider font-mono">© SARKIN MOTA AUTOS 2026</p>
          <p>
            Website by <a href="#" className="hover:text-gold transition-colors font-bold text-white">WeAreQuest</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
