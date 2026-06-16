"use client";

import { useState } from "react";
import Image from "next/image";

// Mock Database same as catalog
const vehiclesDb = [
  {
    slug: "xiaomi-yu7",
    title: "Xiaomi YU7 Green",
    year: 2025,
    price: 135000000,
    fuel: "ELECTRIC",
    gearbox: "SINGLE_SPEED",
    hp: 1015,
    range: "800 km",
    zeroToHundred: "2.78s",
    topSpeed: "350 km/h",
    img: "/static/carousel/xaiomi-yu7-green.png"
  },
  {
    slug: "audi-r8",
    title: "Audi R8 Performance",
    year: 2024,
    price: 260000000,
    fuel: "PETROL",
    gearbox: "AUTOMATIC",
    hp: 610,
    range: "N/A",
    zeroToHundred: "3.10s",
    topSpeed: "331 km/h",
    img: "/static/carousel/R8.png"
  },
  {
    slug: "gle-63s",
    title: "Mercedes-AMG GLE 63S",
    year: 2025,
    price: 195000000,
    fuel: "PETROL",
    gearbox: "AUTOMATIC",
    hp: 603,
    range: "N/A",
    zeroToHundred: "3.70s",
    topSpeed: "280 km/h",
    img: "/static/carousel/mercedes-amg-gle-63.jpg"
  },
  {
    slug: "bmw-i7",
    title: "BMW i7 M70 Executive",
    year: 2024,
    price: 180000000,
    fuel: "ELECTRIC",
    gearbox: "SINGLE_SPEED",
    hp: 650,
    range: "600 km",
    zeroToHundred: "3.50s",
    topSpeed: "250 km/h",
    img: "/static/carousel/bmw-i7-2025.png"
  },
  {
    slug: "cybertruck",
    title: "Tesla Cybertruck",
    year: 2024,
    price: 210000000,
    fuel: "ELECTRIC",
    gearbox: "SINGLE_SPEED",
    hp: 845,
    range: "515 km",
    zeroToHundred: "2.60s",
    topSpeed: "209 km/h",
    img: "/static/carousel/CT.png"
  }
];

export default function CompareCars() {
  const [selectedSlugs, setSelectedSlugs] = useState(["xiaomi-yu7", "cybertruck", "audi-r8"]);

  const handleCarChange = (index, newSlug) => {
    const nextList = [...selectedSlugs];
    nextList[index] = newSlug;
    setSelectedSlugs(nextList);
  };

  const getCarBySlug = (slug) => vehiclesDb.find((car) => car.slug === slug) || null;

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Compare Cars</span>
      </nav>
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Compare Vehicles
      </h1>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map((idx) => {
          const activeSlug = selectedSlugs[idx];
          const car = getCarBySlug(activeSlug);

          return (
            <div key={idx} className="bg-panel border border-white/10 rounded-md p-6 space-y-6 flex flex-col justify-between">
              {/* Selector Dropdown */}
              <div className="space-y-2">
                <label className="text-xs text-text-muted uppercase tracking-wider">Select Column {idx + 1}</label>
                <select
                  value={activeSlug || ""}
                  onChange={(e) => handleCarChange(idx, e.target.value)}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
                >
                  <option value="">-- Choose Car --</option>
                  {vehiclesDb.map((item) => (
                    <option key={item.slug} value={item.slug}>{item.title}</option>
                  ))}
                </select>
              </div>

              {car ? (
                <div className="space-y-6 flex-1 flex flex-col justify-between pt-4">
                  {/* Photo Thumbnail */}
                  <div className="relative aspect-video w-full bg-black border border-white/5 rounded-sm overflow-hidden">
                    <Image
                      src={car.img}
                      alt={car.title}
                      fill
                      className="object-cover object-bottom"
                    />
                  </div>

                  {/* Spec List */}
                  <div className="space-y-3 text-sm border-t border-white/5 pt-4">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">Model Year</span>
                      <span className="font-semibold">{car.year}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">Pricing</span>
                      <span className="font-bold text-gold">₦{car.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">Fuel Class</span>
                      <span className="font-semibold">{car.fuel}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">Gearbox</span>
                      <span className="font-semibold">{car.gearbox.replace("_", " ")}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">Power</span>
                      <span className="font-bold text-gold">{car.hp} HP</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">0-100 km/h</span>
                      <span className="font-semibold">{car.zeroToHundred}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-text-muted">Top Speed</span>
                      <span className="font-semibold">{car.topSpeed}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-text-muted">EV Range</span>
                      <span className="font-semibold">{car.range}</span>
                    </div>
                  </div>

                  <a
                    href={`/vehicles/${car.slug}`}
                    className="w-full py-3 bg-white/5 hover:bg-gold hover:text-black transition-all text-center text-xs uppercase font-semibold tracking-wider rounded-sm block"
                  >
                    View Showroom Specs
                  </a>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center py-20 border border-dashed border-white/5 rounded text-text-muted text-sm">
                  <span>No vehicle selected</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
