"use client";

import Image from "next/image";

const bikesDb = [
  {
    slug: "bmw-s1000rr",
    title: "BMW S1000RR M Package",
    brand: "BMW Motorrad",
    year: 2025,
    price: 32000000.00,
    img: "/static/carousel/R8.png", // fallback placeholder from showroom
    hp: 205,
    engine: "999cc Inline-4",
    topSpeed: "303 km/h"
  },
  {
    slug: "kawasaki-zx10r",
    title: "Kawasaki Ninja ZX-10R",
    brand: "Kawasaki",
    year: 2024,
    price: 28000000.00,
    img: "/static/carousel/xaiomi-yu7-green.png", // fallback
    hp: 200,
    engine: "998cc Inline-4",
    topSpeed: "299 km/h"
  },
  {
    slug: "ducati-panigale-v4s",
    title: "Ducati Panigale V4S",
    brand: "Ducati",
    year: 2025,
    price: 45000000.00,
    img: "/static/carousel/mercedes-amg-gle-63.jpg", // fallback
    hp: 215,
    engine: "1,103cc V4 Desmosedici",
    topSpeed: "315 km/h"
  }
];

export default function PowerBikesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/vehicles" className="hover:text-gold transition-colors">Vehicles</a> / <span className="text-gold">Power Bikes</span>
      </nav>

      <h1 className="text-3xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Luxury Power Bikes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {bikesDb.map((bike) => (
          <div key={bike.slug} className="bg-panel border border-white/10 rounded-md overflow-hidden flex flex-col justify-between shadow-xl hover:border-gold/30 transition-all">
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={bike.img}
                alt={bike.title}
                fill
                className="object-cover object-bottom opacity-75"
              />
              <div className="absolute top-3 left-3 bg-gold text-black text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                Power Bike
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h2 className="text-lg font-bold uppercase tracking-tight">{bike.title}</h2>
                  <span className="text-xs text-text-muted font-mono">{bike.year}</span>
                </div>
                <p className="text-xs text-gold font-bold mt-2 font-mono">₦{bike.price.toLocaleString()}</p>
                <div className="flex gap-4 mt-4 text-[10px] text-text-muted uppercase font-mono">
                  <span>⚡ {bike.hp} HP</span>
                  <span>⚙️ {bike.engine}</span>
                  <span>🏁 {bike.topSpeed}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href={`/vehicles`}
                  className="block text-center w-full py-3 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-wider rounded transition-all"
                >
                  Inquire Spec Sheet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
