"use client";

import { useState } from "react";
import Image from "next/image";

// Mock Clubs Database
const initialClubs = [
  {
    id: "c1",
    name: "Abuja Supercar Circle",
    slug: "abuja-supercars",
    membersCount: 142,
    description: "Abuja's premier invitation-only luxury supercar club. Hosting weekend runs, track days, and networking events for verified exotic owners.",
    tierRequired: "ELITE",
    isJoined: false,
    img: "/static/carousel/R8.png"
  },
  {
    id: "c2",
    name: "Tokunbo EV Alliance",
    slug: "ev-alliance",
    membersCount: 89,
    description: "Electric vehicle pioneers and tech enthusiasts. Discussing battery charging grids, import duty exceptions, and software updates for Tesla/Xiaomi.",
    tierRequired: "REGISTERED",
    isJoined: false,
    img: "/static/carousel/xaiomi-yu7-green.png"
  },
  {
    id: "c3",
    name: "V10 & V12 Purists",
    slug: "v10-v12-purists",
    membersCount: 56,
    description: "For the love of high-octane naturally aspirated combustion engines. Share audio clips of V10 exhausts, tuning guides, and dyno test results.",
    tierRequired: "PREMIUM",
    isJoined: false,
    img: "/static/carousel/mercedes-amg-gle-63.jpg"
  }
];

export default function ClubsPortal() {
  const [clubs, setClubs] = useState(initialClubs);

  const handleJoinClub = (clubId) => {
    setClubs((prev) =>
      prev.map((club) => {
        if (club.id === clubId) {
          return {
            ...club,
            isJoined: !club.isJoined,
            membersCount: club.isJoined ? club.membersCount - 1 : club.membersCount + 1
          };
        }
        return club;
      })
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/circle" className="hover:text-gold transition-colors">Circle</a> / <span className="text-gold">Owner Clubs</span>
      </nav>

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 uppercase tracking-wide border-b border-white/10 pb-4">
        Owner Clubs Directory
      </h1>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <div key={club.id} className="bg-panel border border-white/10 rounded-md overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="relative aspect-video w-full bg-black">
              <Image
                src={club.img}
                alt={club.name}
                fill
                className="object-cover object-bottom"
              />
              <div className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold bg-gold text-black rounded-sm uppercase tracking-wider">
                {club.tierRequired} tier
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h2 className="text-lg font-bold uppercase tracking-tight">{club.name}</h2>
                  <span className="text-xs text-text-muted flex-shrink-0">{club.membersCount} Members</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed mt-2">{club.description}</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => handleJoinClub(club.id)}
                  className={`w-full py-3 text-xs uppercase font-semibold tracking-wider rounded transition-all ${
                    club.isJoined
                      ? "bg-white/5 text-gold border border-gold/40 hover:bg-gold/15"
                      : "bg-gold text-black hover:bg-gold-glow"
                  }`}
                >
                  {club.isJoined ? "✓ Leave Club Circle" : "Apply to Join Club"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
