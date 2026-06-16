"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Vehicles",
    hasDropdown: true,
    dropdownTitle: "Luxury Cars, Power Bikes & Executive Transport",
    cols: [
      [
        { name: "Browse All Vehicles", href: "/vehicles", desc: "Complete inventory at your fingertips" },
        { name: "Sport & Performance", href: "/cars/sport", desc: "AMG, M-Series, Lamborghini" },
        { name: "Electric Vehicles", href: "/cars/electric", desc: "Tesla, Cybertruck, Chinese EVs" },
        { name: "Power Bikes", href: "/bikes", desc: "BMW, Kawasaki Ninja, Ducati" }
      ],
      [
        { name: "Executive Class Cars", href: "/cars/executive", desc: "S-Class, 7 Series, A8 - Premium sedans" },
        { name: "Luxury SUVs", href: "/cars/suvs", desc: "G-Wagon, Range Rover, Cayenne" },
        { name: "Daily Luxury", href: "/cars/daily", desc: "Honda, Toyota - Fuel efficient & durable" },
        { name: "Vans & Buses", href: "/buses", desc: "Executive transport & cargo solutions" }
      ]
    ]
  },
  {
    name: "Ownership Tools",
    hasDropdown: true,
    dropdownTitle: "Smart Tools to Buy, Finance & Verify Your Car",
    cols: [
      [
        { name: "AI Car Match", href: "/tools/ai-match", desc: "Answer questions, get recommendations" },
        { name: "Compare Vehicles", href: "/tools/compare", desc: "Side-by-side specs comparison" },
        { name: "Car History Check", href: "/tools/history", desc: "Full vehicle verification report" }
      ],
      [
        { name: "Loan Calculator", href: "/tools/calculator", desc: "Calculate monthly payments" },
        { name: "Value Estimator", href: "/tools/valuation", desc: "Get accurate trade-in prices" },
        { name: "Customs Duty Estimator", href: "/tools/estimator", desc: "Calculate clearing rates" }
      ]
    ]
  },
  {
    name: "Sarkin Mota Network",
    hasDropdown: true,
    dropdownTitle: "Abuja's Premier Automotive Service Network",
    cols: [
      [
        { name: "Auto Brokers", href: "/network/brokers", desc: "Abuja's accredited broker profiles" },
        { name: "Customs Specialists", href: "/network/customs", desc: "Verified clearing agents index" },
        { name: "Inspections & Valuers", href: "/network/experts", desc: "Pre-purchase inspection team" },
        { name: "VIP Concierge", href: "/network/concierge", desc: "Custom import vehicle reservations" }
      ],
      [
        { name: "Exclusive Supercar Clubs", href: "/network/clubs", desc: "Supercar owners registry" },
        { name: "Maintenance Technicians", href: "/network/technicians", desc: "Verified service center specialists" },
        { name: "Dealer Partner Network", href: "/network/partner", desc: "Affiliated dealer profiles" }
      ]
    ]
  },
  {
    name: "Sell or Swap",
    hasDropdown: true,
    dropdownTitle: "Monetize or Exchange Your Luxury Car",
    alignRight: true,
    cols: [
      [
        { name: "Sell Vehicle", href: "/sell", desc: "List your car on our premium network" },
        { name: "Swap Vehicle", href: "/swap", desc: "Request dynamic trade-in valuation" }
      ],
      [
        { name: "Integrated Sell & Swap", href: "/sell-swap", desc: "Explore both pathways side-by-side" },
        { name: "Dashboard", href: "/sell/dashboard", desc: "Access your active listings & leads" }
      ]
    ]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState(null);
  const pathname = usePathname();

  // Close menu on route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMobileTab(null);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header className={`${isHome ? "absolute top-0 left-0 right-0" : "sticky top-0 bg-[#060606] border-b border-white/10"} z-50 transition-all duration-300`}>
      <nav className="max-w-7xl mx-auto h-[108px] grid grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-12 border-b border-white/5 lg:border-white/10">
        
        {/* Left: Hamburger + Dropdowns */}
        <div className="flex gap-x-8 items-center h-full">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="size-10 border border-white/10 hover:border-gold/50 rounded-md flex items-center justify-center transition-all bg-black/40 backdrop-blur-sm cursor-pointer"
            aria-label="Open Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-6 stroke-white" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
              <line x1="4" y1="18" x2="16" y2="18" strokeLinecap="round" />
            </svg>
          </button>

          {/* Desktop Nav Items with Hover Dropdowns */}
          <div className="hidden lg:flex gap-x-6 h-full items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-10 h-full flex items-center">
                <button className="text-[11px] uppercase tracking-wider text-white hover:text-gold transition-colors font-semibold flex items-center gap-1 cursor-pointer">
                  {link.name}
                  <svg className="size-2.5 stroke-white group-hover:stroke-gold transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Hover Dropdown Box */}
                <div className={`absolute top-[90%] ${link.alignRight ? "right-0" : "left-0"} w-[520px] bg-black/95 border border-white/10 rounded-md p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-md z-[100]`}>
                  <div className="text-[9px] text-gold uppercase tracking-widest font-heading font-bold mb-4 border-b border-white/10 pb-2">
                    {link.dropdownTitle}
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {link.cols.map((col, colIdx) => (
                      <div key={colIdx} className="space-y-3">
                        {col.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block p-2.5 rounded hover:bg-white/5 group/item transition-colors"
                          >
                            <p className="text-[11px] font-bold text-white uppercase tracking-tight group-hover/item:text-gold transition-colors">
                              {item.name}
                            </p>
                            <p className="text-[10px] text-text-muted mt-1 leading-normal font-medium">
                              {item.desc}
                            </p>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Logo */}
        <a href="/" className="relative w-28 h-16 flex items-center justify-center">
          <Image
            src="/static/brand-logo-light.webp"
            alt="SarkinMota Logo"
            fill
            className="object-contain"
            priority
          />
        </a>

        {/* Right: Actions */}
        <div className="flex gap-x-6 justify-end items-center">
          <a
            href="/news"
            className="hidden lg:inline-block text-[11px] uppercase tracking-wider text-white hover:text-gold transition-colors font-semibold"
          >
            News & Events
          </a>
          <a
            href="/about"
            className="hidden lg:inline-block text-[11px] uppercase tracking-wider text-white hover:text-gold transition-colors font-semibold"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-[11px] uppercase tracking-wider bg-gold text-black px-6 py-3 rounded-full hover:bg-gold-glow transition-all font-bold shadow-md shadow-gold/25 cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Mobile Sidebar Menu (Drawer overlay matching screenshot style) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex justify-start">
          <div className="w-[320px] h-full bg-white text-black p-6 flex flex-col justify-between shadow-2xl relative animate-[slideRight_0.3s_ease-out]">
            
            <div>
              {/* Close Button */}
              <div className="flex justify-between items-center mb-10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="size-8 flex items-center justify-center border border-black/10 hover:border-black/30 rounded-md transition-all text-black/60 hover:text-black font-bold cursor-pointer"
                  aria-label="Close Menu"
                >
                  ✕
                </button>
                <span className="text-[10px] uppercase tracking-widest font-heading font-black text-gold">SARKIN MOTA</span>
              </div>

              {/* Mobile Navigation List */}
              <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-wider font-heading">
                {navLinks.map((link, idx) => (
                  <div key={link.name} className="border-b border-black/5 pb-2">
                    <button
                      onClick={() => setActiveMobileTab(activeMobileTab === idx ? null : idx)}
                      className="w-full flex justify-between items-center text-left hover:text-gold transition-colors text-black font-black"
                    >
                      <span>{link.name}</span>
                      <span>{activeMobileTab === idx ? "−" : "+"}</span>
                    </button>
                    
                    {activeMobileTab === idx && (
                      <div className="mt-3 pl-4 flex flex-col gap-2.5 lowercase">
                        {link.cols.flat().map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block text-xs font-semibold text-zinc-600 hover:text-gold transition-colors capitalize"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* News & Events in mobile list */}
                <a href="/news" className="hover:text-gold transition-colors text-black font-black border-b border-black/5 pb-2">
                  News & Events
                </a>
              </div>
            </div>

            {/* Bottom Section (About Us, Careers, Contact) */}
            <div className="border-t border-black/10 pt-6 flex flex-col gap-3 text-xs font-semibold text-zinc-500">
              <a href="/about" className="hover:text-gold transition-colors">About Us</a>
              <a href="/careers" className="hover:text-gold transition-colors">Careers</a>
              <a href="/contact" className="hover:text-gold transition-colors">Contact</a>
              <div className="text-[9px] text-zinc-400 mt-4 font-mono">
                © SARKIN MOTA AUTOS 2026
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
