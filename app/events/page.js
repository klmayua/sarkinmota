"use client";

import { useState } from "react";
import Image from "next/image";

const initialEvents = [
  {
    id: "e1",
    title: "Autofest Abuja 2026",
    slug: "autofest",
    date: "December 12th & 13th, 2026",
    location: "Abuja Paddock Center, CBD",
    description: "Nigeria's biggest supercar exhibition, featuring drift championships, exhaust rev battles, drag races, and premium dealer showrooms.",
    img: "/static/carousel/mercedes-amg-gle-63.jpg",
    status: "UPCOMING",
    type: "Expo & Drift Championship",
    featured: true
  },
  {
    id: "e2",
    title: "Lagos Luxury Rally",
    slug: "lagos-rally",
    date: "July 24th, 2026",
    location: "Victoria Island to Epe Expressway",
    description: "An exclusive long-distance convoy run for premium supercar owners. Complete with VIP networking lunches and yacht cruise dinner.",
    img: "/static/carousel/R8.png",
    status: "UPCOMING",
    type: "Convoy Rally",
    featured: false
  },
  {
    id: "e3",
    title: "Abuja Drag Racing Championship",
    slug: "drag-championship",
    date: "September 5th, 2026",
    location: "Abuja Airport Road Runway Course",
    description: "Quarter-mile head-to-head racing battles. Witness high-horsepower V8s, V10s, and high-performance EVs compete for the title.",
    img: "/static/carousel/xaiomi-yu7-green.png",
    status: "UPCOMING",
    type: "Drag Racing",
    featured: false
  },
  {
    id: "e4",
    title: "Sarkin Mota Track Day",
    slug: "track-day",
    date: "April 18th, 2026",
    location: "Abuja Paddock Center",
    description: "Open track event for verified members. Professional coaching, telemetry tracking, and performance testing under secure conditions.",
    img: "/static/carousel/xaiomi-yu7-blue.png",
    status: "PAST",
    type: "Track Run",
    featured: false
  }
];

export default function EventsDirectory() {
  const [filter, setFilter] = useState("ALL");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  const filteredEvents = initialEvents.filter((event) => {
    if (filter === "ALL") return true;
    return event.status === filter;
  });

  const handleSendInquiry = (e) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    setInquirySent(true);
    console.log("EVENT PARTNERSHIP INQUIRY:", { inquiryName, inquiryEmail, inquiryMessage });
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Events</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-6 mb-12 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-wide">Automotive Events</h1>
          <p className="text-sm text-text-muted mt-2">Experience the high-octane pulse of Nigeria's luxury car culture.</p>
        </div>

        {/* Dynamic Filters */}
        <div className="flex gap-2 bg-panel p-1 rounded border border-white/5 text-xs font-semibold uppercase tracking-wider">
          {["ALL", "UPCOMING", "PAST"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded transition-all ${
                filter === f
                  ? "bg-gold text-black"
                  : "text-text-muted hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Event Card */}
      {filter !== "PAST" && (
        <div className="bg-panel border border-gold/30 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] mb-12 shadow-2xl">
          <div className="relative aspect-video lg:aspect-auto w-full bg-black">
            <Image
              src="/static/carousel/mercedes-amg-gle-63.jpg"
              alt="Autofest Abuja 2026"
              fill
              className="object-cover object-bottom"
            />
            <div className="absolute top-3 left-3 bg-gold text-black text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
              Featured Event
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs text-gold uppercase font-bold tracking-widest">DRIFT SHOW & EXPO</span>
              <h2 className="text-2xl md:text-3xl font-black font-heading uppercase tracking-wide mt-2">AUTOFEST ABUJA 2026</h2>
              <p className="text-xs text-text-muted mt-1">🗓 December 12th & 13th, 2026 • Abuja Paddock Center, CBD</p>
              <p className="text-sm text-text-muted mt-4 leading-relaxed">
                Prepare for Nigeria's largest luxury automotive and supercar expo. Drift showdowns, exotic vehicle reveals, and paddock networking with Abuja's supercar owners.
              </p>
            </div>
            <div>
              <a
                href="/events/autofest"
                className="inline-block w-full sm:w-auto text-center px-8 py-3.5 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-gold-glow transition-all"
              >
                Book Tickets & Passes
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Events Grid */}
      <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-6">More Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            className="bg-panel border border-white/10 rounded-md overflow-hidden flex flex-col justify-between shadow-xl hover:border-gold/30 transition-all"
          >
            <div className="relative aspect-video w-full bg-black">
              <Image
                src={evt.img}
                alt={evt.title}
                fill
                className="object-cover object-bottom"
              />
              <div className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ${
                evt.status === "UPCOMING" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-white/10 text-text-muted"
              }`}>
                {evt.status}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-gold uppercase tracking-widest font-bold">{evt.type}</span>
                <h4 className="text-base font-bold uppercase mt-1 tracking-tight">{evt.title}</h4>
                <p className="text-[11px] text-text-muted mt-1">📍 {evt.location}</p>
                <p className="text-[11px] text-gold font-semibold mt-1">🗓 {evt.date}</p>
                <p className="text-xs text-text-muted leading-relaxed mt-3">{evt.description}</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                {evt.slug === "autofest" ? (
                  <a
                    href="/events/autofest"
                    className="block text-center w-full py-2.5 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-semibold tracking-wider rounded transition-all"
                  >
                    View Details & Tickets
                  </a>
                ) : (
                  <button
                    disabled
                    className="block text-center w-full py-2.5 bg-white/5 border border-white/10 text-text-muted text-xs uppercase font-semibold tracking-wider rounded"
                  >
                    {evt.status === "PAST" ? "Closed Event" : "Bookings Open Soon"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sponsorship Inquiry Form */}
      <div className="bg-panel border border-white/10 rounded-md p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold font-heading uppercase tracking-wide text-gold text-center">
          Partner / Sponsor An Event
        </h3>
        <p className="text-xs text-text-muted text-center mt-2 max-w-md mx-auto">
          Secure branding rights, exhibit booths, or premium VIP slots at upcoming supercar shows.
        </p>

        {inquirySent ? (
          <div className="bg-gold/10 border border-gold/30 rounded p-6 text-center mt-8 space-y-2">
            <span className="text-xl">✉️</span>
            <h4 className="text-gold font-bold uppercase">Inquiry Received</h4>
            <p className="text-xs text-text-muted">Our event operations manager will review your submission and contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSendInquiry} className="space-y-4 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] text-text-muted uppercase tracking-wider block">Company or Contact Name</label>
                <input
                  type="text"
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="e.g. Al-Mansoor Enterprises"
                  className="w-full bg-black border border-white/10 rounded px-3.5 py-2.5 text-xs focus:border-gold outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-text-muted uppercase tracking-wider block">Email Address</label>
                <input
                  type="email"
                  required
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  placeholder="e.g. sponsor@almansoor.ng"
                  className="w-full bg-black border border-white/10 rounded px-3.5 py-2.5 text-xs focus:border-gold outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-text-muted uppercase tracking-wider block">Partnership Interests / Message</label>
              <textarea
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                placeholder="Tell us about your sponsorship ideas or event spacing requests..."
                rows={3}
                className="w-full bg-black border border-white/10 rounded px-3.5 py-2.5 text-xs focus:border-gold outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gold text-black hover:bg-gold-glow text-xs uppercase font-bold tracking-widest rounded transition-all mt-2"
            >
              Submit Sponsor Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
