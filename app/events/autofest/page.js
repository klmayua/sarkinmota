"use client";

import { useState } from "react";
import Image from "next/image";

export default function AutofestPortal() {
  const [ticketType, setTicketType] = useState("GENERAL");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [purchasedTicket, setPurchasedTicket] = useState(null);
  const [processing, setProcessing] = useState(false);

  const priceMap = {
    GENERAL: 5000,
    VIP: 25000
  };

  const handlePurchase = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setProcessing(true);

    try {
      const response = await fetch("/api/events/tickets/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketType,
          name,
          email,
          quantity,
          amount: priceMap[ticketType] * quantity
        })
      });

      if (response.ok) {
        const data = await response.json();
        setPurchasedTicket(data.ticket);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/events" className="hover:text-gold transition-colors">Events</a> / <span className="text-gold">Autofest 2026</span>
      </nav>

      {/* Hero Header */}
      <div className="relative w-full h-[40vh] rounded-md overflow-hidden bg-zinc-950 border border-white/10 mb-12">
        <div className="hero-vignette"></div>
        <Image
          src="/static/carousel/mercedes-amg-gle-63.jpg"
          alt="Autofest 2026"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 bg-black/45">
          <h1 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-wide">AUTOFEST ABUJA 2026</h1>
          <p className="text-sm text-gold font-semibold uppercase tracking-widest mt-2">
            December 12th & 13th • Abuja Paddock Center
          </p>
        </div>
      </div>

      {/* Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
        {/* Left: Event Details */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-heading uppercase text-gold">The Show of the Year</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Prepare for Nigeria's largest luxury automotive and supercar expo. Over 500 exotic sports cars, high-performance power bikes, and next-generation electric vehicles like the Xiaomi YU7 on display. 
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Experience drift showcases, exhaust rev battles, drag races, and verified dealer expos. Connect directly with Abuja's supercar owners circle.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading uppercase text-gold">Event Schedule</h3>
            <div className="border border-white/10 rounded-md overflow-hidden bg-panel text-sm">
              <div className="p-4 border-b border-white/5 grid grid-cols-[120px_1fr] gap-4">
                <span className="font-bold text-gold">Day 1 (10 AM)</span>
                <div>
                  <span className="font-bold block text-white">Showroom Expo & EV Showcase</span>
                  <span className="text-xs text-text-muted">Explore dealership booths, parts accessories marketplace, and classic custom displays.</span>
                </div>
              </div>
              <div className="p-4 grid grid-cols-[120px_1fr] gap-4">
                <span className="font-bold text-gold">Day 2 (12 PM)</span>
                <div>
                  <span className="font-bold block text-white">Drift Battles & Paddock Runs</span>
                  <span className="text-xs text-text-muted">Live track runs, V10 rev battles, and VIP supercar club award presentations.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Ticket Booking Checkout */}
        <aside className="bg-panel border border-white/10 rounded-md p-6 h-fit shadow-2xl space-y-6">
          <h3 className="text-xl font-bold font-heading uppercase text-gold border-b border-white/10 pb-3">
            Get Your Ticket
          </h3>

          {purchasedTicket ? (
            <div className="bg-gold/10 border border-gold/30 rounded p-6 text-center space-y-6">
              <span className="text-3xl block">🎟</span>
              <h4 className="text-gold font-bold uppercase tracking-wider">Ticket Purchase Confirmed!</h4>
              
              {/* Dynamic QR Code box */}
              <div className="w-44 h-44 bg-white p-3 mx-auto rounded border border-gold/20 flex items-center justify-center">
                {/* Mock QR image using canvas background or simple boxes */}
                <div className="size-full border border-black flex flex-col justify-between p-1 bg-black text-white text-[10px] font-mono select-none overflow-hidden text-center break-all">
                  <span>SM-QRCODE</span>
                  <span>{purchasedTicket.qr_code.substring(0, 16)}</span>
                  <span>SCAN GATE</span>
                </div>
              </div>

              <div className="text-xs space-y-1 text-text-muted border-t border-white/5 pt-4">
                <span className="font-bold text-white block">Ticket ID: {purchasedTicket.id.substring(0, 8)}</span>
                <span>An email confirmation containing your ticket PDF has been sent to {email}.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePurchase} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs text-text-muted uppercase">Ticket Tier Selection</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTicketType("GENERAL")}
                    className={`py-3 rounded text-xs uppercase font-bold border transition-all ${
                      ticketType === "GENERAL"
                        ? "bg-gold text-black border-gold"
                        : "bg-black text-white border-white/10 hover:border-gold/30"
                    }`}
                  >
                    General (₦5,000)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTicketType("VIP")}
                    className={`py-3 rounded text-xs uppercase font-bold border transition-all ${
                      ticketType === "VIP"
                        ? "bg-gold text-black border-gold"
                        : "bg-black text-white border-white/10 hover:border-gold/30"
                    }`}
                  >
                    VIP Pass (₦25,000)
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-text-muted uppercase">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kabir Yusuf"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-text-muted uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. kabir@gmail.com"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-text-muted uppercase">Quantity</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((q) => (
                    <option key={q} value={q}>{q} Ticket{q > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>

              <div className="border-t border-white/5 pt-4 flex justify-between items-baseline text-sm">
                <span className="text-text-muted uppercase">Total Amount</span>
                <span className="text-xl font-bold text-gold">₦{(priceMap[ticketType] * quantity).toLocaleString()}</span>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full py-4 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded hover:bg-gold-glow transition-all mt-4"
              >
                {processing ? "Processing payment..." : "Pay via Paystack"}
              </button>
            </form>
          )}
        </aside>
      </div>
    </div>
  );
}
