"use client";

import { useState } from "react";
import Image from "next/image";

// Mock Active Inventory Database
const initialVehicles = [
  {
    id: "v1",
    title: "Xiaomi YU7 Green",
    slug: "xiaomi-yu7",
    brand: "Xiaomi",
    model: "YU7",
    year: 2025,
    price: 135000000.00,
    condition: "TOKUNBO",
    mileage: 50,
    fuel: "ELECTRIC",
    gearbox: "SINGLE_SPEED",
    hp: 1015,
    range: 800,
    dutyPaid: true,
    img: "/static/carousel/xaiomi-yu7-green.png"
  },
  {
    id: "v2",
    title: "Audi R8 performance V10",
    slug: "audi-r8",
    brand: "Audi",
    model: "R8",
    year: 2024,
    price: 260000000.00,
    condition: "TOKUNBO",
    mileage: 2300,
    fuel: "PETROL",
    gearbox: "AUTOMATIC",
    hp: 610,
    range: null,
    dutyPaid: true,
    img: "/static/carousel/R8.png"
  },
  {
    id: "v3",
    title: "Mercedes-AMG GLE 63S Coupe",
    slug: "gle-63s",
    brand: "Mercedes-Benz",
    model: "GLE 63S",
    year: 2025,
    price: 195000000.00,
    condition: "TOKUNBO",
    mileage: 110,
    fuel: "PETROL",
    gearbox: "AUTOMATIC",
    hp: 603,
    range: null,
    dutyPaid: true,
    img: "/static/carousel/mercedes-amg-gle-63.jpg"
  },
  {
    id: "v4",
    title: "BMW i7 M70 Executive",
    slug: "bmw-i7",
    brand: "BMW",
    model: "i7",
    year: 2024,
    price: 180000000.00,
    condition: "TOKUNBO",
    mileage: 420,
    fuel: "ELECTRIC",
    gearbox: "SINGLE_SPEED",
    hp: 650,
    range: 600,
    dutyPaid: true,
    img: "/static/carousel/bmw-i7-2025.png"
  },
  {
    id: "v5",
    title: "Tesla Cybertruck Cyberbeast",
    slug: "cybertruck",
    brand: "Tesla",
    model: "Cybertruck",
    year: 2024,
    price: 210000000.00,
    condition: "TOKUNBO",
    mileage: 85,
    fuel: "ELECTRIC",
    gearbox: "SINGLE_SPEED",
    hp: 845,
    range: 515,
    dutyPaid: true,
    img: "/static/carousel/CT.png"
  },
  {
    id: "v6",
    title: "Nissan Patrol Platinum V8",
    slug: "nissan-patrol",
    brand: "Nissan",
    model: "Patrol",
    year: 2024,
    price: 165000000.00,
    condition: "TOKUNBO",
    mileage: 0,
    fuel: "PETROL",
    gearbox: "AUTOMATIC",
    hp: 400,
    range: null,
    dutyPaid: true,
    img: "/static/carousel/nissan-patrol-2025.png"
  },
  {
    id: "v7",
    title: "Stelato S9 Ultra",
    slug: "stelato-s9",
    brand: "Stelato",
    model: "S9",
    year: 2025,
    price: 140000000.00,
    condition: "TOKUNBO",
    mileage: 10,
    fuel: "ELECTRIC",
    gearbox: "SINGLE_SPEED",
    hp: 530,
    range: 700,
    dutyPaid: true,
    img: "/static/carousel/stelato-S9-Huawei-and-BAIC-1s.jpg"
  }
];

export default function Catalog() {
  const [vehicles] = useState(initialVehicles);
  const [search, setSearch] = useState("");
  const [conditionFilter, setConditionFilter] = useState("ALL");
  const [fuelFilter, setFuelFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("DEFAULT");

  const filteredVehicles = vehicles
    .filter((car) => {
      const matchesSearch = car.title.toLowerCase().includes(search.toLowerCase()) ||
                            car.brand.toLowerCase().includes(search.toLowerCase());
      const matchesCondition = conditionFilter === "ALL" || car.condition === conditionFilter;
      const matchesFuel = fuelFilter === "ALL" || car.fuel === fuelFilter;
      return matchesSearch && matchesCondition && matchesFuel;
    })
    .sort((a, b) => {
      if (sortBy === "PRICE_ASC") return a.price - b.price;
      if (sortBy === "PRICE_DESC") return b.price - a.price;
      if (sortBy === "YEAR_DESC") return b.year - a.year;
      return 0;
    });

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Header & Breadcrumbs */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Vehicles</span>
      </nav>
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Showroom Inventory
      </h1>

      {/* Catalog Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Left: Filter Sidebar */}
        <aside className="bg-panel border border-white/10 rounded-md p-6 h-fit space-y-6">
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-gold font-semibold">Search</h3>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. Xiaomi, AMG..."
              className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-gold font-semibold">Condition</h3>
            <div className="flex flex-col gap-2 text-sm text-text-muted">
              {["ALL", "TOKUNBO", "NEW", "LOCAL_USED"].map((cond) => (
                <label key={cond} className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                  <input
                    type="radio"
                    name="condition"
                    checked={conditionFilter === cond}
                    onChange={() => setConditionFilter(cond)}
                    className="accent-gold"
                  />
                  <span>{cond === "ALL" ? "All Conditions" : cond}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-gold font-semibold">Fuel Type</h3>
            <div className="flex flex-col gap-2 text-sm text-text-muted">
              {["ALL", "ELECTRIC", "PETROL", "HYBRID"].map((fuel) => (
                <label key={fuel} className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                  <input
                    type="radio"
                    name="fuel"
                    checked={fuelFilter === fuel}
                    onChange={() => setFuelFilter(fuel)}
                    className="accent-gold"
                  />
                  <span>{fuel === "ALL" ? "All Fuels" : fuel}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-gold font-semibold">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none text-white cursor-pointer"
            >
              <option value="DEFAULT">Default sorting</option>
              <option value="PRICE_ASC">Price: Low to High</option>
              <option value="PRICE_DESC">Price: High to Low</option>
              <option value="YEAR_DESC">Year: Newest First</option>
            </select>
          </div>
        </aside>

        {/* Right: Products Grid */}
        <main className="space-y-6">
          <div className="text-xs text-text-muted">
            Found {filteredVehicles.length} vehicles matching your filters.
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredVehicles.map((car) => (
                <div key={car.id} className="flex flex-col bg-panel border border-white/5 rounded-md overflow-hidden transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10">
                  <div className="relative aspect-video w-full bg-black">
                    <Image
                      src={car.img}
                      alt={car.title}
                      fill
                      className="object-cover object-bottom"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold bg-gold text-black rounded-sm uppercase tracking-wider">
                      {car.condition}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-white uppercase tracking-tight line-clamp-1">{car.title}</h2>
                      <p className="text-xs text-text-muted mt-1">{car.year} | {car.mileage.toLocaleString()} km | {car.fuel}</p>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                      <span className="text-lg font-bold text-gold">₦{car.price.toLocaleString()}</span>
                      <a
                        href={`/vehicles/${car.slug}`}
                        className="w-full py-3 bg-white/5 hover:bg-gold hover:text-black transition-all text-center text-xs uppercase font-semibold tracking-wider rounded-sm"
                      >
                        View Specifications
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/15 rounded-md">
              <svg viewBox="0 0 24 24" fill="none" className="size-16 stroke-white/20 mb-4" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <h3 className="text-lg text-white font-bold mb-2">No matching vehicles</h3>
              <p className="text-sm text-text-muted mb-6">Try adjusting your filters or search terms.</p>
              <a href="/tools/ai-match" className="border border-gold text-gold hover:bg-gold hover:text-black px-6 py-2.5 rounded transition-all text-sm uppercase font-semibold">
                Ask MyBratha AI
              </a>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
