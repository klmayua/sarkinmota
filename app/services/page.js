"use client";

import { useState } from "react";
import Image from "next/image";

const providersData = [
  {
    id: "sp1",
    name: "SafiMota Detailing Hub",
    category: "DETAILING",
    rating: 4.9,
    reviews: 124,
    location: "Central Business District, Abuja",
    description: "Premium ceramic coating, paint correction, interior steam cleaning, and bespoke window tinting services.",
    packages: [
      { id: "p-det-1", name: "Premium Wash & Wax", price: 15000 },
      { id: "p-det-2", name: "Full Interior Detailing", price: 45000 },
      { id: "p-det-3", name: "Ultra Ceramic Paint Protection", price: 180000 }
    ],
    img: "/static/carousel/mercedes-amg-gle-63.jpg"
  },
  {
    id: "sp2",
    name: "Abuja Elite Auto Clinic",
    category: "MECHANICAL",
    rating: 4.8,
    reviews: 98,
    location: "Wuse II, Abuja",
    description: "Full engine maintenance, oil servicing, computerized diagnostics, brake systems repair, and OEM parts sourcing.",
    packages: [
      { id: "p-mec-1", name: "Scheduled Routine Service", price: 35000 },
      { id: "p-mec-2", name: "Comprehensive Diagnostics Scan", price: 15000 },
      { id: "p-mec-3", name: "Suspension & Brake Overhaul", price: 75000 }
    ],
    img: "/static/carousel/R8.png"
  },
  {
    id: "sp3",
    name: "VoltMax Battery & Alternators",
    category: "BATTERY",
    rating: 4.7,
    reviews: 64,
    location: "Garki II, Abuja",
    description: "Battery testing, alternator repair, starter diagnostics, and direct replacement of premium dry-cell batteries.",
    packages: [
      { id: "p-bat-1", name: "Battery Diagnostics Check", price: 5000 },
      { id: "p-bat-2", name: "Premium 75AH Battery Install", price: 65000 },
      { id: "p-bat-3", name: "Heavy-Duty 100AH Battery Install", price: 85000 }
    ],
    img: "/static/carousel/xaiomi-yu7-green.png"
  },
  {
    id: "sp4",
    name: "Abuja 24/7 Road Rescue & Towing",
    category: "TOWING",
    rating: 4.9,
    reviews: 156,
    location: "Abuja Metro Link Dispatch",
    description: "Flatbed towing, emergency roadside assistance, jumpstarts, tire inflation, and key lockout support.",
    packages: [
      { id: "p-tow-1", name: "Abuja Metro Flatbed Towing", price: 25000 },
      { id: "p-tow-2", name: "Emergency Jumpstart & Assist", price: 10000 },
      { id: "p-tow-3", name: "Interstate Towing (Lagos/Kano)", price: 250000 }
    ],
    img: "/static/carousel/nissan-patrol-2025.png"
  }
];

const mockUserCars = [
  { slug: "xiaomi-yu7", name: "Xiaomi YU7 (Abuja Showroom)" },
  { slug: "audi-r8", name: "Audi R8 (Showroom Flagship)" },
  { slug: "gle-63s", name: "Mercedes-AMG GLE 63S (Member Garage)" },
  { slug: "custom", name: "Add Custom Vehicle..." }
];

export default function SafiMotaServices() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [bookingPackage, setBookingPackage] = useState(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("10:00");
  const [selectedCar, setSelectedCar] = useState("xiaomi-yu7");
  const [customCarName, setCustomCarName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookingReceipt, setBookingReceipt] = useState(null);

  const filteredProviders = providersData.filter((prov) => {
    if (filter === "ALL") return true;
    return prov.category === filter;
  });

  const handleOpenBooking = (provider) => {
    setSelectedProvider(provider);
    setBookingPackage(provider.packages[0]); // Default to first package
    setBookingReceipt(null);
  };

  const handleSelectPackage = (packageId) => {
    const pkg = selectedProvider.packages.find((p) => p.id === packageId);
    setBookingPackage(pkg);
  };

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone || !bookingDate) return;
    setLoading(true);

    const vehicleName = selectedCar === "custom" ? customCarName : mockUserCars.find(c => c.slug === selectedCar)?.name;

    try {
      const response = await fetch("/api/services/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          providerId: selectedProvider.id,
          providerName: selectedProvider.name,
          packageName: bookingPackage.name,
          price: bookingPackage.price,
          date: bookingDate,
          time: bookingTime,
          vehicle: vehicleName,
          clientName,
          clientEmail,
          clientPhone
        })
      });

      if (response.ok) {
        const data = await response.json();
        setBookingReceipt(data.booking);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSelectedProvider(null);
    setBookingPackage(null);
    setBookingReceipt(null);
    setClientName("");
    setClientEmail("");
    setClientPhone("");
    setBookingDate("");
    setCustomCarName("");
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">SafiMota Care</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-6 mb-12 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-wide">SafiMota Vehicle Care</h1>
          <p className="text-sm text-text-muted mt-2">Book Abuja's premium detailing hubs, engine mechanics, and towing dispatch.</p>
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap gap-2 bg-panel p-1 rounded border border-white/5 text-xs font-semibold uppercase tracking-wider">
          {["ALL", "DETAILING", "MECHANICAL", "BATTERY", "TOWING"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-2 rounded transition-all ${
                filter === cat
                  ? "bg-gold text-black"
                  : "text-text-muted hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredProviders.map((prov) => (
          <div
            key={prov.id}
            className="bg-panel border border-white/10 rounded-md overflow-hidden flex flex-col justify-between shadow-xl hover:border-gold/30 transition-all"
          >
            <div className="relative aspect-[21/9] w-full bg-black">
              <Image
                src={prov.img}
                alt={prov.name}
                fill
                className="object-cover object-bottom"
              />
              <div className="absolute top-3 left-3 bg-black/75 border border-gold/40 text-gold text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                ⭐ {prov.rating} ({prov.reviews} Reviews)
              </div>
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-gold uppercase tracking-widest font-bold font-heading">{prov.category} Service</span>
                <h3 className="text-xl font-bold uppercase mt-1 tracking-tight">{prov.name}</h3>
                <p className="text-xs text-text-muted mt-1 font-medium">📍 {prov.location}</p>
                <p className="text-xs text-text-muted leading-relaxed mt-4">{prov.description}</p>
                
                {/* Available packages quick display */}
                <div className="mt-6 space-y-2">
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block font-bold">Services & Rates</span>
                  <div className="space-y-1.5">
                    {prov.packages.map((pkg) => (
                      <div key={pkg.id} className="flex justify-between items-baseline text-xs text-white/80">
                        <span>• {pkg.name}</span>
                        <span className="font-bold text-gold">₦{pkg.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <button
                  onClick={() => handleOpenBooking(prov)}
                  className="w-full py-3 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-wider rounded transition-all"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOOKING SCHEDULER MODAL */}
      {selectedProvider && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-panel border border-white/10 rounded-lg w-full max-w-xl shadow-2xl p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors text-xl font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>

            {bookingReceipt ? (
              <div className="text-center py-6 space-y-6">
                <span className="text-4xl block">📅</span>
                <h3 className="text-gold font-bold uppercase tracking-wider text-xl">Service Appointment Booked!</h3>
                
                <div className="bg-black/40 border border-white/5 rounded-md p-6 text-left space-y-4 text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-text-muted uppercase">Booking Reference</span>
                    <span className="font-bold text-white font-mono">{bookingReceipt.id}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-text-muted uppercase">Provider</span>
                    <span className="font-bold text-white">{bookingReceipt.providerName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-text-muted uppercase">Service Package</span>
                    <span className="font-bold text-white">{bookingReceipt.packageName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-text-muted uppercase">Schedule Slot</span>
                    <span className="font-bold text-white">{bookingReceipt.date} @ {bookingReceipt.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-text-muted uppercase">Vehicle</span>
                    <span className="font-bold text-gold">{bookingReceipt.vehicle}</span>
                  </div>
                  <div className="flex justify-between pt-2 text-sm">
                    <span className="text-text-muted uppercase font-bold">Amount Paid</span>
                    <span className="font-bold text-gold font-mono">₦{bookingReceipt.price.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-xs text-text-muted max-w-sm mx-auto leading-relaxed">
                  A booking confirmation has been sent to {clientEmail} and logged into your Member Garage service history.
                </p>

                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-widest rounded transition-all"
                >
                  Return to Directory
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-xl font-bold font-heading uppercase text-gold">Schedule Service Care</h3>
                  <p className="text-xs text-text-muted mt-1">Booking with: <strong className="text-white">{selectedProvider.name}</strong></p>
                </div>

                <form onSubmit={handleBookAppointment} className="space-y-4 text-xs">
                  {/* Package Selector */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Select Care Package</label>
                    <select
                      value={bookingPackage?.id}
                      onChange={(e) => handleSelectPackage(e.target.value)}
                      className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none cursor-pointer"
                    >
                      {selectedProvider.packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} — ₦{pkg.price.toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Vehicle Selector */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Select Car Profile</label>
                    <select
                      value={selectedCar}
                      onChange={(e) => setSelectedCar(e.target.value)}
                      className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-gold outline-none cursor-pointer"
                    >
                      {mockUserCars.map((car) => (
                        <option key={car.slug} value={car.slug}>{car.name}</option>
                      ))}
                    </select>
                  </div>

                  {selectedCar === "custom" && (
                    <div className="space-y-1 animate-fadeIn">
                      <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Vehicle Name / Make</label>
                      <input
                        type="text"
                        required
                        value={customCarName}
                        onChange={(e) => setCustomCarName(e.target.value)}
                        placeholder="e.g. 2024 Mercedes G63 AMG"
                        className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs focus:border-gold outline-none"
                      />
                    </div>
                  )}

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Select Date</label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-gold outline-none cursor-pointer"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Select Time</label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-gold outline-none cursor-pointer"
                      >
                        {["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-3 pt-2 border-t border-white/5">
                    <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider block">Customer Contact Info</span>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] text-text-muted uppercase">Full Name</label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Aliyu Mohammad"
                        className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs focus:border-gold outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-text-muted uppercase">Email Address</label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="e.g. alamin@sarkinmota.ng"
                          className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs focus:border-gold outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-text-muted uppercase">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="e.g. +234 803 123 4567"
                          className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-xs focus:border-gold outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Total calculation */}
                  <div className="border-t border-white/5 pt-4 flex justify-between items-baseline">
                    <span className="text-text-muted uppercase font-bold">Total Amount</span>
                    <span className="text-lg font-bold text-gold">₦{bookingPackage ? bookingPackage.price.toLocaleString() : "0"}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-widest rounded transition-all mt-4"
                  >
                    {loading ? "Processing checkout..." : "Book and Pay with Paystack"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
