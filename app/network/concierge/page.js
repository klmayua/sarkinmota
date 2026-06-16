"use client";

import { useState } from "react";

export default function ConciergePage() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("2025");
  const [specs, setSpecs] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [successCode, setSuccessCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!make || !model || !name || !email || !phone) return;
    setLoading(true);

    setTimeout(() => {
      setSuccessCode(`SM-VIP-${Math.random().toString(36).substring(2, 9).toUpperCase()}`);
      setLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setMake("");
    setModel("");
    setSpecs("");
    setName("");
    setEmail("");
    setPhone("");
    setSuccessCode("");
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/network" className="hover:text-gold transition-colors">Network</a> / <span className="text-gold">VIP Concierge</span>
      </nav>

      {/* Header */}
      <div className="border-b border-white/10 pb-6 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">VIP Import Concierge</h1>
        <p className="text-sm text-text-muted mt-2">Commission Sarkin Mota to source, purchase, inspect, clear, and deliver customized luxury vehicles directly to Abuja.</p>
      </div>

      {/* Form Card */}
      <div className="bg-panel border border-white/10 rounded-md p-8 shadow-xl max-w-2xl mx-auto">
        {successCode ? (
          <div className="text-center py-6 space-y-6">
            <span className="text-5xl block animate-bounce">🔑</span>
            <h2 className="text-gold font-bold uppercase tracking-wider text-xl">Import Request Registered!</h2>
            <div className="bg-black/40 border border-white/5 rounded-md p-6 text-left space-y-4 text-xs max-w-md mx-auto">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-text-muted uppercase">Request ID</span>
                <span className="font-bold text-white font-mono">{successCode}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-text-muted uppercase">Vehicle</span>
                <span className="font-bold text-white">{year} {make} {model}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-text-muted uppercase">Customer</span>
                <span className="font-bold text-white">{name}</span>
              </div>
            </div>
            <p className="text-xs text-text-muted max-w-sm mx-auto leading-relaxed">
              We have dispatched this request to our verified broker network and clearing specialists. Alamin Sarkinmota will contact you directly within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-widest rounded transition-all"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <span className="text-[10px] text-gold uppercase tracking-widest font-bold font-heading border-b border-white/5 pb-2 block">1. Sourcing Specifications</span>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] text-text-muted uppercase">Vehicle Make</label>
                <input
                  type="text"
                  required
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  placeholder="e.g. Porsche"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-text-muted uppercase">Model Variant</label>
                <input
                  type="text"
                  required
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g. 911 GT3 RS"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-text-muted uppercase">Year</label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none cursor-pointer"
                >
                  {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-text-muted uppercase">Additional Specs / Options</label>
              <textarea
                value={specs}
                onChange={(e) => setSpecs(e.target.value)}
                placeholder="Specify paint color, carbon fiber options, engine specs, desired mileage limit, and budget parameters..."
                rows={3}
                className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none resize-none"
              />
            </div>

            <span className="text-[10px] text-gold uppercase tracking-widest font-bold font-heading border-b border-white/5 pb-2 pt-4 block">2. Contact Details</span>

            <div className="space-y-1">
              <label className="text-[10px] text-text-muted uppercase">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alamin Mohammad"
                className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] text-text-muted uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. deals@sarkinmota.ng"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-text-muted uppercase">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +234 803 123 4567"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gold text-black font-bold uppercase tracking-widest rounded hover:bg-gold-glow transition-all mt-6"
            >
              {loading ? "Registering VIP request..." : "Submit Concierge Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
