"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SellerDashboard() {
  const [listings, setListings] = useState([]);
  const [swaps, setSwaps] = useState([]);
  const [activeTab, setActiveTab] = useState("listings"); // listings, swaps, leads
  const [activeListingFilter, setActiveListingFilter] = useState("ALL"); // ALL, APPROVED, VALUATION_IN_PROGRESS

  useEffect(() => {
    // Seed default mock listings if local storage is empty
    const savedListings = localStorage.getItem("my_listings");
    if (!savedListings) {
      const seedListings = [
        {
          id: "v_seed_1",
          title: "2023 Range Rover Velar R-Dynamic",
          brand: "Range Rover",
          model: "Velar",
          year: 2023,
          price: 95000000.00,
          condition: "TOKUNBO",
          mileage: 12000,
          fuel: "PETROL",
          gearbox: "AUTOMATIC",
          dutyPaid: true,
          status: "APPROVED",
          views: 342,
          leads: 8,
          img: "/static/carousel/mercedes-amg-gle-63.jpg",
          dateAdded: "2026-05-10"
        },
        {
          id: "v_seed_2",
          title: "2022 Mercedes-Benz G63 AMG",
          brand: "Mercedes-Benz",
          model: "G63",
          year: 2022,
          price: 245000000.00,
          condition: "TOKUNBO",
          mileage: 8200,
          fuel: "PETROL",
          gearbox: "AUTOMATIC",
          dutyPaid: true,
          status: "APPROVED",
          views: 1105,
          leads: 19,
          img: "/static/carousel/mercedes-amg-gle-63.jpg",
          dateAdded: "2026-06-01"
        }
      ];
      localStorage.setItem("my_listings", JSON.stringify(seedListings));
      setListings(seedListings);
    } else {
      setListings(JSON.parse(savedListings));
    }

    const savedSwaps = localStorage.getItem("my_swaps");
    if (!savedSwaps) {
      const seedSwaps = [
        {
          id: "swap_seed_1",
          myVehicle: "2020 Lexus RX 350 F-Sport",
          targetVehicle: "Xiaomi YU7 Green",
          estimatedValue: 38000000,
          targetValue: 135000000,
          difference: 97000000,
          status: "INSPECTION_SCHEDULED",
          dateAdded: "2026-06-12"
        }
      ];
      localStorage.setItem("my_swaps", JSON.stringify(seedSwaps));
      setSwaps(seedSwaps);
    } else {
      setSwaps(JSON.parse(savedSwaps));
    }
  }, []);

  const handleDeleteListing = (id) => {
    const updated = listings.filter((item) => item.id !== id);
    setListings(updated);
    localStorage.setItem("my_listings", JSON.stringify(updated));
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updated = listings.map((item) => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setListings(updated);
    localStorage.setItem("my_listings", JSON.stringify(updated));
  };

  // Calculate metrics
  const totalListings = listings.length;
  const totalViews = listings.reduce((acc, curr) => acc + (curr.views || 0), 0);
  const totalLeads = listings.reduce((acc, curr) => acc + (curr.leads || 0), 0) + swaps.length;
  const activeOffers = swaps.filter(s => s.status !== "COMPLETED" && s.status !== "REJECTED").length;

  const filteredListings = listings.filter(item => {
    if (activeListingFilter === "ALL") return true;
    return item.status === activeListingFilter;
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className="w-full lg:w-[280px] bg-panel border-r border-white/10 p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-8">
          {/* Logo */}
          <a href="/" className="relative w-28 h-16 flex items-center">
            <Image
              src="/static/brand-logo-light.webp"
              alt="SarkinMota Logo"
              fill
              className="object-contain"
              priority
            />
          </a>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab("listings")}
              className={`w-full text-left px-4 py-3 rounded text-xs uppercase tracking-wider font-semibold transition-all ${activeTab === "listings" ? "bg-gold text-black shadow-md shadow-gold/20" : "text-text-muted hover:text-white hover:bg-white/5"}`}
            >
              🚗 Active Listings ({listings.length})
            </button>
            <button
              onClick={() => setActiveTab("swaps")}
              className={`w-full text-left px-4 py-3 rounded text-xs uppercase tracking-wider font-semibold transition-all ${activeTab === "swaps" ? "bg-gold text-black shadow-md shadow-gold/20" : "text-text-muted hover:text-white hover:bg-white/5"}`}
            >
              🔄 Swap Requests ({swaps.length})
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`w-full text-left px-4 py-3 rounded text-xs uppercase tracking-wider font-semibold transition-all ${activeTab === "leads" ? "bg-gold text-black shadow-md shadow-gold/20" : "text-text-muted hover:text-white hover:bg-white/5"}`}
            >
              📥 Leads Inbox ({totalLeads})
            </button>
          </nav>
        </div>

        <div className="pt-8 border-t border-white/5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-gold">U</div>
            <div>
              <p className="text-xs font-semibold text-white">Abuja Member</p>
              <p className="text-[10px] text-text-muted">member@sarkinmota.ng</p>
            </div>
          </div>
          <a
            href="/sell-swap"
            className="block w-full py-2.5 text-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs uppercase font-semibold text-white transition-all"
          >
            Exit Dashboard
          </a>
        </div>
      </aside>

      {/* 2. RIGHT CONTENT AREA */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-wide">Seller Operations Control</h1>
            <p className="text-xs text-text-muted mt-1">Manage showroom uploads, trade-in valuations, and lead transactions.</p>
          </div>
          <a
            href="/sell"
            className="px-6 py-3 bg-gold text-black font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-gold-glow transition-all font-heading shadow-md shadow-gold/25"
          >
            + New Showroom Listing
          </a>
        </div>

        {/* 3. METRICS RIBBON */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-panel border border-white/10 rounded-md p-6">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">Total Vehicles</span>
            <p className="text-3xl font-bold font-heading text-white mt-2">{totalListings}</p>
          </div>
          <div className="bg-panel border border-white/10 rounded-md p-6">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">Showroom Views</span>
            <p className="text-3xl font-bold font-heading text-gold mt-2">{totalViews.toLocaleString()}</p>
          </div>
          <div className="bg-panel border border-white/10 rounded-md p-6">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">Active Leads</span>
            <p className="text-3xl font-bold font-heading text-white mt-2">{totalLeads}</p>
          </div>
          <div className="bg-panel border border-white/10 rounded-md p-6">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">Pending Swaps</span>
            <p className="text-3xl font-bold font-heading text-gold mt-2">{activeOffers}</p>
          </div>
        </div>

        {/* 4. TAB PANELS */}
        {activeTab === "listings" && (
          <div className="space-y-6">
            <div className="flex gap-2 border-b border-white/5 pb-3">
              {["ALL", "APPROVED", "PENDING", "SOLD"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveListingFilter(tab)}
                  className={`px-4 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all ${activeListingFilter === tab ? "bg-white/10 text-white" : "text-text-muted hover:text-white"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {filteredListings.length > 0 ? (
              <div className="overflow-x-auto border border-white/10 rounded-md bg-panel">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-text-muted bg-black/40">
                      <th className="p-4 font-semibold">Vehicle</th>
                      <th className="p-4 font-semibold">Asking Price</th>
                      <th className="p-4 font-semibold">Metrics</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold">Date Added</th>
                      <th className="p-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredListings.map((car) => (
                      <tr key={car.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 flex items-center gap-3">
                          <div className="relative size-12 bg-black border border-white/10 rounded overflow-hidden shrink-0">
                            <Image
                              src={car.img}
                              alt={car.title}
                              fill
                              className="object-cover object-bottom"
                            />
                          </div>
                          <div>
                            <span className="font-bold text-white uppercase block line-clamp-1">{car.title}</span>
                            <span className="text-[10px] text-text-muted">{car.condition} | {car.mileage.toLocaleString()} km</span>
                          </div>
                        </td>
                        <td className="p-4 font-bold text-gold">₦{car.price.toLocaleString()}</td>
                        <td className="p-4">
                          <div className="text-[10px] text-text-muted space-y-0.5">
                            <p>👁 {car.views || 0} views</p>
                            <p>✉ {car.leads || 0} inquiries</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 text-[10px] font-bold rounded-sm uppercase tracking-wider ${car.status === "APPROVED" ? "bg-green-500/10 text-green-400 border border-green-500/20" : car.status === "SOLD" ? "bg-zinc-800 text-zinc-400" : "bg-gold/10 text-gold border border-gold/20"}`}>
                            {car.status}
                          </span>
                        </td>
                        <td className="p-4 text-xs text-text-muted">{car.dateAdded}</td>
                        <td className="p-4 text-right space-x-2">
                          {car.status !== "SOLD" && (
                            <button
                              onClick={() => handleUpdateStatus(car.id, "SOLD")}
                              className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all"
                            >
                              Mark Sold
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteListing(car.id)}
                            className="px-3 py-1.5 bg-red-600/10 hover:bg-red-600 hover:text-white text-red-400 border border-red-600/20 rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-white/10 rounded-md">
                <p className="text-sm text-text-muted">No listings found matching this status.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "swaps" && (
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-heading">Submitted Trade-in Requests</h2>
            {swaps.length > 0 ? (
              <div className="overflow-x-auto border border-white/10 rounded-md bg-panel">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-text-muted bg-black/40">
                      <th className="p-4 font-semibold">My Vehicle</th>
                      <th className="p-4 font-semibold">Target Upgrade</th>
                      <th className="p-4 font-semibold">Valuations</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold">Request Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {swaps.map((sw) => (
                      <tr key={sw.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-white">{sw.myVehicle}</td>
                        <td className="p-4 text-text-muted">{sw.targetVehicle}</td>
                        <td className="p-4">
                          <div className="text-[10px] text-text-muted space-y-0.5">
                            <p>My car: ₦{sw.estimatedValue.toLocaleString()}</p>
                            <p>Target: ₦{sw.targetValue.toLocaleString()}</p>
                            <p className="text-gold font-bold">Diff: ₦{sw.difference.toLocaleString()}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 text-[10px] font-bold rounded-sm uppercase tracking-wider bg-gold/10 text-gold border border-gold/20">
                            {sw.status.replace(/_/g, " ")}
                          </span>
                        </td>
                        <td className="p-4 text-xs text-text-muted">{sw.dateAdded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-white/10 rounded-md">
                <p className="text-sm text-text-muted">No trade-in swap requests recorded yet.</p>
                <a href="/swap" className="mt-4 inline-block text-xs uppercase font-bold text-gold hover:underline">Request valuation →</a>
              </div>
            )}
          </div>
        )}

        {activeTab === "leads" && (
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-heading">Incoming Showroom Leads</h2>
            <div className="space-y-4">
              <div className="bg-panel border border-white/10 rounded-md p-6 space-y-3">
                <div className="flex justify-between items-start border-b border-white/5 pb-2">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase">Muhammad Ibrahim</h3>
                    <p className="text-[10px] text-text-muted">ibrahim@abuja-investments.com | +234 803 111 2222</p>
                  </div>
                  <span className="text-[10px] uppercase bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">Active Offer</span>
                </div>
                <p className="text-xs text-text-muted italic">"Hi Alamin, I am interested in inspect the 2022 G63 AMG. I would love to pay in cash this weekend at the Central Business District showroom. Let me know if the price is negotiable."</p>
                <div className="text-[10px] text-text-muted">Regarding: <span className="text-white font-semibold">2022 Mercedes-Benz G63 AMG</span> | Added: 2026-06-14</div>
              </div>

              <div className="bg-panel border border-white/10 rounded-md p-6 space-y-3">
                <div className="flex justify-between items-start border-b border-white/5 pb-2">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase">Chinedu Okafor</h3>
                    <p className="text-[10px] text-text-muted">okafor@chinedu-logistics.com | +234 812 345 6789</p>
                  </div>
                  <span className="text-[10px] uppercase bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">Archived</span>
                </div>
                <p className="text-xs text-text-muted italic">"Is the customs duty clearance document available for download for the Range Rover Velar?"</p>
                <div className="text-[10px] text-text-muted">Regarding: <span className="text-white font-semibold">2023 Range Rover Velar R-Dynamic</span> | Added: 2026-06-11</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
