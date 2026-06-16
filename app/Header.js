"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const leftLinks = [
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
  }
];

const rightLinks = [
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

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMobileTab(null);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      {/* Sleek Mobile Top Brand Bar (Only Logo, no buttons, transparent glass background, floating) */}
      <div className="fixed top-4 left-4 right-4 flex justify-center lg:hidden z-50 pointer-events-none">
        <a 
          href="/" 
          className="bg-black/60 backdrop-blur-md border border-white/10 rounded-md py-2 px-6 pointer-events-auto shadow-lg flex items-center justify-center h-[52px]"
        >
          <div className="relative w-20 h-8">
            <Image
              src="/static/brand-logo-light.webp"
              alt="SarkinMota Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>
      </div>

      {/* Floating Desktop Header (Fixed viewport navigation) */}
      <header className={`hidden lg:block fixed top-4 left-4 right-4 z-50 transition-all duration-300 pointer-events-none`}>
        <nav className="max-w-8xl mx-auto h-[80px] flex justify-between items-center px-6 lg:px-10 bg-black/80 backdrop-blur-md border border-white/10 rounded-md shadow-2xl pointer-events-auto">
          
          {/* Left Links Group */}
          <div className="flex gap-x-8 items-center h-full">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="size-10 border border-white/10 hover:border-gold/50 rounded flex items-center justify-center transition-all bg-black/40 backdrop-blur-sm cursor-pointer"
              aria-label="Open Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-6 stroke-white" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                <line x1="4" y1="18" x2="16" y2="18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="hidden lg:flex gap-x-6 h-full items-center">
              {leftLinks.map((link) => (
                <div key={link.name} className="relative group py-6 h-full flex items-center">
                  <button className="text-[11px] uppercase tracking-wider text-white group-hover:text-gold transition-colors font-semibold flex items-center gap-1 cursor-pointer">
                    {link.name}
                    <svg className="size-2.5 stroke-white group-hover:stroke-gold transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <div className="absolute top-[85%] left-0 w-[520px] bg-black/95 border border-white/10 rounded-md p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-md z-[100]">
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

          {/* Center Logo */}
          <a href="/" className="relative w-24 h-12 flex items-center justify-center">
            <Image
              src="/static/brand-logo-light.webp"
              alt="SarkinMota Logo"
              fill
              className="object-contain"
              priority
            />
          </a>

          {/* Right Links Group */}
          <div className="flex gap-x-6 items-center h-full justify-end">
            <div className="hidden lg:flex gap-x-6 h-full items-center">
              {rightLinks.map((link) => (
                <div key={link.name} className="relative group py-6 h-full flex items-center">
                  <button className="text-[11px] uppercase tracking-wider text-white group-hover:text-gold transition-colors font-semibold flex items-center gap-1 cursor-pointer">
                    {link.name}
                    <svg className="size-2.5 stroke-white group-hover:stroke-gold transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <div className="absolute top-[85%] right-0 w-[520px] bg-black/95 border border-white/10 rounded-md p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-md z-[100]">
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
              
              <a
                href="/news"
                className="text-[11px] uppercase tracking-wider text-white hover:text-gold transition-colors font-semibold"
              >
                News & Events
              </a>
              <a
                href="/about"
                className="text-[11px] uppercase tracking-wider text-white hover:text-gold transition-colors font-semibold"
              >
                About
              </a>
            </div>
            
            <a
              href="/contact"
              className="text-[11px] uppercase tracking-wider bg-gold text-black px-6 py-2.5 rounded-sm hover:bg-gold-glow transition-all font-bold shadow-md shadow-gold/25 cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation Bar (Floating rounded tab menu) */}
      <div className="fixed bottom-4 left-4 right-4 h-[64px] bg-[#0A0A0A]/90 border border-white/10 flex justify-around items-center lg:hidden z-[999] backdrop-blur-md px-4 select-none rounded-md shadow-2xl">
        <a 
          href="/" 
          className={`flex flex-col items-center justify-center gap-1 text-[9px] uppercase font-bold transition-colors ${pathname === "/" ? "text-gold" : "text-text-muted hover:text-white"}`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5 stroke-current" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span>Home</span>
        </a>
        
        <a 
          href="/vehicles" 
          className={`flex flex-col items-center justify-center gap-1 text-[9px] uppercase font-bold transition-colors ${pathname === "/vehicles" ? "text-gold" : "text-text-muted hover:text-white"}`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5 stroke-current" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.447-.267-.852-.68-1.02L18.75 7.5h-5.25v6.75m4.5 0H5.25m11.25 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25m-14.25 3h14.25M5.25 14.25v-3.75A1.125 1.125 0 0 1 6.375 9.375h6m-6 4.875h6m-6 0v-4.875" />
          </svg>
          <span>Catalog</span>
        </a>

        <a 
          href="/tools" 
          className={`flex flex-col items-center justify-center gap-1 text-[9px] uppercase font-bold transition-colors ${pathname.startsWith("/tools") ? "text-gold" : "text-text-muted hover:text-white"}`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5 stroke-current" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17L12 10.5l4.5-.5.5-4.5 4.5-.5M11.42 15.17L9 18.25M6 21H3v-3l9.42-9.42M19.5 4.5l-3 3M16.5 7.5L12 12" />
          </svg>
          <span>Tools</span>
        </a>

        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="flex flex-col items-center justify-center gap-1 text-[9px] uppercase font-bold text-text-muted hover:text-white transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5 stroke-current" strokeWidth="2.5">
            <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
            <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
            <line x1="4" y1="18" x2="16" y2="18" strokeLinecap="round" />
          </svg>
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile Drawer (Accordion list) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex justify-start">
          <div className="w-[320px] h-full bg-[#0A0A0A] border-r border-white/10 text-white p-6 flex flex-col justify-between shadow-2xl relative animate-[slideRight_0.3s_ease-out]">
            <div>
              <div className="flex justify-between items-center mb-10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="size-8 flex items-center justify-center border border-white/10 hover:border-gold/50 rounded transition-all text-white/60 hover:text-white font-bold cursor-pointer"
                  aria-label="Close Menu"
                >
                  ✕
                </button>
                <span className="text-[10px] uppercase tracking-widest font-heading font-black text-gold">SARKIN MOTA</span>
              </div>

              <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-wider font-heading">
                {[...leftLinks, ...rightLinks].map((link, idx) => (
                  <div key={link.name} className="border-b border-white/5 pb-2">
                    <button
                      onClick={() => setActiveMobileTab(activeMobileTab === idx ? null : idx)}
                      className="w-full flex justify-between items-center text-left hover:text-gold transition-colors text-white font-black"
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
                            className="block text-xs font-semibold text-text-muted hover:text-gold transition-colors capitalize"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <a href="/news" className="hover:text-gold transition-colors text-white font-black border-b border-white/5 pb-2">
                  News & Events
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col gap-3 text-xs font-semibold text-text-muted">
              <a href="/about" className="hover:text-gold transition-colors">About Us</a>
              <a href="/careers" className="hover:text-gold transition-colors">Careers</a>
              <a href="/contact" className="hover:text-gold transition-colors">Contact</a>
              <div className="text-[9px] text-zinc-500 mt-4 font-mono">
                © SARKIN MOTA AUTOS 2026
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
