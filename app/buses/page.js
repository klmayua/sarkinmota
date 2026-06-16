"use client";

import Image from "next/image";

const busesDb = [
  {
    slug: "sprinter-vip",
    title: "Mercedes-Benz Sprinter Executive VIP",
    brand: "Mercedes-Benz",
    year: 2025,
    price: 185000000.00,
    img: "/static/carousel/nissan-patrol-2025.png", // fallback
    capacity: "9-Seat Captain Cabin",
    fuel: "DIESEL",
    features: "Wi-Fi, Apple TV, Partition Screen, Reclining Massagers"
  },
  {
    slug: "toyota-coaster-vip",
    title: "Toyota Coaster VIP 23-Seater",
    brand: "Toyota",
    year: 2024,
    price: 125000000.00,
    img: "/static/carousel/mercedes-amg-gle-63.jpg", // fallback
    capacity: "23-Seater Executive",
    fuel: "PETROL",
    features: "Premium Leather Seats, Cooler Box, LCD TV, Overhead A/C"
  }
];

export default function BusesCatalogPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/vehicles" className="hover:text-gold transition-colors">Vehicles</a> / <span className="text-gold">Buses & Vans</span>
      </nav>

      <h1 className="text-3xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Executive Buses & Vans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {busesDb.map((bus) => (
          <div key={bus.slug} className="bg-panel border border-white/10 rounded-md overflow-hidden flex flex-col justify-between shadow-xl hover:border-gold/30 transition-all">
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={bus.img}
                alt={bus.title}
                fill
                className="object-cover object-bottom opacity-75"
              />
              <div className="absolute top-3 left-3 bg-gold text-black text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                Executive Bus
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h2 className="text-lg font-bold uppercase tracking-tight">{bus.title}</h2>
                  <span className="text-xs text-text-muted font-mono">{bus.year}</span>
                </div>
                <p className="text-xs text-gold font-bold mt-2 font-mono">₦{bus.price.toLocaleString()}</p>
                <div className="flex flex-col gap-1.5 mt-4 text-[10px] text-text-muted uppercase font-mono">
                  <span>👥 Capacity: {bus.capacity}</span>
                  <span>⛽ Fuel Type: {bus.fuel}</span>
                  <span className="normal-case">✨ Cabin: {bus.features}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href={`/vehicles`}
                  className="block text-center w-full py-3 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-wider rounded transition-all"
                >
                  Request Commercial Quote
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
