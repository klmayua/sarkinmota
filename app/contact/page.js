"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "GENERAL",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

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
      <main className="max-w-6xl mx-auto px-6 py-16 flex-1 w-full space-y-12">
        {/* Breadcrumbs */}
        <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
          <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Contact Us</span>
        </nav>

        <div className="border-b border-white/10 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Connect With Our Showroom</h1>
          <p className="text-sm text-text-muted mt-2">Visit our flagship location in Abuja or connect with Alamin Sarkinmota directly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Details */}
          <div className="space-y-8">
            <div className="bg-panel border border-white/10 rounded-md p-8 space-y-6">
              <h2 className="text-lg font-bold font-heading uppercase tracking-tight text-gold">Flagship Showroom</h2>
              <div className="space-y-4 text-xs text-text-muted">
                <div>
                  <p className="text-white font-semibold uppercase tracking-wider">Address</p>
                  <p className="mt-1">Plot 1104, Central Business District (CBD), Abuja, Nigeria.</p>
                </div>
                <div>
                  <p className="text-white font-semibold uppercase tracking-wider">Operating Hours</p>
                  <p className="mt-1">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  <p>Sunday: Private Viewing Appointments Only</p>
                </div>
                <div>
                  <p className="text-white font-semibold uppercase tracking-wider">Direct Lines</p>
                  <p className="mt-1">Brokerage: +234 809 999 8888</p>
                  <p>Detailing & Service: +234 812 777 5555</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://wa.me/2348099998888"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600/10 border border-green-500/20 rounded p-6 flex flex-col justify-between hover:bg-green-600/20 transition-all group cursor-pointer"
              >
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase group-hover:text-gold transition-colors">WhatsApp Concierge</h3>
                  <p className="text-[10px] text-text-muted mt-1">Chat directly in Pidgin or English for custom orders.</p>
                </div>
              </a>

              <a
                href="mailto:alamin@sarkinmota.ng"
                className="bg-gold/5 border border-gold/25 rounded p-6 flex flex-col justify-between hover:bg-gold/10 transition-all group cursor-pointer"
              >
                <div className="text-2xl">✉</div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase group-hover:text-gold transition-colors">Email Sourcing</h3>
                  <p className="text-[10px] text-text-muted mt-1">Submit request specification files and documentation.</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="bg-panel border border-white/10 rounded-md p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-20 space-y-4">
                <div className="size-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center text-gold mx-auto text-2xl">✓</div>
                <h3 className="text-xl font-bold font-heading uppercase">Message Sent</h3>
                <p className="text-xs text-text-muted">Thank you, {formState.name}. Our showroom representative will respond to your email within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-lg font-bold font-heading uppercase tracking-tight text-white">Send Inquiry</h2>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Inquiry Type</label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
                  >
                    <option value="GENERAL">General Showroom Query</option>
                    <option value="IMPORT">Custom Concierge Import</option>
                    <option value="SWAP">Swap & Trade-In Valuation</option>
                    <option value="CARE">SafiMota Detail Care Booking</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-gold-glow transition-all font-heading"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#060606] border-t border-white/5 py-8 text-center text-xs text-text-muted">
        <p>© SARKIN MOTA AUTOS 2026</p>
      </footer>
    </div>
  );
}
