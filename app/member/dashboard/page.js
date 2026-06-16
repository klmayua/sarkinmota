"use client";

import { useState } from "react";
import Image from "next/image";

// Mock User Garage and Favorites
const initialGarage = [
  {
    id: "g1",
    title: "2023 Mercedes-AMG GLE 53 Coupe",
    vin: "W1NAG53C123456789",
    mileage: 12400,
    licenseExpiry: "2026-08-15",
    insuranceExpiry: "2026-11-20",
    serviceDate: "2026-04-10",
    img: "/static/carousel/mercedes-amg-gle-63.jpg"
  }
];

const initialFavorites = [
  {
    title: "Xiaomi YU7 Green",
    slug: "xiaomi-yu7",
    price: 135000000,
    img: "/static/carousel/xaiomi-yu7-green.png"
  },
  {
    title: "Tesla Cybertruck Cyberbeast",
    slug: "cybertruck",
    price: 210000000,
    img: "/static/carousel/CT.png"
  }
];

export default function MemberDashboard() {
  const [garage, setGarage] = useState(initialGarage);
  const [favorites] = useState(initialFavorites);
  const [showAddCar, setShowAddCar] = useState(false);
  const [newVin, setNewVin] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newMileage, setNewMileage] = useState("");

  const handleAddCarSubmit = (e) => {
    e.preventDefault();
    if (!newVin || !newTitle) return;

    const newCar = {
      id: `g-${Date.now()}`,
      title: newTitle,
      vin: newVin.toUpperCase(),
      mileage: Number(newMileage) || 0,
      licenseExpiry: "2027-06-15",
      insuranceExpiry: "2027-06-15",
      serviceDate: "2026-06-16",
      img: "/static/carousel/xaiomi-yu7-blue.png"
    };

    setGarage((prev) => [...prev, newCar]);
    setNewVin("");
    setNewTitle("");
    setNewMileage("");
    setShowAddCar(false);
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Member Dashboard
      </h1>

      {/* Grid splits */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Left Area (Garage & Favs) */}
        <div className="space-y-12">
          {/* Section 1: Digital Garage */}
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <h2 className="text-xl font-bold font-heading uppercase text-gold">My Digital Garage</h2>
              <button
                onClick={() => setShowAddCar(!showAddCar)}
                className="px-4 py-2 bg-gold text-black rounded text-xs uppercase font-semibold hover:bg-gold-glow"
              >
                {showAddCar ? "Close" : "Add Vehicle"}
              </button>
            </div>

            {showAddCar && (
              <form onSubmit={handleAddCarSubmit} className="bg-panel border border-white/10 p-6 rounded-md space-y-4 max-w-md">
                <div className="space-y-1">
                  <label className="text-xs text-text-muted uppercase">Vehicle Title</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. 2024 Toyota Land Cruiser"
                    className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm focus:border-gold outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-text-muted uppercase">17-Character VIN</label>
                  <input
                    type="text"
                    required
                    maxLength={17}
                    value={newVin}
                    onChange={(e) => setNewVin(e.target.value)}
                    placeholder="W1NAG53..."
                    className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm focus:border-gold outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-text-muted uppercase">Mileage (km)</label>
                  <input
                    type="number"
                    value={newMileage}
                    onChange={(e) => setNewMileage(e.target.value)}
                    placeholder="e.g. 5200"
                    className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm focus:border-gold outline-none"
                  />
                </div>
                <button type="submit" className="px-6 py-2 bg-gold text-black text-xs font-bold uppercase rounded">
                  Verify & Add Car
                </button>
              </form>
            )}

            {garage.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {garage.map((car) => (
                  <div key={car.id} className="bg-panel border border-white/5 rounded-md overflow-hidden flex flex-col justify-between">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={car.img}
                        alt={car.title}
                        fill
                        className="object-cover object-bottom"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold uppercase tracking-tight">{car.title}</h3>
                        <span className="text-xs text-text-muted font-mono block mt-1">VIN: {car.vin}</span>
                      </div>

                      <div className="border-t border-white/5 pt-4 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-text-muted">License Expiry</span>
                          <span className="font-semibold text-gold">{car.licenseExpiry}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Insurance Renewal</span>
                          <span className="font-semibold text-gold">{car.insuranceExpiry}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Last Service logged</span>
                          <span className="font-semibold">{car.serviceDate}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex gap-3">
                        <a
                          href={`/care/booking?vehicle=${car.id}`}
                          className="flex-1 py-2.5 bg-white/5 hover:bg-gold hover:text-black transition-colors rounded text-center text-xs uppercase font-semibold"
                        >
                          Book Detailing
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 border border-dashed border-white/10 rounded text-center text-text-muted text-sm">
                No vehicles in your garage yet.
              </div>
            )}
          </div>

          {/* Section 2: Favorites */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold font-heading uppercase text-gold border-b border-white/5 pb-3">
              Saved Vehicles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favorites.map((car, index) => (
                <div key={index} className="flex gap-4 bg-panel border border-white/5 rounded-md p-4 items-center">
                  <div className="relative w-24 h-16 bg-black rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={car.img}
                      alt={car.title}
                      fill
                      className="object-cover object-bottom"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm uppercase truncate">{car.title}</h4>
                      <span className="text-xs text-gold font-bold">₦{car.price.toLocaleString()}</span>
                    </div>
                    <a href={`/vehicles/${car.slug}`} className="text-xs text-gold hover:underline mt-2">View details</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Area (Membership badges) */}
        <aside className="bg-panel border border-white/10 rounded-md p-6 h-fit space-y-6 shadow-xl">
          <div className="text-center space-y-2 pb-6 border-b border-white/10">
            <span className="text-2xs uppercase tracking-widest bg-gold/15 text-gold px-3 py-1 rounded">Elite Level</span>
            <h3 className="text-xl font-bold font-heading uppercase text-white mt-3">Alamin Member</h3>
            <span className="text-sm font-bold text-gold block">1,200 XP Points</span>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">Unlocked Badges</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/5 px-3 py-1.5 rounded text-xs border border-white/10 hover:border-gold/50 cursor-default transition-all" title="Attended Autofest 2025">
                🏎 Autofest attendee
              </span>
              <span className="bg-white/5 px-3 py-1.5 rounded text-xs border border-white/10 hover:border-gold/50 cursor-default transition-all" title="First purchase verified">
                ⭐ Verified Buyer
              </span>
              <span className="bg-white/5 px-3 py-1.5 rounded text-xs border border-white/10 hover:border-gold/50 cursor-default transition-all" title="Active garage tracker">
                🛠 Care Planner
              </span>
            </div>
          </div>

          <div className="space-y-2 border-t border-white/10 pt-6">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">Active Challenges</h4>
            <a href="/challenges" className="block p-3 bg-black/40 hover:bg-black border border-white/5 hover:border-gold/30 rounded text-xs space-y-1 transition-all">
              <span className="font-bold text-white block">Daily Trivia Challenge</span>
              <span className="text-text-muted">Guess the horsepower stats of the Xiaomi YU7.</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
