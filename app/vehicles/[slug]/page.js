"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

// Mock Inventory matching catalog
const vehiclesDb = {
  "xiaomi-yu7": {
    title: "Xiaomi YU7 Green",
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
    torque: 950,
    zeroToHundred: "2.78s",
    topSpeed: 350,
    colorExt: "Emerald Green",
    colorInt: "Nappa Sand Beige",
    description: "The SUV redefining electric luxury. Features Xiaomi HyperOS integration, smart cockpit displays, dual-motor AWD, and full customs duty cleared in Abuja.",
    img: "/static/carousel/xaiomi-yu7-green.png",
    dutyPaid: true
  },
  "audi-r8": {
    title: "Audi R8 Performance V10",
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
    torque: 560,
    zeroToHundred: "3.10s",
    topSpeed: 331,
    colorExt: "Suzuka Gray Metallic",
    colorInt: "Black Alcantara",
    description: "V10 symphony. Mid-engine perfection. The supercar that needs no introduction. Last of the naturally aspirated V10 beasts. Full documentation cleared.",
    img: "/static/carousel/R8.png",
    dutyPaid: true
  },
  "gle-63s": {
    title: "Mercedes-AMG GLE 63S Coupe",
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
    torque: 850,
    zeroToHundred: "3.70s",
    topSpeed: 280,
    colorExt: "Obsidian Black",
    colorInt: "AMG Red/Black Leather",
    description: "603 HP of refined aggression. Dual-clutch AMG dynamic suspension, panoramic roof, active ride control, and local customs clearing fully completed.",
    img: "/static/carousel/mercedes-amg-gle-63.jpg",
    dutyPaid: true
  },
  "bmw-i7": {
    title: "BMW i7 M70 Executive",
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
    torque: 1100,
    zeroToHundred: "3.50s",
    topSpeed: 250,
    colorExt: "Two-Tone Oxide Gray/Sapphire",
    colorInt: "Smoke White Merino Wool",
    description: "Zero emissions. Infinite presence. Features the rear 31.3-inch Theatre Screen display, Executive lounge seating, and active air suspension.",
    img: "/static/carousel/bmw-i7-2025.png",
    dutyPaid: true
  },
  "cybertruck": {
    title: "Tesla Cybertruck Cyberbeast",
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
    torque: 14000,
    zeroToHundred: "2.60s",
    topSpeed: 209,
    colorExt: "Stainless Steel",
    colorInt: "Cyber Black/White",
    description: "Bulletproof exoskeleton. Tri-motor beast. Turn heads, break boundaries. Dynamic steering, premium steer-by-wire capability, and full duty verified.",
    img: "/static/carousel/CT.png",
    dutyPaid: true
  },
  "nissan-patrol": {
    title: "Nissan Patrol Platinum V8",
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
    torque: 560,
    zeroToHundred: "6.60s",
    topSpeed: 210,
    colorExt: "Pearl White",
    colorInt: "Tan Leather",
    description: "Built for Nigerian roads. Engineered for status. Uncompromising capability. Tri-zone climate control, rear entertainment screens, and full V8 power.",
    img: "/static/carousel/nissan-patrol-2025.png",
    dutyPaid: true
  },
  "stelato-s9": {
    title: "Stelato S9 Ultra",
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
    torque: 680,
    zeroToHundred: "3.90s",
    topSpeed: 220,
    colorExt: "Matte Titanium Gray",
    colorInt: "Amber Brown Leather",
    description: "Huawei's AI-powered luxury sedan. Chinese innovation meets German-tuned chassis. Active damping air suspension, HarmonyOS intelligent cabin.",
    img: "/static/carousel/stelato-S9-Huawei-and-BAIC-1s.jpg",
    dutyPaid: true
  }
};

export default function VehicleDetail() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [swapInterest, setSwapInterest] = useState(false);
  const [financeInterest, setFinanceInterest] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (slug && vehiclesDb[slug]) {
      setCar(vehiclesDb[slug]);
      setMessage(`Hi Alamin, I am highly interested in the ${vehiclesDb[slug].title}. Please send me the customs declaration files and availability logs.`);
    }
  }, [slug]);

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-black">
        <h2 className="text-2xl font-bold mb-4 font-heading">Vehicle Listing Not Found</h2>
        <a href="/vehicles" className="px-6 py-2.5 bg-gold text-black rounded font-semibold uppercase text-xs">Back to Inventory</a>
      </div>
    );
  }

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: swapInterest ? "VEHICLE_SWAP" : "VEHICLE_INQUIRY",
          vehicle_slug: slug,
          name,
          email,
          phone,
          message,
          finance_interest: financeInterest,
          swap_interest: swapInterest
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/vehicles" className="hover:text-gold transition-colors">Vehicles</a> / <span className="text-gold">{car.brand} {car.model}</span>
      </nav>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-white/10 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">{car.title}</h1>
          <p className="text-sm text-text-muted mt-2">VIN Verification Checked | Condition: {car.condition}</p>
        </div>
        <div className="text-left md:text-right">
          <span className="text-3xl font-black text-gold block">₦{car.price.toLocaleString()}</span>
          <span className="text-xs text-green-500 font-semibold uppercase mt-1 inline-flex items-center gap-1">
            ✓ Customs Duty Paid
          </span>
        </div>
      </div>

      {/* Detail Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">
        {/* Left: Media & Spec sheet */}
        <div className="space-y-12">
          {/* Main Visual Render */}
          <div className="relative aspect-video w-full bg-zinc-950 border border-white/5 rounded-md overflow-hidden">
            <Image
              src={car.img}
              alt={car.title}
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-panel border border-white/5 p-5 rounded-md text-center">
              <span className="text-text-muted text-xs uppercase tracking-wider block mb-1">0-100 km/h</span>
              <span className="text-2xl font-black text-gold">{car.zeroToHundred || "N/A"}</span>
            </div>
            <div className="bg-panel border border-white/5 p-5 rounded-md text-center">
              <span className="text-text-muted text-xs uppercase tracking-wider block mb-1">Power Output</span>
              <span className="text-2xl font-black text-gold">{car.hp} HP</span>
            </div>
            <div className="bg-panel border border-white/5 p-5 rounded-md text-center">
              <span className="text-text-muted text-xs uppercase tracking-wider block mb-1">Top Speed</span>
              <span className="text-2xl font-black text-gold">{car.topSpeed} km/h</span>
            </div>
            <div className="bg-panel border border-white/5 p-5 rounded-md text-center">
              <span className="text-text-muted text-xs uppercase tracking-wider block mb-1">Fuel Class</span>
              <span className="text-2xl font-black text-gold">{car.fuel}</span>
            </div>
            <div className="bg-panel border border-white/5 p-5 rounded-md text-center">
              <span className="text-text-muted text-xs uppercase tracking-wider block mb-1">Gearbox</span>
              <span className="text-2xl font-black text-gold">{car.gearbox.replace("_", " ")}</span>
            </div>
            <div className="bg-panel border border-white/5 p-5 rounded-md text-center">
              <span className="text-text-muted text-xs uppercase tracking-wider block mb-1">Electric Range</span>
              <span className="text-2xl font-black text-gold">{car.range ? `${car.range} km` : "N/A"}</span>
            </div>
          </div>

          {/* Specifications Matrix Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading uppercase text-gold">Technical Specifications</h3>
            <div className="border border-white/10 rounded-md overflow-hidden bg-panel text-sm">
              {[
                { label: "Manufacturer Brand", val: car.brand },
                { label: "Model Variant", val: car.model },
                { label: "Year of Manufacture", val: car.year },
                { label: "Mileage Checked", val: `${car.mileage.toLocaleString()} km` },
                { label: "Exterior Finish", val: car.colorExt },
                { label: "Interior Layout", val: car.colorInt },
                { label: "Engine Code / Battery Configuration", val: car.fuel === "ELECTRIC" ? "Dual-Motor AWD" : "Twin-Turbocharged V8" },
                { label: "Torque Specs", val: car.torque ? `${car.torque} Nm` : "N/A" }
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-2 p-4 border-b border-white/5 ${idx % 2 === 0 ? "bg-white/2" : ""}`}>
                  <span className="text-text-muted">{row.label}</span>
                  <span className="font-semibold text-white">{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description Narrative */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading uppercase text-gold">Description</h3>
            <p className="text-text-muted leading-relaxed text-sm bg-panel border border-white/5 p-6 rounded-md">
              {car.description}
            </p>
          </div>
        </div>

        {/* Right: Sticky Inquiry Form */}
        <aside className="h-fit lg:sticky lg:top-[120px] bg-panel border border-white/10 rounded-md p-6 shadow-2xl space-y-6">
          <h3 className="text-xl font-bold font-heading uppercase text-gold border-b border-white/10 pb-3">
            Inquire About Car
          </h3>

          {isSubmitted ? (
            <div className="bg-gold/10 border border-gold/30 rounded p-6 text-center space-y-4">
              <span className="text-3xl">✓</span>
              <h4 className="text-gold font-bold">Inquiry Sent Successfully!</h4>
              <p className="text-xs text-text-muted">Alamin Sarkinmota or an assigned platform broker will contact you shortly.</p>
              <a
                href="/member/dashboard"
                className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider bg-gold text-black px-6 py-2 rounded"
              >
                Go to Member Garage
              </a>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-text-muted uppercase">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aliyu Abubakar"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-text-muted uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. aliyu@gmail.com"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-text-muted uppercase">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 08031234567"
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-text-muted uppercase">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-sm focus:border-gold outline-none resize-none"
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-white">
                  <input
                    type="checkbox"
                    checked={swapInterest}
                    onChange={(e) => setSwapInterest(e.target.checked)}
                    className="accent-gold"
                  />
                  <span>I want to swap my current vehicle</span>
                </label>

                <label className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-white">
                  <input
                    type="checkbox"
                    checked={financeInterest}
                    onChange={(e) => setFinanceInterest(e.target.checked)}
                    className="accent-gold"
                  />
                  <span>I want a financing option</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-gold text-black font-semibold text-sm uppercase tracking-widest rounded hover:bg-gold-glow transition-all mt-4"
              >
                {submitting ? "Submitting Request..." : "Request Call-Back"}
              </button>
            </form>
          )}
        </aside>
      </div>
    </div>
  );
}
