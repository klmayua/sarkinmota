"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

// Mock Database of Vehicles with Category tags
const vehiclesDb = [
  {
    slug: "xiaomi-yu7",
    title: "Xiaomi YU7 Green",
    brand: "Xiaomi",
    model: "YU7",
    year: 2025,
    price: 135000000.00,
    categories: ["electric", "suvs"],
    img: "/static/carousel/xaiomi-yu7-green.png",
    hp: 1015,
    fuel: "ELECTRIC"
  },
  {
    slug: "audi-r8",
    title: "Audi R8 Performance V10",
    brand: "Audi",
    model: "R8",
    year: 2024,
    price: 260000000.00,
    categories: ["sport"],
    img: "/static/carousel/R8.png",
    hp: 610,
    fuel: "PETROL"
  },
  {
    slug: "gle-63s",
    title: "Mercedes-AMG GLE 63S Coupe",
    brand: "Mercedes-Benz",
    model: "GLE 63S",
    year: 2025,
    price: 195000000.00,
    categories: ["suvs", "sport"],
    img: "/static/carousel/mercedes-amg-gle-63.jpg",
    hp: 603,
    fuel: "PETROL"
  },
  {
    slug: "bmw-i7",
    title: "BMW i7 M70 xDrive",
    brand: "BMW",
    model: "i7",
    year: 2025,
    price: 180000000.00,
    categories: ["executive", "electric"],
    img: "/static/carousel/bmw-i7-2025.png",
    hp: 650,
    fuel: "ELECTRIC"
  },
  {
    slug: "cybertruck",
    title: "Tesla Cybertruck Foundation Series",
    brand: "Tesla",
    model: "Cybertruck",
    year: 2024,
    price: 155000000.00,
    categories: ["suvs", "electric"],
    img: "/static/carousel/CT.png",
    hp: 845,
    fuel: "ELECTRIC"
  },
  {
    slug: "nissan-patrol",
    title: "Nissan Patrol Platinum V6",
    brand: "Nissan",
    model: "Patrol",
    year: 2025,
    price: 145000000.00,
    categories: ["suvs", "daily"],
    img: "/static/carousel/nissan-patrol-2025.png",
    hp: 425,
    fuel: "PETROL"
  },
  {
    slug: "stelato-s9",
    title: "Stelato S9 Ultra",
    brand: "Stelato",
    model: "S9",
    year: 2025,
    price: 110000000.00,
    categories: ["executive", "electric"],
    img: "/static/carousel/stelato-S9-Huawei-and-BAIC-1s.jpg",
    hp: 530,
    fuel: "ELECTRIC"
  }
];

export default function CarCategoryPage() {
    const params = useParams();
    const category = params.category ? params.category.toLowerCase() : "";
    
    const categoryNames = {
        executive: "Executive Class Cars",
        sport: "Sport & Performance Supercars",
        suvs: "Premium SUVs",
        electric: "Electric & Hybrid Vehicles",
        daily: "Daily Luxury Cars"
    };

    const categoryTitle = categoryNames[category] || "Vehicle Catalog";
    const filteredVehicles = vehiclesDb.filter(v => v.categories.includes(category));

    return (
        <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
                <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/vehicles" className="hover:text-gold transition-colors">Vehicles</a> / <span className="text-gold">{category}</span>
            </nav>

            {/* Header */}
            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
                {categoryTitle}
            </h1>

            {filteredVehicles.length === 0 ? (
                <div className="text-center py-20 bg-panel border border-white/5 rounded">
                    <span className="text-3xl block mb-2">🚗</span>
                    <p className="text-text-muted text-sm">No vehicles found matching this category in our current Abuja inventory.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredVehicles.map((car) => (
                        <div key={car.slug} className="bg-panel border border-white/10 rounded-md overflow-hidden flex flex-col justify-between shadow-xl hover:border-gold/30 transition-all">
                            <div className="relative aspect-[16/10] w-full bg-black">
                                <Image
                                    src={car.img}
                                    alt={car.title}
                                    fill
                                    className="object-cover object-bottom"
                                />
                            </div>

                            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-baseline gap-2">
                                        <h2 className="text-lg font-bold uppercase tracking-tight">{car.title}</h2>
                                        <span className="text-xs text-text-muted font-mono">{car.year}</span>
                                    </div>
                                    <p className="text-xs text-gold font-bold mt-2 font-mono">₦{car.price.toLocaleString()}</p>
                                    <div className="flex gap-4 mt-4 text-[10px] text-text-muted uppercase font-mono">
                                        <span>⚡ {car.hp} HP</span>
                                        <span>⛽ {car.fuel}</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/5">
                                    <a
                                        href={`/vehicles/${car.slug}`}
                                        className="block text-center w-full py-3 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-wider rounded transition-all"
                                    >
                                        View Specifications
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
