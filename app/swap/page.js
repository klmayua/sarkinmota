"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Mock Active Inventory Database (same as vehicles catalog for matching options)
const initialVehicles = [
  { slug: "xiaomi-yu7", title: "Xiaomi YU7 Green", price: 135000000.00 },
  { slug: "audi-r8", title: "Audi R8 performance V10", price: 260000000.00 },
  { slug: "gle-63s", title: "Mercedes-AMG GLE 63S Coupe", price: 195000000.00 },
  { slug: "bmw-i7", title: "BMW i7 M70 Executive", price: 180000000.00 },
  { slug: "cybertruck", title: "Tesla Cybertruck Cyberbeast", price: 210000000.00 },
  { slug: "nissan-patrol", title: "Nissan Patrol Platinum V8", price: 165000000.00 },
  { slug: "stelato-s9", title: "Stelato S9 Ultra", price: 140000000.00 }
];

export default function SwapPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [formData, setFormData] = useState({
    myBrand: "",
    myModel: "",
    myYear: "",
    myMileage: "",
    myCondition: "TOKUNBO",
    myEstimatedValue: "",
    targetVehicleSlug: "xiaomi-yu7",
    sellerName: "",
    sellerEmail: "",
    sellerPhone: "",
    additionalNotes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
      const selectedCar = vehicles.find(v => v.slug === formData.targetVehicleSlug);
      const differencePrice = (selectedCar ? selectedCar.price : 0) - (parseFloat(formData.myEstimatedValue) || 0);

      // Store in local storage to simulate dashboard persistence
      const currentSwaps = JSON.parse(localStorage.getItem("my_swaps") || "[]");
      const newSwap = {
        id: "swap_" + Date.now(),
        myVehicle: `${formData.myYear} ${formData.myBrand} ${formData.myModel}`,
        targetVehicle: selectedCar ? selectedCar.title : "Custom Request",
        estimatedValue: parseFloat(formData.myEstimatedValue) || 0,
        targetValue: selectedCar ? selectedCar.price : 0,
        difference: differencePrice,
        status: "VALUATION_IN_PROGRESS",
        dateAdded: new Date().toLocaleDateString()
      };
      currentSwaps.push(newSwap);
      localStorage.setItem("my_swaps", JSON.stringify(currentSwaps));
    }, 800);
  };

  const selectedTargetVehicle = vehicles.find(v => v.slug === formData.targetVehicleSlug);
  const valDifference = selectedTargetVehicle 
    ? selectedTargetVehicle.price - (parseFloat(formData.myEstimatedValue) || 0)
    : 0;

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col justify-between">
        <header className="border-b border-white/10 bg-black/50 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto h-[108px] flex justify-between items-center px-6 lg:px-12">
            <a href="/" className="relative w-28 h-16 flex items-center">
              <Image
                src="/static/brand-logo-light.webp"
                alt="SarkinMota Logo"
                fill
                className="object-contain"
              />
            </a>
          </nav>
        </header>

        <main className="max-w-md mx-auto px-6 py-24 flex-1 flex flex-col justify-center text-center space-y-6">
          <div className="size-20 bg-gold/10 border border-gold rounded-full flex items-center justify-center text-gold text-4xl mx-auto animate-bounce">
            ✕
          </div>
          <h1 className="text-3xl font-bold font-heading uppercase tracking-wide">Swap Request Sent</h1>
          <p className="text-sm text-text-muted">
            Your trade-in valuation request has been submitted. Our valuation specialists will contact you shortly to arrange physical diagnostic inspections at our Abuja CBD showroom.
          </p>
          <div className="pt-6 flex flex-col gap-4">
            <a
              href="/sell/dashboard"
              className="py-3 bg-gold text-black hover:bg-gold-glow transition-all text-xs uppercase font-semibold tracking-wider rounded-sm shadow-md shadow-gold/25"
            >
              Go to Dashboard
            </a>
            <a
              href="/swap"
              onClick={() => setFormSubmitted(false)}
              className="py-3 bg-white/5 hover:bg-white/10 transition-all text-xs uppercase font-semibold tracking-wider rounded-sm text-white"
            >
              Submit Another Request
            </a>
          </div>
        </main>

        <footer className="bg-[#060606] border-t border-white/5 py-8 text-center text-xs text-text-muted">
          <p>© SARKIN MOTA AUTOS 2026</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto h-[108px] flex justify-between items-center px-6 lg:px-12">
          <a href="/" className="relative w-28 h-16 flex items-center">
            <Image
              src="/static/brand-logo-light.webp"
              alt="SarkinMota Logo"
              fill
              className="object-contain"
            />
          </a>
          <a href="/sell-swap" className="text-xs uppercase tracking-wider text-text-muted hover:text-white transition-colors">
            ← Back
          </a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 flex-1 w-full">
        <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
          <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/sell-swap" className="hover:text-gold transition-colors">Sell & Swap</a> / <span className="text-gold">Swap Request</span>
        </nav>

        <div className="border-b border-white/10 pb-6 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Request Showroom Swap</h1>
          <p className="text-sm text-text-muted mt-2">Trade in your current luxury vehicle and finance the difference for a brand-new or premium upgrade.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-panel border border-white/10 rounded-md p-8 shadow-xl">
          {/* Section 1: Current Ride */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-gold font-bold font-heading border-b border-white/5 pb-2">1. Your Current Vehicle Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Brand / Make *</label>
                <input
                  type="text"
                  name="myBrand"
                  required
                  value={formData.myBrand}
                  onChange={handleChange}
                  placeholder="e.g. Range Rover"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Model *</label>
                <input
                  type="text"
                  name="myModel"
                  required
                  value={formData.myModel}
                  onChange={handleChange}
                  placeholder="e.g. Velar"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Year *</label>
                <input
                  type="number"
                  name="myYear"
                  required
                  value={formData.myYear}
                  onChange={handleChange}
                  placeholder="e.g. 2021"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Condition *</label>
                <select
                  name="myCondition"
                  value={formData.myCondition}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
                >
                  <option value="TOKUNBO">Tokunbo (Foreign Used)</option>
                  <option value="LOCAL_USED">Nigerian Used</option>
                  <option value="NEW">Brand New</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Mileage (km) *</label>
                <input
                  type="number"
                  name="myMileage"
                  required
                  value={formData.myMileage}
                  onChange={handleChange}
                  placeholder="e.g. 48000"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Your Valuation (₦) *</label>
                <input
                  type="number"
                  name="myEstimatedValue"
                  required
                  value={formData.myEstimatedValue}
                  onChange={handleChange}
                  placeholder="e.g. 45000000"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Desired Upgrade */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-gold font-bold font-heading border-b border-white/5 pb-2">2. Desired Showroom Upgrade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Select Upgrade Target *</label>
                <select
                  name="targetVehicleSlug"
                  value={formData.targetVehicleSlug}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
                >
                  {vehicles.map((v) => (
                    <option key={v.slug} value={v.slug}>
                      {v.title} — ₦{v.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="bg-black border border-white/10 rounded p-4 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-wider text-text-muted">Estimated Difference</span>
                <span className={`text-xl font-bold font-heading mt-1 ${valDifference >= 0 ? "text-gold" : "text-green-500"}`}>
                  {valDifference >= 0 
                    ? `₦${valDifference.toLocaleString()} (To Pay)`
                    : `₦${Math.abs(valDifference).toLocaleString()} (Refund)`
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-gold font-bold font-heading border-b border-white/5 pb-2">3. Contact & Delivery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Full Name *</label>
                <input
                  type="text"
                  name="sellerName"
                  required
                  value={formData.sellerName}
                  onChange={handleChange}
                  placeholder="Aminu Yusuf"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Email Address *</label>
                <input
                  type="email"
                  name="sellerEmail"
                  required
                  value={formData.sellerEmail}
                  onChange={handleChange}
                  placeholder="yusuf@domain.com"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  name="sellerPhone"
                  required
                  value={formData.sellerPhone}
                  onChange={handleChange}
                  placeholder="+234..."
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Inspection Address or Additional Notes</label>
              <textarea
                name="additionalNotes"
                rows={3}
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Mention any custom specifications, paint protection films, or direct dealer queries..."
                className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-white/5 flex justify-end">
            <button
              type="submit"
              className="px-10 py-4 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-gold-glow hover:shadow-lg hover:shadow-gold/30 transition-all font-heading"
            >
              Submit Swap Request
            </button>
          </div>
        </form>
      </main>

      <footer className="bg-[#060606] border-t border-white/5 py-8 text-center text-xs text-text-muted">
        <p>© SARKIN MOTA AUTOS 2026</p>
      </footer>
    </div>
  );
}
