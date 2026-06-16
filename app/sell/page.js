"use client";

import { useState } from "react";
import Image from "next/image";

export default function SellPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    condition: "TOKUNBO",
    mileage: "",
    fuel: "PETROL",
    gearbox: "AUTOMATIC",
    price: "",
    description: "",
    dutyPaid: "yes",
    sellerName: "",
    sellerEmail: "",
    sellerPhone: "",
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API upload delay
    setTimeout(() => {
      setFormSubmitted(true);
      // Store in local storage to simulate dashboard persistence
      const currentListings = JSON.parse(localStorage.getItem("my_listings") || "[]");
      const newListing = {
        id: "v_user_" + Date.now(),
        title: `${formData.year} ${formData.brand} ${formData.model}`,
        slug: `${formData.brand.toLowerCase()}-${formData.model.toLowerCase()}-${Date.now()}`,
        brand: formData.brand,
        model: formData.model,
        year: parseInt(formData.year) || 2025,
        price: parseFloat(formData.price) || 0.00,
        condition: formData.condition,
        mileage: parseInt(formData.mileage) || 0,
        fuel: formData.fuel,
        gearbox: formData.gearbox,
        dutyPaid: formData.dutyPaid === "yes",
        status: "APPROVED",
        views: 0,
        leads: 0,
        img: "/static/carousel/xaiomi-yu7-green.png", // fallback preview
        dateAdded: new Date().toLocaleDateString()
      };
      currentListings.push(newListing);
      localStorage.setItem("my_listings", JSON.stringify(currentListings));
    }, 800);
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col justify-between">


        <main className="max-w-md mx-auto px-6 py-24 flex-1 flex flex-col justify-center text-center space-y-6">
          <div className="size-20 bg-gold/10 border border-gold rounded-full flex items-center justify-center text-gold text-4xl mx-auto animate-bounce">
            ✓
          </div>
          <h1 className="text-3xl font-bold font-heading uppercase tracking-wide">Listing Submitted</h1>
          <p className="text-sm text-text-muted">
            Excellent! Your luxury vehicle listing for the <span className="text-white font-semibold">{formData.year} {formData.brand} {formData.model}</span> has been successfully indexed.
          </p>
          <div className="pt-6 flex flex-col gap-4">
            <a
              href="/sell/dashboard"
              className="py-3 bg-gold text-black hover:bg-gold-glow transition-all text-xs uppercase font-semibold tracking-wider rounded-sm shadow-md shadow-gold/25"
            >
              Go to Dashboard
            </a>
            <a
              href="/sell"
              onClick={() => setFormSubmitted(false)}
              className="py-3 bg-white/5 hover:bg-white/10 transition-all text-xs uppercase font-semibold tracking-wider rounded-sm text-white"
            >
              List Another Vehicle
            </a>
          </div>
        </main>


      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">


      <main className="max-w-3xl mx-auto px-6 py-16 flex-1 w-full">
        <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
          <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/sell-swap" className="hover:text-gold transition-colors">Sell & Swap</a> / <span className="text-gold">Sell Vehicle</span>
        </nav>

        <div className="border-b border-white/10 pb-6 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Sell Your Luxury Vehicle</h1>
          <p className="text-sm text-text-muted mt-2">Provide vehicle metadata and pricing details to reach verified high-net-worth buyers in Nigeria.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-panel border border-white/10 rounded-md p-8 shadow-xl">
          {/* Section 1: Specifications */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-gold font-bold font-heading border-b border-white/5 pb-2">1. Vehicle Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Brand / Make *</label>
                <input
                  type="text"
                  name="brand"
                  required
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="e.g. Mercedes-Benz"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Model *</label>
                <input
                  type="text"
                  name="model"
                  required
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="e.g. AMG G63"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Year *</label>
                <input
                  type="number"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="e.g. 2025"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Condition *</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
                >
                  <option value="TOKUNBO">Tokunbo (Foreign Used)</option>
                  <option value="NEW">Brand New</option>
                  <option value="LOCAL_USED">Nigerian Used</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Mileage (km) *</label>
                <input
                  type="number"
                  name="mileage"
                  required
                  value={formData.mileage}
                  onChange={handleChange}
                  placeholder="e.g. 15000"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Fuel Type *</label>
                <select
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
                >
                  <option value="PETROL">Petrol</option>
                  <option value="ELECTRIC">Electric</option>
                  <option value="HYBRID">Hybrid</option>
                  <option value="DIESEL">Diesel</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Transmission *</label>
                <select
                  name="gearbox"
                  value={formData.gearbox}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
                >
                  <option value="AUTOMATIC">Automatic</option>
                  <option value="MANUAL">Manual</option>
                  <option value="SINGLE_SPEED">Single Speed (EV)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Asking Price (₦) *</label>
                <input
                  type="number"
                  name="price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g. 140000000"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Customs Duty Paid? *</label>
                <select
                  name="dutyPaid"
                  value={formData.dutyPaid}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
                >
                  <option value="yes">Yes (Fully Cleared)</option>
                  <option value="no">No (Requires Clearing)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Key Highlights & Description</label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="List special specs, upgrade packages, color ways, or registry details..."
                className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white resize-none"
              />
            </div>
          </div>

          {/* Section 2: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-gold font-bold font-heading border-b border-white/5 pb-2">2. Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Full Name *</label>
                <input
                  type="text"
                  name="sellerName"
                  required
                  value={formData.sellerName}
                  onChange={handleChange}
                  placeholder="Alhaji Bello"
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
                  placeholder="bello@domain.ng"
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
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-white/5 flex justify-end">
            <button
              type="submit"
              className="px-10 py-4 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-gold-glow hover:shadow-lg hover:shadow-gold/30 transition-all font-heading"
            >
              Submit Listing
            </button>
          </div>
        </form>
      </main>


    </div>
  );
}
